const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  character = new Character(300, 200, 5 ,5);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  character.display();
}