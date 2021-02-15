class Player{

    constructor(){
        player=createSprite(100, 400, 100, 100)
        //player.addAnimation("running",Mario)
    }

    display(){


    }

    playerMovement(){

        player.bounceOff(edges)

        if(keyDown("left")){
            player.x-=5
        }
        if(keyDown("right")){
            player.x+=5
        }
        if(keyDown("up")){
            player.y-=5
        }
        if(keyDown("down")){
            player.y+=5
        }
    } 

    boostedMovement(){

        if(player.isTouching(speed)){

            if(keyDown("left")){
                player.x-=10
            }
            if(keyDown("right")){
                player.x+=10
            }
            
            if(keyDown("up")){
                player.x-=10
            }

            if(keyDown("down")){
                player.x+=10
            }
        }
    }

        boostMovement(boostImg){
            var randX = Math.round(random(-10,10));
            var randY = Math.round(random(-10,10));

            var booster=createSprite(700, 300, 50, 50)
            booster.addImage(boostImg)

            booster.velocityX=randX
            booster.velocityY=randY

            booster.scale = 0.1;

            return booster
        }



}