'use strict';

export default function run(a) {

  let tt = this.deltaTimer.update();

  if (!this.paused) {

    this.animation.update(tt);

    // run user custom function
    this.f();
    this.updateMatrix();
    this.updateAnimate();
    this.updateView();

  }

  // repeat tick
  window.requestAnimationFrame(this.run.bind(this));

};