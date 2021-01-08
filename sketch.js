var back,backimg,jerry,jerryshouting,jerryimg,jerryimg2,tom,tomimg,
tomrunning,tomimg2;
function preload() {
  backimg=loadImage("garden.png");
  jerryimg=loadImage("jerryOne.png");
  jerryimg2=loadAnimation("jerryFour.png");
  jerryshouting=loadAnimation("jerryTwo.png","jerryThree.png");
  tomimg=loadImage("tomOne.png");
  tomrunning=loadAnimation("tomTwo.png","tomThree.png")
  tomimg2=loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(600,600);
    back=createSprite(300,300,600,600);
    back.addImage(backimg);
  jerry=createSprite(80,520,10,10)
    jerry.addImage(jerryimg);
    jerry.scale=0.12;
   tom=createSprite(500,520,10,10)
    tom.addImage(tomimg);
    tom.scale=0.12;
}


function draw() {

    background(0);
   if(keyDown("LEFT_ARROW")){
    tom.velocityX=-3
    tom.addAnimation("Running",tomrunning);
     tom.changeAnimation("Running",tomrunning);
    jerry.addAnimation("Teasing",jerryshouting);
     jerry.changeAnimation("Teasing",jerryshouting);}
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX=0;
  tom.addAnimation("lastImage",tomimg2);
  tom.changeAnimation("lastImage",tomimg2);
  jerry.addAnimation("last",jerryimg2);
  jerry.changeAnimation("last",jerryimg2);
    tom.x=190;
    }
  
  drawSprites();
  
}

