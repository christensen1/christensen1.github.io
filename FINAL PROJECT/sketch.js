// Final Project
// Leif Christensen
// 5/30/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Spaceships = [];
let Jetflames = [];
let blasts = [];
let shootingArray = [];
let bullet = 0;
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
  start = 0;
}


function draw() {
  if (start === 0 ){
    startScreen(220, 500, 150);
   }
   else{
    player();
  }
  for ( let i = 0; i < shootingArray.length; i++){
    shootingArray[i].move();
    shootingArray[i].display();
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
  text('SPACE DEFENCE', width/2-240 , 200);
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


function player(){
  background(255);
  stroke(4, 40, 96)
  strokeWeight(4);
  fill(0);
  rect(width/12, height/2, width/4, height);
  //rect(width/6, height/2, width/4, height);
  imageMode(CENTER);
  image(Spaceships[spaceship], xPoint, yPoint, 110, 110);
  movement();
}

function movement(){
  imageMode(CENTER);
  if(keyIsDown(UP_ARROW)){
    yPoint = yPoint - 5;
    image(Jetflames[2], xPoint, yPoint+70, 50, 50);
    image(Jetflames[3], xPoint, yPoint+70, 50, 50);
  }
  else if(keyIsDown(RIGHT_ARROW)){
    xPoint = xPoint + 4;
    image(Jetflames[1], xPoint -5, yPoint+55, 40,  40);
  } 
  else if(keyIsDown(LEFT_ARROW)){
    xPoint = xPoint - 4;

    image(Jetflames[1], xPoint + 5, yPoint+55, 40, 40);
  }
  else if(keyIsDown(DOWN_ARROW)){
    yPoint = yPoint + 4;
    image(Jetflames[0,1], xPoint, yPoint+55, 40, 40);
  }
}

function keyPressed(){
  // imageMode(CENTER);
  // if(keyIsDown(UP_ARROW)){
  //   yPoint = yPoint - 5;
  //   image(Jetflames[2], xPoint, yPoint+70, 50, 50);
  //   image(Jetflames[3], xPoint, yPoint+70, 50, 50);
  // }
  // else if(keyIsDown(RIGHT_ARROW)){
  //   xPoint = xPoint + 4;
  //   image(Jetflames[1], xPoint -5, yPoint+55, 40,  40);
  // } 
  // else if(keyIsDown(LEFT_ARROW)){
  //   xPoint = xPoint - 4;

  //   image(Jetflames[1], xPoint + 5, yPoint+55, 40, 40);
  // }
  // else if(keyIsDown(DOWN_ARROW)){
  //   yPoint = yPoint + 4;
  //   image(Jetflames[0,1], xPoint, yPoint+55, 40, 40);
  // }
  if(key === (' ')){
    shootingArray.push(new shooting(this.x, this.y));
    print('11');
  }
}

class shooting{
  constructor(){
    this.x  = xPoint + 2.5;
    this.y = yPoint-50;
    this.size = 50;
    this.ySpeed = 10;
  }
  move(){
    this.y -= this.ySpeed;
    this.enemyCollision();
  }
  enemyCollision(){

  }
  display(){
    imageMode(CENTER);
     image(blasts[1], this.x,this.y , this.size, this.size)
  }
}
