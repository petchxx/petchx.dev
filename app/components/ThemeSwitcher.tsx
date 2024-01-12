"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (

    theme === "light" ? (
      <IoMdMoon
        className="cursor-pointer"
        size={25}
        onClick={
          () => setTheme("dark")
        } />
    ) : (
      < IoMdSunny className="cursor-pointer"
        size={25} onClick={
          () => setTheme("light")
        } />)

  )
};