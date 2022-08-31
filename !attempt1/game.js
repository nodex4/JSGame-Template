class Game {
constructor() {}
  world = class {
    
    friction = 0.9;
    gravity = 3;

    player = new Game.Player();
    height = 72;
    width = 128;
    collideObject = function(object) {

      if (object.x < 0) { object.x = 0; object.velocity_x = 0; }
      else if (object.x + object.width > this.width) { object.x = this.width - object.width; object.velocity_x = 0; }
      if (object.y < 0) { object.y = 0; object.y_vel = 0; }
      else if (object.y + object.height > this.height) { object.jumping = false; object.y = this.height - object.height; object.y_vel = 0; }

    };
    update = function() {

      this.player.y_vel += this.gravity;
      this.player.update();

      this.player.velocity_x *= this.friction;
      this.player.y_vel *= this.friction;

      this.collideObject(this.player);

    }

  };
  update() { this.world.update(); };


  Player = class  {
    constructor(x, y) {
      this.x = x || 200;
      this.y = y || 200;
      this.x_v = 0;
      this.y_v = 0;
      this.jumps = 1;
      this.jump = true;
      this.score = 0; 
  }


  jump() {

    if (!this.jumping) {

      this.jumping     = true;
      this.y_vel -= 20;
    };
  };

  

  moveLeft = function()  { this.velocity_x -= 0.5; };
  moveRight = function() { this.velocity_x += 0.5; };

  update = function() {

    this.x += this.velocity_x;
    this.y += this.y_vel;

  };

};}
