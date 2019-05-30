// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  pArray.push(new Particle(mouseX, mouseY));
  for (let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();  
    if (pArray[i].isAlive() === false){
      pArray.splice(i,1);
      i--;  
    }
  }
}

function mouseClicked(){
  
}

class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_,0,width, 0, 255),map(y_, 0 , height, 0, 255),map(x_, 0 ,width,255,0));
    this.size = random(10,50);
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-1,1);
    this.lifetime = int(random(80,300));
    this.grav = 0.1;
    this.maxLifeTime = this.lifetime;
  }
  floorCollision(){
    if (this.y > height){
      this.y = height;
      this.ySpeed *= -1;
    }
  }
  move(){
    this.lifetime -= 1;
    this.ySpeed += this.grav;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.floorCollision();
  }

  isAlive(){
    if (this.lifetime > 0) return true;
    else return false;
  }

  display(){
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x, this.y);
    scale(map(this.lifetime,0,this.maxLifeTime,0, 1));
    ellipse(0,0,this.size,this.size);
    pop();
  }

}