'use strict';

export default function updateView(v) {

  this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
  this.gl.clearColor(1, 1, 1, 1);

  for (const t of this.world.objects.values()) {

    t.draw();

  }

};