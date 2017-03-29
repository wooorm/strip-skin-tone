'use strict';

module.exports = strip;

var re = /🏻|🏼|🏽|🏾|🏿/g;

function strip(val) {
  return val.replace(re, '');
}
