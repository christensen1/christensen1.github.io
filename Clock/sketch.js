// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(180);
  push();
  fill(255);
  translate(windowWidth/2,windowHeight/2);
  strokeWeight(3);
  ellipse(0,0,500);
  for (let i = 0; i < 360 ; i += 6){
    push();
    rotate(radians(i));
    if (i% 30 === 0){
      strokeWeight(4);
      line(195, 0, 240, 0);
    }
    else {
      strokeWeight(1);
      line(220, 0, 240, 0);
    }
    pop();
  }
  push();
  rotate(radians(frameCount/12));
  strokeWeight(2);
  line(0,0, 200, 0);
  pop();

  push();
  strockweight(4);
  rotate(radians(frameCount/720));
  line(0,0, 160, 0);
  pop();

  pop();
}


