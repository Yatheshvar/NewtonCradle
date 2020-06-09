
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

  roofObject= new Roof(555,200,225,20);
	bobObject1= new Bob(475,400);
  bobObject2= new Bob(515,400);
  bobObject3= new Bob(555,400);
  bobObject4= new Bob(595,400);
  bobObject5= new Bob(635,400);
  rope1= new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
  //rope2= new Rope(bob2.body,roof.body,-bobDiameter*2,0);
  //rope3= new Rope(bob3.body,roof.body,-bobDiameter*2,0);
  //rope4= new Rope(bob4.body,roof.body,-bobDiameter*2,0);
  //rope5= new Rope(bob5.body,roof.body,-bobDiameter*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
 // rope5.display();
}



