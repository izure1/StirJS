'use strict';

// shader source
import vertexShaderSource from '../WebGL/shaderSource/vertex.c';
import fragmentShaderSource from '../WebGL/shaderSource/fragment.c';

// shader manager
import {
  createShader,
  createProgram
} from './Renderer/Shader.js';


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

export default function render(canvas, f = function () {}, o = {}) {

  if (this.renderer.gl) {
    throw 'You already set render function.';
  }


  let gl;

  canvas = getCanvas(canvas);

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

  gl.useProgram(program);
  gl.enable(gl.DEPTH_TEST);


  this.renderer.gl_vertexBuffer = gl.getAttribLocation(program, 'a_position');
  this.renderer.gl_fragmentBuffer = gl.getAttribLocation(program, 'a_color');
  this.renderer.gl_pMatrixBuffer = gl.getUniformLocation(program, 'u_pMatrix');
  this.renderer.gl_vMatrixBuffer = gl.getUniformLocation(program, 'u_vMatrix');
  this.renderer.gl_vTranslateBuffer = gl.getUniformLocation(program, 'u_vTranslate');
  this.renderer.gl_vRotateBuffer = gl.getUniformLocation(program, 'u_vRotate');
  this.renderer.gl_program = program;
  this.renderer.canvas = canvas;

  // init world renderer
  this.renderer.gl = gl;
  this.renderer.world = this;

  this.renderer.init(f);
  this.renderer.run();

  return this.f;

};