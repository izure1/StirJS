'use strict';

export default function use(d) {

  let t;

  t = this.get();
  t.__system__.world.f.status('camera', t);

  return this;

};