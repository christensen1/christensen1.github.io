// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectX;//the varible for the size of the rectangle.
let rectY;

let randomX;//the varibles that hold the random bouncing points.
let randomY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX=200;//sets the size of the rectangle.
  rectY=300; 
  randomX=random(3,8);//sets the random numbers.
  randomY=random(3,8);
}

function draw() {
  rectBounce();//calls the rectBounce function.
  background(80,80,80);
  rect(rectX,rectY,250,75);//calls the rectangle.
}

function rectBounce(){
  rectX+=randomX; 
  rectY+=randomY;
  if (rectY>=height-75||rectY<=0){//contorls how and if the bounces change if it hits the walls on the sides.
    randomY=randomY*-1;
  }
  if (rectX>=width-250||rectX<=0){//controls  how and if the bounces changes when hiting the walll with the top or bottom of the rectangle.
    randomX=randomX*-1;
  }
}