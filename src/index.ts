import p5 from 'p5';
import GameObject from './GameObject';
import Player from './Player';
import Rock from './Rock';

import './index.css'
import Bullet from './Bullet';
import Obstacle from './Obstacle';

const element: HTMLElement = document.createElement('div');
document.body.appendChild(element);

new p5((s: p5) => {
    const PLAYER_SIZE = 30;
    const MIN_ROCK_SIZE = 40;
    const MAX_ROCK_SIZE = 70;

    let player: Player;
    let rocks: Rock[] = [];
    let bullets: Bullet[] = [];
    let numberRocks: number = 1;

    s.setup = function () {
        s.pixelDensity(1);
        s.createCanvas(600, 600);

        player = new Player(s, PLAYER_SIZE);
    }

    s.draw = function () {
        s.background(40);

        // Get rid of any obstacles that are hit by bullets
        rocks = rocks.filter(o => !bullets.find(b => b.isCollidingWith(o)))

        // Collect all the game objects together so they can be updated/drawn
        const gameObjects: GameObject[] = [...bullets, ...rocks, player];

        // Update each GameObject
        gameObjects.forEach(g => g.update());

        // Draw all GameObjects
        gameObjects.forEach(g => g.draw());

        bullets = bullets.filter(b => b.isAlive());

        // Ensure we have enough obstacles
        while (rocks.length < numberRocks) {
            rocks.push(new Rock(s, s.random(MIN_ROCK_SIZE, MAX_ROCK_SIZE)));
        }
    }

    s.keyPressed = function () {
        if (s.keyCode === ' '.charCodeAt(0)) {
            let newBullet = new Bullet(s, player);
            bullets.push(newBullet);
        }
    }
}, element);
