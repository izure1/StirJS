'use strict';

function run(n, c, g, d, step, complete) {

  let f;
  let r;

  f = 1000 / 60;
  r = g - c;

  // animate complete
  if (n + f > d) {

    if (!n) {
      step(g);
    }

    complete();
    return;

  }

  // if not yet....
  // run next tick
  setTimeout(() => {

    n += f;

    step((c + (n / d) * r) - 0);
    run(n, c, g, d, step, complete);

  }, f);

}

export default function animate(c, g, d = 0, step = function () {}, complete = function () {}) {

  c -= 0;
  g -= 0;
  d -= 0;

  run(0, c, g, d, step, complete);

};