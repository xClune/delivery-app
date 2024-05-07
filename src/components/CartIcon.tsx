import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="flex flex-row items-center gap-2">
      <ShoppingCartIcon className="w-7" />
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
