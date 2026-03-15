const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
let x = 10, y = 10;
let rectWidth = 20, rectHeight = 10;
let velX = 2, velY = 2;
function draw(pos_x, pos_y){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, rectWidth, rectHeight);
    requestAnimationFrame(draw);
}
canvas.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        moveUp();
    }
    if (event.key === "ArrowDown") {
        moveDown();
    }
    if (event.key === "ArrowLeft") {
        moveLeft();
    }
    if (event.key === "ArrowRight") {
        moveRight();
    }
});
function moveLeft(){
    x -= velX;
}
function moveRight(){
    x += velX;
}
function moveUp(){
    y -= velY;
}
function moveDown(){
    y += velY;
}
draw();