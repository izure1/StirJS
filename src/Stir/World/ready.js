'use strict';

export default function worldReady(f) {

  this.renderer.ready(f);
  return this.f;

};