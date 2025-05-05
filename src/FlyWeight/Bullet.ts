import BulletType from "./BulletType";

export default class Bullet {
    constructor(private x: number, private y: number,
                private direction: number, private speed: number, private bulletType: BulletType) {
    }

    render(): void {
        this.bulletType.render(this.x, this.y, this.direction);
    }

    move(): void {
        this.x += this.speed * Math.cos(this.direction * Math.PI / 180);
        this.y += this.speed * Math.sin(this.direction * Math.PI / 180);
        console.log(`Bullet moved to (${this.x}, ${this.y})`);
    }
}