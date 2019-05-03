// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Black and White Target

let size = 400;//this is the size the ellipse are made at.
const SIZECHANGE = 40;// Constent number used throughtout the code.

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(240);
  for (let i = 400; i >= SIZECHANGE; i = i - SIZECHANGE ){//loops the creation of the ellipse to make 10.
    ellipse(200, 200, size, size);
    size = size - SIZECHANGE;//shrinks the size of the ellipse.
  }
  size = 400;//reaseats the size
}
