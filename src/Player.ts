import p5 from "p5";
import GameObject from "./GameObject";
import ThrustParticle from "./ThrustParticle";

class Player extends GameObject {
    static STEERING_FORCE: number = 0.08;
    static THRUST: number = 0.1;
    static BRAKING_FORCE: number = -0.05;
    static THRUST_EMISSION_GAP: number = 5;

    heading: number;
    framesSinceThrustParticleEmitted: number;

    constructor(s: p5, radius: number) {
        super(s, radius);

        this.heading = 0;
        this.framesSinceThrustParticleEmitted = Player.THRUST_EMISSION_GAP;
    }

    update() {
        const { s } = this;
        this.framesSinceThrustParticleEmitted += 1;

        if (s.keyIsDown(s.DOWN_ARROW)) {
            let force = this.velocity.copy().mult(Player.BRAKING_FORCE);
            this.applyForce(force);
        } else if (s.keyIsDown(s.UP_ARROW)) {
            let force = s.createVector(0, Player.THRUST);
            force.setMag(Player.THRUST);
            force.rotate(this.heading);
            // this.applyForce(force);

            if (this.framesSinceThrustParticleEmitted > Player.THRUST_EMISSION_GAP) {
                this.emitGameObject(new ThrustParticle(s, this, this.heading));
                this.framesSinceThrustParticleEmitted = 0;
            }
        }
        if (s.keyIsDown(s.LEFT_ARROW)) {
            this.heading -= Player.STEERING_FORCE;
        } else if (s.keyIsDown(s.RIGHT_ARROW)) {
            this.heading += Player.STEERING_FORCE;
        }

        super.update();
    }

    drawAtOrigin() {
        const { s } = this;

        s.rotate(this.heading);

        s.fill('purple');
        s.beginShape();
        s.vertex(-this.radius / 3, -this.radius / 2);
        s.vertex(+this.radius / 3, -this.radius / 2);
        s.vertex(0, this.radius / 2);
        s.endShape();

    }
}

export default Player;