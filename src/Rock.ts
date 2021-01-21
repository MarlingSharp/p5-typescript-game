import p5 from "p5";
import GameObject from "./GameObject";

class Rock extends GameObject {
    size: number;

    constructor(s: p5) {
        super(s);

        this.size = 10;
        this.velocity.add(s.createVector(s.random(), s.random()));
        this.position = s.createVector(s.random(0, s.width), s.random(0, s.height));

    }

    draw() {
        const { s } = this;

        s.push();

        s.fill('yellow');
        s.translate(this.position);

        s.rect(-this.size / 2, -this.size / 2, this.size, this.size);

        s.pop();
    }
}

export default Rock;