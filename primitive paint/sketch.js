// Primitive Paint
// Leif CHristensen
// Febuary 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let sizeV = 50;
let sizeH = 50;



function setup() {
  createCanvas(2000, 2000);
  background(0);
}
keyTyped();

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
}

