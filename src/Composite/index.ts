import SimpleTask from "./SimpleTask";
import CompositeTask from "./CompositeTask";

const task1 = new SimpleTask("Buy groceries");
const task2 = new SimpleTask("Call mom");
const task3 = new SimpleTask("Pay bills");

const personalTasks = new CompositeTask("Personal Tasks");
personalTasks.add(task1);
personalTasks.add(task2);
personalTasks.add(task3);

const task4 = new SimpleTask("Fix login bug");
const task5 = new SimpleTask("Deploy new release");

const workTasks = new CompositeTask("Work Tasks");
workTasks.add(task4);
workTasks.add(task5);

const allTasks = new CompositeTask("All Tasks");
allTasks.add(personalTasks);
allTasks.add(workTasks);

allTasks.display("");
console.log("Total tasks count: " + allTasks.getTotalTasksCount());
