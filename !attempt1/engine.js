
class Engine {
  constructor(time_step, update, render) {
  
    this.accumulated_time        = 0;
    this.animation_frame_request = undefined,
    this.time                    = undefined,
    this.time_step               = time_step,
    this.updated = false;
  
    this.update = update;
    this.render = render;

  }
  
  run(time_stamp) {

    this.accumulated_time += time_stamp - this.time;
    this.time = time_stamp;
    if (this.accumulated_time >= this.time_step * 3) {

      this.accumulated_time = this.time_step;

    }
    
    while(this.accumulated_time >= this.time_step) {

      this.accumulated_time -= this.time_step;

      this.update(time_stamp);

      this.updated = true;// If the game has updated, we need to draw it again.

    }

    /* This allows us to only draw when the game has updated. */
    if (this.updated) {

      this.updated = false;
      this.render(time_stamp);

    }

    this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

  };
  handleRun(time_step) { this.run(time_step); };
  start() {

    this.accumulated_time = this.time_step;
    this.time = window.performance.now();
    this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

  }
  stop() { window.cancelAnimationFrame(this.animation_frame_request); }

};