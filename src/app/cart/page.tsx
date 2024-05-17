"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useCartStore } from "@/../utils/store";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart, resetCart } =
    useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-emerald-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x {item.quantity}
              </h1>
              <span>{item.optionsTitle}</span>
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => {
                removeFromCart(item);
              }}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="bg-emerald-500 text-white p-3 rounded-md w-1/2 self-center">
          CHECKOUT
        </button>
        <span
          className="text-xs text-center cursor-pointer"
          onClick={resetCart}
        >
          clear cart
        </span>
      </div>
    </div>
  );
};

export default CartPage;
