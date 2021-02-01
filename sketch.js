
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,ground,rubber,hammer;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(700,height,1400,50);
    stone = new Stone(280,320,70,70);
    rubber = new Rubber(1000,200,100,70);
    hammer = new Hammer(700,400,100,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
 
ground.display();
hammer.display();
stone.display();
rubber.display(); 
drawSprites();
 
}



