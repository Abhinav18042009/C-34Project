var dog,dog_img,happyDog,happyDog_img,database,foodS,foodStock;

function preload(){
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(700,500);
  dog = createSprite(350,250,20,20);
  dog.addImage('dog',dog_img);
  dog.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background = color(46, 139, 87);
  drawSprites();
  textSize(30);
  fill("black");
  stroke("red");
  text("PRESS UP ARROW TO FEED BROWNIE MILK",10,100);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}



