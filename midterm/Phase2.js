function setup () {
  createCanvas (80, 60);
  noStroke();
}
  function draw () {
  background (0)
  fill(255); 
  triangle(0, 25, 30, 20, 30, 30)
  triangle(30, 20, 20, 0, 35, 20)
  triangle(35, 20, 40, 0, 45, 20)
  triangle(45, 20, 60, 0, 50, 20)
  triangle(80, 25, 50, 20, 50, 30)
  triangle(20, 50, 30, 30, 35, 30)
  triangle(35, 30, 40, 50, 45, 30)
  triangle(45, 30, 60, 50, 50, 30)
  rect(30, 20, 20, 10)
  }