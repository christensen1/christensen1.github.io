// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 45;
let xSpeed = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(50, 115, 195);
  fill(255,204,0);
  ellipse(200,200,55);
  fill(29,143,178);
  rect(mouseX, mouseY, 75, 75)
}
x += xSpeed;
if (x > windowWidth)x = -30;