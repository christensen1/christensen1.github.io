// Vector Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let m;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m = new Mover(width/2,height/2);
}

function draw() {
  m.move();
  m.display();
}

class Mover{
  //constructor and properties
  constructor(x_, y_){
    this.size = 20;
    this.position = createVector(x_, y_);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
  
  }
  move(){
    this.acceleration = p5.Vector.random2D().mult(2);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(5);
    this.edges();
  }

  edges(){
    if(this.position.x < 0)this.position.x = width;
    if(this.position.x > width)this.position.x = 0;
    if(this.position.y < 0)this.position.y = height;
    if(this.position.y > height)this.position.y = 0;
  }

  display(){
    ellipseMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    ellipse(0,0,this.size, this.size);
    pop();
  }
}





// let position;
// let velocity;
// let gravity;
// let mouse;
// let center;
// let towardsMouse;
// let m;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // position = createVector(windowWidth/2, windowHeight/2);
//   // velocity = createVector(random(-5, 5), random(-5, -1));
//   // gravity = createVector(0,0.06)
//   m = new Mover(width/2, height/2);
// }

// function draw() {
//   m.move();
//   m.display();
//   // background(220);
//   // let mouse = createVector(mouseX,mouseY);
//   // let center = createVector(width/2, height/2);
//   // let towardsMouse = mouse.sub(center);
//   // push();
//   // translate(width/2, height/2);
//   // towardsMouse.normalize();
//   // line(0, 0, towardsMouse.x, towardsMouse.y);
//   // velocity.add(gravity);
//   // position.add(velocity);
//   // ellipse(position.x, position.y, 100, 100);
//   // let m = towardsMouse.mag();
//   // textSize(30);
//   // text(m, 0, 50);
//   // pop();
// }

// class Mover{
//   constructor(x_, y_){
//     this.size = 10;
//     this.position = createVector(x_, y_);
//     this.velcoity = createVector(0, 0);
//     this.acceleration = (0, 0);
//   }
//   move(){
//     this.acceleration = p5.vector.random2D().nult(2);
//     this.velcoity.add(this.acceleration);
//     this.position.add(this.velcoity);
//     this.velcoity/limit(5);
//   }
//   display(){
//     ellipseMode(CENTER);
//     push();
//     translate(this.position.x, this.position.y);
//     ellipse(0, 0, this.size, this.size);
//     pop();
//   }

// }