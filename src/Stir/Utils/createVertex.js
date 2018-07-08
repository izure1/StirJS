'use strict';


function parseColor(c) {

  let r, g, b, a;
  let t;

  a = 1;
  t = c.replace(/(rgba?)\((.*)\)/, '$2');
  t = t.replace(/\s/g, '');
  t = t.split(',').map(t => t - 0);

  if (c.substr(0, 4).toLowerCase() === 'rgba') a = t[3];

  r = parseFloat(t[0] / 255);
  g = parseFloat(t[1] / 255);
  b = parseFloat(t[2] / 255);

  return {
    r,
    g,
    b,
    a
  };

}

/**
 * 
 * @param {*} v 
 */
function CreateColor(c) {

  let v;
  let r, n;

  v = new Float32Array(this);
  c = parseColor(c);

  r = [];
  n = v.length / 3;

  for (let i = 0; i < n; i++) r.push(c.r, c.g, c.b, c.a);
  return new Float32Array(r);

}

/**
 * 
 * @param {Number} w object width
 * @param {Number} h object height
 * @param {Number} wc width center object
 * @param {Number} hc height center object
 */
function CreateSquare(w, h, wc = w / 2, hc = 0) {

  let v;

  v = new Float32Array([
    (w - wc) * -1, -hc, 0,
    (w - wc) * -1, h - hc, 0,
    (w - wc), h - hc, 0,
    (w - wc), h - hc, 0,
    (w - wc) * 1, -hc, 0,
    (w - wc) * -1, -hc, 0,
  ]);

  return v;

}

/**
 * 
 * @param {Number} w object width
 * @param {Number} h object height
 * @param {Number} wc width center object
 * @param {Number} hc height center object
 */
function CreateOval(w, h, wc = w / 2, hc = 0) {

  let rx;
  let ry;
  let s1, s2, r;
  let v;

  rx = w / 2;
  ry = h / 2;
  r = Math.PI / 180;
  v = [];

  for (let i = 0; i < 360; i++) {
    s1 = i * r;
    s2 = (i + 1) * r;
    v.push(
      (rx - wc), (ry - hc), 0,
      Math.cos(s1) * rx + (rx - wc), Math.sin(s1) * ry + (ry - hc), 0,
      Math.cos(s2) * rx + (rx - wc), Math.sin(s2) * ry + (ry - hc), 0
    );
  }

  v = new Float32Array(v);

  return v;

}

export {
  CreateColor,
  CreateSquare,
  CreateOval
};