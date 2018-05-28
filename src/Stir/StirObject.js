'use strict';

import StirObjectSession from './StirObjectSession.js';

import DEFAULT_STYLE from './Object/var/DEFAULT_STYLE.js';
import DEFAULT_ATTRIBUTE from './Object/var/DEFAULT_ATTRIBUTE.js';

import INIT_STYLE from './Object/var/INIT_STYLE.js';
import INIT_ATTRIBUTE from './Object/var/INIT_ATTRIBUTE.js';

import getPropertiesProxy from './Object/var/getPropertiesProxy.js';
import proxyHandlerStyle from './Object/var/proxyHandler.style.js';

import {
  getContext,
  setHiddenContext
} from './Utils/context.js';



class StirObject extends StirObjectSession {

  constructor(t, o) {

    super(t.name, [], t.__system__.world);

    delete this.context;
    this.__initAttribute(o);
    this.__initFromType(this.type);

  }

}

setHiddenContext.call(StirObject.prototype, '__initAttribute', function (a = {}, s = {}) {

  Object.assign(this, DEFAULT_ATTRIBUTE, a);
  
  this.__origin__.style = Object.assign({}, DEFAULT_STYLE, s);

  setHiddenContext.call(this, 'context', getContext([this]));
  setHiddenContext.call(this, 'style', getPropertiesProxy(this.__origin__.style, proxyHandlerStyle), {
    enumerable: true
  });

});

setHiddenContext.call(StirObjectSession.prototype, '__initFromType', function (t) {

  let a, s;

  a = INIT_ATTRIBUTE[t] || {};
  s = INIT_STYLE[t] || {};

  Object.assign(this, a);
  Object.assign(this.style, s);

});


/* 
 *  StirObject 객체에서는 생성할 수 없게 만듭니다.
 *  이는 세션 전용 메서드입니다.
 * 
 */

delete StirObject.prototype.create;

export default StirObject;