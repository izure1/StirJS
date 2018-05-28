'use strict';

import {
  getContext
} from '../Utils/context.js';

/**
 * 
 * @param {Number} i
 */
export default function get(n = 0) {

  let t;

  t = getContext(this.context);
  t = t.values();
  t = Array.from(t);

  if (n < 0) {
    n = t.length + n;
  }

  return t[n];

};