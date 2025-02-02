let counter = 0;
let countInterval;
let balloonCount = 0;

function setup() {
  createCanvas(900, 900);
  noSmooth();
  countInterval = setInterval(colorBalloons, 2000);
}

function draw() {
  background(220);
  
  for (let i = 0; i < balloonCount; i++) {
    let x = random(width);
    let y = random(height);
    let balloonsize = random(10, 30);
    let balloonColor = color(random(255), random(255), random(255));
    fill(balloonColor);
    ellipse(x, y, balloonsize, balloonsize);
  }

  if (balloonCount >= 10) {
    clearInterval(countInterval);
    console.log("Balloon count reached 10, stopping generation!");
  }
}

function mousePressed() {
  balloonCount = 0;
  counter = 0;
  console.log("Restarting balloon generation...");
  countInterval = setInterval(colorBalloons, 2000);
}

function colorBalloons() {
  if (balloonCount < 10) {
    balloonCount++;
    counter++;
    console.log("Current balloon count: " + balloonCount);
  }
}