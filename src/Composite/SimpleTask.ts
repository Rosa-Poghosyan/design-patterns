import TaskItem from "./TaskItem";

export default class SimpleTask implements TaskItem {
    constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    display(indent: string): void {
        console.log(indent + '- ' + this.getName());
    }
}