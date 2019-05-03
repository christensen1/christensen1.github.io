// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(4500, 3500);
}

function draw() {
  background(255);
  fill(255,0,0);
  ellipse(width/2, height/2, 1000, 1000);
}

function keyPressed(){
  if(key === ""){
    save();
  }
}