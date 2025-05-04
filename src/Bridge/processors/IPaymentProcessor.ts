export default interface IPaymentProcessor {
    processPayment(amount: number): void;
}