"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Phone,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      {/* Main Navigation Row */}
      <div className="flex items-center justify-between px-4 py-4 container mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            WFood
          </Link>
        </div>

        {/* Hamburger menu on mobile */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Center Search Bar - hidden on small, visible on lg */}
        <div className="hidden lg:block w-[400px]">
          <div className="flex w-full items-center">
            <Input
              type="text"
              className="!text-[18px] py-[20px] rounded-r-none border-purple-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="search anything"
            />
            <Button
              type="submit"
              className="rounded-l-none border-purple-600 border-l-0 py-[20px]"
              variant="outline"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Side - Cart and Phone */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Second Row - visible only on lg */}
      <div className="hidden lg:flex border-t border-purple-600">
        <div className="flex items-center justify-between px-4 py-2 container mx-auto w-full">
          {/* Browse Categories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-[20px] rounded-md flex items-center gap-2 font-medium">
                Browse Categories
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Grocery & Staples</DropdownMenuItem>
              <DropdownMenuItem>Snacks & Packaged Foods</DropdownMenuItem>
              <DropdownMenuItem>Beverages</DropdownMenuItem>
              <DropdownMenuItem>Dairy & Eggs</DropdownMenuItem>
              <DropdownMenuItem>Fruits & Vegetables</DropdownMenuItem>
              <DropdownMenuItem>Meat & Seafood</DropdownMenuItem>
              <DropdownMenuItem>Bakery & Cakes</DropdownMenuItem>
              <DropdownMenuItem>Organic & Health Foods</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Contact Us
            </Link>
          </nav>
          {/* Phone visible on lg */}
          <div className="hidden lg:flex items-center gap-2 text-gray-700">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">01788888966</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-purple-600 shadow-md">
          <div className="p-4 space-y-4">
            <div className="flex w-full items-center">
              <Input
                type="text"
                className="!text-[16px] py-[14px] rounded-r-none border-purple-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="search anything"
              />
              <Button
                type="submit"
                className="rounded-l-none border-purple-600 border-l-0 py-[14px]"
                variant="outline"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-between">
                  Browse Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem>Grocery & Staples</DropdownMenuItem>
                <DropdownMenuItem>Snacks & Packaged Foods</DropdownMenuItem>
                <DropdownMenuItem>Beverages</DropdownMenuItem>
                <DropdownMenuItem>Dairy & Eggs</DropdownMenuItem>
                <DropdownMenuItem>Fruits & Vegetables</DropdownMenuItem>
                <DropdownMenuItem>Meat & Seafood</DropdownMenuItem>
                <DropdownMenuItem>Bakery & Cakes</DropdownMenuItem>
                <DropdownMenuItem>Organic & Health Foods</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center gap-2 text-gray-700 mt-4">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">01788888966</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
