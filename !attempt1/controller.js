class Controller {
  constructor() {
    this.left  = this.active = this.down = false;
    this.right = this.active = this.down = false;
    this.up    = this.active = this.down = false;
  } 
  keyDownUp(type, key_code) {

    let down = (type == "keydown") ? true : false;

    switch(key_code) {

      case 37: this.left.getInput(down);  break;
      case 38: this.up.getInput(down);    break;
      case 39: this.right.getInput(down);

    }

  }; 
  getInput(down) {

    if (this.down != down) this.active = down;
    this.down = down;
  }
};