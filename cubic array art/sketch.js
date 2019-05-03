// Project Title
// Leif Christensen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const squareSize = 15;

function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  noLoop();
}

function drawRectangle(){
  for (let x = squareSize/2; x < width-squareSize/2; x +=squareSize){
    for (let y = squareSize/2; y < width-squareSize/2; y +=squareSize){
      push();
      translate(x, y);
      let rAmount = map(y, 0, height, 0, 45);
      rotate(radians(random(-rAmount, rAmount)));
      let offset = map(y, 0, height, 0, 15);
      stroke(119, 10, 153);
      rect(random(-offset, offset), random(-offset, offset), squareSize, squareSize);
      pop();
    } 
  }
}

function draw() {
  background(0);
  drawRectangle();
}
