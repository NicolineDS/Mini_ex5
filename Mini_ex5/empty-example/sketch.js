var img;
var img1;
var rot = 0;
var rotFish = false;

var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;
var bubble6;


function preload(){
  img = loadImage('assets/Ocean.jpg');
  img1 = loadImage('assets/fish.jpg');
}


function setup() {

createCanvas(windowWidth, windowHeight);


bubble1 = new bubble(457,326,30);
bubble2 = new bubble(500,400, 30);
bubble3 = new bubble(600,300,30);
bubble4 = new bubble(800,700,30);
bubble5 = new bubble(900,200,30);
bubble6 = new bubble(1000,680,30);
}

function draw() {
  imageMode(CORNER);
  image(img,0,0,windowWidth, windowHeight);
  noCursor();


  if (dist(bubble1.x,bubble1.y,mouseX,mouseY) < bubble1.r ||
  dist(bubble2.x,bubble2.y,mouseX,mouseY) < bubble2.r ||
  dist(bubble3.x,bubble3.y,mouseX,mouseY) < bubble3.r ||
  dist(bubble4.x,bubble4.y,mouseX,mouseY) < bubble4.r ||
  dist(bubble5.x,bubble5.y,mouseX,mouseY) < bubble5.r ||
  dist(bubble6.x,bubble6.y,mouseX,mouseY) < bubble6.r){
    rotFish = true;
    console.log(rot);
  } else {
    imageMode(CENTER);
    image(img1,mouseX,mouseY,150,150);
    rot = 0;
  }
  if (rotFish){
    push();
    translate(mouseX,mouseY);
    rotate(radians(rot));
    imageMode(CENTER);
    image(img1,0,0,150,150);
    rot+=4;
    pop();
    if (rot == 360) {
      rot = 0;
      rotFish = false;
    }
    }

  fill(7, 127, 151);
  bubble1.move();
  bubble1.show();
  fill(44, 198, 229);
  bubble2.move();
  bubble2.show();
  fill(17, 149, 175);
  bubble3.move();
  bubble3.show();
  fill(93, 194, 214);
  bubble4.move();
  bubble4.show();
  fill(59, 167, 189);
  bubble5.move();
  bubble5.show();
  fill(62, 207, 236);
  bubble6.move();
  bubble6.show();


}

function mousePressed(){
  console.log(mouseX, mouseY);}

  class bubble{
    constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;

    }
    move() {
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
}

show() {
  stroke(255);
  strokeWeight(7);
  //noFill(0);
  ellipse(this.x, this.y, this.r * 2);
}

  }
