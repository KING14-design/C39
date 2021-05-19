class Form{
    constructor()
    {
        this.title=createElement("H2")
        this.input=createInput("Name")
       this.button=createButton("START")
      this.greeting=createElement("H2")
      this.reset=createButton("Replay")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }
    display(){
        
        this.title.html("Car racing game")
        this.title.position(displayWidth/2,0)
        this.reset.position(displayWidth-100,0)
        this.reset.mousePressed(()=>{
            location.reload()
            database.ref("/").update({
                gameState:0,
                playerCount:0,
                Players:null,
                finishedPlayers:0
            })
        })
        this.input.position(displayWidth/2,displayHeight/2-100)
        
        this.button.position(displayWidth/2,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.Name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("hello"+ player.Name)
            player.index=playerCount
            this.greeting.position(130,150)
           
        })
    }
}