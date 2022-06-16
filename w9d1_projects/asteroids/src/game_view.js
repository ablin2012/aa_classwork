function GameView(game, context){
    this.game = game;
    this.ship = game.ship;
    this.context = context;
}

GameView.prototype.start = function(){
    this.bindKeyHandlers();

    let that = this;
    setInterval(() => {
        that.game.step.bind(that.game)();
        that.game.draw(that.context);
    }, 20);
    // setInterval(that.game.draw(that.context), 2000);
}

GameView.prototype.bindKeyHandlers = function(){
    const ship = this.ship;
    key('up', function(){ ship.power([0,-4])});
    key('left', function(){ ship.power([-4,0])});
    key('down', function(){ ship.power([0,4]) });
    key('right', function(){ ship.power([4,0]) });
    key('space', function(){ ship.fireBullet() });
}

module.exports = GameView;