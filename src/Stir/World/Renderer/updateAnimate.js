'use strict';

export default function updateAnimate() {

  let u, p, v;
  let f;

  f = this.world.f;

  for (const t of this.animation.lists()) {

    u = t[0].split('.');
    p = u[1];
    u = u[0];

    v = this.animation.get(t[0]);

    f(u).get().style[p] = v;

  }

};