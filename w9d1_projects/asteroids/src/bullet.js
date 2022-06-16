const MovingObject = require("./moving_object");
const Util = require("./util");
const Ship = require("./ship");
const Asteroid = require("./asteroid");

const DEFAULTS = {
    RADIUS:  5,
    COLOR: 'red'
  };

function Bullet(pos, velocity, game){
    let options = {};
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;
    options.vel = [velocity[0] * 2, velocity[1] * 2];//fix this
    options.pos = pos;
    options.game = game;
    MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;