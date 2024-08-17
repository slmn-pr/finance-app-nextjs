"use client";

import Input from "@/components/forms/input";
import SubmitButton from "@/components/forms/submit-button";
import { login } from "@/lib/actions";
import React from "react";

import { useFormState } from "react-dom";

const initialState = {
  message: "",
  error: false,
};

const LoginForm = () => {
  const [state, formAction] = useFormState(login, initialState);
  return (
    <form action={formAction} className="space-y-2">
      <Input
        type="email"
        placeholder="name@example.com"
        name="email"
        required
      />

      <SubmitButton type="submit" size="sm" className="w-full ">
        <span className="font-medium">Sign in with email</span>
      </SubmitButton>

      <p
        className={`${
          state.error ? "text-red-500" : "text-green-500"
        } text-sm text-center`}
      >
        {state?.message}
      </p>
    </form>
  );
};

export default LoginForm;
