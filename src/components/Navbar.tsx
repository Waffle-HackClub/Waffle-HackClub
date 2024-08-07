'use client';
import React, { useState } from "react";
import { Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Nav() {
    const [menu, setMenu] = useState(false);
    const router = useRouter();

    return (
        <Navbar
            isBordered
            isBlurred
            position="sticky"
            isMenuOpen={menu}
            onMenuOpenChange={setMenu}
            className="dark"
        >
            {/* Mobile menu toggle */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={menu ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/* Centered brand */}
            <NavbarContent className="flex-grow justify-center sm:justify-start">
                <NavbarBrand className="flex items-center justify-center">
                    <p className="font-bold text-inherit">CONATUS BHARAT</p>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop menu items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/#home">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Blogs">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#Synapse">
                        Wonder
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/#socials">
                        Socials
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Team">
                        Team
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Contact link on the right */}
            <NavbarContent justify="end">
                <NavbarItem isActive className="lg:flex">
                    <Link href="/#join">Contact Us</Link>
                </NavbarItem>
            </NavbarContent>

            {/* Menu items for mobile */}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        onPress={(e) => {
                            setMenu(false);
                            router.push('/#home');
                        }}
                        color="foreground"
                        href="/#home"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        onPress={(e) => {
                            setMenu(false);
                            router.push('/Blogs');
                        }}
                        color="foreground"
                        href="/Blogs"
                    >
                        Blog
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        onPress={(e) => {
                            setMenu(false);
                            router.push('/#Synapse');
                        }}
                    >
                        Synapse
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        onPress={(e) => {
                            setMenu(false);
                            router.push('/#socials');
                        }}
                        color="foreground"
                        href="/#socials"
                    >
                        Socials
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        onPress={(e) => {
                            setMenu(false);
                            router.push('/Team');
                        }}
                        color="foreground"
                        href="/Team"
                    >
                        Team
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
