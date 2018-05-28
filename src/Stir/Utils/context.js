'use strict';

/**
 * 
 * @param {Array, Set, Map, Object} c
 * @description convert to Set Object from Array, Set, Map Object.
 * @returns {Set} c
 */
function getContext(c) {
  if (!c) {
    c = [];
  }

  if (c instanceof Map) {
    c = Array.from(c).map(t => t[1]);
  }

  if (!(c instanceof Set)) {
    c = new Set(c);
  }

  return c;
}


/**
 * 
 * @param {Object} p 
 * @param {*} v 
 */
function setHiddenContext(p, v, o = {}) {

  let r;

  r = {};
  r.get = function () {
    return v;
  };

  Object.assign(r, o);
  Object.defineProperty(this, p, r);

}

export {
  getContext,
  setHiddenContext
};