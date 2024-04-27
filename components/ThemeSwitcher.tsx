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
    <Button isIconOnly variant="light">
      <TbSun
        className="cursor-pointer text-foreground"
        size={25}
        onClick={() => setTheme("dark")}
      />
    </Button>
  ) : (
    <Button isIconOnly variant="light">
      <TbMoon
        className="cursor-pointer text-foreground"
        size={25}
        onClick={() => setTheme("light")}
      />
    </Button>
  );
}

