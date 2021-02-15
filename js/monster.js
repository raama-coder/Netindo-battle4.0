class Monster {

    constructor(){
        monster=createSprite(1100, 500, 100, 100)
    }

    monsterMovement(plr){
        


        if(frameCount%20===0){
            if (monster.x<plr.x){
                // monster.x+=3
                monster.velocity.x=3
            } else{
                // monster.x-=0
                monster.velocity.x=-3
            }
        
        
            if (monster.y<plr.y){
                // monster.y+=0
                monster.velocity.y=3
            } else{
                // monster.y-=0
                monster.velocity.y=-3
            }
        }
        
        
        
    }
}