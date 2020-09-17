//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, dogImg2;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.addImage("dogImg",dogImg);
  dog.scale = 0.5;
  var database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  

  background(46, 139, 87);
  //add styles here

  drawSprites();
  textSize(20);
  fill("white")
  text("Note: Press UP_ARROW To Feed Bunny Milk!",50,480);
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function keyPressed(){
  if(keyCode === 38){
    writeStock(foodS);
  dog.addImage("dogImg2",dogImg2);
  }
}

function readStock(data){
  foodS=data.val();
}




