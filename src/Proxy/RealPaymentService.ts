import IPaymentService from "./IPaymentService";

export default class RealPaymentService implements IPaymentService {
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} made successfully.`);
    }

    refundPayment(amount: number): void {
        console.log(`Refund of ${amount} processed successfully.`);
    }
}