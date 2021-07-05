class Player {
    constructor(){
        
    }
    getCount(){
        var ref1=db.ref("playerCount")
        
        ref1.on("value",function(dat){
          playerCount=dat.val()
        })
      }
      upCount(st){
        var ref2 = db.ref("/")
        ref2.update({
          playerCount : st
        })
    
      }

}