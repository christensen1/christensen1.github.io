// Sprite Animation
// Leif Christensen
// 3/21/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacemanR = [];
let spacemanL = [];
let moon;
let x = 0; 
let direction = 0;
let idle = 10;





function preload(){
  moon = loadImage('assets/download.png');
  for (let i = 1; i < 23; i++){
    spacemanL.push(loadImage("assets/spaceman" + i + "L.png"));
    
  }
  for (let i  = 1; i < 23; i++){
    spacemanR.push(loadImage("assets/spaceman" + i + "R.png"));
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(moon);
  image(spacemanR[10], windowWidth/2, 500);
  if (keyIsPressed === true){
    keyPressed();
  }
  if (keyIsPressed === false && direction === 0){
    image(spacemanR[idle], windowWidth, 500);
    idle ++;
    if (idle > 14 ){
      idle = 10;
      
    }
    print(idle)
  }
  else {
    image(spacemanL[idle], winjdowwidth, 500);
    idle ++;
    if (idle > 14 ){
      idle = 10; 
    }
    print(idle)
  }
}


function keyPressed(){

}

