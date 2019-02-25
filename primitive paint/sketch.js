// Primitive Paint
// Leif CHristensen
// Febuary 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sizeV = 50;
let sizeH = 50;
let state = 0;
const rectSize = 50;
let x = 0;
let y = 0; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(74,234,56);
  textSize(20);
  textFont('Comic Sans MS');
  text("LEIF CHRISTNENSEN", windowWidth - 445, windowHeight - 100);
}
keyTyped();

function draw(){
  fill(random([0], [255]));
  if (state === 0) {
    x += 10;
    if (x > windowWidth - rectSize) {
      state = 1;
    }
  }
  else if (state === 1) {
    y += 10;
    if (y > windowHeight - rectSize) {
      state = 2;
    }
  }
  else if (state === 2) {
    x -= 10;
    if (x <= 0) {
      state = 3;
    }
  }
  else if (state === 3) {
    y -= 10;
    if (y <= 0) {
      state = 0;
    }
  }
  fill(0,random(255),random(255));
  rect(x,y,rectSize,rectSize);
}


function keyTyped(){
  if (key === 'a'){
    fill(random(1,255), random(1,255), random(1,255))
    rect(mouseX-25, mouseY-25, sizeV, sizeH );
  } 
  if (key === 's' ){
    fill(random(1,255), random(1,255), random(1,255))
    ellipse(mouseX, mouseY, sizeV, sizeH );
  }
  if (key === 'd'){
    fill(random(1,255), random(1,255), random(1,255))
    triangle(mouseX + 30,mouseY +30, mouseX - 30, mouseY + 30,mouseX, mouseY-30);
  }
  if (keyCode === 32){
    background(0);
    fill(74,234,56);
    textSize(20);
    textFont('Comic Sans MS');
    text("LEIF CHRISTNENSEN", windowWidth - 445, windowHeight - 100);
  }
}

