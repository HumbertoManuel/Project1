const game = new Game();
const displayedScore = document.querySelector("#score")
console.log(displayedScore);

function preload() {
    
    game.preload();
}



function setup() {
    createCanvas(500, 1000)
    // here we have to setup some things so they are ready when p5 starts
    game.setup();
}

function draw() {
    //clear();
    game.draw();
    displayedScore.innerHTML =`Score: ${game.player.score}`
    if (game.player.score === 0){
        frameRate(0);
            alert("Jugador Pierde");
            location.reload();
    
    }
}

function keyPressed() {
    // if the spacebar is pressed
    if (keyCode === 32) {game.player.jump();}
    if (keyCode === 37) {game.player.moveLeft();}
    if (keyCode === 38) {game.player .moveUp();}
    if (keyCode === 39) {game.player.moveRight();}
    if (keyCode === 40) {game.player.moveDown();}
 
    console.log(keyPressed);
}

function game_over(){

}

