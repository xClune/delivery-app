"use client";

import React from "react";
import { DocumentMinusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user?.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/menu");
      toast.success("Product has been deleted.");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  return (
    <button
      className="flex flex-row bg-emerald-400 text-white py-2 px-4 rounded-full absolute top-4 right-4 hover:bg-orange-700"
      onClick={handleDelete}
    >
      <DocumentMinusIcon className="h-6 w-6 mr-2" />
      <span>Delete Product</span>
    </button>
  );
};

export default DeleteButton;
