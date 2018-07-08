'use strict';

export default function __setBufferData(p, v) {

  let b, w;
  let gl;

  w = this.__system__.world;
  gl = w.renderer.gl;

  this.each(function () {

    b = this.__system__.gl.buffer[p];

    if (!b) {
      b = this.__system__.gl.buffer[p] = w.renderer.gl.createBuffer();
    }

    b.verticles = v;
    b.verticlesLength = v.length / 3;

    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, v, gl.DYNAMIC_DRAW);

  });

  return this;

};