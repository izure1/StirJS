'use strict';

import getPropertiesProxy from './var/getPropertiesProxy.js';
import proxyHandlerAttribute from './var/proxyHandler.attribute.js';

import Type from './var/Type.js';

/**
 * 
 * @param {Object} o 
 */
export default function create(o = {}) {

  for (const t of this.context) {
    if (t.name !== this.name) continue;
    throw 'Already exist identifier Object. Use another name instead.';
  }

  for (const p in Type) {
    if (o[p]) continue;
    throw Type[p].message;
  }

  let t, r;
  let w;

  t = new window.STIR.classes.StirObject(this, o);
  w = this.__system__.world;

  // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
  // 이 프록시 객체가 world.objects 에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.

  r = getPropertiesProxy(t, proxyHandlerAttribute);

  w.objects.set(t.name, r);

  return w.manager.getObjects(t.name);

};