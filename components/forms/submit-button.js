"use client";
import React from "react";
import Button from "../button";
// import { useFormState } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

const SubmitButton = (props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      className={`${props.className} flex space-x-1 justify-center items-center`}
      disabled={pending}
    >
      {pending && <Loader className="animate-spin size-4" />}
      <span>{props.children}</span>
    </Button>
  );
};

export default SubmitButton;
