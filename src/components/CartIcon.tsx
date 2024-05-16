"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "@/../utils/store";

const CartIcon = () => {
  const { totalItems } = useCartStore();
  return (
    <Link href={"/cart"} className="flex flex-row items-center gap-2">
      <ShoppingCartIcon className="w-7" />
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
