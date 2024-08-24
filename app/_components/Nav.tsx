"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import Logo from "./Logo";

export default function Nav({ index }: { index: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="fixed p-2"
    // shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem isActive={index === "home"}>
          <Link
            color={index === "home" ? "primary" : "foreground"}
            href="/"
            className="hover:text-primary cursor-pointer"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "about"}>
          <Link
            color={index === "about" ? "primary" : "foreground"}
            href="/about"
            className="hover:text-primary cursor-pointer"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "projects"}>
          <Link
            color={index === "projects" ? "primary" : "foreground"}
            href="/projects"
            className="hover:text-primary cursor-pointer"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "services"}>
          <Link
            color={index === "services" ? "primary" : "foreground"}
            href="/services"
            className="hover:text-primary cursor-pointer"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "contact"}>
          <Link
            color={index === "contact" ? "primary" : "foreground"}
            href="/contact"
            className="hover:text-primary cursor-pointer"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="gap-2" justify="end">
        <NavbarItem className="">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="flex md:hidden">
          <Button
            as={Link}
            variant="flat"
            color="primary"
            href="https://github.com/petchxx"
            isIconOnly
          >
            <TbBrandGithub size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            href="https://github.com/petchxx"
            color="primary"
            variant="flat"
          >
            <TbBrandGithub size={20} />
            <p>Petchxx</p>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color={index === "home" ? "primary" : "foreground"}
            className="w-full"
            href="/"
            size="lg"
          >
            Home
          </Link>
          <Link
            color={index === "about" ? "primary" : "foreground"}
            className="w-full"
            href="/about"
            size="lg"
          >
            About
          </Link>
          <Link
            color={index === "projects" ? "primary" : "foreground"}
            className="w-full"
            href="/projects"
            size="lg"
          >
            Projects
          </Link>
          <Link
            color={index === "contact" ? "primary" : "foreground"}
            className="w-full"
            href="/contact"
            size="lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
