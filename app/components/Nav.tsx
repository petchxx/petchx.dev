'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Nav({ index }: { index: string }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { theme } = useTheme()

    return (
        <motion.div initial={{
            // "y": "30px",
            "opacity": 0
        }}
            animate={{
                // "y": "0",
                "opacity": 1
            }}
            transition={{
                "type": "tween",
                "duration": 0.2
            }}>
            <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="bg-white dark:bg-black">
                <NavbarContent>
                    <NavbarBrand>
                        <Link href="#">
                            <Image
                                src="/assets/petchx-dark.svg"
                                className="hidden dark:block pointer-events-none"
                                width={120}
                                height={43}
                                alt="Petchx Logo"
                            />
                            <Image
                                src="/assets/petchx-light.svg"
                                className="block dark:hidden pointer-events-none"
                                width={120}
                                height={43}
                                alt="Petchx Logo"
                            /></Link>

                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem isActive={index === 'home'}>
                        <Link color={index === 'home' ? 'primary' : 'foreground'} href="/" className="hover:text-primary cursor-pointer">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={index === 'about'}>
                        <Link color={index === 'about' ? 'primary' : 'foreground'} href="/about" className="hover:text-primary cursor-pointer">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={index === 'projects'}>
                        <Link color={index === 'projects' ? 'primary' : 'foreground'} href="/projects" className="hover:text-primary cursor-pointer">
                            Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={index === 'services'}>
                        <Link color={index === 'services' ? 'primary' : 'foreground'} href="/services" className="hover:text-primary cursor-pointer">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={index === 'contact'}>
                        <Link color={index === 'contact' ? 'primary' : 'foreground'} href="/contact" className="hover:text-primary cursor-pointer">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="">
                        <ThemeSwitcher />
                    </NavbarItem>
                    <NavbarItem className="hidden sm:flex">
                        <Button as={Link} color="primary" href="/contact" variant="flat">
                            Let&rsquo;s Talk
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarMenu>
                    <NavbarMenuItem >
                        <Link color={index === "home" ? "primary" : "foreground"} className="w-full" href="/" size="lg">Home</Link>
                        <Link color={index === "about" ? "primary" : "foreground"} className="w-full" href="/about" size="lg">About</Link>
                        <Link color={index === "projects" ? "primary" : "foreground"} className="w-full" href="/projects" size="lg">Projects</Link>
                        <Link color={index === "services" ? "primary" : "foreground"} className="w-full" href="/services" size="lg">Services</Link>
                        <Link color={index === "contact" ? "primary" : "foreground"} className="w-full" href="/contact" size="lg">Contact</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar >
        </motion.div>
    );
}
