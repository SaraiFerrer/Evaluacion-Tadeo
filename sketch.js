  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){

}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y > ){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("")){
        ghost.x = ghost.x - 3;

      //escribir el código para mover al fantasma a la izquierda al presionar la flecha izquierda
    }
    if(keyDown("")){
  
          ghost.x = ghost.x + 3;

      //escribir el código para mover el fantasma a la derecha al presionar la flecha derecha 
      
    }
    if(keyDown("")){
  
         ghost.velocityY = -10;

      //escribir el código para mover el fantasma hacia arriba al presionar la flecha arriba 
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escribir una condición para desplazar infinitamente la torre
    
      spawnDoors();

  
//escribir el código para hacer que invisibleBlockGroup colisione con el fantasma y cambiar gamestate a end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.
      gameState = ""
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
  }
}

function spawnDoors()
 {
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //agregar la función random
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //cambiar la profundidad del fantasma y de la puerta
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //asignar lifetime a door, climber y invisible block

 .lifetime = 800;
    .lifetime = 800;
    .lifetime = 800;
    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle); aquí los obstáculos son door, climber, invisible block
    
     doorsGroup.add();
    invisibleBlock.debug = true;
    climbersGroup.add();
    invisibleBlockGroup.add();
  }
}

