function setup() {

  createCanvas(600, 350);
  background(240);
  noStroke();

  var size = height / 3;
  var margin = width / 20;
  var x = width - margin - size;
  var y = height - margin - size;
  translate(x, y);
  rotate(radians(10));
  fill(200);
  rect(0, 0, width, height);
  fill(40);
  rect(0, 0, size, size);

  noLoop();
}
