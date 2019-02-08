// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y; 
let xspeed ,yspeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xspeed = random(-3, 3);
  yspeed = random(-3, 3);

}
if(x < 0 || x < width){
  xspeed *= -1;

}
if (y < 0 || )

function draw() {
  //background(220);
  ellipse(x, y, 100, 100);
  x += xspeed;
  y += yspeed;

}

function mousePressed(){
  xspeed = random(-3, 3);
  yspeed = random(-3, 3); 

}

function mouseReleased(){
  fill(random(0,255),random(0,255),random(0,255);
}
