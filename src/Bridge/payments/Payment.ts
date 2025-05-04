import IPaymentProcessor from "../processors/IPaymentProcessor";

export default abstract class Payment {
    constructor(protected processor: IPaymentProcessor) {}

    abstract pay(amount: number): void;
}