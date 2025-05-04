import TaskItem from "./TaskItem";

export default class CompositeTask implements TaskItem {
    private tasks: TaskItem[] = [];
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }
    add(task: TaskItem): void {
        this.tasks.push(task);
    }

    display(indent: string) : void {
        console.log(indent + '+ ' + this.getName());
        for(let task of this.tasks) {
            task.display('  ' + indent);
        }
    }

    getTotalTasksCount(): number {
        let count  = 0;
        for(let task of this.tasks) {
            if (task instanceof CompositeTask) {
                count += task.getTotalTasksCount();
            } else {
                ++count;
            }
        }
        return count;
    }
}