"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Shimmer from "./ui/shimmer";
import {
    HyperTextAbout,
    HyperTextEvents,
    HyperTextGallery,
    HyperTextHome,
    HyperTextProjects,
    HyperTextTeam,
} from "./landingPage/HyperTextDemo";

export default function Navbar() {
    const pathname = usePathname();

    // Define navigation items
    const navItems = [
        { path: "/", label: <HyperTextHome /> },
        { path: "/team", label: <HyperTextTeam /> },
        { path: "/events", label: <HyperTextEvents /> },
        { path: "/projects", label: <HyperTextProjects /> },
        { path: "/gallery", label: <HyperTextGallery /> },
        { path: "/about", label: <HyperTextAbout /> },
    ];

    return (
        <nav className="flex justify-around items-center text-[0.7rem] md:mt-2 pl-2 md:pl-5 md:text-xl">
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/Hero/logo.jpg"
                    alt="Logo"
                    width={130}
                    height={130}
                    className="object-contain"
                />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
                <div className="flex justify-center text-white space-x-2 md:space-x-10">
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <div
                                className={`relative  border rounded-md transition-all duration-300 cursor-pointer ${
                                    pathname === item.path
                                        ? "border-blue-500 text-blue-500 shimmer-animation"
                                        : "border-gray-300 text-gray-400 hover:text-white hover:border-white"
                                }`}
                            >
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Shimmer Button */}
            <div className="mr-[5%]">
                <Link href="/pages/results">
                    <Shimmer />
                </Link>
            </div>
        </nav>
    );
}
