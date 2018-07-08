'use strict';

export default function play() {

  if (!this.gl) {
    throw 'You must be execute render function first.';
  }

  if (!this.paused) {
    return;
  }

  this.paused = false;

};