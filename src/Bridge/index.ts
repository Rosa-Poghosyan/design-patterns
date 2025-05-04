import StripeProcessor from "./processors/StripeProcessor";
import PayPalProcessor from "./processors/PayPalProcessor";
import CryptoWalletProcessor from "./processors/CryptoWalletProcessor";
import BasicPayment from "./payments/BasicPayment";
import SubscriptionPayment from "./payments/SubscriptionPayment";

const stripeProcessor = new StripeProcessor();
const payPalProcessor = new PayPalProcessor();
const cryptoProcessor = new CryptoWalletProcessor();

const oneTimePayment = new BasicPayment(stripeProcessor);
oneTimePayment.pay(49.99);
const monthlySubscription = new SubscriptionPayment(payPalProcessor);
monthlySubscription.pay(9.99);

const cryptoOneTime = new BasicPayment(cryptoProcessor);
cryptoOneTime.pay(99.99);
