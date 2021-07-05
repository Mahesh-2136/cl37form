var ball;
var form;
var game;
var player;
var playerCount;
var gameState = 0;

function setup(){
    createCanvas(500,500);
   db = firebase.database();

  game = new Game();
  game.getState();
  
  console.log(gameState);
  game.start();





    

   
}

function draw(){
    background("white");
  
    drawSprites();
}
