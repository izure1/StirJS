'use strict';

// manager
import Manager from './World/Manager.js';
import Renderer from './World/Renderer.js';



// functions 
import __world from './World/world.js';
import __render from './World/render.js';
import __play from './World/play.js';
import __pause from './World/pause.js';

// methods
import __importObjects from './World/importObjects.js';
import __exportObjects from './World/exportObjects.js';



// namespace tree
const ns = {
  render: __render,
  play: __play,
  pause: __pause,
  world: __world,
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

      t[p] = {};
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

  /*
   *  검색결과를 알려줍니다.
   *  검색은 현재 WorldManager가 objects에서 name 매개변수와 일치하는 결과를 반환합니다.
   * 
   */


  let f = u => {
    return this.manager.getObjects(u);
  };

  registRecursiver(ns, f, this);
  return f;

}

World.prototype.importObjects = __importObjects;
World.prototype.exportObjects = __exportObjects;


export default World;