import IPaymentService from "./IPaymentService";
import RealPaymentService from "./RealPaymentService";
import User from "./User";

export default class PaymentServiceProxy implements IPaymentService {
    private paymentService: RealPaymentService = new RealPaymentService();
    constructor(private user: User) {}

    public makePayment(amount: number): void {
        this.paymentService.makePayment(amount);
    }
    public refundPayment(amount: number): void {
        if(this.hasAccess()) {
            this.paymentService.refundPayment(amount);
        } else {
            console.log(`Access denied: ${this.user.username} is not authorized to refund.`);
        }
    }

    private hasAccess(): boolean {
        return this.user.role === "admin";
    }
}