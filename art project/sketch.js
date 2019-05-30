// Gernerative art
// Leif Christensen
// 5/3/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let colours1 = ["#270C5D","#270C5D","#7149B9"];
let Colours2 = ["#FF4E50", "#C913A", "#F9D423"];
let colours3 = ["#033649","#031634","#036564"];



function setup() {
  createCanvas(3000, 3000);
  x = width/2;
  y = width/2;
}

function draw() {
  background(255);
  drawCircle();
  drawTriangle();
}

function drawCircle() {
  for (let i = 0; i <= 100; i ++){
    for (let j = 0; j <= 20; j ++){
      fill(0);
      push();
      strokeWeight(2);
      translate(x, y);
      rotate(radians(random(frameCount*4)));
      ellipse(x, y, int(random(1800, 2500)), int(random(1700, 2000)));
      pop();
    }
    stroke(colours1[int(random(colours1.length))])
  }
  for (let i = 0; i <= 100; i ++){
    for (let j = 0; j <= 20; j ++){
      fill(0);
      push();
      strokeWeight(3);
      translate(x, y);
      rotate(radians(random(frameCount*4)));
      ellipse(x, y, int(random(1500, 1800)), int(random(1400, 1700)));
      pop();
    }
    stroke(colours3[int(random(colours3.length))])
  }
  for (let i = 0; i <= 100; i ++){
    for (let j = 0; j <= 20; j ++){
      fill(0);
      push();
      strokeWeight(2);
      translate(x, y);
      rotate(radians(random(frameCount*4)));
      ellipse(x, y, int(random(1000, 1500)), int(random(1100, 1400)));
      pop();
    }
    stroke(colours1[int(random(colours1.length))])
  }
}

function drawTriangle(){
  for (let i = 0; i <= 100; i ++){
    for (let j = 0; j <= 20; j ++){
      fill(Colours2[int(random(Colours2.length))]);
      push();
      translate(x, y);
      rotate(radians(random(frameCount*4)));
      triangle(200, 650, 480, 100 , int(random(300,550)), int(random(300, 550)));
      pop();
    }
    stroke(Colours2[int(random(Colours2.length))])
  }
}

function keyPressed(){
  if(key === 's'){
    save();
  }
}

