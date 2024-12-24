// consts
const caanvaas=document.getElementById("canvas");
const pen=caanvaas.getContext('2d');
var pi = Math.PI;

// drawing functions
// also canvas width is 500 height is 1000
pen.beginPath();
pen.moveTo(250, 100);
pen.lineTo(750, 100);
pen.lineTo(750, 400);
pen.lineTo(250, 400);
pen.lineTo(200, 100);
pen.stroke();