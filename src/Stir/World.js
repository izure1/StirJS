'use strict';

import {
  setHiddenContext
} from './Utils/context.js';

// manager
import Manager from './World/Manager.js';
import Renderer from './World/Renderer.js';
import SettingManager from './World/SettingManager.js';

// functions 
import __world from './World/world.js';
import __render from './World/render.js';
import __play from './World/play.js';
import __pause from './World/pause.js';
import __instanceof from './World/instanceof.js';
import __ready from './World/ready.js';
import __box2d from './World/box2d.js';
import __importObjects from './World/importObjects.js';
import __exportObjects from './World/exportObjects.js';



// namespace tree
const ns = {
  render: __render,
  play: __play,
  pause: __pause,
  world: __world,
  instanceof: __instanceof,
  ready: __ready,
  box2d: __box2d,
  importObjects: __importObjects,
  exportObjects: __exportObjects,
};


/*
 *  변수 ns 구조체를 순회하며, 구조대로 하위 네임스페이스를 만들거나, 함수를 할당합니다.
 *  
 *  각 함수는 자신이 호출된 world 의 정보를 __world__ 라는 속성값으로 가지게 됩니다.
 *  이 함수는 마무리 될 때까지 재귀적으로 호출됩니다.
 * 
 */

function registRecursiver(ns, t, W) {

  for (let p in ns) {

    if (typeof ns[p] === 'function') {

      t[p] = ns[p].bind(W);

    } else {

      t[p] = ({}).bind(W);
      registRecursiver(ns[p], t[p], W);

    }

  }

}


function World() {

  if (!(this instanceof World)) {
    throw `Class constructor Test cannot be invoked without 'new'`;
  }

  this.objects = new Map();
  this.manager = new Manager(this);
  this.renderer = new Renderer();
  this.setting = new SettingManager();
  this.box2d = null;
  this.camera = null;

  this.f = u => this.manager.getObjects(u);


  setHiddenContext.call(this, '__system__', {});
  setHiddenContext.call(this.__system__, 'readyCallbacks', []);


  /*
   *  검색결과를 알려줍니다.
   *  검색은 현재 WorldManager가 objects에서 name 매개변수와 일치하는 결과를 반환합니다.
   * 
   */

  registRecursiver(ns, this.f, this);
  return this.f;

}


export default World;