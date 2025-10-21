function setup () {
  createCanvas (400, 250);
  noStroke();
}
  function drawObject (x, y, s) {
  push();
  translate(x, y);
  scale(s);
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
  pop();
  } 
let s = 1;
function draw() {
  background(0); 
  for (let y = 0; y < 250; y += 50 * s) 
    for (let x = 0; x < 400; x += 80 * s) { 
      drawObject(x, y, s);
  }
}
 function keyTyped () {
  if (key === 'm') { s = (s / 2);}
    else if (key === 'l') {s = (s * 2);}
  if (s > 1) s = 1;
  if (s < 0.2) s = 0.2;
 }