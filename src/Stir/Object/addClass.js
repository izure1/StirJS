'use strict';

/**
 * 
 * @param {String, Function} c
 * @returns {Boolean}
 */
export default function addClass(c) {

  let r;
  let t, f;

  if (typeof c === 'function') {
    f = c;
  }

  r = [];
  this.each(function () {

    t = f ? f.call(this, this) : c;

    c = this.className;
    c += '';
    c = c.split(' ');

    t += '';
    t = t.split(' ');

    t = [...t, ...c];
    t = new Set(t);

    t.delete('');
    
    t = Array.from(t);

    this.className = t.join(' ');

  });

  return this;

};