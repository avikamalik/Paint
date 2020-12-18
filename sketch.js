var brushColor;


function setup() {
  createCanvas(600, 600);
  strokeWeight(4);
  background(255)
  brushColor = color(50);
}

function draw() {
  if (touches.length>0) {
    if (touches[0] <= 50) { 
      if (touches[1] <= 50) {
        brushColor = color("red");
        touches[1]=null
      } else if (touches[1] <= 100) {
        brushColor = color("orange");
        touches[1]=null
      } else if (touches[1] <= 150) {
        brushColor = color("yellow");
        touches[1]=null
      } else if (touches[1] <= 200) {
        brushColor = color("green");
        touches[1]=null
      } else if (touches[1] <= 250) {
        brushColor = color("blue");
        touches[1]=null
      } else if (touches[1] <= 300) {
        brushColor = color("purple");
        touches[1]=null
      } else if (touches[1] <= 350) {
        brushColor = color("pink");
        touches[1]=null
      }
    }
    stroke(brushColor)
    line(touches[0], touches[1], touches[0], touches[1]);
  }

  //noStroke();
  //start coding for your color squares here!
  stroke(color(0));
  fill("red");
  rect(0, 0, 50, 50);
  fill("orange");
  rect(0, 50, 50, 50);
  fill("yellow");
  rect(0, 100, 50, 50);
  fill("green");
  rect(0, 150, 50, 50)
  fill("blue");
  rect(0, 200, 50, 50);
  fill("purple");
  rect(0, 250, 50, 50);
  fill("pink");
  rect(0, 300, 50, 50);

}