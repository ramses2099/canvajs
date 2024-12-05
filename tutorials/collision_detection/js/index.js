// parallax examples
let canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// console.log(context);
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let canvasPosition = canvas.getBoundingClientRect();

let gameFrame = 0;

class Explosion {
  constructor(x, y) {
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    // aspect ratio of the sprite;
    this.width = this.spriteWidth * 0.7;
    this.height = this.spriteHeight * 0.7;
    this.x = x - this.width / 2;
    this.y = y - this.height / 2;
    this.image = new Image();
    this.image.src = "./images/boom.png";
    this.frameIndex = 0;
    this.timer = 0;
  }
  update() {
    this.timer++;
    if (this.timer % 10 === 0) {
      this.frameIndex++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frameIndex * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

let explosions = [];

// Box object
class Box {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  update() {}

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
// Circler object
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  update() {}
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

let boxes = [];
let countBoxes = 3;

let boxePlayer = new Box(30, 30, 32, 32, "red");

for (let i = 0; i < countBoxes; i++) {
  let x = Math.random() * (CANVAS_WIDTH - 100) + 50;
  let y = Math.random() * (CANVAS_HEIGHT - 100) + 50;
  let width = Math.random() * 100 + 50;
  let height = Math.random() * 100 + 50;
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  boxes.push(new Box(x, y, width, height, color));
}

let circlesCount = 4;
let circles = [];

for (let i = 0; i < circlesCount; i++) {
  let x = Math.random() * CANVAS_WIDTH;
  let y = Math.random() * CANVAS_HEIGHT;
  let radius = Math.random() * 50 + 25;
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  circles.push(new Circle(x, y, radius, color));
}

// collection between rectangles
function collitionRect(rect1, rect2) {
  if (
    rect1.x < rect.x + rect.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    return true;
  }
  return false;
}

// collection between circles
function collitionCircle(circle1, circle2) {
  let dx = circle1.x - circle2.x;
  let dy = circle1.y - circle2.y;
  let distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    return true;
  }
  return false;
}

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // draw layers

  for (let box of boxes) {
    box.update();
    box.draw();
  }

  for (let circle of circles) {
    circle.update();
    circle.draw();
  }

  // player
  boxePlayer.draw();

  for (let ex of explosions) {
    ex.update();
    ex.draw();
    // remove object in array
    if (ex.frameIndex >= 5) {
      explosions.splice(explosions.indexOf(ex), 1);
    }
  }

  gameFrame++;
  // repeat animation loop every frame
  requestAnimationFrame(animate);
}
animate();

// add click event to the window
window.addEventListener("click", function (e) {
  // console.log("ok click");
  // click event

  let offset = 25;
  let x = e.x - canvasPosition.left - offset;
  let y = Math.floor(e.y - canvasPosition.top) - offset;
  // console.log("x=" + x + ",y=" + y);
  explosions.push(new Explosion(x, y));
});
