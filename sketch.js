
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//1° crear variables de mi personaje e imagen
var cat, catImg;

function preload()
{
	//precargar imagen del gato
	catImg = loadImage("cat.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	// Crear personaje
	cat=createSprite(200,200,40,40);
	cat.addImage("gatitocaminando",catImg);
	cat.scale=0.7;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



