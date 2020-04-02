var fixedRect, movingRect;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;


gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green" ; 

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "green" ; 

gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "green" ; 

gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "green" ; 

// movingRect.velocityY = -5;
// fixedRect.velocityY = +5;

}

function draw() {
   background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //// if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  ////     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  ////     && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  ////     && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  ////   movingRect.shapeColor = "red";
  ////   fixedRect.shapeColor = "red";
  //// }
  //// else {
  ////   // movingRect.shapeColor = "white";
  ////   // fixedRect.shapeColor ="white";
  //// }

  if (isTouching(movingRect,gameObject1)) {
    
    // background("yellow");

    movingRect.shapeColor = "blue" ; 
    gameObject1.shapeColor = "blue" ; 

  } else {

// background("0,0,0");

    movingRect.shapeColor = "green" ; 
    gameObject1.shapeColor = "green" ; 
  }


  if (isTouching(movingRect,gameObject2)) {
    
movingRect.shapeColor = "red" ;
gameObject2.shapeColor = "red" ;

  } else {
    
    movingRect.shapeColor = "green" ;
    gameObject2.shapeColor = "green" ;
}



  if (isTouching(movingRect,gameObject3)) {
    
movingRect.shapeColor = "yellow" ;
gameObject3.shapeColor = "yellow" ;

  } else {
    
    movingRect.shapeColor = "green" ;
    gameObject3.shapeColor = "green" ;


  }



  if (isTouching(movingRect,gameObject4)) {
    
movingRect.shapeColor = "skyblue" ;
gameObject4.shapeColor = "skyblue" ;

  } else {
    
    movingRect.shapeColor = "green" ;
    gameObject4.shapeColor = "green" ;


  }




  if (isTouching(movingRect,fixedRect)) {
    
background ("yellow");
fixedRect.shapeColor = "pink" ;
movingRect.shapeColor = "yellow" ;

  } else {
    
    background (0,0,0);

    movingRect.shapeColor = "green" ;
   fixedRect.shapeColor = "green" ;


  }
  


  drawSprites();
}

function isTouching(object1,object2){

  // movingRect -> gameObject1
  // fixedRect -> gameObject2

   if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
   &&  object2.y - object1.y < object2.height/2 + object1.height/2) {
     
// movingRect.shapeColor = "red";
// fixedRect.shapeColor ="red";

return true;

   } else {
    // movingRect.shapeColor = "green";
    // fixedRect.shapeColor = "green";
 
return false;
  
  
   }
}