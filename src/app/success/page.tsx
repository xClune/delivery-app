"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  // will return the value of the query parameter "payment_intent" (everything after the
  // "payment_intent?=" in the URL)
  const payment_intent = searchParams.get("payment_intent");

  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        setTimeout(() => {
          router.push("/orders");
        }, 5000);
      } catch (error) {
        console.error(error);
        router.push("/");
      }
    };
    makeRequest();
  }, [payment_intent, router]);

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Processing your payment. Please wait...</p>
    </div>
  );
};

export default SuccessPage;
