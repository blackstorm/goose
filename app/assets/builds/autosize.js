(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // app/javascript/autosize.js
  var require_autosize = __commonJS({
    "app/javascript/autosize.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.autosize = factory());
      })(exports, function() {
        var map = typeof Map === "function" ? /* @__PURE__ */ new Map() : function() {
          var keys = [];
          var values = [];
          return {
            has: function has(key) {
              return keys.indexOf(key) > -1;
            },
            get: function get(key) {
              return values[keys.indexOf(key)];
            },
            set: function set(key, value) {
              if (keys.indexOf(key) === -1) {
                keys.push(key);
                values.push(value);
              }
            },
            "delete": function _delete(key) {
              var index = keys.indexOf(key);
              if (index > -1) {
                keys.splice(index, 1);
                values.splice(index, 1);
              }
            }
          };
        }();
        var createEvent = function createEvent2(name) {
          return new Event(name, {
            bubbles: true
          });
        };
        try {
          new Event("test");
        } catch (e) {
          createEvent = function createEvent2(name) {
            var evt = document.createEvent("Event");
            evt.initEvent(name, true, false);
            return evt;
          };
        }
        function assign(ta) {
          if (!ta || !ta.nodeName || ta.nodeName !== "TEXTAREA" || map.has(ta))
            return;
          var heightOffset = null;
          var clientWidth = null;
          var cachedHeight = null;
          function init() {
            var style = window.getComputedStyle(ta, null);
            if (style.resize === "vertical") {
              ta.style.resize = "none";
            } else if (style.resize === "both") {
              ta.style.resize = "horizontal";
            }
            if (style.boxSizing === "content-box") {
              heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
            } else {
              heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
            }
            if (isNaN(heightOffset)) {
              heightOffset = 0;
            }
            update2();
          }
          function changeOverflow(value) {
            {
              var width = ta.style.width;
              ta.style.width = "0px";
              ta.style.width = width;
            }
            ta.style.overflowY = value;
          }
          function bookmarkOverflows(el) {
            var arr = [];
            while (el && el.parentNode && el.parentNode instanceof Element) {
              if (el.parentNode.scrollTop) {
                el.parentNode.style.scrollBehavior = "auto";
                arr.push([el.parentNode, el.parentNode.scrollTop]);
              }
              el = el.parentNode;
            }
            return function() {
              return arr.forEach(function(_ref) {
                var node = _ref[0], scrollTop = _ref[1];
                node.scrollTop = scrollTop;
                node.style.scrollBehavior = null;
              });
            };
          }
          function resize() {
            if (ta.scrollHeight === 0) {
              return;
            }
            var restoreOverflows = bookmarkOverflows(ta);
            ta.style.height = "";
            ta.style.height = ta.scrollHeight + heightOffset + "px";
            clientWidth = ta.clientWidth;
            restoreOverflows();
          }
          function update2() {
            resize();
            var styleHeight = Math.round(parseFloat(ta.style.height));
            var computed = window.getComputedStyle(ta, null);
            var actualHeight = computed.boxSizing === "content-box" ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;
            if (actualHeight < styleHeight) {
              if (computed.overflowY === "hidden") {
                changeOverflow("scroll");
                resize();
                actualHeight = computed.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
              }
            } else {
              if (computed.overflowY !== "hidden") {
                changeOverflow("hidden");
                resize();
                actualHeight = computed.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
              }
            }
            if (cachedHeight !== actualHeight) {
              cachedHeight = actualHeight;
              var evt = createEvent("autosize:resized");
              try {
                ta.dispatchEvent(evt);
              } catch (err) {
              }
            }
          }
          var pageResize = function pageResize2() {
            if (ta.clientWidth !== clientWidth) {
              update2();
            }
          };
          var destroy2 = function(style) {
            window.removeEventListener("resize", pageResize, false);
            ta.removeEventListener("input", update2, false);
            ta.removeEventListener("keyup", update2, false);
            ta.removeEventListener("autosize:destroy", destroy2, false);
            ta.removeEventListener("autosize:update", update2, false);
            Object.keys(style).forEach(function(key) {
              ta.style[key] = style[key];
            });
            map["delete"](ta);
          }.bind(ta, {
            height: ta.style.height,
            resize: ta.style.resize,
            overflowY: ta.style.overflowY,
            overflowX: ta.style.overflowX,
            wordWrap: ta.style.wordWrap
          });
          ta.addEventListener("autosize:destroy", destroy2, false);
          if ("onpropertychange" in ta && "oninput" in ta) {
            ta.addEventListener("keyup", update2, false);
          }
          window.addEventListener("resize", pageResize, false);
          ta.addEventListener("input", update2, false);
          ta.addEventListener("autosize:update", update2, false);
          ta.style.overflowX = "hidden";
          ta.style.wordWrap = "break-word";
          map.set(ta, {
            destroy: destroy2,
            update: update2
          });
          init();
        }
        function destroy(ta) {
          var methods = map.get(ta);
          if (methods) {
            methods.destroy();
          }
        }
        function update(ta) {
          var methods = map.get(ta);
          if (methods) {
            methods.update();
          }
        }
        var autosize = null;
        if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") {
          autosize = function autosize2(el) {
            return el;
          };
          autosize.destroy = function(el) {
            return el;
          };
          autosize.update = function(el) {
            return el;
          };
        } else {
          autosize = function autosize2(el, options) {
            if (el) {
              Array.prototype.forEach.call(el.length ? el : [el], function(x) {
                return assign(x);
              });
            }
            return el;
          };
          autosize.destroy = function(el) {
            if (el) {
              Array.prototype.forEach.call(el.length ? el : [el], destroy);
            }
            return el;
          };
          autosize.update = function(el) {
            if (el) {
              Array.prototype.forEach.call(el.length ? el : [el], update);
            }
            return el;
          };
        }
        var autosize$1 = autosize;
        return autosize$1;
      });
    }
  });
  require_autosize();
})();
//# sourceMappingURL=assets/autosize.js.map
