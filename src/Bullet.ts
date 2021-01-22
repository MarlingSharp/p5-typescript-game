import p5 from "p5";
import GameObject from "./GameObject";
import Player from "./Player";

class Bullet extends GameObject {
    static RADIUS: number = 5;
    static FRAMES_LIFECYCLE: number = 100;
    static SPEED: number = 7;

    frames: number;

    constructor(s: p5, player: Player) {
        super(s, Bullet.RADIUS);

        this.velocity = s.createVector(0, Bullet.SPEED);
        this.velocity.rotate(player.heading);
        this.position = player.position.copy();
        this.frames = Bullet.FRAMES_LIFECYCLE;
    }

    isAlive() {
        return this.frames > 0;
    }

    update() {
        super.update();

        this.frames -= 1;
    }

    drawAtOrigin(s: p5) {
        s.ellipse(0, 0, this.radius);
    }
}

export default Bullet;