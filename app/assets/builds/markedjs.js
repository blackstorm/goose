(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // app/javascript/markedjs.js
  var require_markedjs = __commonJS({
    "app/javascript/markedjs.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).marked = {});
      }(exports, function(r) {
        "use strict";
        function i(e2, t2) {
          for (var u2 = 0; u2 < t2.length; u2++) {
            var n2 = t2[u2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, function(e3) {
              e3 = function(e4, t3) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var u3 = e4[Symbol.toPrimitive];
                if (void 0 === u3)
                  return ("string" === t3 ? String : Number)(e4);
                u3 = u3.call(e4, t3 || "default");
                if ("object" != typeof u3)
                  return u3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }(e3, "string");
              return "symbol" == typeof e3 ? e3 : String(e3);
            }(n2.key), n2);
          }
        }
        function s(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var u2 = 0, n2 = new Array(t2); u2 < t2; u2++)
            n2[u2] = e2[u2];
          return n2;
        }
        function D(e2, t2) {
          var u2, n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
          if (n2)
            return (n2 = n2.call(e2)).next.bind(n2);
          if (Array.isArray(e2) || (n2 = function(e3, t3) {
            var u3;
            if (e3)
              return "string" == typeof e3 ? s(e3, t3) : "Map" === (u3 = "Object" === (u3 = Object.prototype.toString.call(e3).slice(8, -1)) && e3.constructor ? e3.constructor.name : u3) || "Set" === u3 ? Array.from(e3) : "Arguments" === u3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u3) ? s(e3, t3) : void 0;
          }(e2)) || t2 && e2 && "number" == typeof e2.length)
            return n2 && (e2 = n2), u2 = 0, function() {
              return u2 >= e2.length ? { done: true } : { done: false, value: e2[u2++] };
            };
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function e() {
          return { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
        }
        r.defaults = e();
        function u(e2) {
          return t[e2];
        }
        var n = /[&<>"']/, l = new RegExp(n.source, "g"), a = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, o = new RegExp(a.source, "g"), t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
        function c(e2, t2) {
          if (t2) {
            if (n.test(e2))
              return e2.replace(l, u);
          } else if (a.test(e2))
            return e2.replace(o, u);
          return e2;
        }
        var h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function x(e2) {
          return e2.replace(h, function(e3, t2) {
            return "colon" === (t2 = t2.toLowerCase()) ? ":" : "#" === t2.charAt(0) ? "x" === t2.charAt(1) ? String.fromCharCode(parseInt(t2.substring(2), 16)) : String.fromCharCode(+t2.substring(1)) : "";
          });
        }
        var p = /(^|[^\[])\^/g;
        function f(u2, e2) {
          u2 = "string" == typeof u2 ? u2 : u2.source, e2 = e2 || "";
          var n2 = { replace: function(e3, t2) {
            return t2 = (t2 = t2.source || t2).replace(p, "$1"), u2 = u2.replace(e3, t2), n2;
          }, getRegex: function() {
            return new RegExp(u2, e2);
          } };
          return n2;
        }
        var g = /[^\w:]/g, Z = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function F(e2, t2, u2) {
          if (e2) {
            try {
              n2 = decodeURIComponent(x(u2)).replace(g, "").toLowerCase();
            } catch (e3) {
              return null;
            }
            if (0 === n2.indexOf("javascript:") || 0 === n2.indexOf("vbscript:") || 0 === n2.indexOf("data:"))
              return null;
          }
          var n2;
          t2 && !Z.test(u2) && (e2 = u2, A[" " + (n2 = t2)] || (q.test(n2) ? A[" " + n2] = n2 + "/" : A[" " + n2] = E(n2, "/", true)), t2 = -1 === (n2 = A[" " + n2]).indexOf(":"), u2 = "//" === e2.substring(0, 2) ? t2 ? e2 : n2.replace(O, "$1") + e2 : "/" === e2.charAt(0) ? t2 ? e2 : n2.replace(j, "$1") + e2 : n2 + e2);
          try {
            u2 = encodeURI(u2).replace(/%25/g, "%");
          } catch (e3) {
            return null;
          }
          return u2;
        }
        var A = {}, q = /^[^:]+:\/*[^/]*$/, O = /^([^:]+:)[\s\S]*$/, j = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        var d = { exec: function() {
        } };
        function C(e2) {
          for (var t2, u2, n2 = 1; n2 < arguments.length; n2++)
            for (u2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, u2) && (e2[u2] = t2[u2]);
          return e2;
        }
        function k(e2, t2) {
          var u2 = e2.replace(/\|/g, function(e3, t3, u3) {
            for (var n3 = false, r2 = t3; 0 <= --r2 && "\\" === u3[r2]; )
              n3 = !n3;
            return n3 ? "|" : " |";
          }).split(/ \|/), n2 = 0;
          if (u2[0].trim() || u2.shift(), 0 < u2.length && !u2[u2.length - 1].trim() && u2.pop(), u2.length > t2)
            u2.splice(t2);
          else
            for (; u2.length < t2; )
              u2.push("");
          for (; n2 < u2.length; n2++)
            u2[n2] = u2[n2].trim().replace(/\\\|/g, "|");
          return u2;
        }
        function E(e2, t2, u2) {
          var n2 = e2.length;
          if (0 === n2)
            return "";
          for (var r2 = 0; r2 < n2; ) {
            var i2 = e2.charAt(n2 - r2 - 1);
            if ((i2 !== t2 || u2) && (i2 === t2 || !u2))
              break;
            r2++;
          }
          return e2.slice(0, n2 - r2);
        }
        function m(e2) {
          e2 && e2.sanitize && !e2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
        }
        function b(e2, t2) {
          if (t2 < 1)
            return "";
          for (var u2 = ""; 1 < t2; )
            1 & t2 && (u2 += e2), t2 >>= 1, e2 += e2;
          return u2 + e2;
        }
        function B(e2, t2, u2, n2) {
          var r2 = t2.href, t2 = t2.title ? c(t2.title) : null, i2 = e2[1].replace(/\\([\[\]])/g, "$1");
          return "!" !== e2[0].charAt(0) ? (n2.state.inLink = true, e2 = { type: "link", raw: u2, href: r2, title: t2, text: i2, tokens: n2.inlineTokens(i2) }, n2.state.inLink = false, e2) : { type: "image", raw: u2, href: r2, title: t2, text: c(i2) };
        }
        var w = function() {
          function e2(e3) {
            this.options = e3 || r.defaults;
          }
          var t2 = e2.prototype;
          return t2.space = function(e3) {
            e3 = this.rules.block.newline.exec(e3);
            if (e3 && 0 < e3[0].length)
              return { type: "space", raw: e3[0] };
          }, t2.code = function(e3) {
            var t3, e3 = this.rules.block.code.exec(e3);
            if (e3)
              return t3 = e3[0].replace(/^ {1,4}/gm, ""), { type: "code", raw: e3[0], codeBlockStyle: "indented", text: this.options.pedantic ? t3 : E(t3, "\n") };
          }, t2.fences = function(e3) {
            var t3, u2, n2, r2, e3 = this.rules.block.fences.exec(e3);
            if (e3)
              return t3 = e3[0], u2 = t3, n2 = e3[3] || "", u2 = null === (u2 = t3.match(/^(\s+)(?:```)/)) ? n2 : (r2 = u2[1], n2.split("\n").map(function(e4) {
                var t4 = e4.match(/^\s+/);
                return null !== t4 && t4[0].length >= r2.length ? e4.slice(r2.length) : e4;
              }).join("\n")), { type: "code", raw: t3, lang: e3[2] && e3[2].trim().replace(this.rules.inline._escapes, "$1"), text: u2 };
          }, t2.heading = function(e3) {
            var t3, u2, e3 = this.rules.block.heading.exec(e3);
            if (e3)
              return t3 = e3[2].trim(), /#$/.test(t3) && (u2 = E(t3, "#"), !this.options.pedantic && u2 && !/ $/.test(u2) || (t3 = u2.trim())), { type: "heading", raw: e3[0], depth: e3[1].length, text: t3, tokens: this.lexer.inline(t3) };
          }, t2.hr = function(e3) {
            e3 = this.rules.block.hr.exec(e3);
            if (e3)
              return { type: "hr", raw: e3[0] };
          }, t2.blockquote = function(e3) {
            var t3, u2, n2, e3 = this.rules.block.blockquote.exec(e3);
            if (e3)
              return t3 = e3[0].replace(/^ *>[ \t]?/gm, ""), u2 = this.lexer.state.top, this.lexer.state.top = true, n2 = this.lexer.blockTokens(t3), this.lexer.state.top = u2, { type: "blockquote", raw: e3[0], tokens: n2, text: t3 };
          }, t2.list = function(e3) {
            var t3 = this.rules.block.list.exec(e3);
            if (t3) {
              var u2, n2, r2, i2, s2, l2, a2, o2, D2, c2, h2, p2 = 1 < (g2 = t3[1].trim()).length, f2 = { type: "list", raw: "", ordered: p2, start: p2 ? +g2.slice(0, -1) : "", loose: false, items: [] }, g2 = p2 ? "\\d{1,9}\\" + g2.slice(-1) : "\\" + g2;
              this.options.pedantic && (g2 = p2 ? g2 : "[*+-]");
              for (var F2 = new RegExp("^( {0,3}" + g2 + ")((?:[	 ][^\\n]*)?(?:\\n|$))"); e3 && (h2 = false, t3 = F2.exec(e3)) && !this.rules.block.hr.test(e3); ) {
                if (u2 = t3[0], e3 = e3.substring(u2.length), a2 = t3[2].split("\n", 1)[0].replace(/^\t+/, function(e4) {
                  return " ".repeat(3 * e4.length);
                }), o2 = e3.split("\n", 1)[0], this.options.pedantic ? (i2 = 2, c2 = a2.trimLeft()) : (i2 = t3[2].search(/[^ ]/), c2 = a2.slice(i2 = 4 < i2 ? 1 : i2), i2 += t3[1].length), s2 = false, !a2 && /^ *$/.test(o2) && (u2 += o2 + "\n", e3 = e3.substring(o2.length + 1), h2 = true), !h2)
                  for (var A2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"), d2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), C2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}(?:```|~~~)"), k2 = new RegExp("^ {0," + Math.min(3, i2 - 1) + "}#"); e3 && (o2 = D2 = e3.split("\n", 1)[0], this.options.pedantic && (o2 = o2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !C2.test(o2)) && !k2.test(o2) && !A2.test(o2) && !d2.test(e3); ) {
                    if (o2.search(/[^ ]/) >= i2 || !o2.trim())
                      c2 += "\n" + o2.slice(i2);
                    else {
                      if (s2)
                        break;
                      if (4 <= a2.search(/[^ ]/))
                        break;
                      if (C2.test(a2))
                        break;
                      if (k2.test(a2))
                        break;
                      if (d2.test(a2))
                        break;
                      c2 += "\n" + o2;
                    }
                    s2 || o2.trim() || (s2 = true), u2 += D2 + "\n", e3 = e3.substring(D2.length + 1), a2 = o2.slice(i2);
                  }
                f2.loose || (l2 ? f2.loose = true : /\n *\n *$/.test(u2) && (l2 = true)), this.options.gfm && (n2 = /^\[[ xX]\] /.exec(c2)) && (r2 = "[ ] " !== n2[0], c2 = c2.replace(/^\[[ xX]\] +/, "")), f2.items.push({ type: "list_item", raw: u2, task: !!n2, checked: r2, loose: false, text: c2 }), f2.raw += u2;
              }
              f2.items[f2.items.length - 1].raw = u2.trimRight(), f2.items[f2.items.length - 1].text = c2.trimRight(), f2.raw = f2.raw.trimRight();
              for (var E2, x2 = f2.items.length, m2 = 0; m2 < x2; m2++)
                this.lexer.state.top = false, f2.items[m2].tokens = this.lexer.blockTokens(f2.items[m2].text, []), f2.loose || (E2 = 0 < (E2 = f2.items[m2].tokens.filter(function(e4) {
                  return "space" === e4.type;
                })).length && E2.some(function(e4) {
                  return /\n.*\n/.test(e4.raw);
                }), f2.loose = E2);
              if (f2.loose)
                for (m2 = 0; m2 < x2; m2++)
                  f2.items[m2].loose = true;
              return f2;
            }
          }, t2.html = function(e3) {
            var t3, e3 = this.rules.block.html.exec(e3);
            if (e3)
              return t3 = { type: "html", raw: e3[0], pre: !this.options.sanitizer && ("pre" === e3[1] || "script" === e3[1] || "style" === e3[1]), text: e3[0] }, this.options.sanitize && (e3 = this.options.sanitizer ? this.options.sanitizer(e3[0]) : c(e3[0]), t3.type = "paragraph", t3.text = e3, t3.tokens = this.lexer.inline(e3)), t3;
          }, t2.def = function(e3) {
            var t3, u2, n2, e3 = this.rules.block.def.exec(e3);
            if (e3)
              return t3 = e3[1].toLowerCase().replace(/\s+/g, " "), u2 = e3[2] ? e3[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", n2 = e3[3] && e3[3].substring(1, e3[3].length - 1).replace(this.rules.inline._escapes, "$1"), { type: "def", tag: t3, raw: e3[0], href: u2, title: n2 };
          }, t2.table = function(e3) {
            e3 = this.rules.block.table.exec(e3);
            if (e3) {
              var t3 = { type: "table", header: k(e3[1]).map(function(e4) {
                return { text: e4 };
              }), align: e3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: e3[3] && e3[3].trim() ? e3[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
              if (t3.header.length === t3.align.length) {
                t3.raw = e3[0];
                for (var u2, n2, r2, i2 = t3.align.length, s2 = 0; s2 < i2; s2++)
                  /^ *-+: *$/.test(t3.align[s2]) ? t3.align[s2] = "right" : /^ *:-+: *$/.test(t3.align[s2]) ? t3.align[s2] = "center" : /^ *:-+ *$/.test(t3.align[s2]) ? t3.align[s2] = "left" : t3.align[s2] = null;
                for (i2 = t3.rows.length, s2 = 0; s2 < i2; s2++)
                  t3.rows[s2] = k(t3.rows[s2], t3.header.length).map(function(e4) {
                    return { text: e4 };
                  });
                for (i2 = t3.header.length, u2 = 0; u2 < i2; u2++)
                  t3.header[u2].tokens = this.lexer.inline(t3.header[u2].text);
                for (i2 = t3.rows.length, u2 = 0; u2 < i2; u2++)
                  for (r2 = t3.rows[u2], n2 = 0; n2 < r2.length; n2++)
                    r2[n2].tokens = this.lexer.inline(r2[n2].text);
                return t3;
              }
            }
          }, t2.lheading = function(e3) {
            e3 = this.rules.block.lheading.exec(e3);
            if (e3)
              return { type: "heading", raw: e3[0], depth: "=" === e3[2].charAt(0) ? 1 : 2, text: e3[1], tokens: this.lexer.inline(e3[1]) };
          }, t2.paragraph = function(e3) {
            var t3, e3 = this.rules.block.paragraph.exec(e3);
            if (e3)
              return t3 = "\n" === e3[1].charAt(e3[1].length - 1) ? e3[1].slice(0, -1) : e3[1], { type: "paragraph", raw: e3[0], text: t3, tokens: this.lexer.inline(t3) };
          }, t2.text = function(e3) {
            e3 = this.rules.block.text.exec(e3);
            if (e3)
              return { type: "text", raw: e3[0], text: e3[0], tokens: this.lexer.inline(e3[0]) };
          }, t2.escape = function(e3) {
            e3 = this.rules.inline.escape.exec(e3);
            if (e3)
              return { type: "escape", raw: e3[0], text: c(e3[1]) };
          }, t2.tag = function(e3) {
            e3 = this.rules.inline.tag.exec(e3);
            if (e3)
              return !this.lexer.state.inLink && /^<a /i.test(e3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(e3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e3[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: e3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : c(e3[0]) : e3[0] };
          }, t2.link = function(e3) {
            e3 = this.rules.inline.link.exec(e3);
            if (e3) {
              var t3 = e3[2].trim();
              if (!this.options.pedantic && /^</.test(t3)) {
                if (!/>$/.test(t3))
                  return;
                var u2 = E(t3.slice(0, -1), "\\");
                if ((t3.length - u2.length) % 2 == 0)
                  return;
              } else {
                u2 = function(e4, t4) {
                  if (-1 !== e4.indexOf(t4[1])) {
                    for (var u3 = e4.length, n3 = 0, r3 = 0; r3 < u3; r3++)
                      if ("\\" === e4[r3])
                        r3++;
                      else if (e4[r3] === t4[0])
                        n3++;
                      else if (e4[r3] === t4[1] && --n3 < 0)
                        return r3;
                  }
                  return -1;
                }(e3[2], "()");
                -1 < u2 && (r2 = (0 === e3[0].indexOf("!") ? 5 : 4) + e3[1].length + u2, e3[2] = e3[2].substring(0, u2), e3[0] = e3[0].substring(0, r2).trim(), e3[3] = "");
              }
              var n2, u2 = e3[2], r2 = "";
              return this.options.pedantic ? (n2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u2)) && (u2 = n2[1], r2 = n2[3]) : r2 = e3[3] ? e3[3].slice(1, -1) : "", u2 = u2.trim(), B(e3, { href: (u2 = /^</.test(u2) ? this.options.pedantic && !/>$/.test(t3) ? u2.slice(1) : u2.slice(1, -1) : u2) && u2.replace(this.rules.inline._escapes, "$1"), title: r2 && r2.replace(this.rules.inline._escapes, "$1") }, e3[0], this.lexer);
            }
          }, t2.reflink = function(e3, t3) {
            var u2;
            if (u2 = (u2 = this.rules.inline.reflink.exec(e3)) || this.rules.inline.nolink.exec(e3))
              return (e3 = t3[(e3 = (u2[2] || u2[1]).replace(/\s+/g, " ")).toLowerCase()]) ? B(u2, e3, u2[0], this.lexer) : { type: "text", raw: t3 = u2[0].charAt(0), text: t3 };
          }, t2.emStrong = function(e3, t3, u2) {
            void 0 === u2 && (u2 = "");
            var n2 = this.rules.inline.emStrong.lDelim.exec(e3);
            if (n2 && (!n2[3] || !u2.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
              var r2 = n2[1] || n2[2] || "";
              if (!r2 || "" === u2 || this.rules.inline.punctuation.exec(u2)) {
                var i2 = n2[0].length - 1, s2 = i2, l2 = 0, a2 = "*" === n2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for (a2.lastIndex = 0, t3 = t3.slice(-1 * e3.length + i2); null != (n2 = a2.exec(t3)); ) {
                  var o2, D2 = n2[1] || n2[2] || n2[3] || n2[4] || n2[5] || n2[6];
                  if (D2) {
                    if (o2 = D2.length, n2[3] || n2[4])
                      s2 += o2;
                    else if ((n2[5] || n2[6]) && i2 % 3 && !((i2 + o2) % 3))
                      l2 += o2;
                    else if (!(0 < (s2 -= o2)))
                      return o2 = Math.min(o2, o2 + s2 + l2), D2 = e3.slice(0, i2 + n2.index + (n2[0].length - D2.length) + o2), Math.min(i2, o2) % 2 ? (o2 = D2.slice(1, -1), { type: "em", raw: D2, text: o2, tokens: this.lexer.inlineTokens(o2) }) : (o2 = D2.slice(2, -2), { type: "strong", raw: D2, text: o2, tokens: this.lexer.inlineTokens(o2) });
                  }
                }
              }
            }
          }, t2.codespan = function(e3) {
            var t3, u2, n2, e3 = this.rules.inline.code.exec(e3);
            if (e3)
              return n2 = e3[2].replace(/\n/g, " "), t3 = /[^ ]/.test(n2), u2 = /^ /.test(n2) && / $/.test(n2), n2 = c(n2 = t3 && u2 ? n2.substring(1, n2.length - 1) : n2, true), { type: "codespan", raw: e3[0], text: n2 };
          }, t2.br = function(e3) {
            e3 = this.rules.inline.br.exec(e3);
            if (e3)
              return { type: "br", raw: e3[0] };
          }, t2.del = function(e3) {
            e3 = this.rules.inline.del.exec(e3);
            if (e3)
              return { type: "del", raw: e3[0], text: e3[2], tokens: this.lexer.inlineTokens(e3[2]) };
          }, t2.autolink = function(e3, t3) {
            var u2, e3 = this.rules.inline.autolink.exec(e3);
            if (e3)
              return t3 = "@" === e3[2] ? "mailto:" + (u2 = c(this.options.mangle ? t3(e3[1]) : e3[1])) : u2 = c(e3[1]), { type: "link", raw: e3[0], text: u2, href: t3, tokens: [{ type: "text", raw: u2, text: u2 }] };
          }, t2.url = function(e3, t3) {
            var u2, n2, r2, i2;
            if (u2 = this.rules.inline.url.exec(e3)) {
              if ("@" === u2[2])
                r2 = "mailto:" + (n2 = c(this.options.mangle ? t3(u2[0]) : u2[0]));
              else {
                for (; i2 = u2[0], u2[0] = this.rules.inline._backpedal.exec(u2[0])[0], i2 !== u2[0]; )
                  ;
                n2 = c(u2[0]), r2 = "www." === u2[1] ? "http://" + u2[0] : u2[0];
              }
              return { type: "link", raw: u2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
            }
          }, t2.inlineText = function(e3, t3) {
            e3 = this.rules.inline.text.exec(e3);
            if (e3)
              return t3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : c(e3[0]) : e3[0] : c(this.options.smartypants ? t3(e3[0]) : e3[0]), { type: "text", raw: e3[0], text: t3 };
          }, e2;
        }(), y = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: d, lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ }, v = (y.def = f(y.def).replace("label", y._label).replace("title", y._title).getRegex(), y.bullet = /(?:[*+-]|\d{1,9}[.)])/, y.listItemStart = f(/^( *)(bull) */).replace("bull", y.bullet).getRegex(), y.list = f(y.list).replace(/bull/g, y.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + y.def.source + ")").getRegex(), y._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", y._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, y.html = f(y.html, "i").replace("comment", y._comment).replace("tag", y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), y.paragraph = f(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.blockquote = f(y.blockquote).replace("paragraph", y.paragraph).getRegex(), y.normal = C({}, y), y.gfm = C({}, y.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), y.gfm.table = f(y.gfm.table).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.gfm.paragraph = f(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", y.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex(), y.pedantic = C({}, y.normal, { html: f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", y._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: d, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: f(y.normal._paragraph).replace("hr", y.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", y.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() }), { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: d, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/, rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: d, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ });
        function L(e2) {
          return e2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
        }
        function _(e2) {
          for (var t2, u2 = "", n2 = e2.length, r2 = 0; r2 < n2; r2++)
            t2 = e2.charCodeAt(r2), u2 += "&#" + (t2 = 0.5 < Math.random() ? "x" + t2.toString(16) : t2) + ";";
          return u2;
        }
        v._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", v.punctuation = f(v.punctuation).replace(/punctuation/g, v._punctuation).getRegex(), v.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, v.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, v._comment = f(y._comment).replace("(?:-->|$)", "-->").getRegex(), v.emStrong.lDelim = f(v.emStrong.lDelim).replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimAst = f(v.emStrong.rDelimAst, "g").replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimUnd = f(v.emStrong.rDelimUnd, "g").replace(/punct/g, v._punctuation).getRegex(), v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, v._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, v.autolink = f(v.autolink).replace("scheme", v._scheme).replace("email", v._email).getRegex(), v._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, v.tag = f(v.tag).replace("comment", v._comment).replace("attribute", v._attribute).getRegex(), v._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, v._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, v.link = f(v.link).replace("label", v._label).replace("href", v._href).replace("title", v._title).getRegex(), v.reflink = f(v.reflink).replace("label", v._label).replace("ref", y._label).getRegex(), v.nolink = f(v.nolink).replace("ref", y._label).getRegex(), v.reflinkSearch = f(v.reflinkSearch, "g").replace("reflink", v.reflink).replace("nolink", v.nolink).getRegex(), v.normal = C({}, v), v.pedantic = C({}, v.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", v._label).getRegex(), reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v._label).getRegex() }), v.gfm = C({}, v.normal, { escape: f(v.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), v.gfm.url = f(v.gfm.url, "i").replace("email", v.gfm._extended_email).getRegex(), v.breaks = C({}, v.gfm, { br: f(v.br).replace("{2,}", "*").getRegex(), text: f(v.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
        var z = function() {
          function u2(e3) {
            this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || r.defaults, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, (this.tokenizer.lexer = this).inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
            e3 = { block: y.normal, inline: v.normal };
            this.options.pedantic ? (e3.block = y.pedantic, e3.inline = v.pedantic) : this.options.gfm && (e3.block = y.gfm, this.options.breaks ? e3.inline = v.breaks : e3.inline = v.gfm), this.tokenizer.rules = e3;
          }
          u2.lex = function(e3, t3) {
            return new u2(t3).lex(e3);
          }, u2.lexInline = function(e3, t3) {
            return new u2(t3).inlineTokens(e3);
          };
          var e2, t2, n2 = u2.prototype;
          return n2.lex = function(e3) {
            var t3;
            for (e3 = e3.replace(/\r\n|\r/g, "\n"), this.blockTokens(e3, this.tokens); t3 = this.inlineQueue.shift(); )
              this.inlineTokens(t3.src, t3.tokens);
            return this.tokens;
          }, n2.blockTokens = function(r2, t3) {
            var u3, e3, i2, n3, s2 = this;
            for (void 0 === t3 && (t3 = []), r2 = this.options.pedantic ? r2.replace(/\t/g, "    ").replace(/^ +$/gm, "") : r2.replace(/^( *)(\t+)/gm, function(e4, t4, u4) {
              return t4 + "    ".repeat(u4.length);
            }); r2; )
              if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(e4) {
                return !!(u3 = e4.call({ lexer: s2 }, r2, t3)) && (r2 = r2.substring(u3.raw.length), t3.push(u3), true);
              }))) {
                if (u3 = this.tokenizer.space(r2))
                  r2 = r2.substring(u3.raw.length), 1 === u3.raw.length && 0 < t3.length ? t3[t3.length - 1].raw += "\n" : t3.push(u3);
                else if (u3 = this.tokenizer.code(r2))
                  r2 = r2.substring(u3.raw.length), !(e3 = t3[t3.length - 1]) || "paragraph" !== e3.type && "text" !== e3.type ? t3.push(u3) : (e3.raw += "\n" + u3.raw, e3.text += "\n" + u3.text, this.inlineQueue[this.inlineQueue.length - 1].src = e3.text);
                else if (u3 = this.tokenizer.fences(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.heading(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.hr(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.blockquote(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.list(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.html(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.def(r2))
                  r2 = r2.substring(u3.raw.length), !(e3 = t3[t3.length - 1]) || "paragraph" !== e3.type && "text" !== e3.type ? this.tokens.links[u3.tag] || (this.tokens.links[u3.tag] = { href: u3.href, title: u3.title }) : (e3.raw += "\n" + u3.raw, e3.text += "\n" + u3.raw, this.inlineQueue[this.inlineQueue.length - 1].src = e3.text);
                else if (u3 = this.tokenizer.table(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.lheading(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (i2 = r2, this.options.extensions && this.options.extensions.startBlock && !function() {
                  var t4 = 1 / 0, u4 = r2.slice(1), n4 = void 0;
                  s2.options.extensions.startBlock.forEach(function(e4) {
                    "number" == typeof (n4 = e4.call({ lexer: this }, u4)) && 0 <= n4 && (t4 = Math.min(t4, n4));
                  }), t4 < 1 / 0 && 0 <= t4 && (i2 = r2.substring(0, t4 + 1));
                }(), this.state.top && (u3 = this.tokenizer.paragraph(i2)))
                  e3 = t3[t3.length - 1], n3 && "paragraph" === e3.type ? (e3.raw += "\n" + u3.raw, e3.text += "\n" + u3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e3.text) : t3.push(u3), n3 = i2.length !== r2.length, r2 = r2.substring(u3.raw.length);
                else if (u3 = this.tokenizer.text(r2))
                  r2 = r2.substring(u3.raw.length), (e3 = t3[t3.length - 1]) && "text" === e3.type ? (e3.raw += "\n" + u3.raw, e3.text += "\n" + u3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = e3.text) : t3.push(u3);
                else if (r2) {
                  var l2 = "Infinite loop on byte: " + r2.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(l2);
                    break;
                  }
                  throw new Error(l2);
                }
              }
            return this.state.top = true, t3;
          }, n2.inline = function(e3, t3) {
            return this.inlineQueue.push({ src: e3, tokens: t3 = void 0 === t3 ? [] : t3 }), t3;
          }, n2.inlineTokens = function(r2, t3) {
            var u3, e3, i2, n3, s2, l2, a2 = this, o2 = (void 0 === t3 && (t3 = []), r2);
            if (this.tokens.links) {
              var D2 = Object.keys(this.tokens.links);
              if (0 < D2.length)
                for (; null != (n3 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)); )
                  D2.includes(n3[0].slice(n3[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, n3.index) + "[" + b("a", n3[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (n3 = this.tokenizer.rules.inline.blockSkip.exec(o2)); )
              o2 = o2.slice(0, n3.index) + "[" + b("a", n3[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; null != (n3 = this.tokenizer.rules.inline.escapedEmSt.exec(o2)); )
              o2 = o2.slice(0, n3.index + n3[0].length - 2) + "++" + o2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
            for (; r2; )
              if (s2 || (l2 = ""), s2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(e4) {
                return !!(u3 = e4.call({ lexer: a2 }, r2, t3)) && (r2 = r2.substring(u3.raw.length), t3.push(u3), true);
              }))) {
                if (u3 = this.tokenizer.escape(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.tag(r2))
                  r2 = r2.substring(u3.raw.length), (e3 = t3[t3.length - 1]) && "text" === u3.type && "text" === e3.type ? (e3.raw += u3.raw, e3.text += u3.text) : t3.push(u3);
                else if (u3 = this.tokenizer.link(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.reflink(r2, this.tokens.links))
                  r2 = r2.substring(u3.raw.length), (e3 = t3[t3.length - 1]) && "text" === u3.type && "text" === e3.type ? (e3.raw += u3.raw, e3.text += u3.text) : t3.push(u3);
                else if (u3 = this.tokenizer.emStrong(r2, o2, l2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.codespan(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.br(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.del(r2))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (u3 = this.tokenizer.autolink(r2, _))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (!this.state.inLink && (u3 = this.tokenizer.url(r2, _)))
                  r2 = r2.substring(u3.raw.length), t3.push(u3);
                else if (i2 = r2, this.options.extensions && this.options.extensions.startInline && !function() {
                  var t4 = 1 / 0, u4 = r2.slice(1), n4 = void 0;
                  a2.options.extensions.startInline.forEach(function(e4) {
                    "number" == typeof (n4 = e4.call({ lexer: this }, u4)) && 0 <= n4 && (t4 = Math.min(t4, n4));
                  }), t4 < 1 / 0 && 0 <= t4 && (i2 = r2.substring(0, t4 + 1));
                }(), u3 = this.tokenizer.inlineText(i2, L))
                  r2 = r2.substring(u3.raw.length), "_" !== u3.raw.slice(-1) && (l2 = u3.raw.slice(-1)), s2 = true, (e3 = t3[t3.length - 1]) && "text" === e3.type ? (e3.raw += u3.raw, e3.text += u3.text) : t3.push(u3);
                else if (r2) {
                  var c2 = "Infinite loop on byte: " + r2.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(c2);
                    break;
                  }
                  throw new Error(c2);
                }
              }
            return t3;
          }, n2 = u2, t2 = [{ key: "rules", get: function() {
            return { block: y, inline: v };
          } }], (e2 = null) && i(n2.prototype, e2), t2 && i(n2, t2), Object.defineProperty(n2, "prototype", { writable: false }), u2;
        }(), $ = function() {
          function e2(e3) {
            this.options = e3 || r.defaults;
          }
          var t2 = e2.prototype;
          return t2.code = function(e3, t3, u2) {
            var n2, t3 = (t3 || "").match(/\S*/)[0];
            return this.options.highlight && null != (n2 = this.options.highlight(e3, t3)) && n2 !== e3 && (u2 = true, e3 = n2), e3 = e3.replace(/\n$/, "") + "\n", t3 ? '<pre><code class="' + this.options.langPrefix + c(t3) + '">' + (u2 ? e3 : c(e3, true)) + "</code></pre>\n" : "<pre><code>" + (u2 ? e3 : c(e3, true)) + "</code></pre>\n";
          }, t2.blockquote = function(e3) {
            return "<blockquote>\n" + e3 + "</blockquote>\n";
          }, t2.html = function(e3) {
            return e3;
          }, t2.heading = function(e3, t3, u2, n2) {
            return this.options.headerIds ? "<h" + t3 + ' id="' + (this.options.headerPrefix + n2.slug(u2)) + '">' + e3 + "</h" + t3 + ">\n" : "<h" + t3 + ">" + e3 + "</h" + t3 + ">\n";
          }, t2.hr = function() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }, t2.list = function(e3, t3, u2) {
            var n2 = t3 ? "ol" : "ul";
            return "<" + n2 + (t3 && 1 !== u2 ? ' start="' + u2 + '"' : "") + ">\n" + e3 + "</" + n2 + ">\n";
          }, t2.listitem = function(e3) {
            return "<li>" + e3 + "</li>\n";
          }, t2.checkbox = function(e3) {
            return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
          }, t2.paragraph = function(e3) {
            return "<p>" + e3 + "</p>\n";
          }, t2.table = function(e3, t3) {
            return "<table>\n<thead>\n" + e3 + "</thead>\n" + (t3 = t3 && "<tbody>" + t3 + "</tbody>") + "</table>\n";
          }, t2.tablerow = function(e3) {
            return "<tr>\n" + e3 + "</tr>\n";
          }, t2.tablecell = function(e3, t3) {
            var u2 = t3.header ? "th" : "td";
            return (t3.align ? "<" + u2 + ' align="' + t3.align + '">' : "<" + u2 + ">") + e3 + "</" + u2 + ">\n";
          }, t2.strong = function(e3) {
            return "<strong>" + e3 + "</strong>";
          }, t2.em = function(e3) {
            return "<em>" + e3 + "</em>";
          }, t2.codespan = function(e3) {
            return "<code>" + e3 + "</code>";
          }, t2.br = function() {
            return this.options.xhtml ? "<br/>" : "<br>";
          }, t2.del = function(e3) {
            return "<del>" + e3 + "</del>";
          }, t2.link = function(e3, t3, u2) {
            return null === (e3 = F(this.options.sanitize, this.options.baseUrl, e3)) ? u2 : (e3 = '<a href="' + e3 + '"', t3 && (e3 += ' title="' + t3 + '"'), e3 + ">" + u2 + "</a>");
          }, t2.image = function(e3, t3, u2) {
            return null === (e3 = F(this.options.sanitize, this.options.baseUrl, e3)) ? u2 : (e3 = '<img src="' + e3 + '" alt="' + u2 + '"', t3 && (e3 += ' title="' + t3 + '"'), e3 + (this.options.xhtml ? "/>" : ">"));
          }, t2.text = function(e3) {
            return e3;
          }, e2;
        }(), S = function() {
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
        }(), T = function() {
          function e2() {
            this.seen = {};
          }
          var t2 = e2.prototype;
          return t2.serialize = function(e3) {
            return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
          }, t2.getNextSafeSlug = function(e3, t3) {
            var u2 = e3, n2 = 0;
            if (this.seen.hasOwnProperty(u2))
              for (n2 = this.seen[e3]; u2 = e3 + "-" + ++n2, this.seen.hasOwnProperty(u2); )
                ;
            return t3 || (this.seen[e3] = n2, this.seen[u2] = 0), u2;
          }, t2.slug = function(e3, t3) {
            void 0 === t3 && (t3 = {});
            e3 = this.serialize(e3);
            return this.getNextSafeSlug(e3, t3.dryrun);
          }, e2;
        }(), R = function() {
          function u2(e3) {
            this.options = e3 || r.defaults, this.options.renderer = this.options.renderer || new $(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new S(), this.slugger = new T();
          }
          u2.parse = function(e3, t2) {
            return new u2(t2).parse(e3);
          }, u2.parseInline = function(e3, t2) {
            return new u2(t2).parseInline(e3);
          };
          var e2 = u2.prototype;
          return e2.parse = function(e3, t2) {
            void 0 === t2 && (t2 = true);
            for (var u3, n2, r2, i2, s2, l2, a2, o2, D2, c2, h2, p2, f2, g2, F2, A2, d2 = "", C2 = e3.length, k2 = 0; k2 < C2; k2++)
              if (o2 = e3[k2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o2.type] && (false !== (A2 = this.options.extensions.renderers[o2.type].call({ parser: this }, o2)) || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o2.type)))
                d2 += A2 || "";
              else
                switch (o2.type) {
                  case "space":
                    continue;
                  case "hr":
                    d2 += this.renderer.hr();
                    continue;
                  case "heading":
                    d2 += this.renderer.heading(this.parseInline(o2.tokens), o2.depth, x(this.parseInline(o2.tokens, this.textRenderer)), this.slugger);
                    continue;
                  case "code":
                    d2 += this.renderer.code(o2.text, o2.lang, o2.escaped);
                    continue;
                  case "table":
                    for (l2 = D2 = "", r2 = o2.header.length, u3 = 0; u3 < r2; u3++)
                      l2 += this.renderer.tablecell(this.parseInline(o2.header[u3].tokens), { header: true, align: o2.align[u3] });
                    for (D2 += this.renderer.tablerow(l2), a2 = "", r2 = o2.rows.length, u3 = 0; u3 < r2; u3++) {
                      for (l2 = "", i2 = (s2 = o2.rows[u3]).length, n2 = 0; n2 < i2; n2++)
                        l2 += this.renderer.tablecell(this.parseInline(s2[n2].tokens), { header: false, align: o2.align[n2] });
                      a2 += this.renderer.tablerow(l2);
                    }
                    d2 += this.renderer.table(D2, a2);
                    continue;
                  case "blockquote":
                    a2 = this.parse(o2.tokens), d2 += this.renderer.blockquote(a2);
                    continue;
                  case "list":
                    for (D2 = o2.ordered, E2 = o2.start, c2 = o2.loose, r2 = o2.items.length, a2 = "", u3 = 0; u3 < r2; u3++)
                      f2 = (p2 = o2.items[u3]).checked, g2 = p2.task, h2 = "", p2.task && (F2 = this.renderer.checkbox(f2), c2 ? 0 < p2.tokens.length && "paragraph" === p2.tokens[0].type ? (p2.tokens[0].text = F2 + " " + p2.tokens[0].text, p2.tokens[0].tokens && 0 < p2.tokens[0].tokens.length && "text" === p2.tokens[0].tokens[0].type && (p2.tokens[0].tokens[0].text = F2 + " " + p2.tokens[0].tokens[0].text)) : p2.tokens.unshift({ type: "text", text: F2 }) : h2 += F2), h2 += this.parse(p2.tokens, c2), a2 += this.renderer.listitem(h2, g2, f2);
                    d2 += this.renderer.list(a2, D2, E2);
                    continue;
                  case "html":
                    d2 += this.renderer.html(o2.text);
                    continue;
                  case "paragraph":
                    d2 += this.renderer.paragraph(this.parseInline(o2.tokens));
                    continue;
                  case "text":
                    for (a2 = o2.tokens ? this.parseInline(o2.tokens) : o2.text; k2 + 1 < C2 && "text" === e3[k2 + 1].type; )
                      a2 += "\n" + ((o2 = e3[++k2]).tokens ? this.parseInline(o2.tokens) : o2.text);
                    d2 += t2 ? this.renderer.paragraph(a2) : a2;
                    continue;
                  default:
                    var E2 = 'Token with "' + o2.type + '" type was not found.';
                    if (this.options.silent)
                      return void console.error(E2);
                    throw new Error(E2);
                }
            return d2;
          }, e2.parseInline = function(e3, t2) {
            t2 = t2 || this.renderer;
            for (var u3, n2, r2 = "", i2 = e3.length, s2 = 0; s2 < i2; s2++)
              if (u3 = e3[s2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u3.type] && (false !== (n2 = this.options.extensions.renderers[u3.type].call({ parser: this }, u3)) || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(u3.type)))
                r2 += n2 || "";
              else
                switch (u3.type) {
                  case "escape":
                    r2 += t2.text(u3.text);
                    break;
                  case "html":
                    r2 += t2.html(u3.text);
                    break;
                  case "link":
                    r2 += t2.link(u3.href, u3.title, this.parseInline(u3.tokens, t2));
                    break;
                  case "image":
                    r2 += t2.image(u3.href, u3.title, u3.text);
                    break;
                  case "strong":
                    r2 += t2.strong(this.parseInline(u3.tokens, t2));
                    break;
                  case "em":
                    r2 += t2.em(this.parseInline(u3.tokens, t2));
                    break;
                  case "codespan":
                    r2 += t2.codespan(u3.text);
                    break;
                  case "br":
                    r2 += t2.br();
                    break;
                  case "del":
                    r2 += t2.del(this.parseInline(u3.tokens, t2));
                    break;
                  case "text":
                    r2 += t2.text(u3.text);
                    break;
                  default:
                    var l2 = 'Token with "' + u3.type + '" type was not found.';
                    if (this.options.silent)
                      return void console.error(l2);
                    throw new Error(l2);
                }
            return r2;
          }, u2;
        }();
        function I(e2, u2, n2) {
          if (null == e2)
            throw new Error("marked(): input parameter is undefined or null");
          if ("string" != typeof e2)
            throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
          if ("function" == typeof u2 && (n2 = u2, u2 = null), m(u2 = C({}, I.defaults, u2 || {})), n2) {
            var r2, i2 = u2.highlight;
            try {
              r2 = z.lex(e2, u2);
            } catch (e3) {
              return n2(e3);
            }
            var s2, l2 = function(t3) {
              var e3;
              if (!t3)
                try {
                  u2.walkTokens && I.walkTokens(r2, u2.walkTokens), e3 = R.parse(r2, u2);
                } catch (e4) {
                  t3 = e4;
                }
              return u2.highlight = i2, t3 ? n2(t3) : n2(null, e3);
            };
            return !i2 || i2.length < 3 ? l2() : (delete u2.highlight, r2.length ? (s2 = 0, I.walkTokens(r2, function(u3) {
              "code" === u3.type && (s2++, setTimeout(function() {
                i2(u3.text, u3.lang, function(e3, t3) {
                  if (e3)
                    return l2(e3);
                  null != t3 && t3 !== u3.text && (u3.text = t3, u3.escaped = true), 0 === --s2 && l2();
                });
              }, 0));
            }), void (0 === s2 && l2())) : l2());
          }
          function t2(e3) {
            if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", u2.silent)
              return "<p>An error occurred:</p><pre>" + c(e3.message + "", true) + "</pre>";
            throw e3;
          }
          try {
            var a2 = z.lex(e2, u2);
            if (u2.walkTokens) {
              if (u2.async)
                return Promise.all(I.walkTokens(a2, u2.walkTokens)).then(function() {
                  return R.parse(a2, u2);
                }).catch(t2);
              I.walkTokens(a2, u2.walkTokens);
            }
            return R.parse(a2, u2);
          } catch (e3) {
            t2(e3);
          }
        }
        I.options = I.setOptions = function(e2) {
          return C(I.defaults, e2), e2 = I.defaults, r.defaults = e2, I;
        }, I.getDefaults = e, I.defaults = r.defaults, I.use = function() {
          for (var o2 = I.defaults.extensions || { renderers: {}, childTokens: {} }, e2 = arguments.length, t2 = new Array(e2), u2 = 0; u2 < e2; u2++)
            t2[u2] = arguments[u2];
          t2.forEach(function(s2) {
            var u3, e3 = C({}, s2);
            if (e3.async = I.defaults.async || e3.async, s2.extensions && (s2.extensions.forEach(function(r2) {
              if (!r2.name)
                throw new Error("extension name required");
              var i2;
              if (r2.renderer && (i2 = o2.renderers[r2.name], o2.renderers[r2.name] = i2 ? function() {
                for (var e4 = arguments.length, t4 = new Array(e4), u4 = 0; u4 < e4; u4++)
                  t4[u4] = arguments[u4];
                var n3 = r2.renderer.apply(this, t4);
                return n3 = false === n3 ? i2.apply(this, t4) : n3;
              } : r2.renderer), r2.tokenizer) {
                if (!r2.level || "block" !== r2.level && "inline" !== r2.level)
                  throw new Error("extension level must be 'block' or 'inline'");
                o2[r2.level] ? o2[r2.level].unshift(r2.tokenizer) : o2[r2.level] = [r2.tokenizer], r2.start && ("block" === r2.level ? o2.startBlock ? o2.startBlock.push(r2.start) : o2.startBlock = [r2.start] : "inline" === r2.level && (o2.startInline ? o2.startInline.push(r2.start) : o2.startInline = [r2.start]));
              }
              r2.childTokens && (o2.childTokens[r2.name] = r2.childTokens);
            }), e3.extensions = o2), s2.renderer) {
              var t3, l2 = I.defaults.renderer || new $();
              for (t3 in s2.renderer)
                !function(r2) {
                  var i2 = l2[r2];
                  l2[r2] = function() {
                    for (var e4 = arguments.length, t4 = new Array(e4), u4 = 0; u4 < e4; u4++)
                      t4[u4] = arguments[u4];
                    var n3 = s2.renderer[r2].apply(l2, t4);
                    return n3 = false === n3 ? i2.apply(l2, t4) : n3;
                  };
                }(t3);
              e3.renderer = l2;
            }
            if (s2.tokenizer) {
              var n2, a2 = I.defaults.tokenizer || new w();
              for (n2 in s2.tokenizer)
                !function(r2) {
                  var i2 = a2[r2];
                  a2[r2] = function() {
                    for (var e4 = arguments.length, t4 = new Array(e4), u4 = 0; u4 < e4; u4++)
                      t4[u4] = arguments[u4];
                    var n3 = s2.tokenizer[r2].apply(a2, t4);
                    return n3 = false === n3 ? i2.apply(a2, t4) : n3;
                  };
                }(n2);
              e3.tokenizer = a2;
            }
            s2.walkTokens && (u3 = I.defaults.walkTokens, e3.walkTokens = function(e4) {
              var t4 = [];
              return t4.push(s2.walkTokens.call(this, e4)), t4 = u3 ? t4.concat(u3.call(this, e4)) : t4;
            }), I.setOptions(e3);
          });
        }, I.walkTokens = function(e2, l2) {
          for (var a2, o2 = [], t2 = D(e2); !(a2 = t2()).done; )
            !function() {
              var t3 = a2.value;
              switch (o2 = o2.concat(l2.call(I, t3)), t3.type) {
                case "table":
                  for (var e3 = D(t3.header); !(u2 = e3()).done; ) {
                    var u2 = u2.value;
                    o2 = o2.concat(I.walkTokens(u2.tokens, l2));
                  }
                  for (var n2, r2 = D(t3.rows); !(n2 = r2()).done; )
                    for (var i2 = D(n2.value); !(s2 = i2()).done; ) {
                      var s2 = s2.value;
                      o2 = o2.concat(I.walkTokens(s2.tokens, l2));
                    }
                  break;
                case "list":
                  o2 = o2.concat(I.walkTokens(t3.items, l2));
                  break;
                default:
                  I.defaults.extensions && I.defaults.extensions.childTokens && I.defaults.extensions.childTokens[t3.type] ? I.defaults.extensions.childTokens[t3.type].forEach(function(e4) {
                    o2 = o2.concat(I.walkTokens(t3[e4], l2));
                  }) : t3.tokens && (o2 = o2.concat(I.walkTokens(t3.tokens, l2)));
              }
            }();
          return o2;
        }, I.parseInline = function(e2, t2) {
          if (null == e2)
            throw new Error("marked.parseInline(): input parameter is undefined or null");
          if ("string" != typeof e2)
            throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
          m(t2 = C({}, I.defaults, t2 || {}));
          try {
            var u2 = z.lexInline(e2, t2);
            return t2.walkTokens && I.walkTokens(u2, t2.walkTokens), R.parseInline(u2, t2);
          } catch (e3) {
            if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
              return "<p>An error occurred:</p><pre>" + c(e3.message + "", true) + "</pre>";
            throw e3;
          }
        }, I.Parser = R, I.parser = R.parse, I.Renderer = $, I.TextRenderer = S, I.Lexer = z, I.lexer = z.lex, I.Tokenizer = w, I.Slugger = T;
        var d = (I.parse = I).options, P = I.setOptions, Q = I.use, U = I.walkTokens, M = I.parseInline, N = I, X = R.parse, G = z.lex;
        r.Lexer = z, r.Parser = R, r.Renderer = $, r.Slugger = T, r.TextRenderer = S, r.Tokenizer = w, r.getDefaults = e, r.lexer = G, r.marked = I, r.options = d, r.parse = N, r.parseInline = M, r.parser = X, r.setOptions = P, r.use = Q, r.walkTokens = U;
      });
    }
  });
  require_markedjs();
})();
//# sourceMappingURL=assets/markedjs.js.map
