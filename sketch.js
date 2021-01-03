const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var ground, polygon, polygonImage, sling;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
function preload(){
    polygonImage=loadImage("polygon.png")

}
function setup(){
    createCanvas(800,600)
    
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,450,406,10)

    polygon=Bodies.circle(100,300,50)
    World.add(world, polygon)

    sling=new Slingshot(polygon, {x:100,y:200}) 
    sling.attach(polygon)

    b1=new Box(326,400,58,100)
    b2=new Box(326+58,400,58,100)
    b3=new Box(326+58+58,400,58,100)
    b4=new Box(326+58+58+58,400,58,100)
    b5=new Box(326+58+58+58+58,400,58,100)
    b6=new Box(326+58+58+58+58+58,400,58,100)
    b7=new Box(326+58+58+58+58+58+58,400,58,100)
    b8=new Box(326+58,300,58,100)
    b9=new Box(326+58+58,300,58,100)
    b10=new Box(326+58+58+58,300,58,100)
    b11=new Box(326+58+58+58+58,300,58,100)
    b12=new Box(326+58+58+58+58+58,300,58,100)
    b13=new Box(326+58+58,200,58,100)
    b14=new Box(326+58+58+58,200,58,100)
    b15=new Box(326+58+58+58+58,200,58,100)
    b16=new Box(326+58+58+58,100,58,100)
    Engine.run(engine);
    
}
function draw(){
    background(200)
    ground.display()
    b1.disapear()
    b2.disapear()
    b3.disapear()
    b4.disapear()
    b5.disapear()
    b6.disapear()
    b7.disapear()
    b8.disapear()
    b9.disapear()
    b10.disapear()
    b11.disapear()
    b12.disapear()
    b13.disapear()
    b14.disapear()
    b15.disapear()
    b16.disapear()
    sling.display()
    imageMode(CENTER)
    image(polygonImage, polygon.position.x, polygon.position.y,50,50)
    drawSprites()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon)
    }
}
