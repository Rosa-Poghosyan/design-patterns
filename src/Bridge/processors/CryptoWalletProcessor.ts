import IPaymentProcessor from "./IPaymentProcessor";

export default class CryptoWalletProcessor implements IPaymentProcessor {
    public processPayment(amount: number): void {
        console.log(`CryptoWallet processed crypto payment of ${amount}...`);
    }
}