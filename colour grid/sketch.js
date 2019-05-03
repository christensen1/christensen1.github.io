// Multi Coloured Grid
// Leif Christensen
// 3/08/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize;
//This varible stores what the the rectagles have to be divided by.

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectSize = 50;
  noLoop()
}
//this function sets up the canvas and stops the it from looping.

function draw() {
  background(255);
  for (let x = 0; x < width; x += width/rectSize) {
		for (let y = 0; y < height; y += width/rectSize){
      fill(int(random(255)), int(random(255)), int(random(255)));
      rect(x, y, width/rectSize, width/rectSize);
    }
  }  
}
//This function draws the rects sizes and holds the code for the colour.

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
//this function allows the canvas to change to the window size.

function keyPressed(){
  draw();
}
//this function changes the colour randomly.

function mousePressed(){
  if(mouseButton === LEFT){//makes the sqaures lager
    rectSize -= 5;
    if (rectSize <= 5){
      rectSize = 5;
    }
    print(rectSize);
  }
  if (mouseButton === RIGHT){//makes the squares smaller.
    rectSize += 5;
    print(rectSize);
  }
  draw();
}
//this function makes the sqaures lager and smaller with mouse presses.