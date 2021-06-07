var issimg, spaceimg,spacecraft1,spacecraft2,spacecraft3,spacecraft4;

var iss;
var spacecraft;
var hasDocked=false;

var hasinitated=false;
var upArrDocked=false;
var docked=false;



function preload(){
  issimg=loadImage("Docking-undocking/iss.png");
  spaceimg=loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1=loadImage("Docking-undocking/spacecraft1.png");
  
  spacecraft2=loadImage("Docking-undocking/spacecraft2.png");
  
  spacecraft3=loadImage("Docking-undocking/spacecraft3.png");
  
  spacecraft4=loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(200, 200, 50, 50);
  iss.addImage(issimg);
  iss.scale=0.8;

  spacecraft=createSprite(400,275,30,30);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.25;

  createSprite(160,200,40,40);


}

function draw() {
  background(spaceimg);  

  if(!hasDocked){
   
    
    if(!hasinitated){
      var xP=Math.round(random(160,800));
      spacecraft.x=xP;
      hasinitated=true;
    }

    if(keyCode===37){
      spacecraft.x=spacecraft.x-1;
      spacecraft.addImage(spacecraft3);
    }

    if(keyCode===39){
      spacecraft.x=spacecraft.x+1;
      spacecraft.addImage(spacecraft4);
    }

    if(keyCode===40){
        
      spacecraft.addImage(spacecraft2);
    }

    if(keyCode===38 && !upArrDocked){ 
        spacecraft.x-=1;
        
        spacecraft.addImage(spacecraft1);
        if(spacecraft.x===160){

          upArrDocked=true;
          
        }
        
        
    }

    if(upArrDocked){
      fill("white");
          textSize(20);
          text("Docked Successfully!",600,200);
    }

    
   
  }

  drawSprites();
}