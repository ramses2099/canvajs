// parallax examples
let canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// console.log(context);
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let canvasPosition = canvas.getBoundingClientRect();

let gameFrame = 0;

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

  for (let circle of circles) {
    circle.update();
    circle.draw();
  }

  gameFrame++;
  // repeat animation loop every frame
  requestAnimationFrame(animate);
}
animate();

// add click event to the window
window.addEventListener("click", function (e) {});
