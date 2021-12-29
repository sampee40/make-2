var jungleimg,player,goldimg
var parachuteimg,snakeimg,giraffee1img;
var playerimg, giraffeimg, queImg;
var playerthinkingimg, chance;
var elephantimg, monsterimg;
var gameState = "wow";
//var key,teacher;
var timer, score = 0;
var ss = 15;


function preload(){
  jungleimg = loadImage("images/jungle1.jpg")
  jungle1img = loadImage("images/jungle4.jpg")
  goldimg = loadImage("images/gold.gif")
   parachuteimg = loadImage("images/parachute.png")
  snakeimg = loadImage("images/snake-unscreen.gif")
  playerimg = loadImage("images/player.png")
  giraffeimg = loadImage("images/giraffee obstacle.gif")
  queImg = loadImage("images/question.png")
 // giraffee1img = loadImage("giraffblack.png")
  playerthinkingimg = loadImage("playerthinking.png")
  monsterimg = loadImage("images/monster-unscreen.gif");
  monster2img = loadImage("images/monster2.gif")
  textboximg = loadImage("images/maths.png")
  timerimg = loadImage("images/timerimg.png");
  timersound = loadSound("images/clock1.mp3");
  keyimg = loadImage("images/key.png");
  teacher1img = loadImage("images/teacher-removebg-preview.png");
}
// sameera share the live server with me
function setup() {
  createCanvas(displayWidth, displayHeight);
  player = createSprite(displayWidth-1300,displayHeight-50,20,60)
  player.addImage('walking',playerimg);
  textbox = createSprite(displayWidth-470,displayHeight-210,100,170);
 textbox.addImage('mathslevel',textboximg)
 
  textbox.scale = 0.3;
  
  obstacle = new Obstacle(displayWidth-470,displayHeight-70,100,170);
  obstacle2 = new Obstacle(displayWidth-470,displayHeight-70,100,170);
  question = createSprite(displayWidth-470,displayHeight-80,100,170)
  question.visible = false;
  timer = createSprite(displayWidth - 400,displayHeight-290,50,50)
  
  timer.addImage('clock',timerimg)
  timer.scale = 0.4;
  timer.visible = false;
}

function draw() {
  background(0);
 
  if(gameState === "level1"){
    image(jungle1img,-displayWidth/2,displayHeight/2-530,displayWidth*1.5,displayHeight*1.5)
    
    text("maths level",displayWidth - 417,displayHeight-200)
   // Obstacle.ob2.hide()
    drawSprites();
  if(keyDown("right")){
    player.x=5+player.x
    }
  if(player.isTouching(obstacle.ob)){
    //  obstacle.ob.addImage(giraffeimg)
     // obstacle.ob.scale = 0.5;
      gameState = "question1"
    }
    camera.position.y = player.y;
  camera.position.x = player.x;
  }
  else if (gameState === "question1"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
  textSize(20)
    drawSprites();
    
    text("Score: "+ score,displayWidth - 350,displayHeight-300)
    fill("black");
    text(" "+ss,displayWidth - 417,displayHeight-270)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
   //timersound.play();
   //timersound.setVolume(0.5);
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("if a zebra has 50 stripes & a tiger has 60 stripes ", displayWidth/2-400, displayHeight-200)
   text("how many black stripes are there altogethere if ", displayWidth/2-400, displayHeight-100)
   fill("black");
   text("there are 2 tigers & 5 zebras?", displayWidth/2-400, displayHeight)
  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-300, displayHeight-180)
   obstacle.go.position(displayWidth/2-160, displayHeight-180)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("370")
   //console.log(num)

    if(chance.localeCompare("370") === 0){
     score = score + 5;
      gameState = "question2";
      
    }
   });

  }
  
  else if (gameState === "question2"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
    drawSprites();
    text("Score: "+ score,displayWidth - 350,displayHeight-300)
    fill("black");
    text(" : "+ss,displayWidth - 415,displayHeight-275)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("how many legs does 4 cockroach has ", displayWidth/2-300, displayHeight-150)
   text(" altogether?", displayWidth/2-300, displayHeight-100)
   //text("altogether?", displayWidth/2-300, displayHeight-50)
   fill("brown");
  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-300, displayHeight-180)
   obstacle.go.position(displayWidth/2-160, displayHeight-180)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
  // num = chance.localeCompare("24")
  // console.log(num)

    if(chance.localeCompare("24") === 0){
     score = score + 5;
      gameState = "question3";
      
    }
   });

  }

  else if (gameState === "question3"){
    //image(jungleimg,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
  fill("red");
    drawSprites();
    text("Score: "+ score,displayWidth - 350,displayHeight-300)
    fill("black");
    text(" : "+ss,displayWidth - 415,displayHeight-275)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    question.visible = true;
    timer.visible = true;
    question.x = displayWidth/2
    question.addImage(queImg);
    question.scale = 1.8; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =displayWidth/2-600;
   textSize(35)
   text("A fly lays her eggs in 3 equal batches.if the", displayWidth/2-300, displayHeight-200)
   text(" fly lays 400 eggs altogether in the first two  ", displayWidth/2-300, displayHeight-100)
   text("batches ,the how many eggs did the flay lay in total?", displayWidth/2-400, displayHeight-10)
   fill("brown");


  // text("Answer",displayWidth/2-200, displayHeight+50)
   obstacle.ans.position(displayWidth/2-300, displayHeight-180)
   obstacle.go.position(displayWidth/2-160, displayHeight-180)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("giraffe")
   
    if(chance.localeCompare("600") === 0){
     score = score + 5;
      gameState = "wow";
      
    }
   });

  }
 else if (gameState === "wow") {  
   
  image(jungle1img,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)
 var key = createSprite(displayWidth-1050, displayHeight/2+500);
  //player = createSprite(displayWidth-1300,displayHeight-50,20,60)
 // player.x = displayWidth-1400
  player.y = displayHeight/2+500
key.addImage('key',keyimg);
 key.scale = 0.4;
  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
 obstacle.ob.visible = false;

drawSprites();
  
  if(keyDown("right")){
    player.x=5+player.x
    }

    camera.position.y = player.y;
  camera.position.x = player.x;

  if(player.isTouching(key)){
   // player.collide(key);
    key.destroy();
    gameState = "next";
    
   
  }
  
  drawSprites();
 }
else if (gameState === "next"){
 
  textSize(30);
  fill("black");
 
  teacher = createSprite(displayWidth-950,displayHeight/2+500)
  teacher.addImage("teacher",teacher1img)
  teacher.scale = 0.8;
 image(jungle1img,-displayWidth/2,displayHeight/2-300,displayWidth*1.5,displayHeight*1.5)

  next = createSprite(displayWidth-1050,displayHeight/2+600, 100,50);
  next.shapeColor = "green";
  
 // next.debug = true;
  if(mousePressedOver(next)){
    teacher.visible = false;
    next.visible = false;
    gameState = "level2";
    
  }
  drawSprites();
  text("next",displayWidth-1070,displayHeight/2+600)
  text("Congratulations! Level 1 complete!", displayWidth-1100,displayHeight/2+300)
}

  else if ( gameState === "level2"){
   
   // 1. image
   // 2. player moving
   //3. obstacle 
 image(jungleimg,-displayWidth/2,displayHeight/2-100,displayWidth*1.5,displayHeight*1.5)
 obstacle.ob.visible = true;
    player.x = displayWidth-1300;
    player.y = displayHeight;
    if(keyDown("right")){
      player.x=5+player.x
      }
   
    obstacle.ob.x  = displayWidth-470;
    obstacle.ob.y = displayHeight-180;



 drawSprites();
 
   camera.position.y = player.y;
   camera.position.x = player.x;
   
 if(player.isTouching(obstacle.ob)){
  // gameState = "question"
 }
 
 /* question.x = displayWidth/2
 question.addImage(queImg);
//player.changeAnimation('walking',playerthinkingimg);
player.x =displayWidth/2-600;
question.scale = 1.8; 
textSize(50)
text("which is the heaviest ", displayWidth/2-300, displayHeight-200)
text("animal on land ", displayWidth/2-300, displayHeight-100)
fill("black");
text("Answer",displayWidth/2-200, displayHeight+50)
obstacle.ans.position(displayWidth/2-300, displayHeight-180)
obstacle.go.position(displayWidth/2, displayHeight-180)
 chance = obstacle.ans.value();
 //console.log(chance);
//obstacle.goButton();

//ans.position(displayWidth/2-300, displayHeight-18)

obstacle.go.mousePressed(() => {
 console.log(chance);
 chance.toLowerCase();
chance= chance+"";
num =chance.localeCompare("elephant")
console.log(num)


if(chance.localeCompare("false") === 0){
  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
  obstacle.ob.addImage(giraffeimg);
  obstacle.ob.scale = 0.5;
 // console.log("great!!")
  gameState = "level2";
  
} */


  }
}