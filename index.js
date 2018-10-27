"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (hooks) {
  return function (sfc) {
    return function (props) {
      var hookedProps = hooks.reduce(function (accum, current) {
        var _extends2;

        var hook = current.hook,
            name = current.name,
            init = current.init;

        var hooked = hook(init);
        var setterName = "set" + name[0].toUpperCase() + name.slice(1);
        return _extends({}, accum, (_extends2 = {}, _defineProperty(_extends2, name, hooked[0]), _defineProperty(_extends2, setterName, hooked[1]), _extends2));
      }, {});
      return sfc(_extends({}, props, hookedProps));
    };
  };
};

