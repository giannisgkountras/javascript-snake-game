import { draw } from "./drawSnake.js";
import { keyPressed, handleMovement } from "./movement.js";
import { Parameters } from "./parameters.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let msPrev = window.performance.now();
const fps = Parameters.fps;
const msPerFrame = 1000 / fps;

let snakeLocations = [
    { x: 0, y: 0 },
    { x: -50, y: -50 },
    { x: -100, y: -100 },
];

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    const msNow = window.performance.now();
    const msPassed = msNow - msPrev;
    if (msPassed < msPerFrame) return;
    const excessTime = msPassed % msPerFrame;
    msPrev = msNow - excessTime;

    draw(ctx, snakeLocations);
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
