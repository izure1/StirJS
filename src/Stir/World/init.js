'use strict';

// shader source
import vertexShaderSource from '../WebGL/shaderSource/vertex.c';
import fragmentShaderSource from '../WebGL/shaderSource/fragment.c';

// shader manager
import {
  createShader,
  createProgram
} from './shader.js';


/**
 * 
 * @param {String, HTMLCanvasElement} q 
 */
function getCanvas(q) {

  let canvas;

  if (typeof q === 'string') {
    canvas = document.querySelector(q);
  }

  if (q instanceof HTMLCanvasElement) {
    canvas = q;
  }

  return canvas;

}

export default function init(o = {}) {

  let canvas;
  let gl;

  canvas = getCanvas(o.canvas);

  if (!canvas) {
    throw 'The canvas not exists.';
  }

  gl = canvas.getContext('webgl2');

  if (!gl) {
    throw `Your browser doesn't support Stir.js`;
  }

  // Create shader program

  let vertexShader;
  let fragmentShader;

  vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!(vertexShader && fragmentShader)) {
    throw 'Something wrong happened when initing.';
  }

  let program = createProgram(gl, vertexShader, fragmentShader);

  if (!program) {
    throw 'Something wrong happened when initing.';
  }

  let positionBuffer;
  let positions;
  let positionAttributeLocation;

  positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  positionBuffer = gl.createBuffer();
  positions = [
    0, 0,
    0, 0.5,
    0.7, 0,
  ];

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // run deltaTimer run
  this.deltaTimer.init();
  this.gl = gl;

};