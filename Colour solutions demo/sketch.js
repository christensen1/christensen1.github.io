// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colours = ["#7AA1C1","#7781A0","#73617F","#70415D","#6C213C"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  drawRowRGB(height * 0.2);
  drawRowHSV(height/2);
  drawRowCustom(height/3);
}

function drawRowHSV(yPos){
  colorMode(HSB);
  for (let x = 0; x < width; x +=rectWidth){
    fill(x%360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowRGB(yPos){
  colorMode(RGB);
  for (let x = 0; x < width; x +=rectWidth){
    fill(random(255),random(255),random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}
function drawRowCustom(yPos){
  colorMode(RGB);
  for (let x = 0; x < width; x +=rectWidth){
    fill(colours[counter]);
    rect(x, yPos, rectWidth, rectHeight);
    counter ++;
  }
}

function draw() {
  //background(0);
}
