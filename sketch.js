var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;




function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadImage("images/sleep.png");
  brush=loadImage("images/brush.png");
  gym=loadImage("images/gym11.png","images/gym12.png","images/gym1.png","images/gym2.png");
  eat=loadImage("images/eat1.png","images/eat2.png");
  drink=loadImage("images/drink1.png","images/drink2.png");
  move=loadImage("images/move.png","images/move1.png");
  bath=loadImage("images/bath1.png","images/bath2.png");
}



function setup() {
  createCanvas(800,400);
  

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;


}

function draw() {
  background(255,255,255);  
  
 
  text("Instructions:",20, 35);
   textSize(15);
    text("Up Arrow = Brushing",20, 55);
    text("Down Arrow = Gymming",20, 70);
     text("Left Arrow = Eating",20, 85); 
     text("Right Arrow = Bathing",20, 100);
      text("m key = Moving",20, 115);
 
  
  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=230;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y=230;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.x=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("m")){
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }
  drawSprites();
}
