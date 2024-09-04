"use client";

import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { uploadAvatar } from "@/lib/actions";

import { useFormState } from "react-dom";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ImageIcon, SquareX } from "lucide-react";
import Button from "@/components/button";
import Label from "@/components/forms/label";

const initialState = {
  message: "",
  error: false,
};

const Page = () => {
  const [state, formAction] = useFormState(uploadAvatar, initialState);
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  const handleChangeAvatar = (event) => {
    const target = event.target;
    if (target) {
      setFile(target?.files[0]);
    }
  };

  const handleRemove = () => {
    setFile(null);
    try {
      fileInputRef.current.target.files = null;
      fileInputRef.current.target.value = null;
    } catch (error) {
      error;
    }
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-8">Avatar</h1>

      <form className="space-y-4" action={formAction}>
        {state.error && <AlertError message={state.message} />}

        {!state.error && state.message.length > 0 && (
          <AlertSuccess message="Success ✅" />
        )}

        <Label>
          <Input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleChangeAvatar}
          />

          <div className="flex items-center justify-center w-64 h-40 border border-dashed rounded-lg  space-x-2 ">
            {!file && (
              <>
                <ImageIcon />
                <span>Select avatar</span>
              </>
            )}

            {file && (
              <Image
                src={URL.createObjectURL(file)}
                width={250}
                className="object-fill h-auto rounded-lg"
                alt="avatar"
              />
            )}
          </div>
        </Label>


        <div className="flex sapce-x-2">

          <SubmitButton>Upload avatar</SubmitButton>


          {file && (
            <Button
              variant="danger"
              size="sm"
              type="button"
              role="text"
              onClick={handleRemove}
            >
              <SquareX />
            </Button>
          )}
        </div>


        <hr />
      </form>
    </>
  );
};

export default Page;
