var canvas, backgroundImg;
var GameState = 0;
var PlayerCount;
var database;
var form,player,game;

function setup(){
 
  database = firebase.database();
  Canvas = createCanvas(400,400);

 game = new Game();
 game.getState();
 game.Start();

 }

 function draw(){
  
  

 }
