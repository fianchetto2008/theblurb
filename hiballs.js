let ctx;

function createCanvas() {
  let canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 900;
  canvas.style.outline = "1px black solid";
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
}

function hiBalls() {
  ctx.font = "240px Arial";
  ctx.fillText("hi balls", 40, 240);
}

createCanvas();
hiBalls();