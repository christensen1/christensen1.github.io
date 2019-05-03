// Rollovers
// Leif Christensen
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fadeRect1 = 255;
let fadeRect2 = 255;
let fadeRect3 = 255;
let fadeRect4 = 255;
//stores = the colour for the fade.

let mouseQuadrant = 1;
// quadrant one = upper left, quadrant two = upper right,quadrant three = bottom left, quadrant four = bottom right.

function setup() {
  createCanvas(windowWidth, windowHeight);
}
//makes the canvas the project is set up on.

function determineMouse(){
  if (mouseX < windowWidth/2){
    if (mouseY < height/2)mouseQuadrant = 1;
    else mouseQuadrant = 3;
  }
  else{
    if(mouseY < height/2)mouseQuadrant = 2;
    else mouseQuadrant = 4;
  }
  print (mouseQuadrant);
} 
//Finds the quadrant the mouse is and saves it into the varible mouseQuadrant.

function draw() {
  background(255);
  determineMouse();
  fadeQuadrant();
}
//makes the the background and the four rectangles in each quadrant.

function fadeQuadrant(){
  if (mouseQuadrant === 1){ //top left
    fadeRect1 = 0; 
    fill(fadeRect1);
    rect(0, 0, width/2, height/2);
  }
  else{
    fadeRect1 += 5;
    fill(fadeRect1);
    rect(0, 0, width/2, height/2);
  }

  if (mouseQuadrant === 2){//top right
    fadeRect2 = 0; 
    fill(fadeRect2);
    rect(width/2, 0, width/2, height/2);
  }
  else{
    fadeRect2 += 5;
    fill(fadeRect2);
    rect(width/2, 0, width/2, height/2);
  }

  if (mouseQuadrant === 3){//bottom left
    fadeRect3 = 0; 
    fill(fadeRect3);
    rect(0, height/2, width/2, height/2);
  }
  else{
    fadeRect3 += 5;
    fill(fadeRect3)
    rect(0, height/2, width/2, height/2);
  }
  if (mouseQuadrant === 4){//bottom right
    fadeRect4 = 0; 
    fill(fadeRect4);
    rect(width/2, height/2, width/2, height/2);
  }
  else{
    fadeRect4 += 5;
    fill(fadeRect4)
    rect(width/2, height/2, width/2, height/2);
  }
}

//this code truns the rectangles black when going over them with the mouse
//and fades it  back to white when you leave.