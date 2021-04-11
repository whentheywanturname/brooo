var Gamestate = 0;
var ready;
var start
var intro
var me, your, you;
var T_Rexium,T_pic1
var Donny
var Jules,Jules_pic, jusle
var Peely, Peely_pic
var Captain_Lootbeard
var station,stat
var trash,garbage
var mine
var T_Pose
var peels, banana
function preload(){
  start=loadImage("images/start.png")
T_pic1=loadImage("images/T-R3ximus Prime.png")
Jules_pic=loadImage("images/test drawing (2).png")
your=loadImage("images/you.png")
stat=loadImage("images/station.png")
intro=loadImage("images/bg.png");
garbage=loadImage("images/trash.png")
mine=loadImage("images/me_walk.png")
T_Pose=loadImage("images/T-walk.png")
banana=loadImage("images/agent peely.png")
peely=loadImage("images/peely.png")
jusle=loadImage("images/jules.png")
}
function setup() {
  createCanvas(2000,800);
ready = createSprite(1200,500,350,100)
ready.addImage(start);
ready.scale=0.5;
T_Rexium = createSprite(150,200,60,30)
T_Rexium.addImage(T_pic1);
T_Rexium.scale=0.5;
Jules = createSprite(450,200,60,30)
Jules.addImage(Jules_pic);
Jules.scale=0.5;
station=createSprite(750,530,60,30);
station.addImage(stat);
station.scale=0.5;
me=createSprite(750,590,60,30)
me.addImage(your);
me.scale=0.3;
trash=createSprite(50,650,60,30)
trash.addImage(garbage);
trash.scale=0.33;
peels=createSprite(950,500,50,50);
peels.addImage(banana);
peels.scale=1;
you=createSprite(200,200,40,40)
you.addImage(mine)
you.scale=0.5
}

function draw() {
  background(intro);  
 if(Gamestate===0){
   textSize(100);
   fill("#3EA99F")
   strokeWeight(2)
   stroke("6698FF")
   textFont("Roman")
   text("Time out", 1000, 100);
   ready.visible=true;
   T_Rexium.visible=true;
   me.visible=true;
   station.visible=true;
   trash.visible=true;
   Jules.visible=true;
   peels.visible=true;
   you.visible=false;
   if(mousePressedOver(Jules)){
    me.addImage(Jules_pic);
    me.scale=0.5;
    you.addImage(jusle)
     you.scale=0.7;
   }
   if(mousePressedOver(T_Rexium)){
    me.addImage(T_pic1);
    me.scale=0.5;
    you.addImage(T_Pose)
    you.scale=0.5
   }
   if(mousePressedOver(trash)){
    me.addImage(your);
    me.scale=0.3;
    you.addImage(mine)
     you.scale=0.1;
   }
   if(mousePressedOver(peels)){
    me.addImage(banana)
    me.scale=1
     you.addImage(peely)
     you.scale=0.7;
   }
   if(mousePressedOver(ready)){
     Gamestate=1;
   }
 }
 if(Gamestate===1){
   background("#566D7E")
   ready.visible=false;
   T_Rexium.visible=false;
   me.visible=false;
   station.visible=false;
   trash.visible=false;
   Jules.visible=false;
   peels.visible=false;
   you.visible=true;

   if(keyDown(UP_ARROW)) {
    you.y = you.y- 2;
  //  you.rotation = 270;
 }
 if(keyDown(DOWN_ARROW)) {
  you.y =  you.y+2;
 // you.rotation = -270;
 }
 if(keyDown(LEFT_ARROW)) {
  you.x =  you.x- 2;
  //you.rotation = 180;
 }
 if(keyDown(RIGHT_ARROW)) {
  you.x =  you.x + 2;
  //you.rotation = 360;
 }
}
  drawSprites();
}