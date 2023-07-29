


function setup() {
  createCanvas(400, 400);
  
  img = loadImage("COMPLEX_MOVEMENTS_06.JPG");
}

function draw() {
  background(220);
  
  // No scaling
  imageMode(CORNER);
  image(backgroundImg, 0, 0);
  
  // Image warps because not scaling proportionally
  imageMode(CORNER);
  image(backgroundImg, 0, 0, width, height);
  
  // Image scales proportionally
  i // to fit width
  
  // Placing image on screen and keeping in proportion
  
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800, 800);
  function preload() {
  img = loadImage('assets/pixelbg1.jpg');
}

function draw() {
  image(img, 0, 0);
}

function mousePressed() {
  img.resize(50, 50);
}

  //Create catcher 
  catcherImg.resize(200, 0);
  catcher = new Sprite(catcherImg, 200, 380, 100, 20, "k");

  //Create falling object
  fallingImg.resize(40, 0);
  fallingObject = new Sprite(fallingImg, 100, 0, 10);
  fallingObject.vel.y = 2;
  fallingObject.rotationLock = true;

  //stop = new Sprite(40, 50, 75, 20, 'k');

  fill(0);
  textSize(15);
  text("Stop", 50, 30);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(100, 100, 100);
  image(backgroundImg, 0, 0);

  // Draw directions to screen
  fill(23, 34, 234);
  textSize(15);
 

  if (fallingObject.y >= height) {
    fallingObject.x = random(width);
    fallingObject.y = 0;
    fallingObject.vel.y = random(1, 5);
    score = score - 1;
  }

  if (kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  }
  else {
    catcher.vel.x = 0;
  }

  if (catcher.x < 50) {
    catcher.x = 50;
  } else if (catcher.x > 350) {
    catcher.x = 350;
  }

  if (fallingObject.collides(catcher)) {
    fallingObject.x = random(width);
    fallingObject.y = 0;
    fallingObject.vel.y = 1 * random(1, 5);
    fallingObject.direction = "down";
    score = score + 1;
  }

  fill(128, 0, 128);
  textSize(20);
  text("Score⭐️: " + score, 10, 30);
}