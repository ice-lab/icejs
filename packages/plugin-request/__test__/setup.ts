const JasmineCore = require('jasmine-core');

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.getJasmineRequireObj = function () {
  return JasmineCore;
};

require('jasmine-ajax');
