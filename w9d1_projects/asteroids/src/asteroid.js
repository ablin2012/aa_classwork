const MovingObject = require("./moving_object");
const Util = require("./util");
const Ship = require("./ship")
const Bullet = require("./bullet");

const DEFAULTS = {
    RADIUS:  20,
    COLOR: 'gray'
  };

function Asteroid(pos, game){
    let options = {};
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;
    options.vel = Util.randomVec(5);
    options.pos = pos;
    options.game = game;
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject){
  if (otherObject instanceof Ship) {
    // alert("COLLISION!");
    otherObject.relocate();
  }
  else if (otherObject instanceof Bullet)
  {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
}

module.exports = Asteroid;