var canvas = document.querySelector('canvas'); // this is how to find the canvas object
// This is only called once at the beginning of the program, so it will not update with changes.
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

context = canvas.getContext('2d');

//To make it work permanantly, we add an eventListener to check if the window size is ever changed. If it is, then we call the resizeCanvas function that fixes the width.
function initialize() {
    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2;    // * 2 so that I could make sure it wasn't using the above default values.
}

initialize();