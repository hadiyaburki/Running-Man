var trackIMG, track
var runANI, boy 
function preload(){
  trackIMG = loadImage("path.png")
  runANI = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  track = createSprite(200,200)
  track.addImage(trackIMG)
  track.velocityY = 4
  track.scale = 1.2
  boy = createSprite(100,350)
  boy.addAnimation("runANI", runANI)
  boy.scale = 0.1
  
}

function draw() {
  background(0);
  if (track.y > 400){
  track.y = height/2
  }
 boy.x = mouseX
  
  drawSprites()
}