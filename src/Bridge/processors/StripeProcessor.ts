import IPaymentProcessor from "./IPaymentProcessor";

export default class StripeProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Stripe processed payment of ${amount}`);
    }
}