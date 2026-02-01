"use client";

import { createPaymentIntentService } from "@/services/paymentIntentServices";
import { useState, Dispatch, SetStateAction, useRef, useEffect } from "react";

type Props = {
  setStep: Dispatch<SetStateAction<"user" | "payment">>;
  setStripeClientSecret: Dispatch<SetStateAction<string>>;
  isDonationLink?: boolean;
};

type SupportFormValues = {
  name: string;
  email: string;
  amount: string;
  message: string;
  subscribe: boolean;
};

type FieldErrors = Partial<
  Record<keyof Pick<SupportFormValues, "name" | "email" | "amount">, string>
>;

const isValidEmail = (email: string) => {
  // practical email validation (not perfect, but solid for UI)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
};

const normalizeAmount = (raw: string) => {
  const digitsOnly = raw.replace(/[^\d]/g, "");

  if (!digitsOnly) return "1";

  const num = Number(digitsOnly);

  if (!Number.isFinite(num) || num < 1) return "1";

  return String(num);
};

export const UserForm = ({
  setStep,
  setStripeClientSecret,
  isDonationLink,
}: Props) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const [values, setValues] = useState<SupportFormValues>({
    name: "",
    email: "",
    amount: "25",
    message: "",
    subscribe: true,
  });

  const [errors, setErrors] = useState<FieldErrors>({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const update = <K extends keyof SupportFormValues>(
    key: K,
    val: SupportFormValues[K],
  ) => {
    setValues((v) => ({ ...v, [key]: val }));

    // clear error as user fixes the field
    if (key === "name" || key === "email" || key === "amount") {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const validate = (v: SupportFormValues): FieldErrors => {
    const next: FieldErrors = {};

    // name required
    if (!v.name.trim()) next.name = "Name is required.";

    // email required + valid
    if (!v.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(v.email))
      next.email = "Enter a valid email address.";

    // amount >= 1
    const amountNum = Number(v.amount);
    if (!v.amount.trim()) next.amount = "Amount is required.";
    else if (!Number.isFinite(amountNum))
      next.amount = "Amount must be a number.";
    else if (amountNum < 1) next.amount = "Amount must be $1 or more.";

    return next;
  };

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // client validation first
    const nextErrors = validate(values);
    if (nextErrors.name || nextErrors.email || nextErrors.amount) {
      setErrors(nextErrors);
      setStatus("idle");

      // bring the user to the form (and to first invalid field)
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    const normalizedAmount = normalizeAmount(values.amount);

    setStatus("submitting");

    try {
      const res = await createPaymentIntentService({
        ...values,
        // optional: normalize whitespace
        name: values.name.trim(),
        email: values.email.trim(),
        amount: normalizedAmount, // normalize
      });

      if (res.statusText === "Success") {
        setStripeClientSecret(res.data.clientSecret);
        setStep("payment");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const suggested = ["10", "25", "50", "100"];

  useEffect(() => {
    if (isDonationLink) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      containerRef.current?.focus();
    }
  }, [isDonationLink]);

  const inputBase =
    "w-full rounded-2xl border-2 bg-white px-4 py-3 text-green-900 outline-none transition focus:ring-4";
  const okBorder =
    "border-green-200 focus:border-green-500 focus:ring-green-200";
  const errBorder = "border-red-400 focus:border-red-500 focus:ring-red-200";

  return (
    <section
      ref={containerRef}
      tabIndex={-1}
      className="w-full focus:outline-none"
    >
      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Header band */}
        <div className="rounded-3xl border-4 border-lime-300 bg-green-600 px-6 py-7 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Support Eating Tots
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
                Help us support providers, parents, and children—every crumb in
                the way.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-2xl bg-white px-4 py-2 text-center sm:block">
              <div className="text-xs font-bold text-green-700">YUM!</div>
              <div className="text-[10px] font-semibold text-green-700/70">
                Support
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="mt-6 rounded-3xl border-4 border-lime-300 bg-lime-100 p-6 shadow-sm sm:p-8">
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            {/* If any field errors, show a small summary */}
            {(errors.name || errors.email || errors.amount) && (
              <div className="rounded-2xl border-2 border-red-300 bg-white px-4 py-3 text-sm font-semibold text-red-700">
                Please fix the highlighted fields below.
              </div>
            )}

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-bold text-green-900">Name</span>
                <input
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  onBlur={() =>
                    setErrors((p) => ({
                      ...p,
                      ...validate(values),
                      email: p.email,
                      amount: p.amount,
                    }))
                  }
                  placeholder="Your name"
                  className={[
                    inputBase,
                    errors.name ? errBorder : okBorder,
                  ].join(" ")}
                  autoComplete="name"
                  disabled={status === "submitting"}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs font-bold text-red-600">
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="space-y-2">
                <span className="text-sm font-bold text-green-900">Email</span>
                <input
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() =>
                    setErrors((p) => ({
                      ...p,
                      ...validate(values),
                      name: p.name,
                      amount: p.amount,
                    }))
                  }
                  placeholder="you@email.com"
                  className={[
                    inputBase,
                    errors.email ? errBorder : okBorder,
                  ].join(" ")}
                  autoComplete="email"
                  inputMode="email"
                  disabled={status === "submitting"}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-xs font-bold text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </label>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <span className="text-sm font-bold text-green-900">
                  Contribution Amount
                </span>

                <div className="flex flex-wrap gap-2">
                  {suggested.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => update("amount", amt)}
                      className={[
                        "rounded-full border-2 px-4 py-2 text-sm font-extrabold transition",
                        values.amount === amt
                          ? "border-green-700 bg-green-700 text-white"
                          : "border-green-300 bg-white text-green-800 hover:bg-green-50",
                      ].join(" ")}
                      disabled={status === "submitting"}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-2xl border-2 border-green-200 bg-white px-4 py-3 font-extrabold text-green-800">
                  $
                </span>
                <input
                  value={values.amount}
                  onChange={(e) =>
                    update(
                      "amount",
                      e.target.value.replace(/[^\d]/g, "").slice(0, 6),
                    )
                  }
                  onBlur={() =>
                    setErrors((p) => ({
                      ...p,
                      ...validate(values),
                      name: p.name,
                      email: p.email,
                    }))
                  }
                  placeholder="25"
                  className={[
                    inputBase,
                    errors.amount ? errBorder : okBorder,
                  ].join(" ")}
                  inputMode="numeric"
                  disabled={status === "submitting"}
                  aria-invalid={!!errors.amount}
                  aria-describedby={errors.amount ? "amount-error" : undefined}
                />
              </div>

              {errors.amount && (
                <p id="amount-error" className="text-xs font-bold text-red-600">
                  {errors.amount}
                </p>
              )}

              <p className="text-xs font-semibold text-green-900/70">
                Note: Contributions are{" "}
                <span className="font-extrabold">not tax-deductible</span>.
              </p>
            </div>

            {/* Message */}
            <label className="space-y-2">
              <span className="text-sm font-bold text-green-900">
                Message (optional)
              </span>
              <textarea
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Leave a note for the team…"
                rows={4}
                disabled={status === "submitting"}
                className="w-full resize-none rounded-2xl border-2 border-green-200 bg-white px-4 py-3 text-green-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-200"
              />
            </label>

            {/* Subscribe */}
            <label className="flex items-start gap-3 rounded-2xl border-2 border-green-200 bg-white px-4 py-3">
              <input
                type="checkbox"
                checked={values.subscribe}
                onChange={(e) => update("subscribe", e.target.checked)}
                className="mt-1 h-5 w-5 accent-green-700"
                disabled={status === "submitting"}
              />
              <div className="text-sm">
                <div className="font-extrabold text-green-900">
                  Keep me in the loop
                </div>
                <div className="text-green-900/70">
                  Updates about launch, provider resources, and new tools.
                </div>
              </div>
            </label>

            {/* Submit */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-2xl bg-green-700 px-6 py-3 text-base font-extrabold text-white shadow-sm transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting"
                  ? "Processing…"
                  : "Continue to Payment"}
              </button>

              <div className="text-sm font-semibold">
                {status === "success" && (
                  <span className="text-green-800">
                    ✓ Saved — ready for payment step.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-600">
                    Something went wrong. Try again.
                  </span>
                )}
                {status === "idle" && (
                  <span className="text-green-900/70">
                    Secure checkout powered by Stripe.
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Bottom callout */}
        <div className="mt-6 rounded-3xl border-4 border-lime-300 bg-white p-5 text-center shadow-sm">
          <p className="text-sm font-bold text-green-900 sm:text-base">
            A new CACFP sponsor is coming soon 🌟
          </p>
          <p className="mt-1 text-xs font-semibold text-green-900/70 sm:text-sm">
            Join the movement—support home-based providers in the Bronx and
            beyond.
          </p>
        </div>
      </div>
    </section>
  );
};
