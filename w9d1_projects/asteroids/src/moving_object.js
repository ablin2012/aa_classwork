function MovingObject(options){
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];
    this.game = options['game'];
}

MovingObject.prototype.draw = function(context) {
    context.beginPath();
    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
}

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if(this.isWrappable())
        this.pos = this.game.wrap(this.pos);
    else
        this.game.remove(this);

}

MovingObject.prototype.isCollidedWith = function(otherObject){
    let radSum = this.radius + otherObject.radius;
    const dist = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + (this.pos[1] - otherObject.pos[1]) ** 2);
    return dist < radSum;
}

MovingObject.prototype.collideWith = function(otherObject){
    // this.game.remove(otherObject);
    // this.game.remove(this);
}

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;