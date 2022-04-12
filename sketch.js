var rocket
var hinderence
var sun
var mercury
var venus
var earth 
var moon
var mars
var jupiter
var saturn
var uranus
var nepture
var pluto
var postionR
var backgroundImage
var flying, mercuryPic, venusPic, earthPic, marsPic, jupiterPic, saturnPic, uranusPic, neptunePic
var frequency
var gameState='start'
function preload(){
    backgroundImage=loadImage("background.jpg") 
    flying=loadImage("rocket.gif")
    mercuryPic=loadImage("Planet/mercury.png")
    venusPic=loadImage('Planet/venus.png')
    earthPic=loadImage('Planet/earth.png')
    marsPic=loadImage('Planet/mars.png')
    jupiterPic=loadImage('Planet/jupiter.png')
    saturnPic=loadImage('Planet/saturn.png')
    uranusPic=loadImage('Planet/uranus.png')
    neptunePic=loadImage('Planet/neptune.png')
}

function setup(){
    createCanvas(800,600)
    rocket=createSprite(400,400,20,20)
    rocket.addImage('rocket',flying)
    mercury=createSprite(100,100,50,50)
    venus=createSprite(100,100,50,50)
    earth=createSprite(100,100,50,50)
    mars=createSprite(100,100,50,50)
    jupiter=createSprite(100,100,50,50)
    saturn=createSprite(100,100,50,50)
    uranus=createSprite(100,100,50,50)
    nepture=createSprite(100,100,50,50)

}
function reaching(){
    if(score==100){
        mercury.addImage('mercury', mercuryPic)
    }
}


function hinderenceM(){
    if(frameCount%frequency==0){
        hinderence=createSprite(random(1,800),-50,10,10)
        hinderence.velocityY=2
    }  
}

function draw(){
    background(backgroundImage)
    if(gameState=="start"){
        textSize(20)
        fill ('pink')
        text('You are an astronaut who is exploring the solar system',180,50)
        text('Unfortunately, your spacecraft is under the attack of meteors',150,90)
        text('Devoted your heart to mankind, and save yourself, GOOD LUCK!',150,130)
        textSize(35)
        fill ('white')
        text('Press Space To Start',350,200)
        if(keyDown('space')){
            gameState='play'
        }
    }
    if(gameState=='play'){
        hinderenceM()
        rocket.x=mouseX
        rocket.y=mouseY
        

    }
    
    
    
    drawSprites()
}