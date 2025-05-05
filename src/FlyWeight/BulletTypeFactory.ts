import BulletType from "./BulletType";
import ConcreteBulletType from "./ConcreteBulletType";

export default class BulletTypeFactory {
    bullets: Map<string, BulletType> = new Map();

    getBulletType(sprite: string, damage: number): BulletType {
        const hash = sprite + damage;
        if (this.bullets.has(hash)) {
            return this.bullets.get(hash)!;
        } else {
            const bulletType = new ConcreteBulletType(sprite, damage);
            this.bullets.set(hash, bulletType);
            return bulletType;
        }
    }
}