'use strict';

class View {

  constructor(canvas) {
    this.canvas = canvas;
    this.parent = null;
    this.width = '100%';
    this.height = '100%';
    this.left = 0;
    this.bottom = 0;
  }

}

View.__calc = function (p, r = 0) {

  let t;
  let v;

  t = this;
  v = t[p] + '';

  if (v.substr(-1) === '%') {

    if (!t.parent) r += parseFloat(
      getComputedStyle(this.canvas).getPropertyValue(p)
    );
    else {
      r += View.__calc.call(t.parent, p, r) / 100 * parseFloat(v);
    }

  } else {

    r = v;

  }

  return r - 0;

};

View.prototype.calc = function (v, p) {

  v += '';

  if (v.substr(-1) !== '%') {
    return parseFloat(v);
  }

  return View.__calc.call(this, p) / 100 * parseFloat(v);

};


View.prototype.setParent = function (v = null) {

  this.parent = v;

};



export default View;