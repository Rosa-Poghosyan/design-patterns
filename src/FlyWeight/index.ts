import BulletTypeFactory from "./BulletTypeFactory";
import Bullet from "./Bullet";

const factory = new BulletTypeFactory();

// Firing bullets
const bullets: Bullet[] = [];

bullets.push(new Bullet(0, 0, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(5, 2, 45, 10, factory.getBulletType("YellowLaser", 10)));
bullets.push(new Bullet(10, 5, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(15, 10, 90, 8, factory.getBulletType("RedFireball", 25)));
bullets.push(new Bullet(20, 20, 30, 12, factory.getBulletType("BlueIceShard", 15)));

// Rendering all bullets
for (const bullet of bullets) {
    bullet.render();
}

for (let i: number = 0 ; i < 5; i++) {
    for (const bullet of bullets) {
        bullet.move();
    }
}

for (const bullet of bullets) {
    bullet.render();
}