export default interface TaskItem {
    getName(): string
    display(indent: string): void
}