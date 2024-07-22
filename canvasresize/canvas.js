var canvas = document.querySelector('canvas'); // this is how to find the canvas object
// This is only called once at the beginning of the program, so it will not update with changes.
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

console.log(canvas)

//To make it update, we add an eventListener to check if the window is ever resized. If it is, then we call the resizeCanvas function that fixes the canvas size again.
function initialize() {
    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2;    // * 2 so that I could make sure it wasn't using the above default values.
}

initialize();