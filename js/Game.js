class Game{
  constructor(){

  }
  getState(){
    var ref1=db.ref("gameState")
    ref1.on("value",function(dat){
      gameState=dat.val()
    })
  }
  upState(st){
    var ref2 = db.ref("/")
    ref2.update({
      gameState : st
    })

  }

async start(){
if(gameState === 0 ){
form = new Form();
player = new Player();
var ref1=await db.ref("playerCount").once("value")
if (ref1.exists()){
  playerCount =ref1.val();
  player.getCount();
}



form.display();
}else if(gameState === 1){


}else if(gameState === 2){

}



}

}