interface PaymentProcessor {
  processPayment(amount: number): string;
}

class PayPal {
  public sendPayment(amount: number): string {
    return `Paid ${amount} using PayPal`;
  }
}

class Stripe {
  public makePayment(amount: number): string {
    return `Paid ${amount} using Stripe`;
  }
}

class PayPalAdapter implements PaymentProcessor {
  private paypal: PayPal;

  constructor(paypal: PayPal) {
    this.paypal = paypal;
  }

  public processPayment(amount: number): string {
    return this.paypal.sendPayment(amount);
  }
}

class StripeAdapter implements PaymentProcessor {
  private stripe: Stripe;

  constructor(stripe: Stripe) {
    this.stripe = stripe;
  }

  public processPayment(amount: number): string {
    return this.stripe.makePayment(amount);
  }
}

export { PaymentProcessor, PayPal, Stripe, PayPalAdapter, StripeAdapter };
