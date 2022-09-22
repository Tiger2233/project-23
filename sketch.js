const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground, tower
var bg_img, tower_img
var angle
var cannon
var cannonball 

function preload() {
 
  bg_img = loadImage("./assets/background.gif")
  tower_img = loadImage("./assets/tower.png")

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 cannon = new Cannon (180,110,130,100,angle)
 cannonball = new Cannonball (cannon.x,cannon.y)
 
}

function draw() {
  background(189);
  Engine.update(engine);
 
  image(bg_img,0,0,width,height)

 rect(ground.position.x, ground.position.y,width*2,1);
  
 push()
  imageMode(CENTER)
 image(tower_img,tower.position.x, tower.position.y, 160,310)
  pop()

  cannonball.display()
  cannon.display()
   
}

function keyReleased() {
  if(keyCode === DOWN_ARROW) {
    cannonball.shoot()
  }
}