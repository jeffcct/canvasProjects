var canvas = document.querySelector('canvas');

function initialize() {
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2;
}

initialize();

