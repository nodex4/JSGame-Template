import { Player } from "/src/player.js";
import { InputHandler } from "/src/input.js";
import { World } from "/src/world.js";


window.addEventListener("load", function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  const fps = 120;
  let gameSpeed = 1;
  if (fps === 60) gameSpeed = 1;
  else if (fps === 120) gameSpeed = 0.5;
  else if (fps === 240) gameSpeed = 0.25;
  

  class Game {
    constructor(width, height) {
      this.world = new World(width, height);
      this.player = new Player(this.world);
      this.input = new InputHandler();
    }
    update() {
      this.player.update(this.input.keys);
    }

    draw(context) {
      this.player.draw(context);
    }
  }



  const game = new Game(canvas.width, canvas.height);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / fps);
  };

 
  animate();
});