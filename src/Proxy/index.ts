import User from "./User";
import PaymentServiceProxy from "./PaymentServiceProxy";

const admin = new User("Alice", "admin");
const regularUser = new User("Bob", "user");

const adminPaymentService = new PaymentServiceProxy(admin);
const userPaymentService = new PaymentServiceProxy(regularUser);

adminPaymentService.makePayment(100);   // OK
adminPaymentService.refundPayment(50);  // OK

userPaymentService.makePayment(30);     // OK
userPaymentService.refundPayment(10);   // Should print "Access Denied"
