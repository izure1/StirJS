'use strict';

export default function on(e, h) {

  let t;
  this.each(function () {

    if (!(e in this.__system__.events)) {
      this.__system__.events[e] = [];
    }

    t = h.bind(this);
    this.__system__.events[e].push(t);

  });

  return this;

};