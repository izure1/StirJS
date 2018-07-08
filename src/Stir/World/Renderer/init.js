'use strict';

export default function init(f) {

  // set custom update function
  this.f = f.bind(this);

  // run callback functions
  for (const f of this.cb) f(this);
  delete this.cb;

};