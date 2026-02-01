"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";

export const StripePaymentCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: process.env.NEXT_PUBLIC_APP_URL!,
      },
    });

    if (error) {
      setError(error.message ?? "Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div className="rounded-3xl border-4 border-lime-300 bg-[#0da84a] px-6 py-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Secure Payment
          </h2>
          <p className="mt-2 text-sm font-semibold text-white/90">
            Complete your contribution securely through Stripe.
          </p>
        </div>

        {/* Payment Card */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-3xl border-4 border-lime-300 bg-lime-100 p-6 shadow-sm sm:p-8"
        >
          {/* Stripe Element */}
          <div className="rounded-2xl bg-white p-4">
            <PaymentElement
              options={{
                layout: "tabs",
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <p className="mt-4 rounded-xl bg-red-100 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!stripe || loading}
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] px-6 py-4 text-lg font-extrabold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Processing…" : "Complete Payment"}
          </button>

          {/* Footer note */}
          <p className="mt-4 text-center text-xs font-semibold text-green-900/70">
            Secure checkout powered by Stripe · Contributions are not
            tax-deductible
          </p>
        </form>
      </div>
    </section>
  );
};
