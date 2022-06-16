const Asteroid = require('./asteroid.js');
const Ship = require("./ship.js")
const Bullet = require("./bullet.js")

CONSTANTS = {
    DIM_X: 1000,
    DIM_Y: 600,
    NUM_ASTEROIDS: 4
}

function Game(){
    //?
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this.randomPosition(), this);
    this.bullets = [];
}

Game.prototype.addAsteroids = function(){
    let i = 0;
    while(i < CONSTANTS.NUM_ASTEROIDS)
    {
        let aster = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(aster);
        i += 1;
    }

}

Game.prototype.randomPosition = function(){
    let x = Math.floor(Math.random()*CONSTANTS.DIM_X);
    let y = Math.floor(Math.random()*CONSTANTS.DIM_Y);
    return [x,y];
}

Game.prototype.draw = function(context){
    context.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    this.allObjects().forEach(function(el) {
        el.draw(context);
    });
}

Game.prototype.moveObjects = function(){
    this.allObjects().forEach(function(el) {
        el.move();
    })
}



Game.prototype.wrap = function(pos){
    if(pos[0] < 0) {
        pos[0] = CONSTANTS.DIM_X;
    } else if (pos[0] > CONSTANTS.DIM_X) {
        pos[0] = 0;
    }

    if(pos[1] < 0) {
        pos[1] = CONSTANTS.DIM_Y;
    } else if (pos[1] > CONSTANTS.DIM_Y) {
        pos[1] = 0;
    }

  return pos;
}

//!
Game.prototype.checkCollisions = function(){
    const allObj = this.allObjects();
    for (let i = 0; i < allObj.length; i++) {
        for (let j = 0; j < allObj.length; j++) {
            if (i != j && allObj[i].isCollidedWith(allObj[j])) {
                allObj[i].collideWith(allObj[j]);
                // this.remove(this.asteroids[i]);
                // this.remove(this.asteroids[j]);
                
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(obj){
    if (obj instanceof Bullet)
        this.bullets.splice(this.bullets.indexOf(obj), 1);
    else if (obj instanceof Asteroid)
        this.asteroids.splice(this.asteroids.indexOf(obj), 1);
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat(this.ship).concat(this.bullets);
}


module.exports = Game;