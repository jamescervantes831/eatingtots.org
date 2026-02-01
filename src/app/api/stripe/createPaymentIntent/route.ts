import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { log } from "@/library/logger";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  const { amount, email, name, message, subscribe } = await req.json();
  const stripeAmount = amount * 100;

  try {
    log("info", "Creating payment Intent");
    let customer;

    customer = await stripe.customers.search({
      query: `email:"${email}"`,
      limit: 1,
    });
    if (!customer.data.length) {
      customer = await stripe.customers.create({
        email,
        name,
      });
    } else {
      customer = customer.data[0];
    }

    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      receipt_email: customer.email!,
      amount: stripeAmount,
      currency: "usd",
      payment_method_types: ["card", "link"],
    });

    log("info", "Payment Intent Created");
    return NextResponse.json({
      data: {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        amount: paymentIntent.amount,
      },
      status: 200,
      statusText: "Success",
    });
  } catch (err) {
    log("info", "Payment Intent was not Created", { err });

    return NextResponse.json({ data: {}, status: 500, statusText: "Failure" });
  }
}
