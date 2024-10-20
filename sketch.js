let data = [];

function preload() {
  data = loadTable("Beijing-PM2.5.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(128);
  stroke(40);
  strokeWeight(0.2);

  for (let idx = 0; idx < data.getRowCount(); idx++) {
    let s = data.getNum(idx, "pm2.5");
    let x = data.getNum(idx, "month");
    let s1 = map(s, 10, 200, 50, 150);
    let x1 = map(x, 1, 12, 0, windowWidth);
    noFill();
    ellipse(x1, height / 2, s1);
  }
}

function draw() {}
