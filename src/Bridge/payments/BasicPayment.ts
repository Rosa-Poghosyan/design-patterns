import Payment from "./Payment";

export default class BasicPayment extends Payment {
    pay(amount: number): void {
        console.log("Processing a basic one-time payment...");
        this.processor.processPayment(amount);
    }

}