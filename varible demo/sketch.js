// Varible demo
// Leif christensen
// feb 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
const rectSize = 20;
let x = 0;
let y = 0;

//zero stands for top, one stands for right two will be bottom and three will stand for left.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === 0 ){
    x += 10;
    if (x > windowWidth - rectSize) state = 1;

  }
  else if (state === 0 ){

  }
  rect(0, 0, rectSize, rectSize);
}
