import { PayPal, Stripe, PayPalAdapter, StripeAdapter } from "./Adapter";

describe("Adapter Pattern", () => {
  it("should process payments using different processors via adapters", () => {
    const paypal = new PayPal();
    const stripe = new Stripe();

    const paypalAdapter = new PayPalAdapter(paypal);
    const stripeAdapter = new StripeAdapter(stripe);

    expect(paypalAdapter.processPayment(100)).toBe("Paid 100 using PayPal");
    expect(stripeAdapter.processPayment(200)).toBe("Paid 200 using Stripe");
  });
});
