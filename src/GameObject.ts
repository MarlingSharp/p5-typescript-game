import p5 from "p5";

/**
 * General purpose game object, with a simple physics implementation.
 * With acceleration being built from forces during each frame.
 */
abstract class GameObject {
    static SPEED_LIMIT: number = 5.0;

    s: p5; // Keep reference to the sketch
    position: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    /**
     * Build a new Game Object.
     * 
     * @param s p5.js Sketch, allows calls to drawing API
     */
    constructor(s: p5) {
        this.s = s;
        this.position = s.createVector(s.width / 2, s.height / 2);
        this.velocity = s.createVector(0, 0);
        this.acceleration = s.createVector(0, 0);
    }

    /**
     * Draw self to the sketch
     */
    abstract draw(): void;

    /**
     * Use the accumulated forces to apply acceleration to the velocity
     * Apply velocity to change position.
     * Reset acceleration ready for next frame.
     */
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        // Speed limit
        if (this.velocity.mag() > GameObject.SPEED_LIMIT) {
            this.velocity.setMag(GameObject.SPEED_LIMIT)
        }

        // Wrap around horizontally
        if (this.position.x > this.s.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = this.s.width;
        }

        // Wrap around vertically
        if (this.position.y > this.s.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = this.s.height;
        }
    };

    /**
     * Apply a force to this object, must be repeated each frame for each force.
     * 
     * @param force A vector that describes the force
     */
    applyForce(force: p5.Vector) {
        this.acceleration.add(force);
    }
}

export default GameObject;