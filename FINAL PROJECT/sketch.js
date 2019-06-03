// Final Project
// Leif Christensen
// 5/30/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Spaceships = [];
let startBackground;
let start= 0;
let spaceship = 0;
let xPoint;
let yPoint;


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
  xPoint = width/2;
  yPoint = height/2 + 150;
}


function draw() {
  background(0);
  if (start === 0 ){
    startScreen(150, 500, 150);
   }
   else{
    gameBackground()
    player()
  }
}

function startScreen(postionX, postionY, size){
  imageMode(CENTER);
  rectMode(CENTER);
  fill(0);
  image(startBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  stroke(255, 250, 2);
  strokeWeight(3)
  for (let i = 0 ; i < 5; i++ ){
    rect(postionX + 330*i, postionY, 250, 300);
    image(Spaceships[i], postionX + 330*i, postionY, size, size);
  }
  textSize(62);
  fill(255);
  text('SPACE DEFENCE', width/2-180 , 200);
  if (mouseIsPressed && mouseX < postionX + 330*0 + 250/2 && mouseX < postionX + 330*0 - 250/2){
    if (mouseIsPressed && mouseX < postionY + 300/2 && mouseX < postionX - 300/2){
    start === 1;
    spaceship = 0;
    }
  }
}

function gameBackground(){
  background(255);
}

function player(){
  background(255);
  imageMode(CENTER);
  image(Spaceships[spaceship], xPoint, yPoint, 100, 100);
  keyPressed();
}

function keyPressed(){
  //if(keyCode )
}