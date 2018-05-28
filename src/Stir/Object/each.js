'use strict';

import {
  getContext
} from '../Utils/context.js';

/**
 * 
 * @param {Function} f
 */
export default function each(f = function job() {}) {

  let c = getContext(this.context);

  for (const t of c) f.call(t, t);
  return this;

};