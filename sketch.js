var bananaImage , obstacleImage , obstacleGroup , background , score , player , foodGroup;

function preload()  {
backImage = loadImage("jungle.jpg");
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  

bananaImage = loadImage("banana.png");
obstacle_img = loadImage("stone.png");
}

function setup() {
createCanvas(400, 400);
background = createSprite(20,380);  
background.addImage(backImage);
background.velocityX=-3; 
background.visible=false; 
player.addAnimation(player_running,"Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
obstaclesGroup = new Group();
foodGroup = new Group();  
}

function draw() {
background(220);
if(foodGroup.isTouching(player)){
score = score+2
}

switch(score){
  case 10: player.scale=0.12;
  break;
  case 20: player.scale=0.14;
  break;
  case 30: player.scale=0.16;
  break;
  case 40: player.scale=0.18;
  break;
  default: break;
}  

if(obstaclesGroup.isTouching(player)){
player.scale=0.2;
}
drawsprites ();  
stroke("white");
textSixe(20);
fill("white"); 
text("Score: "+score,500,50);  
}