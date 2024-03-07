import { Parameters } from "./parameters.js";

const gameWindow = document.getElementById("body");
let keyPressed;
gameWindow.addEventListener("keydown", (event) => {
    keyPressed = event.key;
});

function handleMovement(x, y, key) {
    switch (key) {
        case "ArrowRight":
            if (x >= Parameters.canvasWidth - 1) {
                x = 0;
                return { x, y };
            }
            x = x + Parameters.moveSpeed;
            break;
        case "ArrowLeft":
            if (x <= 0) {
                x = Parameters.canvasWidth;
                return { x, y };
            }
            x = x - Parameters.moveSpeed;
            break;
        case "ArrowUp":
            if (y <= 0) {
                y = Parameters.canvasHeight;
                return { x, y };
            }
            y = y - Parameters.moveSpeed;
            break;
        case "ArrowDown":
            if (y >= Parameters.canvasHeight - 1) {
                y = 0;
                return { x, y };
            }
            y = y + Parameters.moveSpeed;
            break;
        case "p":
            console.log("PAUSE");
    }
    return { x, y };
}

export { keyPressed, handleMovement };
