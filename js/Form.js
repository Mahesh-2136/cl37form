class Form {

    constructor(){
    this.title = createElement("h2")
    this.text = createInput("enter name")
    this.play = createButton("play")
    }


    display(){

    var mess = createElement("h2")

    this.play.mousePressed(()=>{
        this.text.hide()
        this.play.hide()
        playerCount+= 1 ;
        player.upCount(playerCount);

        var n = this.text.value();
        mess.html("welcome "+n);
        mess.position(250,250);
    });

   
   this.title.html("start race")
   this.title.position(250,200);
   this.text.position(250,250);
   this.play.position(250,300);
    }
    
}