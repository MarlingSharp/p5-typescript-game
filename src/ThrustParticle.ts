import p5 from "p5";
import GameObject from "./GameObject";

class ThrustParticle extends GameObject {
    static RADIUS: number = 5;
    static INITIAL_LIFE: number = 40;

    lifetime: number = ThrustParticle.INITIAL_LIFE;

    constructor(s: p5, source: GameObject, heading: number) {
        super(s, ThrustParticle.RADIUS);

        this.position = source.position.copy();
        this.velocity = s.createVector(2, 0);
        this.velocity.rotate(heading - (s.PI / 2) + (s.random(-s.PI / 12, s.PI / 12)));
    }

    isAlive() {
        return this.lifetime > 0;
    }

    update() {
        super.update();

        this.lifetime -= 1;
    }

    drawAtOrigin(s: p5) {
        s.noStroke();
        s.fill(`rgba(100, 100, 100, ${this.lifetime / ThrustParticle.INITIAL_LIFE})`);
        s.ellipse(0, 0, ThrustParticle.RADIUS);
    }
}

export default ThrustParticle;