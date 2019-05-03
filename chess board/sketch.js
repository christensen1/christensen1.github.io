// chess board
// Leif Christensen
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
	for (let rectX = 0; rectX < width; rectX += width/8) {
		for (let rectY = 0; rectY < height; rectY += width/8){
			if(rectX % 8 === 0 || rectY % 8 === 0){ 
        fill(0);
        rect(rectX, rectY, width/8, width /8); 
      }			
      else {
        fill(255)
        rect(rectX, rectY, width/8, width /8); 
      }
		}
  }
}