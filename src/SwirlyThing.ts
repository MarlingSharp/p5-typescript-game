import p5 from "p5";
import Obstacle from "./Obstacle";

class SwirlyThing extends Obstacle {
    static BLOBS: number = 3;

    phase: number;

    constructor(s: p5, radius: number) {
        super(s, radius);

        this.phase = 0;
        this.velocity.add(s.createVector(s.random(-1, 1), s.random(-1, 1)));
        this.position = s.createVector(s.random(0, s.width), s.random(0, s.height));
    }

    update() {
        super.update();
        this.phase += 0.1;
    }

    draw() {
        const { s } = this;

        s.push();

        s.fill('red');
        s.translate(this.position);

        s.rotate(this.phase);

        for (let i = 0; i < SwirlyThing.BLOBS; i++) {
            s.push();
            s.rotate(s.TWO_PI * i / SwirlyThing.BLOBS)
            s.translate(this.radius * 0.8, 0);
            s.ellipse(0, 0, this.radius / 2);
            s.pop();
        }

        s.pop();
    }
}

export default SwirlyThing;