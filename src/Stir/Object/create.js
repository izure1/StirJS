'use strict';

import getPropertiesProxy from '../Utils/getPropertiesProxy';
import proxyHandlerAttribute from './var/proxyHandler.attribute.js';

import Type from './var/Type.js';

/**
 * 
 * @param {Object} o 
 */
export default function create(o = {}) {

  let t, r;
  let w;

  w = this.__system__.world;

  if (!w.renderer.gl) throw 'You must WebGL render first.'
  
  for (const t of this.context) {
    if (t.name !== this.name) continue;
    throw 'Already exist identifier Object. Use another name instead.';
  }

  for (const p in Type) {
    if (o[p]) continue;
    throw Type[p].message;
  }


  t = new window.STIR.classes.StirObject(this, o);

  // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
  // 이 프록시 객체가 world.objects 에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.

  r = getPropertiesProxy.call(t, t, proxyHandlerAttribute);
  r.__system__.proxy = r;
  
  r.css(r.css());
  
  w.objects.set(t.name, r);

  return w.manager.getObjects(t.name);

};