var movingRect, fixedRect, gameObject1, gameObject2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 200, 50, 50);
  fixedRect.tint = "red";

  movingRect = createSprite(200, 200, 40, 40);
  movingRect.tint = "red";

  gameObject1 = createSprite(400, 400, 30, 30);
  gameObject1.tint = "blue";

  gameObject2 = createSprite(400, 280, 30, 30);
  gameObject2.tint = "white";

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background(0, 0, 0); 
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  if(isTouching(gameObject1, movingRect)){
    movingRect.tint = "green";
    gameObject1.tint = "green";
  }else{
    movingRect.tint = "red";
    gameObject1.tint = "blue";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

function isTouching (object1, object2) {
  if(object1.width/2 + object2.width/2 > object2.x - object1.x && 
    object1.width/2 + object2.width/2 > object1.x - object2.x && 
    object1.height/2 + object2.height/2 > object1.y - object2.y &&
    object1.height/2 + object2.height/2 > object2.y - object1.y){
    return true;
  }else{
    return false;
  }
}
function bounceOff(object1, object2){
  if(object1.width/2 + object2.width/2 > object2.x - object1.x && 
    object1.width/2 + object2.width/2 > object1.x - object2.x){
      object1.velocityX = object1.velocityX * -1;
      object2.velocityX = object2.velocityX * -1;
  }if(object1.height/2 + object2.height/2 > object1.y - object2.y &&
    object1.height/2 + object2.height/2 > object2.y - object1.y){
      object1.velocityY = object1.velocityY * -1;
      object2.velocityY = object2.velocityY * -1;
  }
}