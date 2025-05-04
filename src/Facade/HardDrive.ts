export default class HardDrive {
    read(sector: number, size: number): void {
        console.log(`HardDrive reading sector ${sector} (size ${size})`);
    }
    parking(): void {
        console.log("HardDrive parking head...");
    }
}