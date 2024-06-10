"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "light" ? (
    <Button
      aria-label="Dark Theme"
      isIconOnly
      variant="light"
      onClick={() => setTheme("dark")}
    >
      <TbSun className="cursor-pointer text-foreground" size={20} />
    </Button>
  ) : (
    <Button
      aria-label="Light Theme"
      isIconOnly
      variant="light"
      onClick={() => setTheme("light")}
    >
      <TbMoon className="cursor-pointer text-foreground" size={20} />
    </Button>
  );
}
