import CPU from "./CPU";
import Memory from "./Memory";
import HardDrive from "./HardDrive";
import GPU from "./GPU";
import ComputerFacade from "./ComputerFacade";

const cpu = new CPU();
const memory = new Memory();
const hardDrive = new HardDrive();
const gpu = new GPU();
const computer = new ComputerFacade(cpu, memory, gpu, hardDrive);
computer.startComputer();
computer.shutdownComputer();