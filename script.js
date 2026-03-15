const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const clearButton = document.getElementById('clearDrawing');
ctx.lineJoin = 'round'; 
ctx.lineCap = 'round';
ctx.lineWidth = 5; 
ctx.strokeStyle = '#000000';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let state=false;
let isErasing = false;
let startErasing = false;
function startDrawing(e) {
    isDrawing = true;
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
function draw(e) {
    if(startErasing){
        ctx.lineWidth = 15;
        ctx.strokeStyle = 'white';
        startErasing = false;
    }
    if (!isDrawing) return; 
    if(state){
        state=false;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    ctx.beginPath(); 
    ctx.moveTo(lastX, lastY); 
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); 
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
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
    startErasing = true;
}
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
