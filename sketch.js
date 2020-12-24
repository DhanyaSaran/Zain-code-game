var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;

var database;

var form, player, game;
var name
var text=""
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
 form1=new Form()
 player= new Player()
}


function draw(){
  form1.display()
}
