'use client';
import React, { useState } from 'react';
import { Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
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
                    <p className="font-bold text-inherit">Hack Club</p>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop menu items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/#home" className="text-foreground">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/Events" className="text-foreground">
                        Events
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#Synapse" className="text-amber-600 font-bold">
                        Waffle
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#socials" className="text-foreground">
                        Socials
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/Team" className="text-foreground">
                        Team
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Contact link on the right */}
            <NavbarContent justify="end">
                <NavbarItem isActive className="lg:flex">
                    <Link href="/#join" className="text-amber-600">
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Menu items for mobile */}
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link href="/#home" className="text-foreground" onClick={() => setMenu(false)}>
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/Events" className="text-foreground" onClick={() => setMenu(false)}>
                        Events
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#Synapse" className="text-amber-600" onClick={() => setMenu(false)}>
                        Synapse
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/#socials" className="text-foreground" onClick={() => setMenu(false)}>
                        Socials
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/Team" className="text-foreground" onClick={() => setMenu(false)}>
                        Team
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}