// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let sliderR;
let sliderG;
let sliderB;
let radio;


function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderR = createSlider(0, 255, 120 );
  sliderR.position(10, 20);
  sliderR.style("width", "180px");
  sliderG = createSlider(0, 255, 120 );
  sliderG.position(10, 60);
  sliderG.style("width", "180px");
  sliderB = createSlider(0, 255, 120 );
  sliderB.position(10, 100);
  sliderB.style("width", "180px
  rectMode(CENTER)
  radio.position(width/2-120,height - 150);
  radio.option("Rectangle");
  radio.value("Rectangle");
  radio.otion

}

function draw() {
  background(sliderR.value(), sliderG.value(), sliderB.value());
  textSize(35);
  text("R", 200, 45);
  text(sliderR.value(), 230, 45);
  text("G", 200, 87);
  text(sliderG.value(), 230, 87);
  text("B", 200, 130);
  text(sliderB.value(), 230, 130)
}
