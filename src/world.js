export class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.friction = 0.7; 
    this.gravity = 0.5;
    this.groundMargin = 25;
  }
}