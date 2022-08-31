class Display {
  constructor(canvas) {
    this.buffer  = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");
  }

  render() { 
  this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height); };
  resize(width, height, height_width_ratio) {
    if (height / width > height_width_ratio) {
      this.context.canvas.height = width * height_width_ratio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / height_width_ratio;
    }
    this.context.imageSmoothingEnabled = false;
  };
};