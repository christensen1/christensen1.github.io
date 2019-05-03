// terran generater
// Leif C.
// 4/5/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//declares all varbles.
let start = 0;
let inc = 0.01;
let xOffset = 0.01;
let highest = 2000;
let flagX;
let average = 0;
let rectNum = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  generateTerrian();//links to the other functions.
  drawFlag();
  averageHeight();
}

function generateTerrian(){
  background(255);
  fill(0);
  let xOffset = start;
  highest = height;
  flagX = 0;
  average = 0;
  rectNum = 0;
  for(let x = 0; x < width; x ++){//this loop creates the rectangles that build the terrain.
    let y = noise(xOffset) * height;
    if (y <= highest){//find and stores the highest point and checks as new terrain is made.
      highest = y;
      flagX = x;
    }
    average += y;//stores the average.
    rectNum ++;
    rect(x, y, 1, height- y );
    xOffset += inc;
  }
  start += inc;
}

function drawFlag(){//draws the flag as an indicator of the highest point 
  fill(200,100,50)
  strokeWeight(3)
  line (flagX,highest,flagX,highest-50);
  fill(200,0,0);
  triangle(flagX, highest -50,flagX + 25, highest - 40 , flagX, highest - 30);
}

function averageHeight(){//draws a line at the average height of the rectangles
  average = average/rectNum;
  line(0, average, width, average);
}