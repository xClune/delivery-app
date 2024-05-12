import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center px-3 pt-1 border-b-2 border-emerald-500 text-emerald-600 md:h-14">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 font-bold ">
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* Logo */}
      <Link href={"/"} className="text-2xl font-bold">
        KŌV PIZZA
      </Link>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 font-bold ">
        <UserLinks />
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
