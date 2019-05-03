// Art replication Warm up
// Leif Christensen
// 4/15/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//sets up the needed variables.
let x;
let y;
let x2;
let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  x = width /3;//gives all the variables their values.
  y = height - 100;
  x2 = width /3 ;
  y2 = height - 100;
}

function draw() {
  drawLine();
  if (frameCount === 65){//stops the drawing from drawing to many lines.
    noLoop();
  }
}

function drawLine() {
  x = x2;//sets the coordants for the points.
  y = y2;
  x2 = random(width/3-80, width-width/3-80);//picks new semi random x point to go to.
  y2 = random(0, height);//picks random y point.
  line(x, y, x2, y2);//draws thwe lines.
}

