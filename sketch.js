
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var waste,wasteImage ;
var dustbin,dustbinImage;

function preload()
{
	wasteImage = loadImage("Waste.jpeg");
  dustbinImage = loadImage("Dustbin.jpeg");
}

function setup() {
	createCanvas(1200, 400);

	waste=createSprite(80,350 , 10,10);
	waste.addImage(wasteImage);
	waste.scale=0.1;

	dustbin=createSprite(1050,300, 10,10);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.4;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  gameCompleted();

  drawSprites();
 
}
 
function keyPressed(){

if (keyCode === UP_ARROW){

waste.velocityX = 4;
waste.velocityY = -0.65;
}
}
function gameCompleted(){

if(waste.isTouching(dustbin)){

waste.velocityX = 0;
waste.velocityY = 0;

waste.visible = false;
textSize(40);
text("THANKS FOR USING THE DUSTBIN",200,200);

}

}

