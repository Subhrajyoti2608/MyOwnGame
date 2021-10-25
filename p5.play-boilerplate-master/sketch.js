var boy;
var lion;
var jungle, stone, wood;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  boyImg = loadImage("boy.png")
  jungleImg = loadImage("jungle.png")
  stoneImg = loadImage("rock.png")
  woodImg = loadImage("wood.png")
  lionImg = loadImage("lion.png")

  breathingSound = loadSound("breathing.mp3")
  jungleSound = loadSound("jungle.mp3")
  lionGrowl = loadSound("lionGrowl.mp3")
}

function setup() {
  createCanvas(1200,600);
  boy = createSprite(700, 420, 10, 10);
  boy.addImage(boyImg)
  boy.Scale = 0.01
  
  lion = createSprite(200, 500, 50, 50);
  lion.addImage(lionImg)
  lion.scale=0.8

  score = 0;
  stoneGroup = createGroup();
  woodGroup = createGroup();

}

function draw() {
  background(jungleImg); 
  
  if(gameState === PLAY){

    stone;
    wood;

    if(keyIsDown(UP_ARROW)){
      boy.velocityY = -16
    }

    if(woodGroup.isTouching(boy)){
      woodGroup.destroyEach()
      score = score+1
    
    }

    if(stoneGroup.isTouching(boy)){
      gameState = END
    }
  }
  drawSprites();
}