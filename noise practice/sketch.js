// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let noiseChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let x = map(noise(noiseChange), 0, 1, 0, width);
  noiseChange += 0.02;
  fill(int(random(255)),int(random(255)),int(random(255)),)
  ellipse(x, height/2 , 100,);
}
