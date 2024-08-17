import { sizes, variants } from "@/lib/variants";
import { StepBack } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main>
      <div className="absolute left-0 top-8">
        <Link
          href="/"
          className={`${variants.ghost} ${sizes.base} flex items-center space-x-2 texx-sm`}
        >
          <StepBack className="size-4" />
          <span>Back</span>
        </Link>
      </div>

      <div className="mt-8">{children}</div>
    </main>
  );
};

export default AuthLayout;
