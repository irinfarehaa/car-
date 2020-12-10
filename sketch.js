var car, wall;
var speed, weight;

function setup() {
  createCanvas(1400,400);
  car=createSprite(100, 200, 50, 50);
  wall= createSprite(1300, 200, 50, 200);

  speed=random(55,90);
  car.velocityX=speed;
  weight=random(400,1500);
}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  car.x=wall.x-(car.width+wall.width)/2;
  var deformation=0.5*weight*speed*speed/22500;
  if (deformation<100)
  {
    car.shapeColor="green";
   }
  if(deformation>100 &&deformation<180)
  {
     car.shapeColor="yellow";
  }
  if(deformation>180)
  { 
     car.shapeColor="red";
  }
}
  drawSprites();
}