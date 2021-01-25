import p5 from "p5";
import Obstacle from "./Obstacle";

class Rock extends Obstacle {
    vertices: p5.Vector[] = [];
    angle: number;
    rotationalSpeed: number;

    constructor(s: p5, radius: number) {
        super(s, radius);

        this.angle = 0;
        this.velocity.add(s.createVector(s.random(-0.5, 0.5), s.random(-0.5, 0.5)));
        this.position = s.createVector(s.random(0, s.width), s.random(0, s.height));

        this.rotationalSpeed = s.random(0.01, 0.05);
        let numberVertices = s.random(4, 7);
        for (let i = 0; i < numberVertices; i++) {
            let jitter = s.random(0.8, 1);
            let x = this.radius / 2 * Math.sin(jitter * i * s.TWO_PI / numberVertices);
            let y = this.radius / 2 * Math.cos(jitter * i * s.TWO_PI / numberVertices);
            this.vertices.push(s.createVector(x, y));
        }
        this.vertices.push(this.vertices[0]);
    }

    update() {
        super.update();
        this.angle += this.rotationalSpeed;
    }

    drawAtOrigin(s: p5) {
        s.noFill();
        s.stroke('white')

        s.rotate(this.angle);
        s.beginShape();
        this.vertices.forEach(v => s.vertex(v.x, v.y));
        s.endShape();
    }
}

export default Rock;