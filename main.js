
window.ctx = document.querySelector("#canvas").getContext('2d');

function init() {
  document.querySelector("#canvas").width = screen.width;
  document.querySelector("#canvas").height = screen.height;
}

function drawRectangle(x, y, w, h) {
  window.ctx.fillRect(x,y,w,h);
}

function drawTriangle(x,y, width, height) {
  var p1 = {x: x, y: y-(height/2) };
  var p2 = {x: x+(width/2), y: y+(height/2)};
  var p3 = {x: x-(width/2), y: y+(height/2)};
  var ctx = window.ctx;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  color("blue");
  ctx.fill();
  ctx.closePath();
}

function text(x,y,text, size) {
  window.ctx.font = size + " Arial";
  window.ctx.fillText(text, x, y);
}

function color(c) {
  window.ctx.fillStyle = c;
}

function onclick(cb) {
  document.querySelector("#canvas").addEventListener("click", function (e) {
    cb(e);
  });
}

function onspace(cb) {
  document.querySelector("body").addEventListener("keypress", function (e) {
    e.preventDefault();
      if (e.keyCode === 32) {
        cb(e);
      }
      return true;
    });
}

var keyCallbacks = {};

function onkey(keyCode, cb) {
  keyCallbacks[keyCode] = cb;
}

document.querySelector("body").addEventListener("keypress", function (e) {
  e.preventDefault();
  if (keyCallbacks[e.keyCode] !== undefined) {
    keyCallbacks[e.keyCode](e);
  }
});

function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = 0;
  this.h = 0;

  this.draw = function () {
    this.w++;
    this.h++;
    if (this.w >= w) {
      this.w = 0;
      this.h = 0;
    }
    color(this.color);
    drawRectangle(this.x, this.y, this.w, this.h);
  }
}

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.count = 0;

  this.draw = function () {
    color(this.color);
    this.count++;
    if (this.count >= this.r) {
      this.count = 0;
    }
    drawCircle(x,y,this.count);
  }
}

// // For easily drawing shapes
// function Shapes(engine) {
//   this.engine = engine;
// }

// Shapes.prototype.getCtx = function () {
//   return this.engine.ctx;
// };

// Shapes.prototype.drawRectangle = function (xPos, yPos, width, height) {
//   var ctx = this.getCtx();
//   ctx.fillRect(xPos, yPos, width, height);
// };

function drawCircle(xPos, yPos, radius) {
  ctx.beginPath();
  ctx.arc(xPos, yPos, radius, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();
};

// function EZDraw(opts) {
//   this.bgColor = opts.bgColor;
//   this.canvas = document.querySelector(opts.canvas);
//   this.ctx = this.canvas.getContext('2d');
//   this.fps = opts.fps || 60;
// }

// // Start the loop
// EZDraw.prototype.play = function () {
//   this._interval = setInterval(this._loop, this.fps);
// };

// // Stop the loopd
// EZDraw.prototype.stop = function () {
//   clearInterval(this._interval);
// };
// // Set the loop
// EZDraw.prototype.loop = function (callback) {
//   var self = this;
//   this._loop = function () {
//     self.ctx.fillStyle = self.bgColor;
//     se;f.ctx.fillRect(0,0, self.canvas.width, self.canvas.height);
//     callback(self);
//   }
// };

// EZDraw.prototype.color = function (clr) {
//   this.ctx.fillStyle(clr);
// }

// function color(c) {
//   window.ctx.fillStyle = c;
// }

// function Engine(canvasQuery) {
//   var canvas = document.querySelector(canvasQuery)
//   this.interval = null;
//   this.cb = null;
//   this.ctx = canvas.getContext('2d');
//   this.width = canvas.width;
//   this.height = canvas.height;
//   this.frame = 0;
//   this.fps = 60;
//   this.data = {};
// }

// Engine.prototype.play = function () {
//   if (this.cb === null) {
//     console.error("Must set loop callback before playing!");
//   }
//   this.interval = setInterval(this.loop, 17);
// };

// Engine.prototype.pause = function () {
//    if (this.interval === null) {
//     return;
//   }
//   clearInterval(this.interval);
// };

// Engine.prototype.tick = function () {
//   this.frame++;
//   if (this.frame >= this.fps) {
//     this.frame = 0;
//   }

//   this.cb(this.ctx, this.data);
  
// };

// Engine.prototype.stop = function () {
//   if (this.interval === null) {
//     return;
//   }
//   this.frame = 0;
//   clearInterval(this.interval);
// };

// Engine