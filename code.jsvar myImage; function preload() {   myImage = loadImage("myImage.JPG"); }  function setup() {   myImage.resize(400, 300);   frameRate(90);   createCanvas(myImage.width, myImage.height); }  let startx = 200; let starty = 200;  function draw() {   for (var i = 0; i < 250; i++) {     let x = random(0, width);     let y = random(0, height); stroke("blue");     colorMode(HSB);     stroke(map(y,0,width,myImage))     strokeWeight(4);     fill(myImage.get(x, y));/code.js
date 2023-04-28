var myImage;
function preload() {
  myImage = loadImage("myImage.JPG");
}

function setup() {
  myImage.resize(400, 300);
  frameRate(90);
  createCanvas(myImage.width, myImage.height);
}

let startx = 200;
let starty = 200;

function draw() {
  for (var i = 0; i < 250; i++) {
    let x = random(0, width);
    let y = random(0, height);
stroke("blue");
    colorMode(HSB);
    stroke(map(y,0,width,myImage))
    strokeWeight(4);
    fill(myImage.get(x, y));
    //circle(x, y, 15);
    rect(x,y,20)
  }
}
