// Gernerative art
// Leif Christensen
// 5/3/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let colours1 = ["#270C5D","#270C5D","#7149B9"];
let Colours2 = ["#A142D2", "#F76DD6"];
let colours3 = ["#0C0A2F","#4D0283","#5B2680"];


function setup() {
  createCanvas(3000, 4500);
  x = width/2;
  y = width/2;
}

function draw() {
  background(0);
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
      rotate(radians(random(frameCount)));
      ellipse(x, y, int(random(1700, 2000)), int(random(1700, 2000)));
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
      rotate(radians(random(frameCount)));
      ellipse(x, y, int(random(1400, 1700)), int(random(1400, 1700)));
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
      rotate(radians(random(frameCount)));
      ellipse(x, y, int(random(1100, 1400)), int(random(1100, 1400)));
      pop();
    }
    stroke(colours1[int(random(colours1.length))])
  }
}

function drawTriangle(){
  for (let i = 0; i <= 100; i ++){
    for (let j = 0; j <= 20; j ++){
      fill(0);
      push();
      translate(x, y);
      rotate(radians(random(frameCount)));
      triangle(300, 750, 580, 200 , int(random(700,950)), int(random(700, 950)));
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

