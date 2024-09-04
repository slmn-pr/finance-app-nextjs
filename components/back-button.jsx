"use client";

import { ChevronLeft } from "lucide-react";
import Button from "./button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" size="sm" onClick={() => router.back()} >
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
