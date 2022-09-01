import { Sitting } from "./playerStates.js"

export class Player {
  constructor(world) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 50;
    this.height = 50;
    this.weight = 1;
    this.speed = 0;
    this.maxSpeed = 5;
    this.jumpPower = 20;
    this.world = world;
    this.image = document.getElementById("player");
    // this.frameX = 0;
    // this.frameY = 0;
    this.states = [new Sitting(this)];
    this.currentState = this.states[0];
    this.currentState.enter()
  }
  
  update(input) {
    // horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else this.speed = 0;
    // set horizontal boundaries
    if (this.x < 0) this.x = 0;
    if (this.x > this.world.width - this.width) this.x = this.world.width - this.width;

    // vertical movement
    if (input.includes("ArrowUp") && this.onGround()) this.vy -= this.jumpPower;
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
  }

 
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    console.log("drawing")
  }
  
  onGround() {
    return this.y >= this.world.height - this.height;
  }
}