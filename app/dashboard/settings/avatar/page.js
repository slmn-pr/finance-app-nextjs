"use client";

import Alert from "@/components/alert";
import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { uploadAvatar } from "@/lib/actions";
import { Ban, Check } from "lucide-react";

import { useFormState } from "react-dom";

const initialState = {
  message: "",
  error: false,
};

const Page = () => {
  const [state, formAction] = useFormState(uploadAvatar, initialState);
  return (
    <>
      <h1 className="text-xl font-semibold mb-8">Avatar</h1>

      <form className="space-y-4" action={formAction}>
        {state.error && (
          <Alert
            icon={<Ban className="size-4 text-red-500" />}
            title={<span className="text-red-500">Hello</span>}
          >
            {state.message}
          </Alert>
        )}

        {!state.error && state.message.length > 0 && (
          <Alert
            icon={<Check className="size-4 text-green-500" />}
            title={<span className="text-green-500">Hello</span>}
          >
            Success ✅🌠
          </Alert>
        )}

        <Input type="file" name="file" id="file" />
        <SubmitButton>Upload avatar</SubmitButton>
      </form>
    </>
  );
};

export default Page;
