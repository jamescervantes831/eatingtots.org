"use client";
import React, { ReactNode } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

type Props = {
  children: ReactNode;
  clientSecret: string;
};

export const StripeElementsProvider = ({ children, clientSecret }: Props) => {
  const options = {
    clientSecret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
