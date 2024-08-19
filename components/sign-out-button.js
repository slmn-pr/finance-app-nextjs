import React from "react";
import SubmitButton from "./forms/submit-button";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions";

const SignOutButton = () => {
  return (
    <form action={signOut}>
      <SubmitButton variant="ghost" size="sm">
        <LogOut className="size-6" />
      </SubmitButton>
    </form>
  );
};

export default SignOutButton;
