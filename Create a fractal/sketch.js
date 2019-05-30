// Create-a-fractal
// Leif Christensen
// 5/13/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);
  toruses(200);
}

function toruses(size){
  push()
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  color(255, 0, 0);
  torus(size, size/3 );
  pop()
}

