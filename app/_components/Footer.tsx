import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex p-6 mt-10 flex-col justify-center items-center gap-6">
      <Logo />
      <div className="flex gap-6 ">
        <Link
          color="foreground"
          href="/"
          className="hover:text-primary cursor-pointer"
        >
          Home
        </Link>
        <Link
          color="foreground"
          href="/about"
          className="hover:text-primary cursor-pointer"
        >
          About
        </Link>
        <Link
          color="foreground"
          href="/projects"
          className="hover:text-primary cursor-pointer"
        >
          Projects
        </Link>
        <Link
          color="foreground"
          href="/services"
          className="hover:text-primary cursor-pointer"
        >
          Services
        </Link>
        <Link
          color="foreground"
          href="/contact"
          className="hover:text-primary cursor-pointer"
        >
          Contact
        </Link>
      </div>

      <p className="">
        © All rights reserved by{" "}
        <Link className="text-primary " href={"/"}>
          Petchx
        </Link>
      </p>
    </footer>
  );
}
