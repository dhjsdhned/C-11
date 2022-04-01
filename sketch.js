
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
 trex=createSprite(50,160,20,50); (Comment="this is to create a sprite")
 trex.addAnimation("running", trex_running);  (Comment="adding the animation which the trex is doing")
 trex.scale=0.5; (Comment="Decrease the size of the sprite")
 ground=createSprite(200,180,400,20); (Comment="Create the ground sprite")
}

function draw(){
  background("white")
  if(keyDown("space"))  
  {
    trex.velocityY=-8;  (Comment="how the trex moves up") 
  }
  trex.velocityY=trex.velocityY+0.5; (Comment="how the trex comes back down")
  trex.collide(ground); (Comment="how the trex jumps only from the ground sprite")
  drawSprites()
}
