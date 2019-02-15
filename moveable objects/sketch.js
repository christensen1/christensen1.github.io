// moveable objects
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x =  200;
let y = 200;
let rSize = 50;
let mouseOver = false;
let pickedUp = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  mouseOver = false;
  if (mouseX >= x - rSize/2 && mouseX <= x + rSize/2){
    if (mouseY >= y -rSize/2 && mouseY <= y + rSize/2){
      mouseOver = true;
    }
  }
  if (pickedUp){
    x = mouseX;
    y = mouseY;
  }
  rect(x, y, rSize, rSize);
}

function mousePressed(){
  if(mouseOver){
    PickedUp = true;
  }
}

function mouseReleased(){
  PickedUp = false;
}
