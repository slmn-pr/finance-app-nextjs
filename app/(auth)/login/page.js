import React from "react";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <div className="mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px] py-40">
      <div className="flex flex-col space-y-8 text-center">
        <h1 className="text-2xl font-bolder">Welcome back</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your email to sign in/create your account. No password is
          required
        </p>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
