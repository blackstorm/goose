(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // app/javascript/marked.js
  var require_marked = __commonJS({
    "app/javascript/marked.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).marked = {});
      }(exports, function(e) {
        "use strict";
        function t(e2, t2) {
          for (var u2 = 0; u2 < t2.length; u2++) {
            var n2 = t2[u2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, (r2 = n2.key, i2 = void 0, "symbol" == typeof (i2 = function(e3, t3) {
              if ("object" != typeof e3 || null === e3)
                return e3;
              var u3 = e3[Symbol.toPrimitive];
              if (void 0 !== u3) {
                var n3 = u3.call(e3, t3 || "default");
                if ("object" != typeof n3)
                  return n3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t3 ? String : Number)(e3);
            }(r2, "string")) ? i2 : String(i2)), n2);
          }
          var r2, i2;
        }
        function u(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var u2 = 0, n2 = new Array(t2); u2 < t2; u2++)
            n2[u2] = e2[u2];
          return n2;
        }
        function n(e2, t2) {
          var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
          if (n2)
            return (n2 = n2.call(e2)).next.bind(n2);
          if (Array.isArray(e2) || (n2 = function(e3, t3) {
            if (e3) {
              if ("string" == typeof e3)
                return u(e3, t3);
              var n3 = Object.prototype.toString.call(e3).slice(8, -1);
              return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? u(e3, t3) : void 0;
            }
          }(e2)) || t2 && e2 && "number" == typeof e2.length) {
            n2 && (e2 = n2);
            var r2 = 0;
            return function() {
              return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function r() {
          return { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
        }
        e.defaults = { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
        var i = /[&<>"']/, s = new RegExp(i.source, "g"), l = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, a = new RegExp(l.source, "g"), o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, D = function(e2) {
          return o[e2];
        };
        function c(e2, t2) {
          if (t2) {
            if (i.test(e2))
              return e2.replace(s, D);
          } else if (l.test(e2))
            return e2.replace(a, D);
          return e2;
        }
        var h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function p(e2) {
          return e2.replace(h, function(e3, t2) {
            return "colon" === (t2 = t2.toLowerCase()) ? ":" : "#" === t2.charAt(0) ? "x" === t2.charAt(1) ? String.fromCharCode(parseInt(t2.substring(2), 16)) : String.fromCharCode(+t2.substring(1)) : "";
          });
        }
        var f = /(^|[^\[])\^/g;
        function g(e2, t2) {
          e2 = "string" == typeof e2 ? e2 : e2.source, t2 = t2 || "";
          var u2 = { replace: function(t3, n2) {
            return n2 = (n2 = n2.source || n2).replace(f, "$1"), e2 = e2.replace(t3, n2), u2;
          }, getRegex: function() {
            return new RegExp(e2, t2);
          } };
          return u2;
        }
        var F = /[^\w:]/g, A = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function d(e2, t2, u2) {
          if (e2) {
            var n2;
            try {
              n2 = decodeURIComponent(p(u2)).replace(F, "").toLowerCase();
            } catch (e3) {
              return null;
            }
            if (0 === n2.indexOf("javascript:") || 0 === n2.indexOf("vbscript:") || 0 === n2.indexOf("data:"))
              return null;
          }
          t2 && !A.test(u2) && (u2 = function(e3, t3) {
            C[" " + e3] || (k.test(e3) ? C[" " + e3] = e3 + "/" : C[" " + e3] = w(e3, "/", true));
            var u3 = -1 === (e3 = C[" " + e3]).indexOf(":");
            return "//" === t3.substring(0, 2) ? u3 ? t3 : e3.replace(E, "$1") + t3 : "/" === t3.charAt(0) ? u3 ? t3 : e3.replace(x, "$1") + t3 : e3 + t3;
          }(t2, u2));
          try {
            u2 = encodeURI(u2).replace(/%25/g, "%");
          } catch (e3) {
            return null;
          }
          return u2;
        }
        var C = {}, k = /^[^:]+:\/*[^/]*$/, E = /^([^:]+:)[\s\S]*$/, x = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        var m = { exec: function() {
        } };
        function b(e2) {
          for (var t2, u2, n2 = 1; n2 < arguments.length; n2++)
            for (u2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, u2) && (e2[u2] = t2[u2]);
          return e2;
        }
        function B(e2, t2) {
          var u2 = e2.replace(/\|/g, function(e3, t3, u3) {
            for (var n3 = false, r2 = t3; --r2 >= 0 && "\\" === u3[r2]; )
              n3 = !n3;
            return n3 ? "|" : " |";
          }).split(/ \|/), n2 = 0;
          if (u2[0].trim() || u2.shift(), u2.length > 0 && !u2[u2.length - 1].trim() && u2.pop(), u2.length > t2)
            u2.splice(t2);
          else
            for (; u2.length < t2; )
              u2.push("");
          for (; n2 < u2.length; n2++)
            u2[n2] = u2[n2].trim().replace(/\\\|/g, "|");
          return u2;
        }
        function w(e2, t2, u2) {
          var n2 = e2.length;
          if (0 === n2)
            return "";
          for (var r2 = 0; r2 < n2; ) {
            var i2 = e2.charAt(n2 - r2 - 1);
            if (i2 !== t2 || u2) {
              if (i2 === t2 || !u2)
                break;
              r2++;
            } else
              r2++;
          }
          return e2.slice(0, n2 - r2);
        }
        function v(e2) {
          e2 && e2.sanitize && !e2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
        }
        function y(e2, t2) {
          if (t2 < 1)
            return "";
          for (var u2 = ""; t2 > 1; )
            1 & t2 && (u2 += e2), t2 >>= 1, e2 += e2;
          return u2 + e2;
        }
        function _(e2, t2, u2, n2) {
          var r2 = t2.href, i2 = t2.title ? c(t2.title) : null, s2 = e2[1].replace(/\\([\[\]])/g, "$1");
          if ("!" !== e2[0].charAt(0)) {
            n2.state.inLink = true;
            var l2 = { type: "link", raw: u2, href: r2, title: i2, text: s2, tokens: n2.inlineTokens(s2) };
            return n2.state.inLink = false, l2;
          }
          return { type: "image", raw: u2, href: r2, title: i2, text: c(s2) };
        }
        var z = function() {
          function t2(t3) {
            this.options = t3 || e.defaults;
          }
          var u2 = t2.prototype;
          return u2.space = function(e2) {
            var t3 = this.rules.block.newline.exec(e2);
            if (t3 && t3[0].length > 0)
              return { type: "space", raw: t3[0] };
          }, u2.code = function(e2) {
            var t3 = this.rules.block.code.exec(e2);
            if (t3) {
              var u3 = t3[0].replace(/^ {1,4}/gm, "");
              return { type: "code", raw: t3[0], codeBlockStyle: "indented", text: this.options.pedantic ? u3 : w(u3, "\n") };
            }
          }, u2.fences = function(e2) {
            var t3 = this.rules.block.fences.exec(e2);
            if (t3) {
              var u3 = t3[0], n2 = function(e3, t4) {
                var u4 = e3.match(/^(\s+)(?:```)/);
                if (null === u4)
                  return t4;
                var n3 = u4[1];
                return t4.split("\n").map(function(e4) {
                  var t5 = e4.match(/^\s+/);
                  return null === t5 ? e4 : t5[0].length >= n3.length ? e4.slice(n3.length) : e4;
                }).join("\n");
              }(u3, t3[3] || "");
              return { type: "code", raw: u3, lang: t3[2] ? t3[2].trim().replace(this.rules.inline._escapes, "$1") : t3[2], text: n2 };
            }
          }, u2.heading = function(e2) {
            var t3 = this.rules.block.heading.exec(e2);
            if (t3) {
              var u3 = t3[2].trim();
              if (/#$/.test(u3)) {
                var n2 = w(u3, "#");
                this.options.pedantic ? u3 = n2.trim() : n2 && !/ $/.test(n2) || (u3 = n2.trim());
              }
              return { type: "heading", raw: t3[0], depth: t3[1].length, text: u3, tokens: this.lexer.inline(u3) };
            }
          }, u2.hr = function(e2) {
            var t3 = this.rules.block.hr.exec(e2);
            if (t3)
              return { type: "hr", raw: t3[0] };
          }, u2.blockquote = function(e2) {
            var t3 = this.rules.block.blockquote.exec(e2);
            if (t3) {
              var u3 = t3[0].replace(/^ *>[ \t]?/gm, ""), n2 = this.lexer.state.top;
              this.lexer.state.top = true;
              var r2 = this.lexer.blockTokens(u3);
              return this.lexer.state.top = n2, { type: "blockquote", raw: t3[0], tokens: r2, text: u3 };
            }
          }, u2.list = function(e2) {
            var t3 = this.rules.block.list.exec(e2);
            if (t3) {
              var u3, n2, r2, i2, s2, l2, a2, o2, D2, c2, h2, p2, f2 = t3[1].trim(), g2 = f2.length > 1, F2 = { type: "list", raw: "", ordered: g2, start: g2 ? +f2.slice(0, -1) : "", loose: false, items: [] };
              f2 = g2 ? "\\d{1,9}\\" + f2.slice(-1) : "\\" + f2, this.options.pedantic && (f2 = g2 ? f2 : "[*+-]");
              for (var A2 = new RegExp("^( {0,3}" + f2 + ")((?:[	 ][^\\n]*)?(?:\\n|$))"); e2 && (p2 = false, t3 = A2.exec(e2)) && !this.rules.block.hr.test(e2); ) {
                if (u3 = t3[0], e2 = e2.substring(u3.length), o2 = t3[2].split("\n", 1)[0].replace(/^\t+/, function(e3) {
                  return " ".repeat(3 * e3.length);
                }), D2 = e2.split("\n", 1)[0], this.options.pedantic ? (i2 = 2, h2 = o2.trimLeft()) : (i2 = (i2 = t3[2].search(/[^ ]/)) > 4 ? 1 : i2, h2 = o2.slice(i2), i2 += t3[1].length), l2 = false, !o2 && /^ *$/.test(D2) && (u3 += D2 + "\n", e2 = e2.substring(D2.length + 1), p2 = true), !p2)
                  for (var d2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"), C2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), k2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}(?:```|~~~)"), E2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}#"); e2 && (D2 = c2 = e2.split("\n", 1)[0], this.options.pedantic && (D2 = D2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !k2.test(D2)) && !E2.test(D2) && !d2.test(D2) && !C2.test(e2); ) {
                    if (D2.search(/[^ ]/) >= i2 || !D2.trim())
                      h2 += "\n" + D2.slice(i2);
                    else {
                      if (l2)
                        break;
                      if (o2.search(/[^ ]/) >= 4)
                        break;
                      if (k2.test(o2))
                        break;
                      if (E2.test(o2))
                        break;
                      if (C2.test(o2))
                        break;
                      h2 += "\n" + D2;
                    }
                    l2 || D2.trim() || (l2 = true), u3 += c2 + "\n", e2 = e2.substring(c2.length + 1), o2 = D2.slice(i2);
                  }
                F2.loose || (a2 ? F2.loose = true : /\n *\n *$/.test(u3) && (a2 = true)), this.options.gfm && (n2 = /^\[[ xX]\] /.exec(h2)) && (r2 = "[ ] " !== n2[0], h2 = h2.replace(/^\[[ xX]\] +/, "")), F2.items.push({ type: "list_item", raw: u3, task: !!n2, checked: r2, loose: false, text: h2 }), F2.raw += u3;
              }
              F2.items[F2.items.length - 1].raw = u3.trimRight(), F2.items[F2.items.length - 1].text = h2.trimRight(), F2.raw = F2.raw.trimRight();
              var x2 = F2.items.length;
              for (s2 = 0; s2 < x2; s2++)
                if (this.lexer.state.top = false, F2.items[s2].tokens = this.lexer.blockTokens(F2.items[s2].text, []), !F2.loose) {
                  var m2 = F2.items[s2].tokens.filter(function(e3) {
                    return "space" === e3.type;
                  }), b2 = m2.length > 0 && m2.some(function(e3) {
                    return /\n.*\n/.test(e3.raw);
                  });
                  F2.loose = b2;
                }
              if (F2.loose)
                for (s2 = 0; s2 < x2; s2++)
                  F2.items[s2].loose = true;
              return F2;
            }
          }, u2.html = function(e2) {
            var t3 = this.rules.block.html.exec(e2);
            if (t3) {
              var u3 = { type: "html", raw: t3[0], pre: !this.options.sanitizer && ("pre" === t3[1] || "script" === t3[1] || "style" === t3[1]), text: t3[0] };
              if (this.options.sanitize) {
                var n2 = this.options.sanitizer ? this.options.sanitizer(t3[0]) : c(t3[0]);
                u3.type = "paragraph", u3.text = n2, u3.tokens = this.lexer.inline(n2);
              }
              return u3;
            }
          }, u2.def = function(e2) {
            var t3 = this.rules.block.def.exec(e2);
            if (t3) {
              var u3 = t3[1].toLowerCase().replace(/\s+/g, " "), n2 = t3[2] ? t3[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", r2 = t3[3] ? t3[3].substring(1, t3[3].length - 1).replace(this.rules.inline._escapes, "$1") : t3[3];
              return { type: "def", tag: u3, raw: t3[0], href: n2, title: r2 };
            }
          }, u2.table = function(e2) {
            var t3 = this.rules.block.table.exec(e2);
            if (t3) {
              var u3 = { type: "table", header: B(t3[1]).map(function(e3) {
                return { text: e3 };
              }), align: t3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t3[3] && t3[3].trim() ? t3[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
              if (u3.header.length === u3.align.length) {
                u3.raw = t3[0];
                var n2, r2, i2, s2, l2 = u3.align.length;
                for (n2 = 0; n2 < l2; n2++)
                  /^ *-+: *$/.test(u3.align[n2]) ? u3.align[n2] = "right" : /^ *:-+: *$/.test(u3.align[n2]) ? u3.align[n2] = "center" : /^ *:-+ *$/.test(u3.align[n2]) ? u3.align[n2] = "left" : u3.align[n2] = null;
                for (l2 = u3.rows.length, n2 = 0; n2 < l2; n2++)
                  u3.rows[n2] = B(u3.rows[n2], u3.header.length).map(function(e3) {
                    return { text: e3 };
                  });
                for (l2 = u3.header.length, r2 = 0; r2 < l2; r2++)
                  u3.header[r2].tokens = this.lexer.inline(u3.header[r2].text);
                for (l2 = u3.rows.length, r2 = 0; r2 < l2; r2++)
                  for (s2 = u3.rows[r2], i2 = 0; i2 < s2.length; i2++)
                    s2[i2].tokens = this.lexer.inline(s2[i2].text);
                return u3;
              }
            }
          }, u2.lheading = function(e2) {
            var t3 = this.rules.block.lheading.exec(e2);
            if (t3)
              return { type: "heading", raw: t3[0], depth: "=" === t3[2].charAt(0) ? 1 : 2, text: t3[1], tokens: this.lexer.inline(t3[1]) };
          }, u2.paragraph = function(e2) {
            var t3 = this.rules.block.paragraph.exec(e2);
            if (t3) {
              var u3 = "\n" === t3[1].charAt(t3[1].length - 1) ? t3[1].slice(0, -1) : t3[1];
              return { type: "paragraph", raw: t3[0], text: u3, tokens: this.lexer.inline(u3) };
            }
          }, u2.text = function(e2) {
            var t3 = this.rules.block.text.exec(e2);
            if (t3)
              return { type: "text", raw: t3[0], text: t3[0], tokens: this.lexer.inline(t3[0]) };
          }, u2.escape = function(e2) {
            var t3 = this.rules.inline.escape.exec(e2);
            if (t3)
              return { type: "escape", raw: t3[0], text: c(t3[1]) };
          }, u2.tag = function(e2) {
            var t3 = this.rules.inline.tag.exec(e2);
            if (t3)
              return !this.lexer.state.inLink && /^<a /i.test(t3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t3[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t3[0]) : c(t3[0]) : t3[0] };
          }, u2.link = function(e2) {
            var t3 = this.rules.inline.link.exec(e2);
            if (t3) {
              var u3 = t3[2].trim();
              if (!this.options.pedantic && /^</.test(u3)) {
                if (!/>$/.test(u3))
                  return;
                var n2 = w(u3.slice(0, -1), "\\");
                if ((u3.length - n2.length) % 2 == 0)
                  return;
              } else {
                var r2 = function(e3, t4) {
                  if (-1 === e3.indexOf(t4[1]))
                    return -1;
                  for (var u4 = e3.length, n3 = 0, r3 = 0; r3 < u4; r3++)
                    if ("\\" === e3[r3])
                      r3++;
                    else if (e3[r3] === t4[0])
                      n3++;
                    else if (e3[r3] === t4[1] && --n3 < 0)
                      return r3;
                  return -1;
                }(t3[2], "()");
                if (r2 > -1) {
                  var i2 = (0 === t3[0].indexOf("!") ? 5 : 4) + t3[1].length + r2;
                  t3[2] = t3[2].substring(0, r2), t3[0] = t3[0].substring(0, i2).trim(), t3[3] = "";
                }
              }
              var s2 = t3[2], l2 = "";
              if (this.options.pedantic) {
                var a2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s2);
                a2 && (s2 = a2[1], l2 = a2[3]);
              } else
                l2 = t3[3] ? t3[3].slice(1, -1) : "";
              return s2 = s2.trim(), /^</.test(s2) && (s2 = this.options.pedantic && !/>$/.test(u3) ? s2.slice(1) : s2.slice(1, -1)), _(t3, { href: s2 ? s2.replace(this.rules.inline._escapes, "$1") : s2, title: l2 ? l2.replace(this.rules.inline._escapes, "$1") : l2 }, t3[0], this.lexer);
            }
          }, u2.reflink = function(e2, t3) {
            var u3;
            if ((u3 = this.rules.inline.reflink.exec(e2)) || (u3 = this.rules.inline.nolink.exec(e2))) {
              var n2 = (u3[2] || u3[1]).replace(/\s+/g, " ");
              if (!(n2 = t3[n2.toLowerCase()])) {
                var r2 = u3[0].charAt(0);
                return { type: "text", raw: r2, text: r2 };
              }
              return _(u3, n2, u3[0], this.lexer);
            }
          }, u2.emStrong = function(e2, t3, u3) {
            void 0 === u3 && (u3 = "");
            var n2 = this.rules.inline.emStrong.lDelim.exec(e2);
            if (n2 && (!n2[3] || !u3.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
              var r2 = n2[1] || n2[2] || "";
              if (!r2 || r2 && ("" === u3 || this.rules.inline.punctuation.exec(u3))) {
                var i2, s2, l2 = n2[0].length - 1, a2 = l2, o2 = 0, D2 = "*" === n2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for (D2.lastIndex = 0, t3 = t3.slice(-1 * e2.length + l2); null != (n2 = D2.exec(t3)); )
                  if (i2 = n2[1] || n2[2] || n2[3] || n2[4] || n2[5] || n2[6])
                    if (s2 = i2.length, n2[3] || n2[4])
                      a2 += s2;
                    else if (!((n2[5] || n2[6]) && l2 % 3) || (l2 + s2) % 3) {
                      if (!((a2 -= s2) > 0)) {
                        s2 = Math.min(s2, s2 + a2 + o2);
                        var c2 = e2.slice(0, l2 + n2.index + (n2[0].length - i2.length) + s2);
                        if (Math.min(l2, s2) % 2) {
                          var h2 = c2.slice(1, -1);
                          return { type: "em", raw: c2, text: h2, tokens: this.lexer.inlineTokens(h2) };
                        }
                        var p2 = c2.slice(2, -2);
                        return { type: "strong", raw: c2, text: p2, tokens: this.lexer.inlineTokens(p2) };
                      }
                    } else
                      o2 += s2;
              }
            }
          }, u2.codespan = function(e2) {
            var t3 = this.rules.inline.code.exec(e2);
            if (t3) {
              var u3 = t3[2].replace(/\n/g, " "), n2 = /[^ ]/.test(u3), r2 = /^ /.test(u3) && / $/.test(u3);
              return n2 && r2 && (u3 = u3.substring(1, u3.length - 1)), u3 = c(u3, true), { type: "codespan", raw: t3[0], text: u3 };
            }
          }, u2.br = function(e2) {
            var t3 = this.rules.inline.br.exec(e2);
            if (t3)
              return { type: "br", raw: t3[0] };
          }, u2.del = function(e2) {
            var t3 = this.rules.inline.del.exec(e2);
            if (t3)
              return { type: "del", raw: t3[0], text: t3[2], tokens: this.lexer.inlineTokens(t3[2]) };
          }, u2.autolink = function(e2, t3) {
            var u3, n2, r2 = this.rules.inline.autolink.exec(e2);
            if (r2)
              return n2 = "@" === r2[2] ? "mailto:" + (u3 = c(this.options.mangle ? t3(r2[1]) : r2[1])) : u3 = c(r2[1]), { type: "link", raw: r2[0], text: u3, href: n2, tokens: [{ type: "text", raw: u3, text: u3 }] };
          }, u2.url = function(e2, t3) {
            var u3;
            if (u3 = this.rules.inline.url.exec(e2)) {
              var n2, r2;
              if ("@" === u3[2])
                r2 = "mailto:" + (n2 = c(this.options.mangle ? t3(u3[0]) : u3[0]));
              else {
                var i2;
                do {
                  i2 = u3[0], u3[0] = this.rules.inline._backpedal.exec(u3[0])[0];
                } while (i2 !== u3[0]);
                n2 = c(u3[0]), r2 = "www." === u3[1] ? "http://" + u3[0] : u3[0];
              }
              return { type: "link", raw: u3[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
            }
          }, u2.inlineText = function(e2, t3) {
            var u3, n2 = this.rules.inline.text.exec(e2);
            if (n2)
              return u3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n2[0]) : c(n2[0]) : n2[0] : c(this.options.smartypants ? t3(n2[0]) : n2[0]), { type: "text", raw: n2[0], text: u3 };
          }, t2;
        }(), $ = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: m, lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
        $.def = g($.def).replace("label", $._label).replace("title", $._title).getRegex(), $.bullet = /(?:[*+-]|\d{1,9}[.)])/, $.listItemStart = g(/^( *)(bull) */).replace("bull", $.bullet).getRegex(), $.list = g($.list).replace(/bull/g, $.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + $.def.source + ")").getRegex(), $._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, $.html = g($.html, "i").replace("comment", $._comment).replace("tag", $._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $.paragraph = g($._paragraph).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.blockquote = g($.blockquote).replace("paragraph", $.paragraph).getRegex(), $.normal = b({}, $), $.gfm = b({}, $.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), $.gfm.table = g($.gfm.table).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.gfm.paragraph = g($._paragraph).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", $.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.pedantic = b({}, $.normal, { html: g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", $._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: m, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: g($.normal._paragraph).replace("hr", $.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", $.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
        var S = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: m, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/, rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: m, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
        function T(e2) {
          return e2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
        }
        function R(e2) {
          var t2, u2, n2 = "", r2 = e2.length;
          for (t2 = 0; t2 < r2; t2++)
            u2 = e2.charCodeAt(t2), Math.random() > 0.5 && (u2 = "x" + u2.toString(16)), n2 += "&#" + u2 + ";";
          return n2;
        }
        S._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", S.punctuation = g(S.punctuation).replace(/punctuation/g, S._punctuation).getRegex(), S.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, S.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, S._comment = g($._comment).replace("(?:-->|$)", "-->").getRegex(), S.emStrong.lDelim = g(S.emStrong.lDelim).replace(/punct/g, S._punctuation).getRegex(), S.emStrong.rDelimAst = g(S.emStrong.rDelimAst, "g").replace(/punct/g, S._punctuation).getRegex(), S.emStrong.rDelimUnd = g(S.emStrong.rDelimUnd, "g").replace(/punct/g, S._punctuation).getRegex(), S._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, S._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, S._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, S.autolink = g(S.autolink).replace("scheme", S._scheme).replace("email", S._email).getRegex(), S._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, S.tag = g(S.tag).replace("comment", S._comment).replace("attribute", S._attribute).getRegex(), S._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, S._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, S._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, S.link = g(S.link).replace("label", S._label).replace("href", S._href).replace("title", S._title).getRegex(), S.reflink = g(S.reflink).replace("label", S._label).replace("ref", $._label).getRegex(), S.nolink = g(S.nolink).replace("ref", $._label).getRegex(), S.reflinkSearch = g(S.reflinkSearch, "g").replace("reflink", S.reflink).replace("nolink", S.nolink).getRegex(), S.normal = b({}, S), S.pedantic = b({}, S.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: g(/^!?\[(label)\]\((.*?)\)/).replace("label", S._label).getRegex(), reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", S._label).getRegex() }), S.gfm = b({}, S.normal, { escape: g(S.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), S.gfm.url = g(S.gfm.url, "i").replace("email", S.gfm._extended_email).getRegex(), S.breaks = b({}, S.gfm, { br: g(S.br).replace("{2,}", "*").getRegex(), text: g(S.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
        var I = function() {
          function u2(t2) {
            this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t2 || e.defaults, this.options.tokenizer = this.options.tokenizer || new z(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
            var u3 = { block: $.normal, inline: S.normal };
            this.options.pedantic ? (u3.block = $.pedantic, u3.inline = S.pedantic) : this.options.gfm && (u3.block = $.gfm, this.options.breaks ? u3.inline = S.breaks : u3.inline = S.gfm), this.tokenizer.rules = u3;
          }
          u2.lex = function(e2, t2) {
            return new u2(t2).lex(e2);
          }, u2.lexInline = function(e2, t2) {
            return new u2(t2).inlineTokens(e2);
          };
          var n2, r2, i2, s2 = u2.prototype;
          return s2.lex = function(e2) {
            var t2;
            for (e2 = e2.replace(/\r\n|\r/g, "\n"), this.blockTokens(e2, this.tokens); t2 = this.inlineQueue.shift(); )
              this.inlineTokens(t2.src, t2.tokens);
            return this.tokens;
          }, s2.blockTokens = function(e2, t2) {
            var u3, n3, r3, i3, s3 = this;
            for (void 0 === t2 && (t2 = []), e2 = this.options.pedantic ? e2.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e2.replace(/^( *)(\t+)/gm, function(e3, t3, u4) {
              return t3 + "    ".repeat(u4.length);
            }); e2; )
              if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(n4) {
                return !!(u3 = n4.call({ lexer: s3 }, e2, t2)) && (e2 = e2.substring(u3.raw.length), t2.push(u3), true);
              }))) {
                if (u3 = this.tokenizer.space(e2))
                  e2 = e2.substring(u3.raw.length), 1 === u3.raw.length && t2.length > 0 ? t2[t2.length - 1].raw += "\n" : t2.push(u3);
                else if (u3 = this.tokenizer.code(e2))
                  e2 = e2.substring(u3.raw.length), !(n3 = t2[t2.length - 1]) || "paragraph" !== n3.type && "text" !== n3.type ? t2.push(u3) : (n3.raw += "\n" + u3.raw, n3.text += "\n" + u3.text, this.inlineQueue[this.inlineQueue.length - 1].src = n3.text);
                else if (u3 = this.tokenizer.fences(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.heading(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.hr(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.blockquote(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.list(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.html(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.def(e2))
                  e2 = e2.substring(u3.raw.length), !(n3 = t2[t2.length - 1]) || "paragraph" !== n3.type && "text" !== n3.type ? this.tokens.links[u3.tag] || (this.tokens.links[u3.tag] = { href: u3.href, title: u3.title }) : (n3.raw += "\n" + u3.raw, n3.text += "\n" + u3.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n3.text);
                else if (u3 = this.tokenizer.table(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.lheading(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (r3 = e2, this.options.extensions && this.options.extensions.startBlock && function() {
                  var t3 = 1 / 0, u4 = e2.slice(1), n4 = void 0;
                  s3.options.extensions.startBlock.forEach(function(e3) {
                    "number" == typeof (n4 = e3.call({ lexer: this }, u4)) && n4 >= 0 && (t3 = Math.min(t3, n4));
                  }), t3 < 1 / 0 && t3 >= 0 && (r3 = e2.substring(0, t3 + 1));
                }(), this.state.top && (u3 = this.tokenizer.paragraph(r3)))
                  n3 = t2[t2.length - 1], i3 && "paragraph" === n3.type ? (n3.raw += "\n" + u3.raw, n3.text += "\n" + u3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n3.text) : t2.push(u3), i3 = r3.length !== e2.length, e2 = e2.substring(u3.raw.length);
                else if (u3 = this.tokenizer.text(e2))
                  e2 = e2.substring(u3.raw.length), (n3 = t2[t2.length - 1]) && "text" === n3.type ? (n3.raw += "\n" + u3.raw, n3.text += "\n" + u3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n3.text) : t2.push(u3);
                else if (e2) {
                  var l2 = "Infinite loop on byte: " + e2.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(l2);
                    break;
                  }
                  throw new Error(l2);
                }
              }
            return this.state.top = true, t2;
          }, s2.inline = function(e2, t2) {
            return void 0 === t2 && (t2 = []), this.inlineQueue.push({ src: e2, tokens: t2 }), t2;
          }, s2.inlineTokens = function(e2, t2) {
            var u3, n3, r3, i3 = this;
            void 0 === t2 && (t2 = []);
            var s3, l2, a2, o2 = e2;
            if (this.tokens.links) {
              var D2 = Object.keys(this.tokens.links);
              if (D2.length > 0)
                for (; null != (s3 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)); )
                  D2.includes(s3[0].slice(s3[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, s3.index) + "[" + y("a", s3[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (s3 = this.tokenizer.rules.inline.blockSkip.exec(o2)); )
              o2 = o2.slice(0, s3.index) + "[" + y("a", s3[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; null != (s3 = this.tokenizer.rules.inline.escapedEmSt.exec(o2)); )
              o2 = o2.slice(0, s3.index + s3[0].length - 2) + "++" + o2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
            for (; e2; )
              if (l2 || (a2 = ""), l2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(n4) {
                return !!(u3 = n4.call({ lexer: i3 }, e2, t2)) && (e2 = e2.substring(u3.raw.length), t2.push(u3), true);
              })))
                if (u3 = this.tokenizer.escape(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.tag(e2))
                  e2 = e2.substring(u3.raw.length), (n3 = t2[t2.length - 1]) && "text" === u3.type && "text" === n3.type ? (n3.raw += u3.raw, n3.text += u3.text) : t2.push(u3);
                else if (u3 = this.tokenizer.link(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.reflink(e2, this.tokens.links))
                  e2 = e2.substring(u3.raw.length), (n3 = t2[t2.length - 1]) && "text" === u3.type && "text" === n3.type ? (n3.raw += u3.raw, n3.text += u3.text) : t2.push(u3);
                else if (u3 = this.tokenizer.emStrong(e2, o2, a2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.codespan(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.br(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.del(e2))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (u3 = this.tokenizer.autolink(e2, R))
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
                else if (this.state.inLink || !(u3 = this.tokenizer.url(e2, R))) {
                  if (r3 = e2, this.options.extensions && this.options.extensions.startInline && function() {
                    var t3 = 1 / 0, u4 = e2.slice(1), n4 = void 0;
                    i3.options.extensions.startInline.forEach(function(e3) {
                      "number" == typeof (n4 = e3.call({ lexer: this }, u4)) && n4 >= 0 && (t3 = Math.min(t3, n4));
                    }), t3 < 1 / 0 && t3 >= 0 && (r3 = e2.substring(0, t3 + 1));
                  }(), u3 = this.tokenizer.inlineText(r3, T))
                    e2 = e2.substring(u3.raw.length), "_" !== u3.raw.slice(-1) && (a2 = u3.raw.slice(-1)), l2 = true, (n3 = t2[t2.length - 1]) && "text" === n3.type ? (n3.raw += u3.raw, n3.text += u3.text) : t2.push(u3);
                  else if (e2) {
                    var c2 = "Infinite loop on byte: " + e2.charCodeAt(0);
                    if (this.options.silent) {
                      console.error(c2);
                      break;
                    }
                    throw new Error(c2);
                  }
                } else
                  e2 = e2.substring(u3.raw.length), t2.push(u3);
            return t2;
          }, n2 = u2, i2 = [{ key: "rules", get: function() {
            return { block: $, inline: S };
          } }], (r2 = null) && t(n2.prototype, r2), i2 && t(n2, i2), Object.defineProperty(n2, "prototype", { writable: false }), u2;
        }(), Z = function() {
          function t2(t3) {
            this.options = t3 || e.defaults;
          }
          var u2 = t2.prototype;
          return u2.code = function(e2, t3, u3) {
            var n2 = (t3 || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var r2 = this.options.highlight(e2, n2);
              null != r2 && r2 !== e2 && (u3 = true, e2 = r2);
            }
            return e2 = e2.replace(/\n$/, "") + "\n", n2 ? '<pre><code class="' + this.options.langPrefix + c(n2) + '">' + (u3 ? e2 : c(e2, true)) + "</code></pre>\n" : "<pre><code>" + (u3 ? e2 : c(e2, true)) + "</code></pre>\n";
          }, u2.blockquote = function(e2) {
            return "<blockquote>\n" + e2 + "</blockquote>\n";
          }, u2.html = function(e2) {
            return e2;
          }, u2.heading = function(e2, t3, u3, n2) {
            return this.options.headerIds ? "<h" + t3 + ' id="' + (this.options.headerPrefix + n2.slug(u3)) + '">' + e2 + "</h" + t3 + ">\n" : "<h" + t3 + ">" + e2 + "</h" + t3 + ">\n";
          }, u2.hr = function() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }, u2.list = function(e2, t3, u3) {
            var n2 = t3 ? "ol" : "ul";
            return "<" + n2 + (t3 && 1 !== u3 ? ' start="' + u3 + '"' : "") + ">\n" + e2 + "</" + n2 + ">\n";
          }, u2.listitem = function(e2) {
            return "<li>" + e2 + "</li>\n";
          }, u2.checkbox = function(e2) {
            return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
          }, u2.paragraph = function(e2) {
            return "<p>" + e2 + "</p>\n";
          }, u2.table = function(e2, t3) {
            return t3 && (t3 = "<tbody>" + t3 + "</tbody>"), "<table>\n<thead>\n" + e2 + "</thead>\n" + t3 + "</table>\n";
          }, u2.tablerow = function(e2) {
            return "<tr>\n" + e2 + "</tr>\n";
          }, u2.tablecell = function(e2, t3) {
            var u3 = t3.header ? "th" : "td";
            return (t3.align ? "<" + u3 + ' align="' + t3.align + '">' : "<" + u3 + ">") + e2 + "</" + u3 + ">\n";
          }, u2.strong = function(e2) {
            return "<strong>" + e2 + "</strong>";
          }, u2.em = function(e2) {
            return "<em>" + e2 + "</em>";
          }, u2.codespan = function(e2) {
            return "<code>" + e2 + "</code>";
          }, u2.br = function() {
            return this.options.xhtml ? "<br/>" : "<br>";
          }, u2.del = function(e2) {
            return "<del>" + e2 + "</del>";
          }, u2.link = function(e2, t3, u3) {
            if (null === (e2 = d(this.options.sanitize, this.options.baseUrl, e2)))
              return u3;
            var n2 = '<a href="' + e2 + '"';
            return t3 && (n2 += ' title="' + t3 + '"'), n2 += ">" + u3 + "</a>";
          }, u2.image = function(e2, t3, u3) {
            if (null === (e2 = d(this.options.sanitize, this.options.baseUrl, e2)))
              return u3;
            var n2 = '<img src="' + e2 + '" alt="' + u3 + '"';
            return t3 && (n2 += ' title="' + t3 + '"'), n2 += this.options.xhtml ? "/>" : ">";
          }, u2.text = function(e2) {
            return e2;
          }, t2;
        }(), q = function() {
          function e2() {
          }
          var t2 = e2.prototype;
          return t2.strong = function(e3) {
            return e3;
          }, t2.em = function(e3) {
            return e3;
          }, t2.codespan = function(e3) {
            return e3;
          }, t2.del = function(e3) {
            return e3;
          }, t2.html = function(e3) {
            return e3;
          }, t2.text = function(e3) {
            return e3;
          }, t2.link = function(e3, t3, u2) {
            return "" + u2;
          }, t2.image = function(e3, t3, u2) {
            return "" + u2;
          }, t2.br = function() {
            return "";
          }, e2;
        }(), O = function() {
          function e2() {
            this.seen = {};
          }
          var t2 = e2.prototype;
          return t2.serialize = function(e3) {
            return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
          }, t2.getNextSafeSlug = function(e3, t3) {
            var u2 = e3, n2 = 0;
            if (this.seen.hasOwnProperty(u2)) {
              n2 = this.seen[e3];
              do {
                u2 = e3 + "-" + ++n2;
              } while (this.seen.hasOwnProperty(u2));
            }
            return t3 || (this.seen[e3] = n2, this.seen[u2] = 0), u2;
          }, t2.slug = function(e3, t3) {
            void 0 === t3 && (t3 = {});
            var u2 = this.serialize(e3);
            return this.getNextSafeSlug(u2, t3.dryrun);
          }, e2;
        }(), j = function() {
          function t2(t3) {
            this.options = t3 || e.defaults, this.options.renderer = this.options.renderer || new Z(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new q(), this.slugger = new O();
          }
          t2.parse = function(e2, u3) {
            return new t2(u3).parse(e2);
          }, t2.parseInline = function(e2, u3) {
            return new t2(u3).parseInline(e2);
          };
          var u2 = t2.prototype;
          return u2.parse = function(e2, t3) {
            void 0 === t3 && (t3 = true);
            var u3, n2, r2, i2, s2, l2, a2, o2, D2, c2, h2, f2, g2, F2, A2, d2, C2, k2, E2, x2 = "", m2 = e2.length;
            for (u3 = 0; u3 < m2; u3++)
              if (c2 = e2[u3], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c2.type]) || false === (E2 = this.options.extensions.renderers[c2.type].call({ parser: this }, c2)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c2.type))
                switch (c2.type) {
                  case "space":
                    continue;
                  case "hr":
                    x2 += this.renderer.hr();
                    continue;
                  case "heading":
                    x2 += this.renderer.heading(this.parseInline(c2.tokens), c2.depth, p(this.parseInline(c2.tokens, this.textRenderer)), this.slugger);
                    continue;
                  case "code":
                    x2 += this.renderer.code(c2.text, c2.lang, c2.escaped);
                    continue;
                  case "table":
                    for (o2 = "", a2 = "", i2 = c2.header.length, n2 = 0; n2 < i2; n2++)
                      a2 += this.renderer.tablecell(this.parseInline(c2.header[n2].tokens), { header: true, align: c2.align[n2] });
                    for (o2 += this.renderer.tablerow(a2), D2 = "", i2 = c2.rows.length, n2 = 0; n2 < i2; n2++) {
                      for (a2 = "", s2 = (l2 = c2.rows[n2]).length, r2 = 0; r2 < s2; r2++)
                        a2 += this.renderer.tablecell(this.parseInline(l2[r2].tokens), { header: false, align: c2.align[r2] });
                      D2 += this.renderer.tablerow(a2);
                    }
                    x2 += this.renderer.table(o2, D2);
                    continue;
                  case "blockquote":
                    D2 = this.parse(c2.tokens), x2 += this.renderer.blockquote(D2);
                    continue;
                  case "list":
                    for (h2 = c2.ordered, f2 = c2.start, g2 = c2.loose, i2 = c2.items.length, D2 = "", n2 = 0; n2 < i2; n2++)
                      d2 = (A2 = c2.items[n2]).checked, C2 = A2.task, F2 = "", A2.task && (k2 = this.renderer.checkbox(d2), g2 ? A2.tokens.length > 0 && "paragraph" === A2.tokens[0].type ? (A2.tokens[0].text = k2 + " " + A2.tokens[0].text, A2.tokens[0].tokens && A2.tokens[0].tokens.length > 0 && "text" === A2.tokens[0].tokens[0].type && (A2.tokens[0].tokens[0].text = k2 + " " + A2.tokens[0].tokens[0].text)) : A2.tokens.unshift({ type: "text", text: k2 }) : F2 += k2), F2 += this.parse(A2.tokens, g2), D2 += this.renderer.listitem(F2, C2, d2);
                    x2 += this.renderer.list(D2, h2, f2);
                    continue;
                  case "html":
                    x2 += this.renderer.html(c2.text);
                    continue;
                  case "paragraph":
                    x2 += this.renderer.paragraph(this.parseInline(c2.tokens));
                    continue;
                  case "text":
                    for (D2 = c2.tokens ? this.parseInline(c2.tokens) : c2.text; u3 + 1 < m2 && "text" === e2[u3 + 1].type; )
                      D2 += "\n" + ((c2 = e2[++u3]).tokens ? this.parseInline(c2.tokens) : c2.text);
                    x2 += t3 ? this.renderer.paragraph(D2) : D2;
                    continue;
                  default:
                    var b2 = 'Token with "' + c2.type + '" type was not found.';
                    if (this.options.silent)
                      return void console.error(b2);
                    throw new Error(b2);
                }
              else
                x2 += E2 || "";
            return x2;
          }, u2.parseInline = function(e2, t3) {
            t3 = t3 || this.renderer;
            var u3, n2, r2, i2 = "", s2 = e2.length;
            for (u3 = 0; u3 < s2; u3++)
              if (n2 = e2[u3], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n2.type]) || false === (r2 = this.options.extensions.renderers[n2.type].call({ parser: this }, n2)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n2.type))
                switch (n2.type) {
                  case "escape":
                  case "text":
                    i2 += t3.text(n2.text);
                    break;
                  case "html":
                    i2 += t3.html(n2.text);
                    break;
                  case "link":
                    i2 += t3.link(n2.href, n2.title, this.parseInline(n2.tokens, t3));
                    break;
                  case "image":
                    i2 += t3.image(n2.href, n2.title, n2.text);
                    break;
                  case "strong":
                    i2 += t3.strong(this.parseInline(n2.tokens, t3));
                    break;
                  case "em":
                    i2 += t3.em(this.parseInline(n2.tokens, t3));
                    break;
                  case "codespan":
                    i2 += t3.codespan(n2.text);
                    break;
                  case "br":
                    i2 += t3.br();
                    break;
                  case "del":
                    i2 += t3.del(this.parseInline(n2.tokens, t3));
                    break;
                  default:
                    var l2 = 'Token with "' + n2.type + '" type was not found.';
                    if (this.options.silent)
                      return void console.error(l2);
                    throw new Error(l2);
                }
              else
                i2 += r2 || "";
            return i2;
          }, t2;
        }();
        function L(e2, t2, u2) {
          if (null == e2)
            throw new Error("marked(): input parameter is undefined or null");
          if ("string" != typeof e2)
            throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
          if ("function" == typeof t2 && (u2 = t2, t2 = null), v(t2 = b({}, L.defaults, t2 || {})), u2) {
            var n2, r2 = t2.highlight;
            try {
              n2 = I.lex(e2, t2);
            } catch (e3) {
              return u2(e3);
            }
            var i2 = function(e3) {
              var i3;
              if (!e3)
                try {
                  t2.walkTokens && L.walkTokens(n2, t2.walkTokens), i3 = j.parse(n2, t2);
                } catch (t3) {
                  e3 = t3;
                }
              return t2.highlight = r2, e3 ? u2(e3) : u2(null, i3);
            };
            if (!r2 || r2.length < 3)
              return i2();
            if (delete t2.highlight, !n2.length)
              return i2();
            var s2 = 0;
            return L.walkTokens(n2, function(e3) {
              "code" === e3.type && (s2++, setTimeout(function() {
                r2(e3.text, e3.lang, function(t3, u3) {
                  if (t3)
                    return i2(t3);
                  null != u3 && u3 !== e3.text && (e3.text = u3, e3.escaped = true), 0 === --s2 && i2();
                });
              }, 0));
            }), void (0 === s2 && i2());
          }
          function l2(e3) {
            if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
              return "<p>An error occurred:</p><pre>" + c(e3.message + "", true) + "</pre>";
            throw e3;
          }
          try {
            var a2 = I.lex(e2, t2);
            if (t2.walkTokens) {
              if (t2.async)
                return Promise.all(L.walkTokens(a2, t2.walkTokens)).then(function() {
                  return j.parse(a2, t2);
                }).catch(l2);
              L.walkTokens(a2, t2.walkTokens);
            }
            return j.parse(a2, t2);
          } catch (e3) {
            l2(e3);
          }
        }
        L.options = L.setOptions = function(t2) {
          var u2;
          return b(L.defaults, t2), u2 = L.defaults, e.defaults = u2, L;
        }, L.getDefaults = r, L.defaults = e.defaults, L.use = function() {
          for (var e2 = L.defaults.extensions || { renderers: {}, childTokens: {} }, t2 = arguments.length, u2 = new Array(t2), n2 = 0; n2 < t2; n2++)
            u2[n2] = arguments[n2];
          u2.forEach(function(t3) {
            var u3 = b({}, t3);
            if (u3.async = L.defaults.async || u3.async, t3.extensions && (t3.extensions.forEach(function(t4) {
              if (!t4.name)
                throw new Error("extension name required");
              if (t4.renderer) {
                var u4 = e2.renderers[t4.name];
                e2.renderers[t4.name] = u4 ? function() {
                  for (var e3 = arguments.length, n4 = new Array(e3), r2 = 0; r2 < e3; r2++)
                    n4[r2] = arguments[r2];
                  var i2 = t4.renderer.apply(this, n4);
                  return false === i2 && (i2 = u4.apply(this, n4)), i2;
                } : t4.renderer;
              }
              if (t4.tokenizer) {
                if (!t4.level || "block" !== t4.level && "inline" !== t4.level)
                  throw new Error("extension level must be 'block' or 'inline'");
                e2[t4.level] ? e2[t4.level].unshift(t4.tokenizer) : e2[t4.level] = [t4.tokenizer], t4.start && ("block" === t4.level ? e2.startBlock ? e2.startBlock.push(t4.start) : e2.startBlock = [t4.start] : "inline" === t4.level && (e2.startInline ? e2.startInline.push(t4.start) : e2.startInline = [t4.start]));
              }
              t4.childTokens && (e2.childTokens[t4.name] = t4.childTokens);
            }), u3.extensions = e2), t3.renderer && function() {
              var e3 = L.defaults.renderer || new Z(), n4 = function(u4) {
                var n5 = e3[u4];
                e3[u4] = function() {
                  for (var r3 = arguments.length, i2 = new Array(r3), s2 = 0; s2 < r3; s2++)
                    i2[s2] = arguments[s2];
                  var l2 = t3.renderer[u4].apply(e3, i2);
                  return false === l2 && (l2 = n5.apply(e3, i2)), l2;
                };
              };
              for (var r2 in t3.renderer)
                n4(r2);
              u3.renderer = e3;
            }(), t3.tokenizer && function() {
              var e3 = L.defaults.tokenizer || new z(), n4 = function(u4) {
                var n5 = e3[u4];
                e3[u4] = function() {
                  for (var r3 = arguments.length, i2 = new Array(r3), s2 = 0; s2 < r3; s2++)
                    i2[s2] = arguments[s2];
                  var l2 = t3.tokenizer[u4].apply(e3, i2);
                  return false === l2 && (l2 = n5.apply(e3, i2)), l2;
                };
              };
              for (var r2 in t3.tokenizer)
                n4(r2);
              u3.tokenizer = e3;
            }(), t3.walkTokens) {
              var n3 = L.defaults.walkTokens;
              u3.walkTokens = function(e3) {
                var u4 = [];
                return u4.push(t3.walkTokens.call(this, e3)), n3 && (u4 = u4.concat(n3.call(this, e3))), u4;
              };
            }
            L.setOptions(u3);
          });
        }, L.walkTokens = function(e2, t2) {
          for (var u2, r2 = [], i2 = function() {
            var e3 = u2.value;
            switch (r2 = r2.concat(t2.call(L, e3)), e3.type) {
              case "table":
                for (var i3, s3 = n(e3.header); !(i3 = s3()).done; ) {
                  var l2 = i3.value;
                  r2 = r2.concat(L.walkTokens(l2.tokens, t2));
                }
                for (var a2, o2 = n(e3.rows); !(a2 = o2()).done; )
                  for (var D2, c2 = n(a2.value); !(D2 = c2()).done; ) {
                    var h2 = D2.value;
                    r2 = r2.concat(L.walkTokens(h2.tokens, t2));
                  }
                break;
              case "list":
                r2 = r2.concat(L.walkTokens(e3.items, t2));
                break;
              default:
                L.defaults.extensions && L.defaults.extensions.childTokens && L.defaults.extensions.childTokens[e3.type] ? L.defaults.extensions.childTokens[e3.type].forEach(function(u3) {
                  r2 = r2.concat(L.walkTokens(e3[u3], t2));
                }) : e3.tokens && (r2 = r2.concat(L.walkTokens(e3.tokens, t2)));
            }
          }, s2 = n(e2); !(u2 = s2()).done; )
            i2();
          return r2;
        }, L.parseInline = function(e2, t2) {
          if (null == e2)
            throw new Error("marked.parseInline(): input parameter is undefined or null");
          if ("string" != typeof e2)
            throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
          v(t2 = b({}, L.defaults, t2 || {}));
          try {
            var u2 = I.lexInline(e2, t2);
            return t2.walkTokens && L.walkTokens(u2, t2.walkTokens), j.parseInline(u2, t2);
          } catch (e3) {
            if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
              return "<p>An error occurred:</p><pre>" + c(e3.message + "", true) + "</pre>";
            throw e3;
          }
        }, L.Parser = j, L.parser = j.parse, L.Renderer = Z, L.TextRenderer = q, L.Lexer = I, L.lexer = I.lex, L.Tokenizer = z, L.Slugger = O, L.parse = L;
        var P = L.options, U = L.setOptions, Q = L.use, M = L.walkTokens, N = L.parseInline, X = L, G = j.parse, V = I.lex;
        e.Lexer = I, e.Parser = j, e.Renderer = Z, e.Slugger = O, e.TextRenderer = q, e.Tokenizer = z, e.getDefaults = r, e.lexer = V, e.marked = L, e.options = P, e.parse = X, e.parseInline = N, e.parser = G, e.setOptions = U, e.use = Q, e.walkTokens = M;
      });
    }
  });
  require_marked();
})();
//# sourceMappingURL=assets/marked.js.map
