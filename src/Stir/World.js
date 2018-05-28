'use strict';

// manager
import Manager from './World/Manager.js';
import DeltaTimer from './World/DeltaTimer.js';



// functions 
import __init from './World/init.js';
import __world from './World/world.js';



// namespace tree
const ns = {
  init: __init,
  world: __world
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
  this.deltaTimer = new DeltaTimer();
  this.gl = null;

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


export default World;