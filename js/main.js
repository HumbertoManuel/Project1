const game = new Game();

const displayedScore = document.querySelector("#score")
const displayedScoreincrease = document.querySelector("#scoreincrease")
const startScreen=document.querySelector(".startScreen")
//console.log(displayedScore);
function preload() { 
    game.preload();
}

function setup() {
    createCanvas(500, 1000)
    // here we have to setup some things so they are ready when p5 starts
    game.setup();
}
function start(){
    startScreen.classlist.add("hide");
}

function draw() {
    //clear();
    game.draw();

    displayedScore.innerHTML =`LIFES: ${game.player.score}`
    displayedScoreincrease.innerHTML =`SCORE: ${game.player.scoreincrease}`
    if (game.player.score === 0){
        frameRate(0);
            alert(" YOU LOST !!!  :(  ouuu buuu buuu");
            location.reload();
    }
    if (game.player.scoreincrease === 1010){
        frameRate(0);
            alert(" YOU WIN ..... WIN  ::YEAHHHHH !!!");
            location.reload();
    }
}

function keyPressed() {
    // if the spacebar is pressed
    if (keyCode === 32) {game.player.jump();}
    if (keyCode === 37) {game.player.moveLeft();}
    if (keyCode === 38) {game.player.moveUp();}
    if (keyCode === 39) {game.player.moveRight();}
    if (keyCode === 40) {game.player.moveDown();}
 
    console.log(keyPressed);
}

