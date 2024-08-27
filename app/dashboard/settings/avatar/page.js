"use client";

import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { uploadAvatar } from "@/lib/actions";

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
        {state.error && <AlertError message={state.message} />}

        {!state.error && state.message.length > 0 && (
          <AlertSuccess message="Success ✅" />
        )}

        <Input type="file" name="file" id="file" />
        <SubmitButton>Upload avatar</SubmitButton>
      </form>
    </>
  );
};

export default Page;
