'use strict';

export default function run() {

  if (this.paused) {
    return;
  }

  // update timer
  this.deltaTimer.update();

  // run user custom function
  this.f();
  this.updateAnimate();
  this.updateView();

  // repeat tick
  window.requestAnimationFrame(this.run.bind(this));

};