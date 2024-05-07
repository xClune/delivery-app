import React, { useState } from "react";
import Link from "next/link";
import Menu from "@/components/Menu";
import { inter } from "@/fonts";
import CartIcon from "./CartIcon";

const Navbar = () => {
  // temporary condition for design
  const user = false;
  return (
    <div className="flex flex-row w-full justify-between items-center px-3 pt-1 border-b-2 border-emerald-500 text-emerald-600 md:h-14">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 font-bold ">
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* Logo */}
      <Link href={"/"} className="text-2xl font-bold">
        KŌV
      </Link>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 font-bold ">
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
