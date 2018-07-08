'use strict';

export default function rendererReady(f = function () {}) {

  if (this.gl) f.call(this, this);
  else {
    this.cb.push(f.bind(this));
  }

};