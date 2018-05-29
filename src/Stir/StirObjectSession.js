'use strict';

import {
  getContext,
  setHiddenContext
} from './Utils/context.js';

import addClass from './Object/addClass.js';
import attr from './Object/attr.js';
import create from './Object/create.js';
import css from './Object/css.js';
import each from './Object/each.js';
import emit from './Object/emit.js';
import findClass from './Object/findClass.js';
import get from './Object/get.js';
import hasClass from './Object/hasClass.js';
import notClass from './Object/notClass.js';
import off from './Object/off.js';
import on from './Object/on.js';
import removeClass from './Object/removeClass.js';
import toggleClass from './Object/toggleClass.js';


class StirObjectSession {

  constructor(u, c, w) {

    u += '';

    // 객체 그 자체
    // 배열 목록
    // 아예 없을 경우

    setHiddenContext.call(this, 'name', u);
    setHiddenContext.call(this, '__system__', {});
    setHiddenContext.call(this, 'context', getContext(c), {
      configurable: true
    });

    this.__system__.world = w;

  }

}


// regist method function

StirObjectSession.prototype.addClass = addClass;
StirObjectSession.prototype.attr = attr;
StirObjectSession.prototype.create = create;
StirObjectSession.prototype.css = css;
StirObjectSession.prototype.each = each;
StirObjectSession.prototype.emit = emit;
StirObjectSession.prototype.findClass = findClass;
StirObjectSession.prototype.get = get;
StirObjectSession.prototype.hasClass = hasClass;
StirObjectSession.prototype.notClass = notClass;
StirObjectSession.prototype.off = off;
StirObjectSession.prototype.on = on;
StirObjectSession.prototype.removeClass = removeClass;
StirObjectSession.prototype.toggleClass = toggleClass;


export default StirObjectSession;