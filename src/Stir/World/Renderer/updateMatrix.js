'use strict';

const m = require('../../Utils/gl-matrix-min.js');

export default function updateMatrix() {

  let x, y, z;
  let c;

  // c = this.world.camera;
  // x = c.style.left;
  // y = c.style.bottom;
  // z = -c.style.perspective;

  m.mat4.perspective(
    this.gl_pMatrix,
    this.world.setting.fov,
    this.gl.drawingBufferWidth / this.gl.drawingBufferHeight,
    this.world.setting.minSight,
    this.world.setting.maxSight,
  );
  m.mat4.identity(this.gl_vMatrix);
  m.mat4.translate(this.gl_vMatrix, this.gl_vMatrix, [0, 0, 0]);

  this.gl.uniformMatrix4fv(this.gl_pMatrixBuffer, false, this.gl_pMatrix);
  this.gl.uniformMatrix4fv(this.gl_vMatrixBuffer, false, this.gl_vMatrix);

};