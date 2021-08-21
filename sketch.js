var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var snow = [];

function preload() {
  bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}



function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%60===0) {
    snow.push(new Snow(random(50,400),0))
  }
  
  
    //display the particles 
    for (var k = 0; k < snow.length; k++) {
      snow[k].display();   
    }
}