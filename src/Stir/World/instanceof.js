'use strict';

export default function _instanceof(t) {

  let r;
  let v;

  r = false;

  if (
    t instanceof window.STIR.classes.StirObjectSession ||
    t instanceof window.STIR.classes.StirObject
  ) r = true;

  return r;

};