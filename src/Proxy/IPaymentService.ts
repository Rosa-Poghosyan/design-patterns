export default interface IPaymentService {
    makePayment(amount: number): void
    refundPayment(amount: number): void
}