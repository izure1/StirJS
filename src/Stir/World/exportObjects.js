'use strict';

export default function exportObjects() {

  let r;
  let j;

  r = [];
  for (const v of this.objects.values()) {

    j = {};
    j.name = v.name;
    j.__system__ = v.__system__;
    j = Object.assign(j, v);

    r.push(j);

  }

  return JSON.stringify(r);

};