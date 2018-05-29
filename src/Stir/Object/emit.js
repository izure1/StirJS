'use strict';

import StirEvent from '../StirEvent.js';

export default function emit(e, o = {}) {

  let t;
  this.each(function () {

    for (const f of this.__system__.events[e]) {
      t = new StirEvent(e, this).attachProperties(o);
      f.call(this, t);
    }

  });

  return this;

};