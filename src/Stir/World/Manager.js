'use strict';

import StirObjectSession from '../StirObjectSession.js';


function WorldManager(world) {
  this.world = world;
}


WorldManager.prototype.getObjects = function (u) {

  let t;

  u += '';
  t = this.world.objects.get(u);
  t = t || [];

  if (u === '*') {
    t = Array.from(this.world.objects).map(t => t[1]);
  }

  if (!Array.isArray(t)) {
    t = [t];
  }

  return new StirObjectSession(u, t, this.world);

};

export default WorldManager;