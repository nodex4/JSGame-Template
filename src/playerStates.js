const states = {
  SITTING: 0,
  RUNNNING: 1,
  MOVING: 2,
}

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Sitting extends State {
  constructor(player) {
    super("Sitting");
    this.player = player;
  }
  enter() {
    
  }
  handleInput(input) {
    
  }
}