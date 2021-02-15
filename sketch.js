var player
var monster
var Mario, Kirby, Luigi, Sonic, Waluigi, Wario, Yoshi
var MarioF, KirbyF, LuigiF, SonicF, WaluigiF, WarioF, Yoshi
var Bowser, kingKRool
var PLAY=1
var END=2
var STORY=0
var gameState=0
var playerJS, gameJS, formJS, monsterJS
var gameOver
var health
var healthImg
var edges
var halfLife, Life=8
var halfLifeImg, LifeImg
var healthBarGr
var weapon, fireImg, rockImg
var playerWon=false
var Win, WinImg
var Lose, LoseImg
var monsterLife=6
var Wood, Rock
function preload(){
    Mario=loadAnimation("gif/marioRun.gif")
    MarioF=loadAnimation("gif/marioF.gif")
    Kirby=loadAnimation("gif/kirbyRun.gif")
    KirbyF=loadAnimation("gif/KirbyF.gif")
    Luigi=loadAnimation("gif/luigiF:R.gif")
    Sonic=loadAnimation("gif/sonicRunning.gif")
    Waluigi=loadAnimation("images/WaluigiRun2.png")
    WaluigiF=loadAnimation("gif/WaluigiF.gif")
    Wario=loadAnimation("images/WarioRun2.png")
    WarioF=loadAnimation("gif/warioF.gif")
    Yoshi=loadAnimation("gif/yoshiRun.gif")
    Bowser=loadAnimation("gif/bowserF.gif")
    kingKRool=loadAnimation("gif/KingK.RoolF:R.gif")
    speedImg=loadImage("powerUp/Speed.png")
    healthImg=loadImage("powerUp/Life.png")
    strengthImg=loadImage("powerUp/Strength.png")
    LifeImg=loadImage("powerUp/Life.png")
    fireImg=loadImage("images/fireball.png")
    rockImg=loadImage("images/Rock.png")
    WinImg=loadImage("images/Win.png")
    LoseImg=loadImage("images/Lose.png")
    Wood=loadImage("images/Wood.png")
    Rock=loadImage("images/Rock.jpg")

}

function setup(){
    createCanvas(1400,600)

    playerJS=new Player()
    monsterJS=new Monster()
    gameJS=new Game()
    formJS=new Form()
  
    edges=createEdgeSprites()

    healthBarGr=new Group()

    pickPlayer()
    pickMonster()
    healthBar(Life)

    spawnWeapon()
}

function draw(){
  background(Wood)

    if(gameState==0){
      formJS.display();
      changePosistion()
    }

    if(gameState==1){
      playerJS.playerMovement()
      spawnHeart()
      healthBar(Life)
      monsterJS.monsterMovement(player)
      spawnWeapon()
      fight()     
       monsterL()
      formJS.hide()
      
    }

    if(gameState==2){
      gameJS.end()
      
      gameEnd()
      formJS.display()
    }
    drawSprites()
}
  function healthBar(life){
    var healthBarX=50
    for(i=0; i<life; i++){
      var healthSpr=createSprite(healthBarX, 50, 1, 1)
      healthSpr.addImage(LifeImg)
      healthBarX+=50
      healthSpr.scale = 0.035;
      healthBarGr.add(healthSpr)
    }
  }

  function changePosistion(){
    player.x=100
    player.y=200

    monster.x=1100
    monster.y=400
  }

  function getLife(){
    if(player.isTouching(health)){
      console.log("inside"+ Life)
      if(Life<=5){
        Life+=1
        healthBar(Life)
      }
    }
  }

  function fight(){
    if(player.isTouching(weapon)){
      changePosistion()
      if(Life>=1){
        Life-=1
        healthBarGr.destroyEach()
      }
      healthBar(Life)
    }

    if(player.isTouching(monster)){
    monsterLife-=1
    changePosistion()
    }
    if(Life<=0){
      gameState=2
    }
  }

  function spawnHeart(){

    if(Life<6){
      if(frameCount%30==0){
      health=playerJS.boostMovement(healthImg)
      health.lifetime=width
      health.scale = 0.035;
      health.setCollider("circle",0,0,health.width)
      getLife()
    }
  }
  }

  function pickPlayer(){
    player.setCollider("rectangle",0,0,player.width/6,player.height/6)
    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: player.addAnimation("running",Mario);
              player.scale=0.7
              break;
      case 2: player.addAnimation("running",Mario);
              player.scale=0.7
              break;
      case 3: player.addAnimation("running",Luigi);
              player.scale=0.5
              break;
      case 4: player.addAnimation("running",Sonic);
              player.scale=0.5
              break;
      case 5: player.addAnimation("running",Waluigi);
              player.scale=0.2
              break;
      case 6: player.addAnimation("running",Wario);
              player.scale=0.2
              break;
      case 7: player.addAnimation("running",Yoshi);
              player.scale=0.6
              break;
      default: break;
    }
  }

  function pickMonster(){
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: monster.addAnimation("running",Bowser);
              monster.scale=1.5
              monster.setCollider("rectangle",0,0,monster.width/6,monster.height/6)
              break;
      case 2: monster.addAnimation("running",kingKRool);
              monster.scale=0.5
              break;
      default: break;
    }
  }

  function spawnWeapon(){

    if(frameCount%30==0){
      weapon=createSprite(monster.x-20,monster.y-50,10,10)

      var randWeapon = Math.round(random(1,2));
      switch(randWeapon) {
        case 1: weapon.addImage(fireImg)
                weapon.scale=0.3
                break;
        case 2: weapon.addImage(rockImg)
                weapon.scale=0.03
                break;
      }
    }
    weapon.lifetime=20

    moveWeapon()
  }

  function moveWeapon(){
      if (weapon.x<player.x){
          weapon.velocity.x=0
      } else{
          weapon.velocity.x=-0
      }
      if (weapon.y<player.y){
          weapon.velocity.y=0
      } else{
          weapon.velocity.y=-0
      }
  }

  function gameEnd(){
    if(playerWon=true&&Life>=1){
      background(WinImg)
    }
    if(Life<=0&&gameState==2){
      background(LoseImg)
    }
  }

  function monsterL(){
    textSize(20)
    fill(231, 31, 19)
    text("Bowser's lives: "+monsterLife, 1200, 50)

    if(monsterLife===0){
      gameState=2
      playerWon=true
    }
  }