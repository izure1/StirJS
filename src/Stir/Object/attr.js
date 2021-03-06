'use strict';

import {
  parseArguments,
  applyArguments
} from '../Utils/arguments.js';


/**
 * 
 * @param {String, Object} o 
 * @param {*} v 
 */
export default function attr(o, v) {

  let t;
  let r;

  t = this;
  r = parseArguments.apply(t, arguments);

  if (r.IS_GET) {
    return r.VALUE;
  }
  
  this.each(function () {
    applyArguments.call(this, r.VALUE);
  });

  return this;

};