import { Running, Sliding, Jumping, Falling } from "./playerStates.js"

export class Player {
  constructor(world) {
    this.world = world;
    this.x = 0;
    this.y = 0; // this.world.height - this.height - this.world.groundMargin
    this.vx = 0;
    this.vy = 0;
    this.width = 50;
    this.height = 50;
    this.rotation = 0;
    this.jumpPower = 20;
    this.speed = 5;
    this.image = document.getElementById("player");
    // this.frameX = 0;
    // this.frameY = 0;
    this.states = [new Running(this, this.world), new Sliding(this, this.world), new Jumping(this, this.world), new Falling(this, this.world)];
    this.currentState = this.states[0];
    this.currentState.enter()
  }
  
  update(input) {
    this.currentState.handleInput(input);
    
    // horizontal movement
    if (input.includes("ArrowLeft")) this.vx = -this.speed;
    else if (input.includes("ArrowRight")) this.vx = this.speed;
    this.x += this.vx;

    // vertical movement
    this.y += this.vy;
    // vertical boundaries
    if (this.y < 0) {
      this.y = 0
      this.vy = 0
      
    // horizontal boundaries
    if (this.x < 0) this.x = 0;
    if (this.x > this.world.width - this.width) this.x = this.world.width - this.width;
    };

    
    if(this.onGround()) {
            this.vx *= this.world.friction;
            this.vy = 0;
        } else {
            this.vy += this.world.gravity;
        }

  }

 
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    console.log("drawing")
  }
  
  onGround() {
    return this.y >= this.world.height - this.height;
  }
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}