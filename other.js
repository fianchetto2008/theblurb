color("#00ffff");
// // is the comment in javascript

var coolColors = ["#00ffff", "#00ff00", "#ff66ff", "#0099cc"];
var awesomeColors = ["#ff66ff", "#00ff00", "#00ffff"];

var width = 1;
var height = 1;
var colorSpot = 0;
var reverse = false;

setInterval(function loop() {
  color("#fff");
  drawRectangle(0,0,400, 400);

  if (reverse === false) {
    color(coolColors[colorSpot]);
    width = width + 1;
    height = height + 1;

    if (width === 400) {
      colorSpot = colorSpot + 1;
      width = 0;
      height = 0;
    }

    if (colorSpot === 4) { //if at the end of the colors list
      colorSpot = 3;
      reverse = true;
      width = 400;
      height = 400;
    }
  } else {
    color(coolColors[colorSpot]);
    width = width - 1;
    height = height - 1;

    if (width === 0) {
      colorSpot = colorSpot - 1;
      width = 400;
      height = 400;
    }

    if (colorSpot === -1) { //if at the end of the colors list
      colorSpot = 0;
      reverse = false;
      width = 0;
      height = 0;
    }
  }

  drawRectangle(0, 0, width, height);
}, 16);