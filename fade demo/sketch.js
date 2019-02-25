// Fade Demo
// Leif Christensen
// 2/25/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX;
let buttonY; 
let buttonSize; 
let rectX;
let rectY;
let rectW;
let rectH;
let rectShade = 0;
let fadeIn = false;
let buttonOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2;
  buttonY = height/4;
  buttonSize = 50;
  rectX = width/2;
  rectY = height/3*2;
  rectW = width/2;
  rectH = height/3;
  noStroke()
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function mouseDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return c;
}
function mousePressed(){
  if(buttonOver){
    fadeIn = !fadeIn;
  }
}

function draw() {
  print(mouseDistance(mouseX, mouseY, buttonX, buttonY));
  background(255);
  if (mouseDistance(mouseX, mouseY, buttonX, buttonY)<buttonSize){
    fill(200, 40, 50);
    buttonOver = true;
  }
  else{
    fill(100, 30, 30);
    buttonOver = false;
  }
  ellipse(buttonX, buttonY, buttonSize, buttonSize);

  //if(frameCount % 2 === 0){
    if(fadeIn){
    rectShade -= 2;
  }
  else{
    rectShade += 2;
  }
  //rectShade = frameCount;
  fill(rectShade)
  rect(rectX, rectY, rectW, rectH);
}

