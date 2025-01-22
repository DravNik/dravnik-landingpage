"use client"; // Add this line to mark the component as a client component

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // You can use icons from lucide-react for the hamburger menu

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Water Lane</h1>
          </div>

          {/* Hamburger Button for small screens */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center space-x-4`}
          >
            <Button variant="ghost">Home</Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Products ▼</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>One</DropdownMenuItem>
                <DropdownMenuItem>Two</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Contact</Button>
          </div>

          {/* Emergency Button */}
          <Button variant="destructive">Dashboard</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
