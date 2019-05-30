// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let won = 0 ;
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomizedStart();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();    //render the current game board to the screen (and the overlay)
  if (won === 1){
    fill(255)
    textSize(50);
    text("YOU WON!!!!", width/2, height/2);
    fill(0)
    textSize(50);
    text("YOU WON!!!!", width/2, height/2-100);
  }            
}



function mousePressed(){
  if (mouseButton === LEFT){
    // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
    winner();
  }
  if (mouseButton === RIGHT){//cheaters botton.
    flip(currentCol, currentRow);
    winner();
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function randomizedStart(){//this sets the grid to random colours at the start of the game.
  for (let i = 0; i<gridData.length;i++){
    for(let j = 0; j < gridData[i].length;j++){
     gridData[i][j] = coinFlip();
    }
  }
}

function coinFlip(){//this function controls what the colour of the tial.
  let n = random(100);
  if(n < 50 ){
    return 0
  }
  else{
    return 255
  }
}

function winner(){//this function is used to find out if the screen has been filled.
  let amountSame = 0;
  let testCase =gridData[0][0];
  for (let i = 0; i<gridData.length;i++){
    for (let j = 0; j<gridData[i].length;j++){
      if(gridData[i][j]===testCase){
        amountSame += 1;
        if(amountSame === 20){
          won = 1;
        }
      }
    }
  }
}
