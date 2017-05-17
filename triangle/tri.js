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