const states = {
  RUNNING: 0,
  SLIDING: 1,
  JUMPING: 2,
  FALLING: 3
}

class State {
  constructor(state) {
    this.state = state;
  }
}



export class Running extends State {
  constructor(player, world) {
    super("RUNNING");
    this.player = player;
    this.world = world;
  }
  enter() {
    
  }
  handleInput(input) {
    if (input.includes("ArrowUp")) {
      this.player.setState(states.JUMPING);
    }
    
    else if (input.includes("ArrowDown")) {
      this.player.setState(states.SLIDING);
    }
      
  }
}



export class Sliding extends State {
  constructor(player, world) {
    super("SLIDING");
    this.player = player;
    this.world = world;
  }
  enter() {
    
  }
  handleInput(input) {
    if (input.includes("ArrowDown")) {
      this.player.setState(states.SLIDING);
    }
  }
}



export class Jumping extends State {
  constructor(player, world) {
    super("JUMPING");
    this.player = player;
    this.world = world;
  }
  enter() {
    if (this.player.onGround()) {
      this.player.vy -= this.player.jumpPower;
    }
  }
  handleInput(input) {
    if (this.player.vy > this.world.gravity) {
      this.player.setState(states.FALLING);
    }
  }
}



export class Falling extends State {
  constructor(player, world) {
    super("Falling");
    this.player = player;
    this.world = world;
  }
  enter() {
    
  }
  handleInput(input) {
    if (this.player.onGround()) {
      this.player.setState(states.RUNNING);
    }
  }
}