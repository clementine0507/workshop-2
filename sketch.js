let counter = 0;
let countInterval;
let balloonCount = 0;

function setup() {
  createCanvas(900, 900);
  noStroke();
  countInterval = setInterval(colorBalloons, 1000);
}

function draw() {
  background(220);
  
  for (let i = 0; i < balloonCount; i++) {
    let x = random(width);
    let y = random(height);
    let balloonsize = random(30, 70);
    let balloonColor = color(random(255), random(255), random(255));
    fill(balloonColor);
    ellipse(x, y, balloonsize, balloonsize);
  }

  if (balloonCount >= 10) {
    clearInterval(countInterval);
    console.log("气球数量已达到 10，停止生成！");
  }
}

function mousePressed() {
  balloonCount = 0;
  counter = 0;
  console.log("重新开始生成气球...");
  countInterval = setInterval(colorBalloons, 1000);
}

function colorBalloons() {
  if (balloonCount < 10) {
    balloonCount++;
    counter++;
    console.log("当前气球数量: " + balloonCount);
  }
}
