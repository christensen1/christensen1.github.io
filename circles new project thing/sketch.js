// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
}

function draw() {
  background(220);
  circles(width/2, height/2, height);
}

function circles(x, y, d,){
  if (d > 3){
   ellipse(x, y, d, d);
   circles(x-d/4, y, d/2);
   circles(x+d/4, y, d/2);
   circles(x, y-d/3, d/2);
   circles(x, y+d/4, d/2);
  }
}
