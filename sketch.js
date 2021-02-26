var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle",0,0,fairy.width,fairy.height);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY=4;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);



}


function draw() {
  background(bgImg);
  Engine.update(engine); 
  
keyPressed();
if(keyDown("space")){
    starBody.velocityY=4;     
 }
if(star.isTouching(fairy)){
	star.velocityY=0;
}
drawSprites();
}

 



function keyPressed() {
	//write code here
	if(keyDown("RIGHT_ARROW")){
		fairy.x=fairy.x+10;
	}
	if(keyDown("LEFT_ARROW")){
		fairy.x=fairy.x-10;
	}
}
