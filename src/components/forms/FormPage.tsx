"use client";
import { useState } from "react";
import { UserForm } from "./userForm/UserForm";
import { AnimatePresence, motion } from "framer-motion";
import { StripePaymentCard } from "./stripeForm/StripeForm";
import { StripeElementsProvider } from "@/Providers/StripeElementProvider";

export const FormPage = () => {
  const [step, setStep] = useState<"user" | "payment">("user");
  const [stripeClientSecret, setStripeClientSecret] = useState<string>("");
  return (
    <AnimatePresence mode="wait">
      {step === "user" && !stripeClientSecret.length ? (
        <motion.div
          key="review"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mx-auto max-w-3xl px-4 py-10"
        >
          <UserForm
            setStep={setStep}
            setStripeClientSecret={setStripeClientSecret}
          />
        </motion.div>
      ) : (
        <motion.div
          key="payment"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <StripeElementsProvider clientSecret={stripeClientSecret}>
            <StripePaymentCard />
          </StripeElementsProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
