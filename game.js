import { draw, randomPosition } from "./draw.js";
import { keyPressed, handleMovement } from "./movement.js";
import { Parameters } from "./parameters.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let msPrev = window.performance.now();
const fps = Parameters.fps;
const msPerFrame = 1000 / fps;
const scoreDisplay = document.getElementById("score");
let score = 0;
scoreDisplay.innerHTML = score;

function checkGameOver(snakeLocations) {
    for (let i = 0; i < snakeLocations.length; i++) {
        for (let j = 0; j < snakeLocations.length; j++) {
            if (
                i != j &&
                snakeLocations[i].x == snakeLocations[j].x &&
                snakeLocations[i].y == snakeLocations[j].y
            ) {
                alert("Game Over");
            }
        }
    }
}

let snakeLocations = [randomPosition()];

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    const msNow = window.performance.now();
    const msPassed = msNow - msPrev;
    if (msPassed < msPerFrame) return;
    const excessTime = msPassed % msPerFrame;
    msPrev = msNow - excessTime;

    checkGameOver(snakeLocations);
    score = snakeLocations.length * 10 - 10;
    scoreDisplay.innerHTML = score;
    snakeLocations = draw(ctx, snakeLocations);

    for (let i = snakeLocations.length - 1; i >= 0; i--) {
        if (i === 0) {
            snakeLocations[i].x = handleMovement(
                snakeLocations[i].x,
                snakeLocations[i].y,
                keyPressed
            ).x;
            snakeLocations[i].y = handleMovement(
                snakeLocations[i].x,
                snakeLocations[i].y,
                keyPressed
            ).y;
        } else {
            snakeLocations[i].x = snakeLocations[i - 1].x;
            snakeLocations[i].y = snakeLocations[i - 1].y;
        }
    }
}

gameLoop();
