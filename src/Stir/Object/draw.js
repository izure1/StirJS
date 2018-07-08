'use strict';

export default function draw(w) {

  let r, gl;
  let v1, v2;
  let p1, p2, t1, t2, t3;
  let gs;

  r = this.__system__.world.renderer;
  gl = r.gl;

  // WebGL 버퍼 목록
  v1 = this.__system__.gl.buffer.vertex;
  v2 = this.__system__.gl.buffer.color;

  // WebGL 셰이더 포인터
  p1 = r.gl_vertexBuffer;
  p2 = r.gl_fragmentBuffer;

  t1 = r.gl_vRotateBuffer;
  t2 = r.gl_vTranslateBuffer;
  t3 = r.gl_vVerticalBuffer;

  gs = this.__system__.gl.style;


  if (!(v1 && v2)) {
    return;
  }


  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  gl.uniform2f(t1, gs.rotate1, gs.rotate2);
  gl.uniformMatrix4fv(t2, false, gs.translate);

  gl.enableVertexAttribArray(p1);
  gl.bindBuffer(gl.ARRAY_BUFFER, v1);
  gl.vertexAttribPointer(p1, 3, gl.FLOAT, false, 0, 0);

  gl.enableVertexAttribArray(p2);
  gl.bindBuffer(gl.ARRAY_BUFFER, v2);
  gl.vertexAttribPointer(p2, 4, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, v1.verticlesLength);

};