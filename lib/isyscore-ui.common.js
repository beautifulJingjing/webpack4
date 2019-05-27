module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/util");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/mixins/emitter");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/merge");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/resize-event");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/create");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/vue-popper");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/clickoutside");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/mimetypes");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/popup");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/after-leave");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/input");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/symbol/iterator");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/button");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/mixins/migrating");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/symbol");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/mixins/focus");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/tag");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/scrollbar");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/scroll-into-view");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/shared");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/utils/scrollbar-width");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("isyscore-ui/lib/checkbox");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__);





/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";

    "object" == ( false ? undefined : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(module)) && "object" == babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
    "use strict";

    var n = [],
        r = e.document,
        i = babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default.a,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    },
        y = function e(t) {
        return null != t && t === t.window;
    },
        v = { type: !0, src: !0, noModule: !0 };

    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) {
            n[i] && (o[i] = n[i]);
        }t.head.appendChild(o).parentNode.removeChild(o);
    }

    function x(e) {
        return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e);
    }

    var b = "3.3.1",
        w = function w(e, t) {
        return new w.fn.init(e, t);
    },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
            return o.call(this);
        }, get: function get(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t;
        }, each: function each(e) {
            return w.each(this, e);
        }, map: function map(e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        }, slice: function slice() {
            return this.pushStack(o.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) for (t in e) {
                n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            }
        }return a;
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
            throw new Error(e);
        }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
        }, isEmptyObject: function isEmptyObject(e) {
            var t;
            for (t in e) {
                return !1;
            }return !0;
        }, globalEval: function globalEval(e) {
            m(e);
        }, each: function each(e, t) {
            var n,
                r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break;
                }
            } else for (r in e) {
                if (!1 === t.call(e[r], r, e[r])) break;
            }return e;
        }, trim: function trim(e) {
            return null == e ? "" : (e + "").replace(T, "");
        }, makeArray: function makeArray(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        }, merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
                e[i++] = t[r];
            }return e.length = i, e;
        }, grep: function grep(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            }return i;
        }, map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                s = [];
            if (C(e)) for (r = e.length; o < r; o++) {
                null != (i = t(e[o], o, n)) && s.push(i);
            } else for (o in e) {
                null != (i = t(e[o], o, n)) && s.push(i);
            }return a.apply([], s);
        }, guid: 1, support: h
    }), "function" == typeof babel_runtime_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default.a && (w.fn[babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default.a] = n[babel_runtime_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default.a]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    var E = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function D(e, t) {
            return e === t && (f = !0), 0;
        },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function O(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) return n;
            }return -1;
        },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function ee(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
            return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
            p();
        },
            ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, { dir: "parentNode", next: "legend" });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t));
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]) {}
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r;
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) {
                            h[s] = "#" + c + " " + ve(h[s]);
                        }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }

            return t;
        }

        function se(e) {
            return e[b] = !0, e;
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) {
                r.attrHandle[n[i]] = t;
            }
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) {
                if (n === t) return -1;
            }return e ? 1 : -1;
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i,
                        o = e([], n.length, t),
                        a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }
                });
            });
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }

        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                    }
                    return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }return r;
                }
                return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) while (t = t.parentNode) {
                    if (t === e) return !0;
                }return !1;
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) {
                    a.unshift(n);
                }n = t;
                while (n = n.parentNode) {
                    s.unshift(n);
                }while (a[r] === s[r]) {
                    r++;
                }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) {
                    t === e[o] && (i = r.push(o));
                }while (i--) {
                    e.splice(r[i], 1);
                }
            }
            return c = null, e;
        }, i = oe.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += i(e);
                    }
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while (t = e[r++]) {
                n += i(t);
            }return n;
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" }
            },
            preFilter: {
                ATTR: function ATTR(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                    var t,
                        n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function TAG(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function CLASS(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                }, CHILD: function CHILD(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, u) {
                        var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    }h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break;
                                    }
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            }return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r,
                            o = i(e, t),
                            a = o.length;
                        while (a--) {
                            e[r = O(e, o[a])] = !(n[r] = o[a]);
                        }
                    }) : function (e) {
                        return i(e, 0, n);
                    }) : i;
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o,
                            a = r(e, null, i, []),
                            s = e.length;
                        while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }), target: function target(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                }, root: function root(e) {
                    return e === h;
                }, focus: function focus(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(e) {
                    return !r.pseudos.empty(e);
                }, header: function header(e) {
                    return Y.test(e.nodeName);
                }, input: function input(e) {
                    return G.test(e.nodeName);
                }, button: function button(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: he(function () {
                    return [0];
                }), last: he(function (e, t) {
                    return [t - 1];
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) {
                        e.push(r);
                    }return e;
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) {
                        e.push(r);
                    }return e;
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            r.pseudos[t] = fe(t);
        }for (t in { submit: !0, reset: !0 }) {
            r.pseudos[t] = pe(t);
        }function ye() {}

        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
            var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) {
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                }if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
                r += e[t].value;
            }return r;
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || a) return e(t, n, i);
                }return !1;
            } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p = [T, s];
                if (u) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    }
                } else while (t = t[r]) {
                    if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                        if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                }return !1;
            };
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) return !1;
                }return !0;
            } : e[0];
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
            }return n;
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            }return a;
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) {
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) {
                                (f = v[c]) && l.push(y[c] = f);
                            }i(null, v = [], l, u);
                        }
                        c = v.length;
                        while (c--) {
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t;
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1;
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i;
            }]; u < o; u++) {
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) {
                            if (r.relative[e[i].type]) break;
                        }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }
                    p.push(n);
                }
            }return xe(p);
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    y,
                    v = 0,
                    m = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) {
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break;
                            }
                        }c && (T = E);
                    }
                    n && ((f = !y && f) && v--, _o && x.push(f));
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) {
                        y(x, b, a, s);
                    }if (_o) {
                        if (v > 0) while (m--) {
                            x[m] || b[m] || (b[m] = j.call(u));
                        }b = we(b);
                    }
                    L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }
                return c && (T = E, l = w), x;
            };
            return n ? se(o) : o;
        }

        return s = oe.compile = function (e, t) {
            var n,
                r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) {
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                }(o = S(e, Ee(i, r))).selector = e;
            }
            return o;
        }, u = oe.select = function (e, t, n, i) {
            var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break;
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function k(e, t, n) {
        var r = [],
            i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) {
            if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;
                r.push(e);
            }
        }return r;
    },
        S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }return n;
    },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }

    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({
        find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) {
                    if (w.contains(i[t], this)) return !0;
                }
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) {
                w.find(e, i[t], n);
            }return r > 1 ? w.uniqueSort(n) : n;
        }, filter: function filter(e) {
            return this.pushStack(j(this, e || [], !1));
        }, not: function not(e) {
            return this.pushStack(j(this, e || [], !0));
        }, is: function is(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        }
    });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
                    g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                }return this;
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function has(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (w.contains(this, t[e])) return !0;
                }
            });
        }, closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e)) for (; r < i; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                }
            }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        }, index: function index(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        }, addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) {}
        return e;
    }

    w.each({
        parent: function parent(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
            return k(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
            return k(e, "parentNode", n);
        }, next: function next(e) {
            return P(e, "nextSibling");
        }, prev: function prev(e) {
            return P(e, "previousSibling");
        }, nextAll: function nextAll(e) {
            return k(e, "nextSibling");
        }, prevAll: function prevAll(e) {
            return k(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
            return k(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
            return k(e, "previousSibling", n);
        }, siblings: function siblings(e) {
            return S((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
            return S(e.firstChild);
        }, contents: function contents(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }

    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) {
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                }
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = {
            add: function add() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            }, remove: function remove() {
                return w.each(arguments, function (e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) {
                        o.splice(n, 1), n <= s && s--;
                    }
                }), this;
            }, has: function has(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
            }, empty: function empty() {
                return o && (o = []), this;
            }, disable: function disable() {
                return i = a = [], o = n = "", this;
            }, disabled: function disabled() {
                return !o;
            }, lock: function lock() {
                return i = a = [], n || t || (o = n = ""), this;
            }, locked: function locked() {
                return !!i;
            }, fireWith: function fireWith(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
            }, fire: function fire() {
                return l.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!r;
            }
        };
        return l;
    };
    function I(e) {
        return e;
    }

    function W(e) {
        throw e;
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }

    w.extend({
        Deferred: function Deferred(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                state: function state() {
                    return r;
                }, always: function always() {
                    return o.done(arguments).fail(arguments), this;
                }, "catch": function _catch(e) {
                    return i.then(null, e);
                }, pipe: function pipe() {
                    var e = arguments;
                    return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                        }), e = null;
                    }).promise();
                }, then: function then(t, r, i) {
                    var o = 0;

                    function a(t, n, r, i) {
                        return function () {
                            var s = this,
                                u = arguments,
                                l = function l() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == (typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                                }
                            },
                                c = i ? l : function () {
                                try {
                                    l();
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                                }
                            };
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                        };
                    }

                    return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                    }).promise();
                }, promise: function promise(e) {
                    return null != e ? w.extend(e, i) : i;
                }
            },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        }, when: function when(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function s(e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) {
                $(i[n], s(n), a.reject);
            }return a.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e);
        }), this;
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function ready(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }

    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function z(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) {
                z(e, t, s, n[s], !0, o, a);
            }
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
            return l.call(w(e), n);
        })), t)) for (; s < u; s++) {
            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase();
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }

    var Y = function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function Q() {
        this.expando = w.expando + Q.uid++;
    }

    Q.uid = 1, Q.prototype = {
        cache: function cache(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        }, set: function set(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
                i[G(r)] = t[r];
            }return i;
        }, get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        }, access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
            var n,
                r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) {
                        delete r[t[n]];
                    }
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function hasData(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
        }
    };
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n);
            } catch (e) {}
            K.set(e, t, n);
        } else n = void 0;
        return n;
    }

    w.extend({
        hasData: function hasData(e) {
            return K.hasData(e) || J.hasData(e);
        }, data: function data(e, t, n) {
            return K.access(e, t, n);
        }, removeData: function removeData(e, t) {
            K.remove(e, t);
        }, _data: function _data(e, t, n) {
            return J.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
            J.remove(e, t);
        }
    }), w.fn.extend({
        data: function data(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) {
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    }J.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == (typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e)) ? this.each(function () {
                K.set(this, e);
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n;
                } else this.each(function () {
                    K.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
            return this.each(function () {
                K.remove(this, e);
            });
        }
    }), w.extend({
        queue: function queue(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function a() {
                w.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n]);
                })
            });
        }
    }), w.fn.extend({
        queue: function queue(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
            });
        }, dequeue: function dequeue(e) {
            return this.each(function () {
                w.dequeue(this, e);
            });
        }, clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
            var n,
                r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
                --r || i.resolveWith(o, [o]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) {
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }return s(), i.promise(t);
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    },
        se = function se(e, t, n, r) {
        var i,
            o,
            a = {};
        for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }i = n.apply(e, r || []);
        for (o in t) {
            e.style[o] = a[o];
        }return i;
    };

    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
            return r.cur();
        } : function () {
            return w.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) {
                w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            }c *= 2, w.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }

    var le = {};

    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
            (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        }for (o = 0; o < a; o++) {
            null != i[o] && (e[o].style.display = i[o]);
        }return e;
    }

    w.fn.extend({
        show: function show() {
            return fe(this, !0);
        }, hide: function hide() {
            return fe(this);
        }, toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
    }

    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
            if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                while (c--) {
                    a = a.lastChild;
                }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }f.textContent = "", d = 0;
        while (o = p[d++]) {
            if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;
                while (o = a[c++]) {
                    he.test(o.type || "") && n.push(o);
                }
            }
        }return f;
    }

    !function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0;
    }

    function ke() {
        return !1;
    }

    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == (typeof t === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(t))) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) {
                De(e, s, n, r, t[s], o);
            }return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
        return 1 === o && (a = i, (i = function i(e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n);
        });
    }

    w.event = {
        global: {}, add: function add(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) {
                    d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
                }
            }
        }, remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) {
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) {
                        w.event.remove(e, d + t[l], n, r, !0);
                    }
                }w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        }, dispatch: function dispatch(e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) {
                u[n] = arguments[n];
            }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        }, handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) {
                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                    }o.length && s.push({ elem: l, handlers: o });
                }
            }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function addProp(e, t) {
            babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                }, set: function set(t) {
                    babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                }
            });
        }, fix: function fix(e) {
            return e[w.expando] ? e : new w.Event(e);
        }, special: {
            load: { noBubble: !0 }, focus: {
                trigger: function trigger() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                }, delegateType: "focusin"
            }, blur: {
                trigger: function trigger() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                }, delegateType: "focusout"
            }, click: {
                trigger: function trigger() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                }, _default: function _default(e) {
                    return N(e.target, "a");
                }
            }, beforeunload: {
                postDispatch: function postDispatch(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function preventDefault() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function handle(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), w.fn.extend({
        on: function on(e, t, n, r) {
            return De(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == (typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e))) {
                for (i in e) {
                    this.off(i, t, e[i]);
                }return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t);
            });
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) {
                    for (n = 0, r = l[i].length; n < r; n++) {
                        w.event.add(t, i, l[i][n]);
                    }
                }
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
                l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
                l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
            }
        }
        return e;
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        }return e;
    }

    w.extend({
        htmlPrefilter: function htmlPrefilter(e) {
            return e.replace(Ne, "<$1></$2>");
        }, clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
                Me(o[r], a[r]);
            }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
                Pe(o[r], a[r]);
            } else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        }, cleanData: function cleanData(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) {
                            i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        }n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
            }
        }
    }), w.fn.extend({
        detach: function detach(e) {
            return Ie(this, e, !0);
        }, remove: function remove(e) {
            return Ie(this, e);
        }, text: function text(e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function append() {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        }, prepend: function prepend() {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function before() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function after() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            }return this;
        }, clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t);
            });
        }, html: function html(e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        }t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
                n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            }return this.pushStack(r);
        };
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function $e(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    },
        Be = new RegExp(oe.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
            }
        }

        function n(e) {
            return Math.round(parseFloat(e));
        }

        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function boxSizingReliable() {
                return t(), o;
            }, pixelBoxStyles: function pixelBoxStyles() {
                return t(), s;
            }, pixelPosition: function pixelPosition() {
                return t(), i;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return t(), u;
            }, scrollboxSize: function scrollboxSize() {
                return t(), a;
            }
        }));
    }();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }

    function _e(e, t) {
        return {
            get: function get() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }

    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) {
            if ((e = Ge[n] + t) in Ye) return e;
        }
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) {
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function get(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function get(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r);
                });
            }, set: function set(e, n, r) {
                var i,
                    o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
            }
        };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function expand(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                }return i;
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({
        css: function css(e, t) {
            return z(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) {
                        o[t[a]] = w.css(e, t[a], !1, r);
                    }return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }

    w.Tween = tt, tt.prototype = {
        constructor: tt, init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        }, run: function run(e) {
            var t,
                n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function get(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            }, set: function set(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, w.easing = {
        linear: function linear(e) {
            return e;
        }, swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0;
        }), nt = Date.now();
    }

    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
        }
    }

    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for (r in t) {
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = y && y[r] || w.style(e, r);
            }
        }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in d) {
                u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                    g || fe([e]), J.remove(e, "fxshow");
                    for (r in d) {
                        w.style(e, r, d[r]);
                    }
                })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i);
                }
            } else t[r] = i;
        }
    }

    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
            delete u.elem;
        }),
            u = function u() {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
                l.tweens[o].run(r);
            }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function createTween(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function stop(t) {
                var n = 0,
                    r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) {
                    l.tweens[n].run(1);
                }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
            }
        }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) {
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }

    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n;
            }]
        }, tweener: function tweener(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) {
                n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            }
        }, prefilters: [ct], prefilter: function prefilter(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
    }), w.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e)) ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({
        fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function a() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(e, t, n) {
            var r = function r(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
                    a[i] && a[i].stop && ot.test(i) && r(a[i]);
                }for (i = o.length; i--;) {
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                }!t && n || w.dequeue(this, e);
            });
        }, finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }for (t = 0; t < a; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }delete n.finish;
            });
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function () {
        var e,
            t = 0,
            n = w.timers;
        for (nt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at());
    }, w.fx.stop = function () {
        rt = null;
    }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i);
            };
        });
    }, function () {
        var e = r.createElement("input"),
            t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
    }();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function attr(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        }
    }), w.extend({
        attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: {
            type: {
                set: function set(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        }, removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) {
                e.removeAttribute(n);
            }
        }
    }), dt = {
        set: function set(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i,
                o,
                a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function prop(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        }
    }), w.extend({
        prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: {
            tabIndex: {
                get: function get(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }, propFix: { "for": "htmlFor", "class": "className" }
    }), h.optSelected || (w.propHooks.selected = {
        get: function get(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this;
    });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }

    w.fn.extend({
        addClass: function addClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)));
            });
            if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while (o = t[a++]) {
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, removeClass: function removeClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while (o = t[a++]) {
                        while (r.indexOf(" " + o + " ") > -1) {
                            r = r.replace(" " + o + " ", " ");
                        }
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, toggleClass: function toggleClass(e, t) {
            var n = typeof e === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(e),
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    }
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while (n = this[r++]) {
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            }return !1;
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function val(e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function get(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e));
                }
            }, select: {
                get: function get(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t);
                        }
                    }return s;
                }, set: function set(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--) {
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    }return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function set(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function Tt(e) {
        e.stopPropagation();
    };
    w.extend(w.event, {
        trigger: function trigger(t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                        v.push(s), u = s;
                    }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) {
                    h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        }, simulate: function simulate(e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        }
    }), w.fn.extend({
        trigger: function trigger(e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this);
            });
        }, triggerHandler: function triggerHandler(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0);
        }
    }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
            setup: function setup() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            }, teardown: function teardown() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            }
        };
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(i)) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
            jt(e + "[" + i + "]", t[i], n, r);
        }
    }

    w.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value);
        });else for (n in e) {
            jt(n, e[n], t, i);
        }return r.join("&");
    }, w.fn.extend({
        serialize: function serialize() {
            return w.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                }) : { name: t.name, value: n.replace(Dt, "\r\n") };
            }).get();
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) {
                "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            }
        };
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*");
    }

    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && w.extend(!0, e, r), e;
    }

    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
            }
        }if (u[0] in n) o = u[0];else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }

    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
        }o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break;
                    }
                }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                    t = a(t);
                } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                }
            }
        }return { state: "success", data: t };
    }

    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function ajaxSetup(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function ajax(t, n) {
            "object" == (typeof t === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(t)) && (n = t, t = void 0), n = n || {};
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                readyState: 0,
                getResponseHeader: function getResponseHeader(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a)) {
                                s[t[1].toLowerCase()] = t[2];
                            }
                        }
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function getAllResponseHeaders() {
                    return c ? a : null;
                },
                setRequestHeader: function setRequestHeader(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
                },
                overrideMimeType: function overrideMimeType(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function statusCode(e) {
                    var t;
                    if (e) if (c) E.always(e[E.status]);else for (t in e) {
                        x[t] = [x[t], e[t]];
                    }return this;
                },
                abort: function abort(e) {
                    var t = e || C;
                    return i && i.abort(t), k(0, t), this;
                }
            };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) {
                E.setRequestHeader(p, h.headers[p]);
            }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }

            return E;
        },
        getJSON: function getJSON(e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
            return w.get(e, void 0, t, "script");
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function (e) {
        return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, w.fn.extend({
        wrapAll: function wrapAll(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) {
                    e = e.firstElementChild;
                }return e;
            }).append(this)), this;
        }, wrapInner: function wrapInner(e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        }, wrap: function wrap(e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        }, unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes);
            }), this;
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var _n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function send(i, o) {
                var a,
                    s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
                    s[a] = t.xhrFields[a];
                }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) {
                    s.setRequestHeader(a, i[a]);
                }_n = function n(e) {
                    return function () {
                        _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                    };
                }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        _n && r();
                    });
                }, _n = _n("abort");
                try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (_n) throw e;
                }
            }, abort: function abort() {
                _n && _n();
            }
        };
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            "text script": function textScript(e) {
                return w.globalEval(e), e;
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, _n2;
            return {
                send: function send(i, o) {
                    t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
                        t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                }, abort: function abort() {
                    _n2 && _n2();
                }
            };
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e;
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
            o,
            a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments;
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4___default()(t)) && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
            });
        }), this;
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem;
        }).length;
    }, w.offset = {
        setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, w.fn.extend({
        offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t);
            });
            var t,
                n,
                r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
                        e = e.parentNode;
                    }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) {
                    e = e.offsetParent;
                }return e || be;
            });
        }
    }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
        });
    }), w.each({ Height: "height", Width: "width" }, function (e, t) {
        w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({
        hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), w.fn.extend({
        bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
            return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(o.call(arguments)));
        }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && __webpack_require__(21) && define("jquery", [], function () {
        return w;
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


/*! WebUploader 0.1.5 */

/**
 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
 *
 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
 */
(function (root, factory) {
    var modules = {},


    // 内部require, 简单不完全实现。
    // https://github.com/amdjs/amdjs-api/wiki/require
    _require = function _require(deps, callback) {
        var args, len, i;

        // 如果deps不是数组，则直接返回指定module
        if (typeof deps === 'string') {
            return getModule(deps);
        } else {
            args = [];
            for (len = deps.length, i = 0; i < len; i++) {
                args.push(getModule(deps[i]));
            }

            return callback.apply(null, args);
        }
    },


    // 内部define，暂时不支持不指定id.
    _define = function _define(id, deps, factory) {
        if (arguments.length === 2) {
            factory = deps;
            deps = null;
        }

        _require(deps || [], function () {
            setModule(id, factory, arguments);
        });
    },


    // 设置module, 兼容CommonJs写法。
    setModule = function setModule(id, factory, args) {
        var module = {
            exports: factory
        },
            returned;

        if (typeof factory === 'function') {
            args.length || (args = [_require, module.exports, module]);
            returned = factory.apply(null, args);
            returned !== undefined && (module.exports = returned);
        }

        modules[id] = module.exports;
    },


    // 根据id获取module
    getModule = function getModule(id) {
        var module = modules[id] || root[id];

        if (!module) {
            throw new Error('`' + id + '` is undefined');
        }

        return module;
    },


    // 将所有modules，将路径ids装换成对象。
    exportsTo = function exportsTo(obj) {
        var key, host, parts, part, last, ucFirst;

        // make the first character upper case.
        ucFirst = function ucFirst(str) {
            return str && str.charAt(0).toUpperCase() + str.substr(1);
        };

        for (key in modules) {
            host = obj;

            if (!modules.hasOwnProperty(key)) {
                continue;
            }

            parts = key.split('/');
            last = ucFirst(parts.pop());

            while (part = ucFirst(parts.shift())) {
                host[part] = host[part] || {};
                host = host[part];
            }

            host[last] = modules[key];
        }

        return obj;
    },
        makeExport = function makeExport(dollar) {
        root.__dollar = dollar;

        // exports every module.
        return exportsTo(factory(root, _define, _require));
    },
        origin;
    if (( false ? undefined : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(module)) === 'object' && babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(module.exports) === 'object') {

        // For CommonJS and CommonJS-like environments where a proper window is present,
        module.exports = makeExport();
    } else if (typeof define === 'function' && __webpack_require__(21)) {

        // Allow using this built library as an AMD module
        // in another project. That other project will only
        // see this AMD call, not the internal modules in
        // the closure below.
        define(['jquery'], makeExport);
    } else {

        // Browser globals case. Just assign the
        // result to a property on the global.
        origin = root.WebUploader;
        root.WebUploader = makeExport();
        root.WebUploader.noConflict = function () {
            root.WebUploader = origin;
        };
    }
})(window, function (window, define, require) {

    /**
     * @fileOverview jQuery or Zepto
     */
    define('dollar-third', [], function () {
        var $ = window.__dollar || window.jQuery || window.Zepto;

        if (!$) {
            throw new Error('jQuery or Zepto not found!');
        }

        return $;
    });
    /**
     * @fileOverview Dom 操作相关
     */
    define('dollar', ['dollar-third'], function (_) {
        return _;
    });
    /**
     * @fileOverview 使用jQuery的Promise
     */
    define('promise-third', ['dollar'], function ($) {
        return {
            Deferred: $.Deferred,
            when: $.when,

            isPromise: function isPromise(anything) {
                return anything && typeof anything.then === 'function';
            }
        };
    });
    /**
     * @fileOverview Promise/A+
     */
    define('promise', ['promise-third'], function (_) {
        return _;
    });
    /**
     * @fileOverview 基础类方法。
     */

    /**
     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
     *
     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
     *
     * * module `base`：WebUploader.Base
     * * module `file`: WebUploader.File
     * * module `lib/dnd`: WebUploader.Lib.Dnd
     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
     *
     *
     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
     * @module WebUploader
     * @title WebUploader API文档
     */
    define('base', ['dollar', 'promise'], function ($, promise) {

        var noop = function noop() {},
            call = Function.call;

        // http://jsperf.com/uncurrythis
        // 反科里化
        function uncurryThis(fn) {
            return function () {
                return call.apply(fn, arguments);
            };
        }

        function bindFn(fn, context) {
            return function () {
                return fn.apply(context, arguments);
            };
        }

        function createObject(proto) {
            var f;

            if (babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default.a) {
                return babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(proto);
            } else {
                f = function f() {};
                f.prototype = proto;
                return new f();
            }
        }

        /**
         * 基础类，提供一些简单常用的方法。
         * @class Base
         */
        return {

            /**
             * @property {String} version 当前版本号。
             */
            version: '0.1.5',

            /**
             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
             */
            $: $,

            Deferred: promise.Deferred,

            isPromise: promise.isPromise,

            when: promise.when,

            /**
             * @description  简单的浏览器检查结果。
             *
             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
             *
             * @property {Object} [browser]
             */
            browser: function (ua) {
                var ret = {},
                    webkit = ua.match(/WebKit\/([\d.]+)/),
                    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
                    ie = ua.match(/MSIE\s([\d\.]+)/) || ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                    firefox = ua.match(/Firefox\/([\d.]+)/),
                    safari = ua.match(/Safari\/([\d.]+)/),
                    opera = ua.match(/OPR\/([\d.]+)/);

                webkit && (ret.webkit = parseFloat(webkit[1]));
                chrome && (ret.chrome = parseFloat(chrome[1]));
                ie && (ret.ie = parseFloat(ie[1]));
                firefox && (ret.firefox = parseFloat(firefox[1]));
                safari && (ret.safari = parseFloat(safari[1]));
                opera && (ret.opera = parseFloat(opera[1]));

                return ret;
            }(navigator.userAgent),

            /**
             * @description  操作系统检查结果。
             *
             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
             * @property {Object} [os]
             */
            os: function (ua) {
                var ret = {},


                // osx = !!ua.match( /\(Macintosh\; Intel / ),
                android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                    ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);

                // osx && (ret.osx = true);
                android && (ret.android = parseFloat(android[1]));
                ios && (ret.ios = parseFloat(ios[1].replace(/_/g, '.')));

                return ret;
            }(navigator.userAgent),

            /**
             * 实现类与类之间的继承。
             * @method inherits
             * @grammar Base.inherits( super ) => child
             * @grammar Base.inherits( super, protos ) => child
             * @grammar Base.inherits( super, protos, statics ) => child
             * @param  {Class} super 父类
             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
             * @param  {Object} [statics] 静态属性或方法。
             * @return {Class} 返回子类。
             * @example
             * function Person() {
             *     console.log( 'Super' );
             * }
             * Person.prototype.hello = function() {
             *     console.log( 'hello' );
             * };
             *
             * var Manager = Base.inherits( Person, {
             *     world: function() {
             *         console.log( 'World' );
             *     }
             * });
             *
             * // 因为没有指定构造器，父类的构造器将会执行。
             * var instance = new Manager();    // => Super
             *
             * // 继承子父类的方法
             * instance.hello();    // => hello
             * instance.world();    // => World
             *
             * // 子类的__super__属性指向父类
             * console.log( Manager.__super__ === Person );    // => true
             */
            inherits: function inherits(Super, protos, staticProtos) {
                var child;

                if (typeof protos === 'function') {
                    child = protos;
                    protos = null;
                } else if (protos && protos.hasOwnProperty('constructor')) {
                    child = protos.constructor;
                } else {
                    child = function child() {
                        return Super.apply(this, arguments);
                    };
                }

                // 复制静态方法
                $.extend(true, child, Super, staticProtos || {});

                /* jshint camelcase: false */

                // 让子类的__super__属性指向父类。
                child.__super__ = Super.prototype;

                // 构建原型，添加原型方法或属性。
                // 暂时用Object.create实现。
                child.prototype = createObject(Super.prototype);
                protos && $.extend(true, child.prototype, protos);

                return child;
            },

            /**
             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
             * @method noop
             */
            noop: noop,

            /**
             * 返回一个新的方法，此方法将已指定的`context`来执行。
             * @grammar Base.bindFn( fn, context ) => Function
             * @method bindFn
             * @example
             * var doSomething = function() {
             *         console.log( this.name );
             *     },
             *     obj = {
             *         name: 'Object Name'
             *     },
             *     aliasFn = Base.bind( doSomething, obj );
             *
             *  aliasFn();    // => Object Name
             *
             */
            bindFn: bindFn,

            /**
             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
             * @grammar Base.log( args... ) => undefined
             * @method log
             */
            log: function () {
                if (window.console) {
                    return bindFn(console.log, console);
                }
                return noop;
            }(),

            nextTick: function () {

                return function (cb) {
                    setTimeout(cb, 1);
                };

                // @bug 当浏览器不在当前窗口时就停了。
                // var next = window.requestAnimationFrame ||
                //     window.webkitRequestAnimationFrame ||
                //     window.mozRequestAnimationFrame ||
                //     function( cb ) {
                //         window.setTimeout( cb, 1000 / 60 );
                //     };

                // // fix: Uncaught TypeError: Illegal invocation
                // return bindFn( next, window );
            }(),

            /**
             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
             * 将用来将非数组对象转化成数组对象。
             * @grammar Base.slice( target, start[, end] ) => Array
             * @method slice
             * @example
             * function doSomthing() {
             *     var args = Base.slice( arguments, 1 );
             *     console.log( args );
             * }
             *
             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
             */
            slice: uncurryThis([].slice),

            /**
             * 生成唯一的ID
             * @method guid
             * @grammar Base.guid() => String
             * @grammar Base.guid( prefx ) => String
             */
            guid: function () {
                var counter = 0;

                return function (prefix) {
                    var guid = (+new Date()).toString(32),
                        i = 0;

                    for (; i < 5; i++) {
                        guid += Math.floor(Math.random() * 65535).toString(32);
                    }

                    return (prefix || 'wu_') + guid + (counter++).toString(32);
                };
            }(),

            /**
             * 格式化文件大小, 输出成带单位的字符串
             * @method formatSize
             * @grammar Base.formatSize( size ) => String
             * @grammar Base.formatSize( size, pointLength ) => String
             * @grammar Base.formatSize( size, pointLength, units ) => String
             * @param {Number} size 文件大小
             * @param {Number} [pointLength=2] 精确到的小数点数。
             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
             * @example
             * console.log( Base.formatSize( 100 ) );    // => 100B
             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
             */
            formatSize: function formatSize(size, pointLength, units) {
                var unit;

                units = units || ['B', 'K', 'M', 'G', 'TB'];

                while ((unit = units.shift()) && size > 1024) {
                    size = size / 1024;
                }

                return (unit === 'B' ? size : size.toFixed(pointLength || 2)) + unit;
            }
        };
    });
    /**
     * 事件处理类，可以独立使用，也可以扩展给对象使用。
     * @fileOverview Mediator
     */
    define('mediator', ['base'], function (Base) {
        var $ = Base.$,
            slice = [].slice,
            separator = /\s+/,
            protos;

        // 根据条件过滤出事件handlers.
        function findHandlers(arr, name, callback, context) {
            return $.grep(arr, function (handler) {
                return handler && (!name || handler.e === name) && (!callback || handler.cb === callback || handler.cb._cb === callback) && (!context || handler.ctx === context);
            });
        }

        function eachEvent(events, callback, iterator) {
            // 不支持对象，只支持多个event用空格隔开
            $.each((events || '').split(separator), function (_, key) {
                iterator(key, callback);
            });
        }

        function triggerHanders(events, args) {
            var stoped = false,
                i = -1,
                len = events.length,
                handler;

            while (++i < len) {
                handler = events[i];

                if (handler.cb.apply(handler.ctx2, args) === false) {
                    stoped = true;
                    break;
                }
            }

            return !stoped;
        }

        protos = {

            /**
             * 绑定事件。
             *
             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
             * ```javascript
             * var obj = {};
             *
             * // 使得obj有事件行为
             * Mediator.installTo( obj );
             *
             * obj.on( 'testa', function( arg1, arg2 ) {
             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
             * });
             *
             * obj.trigger( 'testa', 'arg1', 'arg2' );
             * ```
             *
             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
             * 切会影响到`trigger`方法的返回值，为`false`。
             *
             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
             * ```javascript
             * obj.on( 'all', function( type, arg1, arg2 ) {
             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
             * });
             * ```
             *
             * @method on
             * @grammar on( name, callback[, context] ) => self
             * @param  {String}   name     事件名，支持多个事件用空格隔开
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             * @class Mediator
             */
            on: function on(name, callback, context) {
                var me = this,
                    set;

                if (!callback) {
                    return this;
                }

                set = this._events || (this._events = []);

                eachEvent(name, callback, function (name, callback) {
                    var handler = { e: name };

                    handler.cb = callback;
                    handler.ctx = context;
                    handler.ctx2 = context || me;
                    handler.id = set.length;

                    set.push(handler);
                });

                return this;
            },

            /**
             * 绑定事件，且当handler执行完后，自动解除绑定。
             * @method once
             * @grammar once( name, callback[, context] ) => self
             * @param  {String}   name     事件名
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            once: function once(name, callback, context) {
                var me = this;

                if (!callback) {
                    return me;
                }

                eachEvent(name, callback, function (name, callback) {
                    var once = function once() {
                        me.off(name, once);
                        return callback.apply(context || me, arguments);
                    };

                    once._cb = callback;
                    me.on(name, once, context);
                });

                return me;
            },

            /**
             * 解除事件绑定
             * @method off
             * @grammar off( [name[, callback[, context] ] ] ) => self
             * @param  {String}   [name]     事件名
             * @param  {Function} [callback] 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            off: function off(name, cb, ctx) {
                var events = this._events;

                if (!events) {
                    return this;
                }

                if (!name && !cb && !ctx) {
                    this._events = [];
                    return this;
                }

                eachEvent(name, cb, function (name, cb) {
                    $.each(findHandlers(events, name, cb, ctx), function () {
                        delete events[this.id];
                    });
                });

                return this;
            },

            /**
             * 触发事件
             * @method trigger
             * @grammar trigger( name[, args...] ) => self
             * @param  {String}   type     事件名
             * @param  {*} [...] 任意参数
             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
             */
            trigger: function trigger(type) {
                var args, events, allEvents;

                if (!this._events || !type) {
                    return this;
                }

                args = slice.call(arguments, 1);
                events = findHandlers(this._events, type);
                allEvents = findHandlers(this._events, 'all');

                return triggerHanders(events, args) && triggerHanders(allEvents, arguments);
            }
        };

        /**
         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
         * 主要目的是负责模块与模块之间的合作，降低耦合度。
         *
         * @class Mediator
         */
        return $.extend({

            /**
             * 可以通过这个接口，使任何对象具备事件功能。
             * @method installTo
             * @param  {Object} obj 需要具备事件行为的对象。
             * @return {Object} 返回obj.
             */
            installTo: function installTo(obj) {
                return $.extend(obj, protos);
            }

        }, protos);
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('uploader', ['base', 'mediator'], function (Base, Mediator) {

        var $ = Base.$;

        /**
         * 上传入口类。
         * @class Uploader
         * @constructor
         * @grammar new Uploader( opts ) => Uploader
         * @example
         * var uploader = WebUploader.Uploader({
         *     swf: 'path_of_swf/Uploader.swf',
         *
         *     // 开起分片上传。
         *     chunked: true
         * });
         */
        function Uploader(opts) {
            this.options = $.extend(true, {}, Uploader.options, opts);
            this._init(this.options);
        }

        // default Options
        // widgets中有相应扩展
        Uploader.options = {};
        Mediator.installTo(Uploader.prototype);

        // 批量添加纯命令式方法。
        $.each({
            upload: 'start-upload',
            stop: 'stop-upload',
            getFile: 'get-file',
            getFiles: 'get-files',
            addFile: 'add-file',
            addFiles: 'add-file',
            sort: 'sort-files',
            removeFile: 'remove-file',
            cancelFile: 'cancel-file',
            skipFile: 'skip-file',
            retry: 'retry',
            isInProgress: 'is-in-progress',
            makeThumb: 'make-thumb',
            md5File: 'md5-file',
            getDimension: 'get-dimension',
            addButton: 'add-btn',
            predictRuntimeType: 'predict-runtime-type',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable',
            reset: 'reset'
        }, function (fn, command) {
            Uploader.prototype[fn] = function () {
                return this.request(command, arguments);
            };
        });

        $.extend(Uploader.prototype, {
            state: 'pending',

            _init: function _init(opts) {
                var me = this;

                me.request('init', opts, function () {
                    me.state = 'ready';
                    me.trigger('ready');
                });
            },

            /**
             * 获取或者设置Uploader配置项。
             * @method option
             * @grammar option( key ) => *
             * @grammar option( key, val ) => self
             * @example
             *
             * // 初始状态图片上传前不会压缩
             * var uploader = new WebUploader.Uploader({
             *     compress: null;
             * });
             *
             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
             * uploader.option( 'compress', {
             *     width: 1600,
             *     height: 1600
             * });
             */
            option: function option(key, val) {
                var opts = this.options;

                // setter
                if (arguments.length > 1) {

                    if ($.isPlainObject(val) && $.isPlainObject(opts[key])) {
                        $.extend(opts[key], val);
                    } else {
                        opts[key] = val;
                    }
                } else {
                    // getter
                    return key ? opts[key] : opts;
                }
            },

            /**
             * 获取文件统计信息。返回一个包含一下信息的对象。
             * * `successNum` 上传成功的文件数
             * * `progressNum` 上传中的文件数
             * * `cancelNum` 被删除的文件数
             * * `invalidNum` 无效的文件数
             * * `uploadFailNum` 上传失败的文件数
             * * `queueNum` 还在队列中的文件数
             * * `interruptNum` 被暂停的文件数
             * @method getStats
             * @grammar getStats() => Object
             */
            getStats: function getStats() {
                // return this._mgr.getStats.apply( this._mgr, arguments );
                var stats = this.request('get-stats');

                return stats ? {
                    successNum: stats.numOfSuccess,
                    progressNum: stats.numOfProgress,

                    // who care?
                    // queueFailNum: 0,
                    cancelNum: stats.numOfCancel,
                    invalidNum: stats.numOfInvalid,
                    uploadFailNum: stats.numOfUploadFailed,
                    queueNum: stats.numOfQueue,
                    interruptNum: stats.numofInterrupt
                } : {};
            },

            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
            trigger: function trigger(type /*, args...*/) {
                var args = [].slice.call(arguments, 1),
                    opts = this.options,
                    name = 'on' + type.substring(0, 1).toUpperCase() + type.substring(1);

                if (
                // 调用通过on方法注册的handler.
                Mediator.trigger.apply(this, arguments) === false ||

                // 调用opts.onEvent
                $.isFunction(opts[name]) && opts[name].apply(this, args) === false ||

                // 调用this.onEvent
                $.isFunction(this[name]) && this[name].apply(this, args) === false ||

                // 广播所有uploader的事件。
                Mediator.trigger.apply(Mediator, [this, type].concat(args)) === false) {

                    return false;
                }

                return true;
            },

            /**
             * 销毁 webuploader 实例
             * @method destroy
             * @grammar destroy() => undefined
             */
            destroy: function destroy() {
                this.request('destroy', arguments);
                this.off();
            },

            // widgets/widget.js将补充此方法的详细文档。
            request: Base.noop
        });

        /**
         * 创建Uploader实例，等同于new Uploader( opts );
         * @method create
         * @class Base
         * @static
         * @grammar Base.create( opts ) => Uploader
         */
        Base.create = Uploader.create = function (opts) {
            return new Uploader(opts);
        };

        // 暴露Uploader，可以通过它来扩展业务逻辑。
        Base.Uploader = Uploader;

        return Uploader;
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/runtime', ['base', 'mediator'], function (Base, Mediator) {

        var $ = Base.$,
            factories = {},


        // 获取对象的第一个key
        getFirstKey = function getFirstKey(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return key;
                }
            }
            return null;
        };

        // 接口类。
        function Runtime(options) {
            this.options = $.extend({
                container: document.body
            }, options);
            this.uid = Base.guid('rt_');
        }

        $.extend(Runtime.prototype, {

            getContainer: function getContainer() {
                var opts = this.options,
                    parent,
                    container;

                if (this._container) {
                    return this._container;
                }

                parent = $(opts.container || document.body);
                container = $(document.createElement('div'));

                container.attr('id', 'rt_' + this.uid);
                container.css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden'
                });

                parent.append(container);
                parent.addClass('webuploader-container');
                this._container = container;
                this._parent = parent;
                return container;
            },

            init: Base.noop,
            exec: Base.noop,

            destroy: function destroy() {
                this._container && this._container.remove();
                this._parent && this._parent.removeClass('webuploader-container');
                this.off();
            }
        });

        Runtime.orders = 'html5,flash';

        /**
         * 添加Runtime实现。
         * @param {String} type    类型
         * @param {Runtime} factory 具体Runtime实现。
         */
        Runtime.addRuntime = function (type, factory) {
            factories[type] = factory;
        };

        Runtime.hasRuntime = function (type) {
            return !!(type ? factories[type] : getFirstKey(factories));
        };

        Runtime.create = function (opts, orders) {
            var type, runtime;

            orders = orders || Runtime.orders;
            $.each(orders.split(/\s*,\s*/g), function () {
                if (factories[this]) {
                    type = this;
                    return false;
                }
            });

            type = type || getFirstKey(factories);

            if (!type) {
                throw new Error('Runtime Error');
            }

            runtime = new factories[type](opts);
            return runtime;
        };

        Mediator.installTo(Runtime.prototype);
        return Runtime;
    });

    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/client', ['base', 'mediator', 'runtime/runtime'], function (Base, Mediator, Runtime) {

        var cache;

        cache = function () {
            var obj = {};

            return {
                add: function add(runtime) {
                    obj[runtime.uid] = runtime;
                },

                get: function get(ruid, standalone) {
                    var i;

                    if (ruid) {
                        return obj[ruid];
                    }

                    for (i in obj) {
                        // 有些类型不能重用，比如filepicker.
                        if (standalone && obj[i].__standalone) {
                            continue;
                        }

                        return obj[i];
                    }

                    return null;
                },

                remove: function remove(runtime) {
                    delete obj[runtime.uid];
                }
            };
        }();

        function RuntimeClient(component, standalone) {
            var deferred = Base.Deferred(),
                runtime;

            this.uid = Base.guid('client_');

            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
            this.runtimeReady = function (cb) {
                return deferred.done(cb);
            };

            this.connectRuntime = function (opts, cb) {

                // already connected.
                if (runtime) {
                    throw new Error('already connected!');
                }

                deferred.done(cb);

                if (typeof opts === 'string' && cache.get(opts)) {
                    runtime = cache.get(opts);
                }

                // 像filePicker只能独立存在，不能公用。
                runtime = runtime || cache.get(null, standalone);

                // 需要创建
                if (!runtime) {
                    runtime = Runtime.create(opts, opts.runtimeOrder);
                    runtime.__promise = deferred.promise();
                    runtime.once('ready', deferred.resolve);
                    runtime.init();
                    cache.add(runtime);
                    runtime.__client = 1;
                } else {
                    // 来自cache
                    Base.$.extend(runtime.options, opts);
                    runtime.__promise.then(deferred.resolve);
                    runtime.__client++;
                }

                standalone && (runtime.__standalone = standalone);
                return runtime;
            };

            this.getRuntime = function () {
                return runtime;
            };

            this.disconnectRuntime = function () {
                if (!runtime) {
                    return;
                }

                runtime.__client--;

                if (runtime.__client <= 0) {
                    cache.remove(runtime);
                    delete runtime.__promise;
                    runtime.destroy();
                }

                runtime = null;
            };

            this.exec = function () {
                if (!runtime) {
                    return;
                }

                var args = Base.slice(arguments);
                component && args.unshift(component);

                return runtime.exec.apply(this, args);
            };

            this.getRuid = function () {
                return runtime && runtime.uid;
            };

            this.destroy = function (destroy) {
                return function () {
                    destroy && destroy.apply(this, arguments);
                    this.trigger('destroy');
                    this.off();
                    this.exec('destroy');
                    this.disconnectRuntime();
                };
            }(this.destroy);
        }

        Mediator.installTo(RuntimeClient.prototype);
        return RuntimeClient;
    });
    /**
     * @fileOverview 错误信息
     */
    define('lib/dnd', ['base', 'mediator', 'runtime/client'], function (Base, Mediator, RuntimeClent) {

        var $ = Base.$;

        function DragAndDrop(opts) {
            opts = this.options = $.extend({}, DragAndDrop.options, opts);

            opts.container = $(opts.container);

            if (!opts.container.length) {
                return;
            }

            RuntimeClent.call(this, 'DragAndDrop');
        }

        DragAndDrop.options = {
            accept: null,
            disableGlobalDnd: false
        };

        Base.inherits(RuntimeClent, {
            constructor: DragAndDrop,

            init: function init() {
                var me = this;

                me.connectRuntime(me.options, function () {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });

        Mediator.installTo(DragAndDrop.prototype);

        return DragAndDrop;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/widget', ['base', 'uploader'], function (Base, Uploader) {

        var $ = Base.$,
            _init2 = Uploader.prototype._init,
            _destroy = Uploader.prototype.destroy,
            IGNORE = {},
            widgetClass = [];

        function isArrayLike(obj) {
            if (!obj) {
                return false;
            }

            var length = obj.length,
                type = $.type(obj);

            if (obj.nodeType === 1 && length) {
                return true;
            }

            return type === 'array' || type !== 'function' && type !== 'string' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);
        }

        function Widget(uploader) {
            this.owner = uploader;
            this.options = uploader.options;
        }

        $.extend(Widget.prototype, {

            init: Base.noop,

            // 类Backbone的事件监听声明，监听uploader实例上的事件
            // widget直接无法监听事件，事件只能通过uploader来传递
            invoke: function invoke(apiName, args) {

                /*
                    {
                        'make-thumb': 'makeThumb'
                    }
                 */
                var map = this.responseMap;

                // 如果无API响应声明则忽略
                if (!map || !(apiName in map) || !(map[apiName] in this) || !$.isFunction(this[map[apiName]])) {

                    return IGNORE;
                }

                return this[map[apiName]].apply(this, args);
            },

            /**
             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
             * @method request
             * @grammar request( command, args ) => * | Promise
             * @grammar request( command, args, callback ) => Promise
             * @for  Uploader
             */
            request: function request() {
                return this.owner.request.apply(this.owner, arguments);
            }
        });

        // 扩展Uploader.
        $.extend(Uploader.prototype, {

            /**
             * @property {String | Array} [disableWidgets=undefined]
             * @namespace options
             * @for Uploader
             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
             */

            // 覆写_init用来初始化widgets
            _init: function _init() {
                var me = this,
                    widgets = me._widgets = [],
                    deactives = me.options.disableWidgets || '';

                $.each(widgetClass, function (_, klass) {
                    (!deactives || !~deactives.indexOf(klass._name)) && widgets.push(new klass(me));
                });

                return _init2.apply(me, arguments);
            },

            request: function request(apiName, args, callback) {
                var i = 0,
                    widgets = this._widgets,
                    len = widgets && widgets.length,
                    rlts = [],
                    dfds = [],
                    widget,
                    rlt,
                    promise,
                    key;

                args = isArrayLike(args) ? args : [args];

                for (; i < len; i++) {
                    widget = widgets[i];
                    rlt = widget.invoke(apiName, args);

                    if (rlt !== IGNORE) {

                        // Deferred对象
                        if (Base.isPromise(rlt)) {
                            dfds.push(rlt);
                        } else {
                            rlts.push(rlt);
                        }
                    }
                }

                // 如果有callback，则用异步方式。
                if (callback || dfds.length) {
                    promise = Base.when.apply(Base, dfds);
                    key = promise.pipe ? 'pipe' : 'then';

                    // 很重要不能删除。删除了会死循环。
                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
                    return promise[key](function () {
                        var deferred = Base.Deferred(),
                            args = arguments;

                        if (args.length === 1) {
                            args = args[0];
                        }

                        setTimeout(function () {
                            deferred.resolve(args);
                        }, 1);

                        return deferred.promise();
                    })[callback ? key : 'done'](callback || Base.noop);
                } else {
                    return rlts[0];
                }
            },

            destroy: function destroy() {
                _destroy.apply(this, arguments);
                this._widgets = null;
            }
        });

        /**
         * 添加组件
         * @grammar Uploader.register(proto);
         * @grammar Uploader.register(map, proto);
         * @param  {object} responseMap API 名称与函数实现的映射
         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
         * @method Uploader.register
         * @for Uploader
         * @example
         * Uploader.register({
         *     'make-thumb': 'makeThumb'
         * }, {
         *     init: function( options ) {},
         *     makeThumb: function() {}
         * });
         *
         * Uploader.register({
         *     'make-thumb': function() {
         *         
         *     }
         * });
         */
        Uploader.register = Widget.register = function (responseMap, widgetProto) {
            var map = { init: 'init', destroy: 'destroy', name: 'anonymous' },
                klass;

            if (arguments.length === 1) {
                widgetProto = responseMap;

                // 自动生成 map 表。
                $.each(widgetProto, function (key) {
                    if (key[0] === '_' || key === 'name') {
                        key === 'name' && (map.name = widgetProto.name);
                        return;
                    }

                    map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
                });
            } else {
                map = $.extend(map, responseMap);
            }

            widgetProto.responseMap = map;
            klass = Base.inherits(Widget, widgetProto);
            klass._name = map.name;
            widgetClass.push(klass);

            return klass;
        };

        /**
         * 删除插件，只有在注册时指定了名字的才能被删除。
         * @grammar Uploader.unRegister(name);
         * @param  {string} name 组件名字
         * @method Uploader.unRegister
         * @for Uploader
         * @example
         *
         * Uploader.register({
         *     name: 'custom',
         *     
         *     'make-thumb': function() {
         *         
         *     }
         * });
         *
         * Uploader.unRegister('custom');
         */
        Uploader.unRegister = Widget.unRegister = function (name) {
            if (!name || name === 'anonymous') {
                return;
            }

            // 删除指定的插件。
            for (var i = widgetClass.length; i--;) {
                if (widgetClass[i]._name === name) {
                    widgetClass.splice(i, 1);
                }
            }
        };

        return Widget;
    });
    /**
     * @fileOverview DragAndDrop Widget。
     */
    define('widgets/filednd', ['base', 'uploader', 'lib/dnd', 'widgets/widget'], function (Base, Uploader, Dnd) {
        var $ = Base.$;

        Uploader.options.dnd = '';

        /**
         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
         * @namespace options
         * @for Uploader
         */

        /**
         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
         * @namespace options
         * @for Uploader
         */

        /**
         * @event dndAccept
         * @param {DataTransferItemList} items DataTransferItem
         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
         * @for  Uploader
         */
        return Uploader.register({
            name: 'dnd',

            init: function init(opts) {

                if (!opts.dnd || this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                    disableGlobalDnd: opts.disableGlobalDnd,
                    container: opts.dnd,
                    accept: opts.accept
                }),
                    dnd;

                this.dnd = dnd = new Dnd(options);

                dnd.once('ready', deferred.resolve);
                dnd.on('drop', function (files) {
                    me.request('add-file', [files]);
                });

                // 检测文件是否全部允许添加。
                dnd.on('accept', function (items) {
                    return me.owner.trigger('dndAccept', items);
                });

                dnd.init();

                return deferred.promise();
            },

            destroy: function destroy() {
                this.dnd && this.dnd.destroy();
            }
        });
    });

    /**
     * @fileOverview 错误信息
     */
    define('lib/filepaste', ['base', 'mediator', 'runtime/client'], function (Base, Mediator, RuntimeClent) {

        var $ = Base.$;

        function FilePaste(opts) {
            opts = this.options = $.extend({}, opts);
            opts.container = $(opts.container || document.body);
            RuntimeClent.call(this, 'FilePaste');
        }

        Base.inherits(RuntimeClent, {
            constructor: FilePaste,

            init: function init() {
                var me = this;

                me.connectRuntime(me.options, function () {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });

        Mediator.installTo(FilePaste.prototype);

        return FilePaste;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/filepaste', ['base', 'uploader', 'lib/filepaste', 'widgets/widget'], function (Base, Uploader, FilePaste) {
        var $ = Base.$;

        /**
         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
         * @namespace options
         * @for Uploader
         */
        return Uploader.register({
            name: 'paste',

            init: function init(opts) {

                if (!opts.paste || this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                    container: opts.paste,
                    accept: opts.accept
                }),
                    paste;

                this.paste = paste = new FilePaste(options);

                paste.once('ready', deferred.resolve);
                paste.on('paste', function (files) {
                    me.owner.request('add-file', [files]);
                });
                paste.init();

                return deferred.promise();
            },

            destroy: function destroy() {
                this.paste && this.paste.destroy();
            }
        });
    });
    /**
     * @fileOverview Blob
     */
    define('lib/blob', ['base', 'runtime/client'], function (Base, RuntimeClient) {

        function Blob(ruid, source) {
            var me = this;

            me.source = source;
            me.ruid = ruid;
            this.size = source.size || 0;

            // 如果没有指定 mimetype, 但是知道文件后缀。
            if (!source.type && this.ext && ~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)) {
                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
            } else {
                this.type = source.type || 'application/octet-stream';
            }

            RuntimeClient.call(me, 'Blob');
            this.uid = source.uid || this.uid;

            if (ruid) {
                me.connectRuntime(ruid);
            }
        }

        Base.inherits(RuntimeClient, {
            constructor: Blob,

            slice: function slice(start, end) {
                return this.exec('slice', start, end);
            },

            getSource: function getSource() {
                return this.source;
            }
        });

        return Blob;
    });
    /**
     * 为了统一化Flash的File和HTML5的File而存在。
     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
     * @fileOverview File
     */
    define('lib/file', ['base', 'lib/blob'], function (Base, Blob) {

        var uid = 1,
            rExt = /\.([^.]+)$/;

        function File(ruid, file) {
            var ext;

            this.name = file.name || 'untitled' + uid++;
            ext = rExt.exec(file.name) ? RegExp.$1.toLowerCase() : '';

            // todo 支持其他类型文件的转换。
            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
            if (!ext && file.type) {
                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type) ? RegExp.$1.toLowerCase() : '';
                this.name += '.' + ext;
            }

            this.ext = ext;
            this.lastModifiedDate = file.lastModifiedDate || new Date().toLocaleString();

            Blob.apply(this, arguments);
        }

        return Base.inherits(Blob, File);
    });

    /**
     * @fileOverview 错误信息
     */
    define('lib/filepicker', ['base', 'runtime/client', 'lib/file'], function (Base, RuntimeClent, File) {

        var $ = Base.$;

        function FilePicker(opts) {
            opts = this.options = $.extend({}, FilePicker.options, opts);

            opts.container = $(opts.id);

            if (!opts.container.length) {
                throw new Error('按钮指定错误');
            }

            opts.innerHTML = opts.innerHTML || opts.label || opts.container.html() || '';

            opts.button = $(opts.button || document.createElement('div'));
            opts.button.html(opts.innerHTML);
            opts.container.html(opts.button);

            RuntimeClent.call(this, 'FilePicker', true);
        }

        FilePicker.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: true,
            accept: null,
            name: 'file'
        };

        Base.inherits(RuntimeClent, {
            constructor: FilePicker,

            init: function init() {
                var me = this,
                    opts = me.options,
                    button = opts.button;

                button.addClass('webuploader-pick');

                me.on('all', function (type) {
                    var files;

                    switch (type) {
                        case 'mouseenter':
                            button.addClass('webuploader-pick-hover');
                            break;

                        case 'mouseleave':
                            button.removeClass('webuploader-pick-hover');
                            break;

                        case 'change':
                            files = me.exec('getFiles');
                            me.trigger('select', $.map(files, function (file) {
                                file = new File(me.getRuid(), file);

                                // 记录来源。
                                file._refer = opts.container;
                                return file;
                            }), opts.container);
                            break;
                    }
                });

                me.connectRuntime(opts, function () {
                    me.refresh();
                    me.exec('init', opts);
                    me.trigger('ready');
                });

                this._resizeHandler = Base.bindFn(this.refresh, this);
                $(window).on('resize', this._resizeHandler);
            },

            refresh: function refresh() {
                var shimContainer = this.getRuntime().getContainer(),
                    button = this.options.button,
                    width = button.outerWidth ? button.outerWidth() : button.width(),
                    height = button.outerHeight ? button.outerHeight() : button.height(),
                    pos = button.offset();

                width && height && shimContainer.css({
                    bottom: 'auto',
                    right: 'auto',
                    width: width + 'px',
                    height: height + 'px'
                }).offset(pos);
            },

            enable: function enable() {
                var btn = this.options.button;

                btn.removeClass('webuploader-pick-disable');
                this.refresh();
            },

            disable: function disable() {
                var btn = this.options.button;

                this.getRuntime().getContainer().css({
                    top: '-99999px'
                });

                btn.addClass('webuploader-pick-disable');
            },

            destroy: function destroy() {
                var btn = this.options.button;
                $(window).off('resize', this._resizeHandler);
                btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' + 'webuploader-pick');
            }
        });

        return FilePicker;
    });

    /**
     * @fileOverview 文件选择相关
     */
    define('widgets/filepicker', ['base', 'uploader', 'lib/filepicker', 'widgets/widget'], function (Base, Uploader, FilePicker) {
        var $ = Base.$;

        $.extend(Uploader.options, {

            /**
             * @property {Selector | Object} [pick=undefined]
             * @namespace options
             * @for Uploader
             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
             *
             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
             * * `label` {String} 请采用 `innerHTML` 代替
             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
             */
            pick: null,

            /**
             * @property {Arroy} [accept=null]
             * @namespace options
             * @for Uploader
             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
             *
             * * `title` {String} 文字描述
             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
             * * `mimeTypes` {String} 多个用逗号分割。
             *
             * 如：
             *
             * ```
             * {
             *     title: 'Images',
             *     extensions: 'gif,jpg,jpeg,bmp,png',
             *     mimeTypes: 'image/*'
             * }
             * ```
             */
            accept: null /*{
                         title: 'Images',
                         extensions: 'gif,jpg,jpeg,bmp,png',
                         mimeTypes: 'image/*'
                         }*/
        });

        return Uploader.register({
            name: 'picker',

            init: function init(opts) {
                this.pickers = [];
                return opts.pick && this.addBtn(opts.pick);
            },

            refresh: function refresh() {
                $.each(this.pickers, function () {
                    this.refresh();
                });
            },

            /**
             * @method addButton
             * @for Uploader
             * @grammar addButton( pick ) => Promise
             * @description
             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
             * @example
             * uploader.addButton({
             *     id: '#btnContainer',
             *     innerHTML: '选择文件'
             * });
             */
            addBtn: function addBtn(pick) {
                var me = this,
                    opts = me.options,
                    accept = opts.accept,
                    promises = [];

                if (!pick) {
                    return;
                }

                $.isPlainObject(pick) || (pick = {
                    id: pick
                });

                $(pick.id).each(function () {
                    var options, picker, deferred;

                    deferred = Base.Deferred();

                    options = $.extend({}, pick, {
                        accept: $.isPlainObject(accept) ? [accept] : accept,
                        swf: opts.swf,
                        runtimeOrder: opts.runtimeOrder,
                        id: this
                    });

                    picker = new FilePicker(options);

                    picker.once('ready', deferred.resolve);
                    picker.on('select', function (files) {
                        me.owner.request('add-file', [files]);
                    });
                    picker.init();

                    me.pickers.push(picker);

                    promises.push(deferred.promise());
                });

                return Base.when.apply(Base, promises);
            },

            disable: function disable() {
                $.each(this.pickers, function () {
                    this.disable();
                });
            },

            enable: function enable() {
                $.each(this.pickers, function () {
                    this.enable();
                });
            },

            destroy: function destroy() {
                $.each(this.pickers, function () {
                    this.destroy();
                });
                this.pickers = null;
            }
        });
    });
    /**
     * @fileOverview Image
     */
    define('lib/image', ['base', 'runtime/client', 'lib/blob'], function (Base, RuntimeClient, Blob) {
        var $ = Base.$;

        // 构造器。
        function Image(opts) {
            this.options = $.extend({}, Image.options, opts);
            RuntimeClient.call(this, 'Image');

            this.on('load', function () {
                this._info = this.exec('info');
                this._meta = this.exec('meta');
            });
        }

        // 默认选项。
        Image.options = {

            // 默认的图片处理质量
            quality: 90,

            // 是否裁剪
            crop: false,

            // 是否保留头部信息
            preserveHeaders: false,

            // 是否允许放大。
            allowMagnify: false
        };

        // 继承RuntimeClient.
        Base.inherits(RuntimeClient, {
            constructor: Image,

            info: function info(val) {

                // setter
                if (val) {
                    this._info = val;
                    return this;
                }

                // getter
                return this._info;
            },

            meta: function meta(val) {

                // setter
                if (val) {
                    this._meta = val;
                    return this;
                }

                // getter
                return this._meta;
            },

            loadFromBlob: function loadFromBlob(blob) {
                var me = this,
                    ruid = blob.getRuid();

                this.connectRuntime(ruid, function () {
                    me.exec('init', me.options);
                    me.exec('loadFromBlob', blob);
                });
            },

            resize: function resize() {
                var args = Base.slice(arguments);
                return this.exec.apply(this, ['resize'].concat(args));
            },

            crop: function crop() {
                var args = Base.slice(arguments);
                return this.exec.apply(this, ['crop'].concat(args));
            },

            getAsDataUrl: function getAsDataUrl(type) {
                return this.exec('getAsDataUrl', type);
            },

            getAsBlob: function getAsBlob(type) {
                var blob = this.exec('getAsBlob', type);

                return new Blob(this.getRuid(), blob);
            }
        });

        return Image;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/image', ['base', 'uploader', 'lib/image', 'widgets/widget'], function (Base, Uploader, Image) {

        var $ = Base.$,
            throttle;

        // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
        throttle = function (max) {
            var occupied = 0,
                waiting = [],
                tick = function tick() {
                var item;

                while (waiting.length && occupied < max) {
                    item = waiting.shift();
                    occupied += item[0];
                    item[1]();
                }
            };

            return function (emiter, size, cb) {
                waiting.push([size, cb]);
                emiter.once('destroy', function () {
                    occupied -= size;
                    setTimeout(tick, 1);
                });
                setTimeout(tick, 1);
            };
        }(5 * 1024 * 1024);

        $.extend(Uploader.options, {

            /**
             * @property {Object} [thumb]
             * @namespace options
             * @for Uploader
             * @description 配置生成缩略图的选项。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 110,
             *     height: 110,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 70,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: true,
             *
             *     // 是否允许裁剪。
             *     crop: true,
             *
             *     // 为空的话则保留原有图片格式。
             *     // 否则强制转换成指定的类型。
             *     type: 'image/jpeg'
             * }
             * ```
             */
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: true,
                crop: true,
                preserveHeaders: false,

                // 为空的话则保留原有图片格式。
                // 否则强制转换成指定的类型。
                // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
                // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
                type: 'image/jpeg'
            },

            /**
             * @property {Object} [compress]
             * @namespace options
             * @for Uploader
             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 1600,
             *     height: 1600,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 90,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: false,
             *
             *     // 是否允许裁剪。
             *     crop: false,
             *
             *     // 是否保留头部meta信息。
             *     preserveHeaders: true,
             *
             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
             *     // 此属性可能会影响图片自动纠正功能
             *     noCompressIfLarger: false,
             *
             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
             *     compressSize: 0
             * }
             * ```
             */
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: false,
                crop: false,
                preserveHeaders: true
            }
        });

        return Uploader.register({

            name: 'image',

            /**
             * 生成缩略图，此过程为异步，所以需要传入`callback`。
             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
             *
             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
             *
             * `callback`中可以接收到两个参数。
             * * 第一个为error，如果生成缩略图有错误，此error将为真。
             * * 第二个为ret, 缩略图的Data URL值。
             *
             * **注意**
             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
             *
             * @method makeThumb
             * @grammar makeThumb( file, callback ) => undefined
             * @grammar makeThumb( file, callback, width, height ) => undefined
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.makeThumb( file, function( error, ret ) {
             *         if ( error ) {
             *             $li.text('预览错误');
             *         } else {
             *             $li.append('<img alt="" src="' + ret + '" />');
             *         }
             *     });
             *
             * });
             */
            makeThumb: function makeThumb(file, cb, width, height) {
                var opts, image;

                file = this.request('get-file', file);

                // 只预览图片格式。
                if (!file.type.match(/^image/)) {
                    cb(true);
                    return;
                }

                opts = $.extend({}, this.options.thumb);

                // 如果传入的是object.
                if ($.isPlainObject(width)) {
                    opts = $.extend(opts, width);
                    width = null;
                }

                width = width || opts.width;
                height = height || opts.height;

                image = new Image(opts);

                image.once('load', function () {
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();

                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if (width <= 1 && width > 0) {
                        width = file._info.width * width;
                    }

                    // 同样的规则应用于 height
                    if (height <= 1 && height > 0) {
                        height = file._info.height * height;
                    }

                    image.resize(width, height);
                });

                // 当 resize 完后
                image.once('complete', function () {
                    cb(false, image.getAsDataUrl(opts.type));
                    image.destroy();
                });

                image.once('error', function (reason) {
                    cb(reason || true);
                    image.destroy();
                });

                throttle(image, file.source.size, function () {
                    file._info && image.info(file._info);
                    file._meta && image.meta(file._meta);
                    image.loadFromBlob(file.source);
                });
            },

            beforeSendFile: function beforeSendFile(file) {
                var opts = this.options.compress || this.options.resize,
                    compressSize = opts && opts.compressSize || 0,
                    noCompressIfLarger = opts && opts.noCompressIfLarger || false,
                    image,
                    deferred;

                file = this.request('get-file', file);

                // 只压缩 jpeg 图片格式。
                // gif 可能会丢失针
                // bmp png 基本上尺寸都不大，且压缩比比较小。
                if (!opts || !~'image/jpeg,image/jpg'.indexOf(file.type) || file.size < compressSize || file._compressed) {
                    return;
                }

                opts = $.extend({}, opts);
                deferred = Base.Deferred();

                image = new Image(opts);

                deferred.always(function () {
                    image.destroy();
                    image = null;
                });
                image.once('error', deferred.reject);
                image.once('load', function () {
                    var width = opts.width,
                        height = opts.height;

                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();

                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if (width <= 1 && width > 0) {
                        width = file._info.width * width;
                    }

                    // 同样的规则应用于 height
                    if (height <= 1 && height > 0) {
                        height = file._info.height * height;
                    }

                    image.resize(width, height);
                });

                image.once('complete', function () {
                    var blob, size;

                    // 移动端 UC / qq 浏览器的无图模式下
                    // ctx.getImageData 处理大图的时候会报 Exception
                    // INDEX_SIZE_ERR: DOM Exception 1
                    try {
                        blob = image.getAsBlob(opts.type);

                        size = file.size;

                        // 如果压缩后，比原来还大则不用压缩后的。
                        if (!noCompressIfLarger || blob.size < size) {
                            // file.source.destroy && file.source.destroy();
                            file.source = blob;
                            file.size = blob.size;

                            file.trigger('resize', blob.size, size);
                        }

                        // 标记，避免重复压缩。
                        file._compressed = true;
                        deferred.resolve();
                    } catch (e) {
                        // 出错了直接继续，让其上传原始图片
                        deferred.resolve();
                    }
                });

                file._info && image.info(file._info);
                file._meta && image.meta(file._meta);

                image.loadFromBlob(file.source);
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview 文件属性封装
     */
    define('file', ['base', 'mediator'], function (Base, Mediator) {

        var $ = Base.$,
            idPrefix = 'WU_FILE_',
            idSuffix = 0,
            rExt = /\.([^.]+)$/,
            statusMap = {};

        function gid() {
            return idPrefix + idSuffix++;
        }

        /**
         * 文件类
         * @class File
         * @constructor 构造函数
         * @grammar new File( source ) => File
         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
         */
        function WUFile(source) {

            /**
             * 文件名，包括扩展名（后缀）
             * @property name
             * @type {string}
             */
            this.name = source.name || 'Untitled';

            /**
             * 文件体积（字节）
             * @property size
             * @type {uint}
             * @default 0
             */
            this.size = source.size || 0;

            /**
             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
             * @property type
             * @type {string}
             * @default 'application/octet-stream'
             */
            this.type = source.type || 'application/octet-stream';

            /**
             * 文件最后修改日期
             * @property lastModifiedDate
             * @type {int}
             * @default 当前时间戳
             */
            this.lastModifiedDate = source.lastModifiedDate || new Date() * 1;

            /**
             * 文件ID，每个对象具有唯一ID，与文件名无关
             * @property id
             * @type {string}
             */
            this.id = gid();

            /**
             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
             * @property ext
             * @type {string}
             */
            this.ext = rExt.exec(this.name) ? RegExp.$1 : '';

            /**
             * 状态文字说明。在不同的status语境下有不同的用途。
             * @property statusText
             * @type {string}
             */
            this.statusText = '';

            // 存储文件状态，防止通过属性直接修改
            statusMap[this.id] = WUFile.Status.INITED;

            this.source = source;
            this.loaded = 0;

            this.on('error', function (msg) {
                this.setStatus(WUFile.Status.ERROR, msg);
            });
        }

        $.extend(WUFile.prototype, {

            /**
             * 设置状态，状态变化时会触发`change`事件。
             * @method setStatus
             * @grammar setStatus( status[, statusText] );
             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
             */
            setStatus: function setStatus(status, text) {

                var prevStatus = statusMap[this.id];

                typeof text !== 'undefined' && (this.statusText = text);

                if (status !== prevStatus) {
                    statusMap[this.id] = status;
                    /**
                     * 文件状态变化
                     * @event statuschange
                     */
                    this.trigger('statuschange', status, prevStatus);
                }
            },

            /**
             * 获取文件状态
             * @return {File.Status}
             * @example
                     文件状态具体包括以下几种类型：
                     {
                         // 初始化
                        INITED:     0,
                        // 已入队列
                        QUEUED:     1,
                        // 正在上传
                        PROGRESS:     2,
                        // 上传出错
                        ERROR:         3,
                        // 上传成功
                        COMPLETE:     4,
                        // 上传取消
                        CANCELLED:     5
                    }
             */
            getStatus: function getStatus() {
                return statusMap[this.id];
            },

            /**
             * 获取文件原始信息。
             * @return {*}
             */
            getSource: function getSource() {
                return this.source;
            },

            destroy: function destroy() {
                this.off();
                delete statusMap[this.id];
            }
        });

        Mediator.installTo(WUFile.prototype);

        /**
         * 文件状态值，具体包括以下几种类型：
         * * `inited` 初始状态
         * * `queued` 已经进入队列, 等待上传
         * * `progress` 上传中
         * * `complete` 上传完成。
         * * `error` 上传出错，可重试
         * * `interrupt` 上传中断，可续传。
         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
         * * `cancelled` 文件被移除。
         * @property {Object} Status
         * @namespace File
         * @class File
         * @static
         */
        WUFile.Status = {
            INITED: 'inited', // 初始状态
            QUEUED: 'queued', // 已经进入队列, 等待上传
            PROGRESS: 'progress', // 上传中
            ERROR: 'error', // 上传出错，可重试
            COMPLETE: 'complete', // 上传完成。
            CANCELLED: 'cancelled', // 上传取消。
            INTERRUPT: 'interrupt', // 上传中断，可续传。
            INVALID: 'invalid' // 文件不合格，不能重试上传。
        };

        return WUFile;
    });

    /**
     * @fileOverview 文件队列
     */
    define('queue', ['base', 'mediator', 'file'], function (Base, Mediator, WUFile) {

        var $ = Base.$,
            STATUS = WUFile.Status;

        /**
         * 文件队列, 用来存储各个状态中的文件。
         * @class Queue
         * @extends Mediator
         */
        function Queue() {

            /**
             * 统计文件数。
             * * `numOfQueue` 队列中的文件数。
             * * `numOfSuccess` 上传成功的文件数
             * * `numOfCancel` 被取消的文件数
             * * `numOfProgress` 正在上传中的文件数
             * * `numOfUploadFailed` 上传错误的文件数。
             * * `numOfInvalid` 无效的文件数。
             * * `numofDeleted` 被移除的文件数。
             * @property {Object} stats
             */
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            };

            // 上传队列，仅包括等待上传的文件
            this._queue = [];

            // 存储所有文件
            this._map = {};
        }

        $.extend(Queue.prototype, {

            /**
             * 将新文件加入对队列尾部
             *
             * @method append
             * @param  {File} file   文件对象
             */
            append: function append(file) {
                this._queue.push(file);
                this._fileAdded(file);
                return this;
            },

            /**
             * 将新文件加入对队列头部
             *
             * @method prepend
             * @param  {File} file   文件对象
             */
            prepend: function prepend(file) {
                this._queue.unshift(file);
                this._fileAdded(file);
                return this;
            },

            /**
             * 获取文件对象
             *
             * @method getFile
             * @param  {String} fileId   文件ID
             * @return {File}
             */
            getFile: function getFile(fileId) {
                if (typeof fileId !== 'string') {
                    return fileId;
                }
                return this._map[fileId];
            },

            /**
             * 从队列中取出一个指定状态的文件。
             * @grammar fetch( status ) => File
             * @method fetch
             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
             * @return {File} [File](#WebUploader:File)
             */
            fetch: function fetch(status) {
                var len = this._queue.length,
                    i,
                    file;

                status = status || STATUS.QUEUED;

                for (i = 0; i < len; i++) {
                    file = this._queue[i];

                    if (status === file.getStatus()) {
                        return file;
                    }
                }

                return null;
            },

            /**
             * 对队列进行排序，能够控制文件上传顺序。
             * @grammar sort( fn ) => undefined
             * @method sort
             * @param {Function} fn 排序方法
             */
            sort: function sort(fn) {
                if (typeof fn === 'function') {
                    this._queue.sort(fn);
                }
            },

            /**
             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
             * @grammar getFiles( [status1[, status2 ...]] ) => Array
             * @method getFiles
             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
             */
            getFiles: function getFiles() {
                var sts = [].slice.call(arguments, 0),
                    ret = [],
                    i = 0,
                    len = this._queue.length,
                    file;

                for (; i < len; i++) {
                    file = this._queue[i];

                    if (sts.length && !~$.inArray(file.getStatus(), sts)) {
                        continue;
                    }

                    ret.push(file);
                }

                return ret;
            },

            /**
             * 在队列中删除文件。
             * @grammar removeFile( file ) => Array
             * @method removeFile
             * @param {File} 文件对象。
             */
            removeFile: function removeFile(file) {
                var me = this,
                    existing = this._map[file.id];

                if (existing) {
                    delete this._map[file.id];
                    file.destroy();
                    this.stats.numofDeleted++;
                }
            },

            _fileAdded: function _fileAdded(file) {
                var me = this,
                    existing = this._map[file.id];

                if (!existing) {
                    this._map[file.id] = file;

                    file.on('statuschange', function (cur, pre) {
                        me._onFileStatusChange(cur, pre);
                    });
                }
            },

            _onFileStatusChange: function _onFileStatusChange(curStatus, preStatus) {
                var stats = this.stats;

                switch (preStatus) {
                    case STATUS.PROGRESS:
                        stats.numOfProgress--;
                        break;

                    case STATUS.QUEUED:
                        stats.numOfQueue--;
                        break;

                    case STATUS.ERROR:
                        stats.numOfUploadFailed--;
                        break;

                    case STATUS.INVALID:
                        stats.numOfInvalid--;
                        break;

                    case STATUS.INTERRUPT:
                        stats.numofInterrupt--;
                        break;
                }

                switch (curStatus) {
                    case STATUS.QUEUED:
                        stats.numOfQueue++;
                        break;

                    case STATUS.PROGRESS:
                        stats.numOfProgress++;
                        break;

                    case STATUS.ERROR:
                        stats.numOfUploadFailed++;
                        break;

                    case STATUS.COMPLETE:
                        stats.numOfSuccess++;
                        break;

                    case STATUS.CANCELLED:
                        stats.numOfCancel++;
                        break;

                    case STATUS.INVALID:
                        stats.numOfInvalid++;
                        break;

                    case STATUS.INTERRUPT:
                        stats.numofInterrupt++;
                        break;
                }
            }

        });

        Mediator.installTo(Queue.prototype);

        return Queue;
    });
    /**
     * @fileOverview 队列
     */
    define('widgets/queue', ['base', 'uploader', 'queue', 'file', 'lib/file', 'runtime/client', 'widgets/widget'], function (Base, Uploader, Queue, WUFile, File, RuntimeClient) {

        var $ = Base.$,
            rExt = /\.\w+$/,
            Status = WUFile.Status;

        return Uploader.register({
            name: 'queue',

            init: function init(opts) {
                var me = this,
                    deferred,
                    len,
                    i,
                    item,
                    arr,
                    accept,
                    runtime;

                if ($.isPlainObject(opts.accept)) {
                    opts.accept = [opts.accept];
                }

                // accept中的中生成匹配正则。
                if (opts.accept) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        item = opts.accept[i].extensions;
                        item && arr.push(item);
                    }

                    if (arr.length) {
                        accept = '\\.' + arr.join(',').replace(/,/g, '$|\\.').replace(/\*/g, '.*') + '$';
                    }

                    me.accept = new RegExp(accept, 'i');
                }

                me.queue = new Queue();
                me.stats = me.queue.stats;

                // 如果当前不是html5运行时，那就算了。
                // 不执行后续操作
                if (this.request('predict-runtime-type') !== 'html5') {
                    return;
                }

                // 创建一个 html5 运行时的 placeholder
                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
                deferred = Base.Deferred();
                this.placeholder = runtime = new RuntimeClient('Placeholder');
                runtime.connectRuntime({
                    runtimeOrder: 'html5'
                }, function () {
                    me._ruid = runtime.getRuid();
                    deferred.resolve();
                });
                return deferred.promise();
            },

            // 为了支持外部直接添加一个原生File对象。
            _wrapFile: function _wrapFile(file) {
                if (!(file instanceof WUFile)) {

                    if (!(file instanceof File)) {
                        if (!this._ruid) {
                            throw new Error('Can\'t add external files.');
                        }
                        file = new File(this._ruid, file);
                    }

                    file = new WUFile(file);
                }

                return file;
            },

            // 判断文件是否可以被加入队列
            acceptFile: function acceptFile(file) {
                var invalid = !file || !file.size || this.accept &&

                // 如果名字中有后缀，才做后缀白名单处理。
                rExt.exec(file.name) && !this.accept.test(file.name);

                return !invalid;
            },

            /**
             * @event beforeFileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
             * @for  Uploader
             */

            /**
             * @event fileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列以后触发。
             * @for  Uploader
             */

            _addFile: function _addFile(file) {
                var me = this;

                file = me._wrapFile(file);

                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
                if (!me.owner.trigger('beforeFileQueued', file)) {
                    return;
                }

                // 类型不匹配，则派送错误事件，并返回。
                if (!me.acceptFile(file)) {
                    me.owner.trigger('error', 'Q_TYPE_DENIED', file);
                    return;
                }

                me.queue.append(file);
                me.owner.trigger('fileQueued', file);
                return file;
            },

            getFile: function getFile(fileId) {
                return this.queue.getFile(fileId);
            },

            /**
             * @event filesQueued
             * @param {File} files 数组，内容为原始File(lib/File）对象。
             * @description 当一批文件添加进队列以后触发。
             * @for  Uploader
             */

            /**
             * @property {Boolean} [auto=false]
             * @namespace options
             * @for Uploader
             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
             * 
             */

            /**
             * @method addFiles
             * @grammar addFiles( file ) => undefined
             * @grammar addFiles( [file1, file2 ...] ) => undefined
             * @param {Array of File or File} [files] Files 对象 数组
             * @description 添加文件到队列
             * @for  Uploader
             */
            addFile: function addFile(files) {
                var me = this;

                if (!files.length) {
                    files = [files];
                }

                files = $.map(files, function (file) {
                    return me._addFile(file);
                });

                me.owner.trigger('filesQueued', files);

                if (me.options.auto) {
                    setTimeout(function () {
                        me.request('start-upload');
                    }, 20);
                }
            },

            getStats: function getStats() {
                return this.stats;
            },

            /**
             * @event fileDequeued
             * @param {File} file File对象
             * @description 当文件被移除队列后触发。
             * @for  Uploader
             */

            /**
            * @method removeFile
            * @grammar removeFile( file ) => undefined
            * @grammar removeFile( id ) => undefined
            * @grammar removeFile( file, true ) => undefined
            * @grammar removeFile( id, true ) => undefined
            * @param {File|id} file File对象或这File对象的id
            * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
            * @for  Uploader
            * @example
            *
            * $li.on('click', '.remove-this', function() {
            *     uploader.removeFile( file );
            * })
            */
            removeFile: function removeFile(file, remove) {
                var me = this;

                file = file.id ? file : me.queue.getFile(file);

                this.request('cancel-file', file);

                if (remove) {
                    this.queue.removeFile(file);
                }
            },

            /**
             * @method getFiles
             * @grammar getFiles() => Array
             * @grammar getFiles( status1, status2, status... ) => Array
             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
             * @for  Uploader
             * @example
             * console.log( uploader.getFiles() );    // => all files
             * console.log( uploader.getFiles('error') )    // => all error files.
             */
            getFiles: function getFiles() {
                return this.queue.getFiles.apply(this.queue, arguments);
            },

            fetchFile: function fetchFile() {
                return this.queue.fetch.apply(this.queue, arguments);
            },

            /**
             * @method retry
             * @grammar retry() => undefined
             * @grammar retry( file ) => undefined
             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
             * @for  Uploader
             * @example
             * function retry() {
             *     uploader.retry();
             * }
             */
            retry: function retry(file, noForceStart) {
                var me = this,
                    files,
                    i,
                    len;

                if (file) {
                    file = file.id ? file : me.queue.getFile(file);
                    file.setStatus(Status.QUEUED);
                    noForceStart || me.request('start-upload');
                    return;
                }

                files = me.queue.getFiles(Status.ERROR);
                i = 0;
                len = files.length;

                for (; i < len; i++) {
                    file = files[i];
                    file.setStatus(Status.QUEUED);
                }

                me.request('start-upload');
            },

            /**
             * @method sort
             * @grammar sort( fn ) => undefined
             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
             * @for  Uploader
             */
            sortFiles: function sortFiles() {
                return this.queue.sort.apply(this.queue, arguments);
            },

            /**
             * @event reset
             * @description 当 uploader 被重置的时候触发。
             * @for  Uploader
             */

            /**
             * @method reset
             * @grammar reset() => undefined
             * @description 重置uploader。目前只重置了队列。
             * @for  Uploader
             * @example
             * uploader.reset();
             */
            reset: function reset() {
                this.owner.trigger('reset');
                this.queue = new Queue();
                this.stats = this.queue.stats;
            },

            destroy: function destroy() {
                this.reset();
                this.placeholder && this.placeholder.destroy();
            }
        });
    });
    /**
     * @fileOverview 添加获取Runtime相关信息的方法。
     */
    define('widgets/runtime', ['uploader', 'runtime/runtime', 'widgets/widget'], function (Uploader, Runtime) {

        Uploader.support = function () {
            return Runtime.hasRuntime.apply(Runtime, arguments);
        };

        /**
         * @property {Object} [runtimeOrder=html5,flash]
         * @namespace options
         * @for Uploader
         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
         *
         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
         */

        return Uploader.register({
            name: 'runtime',

            init: function init() {
                if (!this.predictRuntimeType()) {
                    throw Error('Runtime Error');
                }
            },

            /**
             * 预测Uploader将采用哪个`Runtime`
             * @grammar predictRuntimeType() => String
             * @method predictRuntimeType
             * @for  Uploader
             */
            predictRuntimeType: function predictRuntimeType() {
                var orders = this.options.runtimeOrder || Runtime.orders,
                    type = this.type,
                    i,
                    len;

                if (!type) {
                    orders = orders.split(/\s*,\s*/g);

                    for (i = 0, len = orders.length; i < len; i++) {
                        if (Runtime.hasRuntime(orders[i])) {
                            this.type = type = orders[i];
                            break;
                        }
                    }
                }

                return type;
            }
        });
    });
    /**
     * @fileOverview Transport
     */
    define('lib/transport', ['base', 'runtime/client', 'mediator'], function (Base, RuntimeClient, Mediator) {

        var $ = Base.$;

        function Transport(opts) {
            var me = this;

            opts = me.options = $.extend(true, {}, Transport.options, opts || {});
            RuntimeClient.call(this, 'Transport');

            this._blob = null;
            this._formData = opts.formData || {};
            this._headers = opts.headers || {};

            this.on('progress', this._timeout);
            this.on('load error', function () {
                me.trigger('progress', 1);
                clearTimeout(me._timer);
            });
        }

        Transport.options = {
            server: '',
            method: 'POST',

            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
            withCredentials: false,
            fileVal: 'file',
            timeout: 2 * 60 * 1000, // 2分钟
            formData: {},
            headers: {},
            sendAsBinary: false
        };

        $.extend(Transport.prototype, {

            // 添加Blob, 只能添加一次，最后一次有效。
            appendBlob: function appendBlob(key, blob, filename) {
                var me = this,
                    opts = me.options;

                if (me.getRuid()) {
                    me.disconnectRuntime();
                }

                // 连接到blob归属的同一个runtime.
                me.connectRuntime(blob.ruid, function () {
                    me.exec('init');
                });

                me._blob = blob;
                opts.fileVal = key || opts.fileVal;
                opts.filename = filename || opts.filename;
            },

            // 添加其他字段
            append: function append(key, value) {
                if ((typeof key === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key)) === 'object') {
                    $.extend(this._formData, key);
                } else {
                    this._formData[key] = value;
                }
            },

            setRequestHeader: function setRequestHeader(key, value) {
                if ((typeof key === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key)) === 'object') {
                    $.extend(this._headers, key);
                } else {
                    this._headers[key] = value;
                }
            },

            send: function send(method) {
                this.exec('send', method);
                this._timeout();
            },

            abort: function abort() {
                clearTimeout(this._timer);
                return this.exec('abort');
            },

            destroy: function destroy() {
                this.trigger('destroy');
                this.off();
                this.exec('destroy');
                this.disconnectRuntime();
            },

            getResponse: function getResponse() {
                return this.exec('getResponse');
            },

            getResponseAsJson: function getResponseAsJson() {
                return this.exec('getResponseAsJson');
            },

            getStatus: function getStatus() {
                return this.exec('getStatus');
            },

            _timeout: function _timeout() {
                var me = this,
                    duration = me.options.timeout;

                if (!duration) {
                    return;
                }

                clearTimeout(me._timer);
                me._timer = setTimeout(function () {
                    me.abort();
                    me.trigger('error', 'timeout');
                }, duration);
            }

        });

        // 让Transport具备事件功能。
        Mediator.installTo(Transport.prototype);

        return Transport;
    });
    /**
     * @fileOverview 负责文件上传相关。
     */
    define('widgets/upload', ['base', 'uploader', 'file', 'lib/transport', 'widgets/widget'], function (Base, Uploader, WUFile, Transport) {

        var $ = Base.$,
            isPromise = Base.isPromise,
            Status = WUFile.Status;

        // 添加默认配置项
        $.extend(Uploader.options, {

            /**
             * @property {Boolean} [prepareNextFile=false]
             * @namespace options
             * @for Uploader
             * @description 是否允许在文件传输时提前把下一个文件准备好。
             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
             */
            prepareNextFile: false,

            /**
             * @property {Boolean} [chunked=false]
             * @namespace options
             * @for Uploader
             * @description 是否要分片处理大文件上传。
             */
            chunked: false,

            /**
             * @property {Boolean} [chunkSize=5242880]
             * @namespace options
             * @for Uploader
             * @description 如果要分片，分多大一片？ 默认大小为5M.
             */
            chunkSize: 5 * 1024 * 1024,

            /**
             * @property {Boolean} [chunkRetry=2]
             * @namespace options
             * @for Uploader
             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
             */
            chunkRetry: 2,

            /**
             * @property {Boolean} [threads=3]
             * @namespace options
             * @for Uploader
             * @description 上传并发数。允许同时最大上传进程数。
             */
            threads: 3,

            /**
             * @property {Object} [formData={}]
             * @namespace options
             * @for Uploader
             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
             */
            formData: {}

            /**
             * @property {Object} [fileVal='file']
             * @namespace options
             * @for Uploader
             * @description 设置文件上传域的name。
             */

            /**
             * @property {Object} [method='POST']
             * @namespace options
             * @for Uploader
             * @description 文件上传方式，`POST`或者`GET`。
             */

            /**
             * @property {Object} [sendAsBinary=false]
             * @namespace options
             * @for Uploader
             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
             * 其他参数在$_GET数组中。
             */
        });

        // 负责将文件切片。
        function CuteFile(file, chunkSize) {
            var pending = [],
                blob = file.source,
                total = blob.size,
                chunks = chunkSize ? Math.ceil(total / chunkSize) : 1,
                start = 0,
                index = 0,
                len,
                api;

            api = {
                file: file,

                has: function has() {
                    return !!pending.length;
                },

                shift: function shift() {
                    return pending.shift();
                },

                unshift: function unshift(block) {
                    pending.unshift(block);
                }
            };

            while (index < chunks) {
                len = Math.min(chunkSize, total - start);

                pending.push({
                    file: file,
                    start: start,
                    end: chunkSize ? start + len : total,
                    total: total,
                    chunks: chunks,
                    chunk: index++,
                    cuted: api
                });
                start += len;
            }

            file.blocks = pending.concat();
            file.remaning = pending.length;

            return api;
        }

        Uploader.register({
            name: 'upload',

            init: function init() {
                var owner = this.owner,
                    me = this;

                this.runing = false;
                this.progress = false;

                owner.on('startUpload', function () {
                    me.progress = true;
                }).on('uploadFinished', function () {
                    me.progress = false;
                });

                // 记录当前正在传的数据，跟threads相关
                this.pool = [];

                // 缓存分好片的文件。
                this.stack = [];

                // 缓存即将上传的文件。
                this.pending = [];

                // 跟踪还有多少分片在上传中但是没有完成上传。
                this.remaning = 0;
                this.__tick = Base.bindFn(this._tick, this);

                owner.on('uploadComplete', function (file) {

                    // 把其他块取消了。
                    file.blocks && $.each(file.blocks, function (_, v) {
                        v.transport && (v.transport.abort(), v.transport.destroy());
                        delete v.transport;
                    });

                    delete file.blocks;
                    delete file.remaning;
                });
            },

            reset: function reset() {
                this.request('stop-upload', true);
                this.runing = false;
                this.pool = [];
                this.stack = [];
                this.pending = [];
                this.remaning = 0;
                this._trigged = false;
                this._promise = null;
            },

            /**
             * @event startUpload
             * @description 当开始上传流程时触发。
             * @for  Uploader
             */

            /**
             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
             *
             * 可以指定开始某一个文件。
             * @grammar upload() => undefined
             * @grammar upload( file | fileId) => undefined
             * @method upload
             * @for  Uploader
             */
            startUpload: function startUpload(file) {
                var me = this;

                // 移出invalid的文件
                $.each(me.request('get-files', Status.INVALID), function () {
                    me.request('remove-file', this);
                });

                // 如果指定了开始某个文件，则只开始指定文件。
                if (file) {
                    file = file.id ? file : me.request('get-file', file);

                    if (file.getStatus() === Status.INTERRUPT) {
                        $.each(me.pool, function (_, v) {

                            // 之前暂停过。
                            if (v.file !== file) {
                                return;
                            }

                            v.transport && v.transport.send();
                        });

                        file.setStatus(Status.QUEUED);
                    } else if (file.getStatus() === Status.PROGRESS) {
                        return;
                    } else {
                        file.setStatus(Status.QUEUED);
                    }
                } else {
                    $.each(me.request('get-files', [Status.INITED]), function () {
                        this.setStatus(Status.QUEUED);
                    });
                }

                if (me.runing) {
                    return;
                }

                me.runing = true;

                var files = [];

                // 如果有暂停的，则续传
                $.each(me.pool, function (_, v) {
                    var file = v.file;

                    if (file.getStatus() === Status.INTERRUPT) {
                        files.push(file);
                        me._trigged = false;
                        v.transport && v.transport.send();
                    }
                });

                var file;
                while (file = files.shift()) {
                    file.setStatus(Status.PROGRESS);
                }

                file || $.each(me.request('get-files', Status.INTERRUPT), function () {
                    this.setStatus(Status.PROGRESS);
                });

                me._trigged = false;
                Base.nextTick(me.__tick);
                me.owner.trigger('startUpload');
            },

            /**
             * @event stopUpload
             * @description 当开始上传流程暂停时触发。
             * @for  Uploader
             */

            /**
             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
             *
             * 如果第一个参数是文件，则只暂停指定文件。
             * @grammar stop() => undefined
             * @grammar stop( true ) => undefined
             * @grammar stop( file ) => undefined
             * @method stop
             * @for  Uploader
             */
            stopUpload: function stopUpload(file, interrupt) {
                var me = this;

                if (file === true) {
                    interrupt = file;
                    file = null;
                }

                if (me.runing === false) {
                    return;
                }

                // 如果只是暂停某个文件。
                if (file) {
                    file = file.id ? file : me.request('get-file', file);

                    if (file.getStatus() !== Status.PROGRESS && file.getStatus() !== Status.QUEUED) {
                        return;
                    }

                    file.setStatus(Status.INTERRUPT);
                    $.each(me.pool, function (_, v) {

                        // 只 abort 指定的文件。
                        if (v.file !== file) {
                            return;
                        }

                        v.transport && v.transport.abort();
                        me._putback(v);
                        me._popBlock(v);
                    });

                    return Base.nextTick(me.__tick);
                }

                me.runing = false;

                if (this._promise && this._promise.file) {
                    this._promise.file.setStatus(Status.INTERRUPT);
                }

                interrupt && $.each(me.pool, function (_, v) {
                    v.transport && v.transport.abort();
                    v.file.setStatus(Status.INTERRUPT);
                });

                me.owner.trigger('stopUpload');
            },

            /**
             * @method cancelFile
             * @grammar cancelFile( file ) => undefined
             * @grammar cancelFile( id ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 标记文件状态为已取消, 同时将中断文件传输。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.cancelFile( file );
             * })
             */
            cancelFile: function cancelFile(file) {
                file = file.id ? file : this.request('get-file', file);

                // 如果正在上传。
                file.blocks && $.each(file.blocks, function (_, v) {
                    var _tr = v.transport;

                    if (_tr) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });

                file.setStatus(Status.CANCELLED);
                this.owner.trigger('fileDequeued', file);
            },

            /**
             * 判断`Uplaode`r是否正在上传中。
             * @grammar isInProgress() => Boolean
             * @method isInProgress
             * @for  Uploader
             */
            isInProgress: function isInProgress() {
                return !!this.progress;
            },

            _getStats: function _getStats() {
                return this.request('get-stats');
            },

            /**
             * 掉过一个文件上传，直接标记指定文件为已上传状态。
             * @grammar skipFile( file ) => undefined
             * @method skipFile
             * @for  Uploader
             */
            skipFile: function skipFile(file, status) {
                file = file.id ? file : this.request('get-file', file);

                file.setStatus(status || Status.COMPLETE);
                file.skipped = true;

                // 如果正在上传。
                file.blocks && $.each(file.blocks, function (_, v) {
                    var _tr = v.transport;

                    if (_tr) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });

                this.owner.trigger('uploadSkip', file);
            },

            /**
             * @event uploadFinished
             * @description 当所有文件上传结束时触发。
             * @for  Uploader
             */
            _tick: function _tick() {
                var me = this,
                    opts = me.options,
                    fn,
                    val;

                // 上一个promise还没有结束，则等待完成后再执行。
                if (me._promise) {
                    return me._promise.always(me.__tick);
                }

                // 还有位置，且还有文件要处理的话。
                if (me.pool.length < opts.threads && (val = me._nextBlock())) {
                    me._trigged = false;

                    fn = function fn(val) {
                        me._promise = null;

                        // 有可能是reject过来的，所以要检测val的类型。
                        val && val.file && me._startSend(val);
                        Base.nextTick(me.__tick);
                    };

                    me._promise = isPromise(val) ? val.always(fn) : fn(val);

                    // 没有要上传的了，且没有正在传输的了。
                } else if (!me.remaning && !me._getStats().numOfQueue && !me._getStats().numofInterrupt) {
                    me.runing = false;

                    me._trigged || Base.nextTick(function () {
                        me.owner.trigger('uploadFinished');
                    });
                    me._trigged = true;
                }
            },

            _putback: function _putback(block) {
                var idx;

                block.cuted.unshift(block);
                idx = this.stack.indexOf(block.cuted);

                if (!~idx) {
                    this.stack.unshift(block.cuted);
                }
            },

            _getStack: function _getStack() {
                var i = 0,
                    act;

                while (act = this.stack[i++]) {
                    if (act.has() && act.file.getStatus() === Status.PROGRESS) {
                        return act;
                    } else if (!act.has() || act.file.getStatus() !== Status.PROGRESS && act.file.getStatus() !== Status.INTERRUPT) {

                        // 把已经处理完了的，或者，状态为非 progress（上传中）、
                        // interupt（暂停中） 的移除。
                        this.stack.splice(--i, 1);
                    }
                }

                return null;
            },

            _nextBlock: function _nextBlock() {
                var me = this,
                    opts = me.options,
                    act,
                    next,
                    done,
                    preparing;

                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
                if (act = this._getStack()) {

                    // 是否提前准备下一个文件
                    if (opts.prepareNextFile && !me.pending.length) {
                        me._prepareNextFile();
                    }

                    return act.shift();

                    // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
                } else if (me.runing) {

                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
                    if (!me.pending.length && me._getStats().numOfQueue) {
                        me._prepareNextFile();
                    }

                    next = me.pending.shift();
                    done = function done(file) {
                        if (!file) {
                            return null;
                        }

                        act = CuteFile(file, opts.chunked ? opts.chunkSize : 0);
                        me.stack.push(act);
                        return act.shift();
                    };

                    // 文件可能还在prepare中，也有可能已经完全准备好了。
                    if (isPromise(next)) {
                        preparing = next.file;
                        next = next[next.pipe ? 'pipe' : 'then'](done);
                        next.file = preparing;
                        return next;
                    }

                    return done(next);
                }
            },

            /**
             * @event uploadStart
             * @param {File} file File对象
             * @description 某个文件开始上传前触发，一个文件只会触发一次。
             * @for  Uploader
             */
            _prepareNextFile: function _prepareNextFile() {
                var me = this,
                    file = me.request('fetch-file'),
                    pending = me.pending,
                    promise;

                if (file) {
                    promise = me.request('before-send-file', file, function () {

                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
                        if (file.getStatus() === Status.PROGRESS || file.getStatus() === Status.INTERRUPT) {
                            return file;
                        }

                        return me._finishFile(file);
                    });

                    me.owner.trigger('uploadStart', file);
                    file.setStatus(Status.PROGRESS);

                    promise.file = file;

                    // 如果还在pending中，则替换成文件本身。
                    promise.done(function () {
                        var idx = $.inArray(promise, pending);

                        ~idx && pending.splice(idx, 1, file);
                    });

                    // befeore-send-file的钩子就有错误发生。
                    promise.fail(function (reason) {
                        file.setStatus(Status.ERROR, reason);
                        me.owner.trigger('uploadError', file, reason);
                        me.owner.trigger('uploadComplete', file);
                    });

                    pending.push(promise);
                }
            },

            // 让出位置了，可以让其他分片开始上传
            _popBlock: function _popBlock(block) {
                var idx = $.inArray(block, this.pool);

                this.pool.splice(idx, 1);
                block.file.remaning--;
                this.remaning--;
            },

            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
            _startSend: function _startSend(block) {
                var me = this,
                    file = block.file,
                    promise;

                // 有可能在 before-send-file 的 promise 期间改变了文件状态。
                // 如：暂停，取消
                // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
                if (file.getStatus() !== Status.PROGRESS) {

                    // 如果是中断，则还需要放回去。
                    if (file.getStatus() === Status.INTERRUPT) {
                        me._putback(block);
                    }

                    return;
                }

                me.pool.push(block);
                me.remaning++;

                // 如果没有分片，则直接使用原始的。
                // 不会丢失content-type信息。
                block.blob = block.chunks === 1 ? file.source : file.source.slice(block.start, block.end);

                // hook, 每个分片发送之前可能要做些异步的事情。
                promise = me.request('before-send', block, function () {

                    // 有可能文件已经上传出错了，所以不需要再传输了。
                    if (file.getStatus() === Status.PROGRESS) {
                        me._doSend(block);
                    } else {
                        me._popBlock(block);
                        Base.nextTick(me.__tick);
                    }
                });

                // 如果为fail了，则跳过此分片。
                promise.fail(function () {
                    if (file.remaning === 1) {
                        me._finishFile(file).always(function () {
                            block.percentage = 1;
                            me._popBlock(block);
                            me.owner.trigger('uploadComplete', file);
                            Base.nextTick(me.__tick);
                        });
                    } else {
                        block.percentage = 1;
                        me.updateFileProgress(file);
                        me._popBlock(block);
                        Base.nextTick(me.__tick);
                    }
                });
            },

            /**
             * @event uploadBeforeSend
             * @param {Object} object
             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
             * @param {Object} headers 可以扩展此对象来控制上传头部。
             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
             * @for  Uploader
             */

            /**
             * @event uploadAccept
             * @param {Object} object
             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
             * @for  Uploader
             */

            /**
             * @event uploadProgress
             * @param {File} file File对象
             * @param {Number} percentage 上传进度
             * @description 上传过程中触发，携带上传进度。
             * @for  Uploader
             */

            /**
             * @event uploadError
             * @param {File} file File对象
             * @param {String} reason 出错的code
             * @description 当文件上传出错时触发。
             * @for  Uploader
             */

            /**
             * @event uploadSuccess
             * @param {File} file File对象
             * @param {Object} response 服务端返回的数据
             * @description 当文件上传成功时触发。
             * @for  Uploader
             */

            /**
             * @event uploadComplete
             * @param {File} [file] File对象
             * @description 不管成功或者失败，文件上传完成时触发。
             * @for  Uploader
             */

            // 做上传操作。
            _doSend: function _doSend(block) {
                var me = this,
                    owner = me.owner,
                    opts = me.options,
                    file = block.file,
                    tr = new Transport(opts),
                    data = $.extend({}, opts.formData),
                    headers = $.extend({}, opts.headers),
                    requestAccept,
                    ret;

                block.transport = tr;

                tr.on('destroy', function () {
                    delete block.transport;
                    me._popBlock(block);
                    Base.nextTick(me.__tick);
                });

                // 广播上传进度。以文件为单位。
                tr.on('progress', function (percentage) {
                    block.percentage = percentage;
                    me.updateFileProgress(file);
                });

                // 用来询问，是否返回的结果是有错误的。
                requestAccept = function requestAccept(reject) {
                    var fn;

                    ret = tr.getResponseAsJson() || {};
                    ret._raw = tr.getResponse();
                    fn = function fn(value) {
                        reject = value;
                    };

                    // 服务端响应了，不代表成功了，询问是否响应正确。
                    if (!owner.trigger('uploadAccept', block, ret, fn)) {
                        reject = reject || 'server';
                    }

                    return reject;
                };

                // 尝试重试，然后广播文件上传出错。
                tr.on('error', function (type, flag) {
                    block.retried = block.retried || 0;

                    // 自动重试
                    if (block.chunks > 1 && ~'http,abort'.indexOf(type) && block.retried < opts.chunkRetry) {

                        block.retried++;
                        tr.send();
                    } else {

                        // http status 500 ~ 600
                        if (!flag && type === 'server') {
                            type = requestAccept(type);
                        }

                        file.setStatus(Status.ERROR, type);
                        owner.trigger('uploadError', file, type);
                        owner.trigger('uploadComplete', file);
                    }
                });

                // 上传成功
                tr.on('load', function () {
                    var reason;

                    // 如果非预期，转向上传出错。
                    if (reason = requestAccept()) {
                        tr.trigger('error', reason, true);
                        return;
                    }

                    // 全部上传完成。
                    if (file.remaning === 1) {
                        me._finishFile(file, ret);
                    } else {
                        tr.destroy();
                    }
                });

                // 配置默认的上传字段。
                data = $.extend(data, {
                    id: file.id,
                    name: file.name,
                    type: file.type,
                    lastModifiedDate: file.lastModifiedDate,
                    size: file.size
                });

                block.chunks > 1 && $.extend(data, {
                    chunks: block.chunks,
                    chunk: block.chunk
                });

                // 在发送之间可以添加字段什么的。。。
                // 如果默认的字段不够使用，可以通过监听此事件来扩展
                owner.trigger('uploadBeforeSend', block, data, headers);

                // 开始发送。
                tr.appendBlob(opts.fileVal, block.blob, file.name);
                tr.append(data);
                tr.setRequestHeader(headers);
                tr.send();
            },

            // 完成上传。
            _finishFile: function _finishFile(file, ret, hds) {
                var owner = this.owner;

                return owner.request('after-send-file', arguments, function () {
                    file.setStatus(Status.COMPLETE);
                    owner.trigger('uploadSuccess', file, ret, hds);
                }).fail(function (reason) {

                    // 如果外部已经标记为invalid什么的，不再改状态。
                    if (file.getStatus() === Status.PROGRESS) {
                        file.setStatus(Status.ERROR, reason);
                    }

                    owner.trigger('uploadError', file, reason);
                }).always(function () {
                    owner.trigger('uploadComplete', file);
                });
            },

            updateFileProgress: function updateFileProgress(file) {
                var totalPercent = 0,
                    uploaded = 0;

                if (!file.blocks) {
                    return;
                }

                $.each(file.blocks, function (_, v) {
                    uploaded += (v.percentage || 0) * (v.end - v.start);
                });

                totalPercent = uploaded / file.size;
                this.owner.trigger('uploadProgress', file, totalPercent || 0);
            }

        });
    });
    /**
     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
     */

    define('widgets/validator', ['base', 'uploader', 'file', 'widgets/widget'], function (Base, Uploader, WUFile) {

        var $ = Base.$,
            validators = {},
            api;

        /**
         * @event error
         * @param {String} type 错误类型。
         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
         *
         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
         * @for  Uploader
         */

        // 暴露给外面的api
        api = {

            // 添加验证器
            addValidator: function addValidator(type, cb) {
                validators[type] = cb;
            },

            // 移除验证器
            removeValidator: function removeValidator(type) {
                delete validators[type];
            }
        };

        // 在Uploader初始化的时候启动Validators的初始化
        Uploader.register({
            name: 'validator',

            init: function init() {
                var me = this;
                Base.nextTick(function () {
                    $.each(validators, function () {
                        this.call(me.owner);
                    });
                });
            }
        });

        /**
         * @property {int} [fileNumLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总数量, 超出则不允许加入队列。
         */
        api.addValidator('fileNumLimit', function () {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt(opts.fileNumLimit, 10),
                flag = true;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {

                if (count >= max && flag) {
                    flag = false;
                    this.trigger('error', 'Q_EXCEED_NUM_LIMIT', max, file);
                    setTimeout(function () {
                        flag = true;
                    }, 1);
                }

                return count >= max ? false : true;
            });

            uploader.on('fileQueued', function () {
                count++;
            });

            uploader.on('fileDequeued', function () {
                count--;
            });

            uploader.on('reset', function () {
                count = 0;
            });
        });

        /**
         * @property {int} [fileSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator('fileSizeLimit', function () {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt(opts.fileSizeLimit, 10),
                flag = true;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {
                var invalid = count + file.size > max;

                if (invalid && flag) {
                    flag = false;
                    this.trigger('error', 'Q_EXCEED_SIZE_LIMIT', max, file);
                    setTimeout(function () {
                        flag = true;
                    }, 1);
                }

                return invalid ? false : true;
            });

            uploader.on('fileQueued', function (file) {
                count += file.size;
            });

            uploader.on('fileDequeued', function (file) {
                count -= file.size;
            });

            uploader.on('reset', function () {
                count = 0;
            });
        });

        /**
         * @property {int} [fileSingleSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator('fileSingleSizeLimit', function () {
            var uploader = this,
                opts = uploader.options,
                max = opts.fileSingleSizeLimit;

            if (!max) {
                return;
            }

            uploader.on('beforeFileQueued', function (file) {

                if (file.size > max) {
                    file.setStatus(WUFile.Status.INVALID, 'exceed_size');
                    this.trigger('error', 'F_EXCEED_SIZE', max, file);
                    return false;
                }
            });
        });

        /**
         * @property {Boolean} [duplicate=undefined]
         * @namespace options
         * @for Uploader
         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
         */
        api.addValidator('duplicate', function () {
            var uploader = this,
                opts = uploader.options,
                mapping = {};

            if (opts.duplicate) {
                return;
            }

            function hashString(str) {
                var hash = 0,
                    i = 0,
                    len = str.length,
                    _char;

                for (; i < len; i++) {
                    _char = str.charCodeAt(i);
                    hash = _char + (hash << 6) + (hash << 16) - hash;
                }

                return hash;
            }

            uploader.on('beforeFileQueued', function (file) {
                var hash = file.__hash || (file.__hash = hashString(file.name + file.size + file.lastModifiedDate));

                // 已经重复了
                if (mapping[hash]) {
                    this.trigger('error', 'F_DUPLICATE', file);
                    return false;
                }
            });

            uploader.on('fileQueued', function (file) {
                var hash = file.__hash;

                hash && (mapping[hash] = true);
            });

            uploader.on('fileDequeued', function (file) {
                var hash = file.__hash;

                hash && delete mapping[hash];
            });

            uploader.on('reset', function () {
                mapping = {};
            });
        });

        return api;
    });

    /**
     * @fileOverview Md5
     */
    define('lib/md5', ['runtime/client', 'mediator'], function (RuntimeClient, Mediator) {

        function Md5() {
            RuntimeClient.call(this, 'Md5');
        }

        // 让 Md5 具备事件功能。
        Mediator.installTo(Md5.prototype);

        Md5.prototype.loadFromBlob = function (blob) {
            var me = this;

            if (me.getRuid()) {
                me.disconnectRuntime();
            }

            // 连接到blob归属的同一个runtime.
            me.connectRuntime(blob.ruid, function () {
                me.exec('init');
                me.exec('loadFromBlob', blob);
            });
        };

        Md5.prototype.getResult = function () {
            return this.exec('getResult');
        };

        return Md5;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/md5', ['base', 'uploader', 'lib/md5', 'lib/blob', 'widgets/widget'], function (Base, Uploader, Md5, Blob) {

        return Uploader.register({
            name: 'md5',

            /**
             * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
             *
             *
             * @method md5File
             * @grammar md5File( file[, start[, end]] ) => promise
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.md5File( file )
             *
             *         // 及时显示进度
             *         .progress(function(percentage) {
             *             console.log('Percentage:', percentage);
             *         })
             *
             *         // 完成
             *         .then(function(val) {
             *             console.log('md5 result:', val);
             *         });
             *
             * });
             */
            md5File: function md5File(file, start, end) {
                var md5 = new Md5(),
                    deferred = Base.Deferred(),
                    blob = file instanceof Blob ? file : this.request('get-file', file).source;

                md5.on('progress load', function (e) {
                    e = e || {};
                    deferred.notify(e.total ? e.loaded / e.total : 1);
                });

                md5.on('complete', function () {
                    deferred.resolve(md5.getResult());
                });

                md5.on('error', function (reason) {
                    deferred.reject(reason);
                });

                if (arguments.length > 1) {
                    start = start || 0;
                    end = end || 0;
                    start < 0 && (start = blob.size + start);
                    end < 0 && (end = blob.size + end);
                    end = Math.min(end, blob.size);
                    blob = blob.slice(start, end);
                }

                md5.loadFromBlob(blob);

                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/compbase', [], function () {

        function CompBase(owner, runtime) {

            this.owner = owner;
            this.options = owner.options;

            this.getRuntime = function () {
                return runtime;
            };

            this.getRuid = function () {
                return runtime.uid;
            };

            this.trigger = function () {
                return owner.trigger.apply(owner, arguments);
            };
        }

        return CompBase;
    });
    /**
     * @fileOverview Html5Runtime
     */
    define('runtime/html5/runtime', ['base', 'runtime/runtime', 'runtime/compbase'], function (Base, Runtime, CompBase) {

        var type = 'html5',
            components = {};

        function Html5Runtime() {
            var pool = {},
                me = this,
                destroy = this.destroy;

            Runtime.apply(me, arguments);
            me.type = type;

            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function (comp, fn /*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice(arguments, 2),
                    instance;

                if (components[comp]) {
                    instance = pool[uid] = pool[uid] || new components[comp](client, me);

                    if (instance[fn]) {
                        return instance[fn].apply(instance, args);
                    }
                }
            };

            me.destroy = function () {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply(this, arguments);
            };
        }

        Base.inherits(Runtime, {
            constructor: Html5Runtime,

            // 不需要连接其他程序，直接执行callback
            init: function init() {
                var me = this;
                setTimeout(function () {
                    me.trigger('ready');
                }, 1);
            }

        });

        // 注册Components
        Html5Runtime.register = function (name, component) {
            var klass = components[name] = Base.inherits(CompBase, component);
            return klass;
        };

        // 注册html5运行时。
        // 只有在支持的前提下注册。
        if (window.Blob && window.FileReader && window.DataView) {
            Runtime.addRuntime(type, Html5Runtime);
        }

        return Html5Runtime;
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/html5/blob', ['runtime/html5/runtime', 'lib/blob'], function (Html5Runtime, Blob) {

        return Html5Runtime.register('Blob', {
            slice: function slice(start, end) {
                var blob = this.owner.source,
                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;

                blob = slice.call(blob, start, end);

                return new Blob(this.getRuid(), blob);
            }
        });
    });
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/dnd', ['base', 'runtime/html5/runtime', 'lib/file'], function (Base, Html5Runtime, File) {

        var $ = Base.$,
            prefix = 'webuploader-dnd-';

        return Html5Runtime.register('DragAndDrop', {
            init: function init() {
                var elem = this.elem = this.options.container;

                this.dragEnterHandler = Base.bindFn(this._dragEnterHandler, this);
                this.dragOverHandler = Base.bindFn(this._dragOverHandler, this);
                this.dragLeaveHandler = Base.bindFn(this._dragLeaveHandler, this);
                this.dropHandler = Base.bindFn(this._dropHandler, this);
                this.dndOver = false;

                elem.on('dragenter', this.dragEnterHandler);
                elem.on('dragover', this.dragOverHandler);
                elem.on('dragleave', this.dragLeaveHandler);
                elem.on('drop', this.dropHandler);

                if (this.options.disableGlobalDnd) {
                    $(document).on('dragover', this.dragOverHandler);
                    $(document).on('drop', this.dropHandler);
                }
            },

            _dragEnterHandler: function _dragEnterHandler(e) {
                var me = this,
                    denied = me._denied || false,
                    items;

                e = e.originalEvent || e;

                if (!me.dndOver) {
                    me.dndOver = true;

                    // 注意只有 chrome 支持。
                    items = e.dataTransfer.items;

                    if (items && items.length) {
                        me._denied = denied = !me.trigger('accept', items);
                    }

                    me.elem.addClass(prefix + 'over');
                    me.elem[denied ? 'addClass' : 'removeClass'](prefix + 'denied');
                }

                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';

                return false;
            },

            _dragOverHandler: function _dragOverHandler(e) {
                // 只处理框内的。
                var parentElem = this.elem.parent().get(0);
                if (parentElem && !$.contains(parentElem, e.currentTarget)) {
                    return false;
                }

                clearTimeout(this._leaveTimer);
                this._dragEnterHandler.call(this, e);

                return false;
            },

            _dragLeaveHandler: function _dragLeaveHandler() {
                var me = this,
                    handler;

                handler = function handler() {
                    me.dndOver = false;
                    me.elem.removeClass(prefix + 'over ' + prefix + 'denied');
                };

                clearTimeout(me._leaveTimer);
                me._leaveTimer = setTimeout(handler, 100);
                return false;
            },

            _dropHandler: function _dropHandler(e) {
                var me = this,
                    ruid = me.getRuid(),
                    parentElem = me.elem.parent().get(0),
                    dataTransfer,
                    data;

                // 只处理框内的。
                if (parentElem && !$.contains(parentElem, e.currentTarget)) {
                    return false;
                }

                e = e.originalEvent || e;
                dataTransfer = e.dataTransfer;

                // 如果是页面内拖拽，还不能处理，不阻止事件。
                // 此处 ie11 下会报参数错误，
                try {
                    data = dataTransfer.getData('text/html');
                } catch (err) {}

                if (data) {
                    return;
                }

                me._getTansferFiles(dataTransfer, function (results) {
                    me.trigger('drop', $.map(results, function (file) {
                        return new File(ruid, file);
                    }));
                });

                me.dndOver = false;
                me.elem.removeClass(prefix + 'over');
                return false;
            },

            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
            _getTansferFiles: function _getTansferFiles(dataTransfer, callback) {
                var results = [],
                    promises = [],
                    items,
                    files,
                    file,
                    item,
                    i,
                    len,
                    canAccessFolder;

                items = dataTransfer.items;
                files = dataTransfer.files;

                canAccessFolder = !!(items && items[0].webkitGetAsEntry);

                for (i = 0, len = files.length; i < len; i++) {
                    file = files[i];
                    item = items && items[i];

                    if (canAccessFolder && item.webkitGetAsEntry().isDirectory) {

                        promises.push(this._traverseDirectoryTree(item.webkitGetAsEntry(), results));
                    } else {
                        results.push(file);
                    }
                }

                Base.when.apply(Base, promises).done(function () {

                    if (!results.length) {
                        return;
                    }

                    callback(results);
                });
            },

            _traverseDirectoryTree: function _traverseDirectoryTree(entry, results) {
                var deferred = Base.Deferred(),
                    me = this;

                if (entry.isFile) {
                    entry.file(function (file) {
                        results.push(file);
                        deferred.resolve();
                    });
                } else if (entry.isDirectory) {
                    entry.createReader().readEntries(function (entries) {
                        var len = entries.length,
                            promises = [],
                            arr = [],
                            // 为了保证顺序。
                        i;

                        for (i = 0; i < len; i++) {
                            promises.push(me._traverseDirectoryTree(entries[i], arr));
                        }

                        Base.when.apply(Base, promises).then(function () {
                            results.push.apply(results, arr);
                            deferred.resolve();
                        }, deferred.reject);
                    });
                }

                return deferred.promise();
            },

            destroy: function destroy() {
                var elem = this.elem;

                // 还没 init 就调用 destroy
                if (!elem) {
                    return;
                }

                elem.off('dragenter', this.dragEnterHandler);
                elem.off('dragover', this.dragOverHandler);
                elem.off('dragleave', this.dragLeaveHandler);
                elem.off('drop', this.dropHandler);

                if (this.options.disableGlobalDnd) {
                    $(document).off('dragover', this.dragOverHandler);
                    $(document).off('drop', this.dropHandler);
                }
            }
        });
    });

    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/filepaste', ['base', 'runtime/html5/runtime', 'lib/file'], function (Base, Html5Runtime, File) {

        return Html5Runtime.register('FilePaste', {
            init: function init() {
                var opts = this.options,
                    elem = this.elem = opts.container,
                    accept = '.*',
                    arr,
                    i,
                    len,
                    item;

                // accetp的mimeTypes中生成匹配正则。
                if (opts.accept) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        item = opts.accept[i].mimeTypes;
                        item && arr.push(item);
                    }

                    if (arr.length) {
                        accept = arr.join(',');
                        accept = accept.replace(/,/g, '|').replace(/\*/g, '.*');
                    }
                }
                this.accept = accept = new RegExp(accept, 'i');
                this.hander = Base.bindFn(this._pasteHander, this);
                elem.on('paste', this.hander);
            },

            _pasteHander: function _pasteHander(e) {
                var allowed = [],
                    ruid = this.getRuid(),
                    items,
                    item,
                    blob,
                    i,
                    len;

                e = e.originalEvent || e;
                items = e.clipboardData.items;

                for (i = 0, len = items.length; i < len; i++) {
                    item = items[i];

                    if (item.kind !== 'file' || !(blob = item.getAsFile())) {
                        continue;
                    }

                    allowed.push(new File(ruid, blob));
                }

                if (allowed.length) {
                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger('paste', allowed);
                }
            },

            destroy: function destroy() {
                this.elem.off('paste', this.hander);
            }
        });
    });

    /**
     * @fileOverview FilePicker
     */
    define('runtime/html5/filepicker', ['base', 'runtime/html5/runtime'], function (Base, Html5Runtime) {

        var $ = Base.$;

        return Html5Runtime.register('FilePicker', {
            init: function init() {
                var container = this.getRuntime().getContainer(),
                    me = this,
                    owner = me.owner,
                    opts = me.options,
                    label = this.label = $(document.createElement('label')),
                    input = this.input = $(document.createElement('input')),
                    arr,
                    i,
                    len,
                    mouseHandler;

                input.attr('type', 'file');
                input.attr('name', opts.name);
                input.addClass('webuploader-element-invisible');

                label.on('click', function () {
                    input.trigger('click');
                });

                label.css({
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    cursor: 'pointer',
                    background: '#ffffff'
                });

                if (opts.multiple) {
                    input.attr('multiple', 'multiple');
                }

                // @todo Firefox不支持单独指定后缀
                if (opts.accept && opts.accept.length > 0) {
                    arr = [];

                    for (i = 0, len = opts.accept.length; i < len; i++) {
                        arr.push(opts.accept[i].mimeTypes);
                    }

                    input.attr('accept', arr.join(','));
                }

                container.append(input);
                container.append(label);

                mouseHandler = function mouseHandler(e) {
                    owner.trigger(e.type);
                };
                // 严格模式下不支持callee 修改
                /************* start *************/
                var changeFn = function even(that, e) {
                    var clone;

                    me.files = e.target.files;

                    // reset input
                    clone = that.cloneNode(true);
                    clone.value = null;
                    that.parentNode.replaceChild(clone, that);

                    input.off();
                    input = $(clone).on('change', function (e) {
                        even(this, e);
                    }).on('mouseenter mouseleave', mouseHandler);
                    owner.trigger('change');
                };

                input.on('change', function (e) {
                    changeFn(this, e);
                });
                /************* end *************/
                /*input.on( 'change', function( e ) {
                    var fn = arguments.callee,
                        clone;
                     me.files = e.target.files;
                     // reset input
                    clone = this.cloneNode( true );
                    clone.value = null;
                    this.parentNode.replaceChild( clone, this );
                         input.off();
                    input = $( clone ).on( 'change', fn )
                            .on( 'mouseenter mouseleave', mouseHandler );
                         owner.trigger('change');
                });*/

                label.on('mouseenter mouseleave', mouseHandler);
            },

            getFiles: function getFiles() {
                return this.files;
            },

            destroy: function destroy() {
                this.input.off();
                this.label.off();
            }
        });
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/util', ['base'], function (Base) {

        var urlAPI = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL,
            createObjectURL = Base.noop,
            revokeObjectURL = createObjectURL;

        if (urlAPI) {

            // 更安全的方式调用，比如android里面就能把context改成其他的对象。
            createObjectURL = function createObjectURL() {
                return urlAPI.createObjectURL.apply(urlAPI, arguments);
            };

            revokeObjectURL = function revokeObjectURL() {
                return urlAPI.revokeObjectURL.apply(urlAPI, arguments);
            };
        }

        return {
            createObjectURL: createObjectURL,
            revokeObjectURL: revokeObjectURL,

            dataURL2Blob: function dataURL2Blob(dataURI) {
                var byteStr, intArray, ab, i, mimetype, parts;

                parts = dataURI.split(',');

                if (~parts[0].indexOf('base64')) {
                    byteStr = atob(parts[1]);
                } else {
                    byteStr = decodeURIComponent(parts[1]);
                }

                ab = new ArrayBuffer(byteStr.length);
                intArray = new Uint8Array(ab);

                for (i = 0; i < byteStr.length; i++) {
                    intArray[i] = byteStr.charCodeAt(i);
                }

                mimetype = parts[0].split(':')[1].split(';')[0];

                return this.arrayBufferToBlob(ab, mimetype);
            },

            dataURL2ArrayBuffer: function dataURL2ArrayBuffer(dataURI) {
                var byteStr, intArray, i, parts;

                parts = dataURI.split(',');

                if (~parts[0].indexOf('base64')) {
                    byteStr = atob(parts[1]);
                } else {
                    byteStr = decodeURIComponent(parts[1]);
                }

                intArray = new Uint8Array(byteStr.length);

                for (i = 0; i < byteStr.length; i++) {
                    intArray[i] = byteStr.charCodeAt(i);
                }

                return intArray.buffer;
            },

            arrayBufferToBlob: function arrayBufferToBlob(buffer, type) {
                var builder = window.BlobBuilder || window.WebKitBlobBuilder,
                    bb;

                // android不支持直接new Blob, 只能借助blobbuilder.
                if (builder) {
                    bb = new builder();
                    bb.append(buffer);
                    return bb.getBlob(type);
                }

                return new Blob([buffer], type ? { type: type } : {});
            },

            // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
            // 你得到的结果是png.
            canvasToDataUrl: function canvasToDataUrl(canvas, type, quality) {
                return canvas.toDataURL(type, quality / 100);
            },

            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            parseMeta: function parseMeta(blob, callback) {
                callback(false, {});
            },

            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            updateImageHead: function updateImageHead(data) {
                return data;
            }
        };
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/imagemeta', ['runtime/html5/util'], function (Util) {

        var api;

        api = {
            parsers: {
                0xffe1: []
            },

            maxMetaDataSize: 262144,

            parse: function parse(blob, cb) {
                var me = this,
                    fr = new FileReader();

                fr.onload = function () {
                    cb(false, me._parse(this.result));
                    fr = fr.onload = fr.onerror = null;
                };

                fr.onerror = function (e) {
                    cb(e.message);
                    fr = fr.onload = fr.onerror = null;
                };

                blob = blob.slice(0, me.maxMetaDataSize);
                fr.readAsArrayBuffer(blob.getSource());
            },

            _parse: function _parse(buffer, noParse) {
                if (buffer.byteLength < 6) {
                    return;
                }

                var dataview = new DataView(buffer),
                    offset = 2,
                    maxOffset = dataview.byteLength - 4,
                    headLength = offset,
                    ret = {},
                    markerBytes,
                    markerLength,
                    parsers,
                    i;

                if (dataview.getUint16(0) === 0xffd8) {

                    while (offset < maxOffset) {
                        markerBytes = dataview.getUint16(offset);

                        if (markerBytes >= 0xffe0 && markerBytes <= 0xffef || markerBytes === 0xfffe) {

                            markerLength = dataview.getUint16(offset + 2) + 2;

                            if (offset + markerLength > dataview.byteLength) {
                                break;
                            }

                            parsers = api.parsers[markerBytes];

                            if (!noParse && parsers) {
                                for (i = 0; i < parsers.length; i += 1) {
                                    parsers[i].call(api, dataview, offset, markerLength, ret);
                                }
                            }

                            offset += markerLength;
                            headLength = offset;
                        } else {
                            break;
                        }
                    }

                    if (headLength > 6) {
                        if (buffer.slice) {
                            ret.imageHead = buffer.slice(2, headLength);
                        } else {
                            // Workaround for IE10, which does not yet
                            // support ArrayBuffer.slice:
                            ret.imageHead = new Uint8Array(buffer).subarray(2, headLength);
                        }
                    }
                }

                return ret;
            },

            updateImageHead: function updateImageHead(buffer, head) {
                var data = this._parse(buffer, true),
                    buf1,
                    buf2,
                    bodyoffset;

                bodyoffset = 2;
                if (data.imageHead) {
                    bodyoffset = 2 + data.imageHead.byteLength;
                }

                if (buffer.slice) {
                    buf2 = buffer.slice(bodyoffset);
                } else {
                    buf2 = new Uint8Array(buffer).subarray(bodyoffset);
                }

                buf1 = new Uint8Array(head.byteLength + 2 + buf2.byteLength);

                buf1[0] = 0xFF;
                buf1[1] = 0xD8;
                buf1.set(new Uint8Array(head), 2);
                buf1.set(new Uint8Array(buf2), head.byteLength + 2);

                return buf1.buffer;
            }
        };

        Util.parseMeta = function () {
            return api.parse.apply(api, arguments);
        };

        Util.updateImageHead = function () {
            return api.updateImageHead.apply(api, arguments);
        };

        return api;
    });
    /**
     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
     * 暂时项目中只用了orientation.
     *
     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
     * @fileOverview EXIF解析
     */

    // Sample
    // ====================================
    // Make : Apple
    // Model : iPhone 4S
    // Orientation : 1
    // XResolution : 72 [72/1]
    // YResolution : 72 [72/1]
    // ResolutionUnit : 2
    // Software : QuickTime 7.7.1
    // DateTime : 2013:09:01 22:53:55
    // ExifIFDPointer : 190
    // ExposureTime : 0.058823529411764705 [1/17]
    // FNumber : 2.4 [12/5]
    // ExposureProgram : Normal program
    // ISOSpeedRatings : 800
    // ExifVersion : 0220
    // DateTimeOriginal : 2013:09:01 22:52:51
    // DateTimeDigitized : 2013:09:01 22:52:51
    // ComponentsConfiguration : YCbCr
    // ShutterSpeedValue : 4.058893515764426
    // ApertureValue : 2.5260688216892597 [4845/1918]
    // BrightnessValue : -0.3126686601998395
    // MeteringMode : Pattern
    // Flash : Flash did not fire, compulsory flash mode
    // FocalLength : 4.28 [107/25]
    // SubjectArea : [4 values]
    // FlashpixVersion : 0100
    // ColorSpace : 1
    // PixelXDimension : 2448
    // PixelYDimension : 3264
    // SensingMethod : One-chip color area sensor
    // ExposureMode : 0
    // WhiteBalance : Auto white balance
    // FocalLengthIn35mmFilm : 35
    // SceneCaptureType : Standard
    define('runtime/html5/imagemeta/exif', ['base', 'runtime/html5/imagemeta'], function (Base, ImageMeta) {

        var EXIF = {};

        EXIF.ExifMap = function () {
            return this;
        };

        EXIF.ExifMap.prototype.map = {
            'Orientation': 0x0112
        };

        EXIF.ExifMap.prototype.get = function (id) {
            return this[id] || this[this.map[id]];
        };

        EXIF.exifTagTypes = {
            // byte, 8-bit unsigned int:
            1: {
                getValue: function getValue(dataView, dataOffset) {
                    return dataView.getUint8(dataOffset);
                },
                size: 1
            },

            // ascii, 8-bit byte:
            2: {
                getValue: function getValue(dataView, dataOffset) {
                    return String.fromCharCode(dataView.getUint8(dataOffset));
                },
                size: 1,
                ascii: true
            },

            // short, 16 bit int:
            3: {
                getValue: function getValue(dataView, dataOffset, littleEndian) {
                    return dataView.getUint16(dataOffset, littleEndian);
                },
                size: 2
            },

            // long, 32 bit int:
            4: {
                getValue: function getValue(dataView, dataOffset, littleEndian) {
                    return dataView.getUint32(dataOffset, littleEndian);
                },
                size: 4
            },

            // rational = two long values,
            // first is numerator, second is denominator:
            5: {
                getValue: function getValue(dataView, dataOffset, littleEndian) {
                    return dataView.getUint32(dataOffset, littleEndian) / dataView.getUint32(dataOffset + 4, littleEndian);
                },
                size: 8
            },

            // slong, 32 bit signed int:
            9: {
                getValue: function getValue(dataView, dataOffset, littleEndian) {
                    return dataView.getInt32(dataOffset, littleEndian);
                },
                size: 4
            },

            // srational, two slongs, first is numerator, second is denominator:
            10: {
                getValue: function getValue(dataView, dataOffset, littleEndian) {
                    return dataView.getInt32(dataOffset, littleEndian) / dataView.getInt32(dataOffset + 4, littleEndian);
                },
                size: 8
            }
        };

        // undefined, 8-bit byte, value depending on field:
        EXIF.exifTagTypes[7] = EXIF.exifTagTypes[1];

        EXIF.getExifValue = function (dataView, tiffOffset, offset, type, length, littleEndian) {

            var tagType = EXIF.exifTagTypes[type],
                tagSize,
                dataOffset,
                values,
                i,
                str,
                c;

            if (!tagType) {
                Base.log('Invalid Exif data: Invalid tag type.');
                return;
            }

            tagSize = tagType.size * length;

            // Determine if the value is contained in the dataOffset bytes,
            // or if the value at the dataOffset is a pointer to the actual data:
            dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32(offset + 8, littleEndian) : offset + 8;

            if (dataOffset + tagSize > dataView.byteLength) {
                Base.log('Invalid Exif data: Invalid data offset.');
                return;
            }

            if (length === 1) {
                return tagType.getValue(dataView, dataOffset, littleEndian);
            }

            values = [];

            for (i = 0; i < length; i += 1) {
                values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian);
            }

            if (tagType.ascii) {
                str = '';

                // Concatenate the chars:
                for (i = 0; i < values.length; i += 1) {
                    c = values[i];

                    // Ignore the terminating NULL byte(s):
                    if (c === '\0') {
                        break;
                    }
                    str += c;
                }

                return str;
            }
            return values;
        };

        EXIF.parseExifTag = function (dataView, tiffOffset, offset, littleEndian, data) {

            var tag = dataView.getUint16(offset, littleEndian);
            data.exif[tag] = EXIF.getExifValue(dataView, tiffOffset, offset, dataView.getUint16(offset + 2, littleEndian), // tag type
            dataView.getUint32(offset + 4, littleEndian), // tag length
            littleEndian);
        };

        EXIF.parseExifTags = function (dataView, tiffOffset, dirOffset, littleEndian, data) {

            var tagsNumber, dirEndOffset, i;

            if (dirOffset + 6 > dataView.byteLength) {
                Base.log('Invalid Exif data: Invalid directory offset.');
                return;
            }

            tagsNumber = dataView.getUint16(dirOffset, littleEndian);
            dirEndOffset = dirOffset + 2 + 12 * tagsNumber;

            if (dirEndOffset + 4 > dataView.byteLength) {
                Base.log('Invalid Exif data: Invalid directory size.');
                return;
            }

            for (i = 0; i < tagsNumber; i += 1) {
                this.parseExifTag(dataView, tiffOffset, dirOffset + 2 + 12 * i, // tag offset
                littleEndian, data);
            }

            // Return the offset to the next directory:
            return dataView.getUint32(dirEndOffset, littleEndian);
        };

        // EXIF.getExifThumbnail = function(dataView, offset, length) {
        //     var hexData,
        //         i,
        //         b;
        //     if (!length || offset + length > dataView.byteLength) {
        //         Base.log('Invalid Exif data: Invalid thumbnail data.');
        //         return;
        //     }
        //     hexData = [];
        //     for (i = 0; i < length; i += 1) {
        //         b = dataView.getUint8(offset + i);
        //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
        //     }
        //     return 'data:image/jpeg,%' + hexData.join('%');
        // };

        EXIF.parseExifData = function (dataView, offset, length, data) {

            var tiffOffset = offset + 10,
                littleEndian,
                dirOffset;

            // Check for the ASCII code for "Exif" (0x45786966):
            if (dataView.getUint32(offset + 4) !== 0x45786966) {
                // No Exif data, might be XMP data instead
                return;
            }
            if (tiffOffset + 8 > dataView.byteLength) {
                Base.log('Invalid Exif data: Invalid segment size.');
                return;
            }

            // Check for the two null bytes:
            if (dataView.getUint16(offset + 8) !== 0x0000) {
                Base.log('Invalid Exif data: Missing byte alignment offset.');
                return;
            }

            // Check the byte alignment:
            switch (dataView.getUint16(tiffOffset)) {
                case 0x4949:
                    littleEndian = true;
                    break;

                case 0x4D4D:
                    littleEndian = false;
                    break;

                default:
                    Base.log('Invalid Exif data: Invalid byte alignment marker.');
                    return;
            }

            // Check for the TIFF tag marker (0x002A):
            if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002A) {
                Base.log('Invalid Exif data: Missing TIFF marker.');
                return;
            }

            // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
            dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
            // Create the exif object to store the tags:
            data.exif = new EXIF.ExifMap();
            // Parse the tags of the main image directory and retrieve the
            // offset to the next directory, usually the thumbnail directory:
            dirOffset = EXIF.parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data);

            // 尝试读取缩略图
            // if ( dirOffset ) {
            //     thumbnailData = {exif: {}};
            //     dirOffset = EXIF.parseExifTags(
            //         dataView,
            //         tiffOffset,
            //         tiffOffset + dirOffset,
            //         littleEndian,
            //         thumbnailData
            //     );

            //     // Check for JPEG Thumbnail offset:
            //     if (thumbnailData.exif[0x0201]) {
            //         data.exif.Thumbnail = EXIF.getExifThumbnail(
            //             dataView,
            //             tiffOffset + thumbnailData.exif[0x0201],
            //             thumbnailData.exif[0x0202] // Thumbnail data length
            //         );
            //     }
            // }
        };

        ImageMeta.parsers[0xffe1].push(EXIF.parseExifData);
        return EXIF;
    });
    /**
     * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
     * android里面toDataUrl('image/jpege')得到的结果却是png.
     *
     * 所以这里没辙，只能借助这个工具
     * @fileOverview jpeg encoder
     */
    define('runtime/html5/jpegencoder', [], function (require, exports, module) {

        /*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
               Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are
          met:
               * Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.
               * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
               * Neither the name of Adobe Systems Incorporated nor the names of its
            contributors may be used to endorse or promote products derived from
            this software without specific prior written permission.
               THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        /*
        JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
             Basic GUI blocking jpeg encoder
        */

        function JPEGEncoder(quality) {
            var self = this;
            var fround = Math.round;
            var ffloor = Math.floor;
            var YTable = new Array(64);
            var UVTable = new Array(64);
            var fdtbl_Y = new Array(64);
            var fdtbl_UV = new Array(64);
            var YDC_HT;
            var UVDC_HT;
            var YAC_HT;
            var UVAC_HT;

            var bitcode = new Array(65535);
            var category = new Array(65535);
            var outputfDCTQuant = new Array(64);
            var DU = new Array(64);
            var byteout = [];
            var bytenew = 0;
            var bytepos = 7;

            var YDU = new Array(64);
            var UDU = new Array(64);
            var VDU = new Array(64);
            var clt = new Array(256);
            var RGB_YUV_TABLE = new Array(2048);
            var currentQuality;

            var ZigZag = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];

            var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
            var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7d];
            var std_ac_luminance_values = [0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12, 0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07, 0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xa1, 0x08, 0x23, 0x42, 0xb1, 0xc1, 0x15, 0x52, 0xd1, 0xf0, 0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0a, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa];

            var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
            var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
            var std_ac_chrominance_values = [0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21, 0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71, 0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91, 0xa1, 0xb1, 0xc1, 0x09, 0x23, 0x33, 0x52, 0xf0, 0x15, 0x62, 0x72, 0xd1, 0x0a, 0x16, 0x24, 0x34, 0xe1, 0x25, 0xf1, 0x17, 0x18, 0x19, 0x1a, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa];

            function initQuantTables(sf) {
                var YQT = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];

                for (var i = 0; i < 64; i++) {
                    var t = ffloor((YQT[i] * sf + 50) / 100);
                    if (t < 1) {
                        t = 1;
                    } else if (t > 255) {
                        t = 255;
                    }
                    YTable[ZigZag[i]] = t;
                }
                var UVQT = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
                for (var j = 0; j < 64; j++) {
                    var u = ffloor((UVQT[j] * sf + 50) / 100);
                    if (u < 1) {
                        u = 1;
                    } else if (u > 255) {
                        u = 255;
                    }
                    UVTable[ZigZag[j]] = u;
                }
                var aasf = [1.0, 1.387039845, 1.306562965, 1.175875602, 1.0, 0.785694958, 0.541196100, 0.275899379];
                var k = 0;
                for (var row = 0; row < 8; row++) {
                    for (var col = 0; col < 8; col++) {
                        fdtbl_Y[k] = 1.0 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
                        fdtbl_UV[k] = 1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
                        k++;
                    }
                }
            }

            function computeHuffmanTbl(nrcodes, std_table) {
                var codevalue = 0;
                var pos_in_table = 0;
                var HT = new Array();
                for (var k = 1; k <= 16; k++) {
                    for (var j = 1; j <= nrcodes[k]; j++) {
                        HT[std_table[pos_in_table]] = [];
                        HT[std_table[pos_in_table]][0] = codevalue;
                        HT[std_table[pos_in_table]][1] = k;
                        pos_in_table++;
                        codevalue++;
                    }
                    codevalue *= 2;
                }
                return HT;
            }

            function initHuffmanTbl() {
                YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
                UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
                YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
                UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
            }

            function initCategoryNumber() {
                var nrlower = 1;
                var nrupper = 2;
                for (var cat = 1; cat <= 15; cat++) {
                    //Positive numbers
                    for (var nr = nrlower; nr < nrupper; nr++) {
                        category[32767 + nr] = cat;
                        bitcode[32767 + nr] = [];
                        bitcode[32767 + nr][1] = cat;
                        bitcode[32767 + nr][0] = nr;
                    }
                    //Negative numbers
                    for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
                        category[32767 + nrneg] = cat;
                        bitcode[32767 + nrneg] = [];
                        bitcode[32767 + nrneg][1] = cat;
                        bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
                    }
                    nrlower <<= 1;
                    nrupper <<= 1;
                }
            }

            function initRGBYUVTable() {
                for (var i = 0; i < 256; i++) {
                    RGB_YUV_TABLE[i] = 19595 * i;
                    RGB_YUV_TABLE[i + 256 >> 0] = 38470 * i;
                    RGB_YUV_TABLE[i + 512 >> 0] = 7471 * i + 0x8000;
                    RGB_YUV_TABLE[i + 768 >> 0] = -11059 * i;
                    RGB_YUV_TABLE[i + 1024 >> 0] = -21709 * i;
                    RGB_YUV_TABLE[i + 1280 >> 0] = 32768 * i + 0x807FFF;
                    RGB_YUV_TABLE[i + 1536 >> 0] = -27439 * i;
                    RGB_YUV_TABLE[i + 1792 >> 0] = -5329 * i;
                }
            }

            // IO functions
            function writeBits(bs) {
                var value = bs[0];
                var posval = bs[1] - 1;
                while (posval >= 0) {
                    if (value & 1 << posval) {
                        bytenew |= 1 << bytepos;
                    }
                    posval--;
                    bytepos--;
                    if (bytepos < 0) {
                        if (bytenew == 0xFF) {
                            writeByte(0xFF);
                            writeByte(0);
                        } else {
                            writeByte(bytenew);
                        }
                        bytepos = 7;
                        bytenew = 0;
                    }
                }
            }

            function writeByte(value) {
                byteout.push(clt[value]); // write char directly instead of converting later
            }

            function writeWord(value) {
                writeByte(value >> 8 & 0xFF);
                writeByte(value & 0xFF);
            }

            // DCT & quantization core
            function fDCTQuant(data, fdtbl) {
                var d0, d1, d2, d3, d4, d5, d6, d7;
                /* Pass 1: process rows. */
                var dataOff = 0;
                var i;
                var I8 = 8;
                var I64 = 64;
                for (i = 0; i < I8; ++i) {
                    d0 = data[dataOff];
                    d1 = data[dataOff + 1];
                    d2 = data[dataOff + 2];
                    d3 = data[dataOff + 3];
                    d4 = data[dataOff + 4];
                    d5 = data[dataOff + 5];
                    d6 = data[dataOff + 6];
                    d7 = data[dataOff + 7];

                    var tmp0 = d0 + d7;
                    var tmp7 = d0 - d7;
                    var tmp1 = d1 + d6;
                    var tmp6 = d1 - d6;
                    var tmp2 = d2 + d5;
                    var tmp5 = d2 - d5;
                    var tmp3 = d3 + d4;
                    var tmp4 = d3 - d4;

                    /* Even part */
                    var tmp10 = tmp0 + tmp3; /* phase 2 */
                    var tmp13 = tmp0 - tmp3;
                    var tmp11 = tmp1 + tmp2;
                    var tmp12 = tmp1 - tmp2;

                    data[dataOff] = tmp10 + tmp11; /* phase 3 */
                    data[dataOff + 4] = tmp10 - tmp11;

                    var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
                    data[dataOff + 2] = tmp13 + z1; /* phase 5 */
                    data[dataOff + 6] = tmp13 - z1;

                    /* Odd part */
                    tmp10 = tmp4 + tmp5; /* phase 2 */
                    tmp11 = tmp5 + tmp6;
                    tmp12 = tmp6 + tmp7;

                    /* The rotator is modified from fig 4-8 to avoid extra negations. */
                    var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
                    var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
                    var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
                    var z3 = tmp11 * 0.707106781; /* c4 */

                    var z11 = tmp7 + z3; /* phase 5 */
                    var z13 = tmp7 - z3;

                    data[dataOff + 5] = z13 + z2; /* phase 6 */
                    data[dataOff + 3] = z13 - z2;
                    data[dataOff + 1] = z11 + z4;
                    data[dataOff + 7] = z11 - z4;

                    dataOff += 8; /* advance pointer to next row */
                }

                /* Pass 2: process columns. */
                dataOff = 0;
                for (i = 0; i < I8; ++i) {
                    d0 = data[dataOff];
                    d1 = data[dataOff + 8];
                    d2 = data[dataOff + 16];
                    d3 = data[dataOff + 24];
                    d4 = data[dataOff + 32];
                    d5 = data[dataOff + 40];
                    d6 = data[dataOff + 48];
                    d7 = data[dataOff + 56];

                    var tmp0p2 = d0 + d7;
                    var tmp7p2 = d0 - d7;
                    var tmp1p2 = d1 + d6;
                    var tmp6p2 = d1 - d6;
                    var tmp2p2 = d2 + d5;
                    var tmp5p2 = d2 - d5;
                    var tmp3p2 = d3 + d4;
                    var tmp4p2 = d3 - d4;

                    /* Even part */
                    var tmp10p2 = tmp0p2 + tmp3p2; /* phase 2 */
                    var tmp13p2 = tmp0p2 - tmp3p2;
                    var tmp11p2 = tmp1p2 + tmp2p2;
                    var tmp12p2 = tmp1p2 - tmp2p2;

                    data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
                    data[dataOff + 32] = tmp10p2 - tmp11p2;

                    var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
                    data[dataOff + 16] = tmp13p2 + z1p2; /* phase 5 */
                    data[dataOff + 48] = tmp13p2 - z1p2;

                    /* Odd part */
                    tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
                    tmp11p2 = tmp5p2 + tmp6p2;
                    tmp12p2 = tmp6p2 + tmp7p2;

                    /* The rotator is modified from fig 4-8 to avoid extra negations. */
                    var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
                    var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
                    var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
                    var z3p2 = tmp11p2 * 0.707106781; /* c4 */

                    var z11p2 = tmp7p2 + z3p2; /* phase 5 */
                    var z13p2 = tmp7p2 - z3p2;

                    data[dataOff + 40] = z13p2 + z2p2; /* phase 6 */
                    data[dataOff + 24] = z13p2 - z2p2;
                    data[dataOff + 8] = z11p2 + z4p2;
                    data[dataOff + 56] = z11p2 - z4p2;

                    dataOff++; /* advance pointer to next column */
                }

                // Quantize/descale the coefficients
                var fDCTQuant;
                for (i = 0; i < I64; ++i) {
                    // Apply the quantization and scaling factor & Round to nearest integer
                    fDCTQuant = data[i] * fdtbl[i];
                    outputfDCTQuant[i] = fDCTQuant > 0.0 ? fDCTQuant + 0.5 | 0 : fDCTQuant - 0.5 | 0;
                    //outputfDCTQuant[i] = fround(fDCTQuant);
                }
                return outputfDCTQuant;
            }

            function writeAPP0() {
                writeWord(0xFFE0); // marker
                writeWord(16); // length
                writeByte(0x4A); // J
                writeByte(0x46); // F
                writeByte(0x49); // I
                writeByte(0x46); // F
                writeByte(0); // = "JFIF",'\0'
                writeByte(1); // versionhi
                writeByte(1); // versionlo
                writeByte(0); // xyunits
                writeWord(1); // xdensity
                writeWord(1); // ydensity
                writeByte(0); // thumbnwidth
                writeByte(0); // thumbnheight
            }

            function writeSOF0(width, height) {
                writeWord(0xFFC0); // marker
                writeWord(17); // length, truecolor YUV JPG
                writeByte(8); // precision
                writeWord(height);
                writeWord(width);
                writeByte(3); // nrofcomponents
                writeByte(1); // IdY
                writeByte(0x11); // HVY
                writeByte(0); // QTY
                writeByte(2); // IdU
                writeByte(0x11); // HVU
                writeByte(1); // QTU
                writeByte(3); // IdV
                writeByte(0x11); // HVV
                writeByte(1); // QTV
            }

            function writeDQT() {
                writeWord(0xFFDB); // marker
                writeWord(132); // length
                writeByte(0);
                for (var i = 0; i < 64; i++) {
                    writeByte(YTable[i]);
                }
                writeByte(1);
                for (var j = 0; j < 64; j++) {
                    writeByte(UVTable[j]);
                }
            }

            function writeDHT() {
                writeWord(0xFFC4); // marker
                writeWord(0x01A2); // length

                writeByte(0); // HTYDCinfo
                for (var i = 0; i < 16; i++) {
                    writeByte(std_dc_luminance_nrcodes[i + 1]);
                }
                for (var j = 0; j <= 11; j++) {
                    writeByte(std_dc_luminance_values[j]);
                }

                writeByte(0x10); // HTYACinfo
                for (var k = 0; k < 16; k++) {
                    writeByte(std_ac_luminance_nrcodes[k + 1]);
                }
                for (var l = 0; l <= 161; l++) {
                    writeByte(std_ac_luminance_values[l]);
                }

                writeByte(1); // HTUDCinfo
                for (var m = 0; m < 16; m++) {
                    writeByte(std_dc_chrominance_nrcodes[m + 1]);
                }
                for (var n = 0; n <= 11; n++) {
                    writeByte(std_dc_chrominance_values[n]);
                }

                writeByte(0x11); // HTUACinfo
                for (var o = 0; o < 16; o++) {
                    writeByte(std_ac_chrominance_nrcodes[o + 1]);
                }
                for (var p = 0; p <= 161; p++) {
                    writeByte(std_ac_chrominance_values[p]);
                }
            }

            function writeSOS() {
                writeWord(0xFFDA); // marker
                writeWord(12); // length
                writeByte(3); // nrofcomponents
                writeByte(1); // IdY
                writeByte(0); // HTY
                writeByte(2); // IdU
                writeByte(0x11); // HTU
                writeByte(3); // IdV
                writeByte(0x11); // HTV
                writeByte(0); // Ss
                writeByte(0x3f); // Se
                writeByte(0); // Bf
            }

            function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
                var EOB = HTAC[0x00];
                var M16zeroes = HTAC[0xF0];
                var pos;
                var I16 = 16;
                var I63 = 63;
                var I64 = 64;
                var DU_DCT = fDCTQuant(CDU, fdtbl);
                //ZigZag reorder
                for (var j = 0; j < I64; ++j) {
                    DU[ZigZag[j]] = DU_DCT[j];
                }
                var Diff = DU[0] - DC;DC = DU[0];
                //Encode DC
                if (Diff == 0) {
                    writeBits(HTDC[0]); // Diff might be 0
                } else {
                    pos = 32767 + Diff;
                    writeBits(HTDC[category[pos]]);
                    writeBits(bitcode[pos]);
                }
                //Encode ACs
                var end0pos = 63; // was const... which is crazy
                for (; end0pos > 0 && DU[end0pos] == 0; end0pos--) {};
                //end0pos = first element in reverse order !=0
                if (end0pos == 0) {
                    writeBits(EOB);
                    return DC;
                }
                var i = 1;
                var lng;
                while (i <= end0pos) {
                    var startpos = i;
                    for (; DU[i] == 0 && i <= end0pos; ++i) {}
                    var nrzeroes = i - startpos;
                    if (nrzeroes >= I16) {
                        lng = nrzeroes >> 4;
                        for (var nrmarker = 1; nrmarker <= lng; ++nrmarker) {
                            writeBits(M16zeroes);
                        }nrzeroes = nrzeroes & 0xF;
                    }
                    pos = 32767 + DU[i];
                    writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
                    writeBits(bitcode[pos]);
                    i++;
                }
                if (end0pos != I63) {
                    writeBits(EOB);
                }
                return DC;
            }

            function initCharLookupTable() {
                var sfcc = String.fromCharCode;
                for (var i = 0; i < 256; i++) {
                    ///// ACHTUNG // 255
                    clt[i] = sfcc(i);
                }
            }

            this.encode = function (image, quality) // image data object
            {
                // var time_start = new Date().getTime();

                if (quality) setQuality(quality);

                // Initialize bit writer
                byteout = new Array();
                bytenew = 0;
                bytepos = 7;

                // Add JPEG headers
                writeWord(0xFFD8); // SOI
                writeAPP0();
                writeDQT();
                writeSOF0(image.width, image.height);
                writeDHT();
                writeSOS();

                // Encode 8x8 macroblocks
                var DCY = 0;
                var DCU = 0;
                var DCV = 0;

                bytenew = 0;
                bytepos = 7;

                this.encode.displayName = "_encode_";

                var imageData = image.data;
                var width = image.width;
                var height = image.height;

                var quadWidth = width * 4;
                var tripleWidth = width * 3;

                var x,
                    y = 0;
                var r, g, b;
                var start, p, col, row, pos;
                while (y < height) {
                    x = 0;
                    while (x < quadWidth) {
                        start = quadWidth * y + x;
                        p = start;
                        col = -1;
                        row = 0;

                        for (pos = 0; pos < 64; pos++) {
                            row = pos >> 3; // /8
                            col = (pos & 7) * 4; // %8
                            p = start + row * quadWidth + col;

                            if (y + row >= height) {
                                // padding bottom
                                p -= quadWidth * (y + 1 + row - height);
                            }

                            if (x + col >= quadWidth) {
                                // padding right
                                p -= x + col - quadWidth + 4;
                            }

                            r = imageData[p++];
                            g = imageData[p++];
                            b = imageData[p++];

                            /* // calculate YUV values dynamically
                            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                            */

                            // use lookup table (slightly faster)
                            YDU[pos] = (RGB_YUV_TABLE[r] + RGB_YUV_TABLE[g + 256 >> 0] + RGB_YUV_TABLE[b + 512 >> 0] >> 16) - 128;
                            UDU[pos] = (RGB_YUV_TABLE[r + 768 >> 0] + RGB_YUV_TABLE[g + 1024 >> 0] + RGB_YUV_TABLE[b + 1280 >> 0] >> 16) - 128;
                            VDU[pos] = (RGB_YUV_TABLE[r + 1280 >> 0] + RGB_YUV_TABLE[g + 1536 >> 0] + RGB_YUV_TABLE[b + 1792 >> 0] >> 16) - 128;
                        }

                        DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                        DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                        DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                        x += 32;
                    }
                    y += 8;
                }

                ////////////////////////////////////////////////////////////////

                // Do the bit alignment of the EOI marker
                if (bytepos >= 0) {
                    var fillbits = [];
                    fillbits[1] = bytepos + 1;
                    fillbits[0] = (1 << bytepos + 1) - 1;
                    writeBits(fillbits);
                }

                writeWord(0xFFD9); //EOI

                var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));

                byteout = [];

                // benchmarking
                // var duration = new Date().getTime() - time_start;
                // console.log('Encoding time: '+ currentQuality + 'ms');
                //

                return jpegDataUri;
            };

            function setQuality(quality) {
                if (quality <= 0) {
                    quality = 1;
                }
                if (quality > 100) {
                    quality = 100;
                }

                if (currentQuality == quality) return; // don't recalc if unchanged

                var sf = 0;
                if (quality < 50) {
                    sf = Math.floor(5000 / quality);
                } else {
                    sf = Math.floor(200 - quality * 2);
                }

                initQuantTables(sf);
                currentQuality = quality;
                // console.log('Quality set to: '+quality +'%');
            }

            function init() {
                // var time_start = new Date().getTime();
                if (!quality) quality = 50;
                // Create tables
                initCharLookupTable();
                initHuffmanTbl();
                initCategoryNumber();
                initRGBYUVTable();

                setQuality(quality);
                // var duration = new Date().getTime() - time_start;
                // console.log('Initialization '+ duration + 'ms');
            }

            init();
        };

        JPEGEncoder.encode = function (data, quality) {
            var encoder = new JPEGEncoder(quality);

            return encoder.encode(data);
        };

        return JPEGEncoder;
    });
    /**
     * @fileOverview Fix android canvas.toDataUrl bug.
     */
    define('runtime/html5/androidpatch', ['runtime/html5/util', 'runtime/html5/jpegencoder', 'base'], function (Util, encoder, Base) {
        var origin = Util.canvasToDataUrl,
            supportJpeg;

        Util.canvasToDataUrl = function (canvas, type, quality) {
            var ctx, w, h, fragement, parts;

            // 非android手机直接跳过。
            if (!Base.os.android) {
                return origin.apply(null, arguments);
            }

            // 检测是否canvas支持jpeg导出，根据数据格式来判断。
            // JPEG 前两位分别是：255, 216
            if (type === 'image/jpeg' && typeof supportJpeg === 'undefined') {
                fragement = origin.apply(null, arguments);

                parts = fragement.split(',');

                if (~parts[0].indexOf('base64')) {
                    fragement = atob(parts[1]);
                } else {
                    fragement = decodeURIComponent(parts[1]);
                }

                fragement = fragement.substring(0, 2);

                supportJpeg = fragement.charCodeAt(0) === 255 && fragement.charCodeAt(1) === 216;
            }

            // 只有在android环境下才修复
            if (type === 'image/jpeg' && !supportJpeg) {
                w = canvas.width;
                h = canvas.height;
                ctx = canvas.getContext('2d');

                return encoder.encode(ctx.getImageData(0, 0, w, h), quality);
            }

            return origin.apply(null, arguments);
        };
    });
    /**
     * @fileOverview Image
     */
    define('runtime/html5/image', ['base', 'runtime/html5/runtime', 'runtime/html5/util'], function (Base, Html5Runtime, Util) {

        var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';

        return Html5Runtime.register('Image', {

            // flag: 标记是否被修改过。
            modified: false,

            init: function init() {
                var me = this,
                    img = new Image();

                img.onload = function () {

                    me._info = {
                        type: me.type,
                        width: this.width,
                        height: this.height
                    };

                    // 读取meta信息。
                    if (!me._metas && 'image/jpeg' === me.type) {
                        Util.parseMeta(me._blob, function (error, ret) {
                            me._metas = ret;
                            me.owner.trigger('load');
                        });
                    } else {
                        me.owner.trigger('load');
                    }
                };

                img.onerror = function () {
                    me.owner.trigger('error');
                };

                me._img = img;
            },

            loadFromBlob: function loadFromBlob(blob) {
                var me = this,
                    img = me._img;

                me._blob = blob;
                me.type = blob.type;
                img.src = Util.createObjectURL(blob.getSource());
                me.owner.once('load', function () {
                    Util.revokeObjectURL(img.src);
                });
            },

            resize: function resize(width, height) {
                var canvas = this._canvas || (this._canvas = document.createElement('canvas'));

                this._resize(this._img, canvas, width, height);
                this._blob = null; // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger('complete', 'resize');
            },

            crop: function crop(x, y, w, h, s) {
                var cvs = this._canvas || (this._canvas = document.createElement('canvas')),
                    opts = this.options,
                    img = this._img,
                    iw = img.naturalWidth,
                    ih = img.naturalHeight,
                    orientation = this.getOrientation();

                s = s || 1;

                // todo 解决 orientation 的问题。
                // values that require 90 degree rotation
                // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {

                //     switch ( orientation ) {
                //         case 6:
                //             tmp = x;
                //             x = y;
                //             y = iw * s - tmp - w;
                //             console.log(ih * s, tmp, w)
                //             break;
                //     }

                //     (w ^= h, h ^= w, w ^= h);
                // }

                cvs.width = w;
                cvs.height = h;

                opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);
                this._renderImageToCanvas(cvs, img, -x, -y, iw * s, ih * s);

                this._blob = null; // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger('complete', 'crop');
            },

            getAsBlob: function getAsBlob(type) {
                var blob = this._blob,
                    opts = this.options,
                    canvas;

                type = type || this.type;

                // blob需要重新生成。
                if (this.modified || this.type !== type) {
                    canvas = this._canvas;

                    if (type === 'image/jpeg') {

                        blob = Util.canvasToDataUrl(canvas, type, opts.quality);

                        if (opts.preserveHeaders && this._metas && this._metas.imageHead) {

                            blob = Util.dataURL2ArrayBuffer(blob);
                            blob = Util.updateImageHead(blob, this._metas.imageHead);
                            blob = Util.arrayBufferToBlob(blob, type);
                            return blob;
                        }
                    } else {
                        blob = Util.canvasToDataUrl(canvas, type);
                    }

                    blob = Util.dataURL2Blob(blob);
                }

                return blob;
            },

            getAsDataUrl: function getAsDataUrl(type) {
                var opts = this.options;

                type = type || this.type;

                if (type === 'image/jpeg') {
                    return Util.canvasToDataUrl(this._canvas, type, opts.quality);
                } else {
                    return this._canvas.toDataURL(type);
                }
            },

            getOrientation: function getOrientation() {
                return this._metas && this._metas.exif && this._metas.exif.get('Orientation') || 1;
            },

            info: function info(val) {

                // setter
                if (val) {
                    this._info = val;
                    return this;
                }

                // getter
                return this._info;
            },

            meta: function meta(val) {

                // setter
                if (val) {
                    this._meta = val;
                    return this;
                }

                // getter
                return this._meta;
            },

            destroy: function destroy() {
                var canvas = this._canvas;
                this._img.onload = null;

                if (canvas) {
                    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                    canvas.width = canvas.height = 0;
                    this._canvas = null;
                }

                // 释放内存。非常重要，否则释放不了image的内存。
                this._img.src = BLANK;
                this._img = this._blob = null;
            },

            _resize: function _resize(img, cvs, width, height) {
                var opts = this.options,
                    naturalWidth = img.width,
                    naturalHeight = img.height,
                    orientation = this.getOrientation(),
                    scale,
                    w,
                    h,
                    x,
                    y;

                // values that require 90 degree rotation
                if (~[5, 6, 7, 8].indexOf(orientation)) {

                    // 交换width, height的值。
                    width ^= height;
                    height ^= width;
                    width ^= height;
                }

                scale = Math[opts.crop ? 'max' : 'min'](width / naturalWidth, height / naturalHeight);

                // 不允许放大。
                opts.allowMagnify || (scale = Math.min(1, scale));

                w = naturalWidth * scale;
                h = naturalHeight * scale;

                if (opts.crop) {
                    cvs.width = width;
                    cvs.height = height;
                } else {
                    cvs.width = w;
                    cvs.height = h;
                }

                x = (cvs.width - w) / 2;
                y = (cvs.height - h) / 2;

                opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);

                this._renderImageToCanvas(cvs, img, x, y, w, h);
            },

            _rotate2Orientaion: function _rotate2Orientaion(canvas, orientation) {
                var width = canvas.width,
                    height = canvas.height,
                    ctx = canvas.getContext('2d');

                switch (orientation) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        canvas.width = height;
                        canvas.height = width;
                        break;
                }

                switch (orientation) {
                    case 2:
                        // horizontal flip
                        ctx.translate(width, 0);
                        ctx.scale(-1, 1);
                        break;

                    case 3:
                        // 180 rotate left
                        ctx.translate(width, height);
                        ctx.rotate(Math.PI);
                        break;

                    case 4:
                        // vertical flip
                        ctx.translate(0, height);
                        ctx.scale(1, -1);
                        break;

                    case 5:
                        // vertical flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.scale(1, -1);
                        break;

                    case 6:
                        // 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(0, -height);
                        break;

                    case 7:
                        // horizontal flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(width, -height);
                        ctx.scale(-1, 1);
                        break;

                    case 8:
                        // 90 rotate left
                        ctx.rotate(-0.5 * Math.PI);
                        ctx.translate(-width, 0);
                        break;
                }
            },

            // https://github.com/stomita/ios-imagefile-megapixel/
            // blob/master/src/megapix-image.js
            _renderImageToCanvas: function () {

                // 如果不是ios, 不需要这么复杂！
                if (!Base.os.ios) {
                    return function (canvas) {
                        var args = Base.slice(arguments, 1),
                            ctx = canvas.getContext('2d');

                        ctx.drawImage.apply(ctx, args);
                    };
                }

                /**
                 * Detecting vertical squash in loaded image.
                 * Fixes a bug which squash image vertically while drawing into
                 * canvas for some images.
                 */
                function detectVerticalSquash(img, iw, ih) {
                    var canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d'),
                        sy = 0,
                        ey = ih,
                        py = ih,
                        data,
                        alpha,
                        ratio;

                    canvas.width = 1;
                    canvas.height = ih;
                    ctx.drawImage(img, 0, 0);
                    data = ctx.getImageData(0, 0, 1, ih).data;

                    // search image edge pixel position in case
                    // it is squashed vertically.
                    while (py > sy) {
                        alpha = data[(py - 1) * 4 + 3];

                        if (alpha === 0) {
                            ey = py;
                        } else {
                            sy = py;
                        }

                        py = ey + sy >> 1;
                    }

                    ratio = py / ih;
                    return ratio === 0 ? 1 : ratio;
                }

                // fix ie7 bug
                // http://stackoverflow.com/questions/11929099/
                // html5-canvas-drawimage-ratio-bug-ios
                if (Base.os.ios >= 7) {
                    return function (canvas, img, x, y, w, h) {
                        var iw = img.naturalWidth,
                            ih = img.naturalHeight,
                            vertSquashRatio = detectVerticalSquash(img, iw, ih);

                        return canvas.getContext('2d').drawImage(img, 0, 0, iw * vertSquashRatio, ih * vertSquashRatio, x, y, w, h);
                    };
                }

                /**
                 * Detect subsampling in loaded image.
                 * In iOS, larger images than 2M pixels may be
                 * subsampled in rendering.
                 */
                function detectSubsampling(img) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        canvas,
                        ctx;

                    // subsampling may happen overmegapixel image
                    if (iw * ih > 1024 * 1024) {
                        canvas = document.createElement('canvas');
                        canvas.width = canvas.height = 1;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(img, -iw + 1, 0);

                        // subsampled image becomes half smaller in rendering size.
                        // check alpha channel value to confirm image is covering
                        // edge pixel or not. if alpha value is 0
                        // image is not covering, hence subsampled.
                        return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
                    } else {
                        return false;
                    }
                }

                return function (canvas, img, x, y, width, height) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        ctx = canvas.getContext('2d'),
                        subsampled = detectSubsampling(img),
                        doSquash = this.type === 'image/jpeg',
                        d = 1024,
                        sy = 0,
                        dy = 0,
                        tmpCanvas,
                        tmpCtx,
                        vertSquashRatio,
                        dw,
                        dh,
                        sx,
                        dx;

                    if (subsampled) {
                        iw /= 2;
                        ih /= 2;
                    }

                    ctx.save();
                    tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;

                    tmpCtx = tmpCanvas.getContext('2d');
                    vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;

                    dw = Math.ceil(d * width / iw);
                    dh = Math.ceil(d * height / ih / vertSquashRatio);

                    while (sy < ih) {
                        sx = 0;
                        dx = 0;
                        while (sx < iw) {
                            tmpCtx.clearRect(0, 0, d, d);
                            tmpCtx.drawImage(img, -sx, -sy);
                            ctx.drawImage(tmpCanvas, 0, 0, d, d, x + dx, y + dy, dw, dh);
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                };
            }()
        });
    });
    /**
     * @fileOverview Transport
     * @todo 支持chunked传输，优势：
     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
     */
    define('runtime/html5/transport', ['base', 'runtime/html5/runtime'], function (Base, Html5Runtime) {

        var noop = Base.noop,
            $ = Base.$;

        return Html5Runtime.register('Transport', {
            init: function init() {
                this._status = 0;
                this._response = null;
            },

            send: function send() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    formData,
                    binary,
                    fr;

                if (opts.sendAsBinary) {
                    server += (/\?/.test(server) ? '&' : '?') + $.param(owner._formData);

                    binary = blob.getSource();
                } else {
                    formData = new FormData();
                    $.each(owner._formData, function (k, v) {
                        formData.append(k, v);
                    });

                    formData.append(opts.fileVal, blob.getSource(), opts.filename || owner._formData.name || '');
                }

                if (opts.withCredentials && 'withCredentials' in xhr) {
                    xhr.open(opts.method, server, true);
                    xhr.withCredentials = true;
                } else {
                    xhr.open(opts.method, server);
                }

                this._setRequestHeader(xhr, opts.headers);

                if (binary) {
                    // 强制设置成 content-type 为文件流。
                    xhr.overrideMimeType && xhr.overrideMimeType('application/octet-stream');

                    // android直接发送blob会导致服务端接收到的是空文件。
                    // bug详情。
                    // https://code.google.com/p/android/issues/detail?id=39882
                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
                    if (Base.os.android) {
                        fr = new FileReader();

                        fr.onload = function () {
                            xhr.send(this.result);
                            fr = fr.onload = null;
                        };

                        fr.readAsArrayBuffer(binary);
                    } else {
                        xhr.send(binary);
                    }
                } else {
                    xhr.send(formData);
                }
            },

            getResponse: function getResponse() {
                return this._response;
            },

            getResponseAsJson: function getResponseAsJson() {
                return this._parseJson(this._response);
            },

            getStatus: function getStatus() {
                return this._status;
            },

            abort: function abort() {
                var xhr = this._xhr;

                if (xhr) {
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    xhr.abort();

                    this._xhr = xhr = null;
                }
            },

            destroy: function destroy() {
                this.abort();
            },

            _initAjax: function _initAjax() {
                var me = this,
                    xhr = new XMLHttpRequest(),
                    opts = this.options;

                if (opts.withCredentials && !('withCredentials' in xhr) && typeof XDomainRequest !== 'undefined') {
                    xhr = new XDomainRequest();
                }

                xhr.upload.onprogress = function (e) {
                    var percentage = 0;

                    if (e.lengthComputable) {
                        percentage = e.loaded / e.total;
                    }

                    return me.trigger('progress', percentage);
                };

                xhr.onreadystatechange = function () {

                    if (xhr.readyState !== 4) {
                        return;
                    }

                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    me._xhr = null;
                    me._status = xhr.status;

                    if (xhr.status >= 200 && xhr.status < 300) {
                        me._response = xhr.responseText;
                        return me.trigger('load');
                    } else if (xhr.status >= 500 && xhr.status < 600) {
                        me._response = xhr.responseText;
                        return me.trigger('error', 'server');
                    }

                    return me.trigger('error', me._status ? 'http' : 'abort');
                };

                me._xhr = xhr;
                return xhr;
            },

            _setRequestHeader: function _setRequestHeader(xhr, headers) {
                $.each(headers, function (key, val) {
                    xhr.setRequestHeader(key, val);
                });
            },

            _parseJson: function _parseJson(str) {
                var json;

                try {
                    json = JSON.parse(str);
                } catch (ex) {
                    json = {};
                }

                return json;
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/html5/md5', ['runtime/html5/runtime'], function (FlashRuntime) {

        /*
         * Fastest md5 implementation around (JKM md5)
         * Credits: Joseph Myers
         *
         * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
         * @see http://jsperf.com/md5-shootout/7
         */

        /* this function is much faster,
          so if possible we use it. Some IEs
          are the only ones I know of that
          need the idiotic second function,
          generated by an if clause.  */
        var add32 = function add32(a, b) {
            return a + b & 0xFFFFFFFF;
        },
            cmn = function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32(a << s | a >>> 32 - s, b);
        },
            ff = function ff(a, b, c, d, x, s, t) {
            return cmn(b & c | ~b & d, a, b, x, s, t);
        },
            gg = function gg(a, b, c, d, x, s, t) {
            return cmn(b & d | c & ~d, a, b, x, s, t);
        },
            hh = function hh(a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        },
            ii = function ii(a, b, c, d, x, s, t) {
            return cmn(c ^ (b | ~d), a, b, x, s, t);
        },
            md5cycle = function md5cycle(x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];

            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);

            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);

            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);

            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);

            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        },


        /* there needs to be support for Unicode here,
           * unless we pretend that we can redefine the MD-5
           * algorithm for multi-byte characters (perhaps
           * by adding every four 16-bit characters and
           * shortening the sum to 32 bits). Otherwise
           * I suggest performing MD-5 as if every character
           * was two bytes--e.g., 0040 0025 = @%--but then
           * how will an ordinary MD-5 sum be matched?
           * There is no way to standardize text to something
           * like UTF-8 before transformation; speed cost is
           * utterly prohibitive. The JavaScript standard
           * itself needs to look at this: it should start
           * providing access to strings as preformed UTF-8
           * 8-bit unsigned value arrays.
           */
        md5blk = function md5blk(s) {
            var md5blks = [],
                i; /* Andy King said do it this way. */

            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        },
            md5blk_array = function md5blk_array(a) {
            var md5blks = [],
                i; /* Andy King said do it this way. */

            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        },
            md51 = function md51(s) {
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;

            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            length = s.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
            }
            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }

            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;

            tail[14] = lo;
            tail[15] = hi;

            md5cycle(state, tail);
            return state;
        },
            md51_array = function md51_array(a) {
            var n = a.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;

            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }

            // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
            // containing the last element of the parent array if the sub array specified starts
            // beyond the length of the parent array - weird.
            // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
            a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);

            length = a.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << (i % 4 << 3);
            }

            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }

            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;

            tail[14] = lo;
            tail[15] = hi;

            md5cycle(state, tail);

            return state;
        },
            hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
            rhex = function rhex(n) {
            var s = '',
                j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
            }
            return s;
        },
            hex = function hex(x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join('');
        },
            md5 = function md5(s) {
            return hex(md51(s));
        },


        ////////////////////////////////////////////////////////////////////////////

        /**
         * SparkMD5 OOP implementation.
         *
         * Use this class to perform an incremental md5, otherwise use the
         * static methods instead.
         */
        SparkMD5 = function SparkMD5() {
            // call reset to init the instance
            this.reset();
        };

        // In some cases the fast add32 function cannot be used..
        if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
            add32 = function add32(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return msw << 16 | lsw & 0xFFFF;
            };
        }

        /**
         * Appends a string.
         * A conversion will be applied if an utf8 string is detected.
         *
         * @param {String} str The string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.append = function (str) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }

            // then append as binary
            this.appendBinary(str);

            return this;
        };

        /**
         * Appends a binary string.
         *
         * @param {String} contents The binary string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.appendBinary = function (contents) {
            this._buff += contents;
            this._length += contents.length;

            var length = this._buff.length,
                i;

            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
            }

            this._buff = this._buff.substr(i - 64);

            return this;
        };

        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                i,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ret;

            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
            }

            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);

            this.reset();

            return ret;
        };

        /**
         * Finish the final calculation based on the tail.
         *
         * @param {Array}  tail   The tail (will be modified)
         * @param {Number} length The length of the remaining buffer
         */
        SparkMD5.prototype._finish = function (tail, length) {
            var i = length,
                tmp,
                lo,
                hi;

            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(this._state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }

            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;

            tail[14] = lo;
            tail[15] = hi;
            md5cycle(this._state, tail);
        };

        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.reset = function () {
            this._buff = "";
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];

            return this;
        };

        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.prototype.destroy = function () {
            delete this._state;
            delete this._buff;
            delete this._length;
        };

        /**
         * Performs the md5 hash on a string.
         * A conversion will be applied if utf8 string is detected.
         *
         * @param {String}  str The string
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hash = function (str, raw) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }

            var hash = md51(str);

            return !!raw ? hash : hex(hash);
        };

        /**
         * Performs the md5 hash on a binary string.
         *
         * @param {String}  content The binary string
         * @param {Boolean} raw     True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hashBinary = function (content, raw) {
            var hash = md51(content);

            return !!raw ? hash : hex(hash);
        };

        /**
         * SparkMD5 OOP implementation for array buffers.
         *
         * Use this class to perform an incremental md5 ONLY for array buffers.
         */
        SparkMD5.ArrayBuffer = function () {
            // call reset to init the instance
            this.reset();
        };

        ////////////////////////////////////////////////////////////////////////////

        /**
         * Appends an array buffer.
         *
         * @param {ArrayBuffer} arr The array to be appended
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
            // TODO: we could avoid the concatenation here but the algorithm would be more complex
            //       if you find yourself needing extra performance, please make a PR.
            var buff = this._concatArrayBuffer(this._buff, arr),
                length = buff.length,
                i;

            this._length += arr.byteLength;

            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
            }

            // Avoids IE10 weirdness (documented above)
            this._buff = i - 64 < length ? buff.subarray(i - 64) : new Uint8Array(0);

            return this;
        };

        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i,
                ret;

            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << (i % 4 << 3);
            }

            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);

            this.reset();

            return ret;
        };

        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.reset = function () {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];

            return this;
        };

        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

        /**
         * Concats two array buffers, returning a new one.
         *
         * @param  {ArrayBuffer} first  The first array buffer
         * @param  {ArrayBuffer} second The second array buffer
         *
         * @return {ArrayBuffer} The new array buffer
         */
        SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
            var firstLength = first.length,
                result = new Uint8Array(firstLength + second.byteLength);

            result.set(first);
            result.set(new Uint8Array(second), firstLength);

            return result;
        };

        /**
         * Performs the md5 hash on an array buffer.
         *
         * @param {ArrayBuffer} arr The array buffer
         * @param {Boolean}     raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
            var hash = md51_array(new Uint8Array(arr));

            return !!raw ? hash : hex(hash);
        };

        return FlashRuntime.register('Md5', {
            init: function init() {
                // do nothing.
            },

            loadFromBlob: function loadFromBlob(file) {
                var blob = file.getSource(),
                    chunkSize = 2 * 1024 * 1024,
                    chunks = Math.ceil(blob.size / chunkSize),
                    chunk = 0,
                    owner = this.owner,
                    spark = new SparkMD5.ArrayBuffer(),
                    me = this,
                    blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice,
                    _loadNext,
                    fr;

                fr = new FileReader();

                _loadNext = function loadNext() {
                    var start, end;

                    start = chunk * chunkSize;
                    end = Math.min(start + chunkSize, blob.size);

                    fr.onload = function (e) {
                        spark.append(e.target.result);
                        owner.trigger('progress', {
                            total: file.size,
                            loaded: end
                        });
                    };

                    fr.onloadend = function () {
                        fr.onloadend = fr.onload = null;

                        if (++chunk < chunks) {
                            setTimeout(_loadNext, 1);
                        } else {
                            setTimeout(function () {
                                owner.trigger('load');
                                me.result = spark.end();
                                _loadNext = file = blob = spark = null;
                                owner.trigger('complete');
                            }, 50);
                        }
                    };

                    fr.readAsArrayBuffer(blobSlice.call(blob, start, end));
                };

                _loadNext();
            },

            getResult: function getResult() {
                return this.result;
            }
        });
    });
    /**
     * @fileOverview FlashRuntime
     */
    define('runtime/flash/runtime', ['base', 'runtime/runtime', 'runtime/compbase'], function (Base, Runtime, CompBase) {

        var $ = Base.$,
            type = 'flash',
            components = {};

        function getFlashVersion() {
            var version;

            try {
                version = navigator.plugins['Shockwave Flash'];
                version = version.description;
            } catch (ex) {
                try {
                    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
                } catch (ex2) {
                    version = '0.0';
                }
            }
            version = version.match(/\d+/g);
            return parseFloat(version[0] + '.' + version[1], 10);
        }

        function FlashRuntime() {
            var pool = {},
                clients = {},
                destroy = this.destroy,
                me = this,
                jsreciver = Base.guid('webuploader_');

            Runtime.apply(me, arguments);
            me.type = type;

            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function (comp, fn /*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice(arguments, 2),
                    instance;

                clients[uid] = client;

                if (components[comp]) {
                    if (!pool[uid]) {
                        pool[uid] = new components[comp](client, me);
                    }

                    instance = pool[uid];

                    if (instance[fn]) {
                        return instance[fn].apply(instance, args);
                    }
                }

                return me.flashExec.apply(client, arguments);
            };

            function handler(evt, obj) {
                var type = evt.type || evt,
                    parts,
                    uid;

                parts = type.split('::');
                uid = parts[0];
                type = parts[1];

                // console.log.apply( console, arguments );

                if (type === 'Ready' && uid === me.uid) {
                    me.trigger('ready');
                } else if (clients[uid]) {
                    clients[uid].trigger(type.toLowerCase(), evt, obj);
                }

                // Base.log( evt, obj );
            }

            // flash的接受器。
            window[jsreciver] = function () {
                var args = arguments;

                // 为了能捕获得到。
                setTimeout(function () {
                    handler.apply(null, args);
                }, 1);
            };

            this.jsreciver = jsreciver;

            this.destroy = function () {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply(this, arguments);
            };

            this.flashExec = function (comp, fn) {
                var flash = me.getFlash(),
                    args = Base.slice(arguments, 2);

                return flash.exec(this.uid, comp, fn, args);
            };

            // @todo
        }

        Base.inherits(Runtime, {
            constructor: FlashRuntime,

            init: function init() {
                var container = this.getContainer(),
                    opts = this.options,
                    html;

                // if not the minimal height, shims are not initialized
                // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                container.css({
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: '9px',
                    height: '9px',
                    overflow: 'hidden'
                });

                // insert flash object
                html = '<object id="' + this.uid + '" type="application/' + 'x-shockwave-flash" data="' + opts.swf + '" ';

                if (Base.browser.ie) {
                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }

                html += 'width="100%" height="100%" style="outline:0">' + '<param name="movie" value="' + opts.swf + '" />' + '<param name="flashvars" value="uid=' + this.uid + '&jsreciver=' + this.jsreciver + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + '</object>';

                container.html(html);
            },

            getFlash: function getFlash() {
                if (this._flash) {
                    return this._flash;
                }

                this._flash = $('#' + this.uid).get(0);
                return this._flash;
            }

        });

        FlashRuntime.register = function (name, component) {
            component = components[name] = Base.inherits(CompBase, $.extend({

                // @todo fix this later
                flashExec: function flashExec() {
                    var owner = this.owner,
                        runtime = this.getRuntime();

                    return runtime.flashExec.apply(owner, arguments);
                }
            }, component));

            return component;
        };

        if (getFlashVersion() >= 11.4) {
            Runtime.addRuntime(type, FlashRuntime);
        }

        return FlashRuntime;
    });
    /**
     * @fileOverview FilePicker
     */
    define('runtime/flash/filepicker', ['base', 'runtime/flash/runtime'], function (Base, FlashRuntime) {
        var $ = Base.$;

        return FlashRuntime.register('FilePicker', {
            init: function init(opts) {
                var copy = $.extend({}, opts),
                    len,
                    i;

                // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
                len = copy.accept && copy.accept.length;
                for (i = 0; i < len; i++) {
                    if (!copy.accept[i].title) {
                        copy.accept[i].title = 'Files';
                    }
                }

                delete copy.button;
                delete copy.id;
                delete copy.container;

                this.flashExec('FilePicker', 'init', copy);
            },

            destroy: function destroy() {
                this.flashExec('FilePicker', 'destroy');
            }
        });
    });
    /**
     * @fileOverview 图片压缩
     */
    define('runtime/flash/image', ['runtime/flash/runtime'], function (FlashRuntime) {

        return FlashRuntime.register('Image', {
            // init: function( options ) {
            //     var owner = this.owner;

            //     this.flashExec( 'Image', 'init', options );
            //     owner.on( 'load', function() {
            //         debugger;
            //     });
            // },

            loadFromBlob: function loadFromBlob(blob) {
                var owner = this.owner;

                owner.info() && this.flashExec('Image', 'info', owner.info());
                owner.meta() && this.flashExec('Image', 'meta', owner.meta());

                this.flashExec('Image', 'loadFromBlob', blob.uid);
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/flash/transport', ['base', 'runtime/flash/runtime', 'runtime/client'], function (Base, FlashRuntime, RuntimeClient) {
        var $ = Base.$;

        return FlashRuntime.register('Transport', {
            init: function init() {
                this._status = 0;
                this._response = null;
                this._responseJson = null;
            },

            send: function send() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    binary;

                xhr.connectRuntime(blob.ruid);

                if (opts.sendAsBinary) {
                    server += (/\?/.test(server) ? '&' : '?') + $.param(owner._formData);

                    binary = blob.uid;
                } else {
                    $.each(owner._formData, function (k, v) {
                        xhr.exec('append', k, v);
                    });

                    xhr.exec('appendBlob', opts.fileVal, blob.uid, opts.filename || owner._formData.name || '');
                }

                this._setRequestHeader(xhr, opts.headers);
                xhr.exec('send', {
                    method: opts.method,
                    url: server,
                    forceURLStream: opts.forceURLStream,
                    mimeType: 'application/octet-stream'
                }, binary);
            },

            getStatus: function getStatus() {
                return this._status;
            },

            getResponse: function getResponse() {
                return this._response || '';
            },

            getResponseAsJson: function getResponseAsJson() {
                return this._responseJson;
            },

            abort: function abort() {
                var xhr = this._xhr;

                if (xhr) {
                    xhr.exec('abort');
                    xhr.destroy();
                    this._xhr = xhr = null;
                }
            },

            destroy: function destroy() {
                this.abort();
            },

            _initAjax: function _initAjax() {
                var me = this,
                    xhr = new RuntimeClient('XMLHttpRequest');

                xhr.on('uploadprogress progress', function (e) {
                    var percent = e.loaded / e.total;
                    percent = Math.min(1, Math.max(0, percent));
                    return me.trigger('progress', percent);
                });

                xhr.on('load', function () {
                    var status = xhr.exec('getStatus'),
                        readBody = false,
                        err = '',
                        p;

                    xhr.off();
                    me._xhr = null;

                    if (status >= 200 && status < 300) {
                        readBody = true;
                    } else if (status >= 500 && status < 600) {
                        readBody = true;
                        err = 'server';
                    } else {
                        err = 'http';
                    }

                    if (readBody) {
                        me._response = xhr.exec('getResponse');
                        me._response = decodeURIComponent(me._response);

                        // flash 处理可能存在 bug, 没辙只能靠 js 了
                        // try {
                        //     me._responseJson = xhr.exec('getResponseAsJson');
                        // } catch ( error ) {

                        p = window.JSON && window.JSON.parse || function (s) {
                            try {
                                return new Function('return ' + s).call();
                            } catch (err) {
                                return {};
                            }
                        };
                        me._responseJson = me._response ? p(me._response) : {};

                        // }
                    }

                    xhr.destroy();
                    xhr = null;

                    return err ? me.trigger('error', err) : me.trigger('load');
                });

                xhr.on('error', function () {
                    xhr.off();
                    me._xhr = null;
                    me.trigger('error', 'http');
                });

                me._xhr = xhr;
                return xhr;
            },

            _setRequestHeader: function _setRequestHeader(xhr, headers) {
                $.each(headers, function (key, val) {
                    xhr.exec('setRequestHeader', key, val);
                });
            }
        });
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/flash/blob', ['runtime/flash/runtime', 'lib/blob'], function (FlashRuntime, Blob) {

        return FlashRuntime.register('Blob', {
            slice: function slice(start, end) {
                var blob = this.flashExec('Blob', 'slice', start, end);

                return new Blob(blob.uid, blob);
            }
        });
    });
    /**
     * @fileOverview  Md5 flash实现
     */
    define('runtime/flash/md5', ['runtime/flash/runtime'], function (FlashRuntime) {

        return FlashRuntime.register('Md5', {
            init: function init() {
                // do nothing.
            },

            loadFromBlob: function loadFromBlob(blob) {
                return this.flashExec('Md5', 'loadFromBlob', blob.uid);
            }
        });
    });
    /**
     * @fileOverview 完全版本。
     */
    define('preset/all', ['base',

    // widgets
    'widgets/filednd', 'widgets/filepaste', 'widgets/filepicker', 'widgets/image', 'widgets/queue', 'widgets/runtime', 'widgets/upload', 'widgets/validator', 'widgets/md5',

    // runtimes
    // html5
    'runtime/html5/blob', 'runtime/html5/dnd', 'runtime/html5/filepaste', 'runtime/html5/filepicker', 'runtime/html5/imagemeta/exif', 'runtime/html5/androidpatch', 'runtime/html5/image', 'runtime/html5/transport', 'runtime/html5/md5',

    // flash
    'runtime/flash/filepicker', 'runtime/flash/image', 'runtime/flash/transport', 'runtime/flash/blob', 'runtime/flash/md5'], function (Base) {
        return Base;
    });
    /**
     * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
     *
     * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
     *
     * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
     *
     * 如：
     * WebUploader.create({
     *     ...
     *
     *     disableWidgets: 'log',
     *
     *     ...
     * })
     */
    define('widgets/log', ['base', 'uploader', 'widgets/widget'], function (Base, Uploader) {
        var $ = Base.$,
            logUrl = ' http://static.tieba.baidu.com/tb/pms/img/st.gif??',
            product = (location.hostname || location.host || 'protected').toLowerCase(),


        // 只针对 baidu 内部产品用户做统计功能。
        enable = product && /baidu/i.exec(product),
            base;

        if (!enable) {
            return;
        }

        base = {
            dv: 3,
            master: 'webuploader',
            online: /test/.exec(product) ? 0 : 1,
            module: '',
            product: product,
            type: 0
        };

        function send(data) {
            var obj = $.extend({}, base, data),
                url = logUrl.replace(/^(.*)\?/, '$1' + $.param(obj)),
                image = new Image();

            image.src = url;
        }

        return Uploader.register({
            name: 'log',

            init: function init() {
                var owner = this.owner,
                    count = 0,
                    size = 0;

                owner.on('error', function (code) {
                    send({
                        type: 2,
                        c_error_code: code
                    });
                }).on('uploadError', function (file, reason) {
                    send({
                        type: 2,
                        c_error_code: 'UPLOAD_ERROR',
                        c_reason: '' + reason
                    });
                }).on('uploadComplete', function (file) {
                    count++;
                    size += file.size;
                }).on('uploadFinished', function () {
                    send({
                        c_count: count,
                        c_size: size
                    });
                    count = size = 0;
                });

                send({
                    c_usage: 1
                });
            }
        });
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('webuploader', ['preset/all', 'widgets/log'], function (preset) {
        return preset;
    });
    return require('webuploader');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/main.vue?vue&type=template&id=99c4cba6&
var mainvue_type_template_id_99c4cba6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    _vm._g(
      _vm._b(
        {
          staticClass: "isc-button",
          class: [
            _vm.type ? "isc-button--" + _vm.type : "",
            _vm.size ? "isc-button--" + _vm.size : "",
            {
              "is-disabled": _vm.buttonDisabled,
              "is-plain": _vm.plain,
              "is-loading": _vm.loading
            }
          ],
          attrs: {
            type: "button",
            disabled: _vm.buttonDisabled,
            loading: _vm.loading
          }
        },
        "button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm.loading ? _c("i", { staticClass: "el-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var staticRenderFns = []
mainvue_type_template_id_99c4cba6_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=template&id=99c4cba6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'IsButton',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    plain: Boolean
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return this.disabled;
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_99c4cba6_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/button/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var packages_button = (main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=template&id=3d8661d0&
var button_groupvue_type_template_id_3d8661d0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-button-group" }, [_vm._t("default")], 2)
}
var button_groupvue_type_template_id_3d8661d0_staticRenderFns = []
button_groupvue_type_template_id_3d8661d0_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=template&id=3d8661d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'IsButtonGroup'
});
// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_3d8661d0_render,
  button_groupvue_type_template_id_3d8661d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_group_api; }
button_group_component.options.__file = "packages/button/src/button-group.vue"
/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button-group/index.js


/* istanbul ignore next */
button_group.install = function (Vue) {
  Vue.component(button_group.name, button_group);
};

/* harmony default export */ var packages_button_group = (button_group);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/src/step.vue?vue&type=template&id=f414a87a&
var stepvue_type_template_id_f414a87a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-step",
      class: [
        "is-" + _vm.currentStatus,
        !_vm.isSimple && "is-" + _vm.$parent.direction,
        _vm.isSimple && "is-simple",
        _vm.isLast && !_vm.space && !_vm.isCenter && "is-flex",
        _vm.isCenter && !_vm.isVertical && !_vm.isSimple && "is-center"
      ],
      style: _vm.style
    },
    [
      _c("div", { staticClass: "isc-step__head" }, [
        _c("div", { staticClass: "isc-step__icon" }, [
          _vm.currentStatus === "success"
            ? _c("div", { staticClass: "isc-step__icon-inner" })
            : _c("span", [_vm._v(_vm._s(_vm.index + 1))])
        ]),
        _c("div", { staticClass: "isc-step__main" }, [
          _vm._v(_vm._s(_vm.title))
        ])
      ]),
      !_vm.isLast ? _c("div", { staticClass: "isc-step__line" }) : _vm._e()
    ]
  )
}
var stepvue_type_template_id_f414a87a_staticRenderFns = []
stepvue_type_template_id_f414a87a_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=template&id=f414a87a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/src/step.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stepvue_type_script_lang_js_ = ({
  name: 'IsStep',

  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },

  data: function data() {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: ''
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var steps = this.$parent.steps;
    var index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },


  computed: {
    currentStatus: function currentStatus() {
      return this.status || this.internalStatus;
    },
    prevStatus: function prevStatus() {
      var prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    isCenter: function isCenter() {
      return this.$parent.alignCenter;
    },
    isVertical: function isVertical() {
      return this.$parent.direction === 'vertical';
    },
    isSimple: function isSimple() {
      return this.$parent.simple;
    },
    isLast: function isLast() {
      var parent = this.$parent;
      return parent.steps[parent.steps.length - 1] === this;
    },
    stepsCount: function stepsCount() {
      return this.$parent.steps.length;
    },
    space: function space() {
      var isSimple = this.isSimple,
          space = this.$parent.space;

      return isSimple ? '' : space;
    },

    style: function style() {
      var style = {};
      var parent = this.$parent;
      var len = parent.steps.length;

      var space = typeof this.space === 'number' ? this.space + 'px' : this.space ? this.space : 100 / (len - (this.isCenter ? 0 : 1)) + '%';
      style.flexBasis = space;
      if (this.isVertical) return style;
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + '%';
      } else {
        style.marginRight = -this.$parent.stepOffset + 'px';
      }

      return style;
    }
  },

  methods: {
    updateStatus: function updateStatus(val) {
      var prevChild = this.$parent.$children[this.index - 1];

      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
    calcProgress: function calcProgress(status) {
      var step = 100;
      var style = {};

      style.transitionDelay = 150 * this.index + 'ms';
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0;
      } else if (status === 'wait') {
        step = 0;
        style.transitionDelay = -150 * this.index + 'ms';
      }

      style.borderWidth = step ? '1px' : 0;
      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

      this.lineStyle = style;
    }
  },

  mounted: function mounted() {
    var _this = this;

    var unwatch = this.$watch('index', function (val) {
      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
      unwatch();
    });
  }
});
// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stepvue_type_script_lang_js_ = (stepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/steps/src/step.vue





/* normalize component */

var step_component = normalizeComponent(
  src_stepvue_type_script_lang_js_,
  stepvue_type_template_id_f414a87a_render,
  stepvue_type_template_id_f414a87a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var step_api; }
step_component.options.__file = "packages/steps/src/step.vue"
/* harmony default export */ var step = (step_component.exports);
// CONCATENATED MODULE: ./packages/step/index.js


/* istanbul ignore next */
step.install = function (Vue) {
  Vue.component(step.name, step);
};

/* harmony default export */ var packages_step = (step);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/src/steps.vue?vue&type=template&id=3c6b6dc0&
var stepsvue_type_template_id_3c6b6dc0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-steps",
      class: [
        !_vm.simple && "isc-steps--" + _vm.direction,
        _vm.simple && "isc-steps--simple"
      ]
    },
    [_vm._t("default")],
    2
  )
}
var stepsvue_type_template_id_3c6b6dc0_staticRenderFns = []
stepsvue_type_template_id_3c6b6dc0_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=template&id=3c6b6dc0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/src/steps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stepsvue_type_script_lang_js_ = ({
  name: 'IsSteps',

  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },

  data: function data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },


  watch: {
    active: function active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
    steps: function steps(_steps) {
      _steps.forEach(function (child, index) {
        child.index = index;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stepsvue_type_script_lang_js_ = (stepsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/steps/src/steps.vue





/* normalize component */

var steps_component = normalizeComponent(
  src_stepsvue_type_script_lang_js_,
  stepsvue_type_template_id_3c6b6dc0_render,
  stepsvue_type_template_id_3c6b6dc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var steps_api; }
steps_component.options.__file = "packages/steps/src/steps.vue"
/* harmony default export */ var steps = (steps_component.exports);
// CONCATENATED MODULE: ./packages/steps/index.js


steps.install = function (Vue) {
  Vue.component(steps.name, steps);
};

/* harmony default export */ var packages_steps = (steps);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/main.vue?vue&type=template&id=1c3ed1c4&
var mainvue_type_template_id_1c3ed1c4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-card" }, [_vm._t("default")], 2)
}
var mainvue_type_template_id_1c3ed1c4_staticRenderFns = []
mainvue_type_template_id_1c3ed1c4_render._withStripped = true


// CONCATENATED MODULE: ./packages/card/main.vue?vue&type=template&id=1c3ed1c4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var card_mainvue_type_script_lang_js_ = ({
    name: 'IsCard'
});
// CONCATENATED MODULE: ./packages/card/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_card_mainvue_type_script_lang_js_ = (card_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/card/main.vue





/* normalize component */

var main_component = normalizeComponent(
  packages_card_mainvue_type_script_lang_js_,
  mainvue_type_template_id_1c3ed1c4_render,
  mainvue_type_template_id_1c3ed1c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/card/main.vue"
/* harmony default export */ var card_main = (main_component.exports);
// CONCATENATED MODULE: ./packages/card/index.js


card_main.install = function (Vue) {
  Vue.component(card_main.name, card_main);
};

/* harmony default export */ var card = (card_main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/main.vue?vue&type=template&id=55c8ade7&
var mainvue_type_template_id_55c8ade7_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.hide,
          expression: "hide"
        }
      ],
      class: [
        "isc-color-picker",
        _vm.colorDisabled ? "is-disabled" : "",
        _vm.colorSize ? "isc-color-picker--" + _vm.colorSize : ""
      ]
    },
    [
      _vm.colorDisabled
        ? _c("div", { staticClass: "isc-color-picker__mask" })
        : _vm._e(),
      _vm.isPopper && !_vm.$slots.trigger
        ? _c(
            "div",
            {
              staticClass: "isc-color-picker__trigger",
              on: { click: _vm.handleTrigger }
            },
            [
              _c(
                "span",
                {
                  staticClass: "isc-color-picker__color",
                  class: { "is-alpha": _vm.showAlpha }
                },
                [
                  _c("span", {
                    staticClass: "isc-color-picker__color-inner",
                    style: {
                      backgroundColor: _vm.displayedColor
                    }
                  }),
                  !_vm.value && !_vm.showPanelColor
                    ? _c("span", {
                        staticClass: "isc-color-picker__empty isc-icon-close"
                      })
                    : _vm._e()
                ]
              ),
              _c("span", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.value || _vm.showPanelColor,
                    expression: "value || showPanelColor"
                  }
                ],
                staticClass: "isc-color-picker__icon isc-icon-arrow-down"
              })
            ]
          )
        : _vm._e(),
      _vm.isPopper && _vm.$slots.trigger
        ? _c(
            "div",
            { on: { click: _vm.handleTrigger } },
            [_vm._t("trigger")],
            2
          )
        : _vm._e(),
      _c("picker-dropdown", {
        ref: "dropdown",
        class: ["isc-color-picker__panel", _vm.popperClass || ""],
        attrs: {
          isPopper: _vm.isPopper,
          color: _vm.color,
          "show-alpha": _vm.showAlpha,
          predefine: _vm.predefine
        },
        on: { pick: _vm.confirmValue, clear: _vm.clearValue },
        model: {
          value: _vm.showPicker,
          callback: function($$v) {
            _vm.showPicker = $$v
          },
          expression: "showPicker"
        }
      })
    ],
    1
  )
}
var mainvue_type_template_id_55c8ade7_staticRenderFns = []
mainvue_type_template_id_55c8ade7_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=template&id=55c8ade7&

// EXTERNAL MODULE: external "babel-runtime/helpers/typeof"
var typeof_ = __webpack_require__(0);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "babel-runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// CONCATENATED MODULE: ./packages/color-picker/src/color.js


var hsv2hsl = function hsv2hsl(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
var isOnePointZero = function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

var isPercentage = function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
var bound01 = function bound01(value, max) {
  if (isOnePointZero(value)) value = '100%';

  var processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return value % max / parseFloat(max);
};

var INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

var toHex = function toHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;

  var hexOne = function hexOne(value) {
    value = Math.min(Math.round(value), 255);
    var high = Math.floor(value / 16);
    var low = value % 16;
    return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

  return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};

var HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

var parseHexChannel = function parseHexChannel(hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

var hsl2hsv = function hsl2hsv(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  var smin = sat;
  var lmin = Math.max(light, 0.01);
  var sv = void 0;
  var v = void 0;

  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
var rgb2hsv = function rgb2hsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = void 0,
      s = void 0;
  var v = max;

  var d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
var hsv2rgb = function hsv2rgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

var color_Color = function () {
  function Color(options) {
    classCallCheck_default()(this, Color);

    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;

    this.enableAlpha = false;
    this.format = 'hex';
    this.value = '';

    options = options || {};

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.doOnChange();
  }

  Color.prototype.set = function set(prop, value) {
    if (arguments.length === 1 && (typeof prop === 'undefined' ? 'undefined' : typeof_default()(prop)) === 'object') {
      for (var p in prop) {
        if (prop.hasOwnProperty(p)) {
          this.set(p, prop[p]);
        }
      }

      return;
    }

    this['_' + prop] = value;
    this.doOnChange();
  };

  Color.prototype.get = function get(prop) {
    return this['_' + prop];
  };

  Color.prototype.toRgb = function toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  };

  Color.prototype.fromString = function fromString(value) {
    var _this = this;

    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;

      this.doOnChange();
      return;
    }

    var fromHSV = function fromHSV(h, s, v) {
      _this._hue = Math.max(0, Math.min(360, h));
      _this._saturation = Math.max(0, Math.min(100, s));
      _this._value = Math.max(0, Math.min(100, v));

      _this.doOnChange();
    };

    if (value.indexOf('hsl') !== -1) {
      var parts = value.replace(/hsla|hsl|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        var _hsl2hsv = hsl2hsv(parts[0], parts[1], parts[2]),
            h = _hsl2hsv.h,
            s = _hsl2hsv.s,
            v = _hsl2hsv.v;

        fromHSV(h, s, v);
      }
    } else if (value.indexOf('hsv') !== -1) {
      var _parts = value.replace(/hsva|hsv|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts[3]) * 100);
      } else if (_parts.length === 3) {
        this._alpha = 100;
      }
      if (_parts.length >= 3) {
        fromHSV(_parts[0], _parts[1], _parts[2]);
      }
    } else if (value.indexOf('rgb') !== -1) {
      var _parts2 = value.replace(/rgba|rgb|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts2.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts2[3]) * 100);
      } else if (_parts2.length === 3) {
        this._alpha = 100;
      }
      if (_parts2.length >= 3) {
        var _rgb2hsv = rgb2hsv(_parts2[0], _parts2[1], _parts2[2]),
            _h = _rgb2hsv.h,
            _s = _rgb2hsv.s,
            _v = _rgb2hsv.v;

        fromHSV(_h, _s, _v);
      }
    } else if (value.indexOf('#') !== -1) {
      var hex = value.replace('#', '').trim();
      var r = void 0,
          g = void 0,
          b = void 0;

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.substring(0, 2));
        g = parseHexChannel(hex.substring(2, 4));
        b = parseHexChannel(hex.substring(4, 6));
      }

      if (hex.length === 8) {
        this._alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }

      var _rgb2hsv2 = rgb2hsv(r, g, b),
          _h2 = _rgb2hsv2.h,
          _s2 = _rgb2hsv2.s,
          _v2 = _rgb2hsv2.v;

      fromHSV(_h2, _s2, _v2);
    }
  };

  Color.prototype.compare = function compare(color) {
    return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
  };

  Color.prototype.doOnChange = function doOnChange() {
    var _hue = this._hue,
        _saturation = this._saturation,
        _value = this._value,
        _alpha = this._alpha,
        format = this.format;


    if (this.enableAlpha) {
      switch (format) {
        case 'hsl':
          var hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsla(' + _hue + ', ' + Math.round(hsl[1] * 100) + '%, ' + Math.round(hsl[2] * 100) + '%, ' + _alpha / 100 + ')';
          break;
        case 'hsv':
          this.value = 'hsva(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%, ' + _alpha / 100 + ')';
          break;
        default:
          var _hsv2rgb = hsv2rgb(_hue, _saturation, _value),
              r = _hsv2rgb.r,
              g = _hsv2rgb.g,
              b = _hsv2rgb.b;

          this.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + _alpha / 100 + ')';
      }
    } else {
      switch (format) {
        case 'hsl':
          var _hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsl(' + _hue + ', ' + Math.round(_hsl[1] * 100) + '%, ' + Math.round(_hsl[2] * 100) + '%)';
          break;
        case 'hsv':
          this.value = 'hsv(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%)';
          break;
        case 'rgb':
          var _hsv2rgb2 = hsv2rgb(_hue, _saturation, _value),
              _r = _hsv2rgb2.r,
              _g = _hsv2rgb2.g,
              _b = _hsv2rgb2.b;

          this.value = 'rgb(' + _r + ', ' + _g + ', ' + _b + ')';
          break;
        default:
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
      }
    }
  };

  return Color;
}();

/* harmony default export */ var src_color = (color_Color);
;
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/picker-dropdown.vue?vue&type=template&id=06601625&
var picker_dropdownvue_type_template_id_06601625_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "isc-zoom-in-top" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isPopper ? _vm.showPopper : true,
            expression: "isPopper ? showPopper : true"
          }
        ],
        staticClass: "isc-color-dropdown"
      },
      [
        _vm.predefine
          ? _c("predefine", {
              attrs: { color: _vm.color, colors: _vm.predefine }
            })
          : _vm._e(),
        _c(
          "div",
          { staticClass: "isc-color-dropdown__main-wrapper" },
          [
            _c("hue-slider", {
              ref: "hue",
              staticStyle: { float: "right" },
              attrs: { color: _vm.color, vertical: "" }
            }),
            _c("sv-panel", { ref: "sl", attrs: { color: _vm.color } })
          ],
          1
        ),
        _vm.showAlpha
          ? _c("alpha-slider", { ref: "alpha", attrs: { color: _vm.color } })
          : _vm._e(),
        _c("div", { staticClass: "isc-color-dropdown__btns" }, [
          _c(
            "span",
            { staticClass: "isc-color-dropdown__value" },
            [
              _c("is-input", {
                attrs: { "validate-event": false, size: "mini" },
                on: { blur: _vm.handleConfirm },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleConfirm($event)
                  }
                },
                model: {
                  value: _vm.customInput,
                  callback: function($$v) {
                    _vm.customInput = $$v
                  },
                  expression: "customInput"
                }
              })
            ],
            1
          ),
          _c("div", {
            staticClass: "isc-color-dropdown__preview",
            style: { background: _vm.customInput }
          }),
          _c(
            "div",
            [
              _c(
                "is-button",
                {
                  attrs: { size: "mini", type: "text" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("clear")
                    }
                  }
                },
                [_vm._v("\n                    清除\n                ")]
              ),
              _c(
                "is-button",
                { attrs: { size: "mini" }, on: { click: _vm.confirmValue } },
                [_vm._v("\n                    确认\n                ")]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var picker_dropdownvue_type_template_id_06601625_staticRenderFns = []
picker_dropdownvue_type_template_id_06601625_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue?vue&type=template&id=06601625&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/sv-panel.vue?vue&type=template&id=d8583596&
var sv_panelvue_type_template_id_d8583596_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-color-svpanel",
      style: {
        backgroundColor: _vm.background
      }
    },
    [
      _c("div", { staticClass: "isc-color-svpanel__white" }),
      _c("div", { staticClass: "isc-color-svpanel__black" }),
      _c(
        "div",
        {
          staticClass: "isc-color-svpanel__cursor",
          style: {
            top: _vm.cursorTop + "px",
            left: _vm.cursorLeft + "px"
          }
        },
        [_c("div")]
      )
    ]
  )
}
var sv_panelvue_type_template_id_d8583596_staticRenderFns = []
sv_panelvue_type_template_id_d8583596_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue?vue&type=template&id=d8583596&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./packages/color-picker/src/draggable.js

var isDragging = false;

/* harmony default export */ var draggable = (function (element, options) {
  if (external_vue_default.a.prototype.$isServer) return;
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  var upFn = function upFn(event) {
    document.removeEventListener('mousemove', moveFn);
    document.removeEventListener('mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener('mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    document.addEventListener('mousemove', moveFn);
    document.addEventListener('mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/sv-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var sv_panelvue_type_script_lang_js_ = ({
    name: 'isc-sl-panel',

    props: {
        color: {
            required: true
        }
    },

    computed: {
        colorValue: function colorValue() {
            var hue = this.color.get('hue');
            var value = this.color.get('value');
            return { hue: hue, value: value };
        }
    },

    watch: {
        colorValue: function colorValue() {
            this.update();
        }
    },

    methods: {
        update: function update() {
            var saturation = this.color.get('saturation');
            var value = this.color.get('value');

            var el = this.$el;
            var width = el.clientWidth,
                height = el.clientHeight;


            this.cursorLeft = saturation * width / 100;
            this.cursorTop = (100 - value) * height / 100;

            this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
        },
        handleDrag: function handleDrag(event) {
            var el = this.$el;
            var rect = el.getBoundingClientRect();

            var left = event.clientX - rect.left;
            var top = event.clientY - rect.top;
            left = Math.max(0, left);
            left = Math.min(left, rect.width);

            top = Math.max(0, top);
            top = Math.min(top, rect.height);

            this.cursorLeft = left;
            this.cursorTop = top;
            this.color.set({
                saturation: left / rect.width * 100,
                value: 100 - top / rect.height * 100
            });
        }
    },

    mounted: function mounted() {
        var _this = this;

        draggable(this.$el, {
            drag: function drag(event) {
                _this.handleDrag(event);
            },
            end: function end(event) {
                _this.handleDrag(event);
            }
        });

        this.update();
    },
    data: function data() {
        return {
            cursorTop: 0,
            cursorLeft: 0,
            background: 'hsl(0, 100%, 50%)'
        };
    }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sv_panelvue_type_script_lang_js_ = (sv_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue





/* normalize component */

var sv_panel_component = normalizeComponent(
  components_sv_panelvue_type_script_lang_js_,
  sv_panelvue_type_template_id_d8583596_render,
  sv_panelvue_type_template_id_d8583596_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var sv_panel_api; }
sv_panel_component.options.__file = "packages/color-picker/src/components/sv-panel.vue"
/* harmony default export */ var sv_panel = (sv_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/hue-slider.vue?vue&type=template&id=5cdc43b1&
var hue_slidervue_type_template_id_5cdc43b1_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-color-hue-slider",
      class: { "is-vertical": _vm.vertical }
    },
    [
      _c("div", {
        ref: "bar",
        staticClass: "isc-color-hue-slider__bar",
        on: { click: _vm.handleClick }
      }),
      _c("div", {
        ref: "thumb",
        staticClass: "isc-color-hue-slider__thumb",
        style: {
          left: _vm.thumbLeft + "px",
          top: _vm.thumbTop + "px"
        }
      })
    ]
  )
}
var hue_slidervue_type_template_id_5cdc43b1_staticRenderFns = []
hue_slidervue_type_template_id_5cdc43b1_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue?vue&type=template&id=5cdc43b1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/hue-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var hue_slidervue_type_script_lang_js_ = ({
  name: 'isc-color-hue-slider',

  props: {
    color: {
      required: true
    },

    vertical: Boolean
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0
    };
  },


  computed: {
    hueValue: function hueValue() {
      var hue = this.color.get('hue');
      return hue;
    }
  },

  watch: {
    hueValue: function hueValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;

      var hue = void 0;

      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        left = Math.max(thumb.offsetWidth / 2, left);

        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
      } else {
        var top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        top = Math.max(thumb.offsetHeight / 2, top);

        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
      }

      this.color.set('hue', hue);
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
    }
  },

  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    draggable(bar, dragConfig);
    draggable(thumb, dragConfig);
    this.update();
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_hue_slidervue_type_script_lang_js_ = (hue_slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue





/* normalize component */

var hue_slider_component = normalizeComponent(
  components_hue_slidervue_type_script_lang_js_,
  hue_slidervue_type_template_id_5cdc43b1_render,
  hue_slidervue_type_template_id_5cdc43b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var hue_slider_api; }
hue_slider_component.options.__file = "packages/color-picker/src/components/hue-slider.vue"
/* harmony default export */ var hue_slider = (hue_slider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/alpha-slider.vue?vue&type=template&id=068c66cb&
var alpha_slidervue_type_template_id_068c66cb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-color-alpha-slider",
      class: { "is-vertical": _vm.vertical }
    },
    [
      _c("div", {
        ref: "bar",
        staticClass: "isc-color-alpha-slider__bar",
        style: {
          background: _vm.background
        },
        on: { click: _vm.handleClick }
      }),
      _c("div", {
        ref: "thumb",
        staticClass: "isc-color-alpha-slider__thumb",
        style: {
          left: _vm.thumbLeft + "px",
          top: _vm.thumbTop + "px"
        }
      })
    ]
  )
}
var alpha_slidervue_type_template_id_068c66cb_staticRenderFns = []
alpha_slidervue_type_template_id_068c66cb_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue?vue&type=template&id=068c66cb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/alpha-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var alpha_slidervue_type_script_lang_js_ = ({
  name: 'isc-color-alpha-slider',

  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },

  watch: {
    'color._alpha': function color_alpha() {
      this.update();
    },
    'color.value': function colorValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;


      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.max(thumb.offsetWidth / 2, left);
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);

        this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
      } else {
        var top = event.clientY - rect.top;
        top = Math.max(thumb.offsetHeight / 2, top);
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);

        this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
      }
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
    },
    getBackground: function getBackground() {
      if (this.color && this.color.value) {
        var _color$toRgb = this.color.toRgb(),
            r = _color$toRgb.r,
            g = _color$toRgb.g,
            b = _color$toRgb.b;

        return 'linear-gradient(to right, rgba(' + r + ', ' + g + ', ' + b + ', 0) 0%, rgba(' + r + ', ' + g + ', ' + b + ', 1) 100%)';
      }
      return null;
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
      this.background = this.getBackground();
    }
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0,
      background: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    draggable(bar, dragConfig);
    draggable(thumb, dragConfig);
    this.update();
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_alpha_slidervue_type_script_lang_js_ = (alpha_slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue





/* normalize component */

var alpha_slider_component = normalizeComponent(
  components_alpha_slidervue_type_script_lang_js_,
  alpha_slidervue_type_template_id_068c66cb_render,
  alpha_slidervue_type_template_id_068c66cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var alpha_slider_api; }
alpha_slider_component.options.__file = "packages/color-picker/src/components/alpha-slider.vue"
/* harmony default export */ var alpha_slider = (alpha_slider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/predefine.vue?vue&type=template&id=06e03093&
var predefinevue_type_template_id_06e03093_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-color-predefine" }, [
    _c(
      "div",
      { staticClass: "isc-color-predefine__colors" },
      _vm._l(_vm.rgbaColors, function(item, index) {
        return _c(
          "div",
          {
            key: _vm.colors[index],
            staticClass: "isc-color-predefine__color-selector",
            class: { selected: item.selected, "is-alpha": item._alpha < 100 },
            on: {
              click: function($event) {
                return _vm.handleSelect(index)
              }
            }
          },
          [_c("div", { style: { "background-color": item.value } })]
        )
      }),
      0
    )
  ])
}
var predefinevue_type_template_id_06e03093_staticRenderFns = []
predefinevue_type_template_id_06e03093_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue?vue&type=template&id=06e03093&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/predefine.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var predefinevue_type_script_lang_js_ = ({
  props: {
    colors: { type: Array, required: true },
    color: { required: true }
  },
  data: function data() {
    return {
      rgbaColors: this.parseColors(this.colors, this.color)
    };
  },

  methods: {
    handleSelect: function handleSelect(index) {
      this.color.fromString(this.colors[index]);
    },
    parseColors: function parseColors(colors, color) {
      return colors.map(function (value) {
        var c = new src_color();
        c.enableAlpha = true;
        c.format = 'rgba';
        c.fromString(value);
        c.selected = c.value === color.value;
        return c;
      });
    }
  },
  watch: {
    '$parent.currentColor': function $parentCurrentColor(val) {
      var color = new src_color();
      color.fromString(val);

      this.rgbaColors.forEach(function (item) {
        item.selected = color.compare(item);
      });
    },
    colors: function colors(newVal) {
      this.rgbaColors = this.parseColors(newVal, this.color);
    },
    color: function color(newVal) {
      this.rgbaColors = this.parseColors(this.colors, newVal);
    }
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_predefinevue_type_script_lang_js_ = (predefinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue





/* normalize component */

var predefine_component = normalizeComponent(
  components_predefinevue_type_script_lang_js_,
  predefinevue_type_template_id_06e03093_render,
  predefinevue_type_template_id_06e03093_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var predefine_api; }
predefine_component.options.__file = "packages/color-picker/src/components/predefine.vue"
/* harmony default export */ var predefine = (predefine_component.exports);
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(12);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "isyscore-ui/lib/input"
var input_ = __webpack_require__(17);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "isyscore-ui/lib/button"
var button_ = __webpack_require__(22);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/picker-dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





//    import Locale from 'element-ui/src/mixins/locale';




/* harmony default export */ var picker_dropdownvue_type_script_lang_js_ = ({
    name: 'is-color-picker-dropdown',

    mixins: [vue_popper_default.a],

    components: {
        SvPanel: sv_panel,
        HueSlider: hue_slider,
        AlphaSlider: alpha_slider,
        IsButton: button_default.a,
        Predefine: predefine
    },

    props: {
        color: {
            required: true
        },
        showAlpha: Boolean,
        predefine: Array,
        isPopper: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            customInput: ''
        };
    },


    computed: {
        currentColor: function currentColor() {
            var parent = this.$parent;
            return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
        }
    },

    methods: {
        confirmValue: function confirmValue() {
            this.$emit('pick');
        },
        handleConfirm: function handleConfirm() {
            this.color.fromString(this.customInput);
        }
    },

    mounted: function mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.$parent.$el;
    },


    watch: {
        showPopper: function showPopper(val) {
            var _this = this;

            if (val === true) {
                this.$nextTick(function () {
                    var _$refs = _this.$refs,
                        sl = _$refs.sl,
                        hue = _$refs.hue,
                        alpha = _$refs.alpha;

                    sl && sl.update();
                    hue && hue.update();
                    alpha && alpha.update();
                });
            }
        },


        currentColor: {
            immediate: true,
            handler: function handler(val) {
                this.customInput = val;
                //                    this.$emit('pick');
            }
        }
    }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_picker_dropdownvue_type_script_lang_js_ = (picker_dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue





/* normalize component */

var picker_dropdown_component = normalizeComponent(
  components_picker_dropdownvue_type_script_lang_js_,
  picker_dropdownvue_type_template_id_06601625_render,
  picker_dropdownvue_type_template_id_06601625_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var picker_dropdown_api; }
picker_dropdown_component.options.__file = "packages/color-picker/src/components/picker-dropdown.vue"
/* harmony default export */ var picker_dropdown = (picker_dropdown_component.exports);
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(13);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "isyscore-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(5);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var color_picker_src_mainvue_type_script_lang_js_ = ({
    name: 'IsColorPicker',

    mixins: [emitter_default.a],

    props: {
        value: String,
        showAlpha: Boolean,
        colorFormat: String,
        disabled: Boolean,
        size: String,
        popperClass: String,
        predefine: Array,
        isPopper: {
            type: Boolean,
            default: false
        }
    },

    inject: {
        elForm: {
            default: ''
        },
        elFormItem: {
            default: ''
        }
    },

    directives: { Clickoutside: clickoutside_default.a },

    computed: {
        displayedColor: function displayedColor() {
            if (!this.value && !this.showPanelColor) {
                return 'transparent';
            }

            return this.displayedRgb(this.color, this.showAlpha);
        },
        _elFormItemSize: function _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        colorSize: function colorSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        colorDisabled: function colorDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
        }
    },

    watch: {
        value: function value(val) {
            if (!val) {
                this.showPanelColor = false;
            } else if (val && val !== this.color.value) {
                this.color.fromString(val);
            }
        },

        color: {
            deep: true,
            handler: function handler() {
                this.showPanelColor = true;
            }
        },
        displayedColor: function displayedColor(val) {
            if (!this.showPicker) return;
            var currentValueColor = new src_color({
                enableAlpha: this.showAlpha,
                format: this.colorFormat
            });
            currentValueColor.fromString(this.value);

            var currentValueColorRgb = this.displayedRgb(currentValueColor, this.showAlpha);
            if (val !== currentValueColorRgb) {
                this.$emit('active-change', val);
            }
        }
    },

    methods: {
        handleTrigger: function handleTrigger() {
            if (this.colorDisabled) return;
            this.showPicker = !this.showPicker;
        },
        confirmValue: function confirmValue() {
            var value = this.color.value;
            this.$emit('input', value);
            this.$emit('change', value);
            this.dispatch('ElFormItem', 'el.form.change', value);
            this.showPicker = false;
        },
        clearValue: function clearValue() {
            this.$emit('input', null);
            this.$emit('change', null);
            if (this.value !== null) {
                this.dispatch('ElFormItem', 'el.form.change', null);
            }
            this.showPanelColor = false;
            this.showPicker = false;
            this.resetColor();
        },
        hide: function hide() {
            this.showPicker = false;
            this.resetColor();
        },
        resetColor: function resetColor() {
            var _this = this;

            this.$nextTick(function (_) {
                if (_this.value) {
                    _this.color.fromString(_this.value);
                } else {
                    _this.showPanelColor = false;
                }
            });
        },
        displayedRgb: function displayedRgb(color, showAlpha) {
            if (!(color instanceof src_color)) {
                throw Error('color should be instance of Color Class');
            }

            var _color$toRgb = color.toRgb(),
                r = _color$toRgb.r,
                g = _color$toRgb.g,
                b = _color$toRgb.b;

            return showAlpha ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + color.get('alpha') / 100 + ')' : 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    },
    mounted: function mounted() {
        var value = this.value;
        // 设置默认值
        if (value) {
            this.color.fromString(value);
        }
        this.popperElm = this.$refs.dropdown.$el;
    },
    data: function data() {
        var color = new src_color({
            enableAlpha: this.showAlpha,
            format: this.colorFormat
        });
        return {
            color: color,
            showPicker: false,
            showPanelColor: false
        };
    },


    components: {
        PickerDropdown: picker_dropdown
    }
});
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_color_picker_src_mainvue_type_script_lang_js_ = (color_picker_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  packages_color_picker_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_55c8ade7_render,
  mainvue_type_template_id_55c8ade7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var src_main_api; }
src_main_component.options.__file = "packages/color-picker/src/main.vue"
/* harmony default export */ var src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./packages/color-picker/index.js


/* istanbul ignore next */
src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main);
};

/* harmony default export */ var color_picker = (src_main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var inputvue_type_template_id_343dd774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.type === "textarea" ? "isc-textarea" : "isc-input",
        _vm.inputSize ? "isc-input--" + _vm.inputSize : "",
        {
          "is-disabled": _vm.inputDisabled,
          "is-exceed": _vm.inputExceed,
          "isc-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "isc-input-group--append": _vm.$slots.append,
          "isc-input-group--prepend": _vm.$slots.prepend,
          "isc-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "isc-input--suffix":
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.clearable ||
            _vm.showPassword
        }
      ],
      on: {
        mouseenter: function($event) {
          _vm.hovering = true
        },
        mouseleave: function($event) {
          _vm.hovering = false
        }
      }
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "isc-input-group__prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "isc-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        disabled: _vm.inputDisabled,
                        readonly: _vm.readonly,
                        autocomplete: _vm.autoComplete || _vm.autocomplete,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm.$slots.prefix || _vm.prefixIcon
              ? _c(
                  "span",
                  { staticClass: "isc-input__prefix" },
                  [
                    _vm._t("prefix"),
                    _vm.prefixIcon
                      ? _c("i", {
                          staticClass: "isc-input__icon",
                          class: _vm.prefixIcon
                        })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.getSuffixVisible()
              ? _c("span", { staticClass: "isc-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "isc-input__suffix-inner" },
                    [
                      !_vm.showClear ||
                      !_vm.showPwdVisible ||
                      !_vm.isWordLimitVisible
                        ? [
                            _vm._t("suffix"),
                            _vm.suffixIcon
                              ? _c("i", {
                                  staticClass: "isc-input__icon",
                                  class: _vm.suffixIcon
                                })
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "isc-input__icon isc-icon-circle-close isc-input__clear",
                            on: { click: _vm.clear }
                          })
                        : _vm._e(),
                      _vm.showPwdVisible
                        ? _c("i", {
                            staticClass:
                              "isc-input__icon isc-icon-view isc-input__clear",
                            on: { click: _vm.handlePasswordVisible }
                          })
                        : _vm._e(),
                      _vm.isWordLimitVisible
                        ? _c("span", { staticClass: "isc-input__count" }, [
                            _c(
                              "span",
                              { staticClass: "isc-input__count-inner" },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.textLength) +
                                    "/" +
                                    _vm._s(_vm.upperLimit) +
                                    "\n          "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm.validateState
                    ? _c("i", {
                        staticClass: "isc-input__icon",
                        class: ["isc-input__validateIcon", _vm.validateIcon]
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "isc-input-group__append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "isc-textarea__inner",
                style: _vm.textareaStyle,
                attrs: {
                  tabindex: _vm.tabindex,
                  disabled: _vm.inputDisabled,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autoComplete || _vm.autocomplete,
                  "aria-label": _vm.label
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          ),
      _vm.isWordLimitVisible && _vm.type === "textarea"
        ? _c("span", { staticClass: "isc-input__count" }, [
            _vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))
          ])
        : _vm._e()
    ],
    2
  )
}
var inputvue_type_template_id_343dd774_staticRenderFns = []
inputvue_type_template_id_343dd774_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// EXTERNAL MODULE: external "isyscore-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(23);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/merge"
var merge_ = __webpack_require__(6);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'IsInput',

  componentName: 'IsInput',

  mixins: [emitter_default.a, migrating_default.a],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },


  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
         false && false;
        return true;
      }
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'isc-icon-loading',
        success: 'isc-icon-circle-check',
        error: 'isc-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return merge_default()({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear: function showClear() {
      return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
    },
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
    },
    isWordLimitVisible: function isWordLimitVisible() {
      return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
    },
    upperLimit: function upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength: function textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    inputExceed: function inputExceed() {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    }
  },

  watch: {
    value: function value(val) {
      this.$nextTick(this.resizeTextarea);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    },

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type: function type() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNativeInputValue();
        _this.resizeTextarea();
        _this.updateIconOffset();
      });
    }
  },

  methods: {
    focus: function focus() {
      this.getInput().focus();
    },
    blur: function blur() {
      this.getInput().blur();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
      }
    },
    select: function select() {
      this.getInput().select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    handleInput: function handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit('input', event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    calcIconOffset: function calcIconOffset(place) {
      var elList = [].slice.call(this.$el.querySelectorAll('.isc-input__' + place) || []);
      if (!elList.length) return;
      var el = null;
      for (var i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }
      if (!el) return;
      var pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      };

      var pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.isc-input-group__' + pendant).offsetWidth + 'px)';
      } else {
        el.removeAttribute('style');
      }
    },
    updateIconOffset: function updateIconOffset() {
      this.calcIconOffset('prefix');
      this.calcIconOffset('suffix');
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    getSuffixVisible: function getSuffixVisible() {
      return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
    }
  },

  created: function created() {
    this.$on('inputSelect', this.select);
  },
  mounted: function mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },
  updated: function updated() {
    this.$nextTick(this.updateIconOffset);
  }
});
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_343dd774_render,
  inputvue_type_template_id_343dd774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/src/input.vue"
/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


/* istanbul ignore next */
input.install = function (Vue) {
  Vue.component(input.name, input);
};

/* harmony default export */ var packages_input = (input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&
var checkboxvue_type_template_id_d0387074_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "isc-checkbox",
      class: [
        _vm.border && _vm.checkboxSize
          ? "isc-checkbox--" + _vm.checkboxSize
          : "",
        { "is-disabled": _vm.isDisabled },
        { "is-bordered": _vm.border },
        { "is-checked": _vm.isChecked }
      ],
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.indeterminate ? "mixed" : _vm.isChecked,
        "aria-disabled": _vm.isDisabled,
        id: _vm.id
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "isc-checkbox__input",
          class: {
            "is-disabled": _vm.isDisabled,
            "is-checked": _vm.isChecked,
            "is-indeterminate": _vm.indeterminate,
            "is-focus": _vm.focus
          },
          attrs: { "aria-checked": "mixed" }
        },
        [
          _c("span", { staticClass: "isc-checkbox__inner" }),
          _vm.trueLabel || _vm.falseLabel
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model,
                    expression: "model"
                  }
                ],
                staticClass: "isc-checkbox__original",
                attrs: {
                  type: "checkbox",
                  "aria-hidden": "true",
                  name: _vm.name,
                  disabled: _vm.isDisabled,
                  "true-value": _vm.trueLabel,
                  "false-value": _vm.falseLabel
                },
                domProps: {
                  checked: Array.isArray(_vm.model)
                    ? _vm._i(_vm.model, null) > -1
                    : _vm._q(_vm.model, _vm.trueLabel)
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? _vm.trueLabel : _vm.falseLabel
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.model = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.model = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.model = $$c
                      }
                    },
                    _vm.handleChange
                  ],
                  focus: function($event) {
                    _vm.focus = true
                  },
                  blur: function($event) {
                    _vm.focus = false
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model,
                    expression: "model"
                  }
                ],
                staticClass: "isc-checkbox__original",
                attrs: {
                  type: "checkbox",
                  "aria-hidden": "true",
                  disabled: _vm.isDisabled,
                  name: _vm.name
                },
                domProps: {
                  value: _vm.label,
                  checked: Array.isArray(_vm.model)
                    ? _vm._i(_vm.model, _vm.label) > -1
                    : _vm.model
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = _vm.label,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.model = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.model = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.model = $$c
                      }
                    },
                    _vm.handleChange
                  ],
                  focus: function($event) {
                    _vm.focus = true
                  },
                  blur: function($event) {
                    _vm.focus = false
                  }
                }
              })
        ]
      ),
      _vm.$slots.default || _vm.label
        ? _c(
            "span",
            { staticClass: "isc-checkbox__label" },
            [
              _vm._t("default"),
              !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var checkboxvue_type_template_id_d0387074_staticRenderFns = []
checkboxvue_type_template_id_d0387074_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'IsCheckbox',

  mixins: [emitter_default.a],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  componentName: 'IsCheckbox',

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },


  computed: {
    model: {
      get: function get() {
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxSize: function checkboxSize() {
      var temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize : temCheckboxSize;
    }
  },

  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    border: Boolean,
    size: String
  },

  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this.isGroup) {
          _this.dispatch('IsCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  },
  mounted: function mounted() {
    // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  },


  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', _value);
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_d0387074_render,
  checkboxvue_type_template_id_d0387074_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_api; }
checkbox_component.options.__file = "packages/checkbox/src/checkbox.vue"
/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js


/* istanbul ignore next */
src_checkbox.install = function (Vue) {
  Vue.component(src_checkbox.name, src_checkbox);
};

/* harmony default export */ var packages_checkbox = (src_checkbox);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-tree/src/table-tree.vue?vue&type=template&id=7742f0c6&
var table_treevue_type_template_id_7742f0c6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "isc-table-tree" },
    [
      _vm._l(_vm.root.childNodes, function(child, index) {
        return _c("is-table-tree-item", {
          key: index,
          ref: "children",
          refInFor: true,
          attrs: {
            props: _vm.props,
            showCheckbox: _vm.showCheckbox,
            node: child,
            levelData: _vm.levelData
          }
        })
      }),
      _vm.isEmpty
        ? _c("div", { staticClass: "isc-table-tree__empty" }, [
            _vm._v("\n        暂无数据\n    ")
          ])
        : _vm._e()
    ],
    2
  )
}
var table_treevue_type_template_id_7742f0c6_staticRenderFns = []
table_treevue_type_template_id_7742f0c6_render._withStripped = true


// CONCATENATED MODULE: ./packages/table-tree/src/table-tree.vue?vue&type=template&id=7742f0c6&

// EXTERNAL MODULE: external "babel-runtime/core-js/array/from"
var from_ = __webpack_require__(8);
var from_default = /*#__PURE__*/__webpack_require__.n(from_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-tree/src/table-tree-item.vue?vue&type=template&id=d521442c&
var table_tree_itemvue_type_template_id_d521442c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-table-tree-node" }, [
    _vm.node.childNodes.length
      ? _c("div", { staticClass: "isc-table-tree-node__children" }, [
          _c(
            "div",
            {
              ref: "header",
              staticClass: "isc-table-tree-node__header level",
              class: "level-" + _vm.node.level
            },
            [
              _vm.showCheckbox
                ? _c(
                    "is-checkbox",
                    {
                      attrs: {
                        indeterminate: _vm.node.indeterminate,
                        disabled: !!_vm.node.disabled
                      },
                      on: { change: _vm.handleCheckChange },
                      nativeOn: {
                        click: function($event) {
                          $event.stopPropagation()
                        }
                      },
                      model: {
                        value: _vm.node.checked,
                        callback: function($$v) {
                          _vm.$set(_vm.node, "checked", $$v)
                        },
                        expression: "node.checked"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.node[_vm.props.label]) +
                          "\n            "
                      )
                    ]
                  )
                : _c("span", { staticClass: "isc-table-tree-node__label" }, [
                    _vm._v(_vm._s(_vm.node.label))
                  ])
            ],
            1
          ),
          _c(
            "div",
            {
              staticClass: "isc-table-tree-node__inner",
              class: { "is-inline": !!_vm.node.inline }
            },
            _vm._l(_vm.node.childNodes, function(child, index) {
              return _c("is-table-tree-item", {
                key: index,
                attrs: {
                  props: _vm.props,
                  showCheckbox: _vm.showCheckbox,
                  levelData: _vm.levelData,
                  node: child
                }
              })
            }),
            1
          )
        ])
      : _c(
          "div",
          { ref: "leaf", staticClass: "isc-table-tree-node__content is-leaf" },
          [
            _vm.showCheckbox
              ? _c(
                  "is-checkbox",
                  {
                    attrs: { disabled: !!_vm.node.disabled },
                    on: { change: _vm.handleCheckChange },
                    nativeOn: {
                      click: function($event) {
                        $event.stopPropagation()
                      }
                    },
                    model: {
                      value: _vm.node.checked,
                      callback: function($$v) {
                        _vm.$set(_vm.node, "checked", $$v)
                      },
                      expression: "node.checked"
                    }
                  },
                  [_vm._v(_vm._s(_vm.node.label))]
                )
              : _c("span", { staticClass: "isc-table-tree-node__label" }, [
                  _vm._v(_vm._s(_vm.node.label))
                ])
          ],
          1
        )
  ])
}
var table_tree_itemvue_type_template_id_d521442c_staticRenderFns = []
table_tree_itemvue_type_template_id_d521442c_render._withStripped = true


// CONCATENATED MODULE: ./packages/table-tree/src/table-tree-item.vue?vue&type=template&id=d521442c&

// EXTERNAL MODULE: external "isyscore-ui/lib/checkbox"
var checkbox_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-tree/src/table-tree-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var table_tree_itemvue_type_script_lang_js_ = ({
    name: 'IsTableTreeItem',
    props: {
        node: {
            default: function _default() {
                return {};
            }
        },
        props: {
            default: function _default() {
                return {
                    children: 'children',
                    label: 'label',
                    disabled: 'disabled',
                    inline: 'inline'
                };
            }
        },
        showCheckbox: {
            type: Boolean,
            default: false
        },
        levelData: {
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            tree: null,
            oldChecked: null,
            oldIndeterminate: null
        };
    },

    methods: {
        handleSelectChange: function handleSelectChange(checked, indeterminate) {
            if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
                this.tree.$emit('check-change', this.node.data, checked, indeterminate);
            }
            this.oldChecked = checked;
            this.indeterminate = indeterminate;
        },
        handleCheckChange: function handleCheckChange(value, ev) {
            var _this = this;

            this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
            this.$nextTick(function () {
                var store = _this.tree.store;
                _this.tree.$emit('check', _this.node.data, {
                    checkedNodes: store.getCheckedNodes(),
                    checkedKeys: store.getCheckedKeys(),
                    halfCheckedNodes: store.getHalfCheckedNodes(),
                    halfCheckedKeys: store.getHalfCheckedKeys()
                });
            });
        }
    },
    watch: {
        'node.indeterminate': function nodeIndeterminate(val) {
            this.handleSelectChange(this.node.checked, val);
        },
        'node.checked': function nodeChecked(val) {
            this.handleSelectChange(val, this.node.indeterminate);
        }
    },
    created: function created() {
        var parent = this.$parent;

        if (parent.isTree) {
            this.tree = parent;
        } else {
            this.tree = parent.tree;
        }
        var tree = this.tree;
        if (!tree) {
            console.warn('Can not find node\'s tree.');
        }
    },
    mounted: function mounted() {
        var header = this.$refs.header;
        var level = this.node.level;
        if (header) {
            this.levelData[level] = this.levelData[level] || [];
            this.levelData[level].push(header.clientWidth);
            this.levelData[level].sort(function (a, b) {
                return b - a;
            });
        }
    },

    components: {
        IsTableTreeItem: table_tree_item
    }
});
// CONCATENATED MODULE: ./packages/table-tree/src/table-tree-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_table_tree_itemvue_type_script_lang_js_ = (table_tree_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table-tree/src/table-tree-item.vue





/* normalize component */

var table_tree_item_component = normalizeComponent(
  src_table_tree_itemvue_type_script_lang_js_,
  table_tree_itemvue_type_template_id_d521442c_render,
  table_tree_itemvue_type_template_id_d521442c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_tree_item_api; }
table_tree_item_component.options.__file = "packages/table-tree/src/table-tree-item.vue"
/* harmony default export */ var table_tree_item = (table_tree_item_component.exports);
// EXTERNAL MODULE: external "babel-runtime/core-js/object/keys"
var keys_ = __webpack_require__(3);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/create"
var create_ = __webpack_require__(11);
var create_default = /*#__PURE__*/__webpack_require__.n(create_);

// EXTERNAL MODULE: external "babel-runtime/helpers/createClass"
var createClass_ = __webpack_require__(24);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "babel-runtime/core-js/object/define-property"
var define_property_ = __webpack_require__(9);
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property_);

// CONCATENATED MODULE: ./packages/table-tree/src/model/util.js

var NODE_KEY = '$treeNodeId';

var util_markNodeData = function markNodeData(node, data) {
  if (!data || data[NODE_KEY]) return;
  define_property_default()(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};

var getNodeKey = function getNodeKey(key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};

var findNearestComponent = function findNearestComponent(element, componentName) {
  var target = element;
  while (target && target.tagName !== 'BODY') {
    if (target.__vue__ && target.__vue__.$options.name === componentName) {
      return target.__vue__;
    }
    target = target.parentNode;
  }
  return null;
};
// CONCATENATED MODULE: ./packages/table-tree/src/model/node.js






var getChildState = function getChildState(node) {
    var all = true;
    var none = true;
    var allWithoutDisable = true;
    for (var i = 0, j = node.length; i < j; i++) {
        var n = node[i];
        if (n.checked !== true || n.indeterminate) {
            all = false;
            if (!n.disabled) {
                allWithoutDisable = false;
            }
        }
        if (n.checked !== false || n.indeterminate) {
            none = false;
        }
    }

    return { all: all, none: none, allWithoutDisable: allWithoutDisable, half: !all && !none };
};

var reInitChecked = function reInitChecked(node) {
    if (node.childNodes.length === 0) return;

    var _getChildState = getChildState(node.childNodes),
        all = _getChildState.all,
        none = _getChildState.none,
        half = _getChildState.half;

    if (all) {
        node.checked = true;
        node.indeterminate = false;
    } else if (half) {
        node.checked = false;
        node.indeterminate = true;
    } else if (none) {
        node.checked = false;
        node.indeterminate = false;
    }

    var parent = node.parent;
    if (!parent || parent.level === 0) return;

    if (!node.store.checkStrictly) {
        reInitChecked(parent);
    }
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
    var props = node.store.props;
    var data = node.data || {};
    var config = props[prop];

    if (typeof config === 'function') {
        return config(data, node);
    } else if (typeof config === 'string') {
        return data[config];
    } else if (typeof config === 'undefined') {
        var dataProp = data[prop];
        return dataProp === undefined ? '' : dataProp;
    }
};

var nodeIdSeed = 0;

var node_Node = function () {
    function Node(options) {
        classCallCheck_default()(this, Node);

        this.id = nodeIdSeed++;
        this.text = null;
        this.checked = false;
        this.indeterminate = false;
        this.data = null;
        this.expanded = false;
        this.parent = null;
        this.visible = true;
        this.isCurrent = false;

        for (var name in options) {
            if (options.hasOwnProperty(name)) {
                this[name] = options[name];
            }
        }

        // internal
        this.level = 0;
        this.loaded = false;
        this.childNodes = [];
        this.loading = false;

        if (this.parent) {
            this.level = this.parent.level + 1;
        }

        var store = this.store;
        if (!store) {
            throw new Error('[Node]store is required!');
        }
        store.registerNode(this);

        var props = store.props;
        if (props && typeof props.isLeaf !== 'undefined') {
            var isLeaf = getPropertyFromData(this, 'isLeaf');
            if (typeof isLeaf === 'boolean') {
                this.isLeafByUser = isLeaf;
            }
        }

        if (store.lazy !== true && this.data) {
            this.setData(this.data);

            if (store.defaultExpandAll) {
                this.expanded = true;
            }
        } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
            this.expand();
        }
        if (!Array.isArray(this.data)) {
            util_markNodeData(this, this.data);
        }
        if (!this.data) return;
        var defaultExpandedKeys = store.defaultExpandedKeys;
        var key = store.key;
        if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
            this.expand(null, store.autoExpandParent);
        }

        if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
            store.currentNode = this;
            store.currentNode.isCurrent = true;
        }

        if (store.lazy) {
            store._initDefaultCheckedNode(this);
        }

        this.updateLeafState();
    }

    Node.prototype.setData = function setData(data) {
        if (!Array.isArray(data)) {
            util_markNodeData(this, data);
        }

        this.data = data;
        this.childNodes = [];

        var children = void 0;
        if (this.level === 0 && this.data instanceof Array) {
            children = this.data;
        } else {
            children = getPropertyFromData(this, 'children') || [];
        }

        for (var i = 0, j = children.length; i < j; i++) {
            this.insertChild({ data: children[i] });
        }
    };

    Node.prototype.contains = function contains(target) {
        var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var walk = function walk(parent) {
            var children = parent.childNodes || [];
            var result = false;
            for (var i = 0, j = children.length; i < j; i++) {
                var child = children[i];
                if (child === target || deep && walk(child)) {
                    result = true;
                    break;
                }
            }
            return result;
        };

        return walk(this);
    };

    Node.prototype.remove = function remove() {
        var parent = this.parent;
        if (parent) {
            parent.removeChild(this);
        }
    };

    Node.prototype.insertChild = function insertChild(child, index, batch) {
        if (!child) throw new Error('insertChild error: child is required.');
        if (!(child instanceof Node)) {
            if (!batch) {
                var children = this.getChildren(true);
                if (children.indexOf(child.data) === -1) {
                    if (typeof index === 'undefined' || index < 0) {
                        children.push(child.data);
                    } else {
                        children.splice(index, 0, child.data);
                    }
                }
            }
            merge_default()(child, {
                parent: this,
                store: this.store
            });
            child = new Node(child);
        }

        child.level = this.level + 1;

        if (typeof index === 'undefined' || index < 0) {
            this.childNodes.push(child);
        } else {
            this.childNodes.splice(index, 0, child);
        }

        this.updateLeafState();
    };

    Node.prototype.insertBefore = function insertBefore(child, ref) {
        var index = void 0;
        if (ref) {
            index = this.childNodes.indexOf(ref);
        }
        this.insertChild(child, index);
    };

    Node.prototype.insertAfter = function insertAfter(child, ref) {
        var index = void 0;
        if (ref) {
            index = this.childNodes.indexOf(ref);
            if (index !== -1) index += 1;
        }
        this.insertChild(child, index);
    };

    Node.prototype.removeChild = function removeChild(child) {
        var children = this.getChildren() || [];
        var dataIndex = children.indexOf(child.data);
        if (dataIndex > -1) {
            children.splice(dataIndex, 1);
        }

        var index = this.childNodes.indexOf(child);

        if (index > -1) {
            this.store && this.store.deregisterNode(child);
            child.parent = null;
            this.childNodes.splice(index, 1);
        }

        this.updateLeafState();
    };

    Node.prototype.removeChildByData = function removeChildByData(data) {
        var targetNode = null;

        for (var i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].data === data) {
                targetNode = this.childNodes[i];
                break;
            }
        }

        if (targetNode) {
            this.removeChild(targetNode);
        }
    };

    Node.prototype.expand = function expand(callback, expandParent) {
        var _this = this;

        var done = function done() {
            if (expandParent) {
                var parent = _this.parent;
                while (parent.level > 0) {
                    parent.expanded = true;
                    parent = parent.parent;
                }
            }
            _this.expanded = true;
            if (callback) callback();
        };

        if (this.shouldLoadData()) {
            this.loadData(function (data) {
                if (data instanceof Array) {
                    if (_this.checked) {
                        _this.setChecked(true, true);
                    } else if (!_this.store.checkStrictly) {
                        reInitChecked(_this);
                    }
                    done();
                }
            });
        } else {
            done();
        }
    };

    Node.prototype.doCreateChildren = function doCreateChildren(array) {
        var _this2 = this;

        var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        array.forEach(function (item) {
            _this2.insertChild(merge_default()({ data: item }, defaultProps), undefined, true);
        });
    };

    Node.prototype.collapse = function collapse() {
        this.expanded = false;
    };

    Node.prototype.shouldLoadData = function shouldLoadData() {
        return this.store.lazy === true && this.store.load && !this.loaded;
    };

    Node.prototype.updateLeafState = function updateLeafState() {
        if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
            this.isLeaf = this.isLeafByUser;
            return;
        }
        var childNodes = this.childNodes;
        if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
            this.isLeaf = !childNodes || childNodes.length === 0;
            return;
        }
        this.isLeaf = false;
    };

    Node.prototype.setChecked = function setChecked(value, deep, recursion, passValue) {
        var _this3 = this;

        this.indeterminate = value === 'half';
        this.checked = value === true;

        if (this.store.checkStrictly) return;

        if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
            var _getChildState2 = getChildState(this.childNodes),
                all = _getChildState2.all,
                allWithoutDisable = _getChildState2.allWithoutDisable;

            if (!this.isLeaf && !all && allWithoutDisable) {
                this.checked = false;
                value = false;
            }

            var handleDescendants = function handleDescendants() {
                if (deep) {
                    var childNodes = _this3.childNodes;
                    for (var i = 0, j = childNodes.length; i < j; i++) {
                        var child = childNodes[i];
                        passValue = passValue || value !== false;
                        var isCheck = child.disabled ? child.checked : passValue;
                        child.setChecked(isCheck, deep, true, passValue);
                    }

                    var _getChildState3 = getChildState(childNodes),
                        half = _getChildState3.half,
                        _all = _getChildState3.all;

                    if (!_all) {
                        _this3.checked = _all;
                        _this3.indeterminate = half;
                    }
                }
            };

            if (this.shouldLoadData()) {
                // Only work on lazy load data.
                this.loadData(function () {
                    handleDescendants();
                    reInitChecked(_this3);
                }, {
                    checked: value !== false
                });
                return;
            } else {
                handleDescendants();
            }
        }

        var parent = this.parent;
        if (!parent || parent.level === 0) return;

        if (!recursion) {
            reInitChecked(parent);
        }
    };

    Node.prototype.getChildren = function getChildren() {
        var forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        // this is data
        if (this.level === 0) return this.data;
        var data = this.data;
        if (!data) return null;

        var props = this.store.props;
        var children = 'children';
        if (props) {
            children = props.children || 'children';
        }

        if (data[children] === undefined) {
            data[children] = null;
        }

        if (forceInit && !data[children]) {
            data[children] = [];
        }

        return data[children];
    };

    Node.prototype.updateChildren = function updateChildren() {
        var _this4 = this;

        var newData = this.getChildren() || [];
        var oldData = this.childNodes.map(function (node) {
            return node.data;
        });

        var newDataMap = {};
        var newNodes = [];

        newData.forEach(function (item, index) {
            if (item[NODE_KEY]) {
                newDataMap[item[NODE_KEY]] = { index: index, data: item };
            } else {
                newNodes.push({ index: index, data: item });
            }
        });

        if (!this.store.lazy) {
            oldData.forEach(function (item) {
                if (!newDataMap[item[NODE_KEY]]) _this4.removeChildByData(item);
            });
        }

        newNodes.forEach(function (_ref) {
            var index = _ref.index,
                data = _ref.data;

            _this4.insertChild({ data: data }, index);
        });

        this.updateLeafState();
    };

    Node.prototype.loadData = function loadData(callback) {
        var _this5 = this;

        var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || keys_default()(defaultProps).length)) {
            this.loading = true;

            var resolve = function resolve(children) {
                _this5.loaded = true;
                _this5.loading = false;
                _this5.childNodes = [];

                _this5.doCreateChildren(children, defaultProps);

                _this5.updateLeafState();
                if (callback) {
                    callback.call(_this5, children);
                }
            };

            this.store.load(this, resolve);
        } else {
            if (callback) {
                callback.call(this);
            }
        }
    };

    createClass_default()(Node, [{
        key: 'label',
        get: function get() {
            return getPropertyFromData(this, 'label');
        }
    }, {
        key: 'inline',
        get: function get() {
            return getPropertyFromData(this, 'inline');
        }
    }, {
        key: 'key',
        get: function get() {
            var nodeKey = this.store.key;
            if (this.data) return this.data[nodeKey];
            return null;
        }
    }, {
        key: 'disabled',
        get: function get() {
            return getPropertyFromData(this, 'disabled');
        }
    }, {
        key: 'nextSibling',
        get: function get() {
            var parent = this.parent;
            if (parent) {
                var index = parent.childNodes.indexOf(this);
                if (index > -1) {
                    return parent.childNodes[index + 1];
                }
            }
            return null;
        }
    }, {
        key: 'previousSibling',
        get: function get() {
            var parent = this.parent;
            if (parent) {
                var index = parent.childNodes.indexOf(this);
                if (index > -1) {
                    return index > 0 ? parent.childNodes[index - 1] : null;
                }
            }
            return null;
        }
    }]);

    return Node;
}();

/* harmony default export */ var model_node = (node_Node);
// CONCATENATED MODULE: ./packages/table-tree/src/model/tree-store.js







var tree_store_TreeStore = function () {
    function TreeStore(options) {
        var _this = this;

        classCallCheck_default()(this, TreeStore);

        this.currentNode = null;
        this.currentNodeKey = null;

        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option];
            }
        }

        this.nodesMap = {};

        this.root = new model_node({
            data: this.data,
            store: this
        });
        if (this.lazy && this.load) {
            var loadFn = this.load;
            loadFn(this.root, function (data) {
                _this.root.doCreateChildren(data);
                _this._initDefaultCheckedNodes();
            });
        } else {
            this._initDefaultCheckedNodes();
        }
    }

    TreeStore.prototype.filter = function filter(value) {
        var filterNodeMethod = this.filterNodeMethod;
        var lazy = this.lazy;
        var traverse = function traverse(node) {
            var childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach(function (child) {
                child.visible = filterNodeMethod.call(child, value, child.data, child);

                traverse(child);
            });

            if (!node.visible && childNodes.length) {
                var allHidden = true;

                childNodes.forEach(function (child) {
                    if (child.visible) allHidden = false;
                });

                if (node.root) {
                    node.root.visible = allHidden === false;
                } else {
                    node.visible = allHidden === false;
                }
            }
            if (!value) return;

            if (node.visible && !node.isLeaf && !lazy) node.expand();
        };

        traverse(this);
    };

    TreeStore.prototype.setData = function setData(newVal) {
        var instanceChanged = newVal !== this.root.data;
        if (instanceChanged) {
            this.root.setData(newVal);
            this._initDefaultCheckedNodes();
        } else {
            this.root.updateChildren();
        }
    };

    TreeStore.prototype.getNode = function getNode(data) {
        if (data instanceof model_node) return data;
        var key = (typeof data === 'undefined' ? 'undefined' : typeof_default()(data)) !== 'object' ? data : getNodeKey(this.key, data);
        return this.nodesMap[key] || null;
    };

    TreeStore.prototype.insertBefore = function insertBefore(data, refData) {
        var refNode = this.getNode(refData);
        refNode.parent.insertBefore({ data: data }, refNode);
    };

    TreeStore.prototype.insertAfter = function insertAfter(data, refData) {
        var refNode = this.getNode(refData);
        refNode.parent.insertAfter({ data: data }, refNode);
    };

    TreeStore.prototype.remove = function remove(data) {
        var node = this.getNode(data);

        if (node && node.parent) {
            if (node === this.currentNode) {
                this.currentNode = null;
            }
            node.parent.removeChild(node);
        }
    };

    TreeStore.prototype.append = function append(data, parentData) {
        var parentNode = parentData ? this.getNode(parentData) : this.root;

        if (parentNode) {
            parentNode.insertChild({ data: data });
        }
    };

    TreeStore.prototype._initDefaultCheckedNodes = function _initDefaultCheckedNodes() {
        var _this2 = this;

        var defaultCheckedKeys = this.defaultCheckedKeys || [];

        var nodesMap = this.nodesMap;
        defaultCheckedKeys.forEach(function (checkedKey) {
            var node = nodesMap[checkedKey];
            if (node) {
                node.setChecked(true, !_this2.checkStrictly);
            }
        });
    };

    TreeStore.prototype._initDefaultCheckedNode = function _initDefaultCheckedNode(node) {
        var defaultCheckedKeys = this.defaultCheckedKeys || [];

        if (defaultCheckedKeys.indexOf(node.key) !== -1) {
            node.setChecked(true, !this.checkStrictly);
        }
    };

    TreeStore.prototype.setDefaultCheckedKey = function setDefaultCheckedKey(newVal) {
        if (newVal !== this.defaultCheckedKeys) {
            this.defaultCheckedKeys = newVal;
            this._initDefaultCheckedNodes();
        }
    };

    TreeStore.prototype.registerNode = function registerNode(node) {
        var key = this.key;
        if (!key || !node || !node.data) return;
        var nodeKey = node.key;
        if (nodeKey !== undefined) this.nodesMap[node.key] = node;
    };

    TreeStore.prototype.deregisterNode = function deregisterNode(node) {
        var _this3 = this;

        var key = this.key;
        if (!key || !node || !node.data) return;

        node.childNodes.forEach(function (child) {
            _this3.deregisterNode(child);
        });

        delete this.nodesMap[node.key];
    };

    TreeStore.prototype.getCheckedNodes = function getCheckedNodes() {
        var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var includeHalfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var checkedNodes = [];
        var traverse = function traverse(node) {
            var childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach(function (child) {
                if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
                    checkedNodes.push(child.data);
                }

                traverse(child);
            });
        };

        traverse(this);

        return checkedNodes;
    };

    TreeStore.prototype.getCheckedKeys = function getCheckedKeys() {
        var _this4 = this;

        var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        return this.getCheckedNodes(leafOnly).map(function (data) {
            return (data || {})[_this4.key];
        });
    };

    TreeStore.prototype.getHalfCheckedNodes = function getHalfCheckedNodes() {
        var nodes = [];
        var traverse = function traverse(node) {
            var childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach(function (child) {
                if (child.indeterminate) {
                    nodes.push(child.data);
                }

                traverse(child);
            });
        };

        traverse(this);

        return nodes;
    };

    TreeStore.prototype.getHalfCheckedKeys = function getHalfCheckedKeys() {
        var _this5 = this;

        return this.getHalfCheckedNodes().map(function (data) {
            return (data || {})[_this5.key];
        });
    };

    TreeStore.prototype._getAllNodes = function _getAllNodes() {
        var allNodes = [];
        var nodesMap = this.nodesMap;
        for (var nodeKey in nodesMap) {
            if (nodesMap.hasOwnProperty(nodeKey)) {
                allNodes.push(nodesMap[nodeKey]);
            }
        }

        return allNodes;
    };

    TreeStore.prototype.updateChildren = function updateChildren(key, data) {
        var node = this.nodesMap[key];
        if (!node) return;
        var childNodes = node.childNodes;
        for (var i = childNodes.length - 1; i >= 0; i--) {
            var child = childNodes[i];
            this.remove(child.data);
        }
        for (var _i = 0, j = data.length; _i < j; _i++) {
            var _child = data[_i];
            this.append(_child, node.data);
        }
    };

    TreeStore.prototype._setCheckedKeys = function _setCheckedKeys(key) {
        var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var checkedKeys = arguments[2];

        var allNodes = this._getAllNodes().sort(function (a, b) {
            return b.level - a.level;
        });
        var cache = create_default()(null);
        var keys = keys_default()(checkedKeys);
        allNodes.forEach(function (node) {
            return node.setChecked(false, false);
        });
        for (var i = 0, j = allNodes.length; i < j; i++) {
            var node = allNodes[i];
            var nodeKey = node.data[key].toString();
            var checked = keys.indexOf(nodeKey) > -1;
            if (!checked) {
                if (node.checked && !cache[nodeKey]) {
                    node.setChecked(false, false);
                }
                continue;
            }

            var parent = node.parent;
            while (parent && parent.level > 0) {
                cache[parent.data[key]] = true;
                parent = parent.parent;
            }

            if (node.isLeaf || this.checkStrictly) {
                node.setChecked(true, false);
                continue;
            }
            node.setChecked(true, true);

            if (leafOnly) {
                (function () {
                    node.setChecked(false, false);
                    var traverse = function traverse(node) {
                        var childNodes = node.childNodes;
                        childNodes.forEach(function (child) {
                            if (!child.isLeaf) {
                                child.setChecked(false, false);
                            }
                            traverse(child);
                        });
                    };
                    traverse(node);
                })();
            }
        }
    };

    TreeStore.prototype.setCheckedNodes = function setCheckedNodes(array) {
        var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var key = this.key;
        var checkedKeys = {};
        array.forEach(function (item) {
            checkedKeys[(item || {})[key]] = true;
        });

        this._setCheckedKeys(key, leafOnly, checkedKeys);
    };

    TreeStore.prototype.setCheckedKeys = function setCheckedKeys(keys) {
        var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.defaultCheckedKeys = keys;
        var key = this.key;
        var checkedKeys = {};
        keys.forEach(function (key) {
            checkedKeys[key] = true;
        });

        this._setCheckedKeys(key, leafOnly, checkedKeys);
    };

    TreeStore.prototype.setDefaultExpandedKeys = function setDefaultExpandedKeys(keys) {
        var _this6 = this;

        keys = keys || [];
        this.defaultExpandedKeys = keys;

        keys.forEach(function (key) {
            var node = _this6.getNode(key);
            if (node) node.expand(null, _this6.autoExpandParent);
        });
    };

    TreeStore.prototype.setChecked = function setChecked(data, checked, deep) {
        var node = this.getNode(data);

        if (node) {
            node.setChecked(!!checked, deep);
        }
    };

    TreeStore.prototype.getCurrentNode = function getCurrentNode() {
        return this.currentNode;
    };

    TreeStore.prototype.setCurrentNode = function setCurrentNode(currentNode) {
        var prevCurrentNode = this.currentNode;
        if (prevCurrentNode) {
            prevCurrentNode.isCurrent = false;
        }
        this.currentNode = currentNode;
        this.currentNode.isCurrent = true;
    };

    TreeStore.prototype.setUserCurrentNode = function setUserCurrentNode(node) {
        var key = node[this.key];
        var currNode = this.nodesMap[key];
        this.setCurrentNode(currNode);
    };

    TreeStore.prototype.setCurrentNodeKey = function setCurrentNodeKey(key) {
        if (key === null) {
            this.currentNode = null;
            return;
        }
        var node = this.getNode(key);
        if (node) {
            this.setCurrentNode(node);
        }
    };

    return TreeStore;
}();

/* harmony default export */ var tree_store = (tree_store_TreeStore);
;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-tree/src/table-tree.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var table_treevue_type_script_lang_js_ = ({
    name: 'IsTableTree',
    props: {
        data: {
            type: Array
        },
        nodeKey: String,
        defaultCheckedKeys: Array,
        props: {
            default: function _default() {
                return {
                    children: 'children',
                    label: 'label',
                    disabled: 'disabled',
                    inline: 'inline'
                };
            }
        },
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            root: null,
            levelData: {}
        };
    },

    methods: {
        setChecked: function setChecked(node, value) {
            this.$set(node, 'checked', value);
        },
        find: function find(keys, data) {
            var $this = this;

            function deal(data1) {
                data1.forEach(function (item) {
                    if (keys.indexOf(item[$this.props.key]) > -1) {
                        $this.setChecked(item, true);
                    } else {
                        $this.setChecked(item, false);
                    }
                    if (item.children) {
                        deal(item.children);
                    }
                });
            }

            deal(data);
        },
        getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
            return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
        },
        getCheckedKeys: function getCheckedKeys(leafOnly) {
            return this.store.getCheckedKeys(leafOnly);
        },
        setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
            this.store.setCheckedNodes(nodes, leafOnly);
        },
        setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
            this.store.setCheckedKeys(keys, leafOnly);
        },
        getHalfCheckedNodes: function getHalfCheckedNodes() {
            return this.store.getHalfCheckedNodes();
        },
        getHalfCheckedKeys: function getHalfCheckedKeys() {
            return this.store.getHalfCheckedKeys();
        },
        clear: function clear() {
            var _this = this;

            var deal = function deal(data) {
                _this.$set(data, 'checked', false);
                _this.$set(data, 'indeterminate', false);
                if (data.children) {
                    data.children.forEach(function (item) {
                        deal(item.children, item);
                    });
                }
            };
            this.data.length && this.data.forEach(function (item) {
                deal(item, _this.data);
            });
        }
    },
    computed: {
        list: function list() {
            var _this2 = this;

            var traverse = function traverse(node, parent) {
                _this2.$set(node, 'checked', false);
                _this2.$set(node, 'indeterminate', false);
                _this2.$set(node, 'level', parent ? parent.level + 1 : 1);
                _this2.$set(node, 'parent', parent ? parent : null);
                if (node.children) {
                    node.children.forEach(function (each) {
                        traverse(each, node);
                    });
                }
            };
            return this.data.map(function (item) {
                traverse(item);
                return item;
            });
        },
        isEmpty: function isEmpty() {
            return !this.data.length;
        }
    },
    created: function created() {
        this.isTree = true;
        this.store = new tree_store({
            key: this.nodeKey,
            data: this.data,
            lazy: this.lazy,
            props: this.props,
            load: this.load,
            currentNodeKey: this.currentNodeKey,
            checkStrictly: this.checkStrictly,
            checkDescendants: this.checkDescendants,
            defaultCheckedKeys: this.defaultCheckedKeys,
            defaultExpandedKeys: this.defaultExpandedKeys,
            autoExpandParent: this.autoExpandParent,
            defaultExpandAll: this.defaultExpandAll,
            filterNodeMethod: this.filterNodeMethod
        });
        this.root = this.store.root;
    },
    mounted: function mounted() {
        var _this3 = this;

        var children = this.$el.getElementsByClassName('level');
        from_default()(children).forEach(function (item) {
            var className = item.getAttribute('class').split(' ');
            var level = className[2].split('-')[1];
            if (_this3.levelData[level]) item.style.width = _this3.levelData[level][0] - 40 + 'px';
        });
    },

    watch: {
        data: function data(newVal) {
            this.store.setData(newVal);
        },
        defaultCheckedKeys: function defaultCheckedKeys(newVal) {
            this.store.setDefaultCheckedKey(newVal);
        }
    },
    components: {
        IsTableTreeItem: table_tree_item
    }
});
// CONCATENATED MODULE: ./packages/table-tree/src/table-tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_table_treevue_type_script_lang_js_ = (table_treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table-tree/src/table-tree.vue





/* normalize component */

var table_tree_component = normalizeComponent(
  src_table_treevue_type_script_lang_js_,
  table_treevue_type_template_id_7742f0c6_render,
  table_treevue_type_template_id_7742f0c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_tree_api; }
table_tree_component.options.__file = "packages/table-tree/src/table-tree.vue"
/* harmony default export */ var table_tree = (table_tree_component.exports);
// CONCATENATED MODULE: ./packages/table-tree/index.js


/* istanbul ignore next */
table_tree.install = function (Vue) {
  Vue.component(table_tree.name, table_tree);
};

/* harmony default export */ var packages_table_tree = (table_tree);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawing-board/src/main.vue?vue&type=template&id=cf6a6640&
var mainvue_type_template_id_cf6a6640_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "isc-drawing-board" },
    [
      _c("board-header", {
        on: {
          "color-change": _vm.colorChange,
          "image-change": _vm.imageChange,
          "video-change": _vm.videoChange,
          "font-change": _vm.fontChange,
          "family-change": _vm.familyChange,
          "background-change": _vm.backgroundChange
        }
      }),
      _c("div", {
        ref: "container",
        staticClass: "isc-drawing-board__content",
        on: {
          mousedown: _vm.startCreate,
          mousemove: _vm.mouseMove,
          mouseup: _vm.stopCreate,
          dblclick: _vm.dblclickCreate,
          click: _vm.clickModule
        }
      })
    ],
    1
  )
}
var mainvue_type_template_id_cf6a6640_staticRenderFns = []
mainvue_type_template_id_cf6a6640_render._withStripped = true


// CONCATENATED MODULE: ./packages/drawing-board/src/main.vue?vue&type=template&id=cf6a6640&

// CONCATENATED MODULE: ./src/utils/dom.js

/* istanbul ignore next */



var isServer = external_vue_default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : typeof_default()(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

var isScroll = function isScroll(el, vertical) {
  if (isServer) return;

  var determinedDirection = vertical !== null || vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

var getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;

  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

var isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;

  var elRect = el.getBoundingClientRect();
  var containerRect = void 0;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawing-board/src/header.vue?vue&type=template&id=49e817f4&
var headervue_type_template_id_49e817f4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-drawing-board__header" }, [
    _c("ul", [
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-img" },
        [
          _c(
            "is-upload",
            {
              ref: "image",
              attrs: { accept: { mimeTypes: "image/*" }, multiple: false },
              on: {
                "upload-before-send": _vm.uploadImageBeforeSend,
                "upload-success": _vm.uploadImageSuccess
              }
            },
            [_c("div", { staticClass: "img-path" })]
          )
        ],
        1
      ),
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-video" },
        [
          _c(
            "is-upload",
            {
              ref: "upload",
              attrs: { accept: { mimeTypes: "video/*" }, multiple: false },
              on: {
                "upload-before-send": _vm.uploadVideoBeforeSend,
                "upload-success": _vm.uploadVideoSuccess
              }
            },
            [_c("div", { staticClass: "img-path" })]
          )
        ],
        1
      ),
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-text" },
        [
          _c(
            "is-color-picker",
            {
              attrs: { "is-popper": "", "show-alpha": "" },
              model: {
                value: _vm.header.color,
                callback: function($$v) {
                  _vm.$set(_vm.header, "color", $$v)
                },
                expression: "header.color"
              }
            },
            [
              _c("div", { attrs: { slot: "trigger" }, slot: "trigger" }, [
                _vm._v("A")
              ])
            ]
          )
        ],
        1
      ),
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-font" },
        [
          _c(
            "is-select",
            {
              attrs: { placeholder: "字号" },
              model: {
                value: _vm.header.font,
                callback: function($$v) {
                  _vm.$set(_vm.header, "font", $$v)
                },
                expression: "header.font"
              }
            },
            _vm._l(_vm.fontList, function(item) {
              return _c("is-option", {
                key: item.value,
                attrs: { label: item.label, value: item.value }
              })
            }),
            1
          )
        ],
        1
      ),
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-font" },
        [
          _c(
            "is-select",
            {
              attrs: { placeholder: "字体" },
              model: {
                value: _vm.header.family,
                callback: function($$v) {
                  _vm.$set(_vm.header, "family", $$v)
                },
                expression: "header.family"
              }
            },
            _vm._l(_vm.familyList, function(item) {
              return _c("is-option", {
                key: item.value,
                attrs: { label: item.label, value: item.value }
              })
            }),
            1
          )
        ],
        1
      ),
      _c(
        "li",
        { staticClass: "isc-drawing-board__header-text" },
        [
          _c("is-color-picker", {
            attrs: { "is-popper": "", "show-alpha": "" },
            model: {
              value: _vm.header.background,
              callback: function($$v) {
                _vm.$set(_vm.header, "background", $$v)
              },
              expression: "header.background"
            }
          })
        ],
        1
      )
    ])
  ])
}
var headervue_type_template_id_49e817f4_staticRenderFns = []
headervue_type_template_id_49e817f4_render._withStripped = true


// CONCATENATED MODULE: ./packages/drawing-board/src/header.vue?vue&type=template&id=49e817f4&

// EXTERNAL MODULE: external "babel-runtime/core-js/object/assign"
var assign_ = __webpack_require__(25);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: ./src/utils/upload/jquery-3.3.1.min.js
var jquery_3_3_1_min = __webpack_require__(36);

// EXTERNAL MODULE: ./src/utils/upload/webuploader.js
var webuploader = __webpack_require__(37);

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/mimetypes"
var mimetypes_ = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/upload/src/directive.js


/**
 * Created by caojingjing on 2019/5/22.
 */




var uploadDirective = {};

uploadDirective.install = function (Vue) {
    Vue.directive('upload', {
        bind: function bind(el, binding) {
            var $el = el,
                opts = binding.value;
            if (!WebUploader.Uploader.support()) {
                alert('您的浏览器不支持上传功能！');
                throw new Error('WebUploader does not support the browser you are using.');
            }
            // //调整file控件位置
            var resetInput = function resetInput() {
                setTimeout(function () {
                    var input = $el.getElementsByTagName('input')[0],
                        parent = input.parentNode,
                        keepclick = false;
                    $el.style.position = 'relative';
                    input.style.position = 'absolute';
                    input.style.cursor = 'pointer';
                    input.style.opacity = '0';
                    input.style.left = '0';
                    input.style.top = '0';
                    // 隐藏父级
                    parent.style.display = 'none';
                    $el.appendChild(input);
                    $el.domInserted = true;
                    //避免频繁点击操作
                    // input.click(function (e) {
                    //     if (keepclick) {
                    //         e.stopPropagation();
                    //         return false;
                    //     }
                    //     keepclick = true;
                    //     setTimeout(function () {
                    //         keepclick = false
                    //     }, 1000);
                    // });
                });
            };
            //如果对象已存在，则添加按钮，不再重新初始化
            if (opts.WebUploader) {
                opts.WebUploader.addButton({ id: $el });
                resetInput();
                return;
            }
            //默认配置
            var config = {
                pick: {
                    id: $el,
                    multiple: true,
                    capture: 'camera',
                    configkey: 'default_img'
                },
                // 只允许选择图片文件。
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png'
                },
                server: '192.168.9.9:8081/api/v1/retail/shelves/upload',
                auto: true,
                disableGlobalDnd: true,
                prepareNextFile: true,
                threads: 5,
                fileNumLimit: 5,
                // fileSingleSizeLimit: 10 * 1024 * 1024,
                duplicate: true,
                thumb: {
                    width: 96,
                    height: 96,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 80,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: true,
                    // 为空的话则保留原有图片格式。
                    // 否则强制转换成指定的类型。
                    type: 'image/jpeg'
                },
                compress: {
                    width: 800,
                    height: 800,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 80,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: false,
                    // 是否保留头部meta信息。
                    preserveHeaders: true,
                    // 如果发现压缩后文件大小比原来还大，则使用原来图片
                    // 此属性可能会影响图片自动纠正功能
                    noCompressIfLarger: false,
                    // 单位字节，如果图片大小小于此值，不会采用压缩。
                    compressSize: 200 * 1024
                }
            };
            //先将config中object键值提出来，以免后面的extend将其覆盖，因为该函数无法实现递归覆盖
            opts.options = opts.options || {};
            keys_default()(config).forEach(function (key) {
                if (opts.options[key]) config[key] = assign_default()(config[key], opts.options[key]);
            });
            keys_default()(opts.options).forEach(function (key) {
                if (!config[key]) config[key] = opts.options[key];
            });

            //设置mimeTypes参数
            if (config.accept.extensions && !config.accept.mimeTypes) {
                config.accept.mimeTypes = Object(mimetypes_["getMimeTypes"])(config.accept.extensions);
            }
            //上传插件对象由 this.WebUploader 获得
            opts.WebUploader = WebUploader.create(config);
            //遍历并绑定上传事件
            keys_default()(opts.events).forEach(function (key, value) {
                opts.WebUploader.on(key, function () {
                    var _this = this,
                        _arguments = arguments;
                    opts.events[key].apply(_this, _arguments);
                });
            });
            resetInput();
        },
        update: function update(el, binding) {},
        unbind: function unbind(el, binding) {
            if (el.domInserted) {
                var opts = binding.value;
                opts.WebUploader.destroy();
            }
        }
    });
};

/* harmony default export */ var directive = (uploadDirective);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/src/main.vue?vue&type=template&id=76177bbe&
var mainvue_type_template_id_76177bbe_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "isc-upload" }, [_vm._t("default")], 2)
}
var mainvue_type_template_id_76177bbe_staticRenderFns = []
mainvue_type_template_id_76177bbe_render._withStripped = true


// CONCATENATED MODULE: ./packages/upload/src/main.vue?vue&type=template&id=76177bbe&

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/util"
var util_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/src/main.vue?vue&type=script&lang=js&

//
//
//
//
//
//




/* harmony default export */ var upload_src_mainvue_type_script_lang_js_ = ({
    name: 'IsUpload',
    props: {
        action: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        thumb: {
            type: Object,
            default: function _default() {
                return {
                    width: 96,
                    height: 96
                };
            }
        },
        data: Object,
        multiple: {
            type: Boolean,
            default: false
        },
        auto: {
            type: Boolean,
            default: true
        },
        accept: String
    },
    data: function data() {
        return {
            WebUploader: null
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        var slots = this.$slots.default;
        if (!slots.length) return;
        var $el = slots[0].elm;

        if (!WebUploader.Uploader.support()) {
            alert('您的浏览器不支持上传功能！');
            throw new Error('WebUploader does not support the browser you are using.');
        }
        // //调整file控件位置
        var resetInput = function resetInput() {
            setTimeout(function () {
                var input = $el.getElementsByTagName('input')[0],
                    parent = input.parentNode,
                    keepclick = false;
                $el.style.position = 'relative';
                input.style.position = 'absolute';
                input.style.cursor = 'pointer';
                input.style.opacity = '0';
                input.style.left = '0';
                input.style.top = '0';

                // 隐藏父级
                parent.style.display = 'none';
                $el.appendChild(input);
                $el.domInserted = true;
                //避免频繁点击操作
                // input.click(function (e) {
                //     if (keepclick) {
                //         e.stopPropagation();
                //         return false;
                //     }
                //     keepclick = true;
                //     setTimeout(function () {
                //         keepclick = false
                //     }, 1000);
                // });
            });
        };
        //如果对象已存在，则添加按钮，不再重新初始化
        if (this.WebUploader) {
            opts.WebUploader.addButton({ id: $el });
            resetInput();
            return;
        }
        //默认配置
        var config = {
            pick: {
                id: $el,
                multiple: this.multiple,
                capture: 'camera',
                configkey: 'default_img'
            },
            // 只允许选择图片文件。
            accept: this.accept,
            server: this.action || 'http://192.168.9.9:8081/api/v1/retail/shelves/upload',
            auto: this.auto,
            disableGlobalDnd: true,
            prepareNextFile: true,
            threads: 5,
            fileNumLimit: this.fileNumLimit,
            // fileSingleSizeLimit: 10 * 1024 * 1024,
            duplicate: true,
            thumb: {
                width: this.thumb.width,
                height: this.thumb.height,
                // 图片质量，只有type为`image/jpeg`的时候才有效。
                quality: 80,
                // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                allowMagnify: false,
                // 是否允许裁剪。
                crop: true,
                // 为空的话则保留原有图片格式。
                // 否则强制转换成指定的类型。
                type: 'image/jpeg'
            },
            compress: {
                width: 800,
                height: 800,
                // 图片质量，只有type为`image/jpeg`的时候才有效。
                quality: 80,
                // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                allowMagnify: false,
                // 是否允许裁剪。
                crop: false,
                // 是否保留头部meta信息。
                preserveHeaders: true,
                // 如果发现压缩后文件大小比原来还大，则使用原来图片
                // 此属性可能会影响图片自动纠正功能
                noCompressIfLarger: false,
                // 单位字节，如果图片大小小于此值，不会采用压缩。
                compressSize: 200 * 1024
            }
        };

        //设置mimeTypes参数
        if (config.accept.extensions && !config.accept.mimeTypes) {
            config.accept.mimeTypes = Object(mimetypes_["getMimeTypes"])(config.accept.extensions);
        }
        //            上传插件对象由 this.WebUploader 获得
        this.WebUploader = WebUploader.create(config);
        var events = this.$listeners;
        //遍历并绑定上传事件
        keys_default()(events).forEach(function (key, value) {
            _this2.WebUploader.on(Object(util_["camelCase"])(key), function () {
                var _this = this,
                    _arguments = arguments;
                events[key].apply(_this, _arguments);
            });
        });
        resetInput();
    }
});
// CONCATENATED MODULE: ./packages/upload/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_upload_src_mainvue_type_script_lang_js_ = (upload_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/upload/src/main.vue





/* normalize component */

var upload_src_main_component = normalizeComponent(
  packages_upload_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_76177bbe_render,
  mainvue_type_template_id_76177bbe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var upload_src_main_api; }
upload_src_main_component.options.__file = "packages/upload/src/main.vue"
/* harmony default export */ var upload_src_main = (upload_src_main_component.exports);
// CONCATENATED MODULE: ./packages/upload/index.js



/* harmony default export */ var upload = ({
    install: function install(Vue) {
        Vue.use(directive);
        Vue.component(upload_src_main.name, upload_src_main);
    },

    IsUpload: upload_src_main,
    directive: directive
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawing-board/src/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var headervue_type_script_lang_js_ = ({
    name: 'IsDrawingBoard',
    methods: {
        uploadImageBeforeSend: function uploadImageBeforeSend(object, data, header) {
            data.type = 0;
        },
        uploadImageSuccess: function uploadImageSuccess(file, response) {
            if (response.code === 0) {
                this.$emit('image-change', response.data.url);
            } else {
                alert('上传失败');
            }
        },
        uploadVideoBeforeSend: function uploadVideoBeforeSend(object, data, header) {
            data.type = 0;
        },
        uploadVideoSuccess: function uploadVideoSuccess(file, response) {
            if (response.code === 0) {
                this.$emit('video-change', response.data.url);
            } else {
                alert('上传失败');
            }
        }
    },
    data: function data() {
        return {
            fontList: [],
            familyList: [{
                value: 'Lantinghei SC',
                label: '兰亭黑-简'
            }, {
                value: 'Hanzipen SC',
                label: '翩翩体-简'
            }, {
                value: 'Hannotate SC',
                label: '手札体-简'
            }, {
                value: 'Weibei SC',
                label: '魏碑-简'
            }, {
                value: 'Xingkai SC',
                label: '行楷-简'
            }, {
                value: 'Yuanti SC',
                label: '圆体-简'
            }, {
                value: 'SimSun',
                label: '宋体'
            }, {
                value: 'SimHei',
                label: '黑体'
            }, {
                value: 'Microsoft Yahei',
                label: '微软雅黑'
            }, {
                value: 'Microsoft JhengHei',
                label: '微软正黑体'
            }, {
                value: 'KaiTi',
                label: '楷体'
            }, {
                value: 'NSimSun',
                label: '新宋体'
            }, {
                value: 'FangSong',
                label: '仿宋'
            }, {
                value: 'STHeiti',
                label: '华文黑体'
            }, {
                value: 'STKaiti',
                label: '华文楷体'
            }, {
                value: 'STSong',
                label: '华文宋体'
            }],
            header: {
                color: "#000000",
                font: '',
                family: '',
                background: '#000000'
            }
        };
    },
    created: function created() {
        var fontList = [7, 20];
        for (var i = fontList[0]; i < fontList[1]; i++) {
            this.fontList.push({
                value: i * 2,
                label: i * 2 + ''
            });
        }
        this.$emit('color-change', this.header.color);
    },

    watch: {
        'header.color': function headerColor(val) {
            this.$emit('color-change', val);
        },
        'header.font': function headerFont(val) {
            this.$emit('font-change', val);
        },
        'header.family': function headerFamily(val) {
            this.$emit('family-change', val);
        },
        'header.background': function headerBackground(val) {
            this.$emit('background-change', val);
        }
    }
});
// CONCATENATED MODULE: ./packages/drawing-board/src/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/drawing-board/src/header.vue





/* normalize component */

var header_component = normalizeComponent(
  src_headervue_type_script_lang_js_,
  headervue_type_template_id_49e817f4_render,
  headervue_type_template_id_49e817f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var header_api; }
header_component.options.__file = "packages/drawing-board/src/header.vue"
/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawing-board/src/main.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var drawing_board_src_mainvue_type_script_lang_js_ = ({
    name: 'IsDrawingBoard',
    components: {
        BoardHeader: header
    },
    props: {
        showLine: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        // 功能函数
        isBlock: function isBlock(target) {
            return target.className && target.className.includes('isc-drawing-board__block');
        },
        isDot: function isDot(target) {
            return target.className.includes('dot');
        },
        isDotline: function isDotline(target) {
            return target.className.includes('dot-line');
        },
        isContainer: function isContainer(target) {
            return target.className.includes('isc-drawing-board__content');
        },
        isActive: function isActive(target) {
            return hasClass(target, 'is-active');
        },
        setActive: function setActive(target, active) {
            active ? addClass(target, 'is-active') : removeClass(target, 'is-active');
        },
        findBlockPath: function findBlockPath(path) {
            var _this = this;

            return from_default()(path).filter(function (item) {
                return _this.isBlock(item);
            });
        },

        // 画板操作
        createDot: function createDot(el) {
            // 创建8个点
            var frag = document.createDocumentFragment();
            var flag = [1, 2, 3, 4, 5, 6, 7, 8];
            var flag1 = [1, 2, 3, 4];
            flag.forEach(function (item) {
                var dot = document.createElement('div');
                dot.setAttribute("class", 'dot dot' + item);
                dot.setAttribute("id", 'dot-' + item);
                // 上左
                frag.appendChild(dot);
            });
            flag1.forEach(function (item) {
                var dotline = document.createElement('div');
                dotline.setAttribute("class", 'dot-line dot-line' + item);
                // 上左
                frag.appendChild(dotline);
            });
            // 基准线
            this.showLine && flag1.forEach(function (item) {
                var dotline = document.createElement('div');
                dotline.setAttribute("class", 'base-line base-line' + item);
                // 上左
                frag.appendChild(dotline);
            });
            el.appendChild(frag);
        },
        createTextArea: function createTextArea(el) {
            var _this2 = this;

            var text = document.createElement('textarea');
            text.style.color = '#000';
            el.appendChild(text);
            text.focus();
            text.addEventListener('focus', function (val) {
                _this2.isFocus = true;
                if (!_this2.isActive(el)) text.blur();
            });
            text.addEventListener('blur', function (val) {
                _this2.isFocus = false;
            });
        },
        updateBaseLine: function updateBaseLine(el) {
            var line1 = el.getElementsByClassName('base-line1')[0];
            var line2 = el.getElementsByClassName('base-line2')[0];
            var line3 = el.getElementsByClassName('base-line3')[0];
            var line4 = el.getElementsByClassName('base-line4')[0];
            var left = el.style.left;
            var right = this.container.width - Number(el.style.width.split('px')[0]) - Number(el.style.left.split('px')[0]);
            var top = el.style.top;
            var bottom = this.container.height - Number(el.style.height.split('px')[0]) - Number(el.style.top.split('px')[0]);
            line1.style.left = '-' + left;
            line1.style.right = '-' + right + 'px';
            line2.style.top = '-' + top;
            line2.style.bottom = '-' + bottom + 'px';
            line3.style.left = '-' + left;
            line3.style.right = '-' + right + 'px';
            line4.style.top = '-' + top;
            line4.style.bottom = '-' + bottom + 'px';
        },

        // 点击事件
        clickModule: function clickModule(val) {
            var _this3 = this;

            if (this.isMouseOver) {
                this.isMouseOver = false;
                return;
            }
            var target = val.target;
            // 点击block自己
            if (this.isBlock(target) && !this.freeBlock) {
                if (this.isActive(target)) return;
                // 清除之前的选中节点
                var parent = target.parentNode;
                var biling = parent.childNodes;
                biling.forEach(function (data) {
                    return _this3.setActive(data, false);
                });
                this.setActive(target, true);
                this.currentClick = target;
            } else {
                var block = this.findBlockPath(val.path)[0];
                if (block) {
                    // 清除之前的选中节点
                    var _parent = block.parentNode;
                    var _biling = _parent.childNodes;
                    _biling.forEach(function (data) {
                        return _this3.setActive(data, false);
                    });
                    this.setActive(block, true);
                    this.currentClick = block;
                } else {
                    var blocks = this.$el.getElementsByClassName('isc-drawing-board__block');
                    from_default()(blocks).forEach(function (block) {
                        _this3.setActive(block, false);
                    });
                    this.currentClick = null;
                }
            }
            this.freeBlock = false;
        },

        // mouse事件
        startCreate: function startCreate(val) {
            var target = val.target;
            // 画图
            if (this.isContainer(target)) {
                this.startPoint = {
                    x: val.x,
                    y: val.y,
                    offsetY: val.offsetY,
                    offsetX: val.offsetX
                };
            }
            // 放大缩小
            else if (this.isDot(target)) {
                    var parent = target.parentNode;
                    //                    this.currentBlock.id = parent.id;
                    // 记录点的位置
                    this.startPoint = {
                        x: val.x,
                        y: val.y,
                        dot: target,
                        parent: parent,
                        width: Number(parent.style.width.split('px')[0]),
                        height: Number(parent.style.height.split('px')[0]),
                        offsetY: Number(parent.style.top.split('px')[0]),
                        offsetX: Number(parent.style.left.split('px')[0])
                    };
                }
                // 拖拽
                else {
                        var nodeName = val.target.nodeName;
                        if (nodeName === 'TEXTAREA') return;
                        var block = this.findBlockPath(val.path)[0];
                        if (!block || !this.isActive(block)) return;
                        // 记录鼠标初始位置和元素初始位置,top/leftz-index
                        this.zIndex++;
                        this.startPoint = {
                            x: val.x,
                            y: val.y,
                            target: block,
                            offsetY: block.offsetTop,
                            offsetX: block.offsetLeft
                        };
                    }
        },
        mouseMove: function mouseMove(val) {
            if (!this.startPoint) return;
            this.isMouseOver = true;
            var width = val.x - this.startPoint.x;
            var height = val.y - this.startPoint.y;
            var absWidth = Math.abs(width),
                absHeight = Math.abs(height);
            // 拖拽
            if (this.startPoint.target) {
                var top = this.startPoint.offsetY + height;
                var left = this.startPoint.offsetX + width;

                var blockWidth = this.startPoint.target.style.width.split('px')[0];
                var blockHeight = this.startPoint.target.style.height.split('px')[0];
                this.startPoint.target.style.zIndex = this.zIndex;
                if (top >= 0 && top <= this.container.height - blockHeight) {
                    this.startPoint.target.style.top = top + 'px';
                }
                if (left >= 0 && left <= this.container.width - blockWidth) {
                    this.startPoint.target.style.left = left + 'px';
                }
                this.showLine && this.updateBaseLine(this.startPoint.target);
            }
            // 放大缩小
            else if (this.startPoint.dot) {
                    var block = this.startPoint.parent;
                    var preLeft = this.startPoint.offsetX; // 元素最初的top/left
                    var preTop = this.startPoint.offsetY;
                    var toTop = preTop + height,
                        toLeft = preLeft + width;
                    var rate = this.startPoint.width / this.startPoint.height; // 记住宽高比
                    // 向左上方放大
                    if (this.startPoint.dot.id === 'dot-1') {
                        var _blockWidth = this.startPoint.width - width;
                        var _blockHeight = _blockWidth / rate;
                        var _top = preTop + width / rate;
                        if (_blockHeight <= 4 || _blockWidth <= 4) return;
                        if (_top >= 0 && toLeft >= 0) {
                            block.style.top = _top + 'px';
                            block.style.height = _blockHeight + 'px';
                            block.style.left = toLeft + 'px';
                            block.style.width = _blockWidth + 'px';
                        }
                    }
                    // 向右上方放大
                    else if (this.startPoint.dot.id === 'dot-2') {
                            var _blockWidth2 = this.startPoint.width + _width;
                            var _blockHeight2 = this.startPoint.height - height;
                            var _width = _blockHeight2 * rate;
                            if (_blockHeight2 <= 4 || _width <= 4) return;
                            if (toTop >= 0 && preLeft <= this.container.width - _width) {
                                block.style.top = toTop + 'px';
                                block.style.height = _blockHeight2 + 'px';
                                block.style.width = _width + 'px';
                            }
                        }
                        // 向右下方放大
                        else if (this.startPoint.dot.id === 'dot-3') {
                                var _blockWidth3 = this.startPoint.width + width;
                                var _blockHeight3 = this.startPoint.height + width / rate;
                                if (_blockHeight3 <= 4 || _blockWidth3 <= 4) return;
                                if (preLeft <= this.container.width - _blockWidth3 && preTop <= this.container.height - _blockHeight3) {
                                    block.style.width = _blockWidth3 + 'px';
                                    block.style.height = _blockHeight3 + 'px';
                                }
                            }
                            // 向左下方放大
                            else if (this.startPoint.dot.id === 'dot-4') {
                                    var _blockWidth4 = this.startPoint.width - width;
                                    var _blockHeight4 = this.startPoint.height - width / rate;
                                    if (_blockHeight4 <= 4 || _blockWidth4 <= 4) return;
                                    if (toLeft >= 0 && toLeft <= this.container.width - _blockWidth4 && preTop <= this.container.height - _blockHeight4) {
                                        block.style.left = toLeft + 'px';
                                        block.style.width = _blockWidth4 + 'px';
                                        block.style.height = _blockHeight4 + 'px';
                                    }
                                }
                                // 向上扩展高
                                else if (this.startPoint.dot.id === 'dot-5') {
                                        var _blockHeight5 = this.startPoint.height - height;
                                        if (_blockHeight5 <= 4) return;
                                        if (toTop >= 0) {
                                            block.style.top = toTop + 'px';
                                            block.style.height = _blockHeight5 + 'px';
                                        }
                                    }
                                    // 向右扩展宽
                                    else if (this.startPoint.dot.id === 'dot-6') {
                                            var _blockWidth5 = this.startPoint.width + width;
                                            if (_blockWidth5 <= 4) return;
                                            if (preLeft <= this.container.width - _blockWidth5) {
                                                block.style.width = _blockWidth5 + 'px';
                                            }
                                        }
                                        // 向下扩展高
                                        else if (this.startPoint.dot.id === 'dot-7') {
                                                var _blockHeight6 = this.startPoint.height + height;
                                                if (_blockHeight6 <= 4) return;
                                                if (preTop <= this.container.height - _blockHeight6) {
                                                    block.style.height = _blockHeight6 + 'px';
                                                }
                                            }
                                            // 向左扩展宽
                                            else if (this.startPoint.dot.id === 'dot-8') {
                                                    var _blockWidth6 = this.startPoint.width - width;
                                                    if (_blockWidth6 <= 4) return;
                                                    if (toLeft >= 0) {
                                                        block.style.left = toLeft + 'px';
                                                        block.style.width = _blockWidth6 + 'px';
                                                    }
                                                }
                    this.showLine && this.updateBaseLine(this.startPoint.parent);
                }
                // 起点在block上,但是此时block并没有选中
                //                else if (this.startPoint.free) {
                //                    if (absWidth < 4 && absHeight < 4) return;
                //                    this.freeBlock = true;
                //                    console.warn('over', this.freeBlock)
                //                }
                // 绘图
                else {
                        if (absWidth < 5 && absHeight < 5) return;
                        if (this.hasCreatedDiv) {
                            var _preLeft = this.startPoint.offsetX;
                            var _preTop = this.startPoint.offsetY;
                            var _block = this.currentBlock;
                            var _top2 = void 0,
                                _left = void 0;

                            // 向右上方画框, 默认是向右下方画框
                            if (width > 0 && height < 0) {
                                _block.style.top = _preTop - absHeight + 'px';
                            }
                            // 向左下方画框
                            else if (width < 0 && height > 0) {
                                    _left = _preLeft - absWidth;
                                    _block.style.left = _preLeft - absWidth + 'px';
                                }
                                // 向左上方画框
                                else if (width < 0 && height < 0) {
                                        _top2 = _preTop - absHeight;
                                        _left = _preLeft - absWidth;
                                        _block.style.left = _preLeft - absWidth + 'px';
                                        _block.style.top = _preTop - absHeight + 'px';
                                    }
                            _block.style.width = absWidth + 'px';
                            _block.style.height = absHeight + 'px';
                        } else {
                            var _block2 = document.createElement('div');
                            this.currentBlock = _block2;
                            var container = this.$refs.container;
                            this.createDot(_block2);
                            _block2.setAttribute("class", 'isc-drawing-board__block');
                            _block2.style.top = this.startPoint.offsetY + 'px';
                            _block2.style.left = this.startPoint.offsetX + 'px';
                            container.appendChild(_block2);
                            this.hasCreatedDiv = true;
                        }
                    }
        },
        stopCreate: function stopCreate(val) {
            if (!this.startPoint) return;
            var width = val.x - this.startPoint.x;
            var height = val.y - this.startPoint.y;
            // 判断是否要响应的拖动操作:画图结束、拖动结束、放大缩小结束
            if (!this.freeBlock && this.isMouseOver) {
                if (!this.startPoint.target && !this.startPoint.dot) {
                    var block = this.startPoint.parent;
                    // 画图结束
                    if (block && !block.childNodes.length) {
                        this.createDot(block);
                        this.currentEdit = block;
                    }
                }
                this.currentModule = null;
                this.hasCreatedDiv = false;
                this.domId++;
            }
            this.startPoint = undefined;
        },

        // 双击事件
        dblclickCreate: function dblclickCreate(val) {
            var target = val.target;
            if (!this.isBlock(target)) return;
            if (!this.isActive(target)) return;
            this.createTextArea(target);
        },
        getContent: function getContent() {
            // 转换px为百分比
            var outerContent = this.changeStyle(this.container.el);
            // 过滤线条、点元素
            var filterContent = this.filterContent(outerContent);
            return filterContent;
        },
        clearContent: function clearContent() {
            this.currentModule = null;
            this.$refs.container.innerHTML = '';
        },

        // 内容填充
        colorChange: function colorChange(val) {
            if (!this.currentClick) return;
            var text = this.currentClick.getElementsByTagName('textarea')[0];
            if (!text) return;
            text.style.color = val;
        },
        imageChange: function imageChange(val) {
            if (!this.currentClick) return;
            this.currentClick.style.backgroundImage = 'url(' + val + ')';
        },
        videoChange: function videoChange(val) {
            if (!this.currentClick) return;
            var video = this.currentClick.getElementsByTagName('textarea')[0];
            if (!video) {
                video = document.createElement('video');
                video.style.width = '100%';
                this.currentClick.appendChild(video);
            }
            video.setAttribute('src', val);
        },
        fontChange: function fontChange(val) {
            if (!this.currentClick) return;
            var text = this.currentClick.getElementsByTagName('textarea')[0];
            if (!text) return;
            var width = Number(this.currentClick.style.width.split('px')[0]);
            //                let value = 'calc(100% * ' + val / width + ')';
            text.style.fontSize = val + 'px';
        },
        familyChange: function familyChange(val) {
            if (!this.currentClick) return;
            var text = this.currentClick.getElementsByTagName('textarea')[0];
            if (!text) return;
            text.style.fontFamily = val;
        },
        backgroundChange: function backgroundChange(val) {
            if (!this.currentClick) return;
            this.currentClick.style.backgroundColor = val;
            this.currentClick.style.backgroundRepeat = 'no-repeat';
            this.currentClick.style.backgroundSize = '100% auto';
        },

        // 输出操作
        filterContent: function filterContent(val) {
            var dot = /\<div class="dot.*?\<\/div\>/g;
            var line = /\<div class="base-line.*?\<\/div\>/g;
            return val.replace(dot, '').replace(line, '').replace('is-active', '');
        },
        changeStyle: function changeStyle(el) {
            var _this4 = this;

            //                let style = /style=".*?"/g;
            //                var strReg = val.match(style);
            var parent = el.cloneNode(true);
            var children = parent.getElementsByClassName('isc-drawing-board__block');

            from_default()(children).forEach(function (item) {
                var width = Number(item.style.width.split('px')[0]);
                var height = Number(item.style.height.split('px')[0]);
                var left = Number(item.style.left.split('px')[0]);
                var top = Number(item.style.top.split('px')[0]);

                item.style.width = width / _this4.container.width * 100 + '%';
                item.style.height = height / _this4.container.height * 100 + '%';
                item.style.left = left / _this4.container.width * 100 + '%';
                item.style.top = top / _this4.container.height * 100 + '%';
                // 替换textarea标签
                _this4.changeTextArea(item);
            });
            return parent.outerHTML;
        },
        changeTextArea: function changeTextArea(el) {
            var text = el.getElementsByTagName('textarea')[0];
            if (text) {
                var value = text.value;
                var span = document.createElement('span');
                span.innerText = value;
                span.style.color = text.style.color;
                span.style.fontSize = text.style.fontSize;
                span.style.fontFamily = text.style.fontFamily;
                el.appendChild(span);
                el.removeChild(text);
            }
        }
    },
    data: function data() {
        return {
            hasCreatedDiv: false,
            domId: 0,
            zIndex: 0,
            isMouseOver: false, // 标志是否有拖动操作
            currentEdit: null, // 当前正在操作的block
            currentBlock: {},
            currentModule: null, // 选中的素材块,等待画图.
            currentClick: null // 激活状态下的block,删除用
        };
    },
    mounted: function mounted() {
        var _this5 = this;

        this.container = {
            el: this.$refs.container,
            width: this.$refs.container.clientWidth,
            height: this.$refs.container.clientHeight
        };
        // 全局绑定mouse事件,监听mouseup事件是否在画框外面进行
        document.addEventListener('mouseup', function (val) {
            var target = val.target;
            if (!_this5.isContainer(target) && !_this5.isBlock(target) && !_this5.isDot(target)) {
                _this5.stopCreate(val);
            }
        }, true);
        //删除画框
        document.addEventListener('keydown', function (e) {
            var keyNum = window.event ? e.keyCode : e.which;
            if (_this5.isFocus) return;
            if (keyNum == 46 || keyNum == 8) {
                if (_this5.currentClick !== null && _this5.container.el) {
                    _this5.container.el.removeChild(_this5.currentClick);
                    _this5.currentClick = null;
                }
            }
        }, true);
    },
    beforeDestroy: function beforeDestroy() {
        var _this6 = this;

        document.addEventListener('mouseup', function (val) {
            var target = val.target;
            if (!_this6.isContainer(target) && !_this6.isBlock(target) && !_this6.isDot(target)) {
                _this6.stopCreate(val);
            }
        }, true);
        //删除画框
        document.removeEventListener('keydown', function (e) {
            var keyNum = window.event ? e.keyCode : e.which;
            if (_this6.isFocus) return;
            if (keyNum == 46 || keyNum == 8) {
                if (_this6.currentClick !== null && _this6.$refs.container) {
                    _this6.$refs.container.removeChild(_this6.currentClick);
                    _this6.currentClick = null;
                }
            }
        }, true);
    }
});
// CONCATENATED MODULE: ./packages/drawing-board/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_drawing_board_src_mainvue_type_script_lang_js_ = (drawing_board_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/drawing-board/src/main.vue





/* normalize component */

var drawing_board_src_main_component = normalizeComponent(
  packages_drawing_board_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_cf6a6640_render,
  mainvue_type_template_id_cf6a6640_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var drawing_board_src_main_api; }
drawing_board_src_main_component.options.__file = "packages/drawing-board/src/main.vue"
/* harmony default export */ var drawing_board_src_main = (drawing_board_src_main_component.exports);
// CONCATENATED MODULE: ./packages/drawing-board/index.js


/* istanbul ignore next */
drawing_board_src_main.install = function (Vue) {
  Vue.component(drawing_board_src_main.name, drawing_board_src_main);
};

/* harmony default export */ var drawing_board = (drawing_board_src_main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
var loadingvue_type_template_id_eee0a7ac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "isc-loading-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "isc-loading-mask",
          class: [_vm.customClass, { "is-fullscreen": _vm.fullscreen }],
          style: { backgroundColor: _vm.background || "" }
        },
        [
          _c("div", { staticClass: "isc-loading-spinner" }, [
            !_vm.spinner
              ? _c(
                  "svg",
                  {
                    staticClass: "circular",
                    attrs: { viewBox: "25 25 50 50" }
                  },
                  [
                    _c("circle", {
                      staticClass: "path",
                      attrs: { cx: "50", cy: "50", r: "20", fill: "none" }
                    })
                  ]
                )
              : _c("i", { class: _vm.spinner }),
            _vm.text
              ? _c("p", { staticClass: "isc-loading-text" }, [
                  _vm._v(_vm._s(_vm.text))
                ])
              : _vm._e()
          ])
        ]
      )
    ]
  )
}
var loadingvue_type_template_id_eee0a7ac_staticRenderFns = []
loadingvue_type_template_id_eee0a7ac_render._withStripped = true


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },


  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText: function setText(text) {
      this.text = text;
    }
  }
});
// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_eee0a7ac_render,
  loadingvue_type_template_id_eee0a7ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var loading_api; }
loading_component.options.__file = "packages/loading/src/loading.vue"
/* harmony default export */ var loading = (loading_component.exports);
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/dom"
var dom_ = __webpack_require__(1);

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/popup"
var popup_ = __webpack_require__(15);

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/after-leave"
var after_leave_ = __webpack_require__(16);
var after_leave_default = /*#__PURE__*/__webpack_require__.n(after_leave_);

// CONCATENATED MODULE: ./packages/loading/src/directive.js






var Mask = external_vue_default.a.extend(loading);

var loadingDirective = {};
loadingDirective.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
          el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
          el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();

          Object(dom_["addClass"])(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          Object(dom_["removeClass"])(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');

            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, 'margin-' + property), 10) + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = Object(dom_["getStyle"])(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      after_leave_default()(el.instance, function (_) {
        el.domVisible = false;
        var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        Object(dom_["removeClass"])(target, 'isc-loading-parent--relative');
        Object(dom_["removeClass"])(target, 'isc-loading-parent--hidden');
        el.instance.hiding = false;
      }, 300, true);
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };
  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
      keys_default()(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        Object(dom_["addClass"])(parent, 'isc-loading-parent--relative');
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        Object(dom_["addClass"])(parent, 'isc-loading-parent--hidden');
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(function () {
        if (el.instance.hiding) {
          el.instance.$emit('after-leave');
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var textExr = el.getAttribute('element-loading-text');
      var spinnerExr = el.getAttribute('element-loading-spinner');
      var backgroundExr = el.getAttribute('element-loading-background');
      var customClassExr = el.getAttribute('element-loading-custom-class');
      var vm = vnode.context;
      var mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: vm && vm[textExr] || textExr,
          spinner: vm && vm[spinnerExr] || spinnerExr,
          background: vm && vm[backgroundExr] || backgroundExr,
          customClass: vm && vm[customClassExr] || customClassExr,
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update: function update(el, binding) {
      el.instance.setText(el.getAttribute('element-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
      el.instance && el.instance.$destroy();
    }
  });
};

/* harmony default export */ var src_directive = (loadingDirective);
// CONCATENATED MODULE: ./packages/loading/src/index.js








var LoadingConstructor = external_vue_default.a.extend(loading);

var defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

var fullscreenLoading = void 0;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';

LoadingConstructor.prototype.close = function () {
  var _this = this;

  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  after_leave_default()(this, function (_) {
    var target = _this.fullscreen || _this.body ? document.body : _this.target;
    Object(dom_["removeClass"])(target, 'isc-loading-parent--relative');
    Object(dom_["removeClass"])(target, 'isc-loading-parent--hidden');
    if (_this.$el && _this.$el.parentNode) {
      _this.$el.parentNode.removeChild(_this.$el);
    }
    _this.$destroy();
  }, 300);
  this.visible = false;
};

var src_addStyle = function addStyle(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    instance.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
    maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
  } else if (options.body) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    ['top', 'left'].forEach(function (property) {
      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
    });
    ['height', 'width'].forEach(function (property) {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    instance.originalPosition = Object(dom_["getStyle"])(parent, 'position');
  }
  keys_default()(maskStyle).forEach(function (property) {
    instance.$el.style[property] = maskStyle[property];
  });
};

var src_Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (external_vue_default.a.prototype.$isServer) return;
  options = merge_default()({}, defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  var parent = options.body ? document.body : options.target;
  var instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  src_addStyle(options, parent, instance);
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    Object(dom_["addClass"])(parent, 'isc-loading-parent--relative');
  }
  if (options.fullscreen && options.lock) {
    Object(dom_["addClass"])(parent, 'isc-loading-parent--hidden');
  }
  parent.appendChild(instance.$el);
  external_vue_default.a.nextTick(function () {
    instance.visible = true;
  });
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};

/* harmony default export */ var src = (src_Loading);
// CONCATENATED MODULE: ./packages/loading/index.js



/* harmony default export */ var packages_loading = ({
  install: function install(Vue) {
    Vue.use(src_directive);
    Vue.prototype.$loading = src;
  },

  directive: src_directive,
  service: src
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/src/progress.vue?vue&type=template&id=229ee406&
var progressvue_type_template_id_229ee406_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-progress",
      class: [
        "isc-progress--" + _vm.type,
        _vm.status ? "is-" + _vm.status : "",
        {
          "isc-progress--without-text": !_vm.showText,
          "isc-progress--text-inside": _vm.textInside
        }
      ],
      attrs: {
        role: "progressbar",
        "aria-valuenow": _vm.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    },
    [
      _vm.type === "line"
        ? _c("div", { staticClass: "isc-progress-bar" }, [
            _c(
              "div",
              {
                staticClass: "isc-progress-bar__outer",
                style: { height: _vm.strokeWidth + "px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "isc-progress-bar__inner",
                    style: _vm.barStyle
                  },
                  [
                    _vm.showText && _vm.textInside
                      ? _c(
                          "div",
                          { staticClass: "isc-progress-bar__innerText" },
                          [_vm._v(_vm._s(_vm.percentage) + "%")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        : _c(
            "div",
            {
              staticClass: "isc-progress-circle",
              style: { height: _vm.width + "px", width: _vm.width + "px" }
            },
            [
              _c("svg", { attrs: { viewBox: "0 0 100 100" } }, [
                _c("path", {
                  staticClass: "isc-progress-circle__track",
                  attrs: {
                    d: _vm.trackPath,
                    stroke: "#e5e9f2",
                    "stroke-width": _vm.relativeStrokeWidth,
                    fill: "none"
                  }
                }),
                _c("path", {
                  staticClass: "isc-progress-circle__path",
                  style: _vm.circlePathStyle,
                  attrs: {
                    d: _vm.trackPath,
                    "stroke-linecap": "round",
                    stroke: _vm.stroke,
                    "stroke-width": _vm.relativeStrokeWidth,
                    fill: "none"
                  }
                })
              ])
            ]
          ),
      _vm.showText && !_vm.textInside
        ? _c(
            "div",
            {
              staticClass: "isc-progress__text",
              style: { fontSize: _vm.progressTextSize + "px" }
            },
            [
              !_vm.status
                ? [_vm._v(_vm._s(_vm.percentage) + "%")]
                : [
                    _vm.status === "text"
                      ? _vm._t("default")
                      : _c("i", { class: _vm.iconClass })
                  ]
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var progressvue_type_template_id_229ee406_staticRenderFns = []
progressvue_type_template_id_229ee406_render._withStripped = true


// CONCATENATED MODULE: ./packages/progress/src/progress.vue?vue&type=template&id=229ee406&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/src/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'IsProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: function validator(val) {
        return ['line', 'circle'].indexOf(val) > -1;
      }
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      }
    },
    status: {
      type: String,
      validator: function validator(val) {
        return ['text', 'success', 'exception'].indexOf(val) > -1;
      }
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    barStyle: function barStyle() {
      var style = {};
      style.width = this.percentage + '%';
      style.backgroundColor = this.color;
      return style;
    },
    relativeStrokeWidth: function relativeStrokeWidth() {
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    trackPath: function trackPath() {
      var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

      return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
    },
    perimeter: function perimeter() {
      var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
      return 2 * Math.PI * radius;
    },
    circlePathStyle: function circlePathStyle() {
      var perimeter = this.perimeter;
      return {
        strokeDasharray: perimeter + 'px,' + perimeter + 'px',
        strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      };
    },
    stroke: function stroke() {
      var ret = void 0;
      if (this.color) {
        ret = this.color;
      } else {
        switch (this.status) {
          case 'success':
            ret = '#13ce66';
            break;
          case 'exception':
            ret = '#ff4949';
            break;
          default:
            ret = '#20a0ff';
        }
      }
      return ret;
    },
    iconClass: function iconClass() {
      if (this.type === 'line') {
        return this.status === 'success' ? 'isc-icon-circle-check' : 'isc-icon-circle-close';
      } else {
        return this.status === 'success' ? 'isc-icon-check' : 'isc-icon-close';
      }
    },
    progressTextSize: function progressTextSize() {
      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
    }
  }
});
// CONCATENATED MODULE: ./packages/progress/src/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/progress/src/progress.vue





/* normalize component */

var progress_component = normalizeComponent(
  src_progressvue_type_script_lang_js_,
  progressvue_type_template_id_229ee406_render,
  progressvue_type_template_id_229ee406_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var progress_api; }
progress_component.options.__file = "packages/progress/src/progress.vue"
/* harmony default export */ var progress = (progress_component.exports);
// CONCATENATED MODULE: ./packages/progress/index.js


/* istanbul ignore next */
progress.install = function (Vue) {
  Vue.component(progress.name, progress);
};

/* harmony default export */ var packages_progress = (progress);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.handleClose,
          expression: "handleClose"
        }
      ],
      staticClass: "isc-select",
      class: [_vm.selectSize ? "isc-select--" + _vm.selectSize : ""],
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.toggleMenu($event)
        }
      }
    },
    [
      _vm.multiple
        ? _c(
            "div",
            {
              ref: "tags",
              staticClass: "isc-select__tags",
              style: { "max-width": _vm.inputWidth - 32 + "px", width: "100%" }
            },
            [
              _vm.collapseTags && _vm.selected.length
                ? _c(
                    "span",
                    [
                      _c(
                        "is-tag",
                        {
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: _vm.selected[0].hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              return _vm.deleteTag($event, _vm.selected[0])
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "isc-select__tags-text" }, [
                            _vm._v(_vm._s(_vm.selected[0].currentLabel))
                          ])
                        ]
                      ),
                      _vm.selected.length > 1
                        ? _c(
                            "is-tag",
                            {
                              attrs: {
                                closable: false,
                                size: _vm.collapseTagSize,
                                type: "info",
                                "disable-transitions": ""
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "isc-select__tags-text" },
                                [_vm._v("+ " + _vm._s(_vm.selected.length - 1))]
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.collapseTags
                ? _c(
                    "transition-group",
                    { on: { "after-leave": _vm.resetInputHeight } },
                    _vm._l(_vm.selected, function(item) {
                      return _c(
                        "is-tag",
                        {
                          key: _vm.getValueKey(item),
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: item.hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              return _vm.deleteTag($event, item)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "isc-select__tags-text" }, [
                            _vm._v(_vm._s(item.currentLabel))
                          ])
                        ]
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm.filterable
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.query,
                        expression: "query"
                      }
                    ],
                    ref: "input",
                    staticClass: "isc-select__input",
                    class: [_vm.selectSize ? "is-" + _vm.selectSize : ""],
                    style: {
                      "flex-grow": "1",
                      width: _vm.inputLength / (_vm.inputWidth - 32) + "%",
                      "max-width": _vm.inputWidth - 42 + "px"
                    },
                    attrs: {
                      type: "text",
                      disabled: _vm.selectDisabled,
                      autocomplete: _vm.autoComplete || _vm.autocomplete
                    },
                    domProps: { value: _vm.query },
                    on: {
                      focus: _vm.handleFocus,
                      blur: function($event) {
                        _vm.softFocus = false
                      },
                      click: function($event) {
                        $event.stopPropagation()
                      },
                      keyup: _vm.managePlaceholder,
                      keydown: [
                        _vm.resetInputState,
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.navigateOptions("next")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.navigateOptions("prev")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.selectOption($event)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "esc", 27, $event.key, [
                              "Esc",
                              "Escape"
                            ])
                          ) {
                            return null
                          }
                          $event.stopPropagation()
                          $event.preventDefault()
                          _vm.visible = false
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "delete",
                              [8, 46],
                              $event.key,
                              ["Backspace", "Delete", "Del"]
                            )
                          ) {
                            return null
                          }
                          return _vm.deletePrevTag($event)
                        }
                      ],
                      compositionstart: _vm.handleComposition,
                      compositionupdate: _vm.handleComposition,
                      compositionend: _vm.handleComposition,
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.query = $event.target.value
                        },
                        _vm.debouncedQueryChange
                      ]
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _c(
        "is-input",
        {
          ref: "reference",
          class: { "is-focus": _vm.visible },
          attrs: {
            type: "text",
            placeholder: _vm.currentPlaceholder,
            name: _vm.name,
            id: _vm.id,
            autocomplete: _vm.autoComplete || _vm.autocomplete,
            size: _vm.selectSize,
            disabled: _vm.selectDisabled,
            readonly: _vm.readonly,
            "validate-event": false
          },
          on: { focus: _vm.handleFocus, blur: _vm.handleBlur },
          nativeOn: {
            keyup: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.navigateOptions("next")
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.navigateOptions("prev")
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.selectOption($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                _vm.visible = false
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                ) {
                  return null
                }
                _vm.visible = false
              }
            ],
            paste: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            mouseenter: function($event) {
              _vm.inputHovering = true
            },
            mouseleave: function($event) {
              _vm.inputHovering = false
            }
          },
          model: {
            value: _vm.selectedLabel,
            callback: function($$v) {
              _vm.selectedLabel = $$v
            },
            expression: "selectedLabel"
          }
        },
        [
          _vm.$slots.prefix
            ? _c("template", { slot: "prefix" }, [_vm._t("prefix")], 2)
            : _vm._e(),
          _c("template", { slot: "suffix" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showClose,
                  expression: "!showClose"
                }
              ],
              class: [
                "isc-select__caret",
                "isc-input__icon",
                "isc-icon-" + _vm.iconClass
              ]
            }),
            _vm.showClose
              ? _c("i", {
                  staticClass:
                    "isc-select__caret isc-input__icon isc-icon-circle-close",
                  on: { click: _vm.handleClearClick }
                })
              : _vm._e()
          ])
        ],
        2
      ),
      _c(
        "transition",
        {
          attrs: { name: "isc-zoom-in-top" },
          on: {
            "before-enter": _vm.handleMenuEnter,
            "after-leave": _vm.doDestroy
          }
        },
        [
          _c(
            "is-select-menu",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible && _vm.emptyText !== false,
                  expression: "visible && emptyText !== false"
                }
              ],
              ref: "popper",
              attrs: { "append-to-body": _vm.popperAppendToBody }
            },
            [
              _c(
                "is-scrollbar",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.options.length > 0 && !_vm.loading,
                      expression: "options.length > 0 && !loading"
                    }
                  ],
                  ref: "scrollbar",
                  class: {
                    "is-empty":
                      !_vm.allowCreate &&
                      _vm.query &&
                      _vm.filteredOptionsCount === 0
                  },
                  attrs: {
                    tag: "ul",
                    "wrap-class": "isc-select-dropdown__wrap",
                    "view-class": "isc-select-dropdown__list"
                  }
                },
                [
                  _vm.showNewOption
                    ? _c("is-option", {
                        attrs: { value: _vm.query, created: "" }
                      })
                    : _vm._e(),
                  _vm._t("default")
                ],
                2
              ),
              _vm.emptyText &&
              (!_vm.allowCreate ||
                _vm.loading ||
                (_vm.allowCreate && _vm.options.length === 0))
                ? [
                    _vm.$slots.empty
                      ? _vm._t("empty")
                      : _c("p", { staticClass: "isc-select-dropdown__empty" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.emptyText) +
                              "\n        "
                          )
                        ])
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// EXTERNAL MODULE: external "isyscore-ui/lib/mixins/focus"
var focus_ = __webpack_require__(28);
var focus_default = /*#__PURE__*/__webpack_require__.n(focus_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&
var select_dropdownvue_type_template_id_06828748_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "isc-select-dropdown isc-popper",
      class: [{ "is-multiple": _vm.$parent.multiple }, _vm.popperClass],
      style: { minWidth: _vm.minWidth }
    },
    [_vm._t("default")],
    2
  )
}
var select_dropdownvue_type_template_id_06828748_staticRenderFns = []
select_dropdownvue_type_template_id_06828748_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var select_dropdownvue_type_script_lang_js_ = ({
  name: 'IsSelectDropdown',

  componentName: 'IsSelectDropdown',

  mixins: [vue_popper_default.a],

  props: {
    placement: {
      default: 'bottom-start'
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      minWidth: ''
    };
  },


  computed: {
    popperClass: function popperClass() {
      return this.$parent.popperClass;
    }
  },

  watch: {
    '$parent.inputWidth': function $parentInputWidth() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.referenceIsm = this.$parent.$refs.reference.$el;
    this.$parent.popperIsm = this.popperIsm = this.$el;
    this.$on('updatePopper', function () {
      if (_this.$parent.visible) _this.updatePopper();
    });
    this.$on('destroyPopper', this.destroyPopper);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_select_dropdownvue_type_script_lang_js_ = (select_dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue





/* normalize component */

var select_dropdown_component = normalizeComponent(
  src_select_dropdownvue_type_script_lang_js_,
  select_dropdownvue_type_template_id_06828748_render,
  select_dropdownvue_type_template_id_06828748_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_dropdown_api; }
select_dropdown_component.options.__file = "packages/select/src/select-dropdown.vue"
/* harmony default export */ var select_dropdown = (select_dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
var optionvue_type_template_id_7a44c642_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "isc-select-dropdown__item",
      class: {
        selected: _vm.itemSelected,
        "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
        hover: _vm.hover
      },
      on: {
        mouseenter: _vm.hoverItem,
        click: function($event) {
          $event.stopPropagation()
          return _vm.selectOptionClick($event)
        }
      }
    },
    [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])],
    2
  )
}
var optionvue_type_template_id_7a44c642_staticRenderFns = []
optionvue_type_template_id_7a44c642_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'IsOption',

  componentName: 'IsOption',

  inject: ['select'],

  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },


  computed: {
    isObject: function isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    currentLabel: function currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },
    currentValue: function currentValue() {
      return this.value || this.label || '';
    },
    itemSelected: function itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached: function limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel: function currentLabel() {
      if (!this.created && !this.select.remote) this.dispatch('IsSelect', 'setSelected');
    },
    value: function value(val, oldVal) {
      var _select = this.select,
          remote = _select.remote,
          valueKey = _select.valueKey;

      if (!this.created && !remote) {
        if (valueKey && (typeof val === 'undefined' ? 'undefined' : typeof_default()(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : typeof_default()(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        this.dispatch('IsSelect', 'setSelected');
      }
    }
  },

  methods: {
    isEqual: function isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        var valueKey = this.select.valueKey;
        return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
      }
    },
    contains: function contains() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var target = arguments[1];

      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        var valueKey = this.select.valueKey;
        return arr && arr.some(function (item) {
          return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
        });
      }
    },
    handleGroupDisabled: function handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem: function hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick: function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch('IsSelect', 'handleOptionClick', [this, true]);
      }
    },
    queryChange: function queryChange(query) {
      this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created: function created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on('queryChange', this.queryChange);
    this.$on('handleGroupDisabled', this.handleGroupDisabled);
  },
  beforeDestroy: function beforeDestroy() {
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
});
// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/option.vue





/* normalize component */

var option_component = normalizeComponent(
  src_optionvue_type_script_lang_js_,
  optionvue_type_template_id_7a44c642_render,
  optionvue_type_template_id_7a44c642_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_api; }
option_component.options.__file = "packages/select/src/option.vue"
/* harmony default export */ var src_option = (option_component.exports);
// EXTERNAL MODULE: external "isyscore-ui/lib/tag"
var tag_ = __webpack_require__(29);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "isyscore-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(30);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(19);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(10);

// EXTERNAL MODULE: external "isyscore-ui/lib/utils/scroll-into-view"
var scroll_into_view_ = __webpack_require__(31);
var scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(scroll_into_view_);

// CONCATENATED MODULE: ./packages/select/src/navigation-mixin.js
/* harmony default export */ var navigation_mixin = ({
  data: function data() {
    return {
      hoverOption: -1
    };
  },


  computed: {
    optionsAllDisabled: function optionsAllDisabled() {
      return this.options.filter(function (option) {
        return option.visible;
      }).every(function (option) {
        return option.disabled;
      });
    }
  },

  watch: {
    hoverIndex: function hoverIndex(val) {
      var _this = this;

      if (typeof val === 'number' && val > -1) {
        this.hoverOption = this.options[val] || {};
      }
      this.options.forEach(function (option) {
        option.hover = _this.hoverOption === option;
      });
    }
  },

  methods: {
    navigateOptions: function navigateOptions(direction) {
      var _this2 = this;

      if (!this.visible) {
        this.visible = true;
        return;
      }
      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
      if (!this.optionsAllDisabled) {
        if (direction === 'next') {
          this.hoverIndex++;
          if (this.hoverIndex === this.options.length) {
            this.hoverIndex = 0;
          }
        } else if (direction === 'prev') {
          this.hoverIndex--;
          if (this.hoverIndex < 0) {
            this.hoverIndex = this.options.length - 1;
          }
        }
        var option = this.options[this.hoverIndex];
        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          this.navigateOptions(direction);
        }
        this.$nextTick(function () {
          return _this2.scrollToOption(_this2.hoverOption);
        });
      }
    }
  }
});
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/shared"
var shared_ = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//  import Locale from 'isyscore-ui/src/mixins/locale';








//  import { t } from 'isyscore-ui/src/locale';






/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a, focus_default()('reference'), navigation_mixin],

  name: 'IsSelect',

  componentName: 'IsSelect',

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  provide: function provide() {
    return {
      'select': this
    };
  },


  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    readonly: function readonly() {
      return !this.filterable || this.multiple || !Object(util_["isIE"])() && !Object(util_["isEdge"])() && !this.visible;
    },
    showClose: function showClose() {
      var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
      var criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue;
      return criteria;
    },
    iconClass: function iconClass() {
      return this.remote && this.filterable ? '' : this.visible ? 'arrow-up is-reverse' : 'arrow-up';
    },
    debounce: function debounce() {
      return this.remote ? 300 : 0;
    },
    emptyText: function emptyText() {
      if (this.loading) {
        return this.loadingText;
      } else {
        if (this.remote && this.query === '' && this.options.length === 0) return false;
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText;
        }
        if (this.options.length === 0) {
          return this.noDataTex;
        }
      }
      return null;
    },
    showNewOption: function showNewOption() {
      var _this = this;

      var hasExistingOption = this.options.filter(function (option) {
        return !option.created;
      }).some(function (option) {
        return option.currentLabel === _this.query;
      });
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
    },
    selectSize: function selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    selectDisabled: function selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    collapseTagSize: function collapseTagSize() {
      return ['small', 'mini'].indexOf(this.selectSize) > -1 ? 'mini' : 'small';
    }
  },

  components: {
    IsInput: input_default.a,
    IsSelectMenu: select_dropdown,
    IsOption: src_option,
    IsTag: tag_default.a,
    IsScrollbar: scrollbar_default.a
  },

  directives: { Clickoutside: clickoutside_default.a },

  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
         false && false;
        return true;
      }
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: function _default() {
        return t('el.select.placeholder');
      }
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      softFocus: false,
      selectedLabel: '',
      hoverIndex: -1,
      query: '',
      previousQuery: null,
      inputHovering: false,
      currentPlaceholder: '',
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false
    };
  },


  watch: {
    selectDisabled: function selectDisabled() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.resetInputHeight();
      });
    },
    placeholder: function placeholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },
    value: function value(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
        if (val && val.length > 0 || this.$refs.input && this.query !== '') {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = '';
          this.handleQueryChange(this.query);
        }
      }
      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
      if (!Object(util_["valueEquals"])(val, oldVal)) {
        this.dispatch('IsFormItem', 'el.form.change', val);
      }
    },
    visible: function visible(val) {
      var _this3 = this;

      if (!val) {
        this.broadcast('IsSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = '';
        this.previousQuery = null;
        this.selectedLabel = '';
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
        this.$nextTick(function () {
          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
          }
        });
        if (!this.multiple) {
          if (this.selected) {
            if (this.filterable && this.allowCreate && this.createdSelected && this.createdLabel) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable) this.query = this.selectedLabel;
          }

          if (this.filterable) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        }
      } else {
        this.broadcast('IsSelectDropdown', 'updatePopper');
        if (this.filterable) {
          this.query = this.remote ? '' : this.selectedLabel;
          this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              this.broadcast('IsOption', 'queryChange', '');
              this.broadcast('IsOptionGroup', 'queryChange');
            }

            if (this.selectedLabel) {
              this.currentPlaceholder = this.selectedLabel;
              this.selectedLabel = '';
            }
          }
        }
      }
      this.$emit('visible-change', val);
    },
    options: function options() {
      var _this4 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this4.broadcast('IsSelectDropdown', 'updatePopper');
      });
      if (this.multiple) {
        this.resetInputHeight();
      }
      var inputs = this.$el.querySelectorAll('input');
      if ([].indexOf.call(inputs, document.activeIsement) === -1) {
        this.setSelected();
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    }
  },

  methods: {
    handleComposition: function handleComposition(event) {
      var text = event.target.value;
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.handleQueryChange(text);
      } else {
        var lastCharacter = text[text.length - 1] || '';
        this.isOnComposition = !Object(shared_["isKorean"])(lastCharacter);
      }
    },
    handleQueryChange: function handleQueryChange(val) {
      var _this5 = this;

      if (this.previousQuery === val || this.isOnComposition) return;
      if (this.previousQuery === null && (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')) {
        this.previousQuery = val;
        return;
      }
      this.previousQuery = val;
      this.$nextTick(function () {
        if (_this5.visible) _this5.broadcast('IsSelectDropdown', 'updatePopper');
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        var length = this.$refs.input.value.length * 15 + 20;
        this.inputLength = this.collapseTags ? Math.min(50, length) : length;
        this.managePlaceholder();
        this.resetInputHeight();
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val);
        this.broadcast('IsOptionGroup', 'queryChange');
      } else {
        this.filteredOptionsCount = this.optionsCount;
        this.broadcast('IsOption', 'queryChange', val);
        this.broadcast('IsOptionGroup', 'queryChange');
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    },
    scrollToOption: function scrollToOption(option) {
      var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        var menu = this.$refs.popper.$el.querySelector('.isc-select-dropdown__wrap');
        scroll_into_view_default()(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this6 = this;

      this.$nextTick(function () {
        return _this6.scrollToOption(_this6.selected);
      });
    },
    emitChange: function emitChange(val) {
      if (!Object(util_["valueEquals"])(this.value, val)) {
        this.$emit('change', val);
      }
    },
    getOption: function getOption(value) {
      var option = void 0;
      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      var isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';

      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
        var cachedOption = this.cachedOptions[i];
        var isEqual = isObject ? Object(util_["getValueByPath"])(cachedOption.value, this.valueKey) === Object(util_["getValueByPath"])(value, this.valueKey) : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) return option;
      var label = !isObject && !isNull ? value : '';
      var newOption = {
        value: value,
        currentLabel: label
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    setSelected: function setSelected() {
      var _this7 = this;

      if (!this.multiple) {
        var option = this.getOption(this.value);
        if (option.created) {
          this.createdLabel = option.currentLabel;
          this.createdSelected = true;
        } else {
          this.createdSelected = false;
        }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        if (this.filterable) this.query = this.selectedLabel;
        return;
      }
      var result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(function (value) {
          result.push(_this7.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(function () {
        _this7.resetInputHeight();
      });
    },
    handleFocus: function handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true;
          this.menuVisibleOnFocus = true;
        }
        this.$emit('focus', event);
      } else {
        this.softFocus = false;
      }
    },
    blur: function blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },
    handleBlur: function handleBlur(event) {
      var _this8 = this;

      setTimeout(function () {
        if (_this8.isSilentBlur) {
          _this8.isSilentBlur = false;
        } else {
          _this8.$emit('blur', event);
        }
      }, 50);
      this.softFocus = false;
    },
    handleClearClick: function handleClearClick(event) {
      this.deleteSelected(event);
    },
    doDestroy: function doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
    handleClose: function handleClose() {
      this.visible = false;
    },
    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      var option = this.selected[this.selected.length - 1];
      if (!option) return;

      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }

      option.hitState = !option.hitState;
      return option.hitState;
    },
    deletePrevTag: function deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        var value = this.value.slice();
        value.pop();
        this.$emit('input', value);
        this.emitChange(value);
      }
    },
    managePlaceholder: function managePlaceholder() {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
      }
    },
    resetInputState: function resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },
    resetInputHeight: function resetInputHeight() {
      var _this9 = this;

      if (this.collapseTags && !this.filterable) return;
      this.$nextTick(function () {
        if (!_this9.$refs.reference) return;
        var inputChildNodes = _this9.$refs.reference.$el.childNodes;
        var input = [].filter.call(inputChildNodes, function (item) {
          return item.tagName === 'INPUT';
        })[0];
        var tags = _this9.$refs.tags;
        var sizeInMap = _this9.initialInputHeight || 40;
        input.style.height = _this9.selected.length === 0 ? sizeInMap + 'px' : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px';
        if (_this9.visible && _this9.emptyText !== false) {
          _this9.broadcast('IsSelectDropdown', 'updatePopper');
        }
      });
    },
    resetHoverIndex: function resetHoverIndex() {
      var _this10 = this;

      setTimeout(function () {
        if (!_this10.multiple) {
          _this10.hoverIndex = _this10.options.indexOf(_this10.selected);
        } else {
          if (_this10.selected.length > 0) {
            _this10.hoverIndex = Math.min.apply(null, _this10.selected.map(function (item) {
              return _this10.options.indexOf(item);
            }));
          } else {
            _this10.hoverIndex = -1;
          }
        }
      }, 300);
    },
    handleOptionSelect: function handleOptionSelect(option, byClick) {
      var _this11 = this;

      if (this.multiple) {
        var value = (this.value || []).slice();
        var optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
        if (option.created) {
          this.query = '';
          this.handleQueryChange('');
          this.inputLength = 20;
        }
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      this.setSoftFocus();
      if (this.visible) return;
      this.$nextTick(function () {
        _this11.scrollToOption(option);
      });
    },
    setSoftFocus: function setSoftFocus() {
      this.softFocus = true;
      var input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },
    getValueIndex: function getValueIndex() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments[1];

      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      if (!isObject) {
        return arr.indexOf(value);
      } else {
        var valueKey = this.valueKey;
        var index = -1;
        arr.some(function (item, i) {
          if (Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(value, valueKey)) {
            index = i;
            return true;
          }
          return false;
        });
        return index;
      }
    },
    toggleMenu: function toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },
    selectOption: function selectOption() {
      if (!this.visible) {
        this.toggleMenu();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex]);
        }
      }
    },
    deleteSelected: function deleteSelected(event) {
      event.stopPropagation();
      var value = this.multiple ? [] : null;
      this.$emit('input', value);
      this.emitChange(value);
      this.visible = false;
      this.$emit('clear');
    },
    deleteTag: function deleteTag(event, tag) {
      var index = this.selected.indexOf(tag);
      if (index > -1 && !this.selectDisabled) {
        var value = this.value.slice();
        value.splice(index, 1);
        this.$emit('input', value);
        this.emitChange(value);
        this.$emit('remove-tag', tag.value);
      }
      event.stopPropagation();
    },
    onInputChange: function onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    onOptionDestroy: function onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
    resetInputWidth: function resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },
    handleResize: function handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },
    checkDefaultFirstOption: function checkDefaultFirstOption() {
      this.hoverIndex = -1;
      // highlight the created option
      var hasCreated = false;
      for (var i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].created) {
          hasCreated = true;
          this.hoverIndex = i;
          break;
        }
      }
      if (hasCreated) return;
      for (var _i = 0; _i !== this.options.length; ++_i) {
        var option = this.options[_i];
        if (this.query) {
          // highlight first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = _i;
            break;
          }
        } else {
          // highlight currently selected option
          if (option.itemSelected) {
            this.hoverIndex = _i;
            break;
          }
        }
      }
    },
    getValueKey: function getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value;
      } else {
        return Object(util_["getValueByPath"])(item.value, this.valueKey);
      }
    }
  },

  created: function created() {
    var _this12 = this;

    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = debounce_default()(this.debounce, function () {
      _this12.onInputChange();
    });

    this.debouncedQueryChange = debounce_default()(this.debounce, function (e) {
      _this12.handleQueryChange(e.target.value);
    });

    this.$on('handleOptionClick', this.handleOptionSelect);
    this.$on('setSelected', this.setSelected);
  },
  mounted: function mounted() {
    var _this13 = this;

    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = '';
    }
    Object(resize_event_["addResizeListener"])(this.$el, this.handleResize);

    var reference = this.$refs.reference;
    if (reference && reference.$el) {
      var sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      };
      this.initialInputHeight = reference.$el.getBoundingClientRect().height || sizeMap[this.selectSize];
    }
    if (this.remote && this.multiple) {
      this.resetInputHeight();
    }
    this.$nextTick(function () {
      if (reference && reference.$el) {
        _this13.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.handleResize) Object(resize_event_["removeResizeListener"])(this.$el, this.handleResize);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


/* istanbul ignore next */
src_select.install = function (Vue) {
  Vue.component(src_select.name, src_select);
};

/* harmony default export */ var packages_select = (src_select);
// CONCATENATED MODULE: ./packages/option/index.js


/* istanbul ignore next */
src_option.install = function (Vue) {
  Vue.component(src_option.name, src_option);
};

/* harmony default export */ var packages_option = (src_option);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&
var option_groupvue_type_template_id_6685e5de_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "isc-select-group__wrap"
    },
    [
      _c("li", { staticClass: "isc-select-group__title" }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _c("li", [
        _c("ul", { staticClass: "isc-select-group" }, [_vm._t("default")], 2)
      ])
    ]
  )
}
var option_groupvue_type_template_id_6685e5de_staticRenderFns = []
option_groupvue_type_template_id_6685e5de_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var option_groupvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'IsOptionGroup',

  componentName: 'IsOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      visible: true
    };
  },


  watch: {
    disabled: function disabled(val) {
      this.broadcast('IsOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange: function queryChange() {
      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(function (option) {
        return option.visible === true;
      });
    }
  },

  created: function created() {
    this.$on('queryChange', this.queryChange);
  },
  mounted: function mounted() {
    if (this.disabled) {
      this.broadcast('IsOption', 'handleGroupDisabled', this.disabled);
    }
  }
});
// CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_option_groupvue_type_script_lang_js_ = (option_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/option-group.vue





/* normalize component */

var option_group_component = normalizeComponent(
  src_option_groupvue_type_script_lang_js_,
  option_groupvue_type_template_id_6685e5de_render,
  option_groupvue_type_template_id_6685e5de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_group_api; }
option_group_component.options.__file = "packages/select/src/option-group.vue"
/* harmony default export */ var option_group = (option_group_component.exports);
// CONCATENATED MODULE: ./packages/option-group/index.js


/* istanbul ignore next */
option_group.install = function (Vue) {
  Vue.component(option_group.name, option_group);
};

/* harmony default export */ var packages_option_group = (option_group);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=script&lang=js&

/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'IsTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClose: function handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick: function handleClick(event) {
      event.stopPropagation();
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize: function tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render: function render(h) {
    var classes = ['isc-tag', this.type ? 'isc-tag--' + this.type : '', this.tagSize ? 'isc-tag--' + this.tagSize : '', { 'is-hit': this.hit }];
    var tagEl = h(
      'span',
      { 'class': classes, style: { backgroundColor: this.color }, on: {
          'click': this.handleClick
        }
      },
      [this.$slots.default, this.closable && h('i', { 'class': 'isc-tag__close isc-icon-close', on: {
          'click': this.handleClose
        }
      })]
    );

    return this.disableTransitions ? tagEl : h(
      'transition',
      {
        attrs: { name: 'isc-zoom-in-center' }
      },
      [tagEl]
    );
  }
});
// CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tag/src/tag.vue
var tag_render, tag_staticRenderFns




/* normalize component */

var tag_component = normalizeComponent(
  src_tagvue_type_script_lang_js_,
  tag_render,
  tag_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tag_api; }
tag_component.options.__file = "packages/tag/src/tag.vue"
/* harmony default export */ var tag = (tag_component.exports);
// CONCATENATED MODULE: ./packages/tag/index.js


/* istanbul ignore next */
tag.install = function (Vue) {
  Vue.component(tag.name, tag);
};

/* harmony default export */ var packages_tag = (tag);
// EXTERNAL MODULE: external "isyscore-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(33);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['isc-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'isc-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var scrollbar_src_main = ({
  name: 'IsScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util_["toObject"])(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['isc-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'isc-scrollbar__wrap', gutter ? '' : 'isc-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'isc-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'isc-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


/* istanbul ignore next */
scrollbar_src_main.install = function (Vue) {
  Vue.component(scrollbar_src_main.name, scrollbar_src_main);
};

/* harmony default export */ var scrollbar = (scrollbar_src_main);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */



















// import locale from 'element-ui/src/locale';
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

var components = [packages_button, packages_button_group, packages_step, packages_steps, card, color_picker, packages_input, packages_checkbox, packages_table_tree, drawing_board, upload, packages_progress, packages_select, packages_option, packages_option_group, packages_tag, scrollbar];

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  var extra = 'IsUpload';
  components.forEach(function (component) {
    component[extra] ? Vue.component(component[extra].name, component[extra]) : Vue.component(component.name, component);
  });

  Vue.use(upload.directive);
  Vue.use(packages_loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src_0 = __webpack_exports__["default"] = ({
  version: '1.0.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install: src_install,
  // CollapseTransition,
  // Loading,
  Button: packages_button,
  ButtonGroup: packages_button_group,
  Step: packages_step,
  Steps: packages_steps,
  Card: card,
  ColorPicker: color_picker,
  Input: packages_input,
  Checkbox: packages_checkbox,
  TableTree: packages_table_tree,
  DrawingBoard: drawing_board,
  Upload: upload,
  Progress: packages_progress,
  Select: packages_select,
  Option: packages_option,
  OptionGroup: packages_option_group,
  Tag: packages_tag,
  Scrollbar: scrollbar
});

/***/ })
/******/ ])["default"];