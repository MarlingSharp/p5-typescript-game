import p5 from "p5";
import GameObject from "./GameObject";

abstract class Obstacle extends GameObject {
    radius: number;

    constructor(s: p5, radius: number) {
        super(s);
        this.radius = radius;
    }
}

export default Obstacle;