// Create-A-Fractal
// Leif Christensen
// 5/21/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  rectGenerator(width/2, height/2, 800, 8);//this gives the varbles a value.
  noLoop();
}

function rectGenerator(x, y, size, level){//this starts the art generation and intialzes the varibles.
  stroke(0);
  fill(random(10,50), random(100,150), random(50,250));//sets the colours.
  rectMode(CENTER)
  rect(x, y, size, size, 20);
  if (level > 1 ){
    rectGenerator(x-size/4, y-size/6, size/2, level-1 );//slowly makes more squares with rounder corners.
    rectGenerator(x+size/4, y+size/6, size/2, level-1 );
    rectGenerator(x+size/4, y+size/8, size/2, level-1 );
    rectGenerator(x-size/4, y-size/8, size/2, level-1 );
  }
}