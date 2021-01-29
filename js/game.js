class Game {
    constructor() {
        this.backgroundImages;
        this.carImage;
        this.player;
        this.gameOver=false;
    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];       
    }
    preload() {
        this.backgroundImages = [ // if more speed , then the Road will go faster 
            { src: loadImage('assets/background/map1.jpg'), y: 0, speed: 5 },
            { src: loadImage('assets/background/map2.jpg'), y: 0, speed: 5 },
            { src: loadImage('assets/background/map3.jpg'), y: 0, speed: 5 }    
        ]
        this.playerImage = loadImage('assets/player/car6.jpg');
        this.carsAditional = loadImage('assets/player/car6.jpg');

        this.playerCrash = loadImage('assets/cars/fire.gif');
        this.carImage = [
            loadImage('assets/cars/car1.png'),
            loadImage('assets/cars/car2.jpg'),
            loadImage('assets/cars/car3.png'),
            loadImage('assets/cars/car4.png'),
            loadImage('assets/cars/car5.png'),
            loadImage('assets/cars/car7.jpg')
        ] 
    }
    draw() {
        this.carImages=random(this.carImage);
        //console.log('drawing');
        clear();
        this.background.draw();
        this.player.draw(); 
        
        // this is the framecount provided by p5
        // add 1 Obstacle every 10 Frames
        
        if (frameCount % 10 === 0) {
            this.obstacles.push(new Obstacle(this.carImages));
            this.playerImage = loadImage('assets/player/car6.jpg');
            game.player.scoreincrease+=10;
            //console.log(this.obstacles);
        }

        // we iterate over obstacles and draw then on the canvas 
       this.obstacles.forEach(function (obstacle) {    
        obstacle.draw()
        })
        // removes the obstacles that had a collission          
        this.obstacles = this.obstacles.filter((obstacle) => {
            // we have to use an arrow function bc of the correct context of 'this'
             //obstacle.collision(this.player)
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                return false
            } else {
                return true
                
            }

        })
        
    }
}