'use strict';

import DeltaTimer from './Renderer/DeltaTimer.js';

import setUpdate from './Renderer/setUpdate.js';
import run from './Renderer/run.js';
import updateAnimate from './Renderer/updateAnimate.js';
import updateView from './Renderer/updateView.js';


function Renderer(o = {}) {

  this.gl = null;
  this.world = null;
  this.f = null;
  this.deltaTimer = new DeltaTimer();

}

Renderer.prototype.setUpdate = setUpdate;
Renderer.prototype.run = run;
Renderer.prototype.updateAnimate = updateAnimate;
Renderer.prototype.updateView = updateView;

export default Renderer;