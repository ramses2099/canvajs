// parallax examples
let canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// console.log(context);
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const enemyImage = new Image();
enemyImage.src = "./images/enemy1.png";

let gameFrame = 0;

// class Enemy
class Enemy {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./images/enemy1.png";
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    // position in canvas
    this.y = Math.random() * (canvas.width - this.width);
    this.x = Math.random() * (canvas.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    this.color = "blue";
    // this.speed = Math.random() * 4 * -2;
  }

  update() {
    this.x += Math.random() * 15 - 7.5;
    this.y += Math.random() * 10 - 5;

    if (gameFrame % Math.floor(this.flapSpeed) === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
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
// Enemy 2
class Enemy2 {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./images/enemy2.png";
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    // position in canvas
    this.y = Math.random() * (canvas.width - this.width);
    this.x = Math.random() * (canvas.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    this.color = "blue";
    this.speed = Math.random() * 4 + 1;
    // trigonometric
    this.angle = Math.random() * 2;
    this.speedAngle = Math.random() * 0.2;
    this.curve = Math.random() * 10;
  }

  update() {
    this.x -= this.speed;
    // wave movement
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.speedAngle;

    if (this.x + this.width < 0) this.x = canvas.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
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
// Enemy3
class Enemy3 {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./images/enemy3.png";
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    // position in canvas
    this.y = Math.random() * (canvas.width - this.width);
    this.x = Math.random() * (canvas.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    this.color = "blue";
    this.speed = Math.random() * 4 + 1;
    // trigonometric
    this.angle = Math.random() * 2;
    this.speedAngle = Math.random() * 0.2 + 0.5;
    this.curve = Math.random() * 200 + 50;
  }

  update() {
    // circular movement
    // the movement pattern is determined by (Math.PI/180) change this we obtained different movement
    this.x =
      this.curve * Math.sin(this.angle * (Math.PI / 90)) +
      (canvas.width / 2 - this.width / 2);

    this.y =
      this.curve * Math.cos(this.angle * (Math.PI / 270)) +
      (canvas.height / 2 - this.height / 2);

    this.angle += this.speedAngle;

    if (this.x + this.width < 0) this.x = canvas.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
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
// Enemy4
class Enemy4 {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./images/enemy4.png";
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    // position in canvas
    this.y = Math.random() * (canvas.width - this.width);
    this.x = Math.random() * (canvas.height - this.height);

    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
    this.color = "blue";
  }

  update() {
    //
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }

    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx / 70;
    this.y -= dy / 70;

    if (this.x + this.width < 0) this.x = canvas.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
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

const numberEnemy = 10;
let enemiesArray = [];

for (let i = 0; i < numberEnemy; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  enemiesArray.push(new Enemy4(x, y));
}

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // draw layers
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  gameFrame++;
  // repeat animation loop every frame
  requestAnimationFrame(animate);
}
animate();
