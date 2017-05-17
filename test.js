color("#00ffff");
// // is the comment in javascript

var coolColors = ["#00ffff", "#00ff00", "#ff66ff", "#0099cc"];
var awesomeColors = ["#ff66ff", "#00ff00", "#00ffff"];

var width = 1;
var height = 1;
var colorSpot = 0;
var playing = true;
var drawingRectangles = false;
var sam = false; //I'm false

var rectangles = []; // our empty list of rectangles
var cameronsCircles = [];

function changeColor() { // here is the function that changes the color
  colorSpot++;
  if (colorSpot >= coolColors.length) {
    colorSpot = 0;
  }
}

onclick(function (e) { //stuff that happens when you click!
  changeColor(); // this changes the color!!!!!
  var x = e.clientX;
  var y = e.clientY;
  if (drawingRectangles === true) {
    var myRectangle = new Rectangle(x,y,200,200)
    myRectangle.color = coolColors[colorSpot];
    rectangles.push(myRectangle);
  } else {
    var myCircle = new Circle(x,y,200);
    myCircle.color = coolColors[colorSpot];
    cameronsCircles.push(myCircle);
  }
  
});

//32 is the keycode for space
onkey(32, function (e) { //do stuff when space is clicked
  if (playing === true) {
    playing = false;
  } else { //if its false
    playing = true;
  }
});

onkey(99, function (e) { //99 is the keycode for 'c'
  console.log("hello");
  if (drawingRectangles === false) {
    drawingRectangles = true;
  } else {
    drawingRectangles = false;
  }
});

// Here's out loop
setInterval(function loop() {
  if (playing) {
    color("black");
    drawRectangle(0,0,screen.width,screen.height);
    for (var i = 0; i < cameronsCircles.length; i++) {
      cameronsCircles[i].draw();
    }
    for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
    }
    color("white");
    text(500,500,"the blurb", "35px");
  }
}, 16);