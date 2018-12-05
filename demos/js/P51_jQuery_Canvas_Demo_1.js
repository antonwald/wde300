var canvas = document.createElement('canvas');
var canvasWidth = canvas.width = 500;
var canvasHeight = canvas.height = 500;
var ctx = canvas.getContext('2d');

document.body.style.background = 'black';
document.body.appendChild(canvas);

function clear() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  return true;
}

// add a timer function, it should
// return truthy if it wants to keep running...
jQuery.fx.timer(clear);

// Thing Constructor, initial x and y position
function Thing(x, y) {
  this.x = x;
  this.y = y;
  this.width = 6;
  this.height = 6;
  this.color = 'rgb(' + [0 | Math.random() * 255, 0 | Math.random() * 255, 0 | Math.random() * 255] + ')';
}

// Animate to a new position and size
Thing.prototype.go = function() {
  var width = Math.random() * 20;
  // use jQuery.Animation() for the promisy goodness
  var anim = jQuery.Animation(this, {
    x : Math.random() * canvasWidth,
    y : Math.random() * canvasHeight,
    width : width,
    height : width
  }, {
    duration : Math.random() * 1000 + 2000
  });

  // call draw after we finish each frame of the animations
  // call go after we finish each animation
  anim.progress(this.draw).done(this.go);
};

// draw this thing
Thing.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

// create 200 things and go

for (var i = 0; i < 200; ++i) {
  t = new Thing(Math.random() * canvasWidth, Math.random() * canvasHeight);  t.go();
}