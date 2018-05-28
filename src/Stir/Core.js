'use strict';

import World from './World.js';
import StirObject from './StirObject.js';
import StirObjectSession from './StirObjectSession.js';


/*
 *  STIR SHORT CODE MEANING
 * 
 *  u = Unique identifier = name
 *  w = World
 *  t = Target, iTem
 *  i = Index
 *  n = Number
 *  c = Context
 *  o = Option
 *  f = Function
 *  p = Property, Properties
 *  v = Value
 *  r = Return, Result
 * 
 */

window.stir = new World();
window.STIR = {};
window.STIR.classes = {};
window.STIR.classes.StirObject = StirObject;
window.STIR.classes.StirObjectSession = StirObjectSession;
window.STIR.classes.World = World;