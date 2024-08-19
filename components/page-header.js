// import React from "react";

import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import { createClient } from "@/lib/supabase/server";
import Button from "./button";
import { CircleUser, KeyRound } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import SignOutButton from "./sign-out-button";

const PageHeader = async ({ className }) => {
  const theme = useServerDarkMode();

  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>

      <div className="flex items-center">
        <DarkModeToggle defaultMode={theme} />

        {user && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1"
            >
              <CircleUser className="size-6" />
              <span>{user.email}</span>
            </Button>

            <SignOutButton />
          </>
        )}

        {!user && (
          <Link href="/login">
            <KeyRound className={`size-10 ${variants.ghost} ${sizes.xs}`} />
          </Link>
        )}

        {/* <div>User drop down</div> */}
      </div>
    </header>
  );
};

export default PageHeader;
