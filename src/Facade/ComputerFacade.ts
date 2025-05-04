import CPU from "./CPU";
import Memory from "./Memory";
import GPU from "./GPU";
import HardDrive from "./HardDrive";

export default class ComputerFacade  {
    constructor(private cpu: CPU, private memory: Memory, private gpu: GPU, private hardDrive: HardDrive) {}

    startComputer(): void {
        this.cpu.freeze();
        this.memory.load(0, "program");
        this.hardDrive.read(0, 1024);
        this.gpu.initialize();
        this.cpu.execute();
    }

    shutdownComputer():void {
        this.cpu.shutDown();
        this.gpu.shutDown();
        this.memory.clear();
        this.hardDrive.parking();
    }
}