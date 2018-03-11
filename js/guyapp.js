//Makes Moves
var game = {
 width 
 : 490,
    height 
    : 590,
  
  numRows : 6,
    numCols : 5,
    dx : 101,

  dy : 83,
    playerStartPosition: {

       x : 202,

      y : 404,
    },
    walls : {         left : 0,
    
    right : 404,
        up : 404-83*5,
       down : 404,
    },
}
Object.seal(game);




// The bugs
    class Beetle {
    constructor(y, howFast) {
// Bug pics     
        this.sprite = 'images/bug.png';
        this.x = 0;
          this.howFast = howFast;
        this.y = y;
             this.half = 50;
    }


    update(dt) {
      
        if (this.x > game.walls.right) {
            this.x = game.walls.left;
        } else {
            this.x += this.howFast * dt;
            
            // Bugs eating
            if (this.y === player.UD()) {
                if (Math.abs(this.x - player.LR()) < 
                    (this.half + player.getHalf())) {
                    player.reset();
                }
                else{
                    console.log('nope');
                }
            }
            
        }
    }

//Makes bugs
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/guy.png';
        this.where = game.playerStartPosition;
        this.pressedKey = null;
        this.half = 30;
    }

    LR() {
        return this.where.x;
    }

   UD() {
        return this.where.y;
    }


    getHalf() {
        return this.half;
    }
  reset() {
        this.where.x = 200;
        this.where.y = 404;
        this.render();
    }
    // Return

        update() {
        if (this.where.y === 404-83*5) {
            if (window.confirm('Congrats. You won!. Click Ok to restart.')){
          this.reset();
          }
          else{
            this.where.y = "none";
          }
        }
 if (this.pressedKey == null){
       
}
            if (this.pressedKey == "left"){
             if (this.where.x !== game.walls.left) {
                    this.where.x -= game.dx;
                } 
}
        if (this.pressedKey == "up"){
           if (this.where.y !== game.walls.up) {
                    this.where.y -= game.dy;
                }
}
        if (this.pressedKey == "right"){
                 if (this.where.x !== game.walls.right) {
                    this.where.x += game.dx;
           }
}
        if (this.pressedKey == "down"){
    if (this.where.y !== game.walls.down) {
                    this.where.y += game.dy;
                }
}
        this.pressedKey = null;

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.where.x, this.where.y);
    }

    handleInput(keyInput) {
        this.pressedKey = keyInput;
    }

}


//Set up arrays and variables
const player = new Player();

   const allEnemies = [new Beetle(404-83*1, 90), new Beetle(404-83*2, 150), new Beetle(404-83*3, 100), new Beetle(404-83*4, 120)];


//Keys you press
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});