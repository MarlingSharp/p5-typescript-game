import p5 from 'p5';
import GameObject from './GameObject';
import Player from './Player';
import Rock from './Rock';
import SwirlyThing from './SwirlyThing'

import './index.css'

const element: HTMLElement = document.createElement('div');
document.body.appendChild(element);

new p5((s: p5) => {
    const PLAYER_SIZE = 30;
    const MIN_ROCK_SIZE = 10;
    const MAX_ROCK_SIZE = 20;

    let player: Player;
    let obstacles: GameObject[] = [];

    s.setup = function () {
        s.pixelDensity(1);
        s.createCanvas(600, 600);

        player = new Player(s, PLAYER_SIZE);

        // Create some rocks
        for (let i = 0; i < 8; i++) {
            obstacles.push(new Rock(s, s.random(MIN_ROCK_SIZE, MAX_ROCK_SIZE)));
        }

        // Create some swirly things
        for (let i = 0; i < 8; i++) {
            obstacles.push(new SwirlyThing(s, s.random(MIN_ROCK_SIZE, MAX_ROCK_SIZE)));
        }
    }

    s.draw = function () {
        s.background(40);

        // Collect all the game objects together so they can be updated/drawn
        const gameObjects: GameObject[] = [player, ...obstacles];

        // Update each GameObject
        gameObjects.forEach(g => g.update());

        // Draw all GameObjects
        gameObjects.forEach(g => g.draw());
    }
}, element);
