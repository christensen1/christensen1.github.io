// Video Demo
// Leif Christensen
// 5/16/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let video;
const gridespacing = 10;
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
}
function avgPixel(pos){
  return (pixels[pos]+ pixels[pos+1] + pixels[pos+2]) / 3;

}
function setPixelColor(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}
function draw() {
  background(0);
  video.loadPixels();
  for(let x = 0; x < video.width; x+=gridespacing){
    for(let y = 0; y < video.height; y+=gridespacing){
      let location = (x+y*video.width) * 4
      let avg = avgPixel(location);

      //fill(pixels[location],pixels[location+1],pixels[location+2]);
      //ellipse(x, y, gridespacing,gridespacing);
      drawCharcter(x,y,avg);
    }
  }
  video.updatePixels();
  //image(video, 0, 0);
}
function drawCharcter(x,y,avg){
  textSize(gridespacing);
  fill(255)
  noStroke();
  if (avg > 200){
    text("N,x,y");
  }
  else if (avg > 100){
    text("F",x,y);

  }
  else if(avg > 40){
    text("K",x,y)
  }
}
function art(){
  for(let i = 0; i < pixels.length; i+=4){
    if(avgPixel(i)> 200){
      setPixelColor(i,255,255,255);
    }
    else if(avgPixel(i) > 120){
      setPixelColor(i,180,180,255);
    }
    else if(avgPixel(i) > 60){
      setPixelColor(i,90,180,80);
    }
    else{
      setPixelColor(i,40,0,10);
    }
    pixels[i] = 0;
  }
}
