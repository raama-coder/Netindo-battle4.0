class Form{

    constructor() {
    this.title = createElement('h2')
    this.greeting = createElement('h2')
    this.play = createButton ("Play")
    this.story=createElement('h2')
    }
    display(){
      if(gameState==0){
        this.title.html("Netindo Battle");
        this.title.position(displayWidth/2 - 50, 0);
        this.play.position(width/2, height/2);
        this.story.html("Hi if you are wondering what has happen to the world mosters happend,<br> monsters took over the whole world. <br> It is you job to deafeat them.<br>This game is a test to see if you are good enough to destroy them. <BR> Show us that you are worthy and we will let you out into the battle grounds.")
        this.story.position(200, 100);
        this.play.mousePressed(()=>{
          gameState=1
        })
      }
    }

      hide(){
        this.greeting.hide();
        this.play.hide();
        this.story.hide();
        this.title.hide();
      }

      
}