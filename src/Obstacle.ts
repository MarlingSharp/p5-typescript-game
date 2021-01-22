import p5 from "p5";
import GameObject from "./GameObject";

abstract class Obstacle extends GameObject {

    constructor(s: p5, radius: number) {
        super(s, radius);
    }
}

export default Obstacle;