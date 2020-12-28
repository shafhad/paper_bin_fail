
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,box2,box3;
var paper;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   //Create the Bodies Here.
	  
  Ground = new Ground(400,650,810,20);

  box1 = new Bin(640,635,130,15);
  box2 = new Bin(580,605,15,70);
  box3 = new Bin(705,605,15,70);
  
  paper = new Paper(200,600,20);

	Engine.run(engine);
  
}


function draw() {
  background("black");

  Engine.update(engine);  

   Ground.display();

   box1.display();
   box2.display();
   box3.display();

   paper.display();
   
   KeyPressed();
  drawSprites();
 
}

function KeyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

