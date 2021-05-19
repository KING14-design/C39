class Player{
    constructor()
    {
        this.Name=null;
        this.distance=0;
        this.index=0;
        this.rank=0
    }
getCount(){
    var playerref=database.ref("playerCount")
    playerref.on("value",(data)=>{
        playerCount=data.val()
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
update(){
    var playerIndex="Players/Player"+this.index
    database.ref(playerIndex).update({
       Name:this.Name,
    distance:this.distance,
    rank:this.rank
    })
}
static getplayerinfo(){
    var playerref=database.ref("Players")
    playerref.on("value",(data)=>{
        allPlayers=data.val()
    })
}
getFinishedPlayers(){
    database.ref("finishedPlayers").on("value",(data)=>{
        finishedPlayers=data.val()
    })
}
static updateFinishedPlayers(){
    database.ref("/").update({
        finishedPlayers:finishedPlayers+1
    })
    this.rank +=1
}
}