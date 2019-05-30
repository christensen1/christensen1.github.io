// Final Project
// Leif Christensen
// 5/30/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Spaceships = [];
let startBackground;

function preload(){
  Spaceships.push(loadImage('assets/Spaceship1.png'));
  Spaceships.push(loadImage('assets/Spaceship2.png'));
  Spaceships.push(loadImage('assets/Spaceship3.png'));
  Spaceships.push(loadImage('assets/Spaceship4.png'));
  Spaceships.push(loadImage('assets/Spaceship5.png'));
  startBackground = loadImage('assets/spacebackground.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  startScreen(150, 500, 150);
}

function startScreen(postionX, postionY, size){
  imageMode(CENTER);
  rectMode(CENTER);
  fill(0);
  image(startBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  for (let i = 0 ; i < 5; i++ ){
    rect(postionX + 330*i, postionY, 250, 300);
    image(Spaceships[i], postionX + 330*i, postionY, size, size);
    if(mouseX === postionX + 330*i && mouseY === postionY){
      stroke(246, 255, 0);
      strokeWeight(3)
    }
    else{
      stroke(255);
      strokeWeight(1)
    }
  }
  textSize(62);
  fill(255);
  text('SPACE RACE', width/2-175 , 200);
}