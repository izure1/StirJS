'use strict';

import getColor from '../../Utils/getColor.js';
import {
  CreateSquare,
  CreateOval,
  CreateColor
} from '../../Utils/createVertex.js';
import {
  degToRad
} from '../../Utils/math.js';
import {
  Z_BEST_SPEED
} from 'zlib';


let handler = {};

handler.width = handler.height = function (p, v) {

  let f;
  let s;

  s = this.__system__.gl.style;
  s[p] = this.view.calc(v, p);


  switch (this.type) {

    case 'circle':
      f = CreateOval;
      break;

    default:
      f = CreateSquare;
      break;

  }

  this.__setBufferData('vertex', f(s.width, s.height));

  return v;

};

handler.color = function (p, v, t) {

  let r;

  if (!this.__system__.gl.buffer.vertex.verticles) {
    return v;
  }

  r = getColor(v);
  r = CreateColor.call(this.__system__.gl.buffer.vertex.verticles, r);

  this.__setBufferData('color', r);

  return v;

};

handler.gradient = function (p, v) {

  for (let i in v) v[i] = getColor(v[i]);
  return v;

};

handler.rotate = function (p, v) {

  let r;

  r = degToRad(v);

  this.__system__.gl.style.rotate1 = Math.sin(r);
  this.__system__.gl.style.rotate2 = Math.cos(r);

  return v;

};

handler.left = handler.bottom = handler.perspective = function (p, v) {

  let x, y, z;

  x = this.style.left;
  y = this.style.bottom;
  z = this.style.perspective;

  switch (p) {
    case 'left':
      x = v;
      break;
    case 'bottom':
      y = v;
      break;
    case 'perspective':
      z = v;
      break;
  }

  this.__system__.gl.style.translate = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, -z, 1
  ]);

  return v;

};

handler.verticalAlign = function (p, v) {

  let s;
  let y;
  let f;

  s = this.__system__.gl.style;


  switch (v) {

    case 'top':
      y = 0;
      break;

    case 'middle':
      y = s.height / 2;
      break;

    case 'bottom':
      y = s.height;
      break;

  }

  switch (this.type) {

    case 'circle':
      f = CreateOval;
      break;

    default:
      f = CreateSquare;
      break;

  }

  this.__setBufferData('vertex', f(s.width, s.height, undefined, y));

  return v;

};


export default handler;