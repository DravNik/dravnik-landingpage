"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/favicon-removebg-preview.png"
            alt="DravNik Logo"
            className="w-12 h-auto"
          />

          <h1 className="text-2xl font-audiowide">DravNik</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 font-audiowide">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-500">
            Shop
          </Link>
          <Link href="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/joinus" className="hover:text-blue-500">
            Join Us
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>

        {/* Dashboard Button */}
        <Button
          variant="destructive"
          onClick={() =>
            (window.location.href = "https://dashboard.helplanes.live/")
          }
        >
          Dashboard
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="font-audiowide md:hidden bg-white shadow-md p-4 absolute top-14 left-0 right-0 flex flex-col items-center space-y-4">
          <Link href="/" className="hover:text-blue-500" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-blue-500"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            href="/pricing"
            className="hover:text-blue-500"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            href="/joinus"
            className="hover:text-blue-500"
            onClick={toggleMenu}
          >
            Join Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
