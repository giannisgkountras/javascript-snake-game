import { Parameters } from "./parameters.js";

function drawSnakeSquare(x1, y1, ctx, color) {
    ctx.fillStyle = color;
    ctx.rect(x1 + 5, y1 + 5, Parameters.squareSize, Parameters.squareSize);
    ctx.fill(); // Draw the rectangle
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
}

export { drawSnakeSquare, draw };
