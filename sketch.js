let conter=0;

let countInterval = setInterval(colorBalloon, 1000);

function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {
  background(220);
  
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let balloonsize = random(30, 70);
    let colorBalloon = color(random(255), random(255), random(255));
    fill(colorBalloon);
    ellipse(x, y, balloonsize, balloonsize);
  }
}

function mousePressed() {

  clearInterval(colorBalloon);
  console.log("气球生成已停止！");
}