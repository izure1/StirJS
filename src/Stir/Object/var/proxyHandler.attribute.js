'use strict';

let handler = {};

handler.parentNode = function (p, v = null) {

  let f;
  let t;

  f = this.__system__.world.f;
  t = f(v).get();

  if (!t) {
    return null;
  }

  if (t === this) {
    return null;
  }

  t = t.name;
  this.view.setParent(t.view);

  return t;

};

export default handler;