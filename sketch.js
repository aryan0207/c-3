var fix1,fix2,fix3,fix4 ;
var moving;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    moving=createSprite(random(10,750),300,20,20);
    moving.shapeColor="white";
    moving.velocityX=3;
    moving.velocityY=3;
    fix1=createSprite(100,580,180,30);
    fix1.shapeColor="red";
    fix2=createSprite(300,580,180,30);
    fix2.shapeColor="blue";
    fix3=createSprite(500,580,180,30);
    fix3.shapeColor="green";
    fix4=createSprite(700,580,180,30);
    fix4.shapeColor="yellow";
 
}

function draw() {
    background(rgb(169,169,169));
  if(moving.x<0){
  music.stop();
  moving.velocityX=3;
  }
  else if(moving.x>800){
  music.stop();
  moving.velocityX=-3;
  }
  if(moving.isTouching(fix4)){
  music.play();
  moving.shapeColor="yellow";
  moving.bounceOff(fix4);
  }
  else if(moving.isTouching(fix3)){
    music.stop();
    moving.shapeColor="blue";
    bounceOff(moving,fix3);
    }
  else if(moving.isTouching(fix2)){
        music.stop();
        moving.shapeColor="green";
        bounceOff(moving,fix2);
        moving.velocityX=0;
        moving.velocityY=0;
        }
  else if(moving.isTouching(fix1)){
            music.stop();
            moving.shapeColor="red";
            moving.bounceOff(fix1);         
            }     
   if(moving.y<0){
     music.stop();
     moving.velocityY=3;  
   }
   drawSprites();
}
