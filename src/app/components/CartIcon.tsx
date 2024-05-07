import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const CartIcon = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <ShoppingCartIcon className="w-7" />
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
