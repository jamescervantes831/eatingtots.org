type RouteBodyType = {
  name: string;
  email: string;
  amount: string;
  message: string;
  subscribe: boolean;
};
export const createPaymentIntentService = async (body: RouteBodyType) => {
  const res = await fetch(`/api/stripe/createPaymentIntent`, {
    method: "POST",
    cache: "no-store",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...body }),
  });
  return res.json();
};
