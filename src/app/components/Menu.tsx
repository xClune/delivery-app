"use client";

import React from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Menu", path: "/menu" },
  { id: 3, title: "Working Hours", path: "/" },
  { id: 4, title: "Contact", path: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   create temporary condition for design
  const user = false;
  return (
    <div>
      {!open ? (
        <Bars3Icon
          className="w-8 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <XCircleIcon
          className="w-8 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Menu to display on open */}
      {open && (
        <div className="bg-emerald-400 border-b-2 border-emerald-600 absolute left-0 top-26 flex flex-col gap-6 text-white text-2xl w-full h-[calc(100vh-6rem)] items-center justify-center z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.path} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
