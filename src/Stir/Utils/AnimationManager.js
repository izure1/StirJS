'use strict';

import ease from './ease.js';


class AnimationManager {

  constructor() {
    this._lists = new Map();
  }

}


/**
 * 
 * @param {String} u Unique identifier name
 * @param {String} e Easing type
 * @param {Number} b Beginning value
 * @param {Number} c Change in value
 * @param {Number} d Duration
 */
AnimationManager.prototype.add = function (u, e, b, c, d = 0) {

  let o;

  o = {
    e,
    b,
    d,
    c: c - b,
    t: 0,
    done: false
  };

  this.lists().set(u, o);
  return true;

};

/**
 * 
 * @param {String} u Unique identifier name
 */
AnimationManager.prototype.get = function (u) {

  let t;

  t = this.lists().get(u);

  if (!t) {
    return null;
  }

  return ease(t.e, t.t, t.b, t.c, t.d);

};

/**
 * 
 * @param {Number} i Tick update interval timestamp
 */
AnimationManager.prototype.update = function (i) {

  let u;
  let v;

  for (let t of this.lists()) {

    u = t[0];
    v = t[1];

    if (v.done) {
      this.lists().delete(u);
      continue;
    }

    v.t += i;

    if (v.t >= v.d) {
      v.t = v.d;
      v.done = true;
    }

  }

};

AnimationManager.prototype.lists = function () {

  return this._lists;

};


export default AnimationManager;