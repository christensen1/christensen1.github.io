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
let opponentArray = [];
let astroide = [];
let explosions = [];
let bullet = 0;
let startBackground;
let start= 0;
let spaceship = 0;
let xPoint;
let yPoint;
let opponentX;
let opponentY;
let lives = 5;
//sets all the varibles and arrays needed, like the arrays for the images as well as the health and positions.

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
  astroide.push(loadImage('assets/astroide1.png'));
  astroide.push(loadImage('assets/astroide2.png'));
  startBackground = loadImage('assets/spacebackground.jpg');
  //space = loadImage('assets/space.jpg');
  //explosions.push(loadImage('assests/explosion1.png'))
  //explosions.push(loadImage('assests/explosion2.png'))
  //explosions.push(loadImage('assests/explosion3.png'))
}
//preloads the needed images some in arrays and others just into varibles to be used for the background, spaceships and the effects.

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPoint = width/2;
  yPoint = height/2 + 150;
  opponentX = random(width/4, width - width/4);
  opponentY = 0;
  start = 0;
}
//setups the canvas and sets some varibles that requrie the screen size.

function draw() {
  if (start === 0 ){
    startScreen(220, 500, 150);
   }
   else{
    gameSetup();
  }
  //tests to see if the player has chosen a sprite for the game and starts the game when it has been chosen.
  for (let j = 0; j < opponentArray.length; j++ ){
    opponentArray[j].move();
    opponentArray[j].display();
  }
  //loops the opponent, the astroid class into their array and allows them to move and be seen.
  for ( let i = 0; i < shootingArray.length; i++){
    shootingArray[i].move();
    shootingArray[i].display();
  }
  //loops the shooting array and allows the bullests to move and be seen.
}

function startScreen(postionX, postionY, size){
  imageMode(CENTER);
  rectMode(CENTER);
  fill(0);
  image(startBackground, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  stroke(255, 250, 2);
  strokeWeight(3)
  //sets up the start screen background.
  for (let i = 0 ; i < 5; i++ ){
    rect(postionX + 330*i, postionY, 250, 300);
    image(Spaceships[i], postionX + 330*i, postionY, size, size);
  }
  //places the choices for yur ship in rectangles to be made into buttons.
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
//signals when a button has been clicked and a ship has been chosen.

function gameSetup(){
  background(255);
  gamebackground();
  stroke(4, 40, 96)
  strokeWeight(4);
  fill(0);
  rect(0, height/2, width/3, height);
  rect(width, height/2, width/3, height);
  player();
  enemy();
  movement();
}
//setsup the game.

function player(){
  if(lives > 0 ){
    imageMode(CENTER);
    image(Spaceships[spaceship], xPoint, yPoint, 110, 110);
  }
  //explosion animation
  textSize(150)
  stroke(255, 250, 2);
  strokeWeight(3)
  print('END GAME', width/2, height/2)
}
//places the  player incontroll of the ship they chose with 5 lives.

function gamebackground(){
  imageMode(CENTER)
  image(startBackground, width/2 ,height/2, width/1.5, height);
  textSize(60)
  stroke(255, 250, 2);
  strokeWeight(3)
  print('LIVES:', width/2, height/2);
}
//puts the background in.

function movement(){
  imageMode(CENTER);
  if(keyIsDown(UP_ARROW)){
    yPoint = yPoint - 7;
    image(Jetflames[3], xPoint, yPoint+70, 50, 50);
  }
  else if(keyIsDown(RIGHT_ARROW)){
    xPoint = xPoint + 6;
    image(Jetflames[1], xPoint -5, yPoint+55, 40,  40);
  } 
  else if(keyIsDown(LEFT_ARROW)){
    xPoint = xPoint - 6;

    image(Jetflames[1], xPoint + 5, yPoint+55, 40, 40);
  }
  else if(keyIsDown(DOWN_ARROW)){
    yPoint = yPoint + 6;
    image(Jetflames[0,1], xPoint, yPoint+55, 40, 40);
  }
}
//setsup the ships movement for the player.

function keyPressed(){
  if(key === (' ')){
    shootingArray.push(new shooting(this.x, this.y));
  }
}
//the shooting functions that the player will use to destroy the incoming astroids and pusahs the class into the array that will-
//be looped at the top.

function enemy(){
  if(frameCount % 30 === 0 ){
    opponentArray.push(new opponent(this.x, this.y));
  }
}
//generates the enemys at a semi-frequent rate and pushes the class into the array.

class shooting{
  constructor(){
    this.x  = xPoint + 2.5;
    this.y = yPoint-50;
    this.size = 50;
    this.ySpeed = 10;
  }
  move(){
    this.y -= this.ySpeed;
  }
  collision(){
    if(this.x > opponentX + 60 && this.x < opponentX - 60){
      if(this.y > opponentY + 60 && this.y < opponentY - 60){
        print('hit')
      }
    }
  }
  display(){
    imageMode(CENTER);
     image(blasts[1], this.x,this.y , this.size, this.size)
  }
}
//this is the class that generates the bullests.

class opponent{
  constructor(){
    this.x = random(width/5.5, width - width/5.5);
    this.y = opponentY
    this.angle = (random(-5, 5));
    this.size = (random(80,120));
    this.xSpeed = random(-10,10);
    this.ySpeed =6.5;
  }
  //sets the size and position.
  move(){
    if (this.x < width/5.5 || this.x > width - width/5.5){
      this.xSpeed *= -1;
    }
    this.y += this.ySpeed;
    this.x += this.xSpeed;
  }
  //lets teh class travel across the screen and stops it from going across the boarders.
  collision(){
    if(this.x > xPoint + 60 && this.x < xPoint - 60){
      if(this.y > yPoint + 60 && this.y < yPoint - 60){
        print('hit');
        lives = lives -1;
      }
    }
  }
  //checks if the astoride hits the player.
  display(){
    imageMode(CENTER);
    image(astroide[0],this.x, this.y, this.size, this.size);
  }
}
//this is the opponent that will try to distroy your spaceship.