// Chess Bored
// Leif Christensen
// 4/16/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SIZE = 75;//stores the size.

function setup() {
  createCanvas(600, 600);//sets up the background.
}

function draw() {
  chessBored();//links to the fiunction that draws the bored
}

function chessBored(){
  for (let i = 0; i <= 600; i+= SIZE ){//loops the pruduction of rectangles.
    for (let j = 0; j <= 600; j+= SIZE){
      if(i % 2 === 0 && j % 2 === 0){//checks for the postion of  what colour it should be
        fill(0);
      }
      else if(i % 2 !== 0 && j % 2 !== 0){
        fill(0);
      }
      else{
        fill(255);
      }
      rect(i, j, SIZE, SIZE);//draws the rectangles in the needed colour.
    }
  }
}