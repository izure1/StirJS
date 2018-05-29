'use strict';

export default function pause() {

  if (!this.gl) {
    throw 'You must be execute render function first.';
  }

  this.paused = true;

};