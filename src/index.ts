import p5 from 'p5';
import GameObject from './GameObject';
import Player from './Player';
import Rock from './Rock';

import './index.css'

const element: HTMLElement = document.createElement('div');
document.body.appendChild(element);

new p5((s: p5) => {
    let player: Player;
    let rocks: Rock[] = [];

    s.setup = function () {
        s.pixelDensity(1);
        s.createCanvas(600, 600);

        player = new Player(s);

        for (let i = 0; i < 10; i++) {
            rocks.push(new Rock(s));
        }
    }

    s.draw = function () {
        s.background(40);

        // Collect all the game objects together so they can be updated/drawn
        const gameObjects: GameObject[] = [player, ...rocks];

        // Update each GameObject
        gameObjects.forEach(g => g.update());

        // Draw all GameObjects
        gameObjects.forEach(g => g.draw());
    }
}, element);
