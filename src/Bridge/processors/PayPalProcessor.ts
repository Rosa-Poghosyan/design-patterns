import IPaymentProcessor from "./IPaymentProcessor";

export default class PayPalProcessor implements IPaymentProcessor {
    public processPayment(amount: number): void {
        console.log(`PayPal processed payment of ${amount}`);
        console.log("Subscription will automatically renew monthly.");
    }

}