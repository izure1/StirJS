'use strict';


class StirEvent {

  constructor(e, target = null) {
    this.type = e;
    this.target = target;
  }

}

StirEvent.prototype.attachProperties = function (o = {}) {

  if (o instanceof MouseEvent) e.originalEvent = o;
  else {
    Object.assign(this, o);
  }

  return this;

};

export default StirEvent;