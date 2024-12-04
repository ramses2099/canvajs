// parallax examples
let canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// console.log(context);
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const bg_layer01 = new Image();
bg_layer01.src = "./images/layer-1.png";
const bg_layer02 = new Image();
bg_layer02.src = "./images/layer-2.png";
const bg_layer03 = new Image();
bg_layer03.src = "./images/layer-3.png";
const bg_layer04 = new Image();
bg_layer04.src = "./images/layer-4.png";
const bg_layer05 = new Image();
bg_layer05.src = "./images/layer-5.png";

let gameSpeed = 5;

class Layer {
  constructor(image, speedModifier) {
    this.image = image;
    this.speedModifier = speedModifier;
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(bg_layer01, 0.2);
const layer2 = new Layer(bg_layer02, 0.4);
const layer3 = new Layer(bg_layer03, 0.5);
const layer4 = new Layer(bg_layer04, 0.6);
const layer5 = new Layer(bg_layer05, 1);

const gameObject = [layer1, layer2, layer3, layer4, layer5];

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // draw layers
  for (let layer of gameObject) {
    layer.update();
    layer.draw();
  }

  requestAnimationFrame(animate);
}
animate();
