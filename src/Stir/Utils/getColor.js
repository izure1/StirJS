'use strict';

export default function getColor(v) {

  let t;

  t = document.documentElement;
  t.style.outlineColor = v;

  return getComputedStyle(t).outlineColor;

};