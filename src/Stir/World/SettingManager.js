'use strict';

import SETTING from './var/DEFAULT_SETTING.js';

function SettingManager() {

  this.setting = JSON.parse(JSON.stringify(SETTING));

  return this.setting;
  
};

export default SettingManager;