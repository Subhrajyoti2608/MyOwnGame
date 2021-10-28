var boy;
var lion;
var jungle, stone, wood;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  boyImg = loadAnimation("assets/boy.png")
  jungleImg = loadImage("assets/jungle.png")
  stoneImg = loadImage("assets/rock.png")
  woodImg = loadImage("assets/wood.png")
  lionImg = loadImage("assets/lion.png")

  breathingSound = loadSound("assets/breathing.mp3")
  jungleSound = loadSound("assets/jungle.mp3")
  lionGrowl = loadSound("assets/lionGrowl.mp3")
}

function setup() {
  createCanvas(1200,600);
  boy = createSprite(700, 420, 10, 10);
  boy.addImage("abc",boyImg)
  boy.Scale = 0.01
  
  lion = createSprite(200, 500, 50, 50);
  lion.addImage("abc", lionImg)
  lion.scale=0.8

  jungle=createSprite(1200,600)
  jungle.addImage("abc",jungle.png)
  score = 0;

  boy.setCollider()

  stoneGroup = createGroup();
  woodGroup = createGroup();

}

function draw() {
  background(jungleImg); 
  
  if(gameState === PLAY){

    stone;
    wood;
    jungle.velocityX = 10
    lion.velocityX = 6
    

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
  
  if(keyIsDown(RIGHT_ARROW)){
    boy.velocityX = 8
    breathingSound.play()
  }
  if(lion.isTouching(boy)){
    lionGrowl.play()
    gameState = END
  }
}
else if(gameState === END){
  lion.velocityX(0)
  boy.velocityX(0)
  jungle.velocityX(0)
  woodGroup.setVelocityXEach(0)
  stoneGroup.setVelocityXEach(0)

  fill (25)
  stroke("red")
  textSize(25)
  text("You lost",600,400)
}

  drawSprites();
}