import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import { createClient } from "@/lib/supabase/server";
import { KeyRound } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import SignOutButton from "./sign-out-button";
import Avatar from "./avatar";
import BackButton from "./back-button";

const PageHeader = async ({ className }) => {
  const theme = useServerDarkMode();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <div className="flex items-center">
        <BackButton />
        <Link
          href="/dashboard"
          className="text-xl hover:underline underline-offset-8 decoration-2"
        >
          Finance App
        </Link>
      </div>

      <div className="flex items-center">
        <DarkModeToggle defaultMode={theme} />

        {user && (
          <>
            <Link
              href="/dashboard/settings"
              className={`${sizes.sm} ${variants.ghost} flex items-center space-x-1`}
            >
              <Avatar />
              <span>
                {user.user_metadata?.fullName
                  ? user.user_metadata?.fullName
                  : user.email}
              </span>
            </Link>

            <SignOutButton />
          </>
        )}

        {!user && (
          <Link href="/login">
            <KeyRound className={`size-10 ${variants.ghost} ${sizes.xs}`} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
