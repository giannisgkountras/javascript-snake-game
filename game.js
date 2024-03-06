import { drawSnakeSquare } from "./drawSnake.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let msPrev = window.performance.now();
const fps = 60;
const msPerFrame = 1000 / fps;
const speedInput = document.getElementById("speed");
let speed = parseInt(speedInput.value);
let plusx = 3 * speed * 0.1;
let plusy = 5 * speed * 0.1;

speedInput.addEventListener("input", function () {
    speed = parseInt(speedInput.value);
    plusx = 3 * speed * 0.1 * Math.sign(plusx);
    plusy = 5 * speed * 0.1 * Math.sign(plusy);
});

let x = 1;
let y = 1;

function randomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

let color = "#E4E3D3";

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    const msNow = window.performance.now();
    const msPassed = msNow - msPrev;
    if (msPassed < msPerFrame) return;
    const excessTime = msPassed % msPerFrame;
    msPrev = msNow - excessTime;

    draw();
    if (x > 750 - 50 || x < 0) {
        plusx = -plusx;
        color = randomColor();
    }
    if (y > 700 - 50 || y < 0) {
        plusy = -plusy;
        color = randomColor();
    }

    x = x + plusx;
    y = y + plusy;
}

function draw() {
    drawSnakeSquare(x, y, ctx, color);
}

gameLoop();
