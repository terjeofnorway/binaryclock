"use strict";"use strict";var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(n,t,a){if(t)e(n.prototype,t);if(a)e(n,a);return n}}();function _classCallCheck(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}var TimeKeeper=function(){function e(){_classCallCheck(this,e);this.currentDate=new Date}_createClass(e,[{key:"splitNumber",value:function e(n){var t=n<10?[0,n]:n.toString();var a=t.split("");return t}},{key:"getCurrentBinaryHourArray",value:function e(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.currentDate;var t=this.convertNumberToPaddedString(n.getHours()).split("");return[0,0]}},{key:"tick",value:function e(){this.currentDate=new Date}}]);return e}();"use strict";function _classCallCheck(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}var ClockFace=function e(){_classCallCheck(this,e);console.log("i am clockface")};"use strict";function _classCallCheck(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}var Application=function e(){_classCallCheck(this,e);var n=new TimeKeeper;var t=new ClockFace};if(window.__karma__==undefined){window.application=new Application}