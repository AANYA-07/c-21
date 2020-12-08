var fixedRect, movingRect;
var ab1,ab2,ab3,ab4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ab1 = createSprite(200,500,60,40);
  ab2 = createSprite(1000,500,40,90);
  ab3 = createSprite(200,550,20,40);
  ab4 = createSprite(400,100,59,30);



  movingRect.velocityY = -5;
  ab4.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,ab4);
  drawSprites();
}

