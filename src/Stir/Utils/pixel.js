'use strict';

function toScale(v, w) {

  return v / w;

}

function toPixel(v, w) {

  return w / v;

}

export {
  toScale,
  toPixel
};