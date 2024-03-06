function drawSnakeSquare(x1, y1, ctx, color) {
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, 750, 700);
    ctx.beginPath(); // Start a new path
    ctx.rect(x1 + 5, y1 + 5, 40, 40);
    ctx.fill(); // Draw the rectangle
}

export { drawSnakeSquare };
