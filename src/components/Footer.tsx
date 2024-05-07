import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-0 flex flex-row justify-center items-center md:justify-between text-white px-4 bg-emerald-500 w-full h-10 text-xs">
      <Link href={"/"} className="hidden md:flex">
        KŌV
      </Link>
      <p>© ALL RIGHTS RESERVED KŌV 2024</p>
    </div>
  );
};

export default Footer;
