export default interface BulletType {
    sprite: string;
    damage: number;
    render(x: number, y: number, direction: number): void
}