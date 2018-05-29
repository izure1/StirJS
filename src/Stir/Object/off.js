'use strict';

import {
  removeArrayItem
} from '../Utils/array.js';

export default function off(e, h = null) {

  let t;
  this.each(function () {

    t = this.__system__.events;

    if (!(e in t)) {
      return;
    }

    if (h === null) t[e] = [];
    else {
      removeArrayItem(t[e], h);
    }

  });

  return this;

};