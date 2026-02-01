// app/donate/success/page.tsx
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import SuccessClient from "@/components/SuccessClient";

export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function DonationSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ payment_intent?: string }>;
}) {
  const { payment_intent } = await searchParams;

  let status: Stripe.PaymentIntent.Status | "missing" | "error" = "missing";

  let donorName: string | null = null;
  let amountFormatted: string | null = null;

  if (payment_intent) {
    try {
      const pi = await stripe.paymentIntents.retrieve(payment_intent);

      status = pi.status;

      // donation amount
      const amountCents = (pi.amount_received ?? pi.amount ?? 0) as number;
      const currency = (pi.currency ?? "usd").toUpperCase();

      amountFormatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(amountCents / 100);

      // donor name (safe via latest_charge)
      donorName = null;

      if (pi.latest_charge) {
        const chargeId =
          typeof pi.latest_charge === "string"
            ? pi.latest_charge
            : pi.latest_charge.id;

        const ch = await stripe.charges.retrieve(chargeId);

        donorName = ch.billing_details?.name?.trim() || null;
      }
    } catch {
      status = "error";
    }
  }

  const succeeded = status === "succeeded";
  const processing = status === "processing" || status === "requires_capture";
  const needsAction =
    status === "requires_action" || status === "requires_confirmation";
  const failed =
    status === "canceled" ||
    status === "requires_payment_method" ||
    status === "error" ||
    status === "missing";

  const shareUrl = process.env.NEXT_PUBLIC_APP_URL!;

  const shareText = succeeded
    ? `I just supported Eating Tots with a ${amountFormatted ?? "donation"} 💚`
    : `Support Eating Tots 💚`;

  return (
    <section className="min-h-screen w-full bg-[#c1ff72] flex flex-col">
      {/* Confetti + Share actions (client) */}
      <SuccessClient
        fireConfetti={succeeded}
        shareUrl={shareUrl}
        shareText={shareText}
      />

      {/* Top band */}
      <div className="h-4 w-full bg-[#0da84a]" />

      <div className="relative flex-1 px-6 md:px-20 py-16 overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/40" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/30" />

        {/* Fruit */}
        <div className="absolute bottom-0 right-10 hidden md:block">
          <Image src="/banana1.png" alt="Banana" width={260} height={260} />
        </div>

        <div className="relative z-10 grid gap-14 lg:grid-cols-2 items-start max-w-[1600px] mx-auto">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 border-4 border-lime-300">
              <span className="text-sm font-extrabold text-[#0da84a]">
                {succeeded
                  ? "SUCCESS"
                  : processing
                    ? "PROCESSING"
                    : needsAction
                      ? "ACTION NEEDED"
                      : "STATUS"}
              </span>
              <span>
                {succeeded
                  ? "🎉"
                  : processing
                    ? "⏳"
                    : needsAction
                      ? "⚠️"
                      : "ℹ️"}
              </span>
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-[#0da84a] leading-tight">
              {succeeded
                ? "Donation Received — Thank You!"
                : processing
                  ? "Your donation is processing…"
                  : needsAction
                    ? "Your donation needs a quick step"
                    : "We couldn’t confirm your donation yet"}
            </h1>

            {/* Amount + Donor */}
            {succeeded && (
              <div className="mt-6 max-w-3xl rounded-3xl border-4 border-lime-300 bg-white p-6 shadow-sm">
                <p className="text-green-900 font-extrabold text-xl">
                  {amountFormatted
                    ? `${amountFormatted} received`
                    : "Donation received"}
                </p>
                <p className="mt-1 text-green-900/80 font-semibold">
                  {donorName
                    ? `Thank you, ${donorName}!`
                    : "Thank you for supporting Eating Tots!"}
                </p>
              </div>
            )}

            <p className="mt-6 text-xl md:text-2xl font-semibold text-green-900 max-w-3xl">
              {succeeded
                ? "Your support helps us uplift home-based child care providers with training, resources, and healthier meals for kids — every crumb in the way. 🍏"
                : processing
                  ? "This can take a moment. Refresh shortly."
                  : needsAction
                    ? "Please try the donation again."
                    : "If you believe you were charged, contact us."}
            </p>

            {/* Action card */}
            <div className="mt-10 rounded-3xl border-4 border-lime-300 bg-white p-8 shadow-sm max-w-3xl">
              <p className="text-lg font-extrabold text-green-900">
                What you can do now
              </p>

              <ul className="mt-4 space-y-3 text-green-900 font-semibold text-lg">
                {succeeded ? (
                  <>
                    <li>✅ Save your confirmation</li>
                    <li>✅ Share Eating Tots</li>
                    <li>✅ Watch for new programs</li>
                  </>
                ) : (
                  <>
                    <li>⏳ Refresh shortly</li>
                    <li>💳 Try again if needed</li>
                    <li>📩 Contact us if charged</li>
                  </>
                )}
              </ul>

              <p className="mt-4 text-xs font-semibold text-green-900/70">
                Secure checkout powered by Stripe · Contributions are not
                tax-deductible
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            <div className="rounded-3xl border-4 border-lime-300 bg-[#0da84a] px-10 py-12 shadow-lg">
              <p className="text-white text-2xl font-extrabold">
                Want to stay involved?
              </p>

              <p className="mt-3 text-white/90 text-lg font-semibold">
                Join our waitlist for CACFP updates and provider resources.
              </p>

              <a
                href="https://forms.gle/Ybe2n32C2cgtsLxb6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] px-8 py-5 text-xl font-extrabold text-black shadow-md transition hover:scale-[1.03]"
              >
                Join Waitlist 🚀
              </a>
            </div>

            <div className="rounded-3xl border-4 border-lime-300 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-5">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] px-8 py-4 text-lg font-extrabold text-black transition hover:opacity-90"
                >
                  Back Home 🏡
                </Link>

                <Link
                  href="/?donation=1"
                  className="inline-flex items-center justify-center rounded-2xl border-4 border-lime-300 bg-lime-100 px-8 py-4 text-lg font-extrabold text-green-900 transition hover:bg-lime-200"
                >
                  {failed ? "Try Donation Again 💚" : "Donate Again 💚"}
                </Link>
              </div>
            </div>

            {/* Share card (UI lives in client component; this is just visual alignment) */}
            <div className="rounded-3xl border-4 border-lime-300 bg-white p-8 shadow-sm">
              <p className="text-green-900 text-xl font-extrabold">
                Share the love 💚
              </p>
              <p className="mt-2 text-green-900/80 font-semibold">
                A quick share helps us reach more providers and families.
              </p>
              {/* Buttons rendered by SuccessClient (fixed top-right on mobile/desktop) */}
              <p className="mt-4 text-xs font-semibold text-green-900/70">
                Use the share buttons at the top-right.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="h-4 w-full bg-[#0da84a]" />
    </section>
  );
}
