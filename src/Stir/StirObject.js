'use strict';

import StirObjectSession from './StirObjectSession.js';
import View from './View.js';

import DEFAULT_STYLE from './Object/var/DEFAULT_STYLE.js';
import DEFAULT_ATTRIBUTE from './Object/var/DEFAULT_ATTRIBUTE.js';
import DEFAULT_EVENT from './Object/var/DEFAULT_EVENT.js';

import INIT_STYLE from './Object/var/INIT_STYLE.js';
import INIT_ATTRIBUTE from './Object/var/INIT_ATTRIBUTE.js';

import getPropertiesProxy from './Utils/getPropertiesProxy.js';
import proxyHandlerStyle from './Object/var/proxyHandler.style.js';

import {
  getContext,
  setHiddenContext
} from './Utils/context.js';



class StirObject extends StirObjectSession {

  constructor(t, o) {

    super(t.name, [], t.__system__.world);

    delete this.context;

    this.__initSystemAttribute();
    this.__initViewAttribute();
    this.__initWebGLAttribute();
    this.__initCommonAttribute(o);
    this.__initFromType(this.type);

  }

}


/*
 *  시스템 속성을 설정합니다.
 *  __origin__, __system__ 등이 포함됩니다.
 * 
 */

setHiddenContext.call(StirObject.prototype, '__initSystemAttribute', function () {

  setHiddenContext.call(this, '__origin__', {});

  setHiddenContext.call(this.__system__, 'events', {});
  setHiddenContext.call(this.__system__, 'animate', {});

  for (const e of DEFAULT_EVENT) {
    setHiddenContext.call(this.__system__.events, e, []);
  }

});



/*
 *  View 속성을 설정합니다.
 *  이는 현재 객체가 어느 parentNode를 가지고 있는지 알려줍니다.
 *  View는 parentNode가 가지고 있는 View에 상대적인 크기를 가집니다.
 * 
 */

setHiddenContext.call(StirObject.prototype, '__initViewAttribute', function () {

  let w;
  let v;

  w = this.__system__.world;
  w.f.ready(() => {

    v = w.renderer.canvas;
    v = new View(v);

    setHiddenContext.call(this, 'view', v);

  });

});


/*
 *  WebGL 속성을 설정합니다.
 *  buffer은 vertex verticles를 포함하는 Float32Array 배열형을 가지고 있습니다. vertex.c 용도입니다.
 *  style은 color vertex 등, 색상을 표현하는 Float32Array 배열형을 가지고 있습니다. fragment.c 용도입니다.
 */

setHiddenContext.call(StirObject.prototype, '__initWebGLAttribute', function () {

  setHiddenContext.call(this.__system__, 'gl', {});
  setHiddenContext.call(this.__system__.gl, 'buffer', {});
  setHiddenContext.call(this.__system__.gl, 'style', {});

});


/*
 *  공통적으로 사용되는 속성들입니다.
 *  name, context, style 등입니다. 이는 수정하거나, 삭제할 수 없어야 합니다.
 * 
 */

setHiddenContext.call(StirObject.prototype, '__initCommonAttribute', function (a = {}, s = {}) {

  Object.assign(this, DEFAULT_ATTRIBUTE, a);

  this.__origin__.style = Object.assign({}, DEFAULT_STYLE, s);

  setHiddenContext.call(this, 'context', getContext([this]));
  setHiddenContext.call(this, 'style', getPropertiesProxy.call(this, this.__origin__.style, proxyHandlerStyle), {
    enumerable: true
  });

});


/*
 *  각 객체의 유형마다 다른 attribute와 style를 적용합니다.
 */

setHiddenContext.call(StirObject.prototype, '__initFromType', function (t) {

  let a, s;

  a = INIT_ATTRIBUTE[t] || {};
  s = INIT_STYLE[t] || {};

  Object.assign(this, a);
  Object.assign(this.style, s);

  setHiddenContext.call(this, 'type', t, {
    enumerable: true
  });

});


/* 
 *  StirObject 객체에서는 생성할 수 없게 만듭니다.
 *  이는 세션 전용 메서드입니다.
 * 
 */

delete StirObject.prototype.create;

export default StirObject;