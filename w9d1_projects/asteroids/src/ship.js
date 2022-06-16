const MovingObject = require("./moving_object");
const Util = require("./util");
const Bullet = require("./bullet");

const DEFAULTS = {
    RADIUS: 12, 
    COLOR: 'red'
}

function Ship(pos, game){
    let options = {};
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;
    options.vel = [0,0];
    options.pos = pos;
    options.game = game;
    MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    this.pos = [Math.random()*1000, Math.random()*600];
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function(){
    let bullet = new Bullet(this.pos, this.vel, this.game);
    this.game.bullets.push(bullet);
}

module.exports = Ship;