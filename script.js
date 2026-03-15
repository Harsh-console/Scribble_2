// 1. Grab the canvas from the HTML
const canvas = document.getElementById('gameCanvas');
// 2. Get the "2D Context". This provides the tools to draw shapes, text, and images.
const ctx = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const clearButton = document.getElementById('clearDrawing');

// 3. Set up our "Pen"
ctx.lineJoin = 'round'; // Makes corners smooth
ctx.lineCap = 'round';  // Makes the end of the line round
ctx.lineWidth = 5;      // Thickness of the line
ctx.strokeStyle = '#000000'; // Color of the line (Black)

// Variables to keep track of what the mouse is doing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let state=false;
let isErasing = false;
// Function triggered when you click the mouse DOWN
function startDrawing(e) {
    isDrawing = true;
    // Record exactly where the mouse was clicked
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
function continueDrawing(e){
    state=true;
}
function reset(){
    ctx.lineWidth = 5; 
    ctx.strokeStyle = '#000000';
    isErasing = false;
}
// Function triggered when you MOVE the mouse
function draw(e) {
    if(isErasing){
        ctx.lineWidth = 15;
        ctx.strokeStyle = 'white';
    }
    if (!isDrawing) return; 
    if(state){
        state=false;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    // If the mouse isn't clicked down, don't do anything

    ctx.beginPath(); // Start a new path
    ctx.moveTo(lastX, lastY); // Start from the last recorded mouse position
    ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
    ctx.stroke(); // Actually render the line on the screen

    // Update the last position to the current position for the next frame
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function triggered when you lift the mouse UP or leave the canvas area
function stopDrawing() {
    isDrawing = false;
}
function clearDrawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function changeColorToRed() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'red';
}
function changeColorToGreen() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'green';
}
function changeColorToBlue() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'blue';
}
function changeColorToPink() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'pink';
}
function changeColorToBlack() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'black';
}
function changeColorToYellow() {
    reset();
    isErasing = false;
    ctx.strokeStyle = 'yellow';
}
function startEraser(){
    isErasing = true;
}
// 4. Attach these functions to the canvas events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
document.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout',continueDrawing);
clearButton.addEventListener('click', clearDrawing);
redButton.addEventListener('click', changeColorToRed);
greenButton.addEventListener('click', changeColorToGreen);
blueButton.addEventListener('click', changeColorToBlue);
pinkButton.addEventListener('click', changeColorToPink);
blackButton.addEventListener('click', changeColorToBlack);
yellowButton.addEventListener('click', changeColorToYellow);
eraser.addEventListener('click', startEraser);
