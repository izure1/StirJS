'use strict';

export default function setUpdate(f) {

  this.f = f.bind(this);
  
};