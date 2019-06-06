// Final Project
// Leif Christensen
// 5/30/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Spaceships = [];
let Jetflames = [];
let blasts = [];
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
  blasts.push(loadImage('assets/blast1.png'));
  blasts.push(loadImage('assets/blast2.png'));
  blasts.push(loadImage('assets/blast3.png'));
  Jetflames.push(loadImage('assets/jetflame1.png'));
  Jetflames.push(loadImage('assets/jetflame2.png'));
  Jetflames.push(loadImage('assets/jetflame3.png'));
  Jetflames.push(loadImage('assets/jetflame4.png'));
  startBackground = loadImage('assets/spacebackground.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  xPoint = width/2;
  yPoint = height/2 + 150;
  bullet = xPoint;
}


function draw() {
  background(0);
  if (start === 0 ){
    startScreen(220, 500, 150);
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
  if (mouseIsPressed && mouseX < postionX + 330*0 + 250/2  && mouseX > postionX + 330*0 - 250/2){
    if (mouseIsPressed && mouseY < postionY + 300/2 && mouseY > postionY - 300/2){
      start = 1;
      spaceship = 0;
    }
  }
  if (mouseIsPressed && mouseX < postionX + 330*1 + 250/2  && mouseX > postionX + 330*1 - 250/2){
    if (mouseIsPressed && mouseY < postionY + 300/2 && mouseY > postionY - 300/2){
      start = 1;
      spaceship = 1;
    }
  }
  if (mouseIsPressed && mouseX < postionX + 330*2 + 250/2  && mouseX > postionX + 330*2 - 250/2){
    if (mouseIsPressed && mouseY < postionY + 300/2 && mouseY > postionY - 300/2){
      start = 1;
      spaceship = 2;
    }
  }
  if (mouseIsPressed && mouseX < postionX + 330*3 + 250/2  && mouseX > postionX + 330*3 - 250/2){
    if (mouseIsPressed && mouseY < postionY + 300/2 && mouseY > postionY - 300/2){
      start = 1;
      spaceship = 3;
    }
  }
  if (mouseIsPressed && mouseX < postionX + 330*4 + 250/2  && mouseX > postionX + 330*4 - 250/2){
    if (mouseIsPressed && mouseY < postionY + 300/2 && mouseY > postionY - 300/2){
      start = 1;
      spaceship = 4;
    }
  }
}

function gameBackground(){
  background(255);
  image(startBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}

function player(){
  background(255);
  imageMode(CENTER);
  image(Spaceships[spaceship], xPoint, yPoint, 120, 120);
  keyPressed();
}

function keyPressed(){
  imageMode(CENTER);
  if(keyCode === UP_ARROW){
    yPoint = yPoint - 3;
    image(Jetflames[2], xPoint, yPoint+70, 50, 50);
    image(Jetflames[3], xPoint, yPoint+70, 50, 50);
  }
  else if(keyCode === RIGHT_ARROW){
    xPoint = xPoint + 4;
    //image(Jetflames[0], xPoint, yPoint+70, 50, 50);
    image(Jetflames[1], xPoint, yPoint+70, 60,  50);
  } 
  else if(keyCode === LEFT_ARROW){
    xPoint = xPoint - 3;
    //image(Jetflames[0], xPoint, yPoint+70, 50, 50);
    image(Jetflames[1], xPoint, yPoint+70, 60, 60);
  }
  else if(keyCode === DOWN_ARROW){
    yPoint = yPoint + 3;
    //image(Jetflames[0], xPoint, yPoint+70, 50, 50);
    image(Jetflames[1], xPoint, yPoint+70, 60, 60);
  }
  if(keyCode = " "){
  }
  image(Jetflames[1], xPoint, yPoint+70, 60, 60);
}

class bullet{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this
  }
}