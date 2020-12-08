var fixedRect, movingRect;
var game1, game2;
var block1, block2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  game1 = createSprite(100, 50, 80,50);
  game1.shapeColor = "green";

  block1 = createSprite(200,200,80,80);
  block1.velocityX = 2;

  block2 = createSprite(1000,200,80,80);
  block2.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(block1,block2);

  if(isTouching(game1, movingRect)){
    game1.shapeColor = "red";
    movingRect.shapeColor = "red";
  
  }
  else{
    game1.shapeColor = "green";
    movingRect.shapeColor = "green";
  
  }


    drawSprites();
}

