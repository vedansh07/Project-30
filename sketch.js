const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon_img=loadImage("polygon.png");


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,390,1000,20);
    base = new Ground(550, 305,250,20);
    base2 = new Ground(800,205,250,20);

    block1=new Box(480,275);
    block2=new Box(510,275);
    block3=new Box(540,275);
    block4=new Box(570,275);
    block5=new Box(600,275);
    block6=new Box(450,315);
    block7=new Box(630,275);

    block8=new Box(480,235);
    block9=new Box(510,235);
    block10=new Box(540,235);
    block11=new Box(570,235);
    block12=new Box(600,235);

    block13=new Box(510,195);
    block14=new Box(530,195);
    block15=new Box(560,195);

    block16=new Box(530,155);

    block17=new Box(800,100);
    block18=new Box(800,140);
    block19=new Box(830,140);
    block20=new Box(770,140);

    block21=new Box(800,180);
    block22=new Box(830,180);
    block23=new Box(860,180);

    block24=new Box(770,180);
    block25=new Box(730,180);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling=new slingShot(polygon,{x:100,y:200});

}
//'this' is a keyword which is used to indicate an object created from the class.
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    base.display();
    base2.display();

    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("red");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("pink");
    block13.display();
    block14.display();
    block15.display();

    fill("green");
    block16.display();

    fill("blue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    fill("green");
    block21.display();
    block22.display();
    block23.display();

    fill("pink");
    block24.display();
    block25.display();

    imageMode(CENTER);
    image (polygon_img,polygon.position.x,polygon.position.y,40,40)

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);    

}
}
