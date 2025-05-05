import BulletType from "./BulletType";

export default class  ConcreteBulletType implements BulletType {

    constructor(public sprite: string, public damage: number) {
    }

    render(x: number, y: number, direction: number): void {
        console.log(`Drawing ${this.sprite} bullet at (${x}, ${y}) heading ${direction}° with damage ${this.damage}`);
    }
}