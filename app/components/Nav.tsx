"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { theme } = useTheme()

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="bg-white dark:bg-black">
            <NavbarContent>

                <NavbarBrand>
                    <Link href="#">
                        <Image
                            src="/assets/petchx-dark.svg"
                            className="hidden dark:block"
                            width={120}
                            height={43}
                            alt="Petchx Logo"
                        />
                        <Image
                            src="/assets/petchx-light.svg"
                            className="block dark:hidden"
                            width={120}
                            height={43}
                            alt="Petchx Logo"
                        /></Link>

                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="#" className="hover:text-primary">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="hover:text-primary">
                        Work
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="hover:text-primary">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="">
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Let's Talk
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
