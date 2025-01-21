import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Water Management</h1>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">Products</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>One</DropdownMenuItem>
                  <DropdownMenuItem>Two</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
          
          {/* Emergency Button */}
          <Button variant="destructive">Emergency</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
