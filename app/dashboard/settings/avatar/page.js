"use client";

import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { uploadAvatar } from "@/lib/actions";

const Page = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-8">Avatar</h1>

      <form className="space-y-4" action={uploadAvatar}>
        <Input type="file" name="file" id="file" />
        <SubmitButton>Upload avatar</SubmitButton>
      </form>
    </>
  );
};

export default Page;
