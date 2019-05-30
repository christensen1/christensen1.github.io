// 3D
// Leif
// 5/13/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  angle = map(mouseX, 0 , width, -120, 120);
  background(220);
  for (let i = 0; i < 360; i += 45){
    push();
    rotateY(radians(i));
    boxes(70);
    pop();
  }
}

function boxes(size){
  if (size > 20){
    rotateZ(radians(angle));
    translate(size*1.5, 0);
    torus(size, size/2);
    boxes(size* 0.83);
  }
}
