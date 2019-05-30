// WOW sorting is cool
// LEIF CHRISTENSNEN THE TRUE LEIF FUCK LEIF BUTLER
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let values = [30, 20, 0, 6, 29];

function setup() {
  noCanvas();
  noLoop();
}

function selectionSort(){
  for (let index = 0; index < values.length-1; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for (let checkIndex = index+1; checkIndex < values.length; checkIndex++){
      let cur = values[checkIndex];
      if (cur < minimum){
        minimum = cur;
        minimumLoc = checkIndex;
      }
    }
    let temp = values[index];
    values[index] = values[minimumLoc];
    values[minimumLoc] = temp;
  }

}

function draw() {
  print(values);
  selectionSort();
  print(values);
}
