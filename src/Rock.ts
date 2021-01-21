import p5 from "p5";
import Obstacle from "./Obstacle";

class Rock extends Obstacle {
    constructor(s: p5, radius: number) {
        super(s, radius);

        this.velocity.add(s.createVector(s.random(-1, 1), s.random(-1, 1)));
        this.position = s.createVector(s.random(0, s.width), s.random(0, s.height));
    }

    draw() {
        const { s } = this;

        s.push();

        s.fill('yellow');
        s.translate(this.position);

        s.rect(-this.radius / 2, -this.radius / 2, this.radius, this.radius);

        s.pop();
    }
}

export default Rock;