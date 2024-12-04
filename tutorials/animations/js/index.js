let playerState = "fall";
const dropdownState = document.getElementById("animations");

dropdownState.addEventListener("change", function () {
  playerState = this.value;
});

// animation examples
let canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// console.log(context);
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// objects
const playerImage = new Image();
playerImage.src = "./images/shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrame = 5;

// sprites data animation
const spriteAnimations = [];
const animationStates = [
  { name: "idle", frame: 7 },
  { name: "jump", frame: 7 },
  { name: "fall", frame: 7 },
  { name: "run", frame: 9 },
  { name: "dizzy", frame: 11 },
  { name: "sit", frame: 5 },
  { name: "roll", frame: 7 },
  { name: "bite", frame: 7 },
  { name: "ko", frame: 12 },
  { name: "getHit", frame: 7 },
];

animationStates.forEach((state, index) => {
  let frame = {
    loc: [],
  };

  for (let i = 0; i < state.frame; i++) {
    let positionX = i * spriteWidth;
    let positionY = index * spriteHeight;

    frame.loc.push({
      x: positionX,
      y: positionY,
    });
  }

  spriteAnimations[state.name] = frame;
});

// console.log(spriteAnimations);

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrame) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  // position

  //animation loop
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
