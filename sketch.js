const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
const Constraint= Matter.Constraint
var myEngine,myWorld


function setup() {
  createCanvas(800,600);
  myEngine=Engine.create()
    myWorld=myEngine.world
 ground1 =new Ground(400,580,800,20)
  box1= new Box(700,200,50,50)
  box2= new Box(700,200,50,50)
  box3= new Box(700,200,50,50)
  box4= new Box(700,200,50,50)
  box5= new Box(700,200,50,50)
  box6= new Box(700,200,50,50)
  /*box7= new Box(700,200,50,50)
  box8= new Box(700,200,50,50)
  box9= new Box(700,200,50,50)
  box10= new Box(700,200,50,50)
  box11= new Box(700,200,50,50)*/
  ball= new Ball(200,200,80,80)
  rope=new Rope(ball.body,{x:400,y:50})
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
ground1.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
/*box7.display()
box8.display()
box9.display()
box10.display()
box11.display()*/
ball.display()
rope.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}