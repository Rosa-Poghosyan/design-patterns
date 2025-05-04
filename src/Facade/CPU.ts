export default class CPU {
    freeze(): void {
        console.log('CPU freezing...');
    }

    execute(): void {
        console.log("CPU executing program...");
    }

    shutDown(): void {
        console.log("CPU shutting down...");
    }
}