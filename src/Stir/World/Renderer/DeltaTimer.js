'use strict';



function DeltaTimer() {

  this.start = null;
  this.before = null;
  this.current = null;
  this.stop = false;

}

DeltaTimer.prototype.init = function () {
  this.start = performance.now();
  this.before = performance.now();
  this.current = performance.now();
};

/**
 * @description
 * Update tick time. It's returns interval of tick time with before.
 * 
 * @returns {Number}
 */
DeltaTimer.prototype.update = function () {

  if (this.stop) {
    return this.current - this.before;
  }

  this.before = this.current;
  this.current = performance.now();

  return this.current - this.before;

};

DeltaTimer.prototype.uptime = function () {
  return this.current - this.start;
};

/**
 * @description
 * It's suppress update method.
 * update method will be ignored before using play method.
 */
DeltaTimer.prototype.pause = function () {
  this.stop = true;
};

DeltaTimer.prototype.play = function () {
  this.stop = false;
};


export default DeltaTimer;