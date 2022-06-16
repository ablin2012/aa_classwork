console.log('Webpack is working!');

// const MovingObject = require("./moving_object.js");
// const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");
const Game = require('./game.js')

// window.Asteroid = Asteroid; //?
// window.MovingObject = MovingObject;
// window.GameView = GameView;

// canvas = document.getElementById('game-canvas');
document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM fully loaded and parsed');
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    const gam = new Game();
    const gv = new GameView(gam, context);
    gv.start();
    
    // window.game = game;
});


