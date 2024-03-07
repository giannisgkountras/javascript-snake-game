import { Parameters } from "./parameters.js";

let applePosition = {
    x: Math.floor(Math.random() * 15) * 50,
    y: Math.floor(Math.random() * 14) * 50,
};

function randomPosition() {
    return {
        x: Math.floor(Math.random() * 15) * 50,
        y: Math.floor(Math.random() * 14) * 50,
    };
}
function drawSnakeSquare(x, y, ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x + 5, y + 5, Parameters.squareSize, Parameters.squareSize);
}

function draw(ctx, snakeLocations) {
    ctx.clearRect(0, 0, Parameters.canvasWidth, Parameters.canvasHeight);
    ctx.beginPath(); // Start a new path
    for (let i = 0; i < snakeLocations.length; i++) {
        drawSnakeSquare(
            snakeLocations[i].x,
            snakeLocations[i].y,
            ctx,
            "#2E2D4D"
        );
    }
    drawApple(ctx);

    if (
        snakeLocations[0].x == applePosition.x &&
        snakeLocations[0].y == applePosition.y
    ) {
        snakeLocations.push({
            x: snakeLocations[snakeLocations.length - 1].x - 50,
            y: snakeLocations[snakeLocations.length - 1].y - 50,
        });
        applePosition = randomPosition();
    }
    return snakeLocations;
}

function drawApple(ctx) {
    ctx.fillStyle = "#D22B2B";
    ctx.fillRect(
        applePosition.x + 10,
        applePosition.y + 10,
        Parameters.squareSize - 10,
        Parameters.squareSize - 10
    );
}

function checkGameOver(snakeLocations) {
    for (let i = 0; i < snakeLocations.length; i++) {
        for (let j = 0; j < snakeLocations.length; j++) {
            if (
                i != j &&
                snakeLocations[i].x == snakeLocations[j].x &&
                snakeLocations[i].y == snakeLocations[j].y
            ) {
                console.log("GAME OVER");
            }
        }
    }
}

export { drawSnakeSquare, draw, randomPosition };
