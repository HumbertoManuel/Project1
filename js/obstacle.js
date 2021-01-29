class Obstacle {
    constructor(image) {
        this.image = image;
        this.y = 0;
        this.x=[40,160,280,400];
        this.x=random(this.x);
        this.width = 50;
        this.height = 50;
       
        
    }
     collision(playerInfo) {
        //console.log('collision', playerInfo);
        // get the middle of the Car
        
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        // use p5 dist() function to measure distance between two objects
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            //game.playerImage = game.playerplayerAditional;
            return false
        } else {
                // collision was detected
                if (game.player.score > 0){
                    game.player.score-=1;     
                    game.playerImage=game.playerCrash;
                    image(game.playerCrash, this.x, this.y, this.width, this.height);
                }
                else
                    return false 
                }
                //when there is a Crash, i change the Picture
               
            return true            
    }  
    draw() {
        
        this.y=this.y+10;  // so the Cars appear faster 20 is fine
        image(this.image, this.x, this.y, this.width, this.height);
        //console.log('obstacle drawing');

    }
}

