import Payment from "./Payment";


export default class SubscriptionPayment extends Payment {
    pay(amount: number): void {
        console.log("Processing a subscription payment...");
        this.processor.processPayment(amount);
        console.log("Subscription will automatically renew monthly.");
   }

}