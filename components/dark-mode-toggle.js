"use client";

import useDarkMode from "@/hooks/use-dark-mode";
import Button from "./button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultMode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultMode);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" && <Moon className="size-6" />}
      {theme === "dark" && <Sun className="size-6" />}
    </Button>
  );
};

export default DarkModeToggle;
