var fr,mr;
var r1,r2;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "pink";

  mr = createSprite(500, 200, 50, 50);
  mr.shapeColor = "pink";

  r1 = createSprite(400, 100, 50, 50);
  r1.shapeColor = "pink";
  r1.velocityX=4;

  r2 = createSprite(700, 100, 50, 50);
  r2.shapeColor = "green";
  r2.velocityX=-4;
}

function draw() {
  background(0);
  mr.x=mouseX;
  mr.y=mouseY;  
if(isTouching(mr,r2)){
    mr.shapeColor = "red";
    r2.shapeColor = "red";
}
else{
  mr.shapeColor = "pink";
  r2.shapeColor = "pink";

}
  bounceOff(r1,r2);
  drawSprites();
}
