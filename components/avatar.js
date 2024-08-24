import { createClient } from "@/lib/supabase/server";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import React from "react";

const expireTime = 300; // 5 minutes in seconds

const Avatar = async ({ width = 32, height = 32 }) => {
  // - Get user
  // - Signed URL - 5minutes
  // - <Image>, configure
  // - Default

  const supabse = createClient();

  const {
    data: { user },
  } = await supabse.auth.getUser();

  const { data: imageData, error } = await supabse.storage
    .from("avatars")
    .createSignedUrl(user.user_metadata?.avatar, expireTime);

  if (error) {
    return <CircleUser className="size-6" />;
  }

  return (
    <Image
      src={imageData.signedUrl}
      width={width}
      height={height}
      alt="User avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;
