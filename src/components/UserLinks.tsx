"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {" "}
      {status === "authenticated" ? (
        <div>
          <Link href={"/orders"}>Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <div>
          <Link href={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
