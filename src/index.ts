import p5 from 'p5';

const element: HTMLElement = document.createElement('div');

new p5((s: p5) => {
    const SPEED = 5;
    let x = 0;
    let y = 0;

    s.setup = function () {
        s.createCanvas(700, 410);
    }

    s.draw = function () {
        s.background(230);
        s.fill('black');
        s.rect(x, y, 100, 100);

        if (s.keyIsDown(s.DOWN_ARROW)) {
            y += SPEED;
        }
        if (s.keyIsDown(s.UP_ARROW)) {
            y -= SPEED
        }
        if (s.keyIsDown(s.LEFT_ARROW)) {
            x -= SPEED;
        }
        if (s.keyIsDown(s.RIGHT_ARROW)) {
            x += SPEED;
        }

        if (x > s.width) {
            x = 0;
        } else if (x < 0) {
            x = s.width;
        }

        if (y > s.height) {
            y = 0;
        } else if (y < 0) {
            y = s.height;
        }
    }
}, element);

document.body.appendChild(element);