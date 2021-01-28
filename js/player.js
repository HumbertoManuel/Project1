class Player {
    constructor() {
        this.score = 5;
        this.gravity = 0.4;
        this.velocity = 0;
        this.width = 50;
        this.height = 50;
        
        this.x = 40;
        this.y = height - this.height;
    }
setup() {
    textAlign(CENTER, CENTER)
}
    jump() {
        this.velocity = - 150;
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
    }
    moveUp() {
        if (this.y<=110)
        this.y= 110;
        else
        this.y -= 120;
    }
    moveDown() {
        if (this.y>=950)
        this.y= 950;
        else
        this.y += 120;
    }
    moveLeft() {
        if (this.x<=40)
        this.x= 40;
        else
        this.x -= 120;
        
    }
    moveRight() {
        if (this.x>=400)
        this.x= 400;
        else
        this.x += 120;
    }
   
    //moveUp() {this.y -= 120;}
    //moveDown() {this.y += 120;}
    //moveLeft() {this.x -= 120;}
    //moveRight() {this.x += 120;}


    draw() {
       // console.log(this.score);
        textSize(30);
        fill(255);
        text("Score: "+this.score,width/4,20);
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}
