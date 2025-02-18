// functions/variables/consts?
const el=document.getElementById('canvas');
const pen=el.getContext('2d');
var pi = Math.PI;

/*function draw(){
    console.log(time.time)
}*/
pen.beginPath();
pen.moveTo(318, 347);
pen.lineTo(337, 390);
pen.stroke();

pen.beginPath();
pen.arc(640, 360, 0, 2*pi)