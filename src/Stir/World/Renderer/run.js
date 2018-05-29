'use strict';

export default function run() {

  // update timer
  this.deltaTimer.update();

  // run user custom function
  this.update();
  this.updateAnimate();
  this.updateView();

  // repeat tick
  window.requestAnimationFrame(this.run.bind(this));

};