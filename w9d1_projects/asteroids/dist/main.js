/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    RADIUS:  20,\n    COLOR: 'gray'\n  };\n\nfunction Asteroid(pos, game){\n    let options = {};\n    options.radius = DEFAULTS.RADIUS;\n    options.color = DEFAULTS.COLOR;\n    options.vel = Util.randomVec(5);\n    options.pos = pos;\n    options.game = game;\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject){\n  if (otherObject instanceof Ship) {\n    // alert(\"COLLISION!\");\n    otherObject.relocate();\n  }\n  else if (otherObject instanceof Bullet)\n  {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DEFAULTS = {\n    RADIUS:  5,\n    COLOR: 'red'\n  };\n\nfunction Bullet(pos, velocity, game){\n    let options = {};\n    options.radius = DEFAULTS.RADIUS;\n    options.color = DEFAULTS.COLOR;\n    options.vel = [velocity[0] * 2, velocity[1] * 2];//fix this\n    options.pos = pos;\n    options.game = game;\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\n\nCONSTANTS = {\n    DIM_X: 1000,\n    DIM_Y: 600,\n    NUM_ASTEROIDS: 4\n}\n\nfunction Game(){\n    //?\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this.randomPosition(), this);\n    this.bullets = [];\n}\n\nGame.prototype.addAsteroids = function(){\n    let i = 0;\n    while(i < CONSTANTS.NUM_ASTEROIDS)\n    {\n        let aster = new Asteroid(this.randomPosition(), this);\n        this.asteroids.push(aster);\n        i += 1;\n    }\n\n}\n\nGame.prototype.randomPosition = function(){\n    let x = Math.floor(Math.random()*CONSTANTS.DIM_X);\n    let y = Math.floor(Math.random()*CONSTANTS.DIM_Y);\n    return [x,y];\n}\n\nGame.prototype.draw = function(context){\n    context.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    this.allObjects().forEach(function(el) {\n        el.draw(context);\n    });\n}\n\nGame.prototype.moveObjects = function(){\n    this.allObjects().forEach(function(el) {\n        el.move();\n    })\n}\n\n\n\nGame.prototype.wrap = function(pos){\n    if(pos[0] < 0) {\n        pos[0] = CONSTANTS.DIM_X;\n    } else if (pos[0] > CONSTANTS.DIM_X) {\n        pos[0] = 0;\n    }\n\n    if(pos[1] < 0) {\n        pos[1] = CONSTANTS.DIM_Y;\n    } else if (pos[1] > CONSTANTS.DIM_Y) {\n        pos[1] = 0;\n    }\n\n  return pos;\n}\n\n//!\nGame.prototype.checkCollisions = function(){\n    const allObj = this.allObjects();\n    for (let i = 0; i < allObj.length; i++) {\n        for (let j = 0; j < allObj.length; j++) {\n            if (i != j && allObj[i].isCollidedWith(allObj[j])) {\n                allObj[i].collideWith(allObj[j]);\n                // this.remove(this.asteroids[i]);\n                // this.remove(this.asteroids[j]);\n                \n            }\n        }\n    }\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(obj){\n    if (obj instanceof Bullet)\n        this.bullets.splice(this.bullets.indexOf(obj), 1);\n    else if (obj instanceof Asteroid)\n        this.asteroids.splice(this.asteroids.indexOf(obj), 1);\n}\n\nGame.prototype.allObjects = function(){\n    return this.asteroids.concat(this.ship).concat(this.bullets);\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("function GameView(game, context){\n    this.game = game;\n    this.ship = game.ship;\n    this.context = context;\n}\n\nGameView.prototype.start = function(){\n    this.bindKeyHandlers();\n\n    let that = this;\n    setInterval(() => {\n        that.game.step.bind(that.game)();\n        that.game.draw(that.context);\n    }, 20);\n    // setInterval(that.game.draw(that.context), 2000);\n}\n\nGameView.prototype.bindKeyHandlers = function(){\n    const ship = this.ship;\n    key('up', function(){ ship.power([0,-4])});\n    key('left', function(){ ship.power([-4,0])});\n    key('down', function(){ ship.power([0,4]) });\n    key('right', function(){ ship.power([4,0]) });\n    key('space', function(){ ship.fireBullet() });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log('Webpack is working!');\n\n// const MovingObject = require(\"./moving_object.js\");\n// const Asteroid = require(\"./asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\n// window.Asteroid = Asteroid; //?\n// window.MovingObject = MovingObject;\n// window.GameView = GameView;\n\n// canvas = document.getElementById('game-canvas');\ndocument.addEventListener('DOMContentLoaded', function(event) {\n    console.log('DOM fully loaded and parsed');\n    const canvas = document.getElementById('game-canvas');\n    const context = canvas.getContext('2d');\n    const gam = new Game();\n    const gv = new GameView(gam, context);\n    gv.start();\n    \n    // window.game = game;\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.radius = options['radius'];\n    this.color = options['color'];\n    this.game = options['game'];\n}\n\nMovingObject.prototype.draw = function(context) {\n    context.beginPath();\n    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    context.fillStyle = this.color;\n    context.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    if(this.isWrappable())\n        this.pos = this.game.wrap(this.pos);\n    else\n        this.game.remove(this);\n\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    let radSum = this.radius + otherObject.radius;\n    const dist = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + (this.pos[1] - otherObject.pos[1]) ** 2);\n    return dist < radSum;\n}\n\nMovingObject.prototype.collideWith = function(otherObject){\n    // this.game.remove(otherObject);\n    // this.game.remove(this);\n}\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    RADIUS: 12, \n    COLOR: 'red'\n}\n\nfunction Ship(pos, game){\n    let options = {};\n    options.radius = DEFAULTS.RADIUS;\n    options.color = DEFAULTS.COLOR;\n    options.vel = [0,0];\n    options.pos = pos;\n    options.game = game;\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n    this.pos = [Math.random()*1000, Math.random()*600];\n    this.vel = [0,0];\n}\n\nShip.prototype.power = function(impulse){\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function(){\n    let bullet = new Bullet(this.pos, this.vel, this.game);\n    this.game.bullets.push(bullet);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n      function Surrogate (){};\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate;\n      childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\n\n  \nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;