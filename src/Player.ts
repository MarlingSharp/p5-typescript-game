import p5 from "p5";
import GameObject from "./GameObject";

class Player extends GameObject {
    static STEERING_FORCE: number = 0.05;

    radius: number;

    constructor(s: p5) {
        super(s);

        this.radius = 50;
    }

    update() {
        const { s } = this;

        if (s.keyIsDown(s.DOWN_ARROW)) {
            this.applyForce(s.createVector(0, Player.STEERING_FORCE))
        } else if (s.keyIsDown(s.UP_ARROW)) {
            this.applyForce(s.createVector(0, -Player.STEERING_FORCE))
        }
        if (s.keyIsDown(s.LEFT_ARROW)) {
            this.applyForce(s.createVector(-Player.STEERING_FORCE, 0))
        } else if (s.keyIsDown(s.RIGHT_ARROW)) {
            this.applyForce(s.createVector(Player.STEERING_FORCE, 0))
        }

        super.update();
    }

    draw() {
        this.s.push();

        this.s.translate(this.position);

        this.s.fill('purple')
        this.s.ellipse(0, 0, this.radius);

        this.s.pop();
    }
}

export default Player;