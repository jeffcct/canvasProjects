// import the noise functions you need
// import { createNoise2D } from 'simplex-noise';
import React from 'React';


var canvas = document.querySelector('canvas');

var context = canvas.getContext('2d');

const noise = new ValueNoise();


function drawRects() {
    // Drawing Rectangles. fillRect(x, y, width, height);
    context.fillStyle = 'rgba(25, 120, 255, 0.5)';
    // initialize the noise function
    const noise2D = createNoise2D();
    // returns a value between -1 and 1
    console.log(noise2D(x, y));


    context.fillRect(100, 100, 100, 100);
    context.fillRect(400, 100, 100, 100);
    context.fillRect(300, 300, 100, 100);
}



// Line - begin Path, moveTo, lineTo, stroke are all important functions to draw a line.
function drawLines() {
    context.beginPath(); // Telling the program to initialize drawing lines
    context.moveTo(50, 300);    // Starting coord
    context.lineTo(300, 100);   // What to do with path and where to go
    context.strokeStyle = "#2234ff"; // changes colour also can use rgba(), 'blue'
    context.stroke();   // draw what is in context


    context.beginPath(); // Resetting to make a new path and not repeat.
    context.moveTo(300, 100);
    context.lineTo(500, 500);
    context.strokeStyle = 'red';
    context.stroke();
}


// Arc
// No beginPath makes it connect. using fill draws a triangle from the last line and a filled in circle.
function drawArc() {
    context.arc(300, 300, 30, 0, Math.PI * 2, false);
    context.fill();
}

//Main function that draws everything. Allows event listeners to redraw if events happen.
function drawEverything() {
    drawRects();
    drawLines();
    drawArc();
    console.log('redrawn!')
}

drawEverything();
window.addEventListener('resize', drawEverything, false);