class Game {
    constructor() {
        this.backgroundImages;
        this.carImage;
        this.player;
        this.gameOver=false;
        this.scoreCounter=1;
 
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
        this.player.setup();
    }

    preload() {
        this.backgroundImages = [ // if more speed , then the Road will go faster 
            { src: loadImage('assets/background/road2.jpg'), y: 0, speed: 5 },
            { src: loadImage('assets/background/road1.jpg'), y: 0, speed: 5 },
            { src: loadImage('assets/background/road3.jpg'), y: 0, speed: 5 }    
        ]
        this.playerImage = loadImage('assets/player/Car5.jpg');
        this.playerCrash = loadImage('assets/player/Car5.jpg');
        //this.carImages = loadImage('assets/coins/Car1.jpg');

        this.carImage = [
            loadImage('assets/coins/Car1.jpg'),
            loadImage('assets/coins/Car2.jpg'),
            loadImage('assets/coins/Car3.jpg'),
            loadImage('assets/coins/Car4.jpg')
        ] 
    }
    draw() {
        this.carImages=random(this.carImage);
        //console.log('drawing');
        clear();
        this.background.draw();
        this.player.draw();   
        // this is the framecount provided by p5
        // console.log(frameCount);
        // every 180 frames we wanna add an obstacle in the array
        if (frameCount % 10 === 0) {
            this.obstacles.push(new Obstacle(this.carImages));
            //console.log(this.obstacles);
        }
        // we iterate over obstacles and draw then on the canvas 
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })
        // removes the obstacles that had a collusion or left the screen from 
        // the obstacles array
 

        this.obstacles = this.obstacles.filter((obstacle) => {
            // we have to use an arrow function bc of the correct context of 'this'
            // obstacle.collision(this.player)
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                //return this.preload();  parar el juego aqui
                return false
            } else {
                
                return true
                
            }

        })
        
    }
}