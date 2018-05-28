'use strict';

/**
 * 
 * @param {String, Object} c
 * @param {*} StirObjectSession
 */
export default function findClass(c) {

  let r;

  r = [];
  this.each(function () {

    if (this.hasClass(c)) r.push(this);

  });

  return new window.STIR.classes.StirObjectSession(this.name, r, this.world);

};