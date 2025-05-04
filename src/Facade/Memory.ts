export default class Memory {
    load(address: number, data: string): void {
        console.log(`Memory loading ${data} at address ${address}`);
    }
    clear(): void {
        console.log("Memory clearing...");
    }
}