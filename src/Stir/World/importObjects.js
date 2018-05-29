'use strict';

export default function importObjects(s) {

  let t, f;

  s = JSON.parse(s);
  f = u => {
    return this.manager.getObjects(u);
  }

  registRecursiver(ns, f, this);

  for (const o of s) {

    t = f(o.name).create({
      type: o.type
    }).attr(o);

    t.__system__ = o.__system__;

  }

};