'use strict';

import {
  setHiddenContext
} from '../Utils/context.js';

import DeltaTimer from './Renderer/DeltaTimer.js';

import init from './Renderer/init.js';
import run from './Renderer/run.js';
import updateMatrix from './Renderer/updateMatrix.js';
import updateAnimate from './Renderer/updateAnimate.js';
import updateView from './Renderer/updateView.js';
import play from './Renderer/play.js';
import pause from './Renderer/pause.js';
import ready from './Renderer/ready.js';
import AnimationManager from '../Utils/AnimationManager.js';


const m = require('../Utils/gl-matrix-min.js');

function Renderer(o = {}) {

  this.gl = null;
  this.gl_vertexBuffer = null;
  this.gl_fragmentBuffer = null;
  this.gl_pMatrixBuffer = null;
  this.gl_vMatrixBuffer = null;
  this.gl_tMatrixBuffer = null;
  this.gl_vTranslateBuffer = null;
  this.gl_vRotateBuffer = null;
  this.gl_vMatrix = m.mat4.create();
  this.gl_pMatrix = m.mat4.create();
  this.world = null;
  this.f = null;
  this.cb = [];
  this.paused = false;
  this.deltaTimer = new DeltaTimer();
  this.animation = new AnimationManager();

}

Renderer.prototype.init = init;
Renderer.prototype.run = run;
Renderer.prototype.updateMatrix = updateMatrix;
Renderer.prototype.updateAnimate = updateAnimate;
Renderer.prototype.updateView = updateView;
Renderer.prototype.play = play;
Renderer.prototype.pause = pause;
Renderer.prototype.ready = ready;

export default Renderer;