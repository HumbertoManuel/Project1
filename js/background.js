class Background {
    draw() {
        // console.log('this is the background');
        
        game.backgroundImages.forEach(function (img) {
            // here we use the speed property of the image instead of
            // a specific value so that every image moves at a different speed
            img.y += img.speed;
            //if (img.y=100)
            if (img)
            image(img.src, 0, img.y, width, height)
            // this puts a second image after the first
            image(img.src, 0, img.y - height, width, height)
            // if the image leaves the screen we set it back to it's starting
            // position
            if (img.y > height) {
                img.y = 0;
            }
        })

    }
}


