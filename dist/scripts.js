/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = l.createElement("script")),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(ba, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener("unload", ea, !1)
                  : e.attachEvent && e.attachEvent("onunload", ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(g.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !g.getElementsByName || !g.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  var b = g.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f)
                      return a === g
                        ? -1
                        : b === g
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? la(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 &&
                ra(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
    });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        "complete" === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = L.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return typeof n !== U && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(E) || [""]),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var aa =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ia.optgroup = ia.option),
    (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
    (ia.th = ia.td);
  function ja(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function ka(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function la(a) {
    var b = ga.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function oa(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
          pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
            na(f[d], g[d]);
        else na(a, h);
      return (
        (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || 0 === e))
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
            (f = f || k.appendChild(b.createElement("div"))),
              (g = (ba.exec(e) || ["", ""])[1].toLowerCase()),
              (h = ia[g] || ia._default),
              (f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
          } else l.push(b.createTextNode(e));
      (k.textContent = ""), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = oa(k.appendChild(e), "script")),
          i && ma(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fa.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(oa(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !da.test(a) &&
              !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(aa, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(oa(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fa.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(ha, "")));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qa,
    ra = {};
  function sa(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function ta(a) {
    var b = l,
      c = ra[a];
    return (
      c ||
        ((c = sa(a, b)),
        ("none" !== c && c) ||
          ((qa = (
            qa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qa[0].contentDocument),
          b.write(),
          b.close(),
          (c = sa(a, b)),
          qa.detach()),
        (ra[a] = c)),
      c
    );
  }
  var ua = /^margin/,
    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wa(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) &&
          ua.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function ya(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
        (e.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (f.innerHTML = ""),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
    Ca = { position: "absolute", visibility: "hidden", display: "block" },
    Da = { letterSpacing: "0", fontWeight: "400" },
    Ea = ["Webkit", "O", "Moz", "ms"];
  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--) if (((b = Ea[e] + c), b in a)) return b;
    return d;
  }
  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Ha(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ia(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        va.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", ta(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
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
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ba.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xa(a, b, d)),
        "normal" === e && b in Da && (e = Da[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? za.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Ca, function () {
                  return Ia(a, b, d);
                })
              : Ia(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wa(a);
          return Ga(
            a,
            c,
            d
              ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0
          );
        },
      };
    }),
    (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wa(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Ja(this, !0);
      },
      hide: function () {
        return Ja(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ka),
    (Ka.prototype = {
      constructor: Ka,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ka.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ka.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ka.prototype.init.prototype = Ka.prototype),
    (Ka.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Ka.prototype.init),
    (n.fx.step = {});
  var La,
    Ma,
    Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function Sa() {
    return (
      setTimeout(function () {
        La = void 0;
      }),
      (La = n.now())
    );
  }
  function Ta(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ua(a, b, c) {
    for (
      var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Va(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Na.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ua(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xa(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qa.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = La || Sa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qa[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ua, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Ta(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (La = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Ma), (Ma = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Ya,
    Za,
    $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Za = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $a[b] || n.find.attr;
      $a[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $a[b]),
            ($a[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($a[b] = f)),
          e
        );
      };
    });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cb = n.now(),
    db = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = "*/".concat("*"),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];
  function qb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function sb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || ob) + "")
          .replace(eb, "")
          .replace(jb, pb[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((h = kb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pb[1] &&
              h[2] === pb[2] &&
              (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                (pb[3] || ("http:" === pb[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        rb(lb, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ib.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fb.test(d)
              ? d.replace(fb, "$1_=" + cb++)
              : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
          n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rb(mb, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tb(k, v, f)),
          (u = ub(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[d] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bb = 0,
    Cb = {},
    Db = { 0: 200, 1223: 204 },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Cb) Cb[a]();
    }),
    (k.cors = !!Eb && "withCredentials" in Eb),
    (k.ajax = Eb = !!Eb),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Eb && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Bb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Cb[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Db[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Cb[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Gb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Hb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Ib = a.document.documentElement;
  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Jb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || Ib;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Ib;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
          return J(
            this,
            function (b, e, f) {
              var g = Jb(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
        return c
          ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return J(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Kb = a.jQuery,
    Lb = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});
//# sourceMappingURL=jquery.min.map
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"] = jQuery.easing["swing"];

jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)
      ) + b
    );
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    if (t < 1)
      return (
        -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
        b
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
        0.5 +
      c +
      b
    );
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1)
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2)
      return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
    return (
      jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    );
  },
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.5"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.5"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              a(c.target).is('input[type="radio"]') ||
                a(c.target).is('input[type="checkbox"]') ||
                c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.5"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger("hidden.bs.dropdown", f))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.5"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              (c.hoverState = "out"),
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                  }, c.options.delay.hide))
                : c.hide())
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.5"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.5"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.5"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
(function () {
  "use strict";

  var $ = window.jQuery;
  var Waypoint = window.Waypoint;

  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options);
    this.element = this.options.element;
    this.$element = $(this.element);
    this.createWrapper();
    this.createWaypoint();
  }

  /* Private */
  Sticky.prototype.createWaypoint = function () {
    var originalHandler = this.options.handler;

    this.waypoint = new Waypoint(
      $.extend({}, this.options, {
        element: this.wrapper,
        handler: $.proxy(function (direction) {
          var shouldBeStuck = this.options.direction.indexOf(direction) > -1;
          var wrapperHeight = shouldBeStuck
            ? this.$element.outerHeight(true)
            : "";

          this.$wrapper.height(wrapperHeight);
          this.$element.toggleClass(this.options.stuckClass, shouldBeStuck);

          if (originalHandler) {
            originalHandler.call(this, direction);
          }
        }, this),
      })
    );
  };

  /* Private */
  Sticky.prototype.createWrapper = function () {
    if (this.options.wrapper) {
      this.$element.wrap(this.options.wrapper);
    }
    this.$wrapper = this.$element.parent();
    this.wrapper = this.$wrapper[0];
  };

  /* Public */
  Sticky.prototype.destroy = function () {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy();
      this.$element.removeClass(this.options.stuckClass);
      if (this.options.wrapper) {
        this.$element.unwrap();
      }
    }
  };

  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: "stuck",
    direction: "down right",
  };

  Waypoint.Sticky = Sticky;
})();

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide();
      },
      showElement: function (a) {
        a.show();
      },
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft();
        },
        setLeft: function (a, b) {
          a.scrollLeft(b);
        },
        getTop: function (a) {
          return a.scrollTop();
        },
        setTop: function (a, b) {
          a.scrollTop(b);
        },
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b);
        },
        setTop: function (a, b) {
          a.css("top", b);
        },
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        },
      },
    },
    j = (function () {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d,
    m = l
      ? function (a, b, c) {
          a.css({ "background-position-x": b, "background-position-y": c });
        }
      : function (a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function () {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function (a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function (a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function () {
          c.refresh();
        }),
        d.bind("resize." + this.name, function () {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          a(b).load(function () {
            var a = d._getScrollLeft(),
              b = d._getScrollTop();
            d._setScrollLeft(a + 1),
              d._setScrollTop(b + 1),
              d._setScrollLeft(a),
              d._setScrollTop(b);
          }),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = b ? a.top : 0),
        (this.viewportOffsetLeft = b ? a.left : 0);
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function () {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = a(this),
              n = 0,
              o = 0,
              p = 0,
              q = 0;
            if (m.data("stellar-elementIsActive")) {
              if (m.data("stellar-elementIsActive") !== this) return;
            } else m.data("stellar-elementIsActive", this);
            b.options.showElement(m),
              m.data("stellar-startingLeft")
                ? (m.css("left", m.data("stellar-startingLeft")),
                  m.css("top", m.data("stellar-startingTop")))
                : (m.data("stellar-startingLeft", m.css("left")),
                  m.data("stellar-startingTop", m.css("top"))),
              (f = m.position().left),
              (g = m.position().top),
              (h =
                "auto" === m.css("margin-left")
                  ? 0
                  : parseInt(m.css("margin-left"), 10)),
              (i =
                "auto" === m.css("margin-top")
                  ? 0
                  : parseInt(m.css("margin-top"), 10)),
              (k = m.offset().left - h),
              (l = m.offset().top - i),
              m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((n = p), (o = q), (j = b), !1)
                  : ((p += b.position().left), void (q += b.position().top));
              }),
              (c =
                m.data("stellar-horizontal-offset") !== d
                  ? m.data("stellar-horizontal-offset")
                  : j !== d && j.data("stellar-horizontal-offset") !== d
                  ? j.data("stellar-horizontal-offset")
                  : b.horizontalOffset),
              (e =
                m.data("stellar-vertical-offset") !== d
                  ? m.data("stellar-vertical-offset")
                  : j !== d && j.data("stellar-vertical-offset") !== d
                  ? j.data("stellar-vertical-offset")
                  : b.verticalOffset),
              b.particles.push({
                $element: m,
                $offsetParent: j,
                isFixed: "fixed" === m.css("position"),
                horizontalOffset: c,
                verticalOffset: e,
                startingPositionLeft: f,
                startingPositionTop: g,
                startingOffsetLeft: k,
                startingOffsetTop: l,
                parentOffsetLeft: n,
                parentOffsetTop: o,
                stellarRatio:
                  m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                isHidden: !1,
              });
          });
    },
    _findBackgrounds: function () {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function () {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((q = s), (r = t), (l = b), !1)
                  : ((s += b.position().left), void (t += b.position().top));
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                  ? l.data("stellar-horizontal-offset")
                  : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                  ? l.data("stellar-vertical-offset")
                  : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function () {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function () {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), (b = !1);
        },
        d = function () {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function () {
      var a = this;
      (this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (a.fn[f] = function (b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function () {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
        ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e &&
              "function" == typeof d[b] &&
              d[b].apply(d, Array.prototype.slice.call(c, 1)),
              "destroy" === b && a.data(this, "plugin_" + f, null);
          })
        : void 0;
    }),
    (a[f] = function () {
      var c = a(b);
      return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);
/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function ($) {
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    // default configuration values
    var cfg = {
      interval: 100,
      sensitivity: 7,
      timeout: 0,
    };

    if (typeof handlerIn === "object") {
      cfg = $.extend(cfg, handlerIn);
    } else if ($.isFunction(handlerOut)) {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerOut,
        selector: selector,
      });
    } else {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerIn,
        selector: handlerOut,
      });
    }

    // instantiate variables
    // cX, cY = current X and Y position of mouse, updated by mousemove event
    // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
    var cX, cY, pX, pY;

    // A private function for getting mouse position
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };

    // A private function for comparing current and previous mouse position
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      // compare mouse positions to see if they've crossed the threshold
      if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
        $(ob).off("mousemove.hoverIntent", track);
        // set hoverIntent state to true (so mouseOut can be called)
        ob.hoverIntent_s = 1;
        return cfg.over.apply(ob, [ev]);
      } else {
        // set previous coordinates for next time
        pX = cX;
        pY = cY;
        // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob);
        }, cfg.interval);
      }
    };

    // A private function for delaying the mouseOut function
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = 0;
      return cfg.out.apply(ob, [ev]);
    };

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // copy objects to be passed into t (required for event object to be passed in IE)
      var ev = jQuery.extend({}, e);
      var ob = this;

      // cancel hoverIntent timer if it exists
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      }

      // if e.type == "mouseenter"
      if (e.type == "mouseenter") {
        // set "previous" X and Y position based on initial entry point
        pX = ev.pageX;
        pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $(ob).on("mousemove.hoverIntent", track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        if (ob.hoverIntent_s != 1) {
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
        }

        // else e.type == "mouseleave"
      } else {
        // unbind expensive mousemove event
        $(ob).off("mousemove.hoverIntent", track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        if (ob.hoverIntent_s == 1) {
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob);
          }, cfg.timeout);
        }
      }
    };

    // listen for mouseenter and mouseleave
    return this.on(
      {
        "mouseenter.hoverIntent": handleHover,
        "mouseleave.hoverIntent": handleHover,
      },
      cfg.selector
    );
  };
})(jQuery);
/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($, w) {
  "use strict";

  var methods = (function () {
    // private properties and methods go here
    var c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows",
      },
      ios = (function () {
        var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (ios) {
          // iOS clicks only bubble as far as body children
          $(w).load(function () {
            $("body").children().on("click", $.noop);
          });
        }
        return ios;
      })(),
      wp7 = (function () {
        var style = document.documentElement.style;
        return (
          "behavior" in style &&
          "fill" in style &&
          /iemobile/i.test(navigator.userAgent)
        );
      })(),
      unprefixedPointerEvents = (function () {
        return !!w.PointerEvent;
      })(),
      toggleMenuClasses = function ($menu, o) {
        var classes = c.menuClass;
        if (o.cssArrows) {
          classes += " " + c.menuArrowClass;
        }
        $menu.toggleClass(classes);
      },
      setPathToCurrent = function ($menu, o) {
        return $menu
          .find("li." + o.pathClass)
          .slice(0, o.pathLevels)
          .addClass(o.hoverClass + " " + c.bcClass)
          .filter(function () {
            return $(this).children(o.popUpSelector).hide().show().length;
          })
          .removeClass(o.pathClass);
      },
      toggleAnchorClass = function ($li) {
        $li.children("a").toggleClass(c.anchorClass);
      },
      toggleTouchAction = function ($menu) {
        var msTouchAction = $menu.css("ms-touch-action");
        var touchAction = $menu.css("touch-action");
        touchAction = touchAction || msTouchAction;
        touchAction = touchAction === "pan-y" ? "auto" : "pan-y";
        $menu.css({
          "ms-touch-action": touchAction,
          "touch-action": touchAction,
        });
      },
      applyHandlers = function ($menu, o) {
        var targets = "li:has(" + o.popUpSelector + ")";
        if ($.fn.hoverIntent && !o.disableHI) {
          $menu.hoverIntent(over, out, targets);
        } else {
          $menu
            .on("mouseenter.superfish", targets, over)
            .on("mouseleave.superfish", targets, out);
        }
        var touchevent = "MSPointerDown.superfish";
        if (unprefixedPointerEvents) {
          touchevent = "pointerdown.superfish";
        }
        if (!ios) {
          touchevent += " touchend.superfish";
        }
        if (wp7) {
          touchevent += " mousedown.superfish";
        }
        $menu
          .on("focusin.superfish", "li", over)
          .on("focusout.superfish", "li", out)
          .on(touchevent, "a", o, touchHandler);
      },
      touchHandler = function (e) {
        var $this = $(this),
          $ul = $this.siblings(e.data.popUpSelector);

        if ($ul.length > 0 && $ul.is(":hidden")) {
          $this.one("click.superfish", false);
          if (e.type === "MSPointerDown" || e.type === "pointerdown") {
            $this.trigger("focus");
          } else {
            $.proxy(over, $this.parent("li"))();
          }
        }
      },
      over = function () {
        var $this = $(this),
          o = getOptions($this);
        clearTimeout(o.sfTimer);
        $this.siblings().superfish("hide").end().superfish("show");
      },
      out = function () {
        var $this = $(this),
          o = getOptions($this);
        if (ios) {
          $.proxy(close, $this, o)();
        } else {
          clearTimeout(o.sfTimer);
          o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
        }
      },
      close = function (o) {
        o.retainPath = $.inArray(this[0], o.$path) > -1;
        this.superfish("hide");

        if (!this.parents("." + o.hoverClass).length) {
          o.onIdle.call(getMenu(this));
          if (o.$path.length) {
            $.proxy(over, o.$path)();
          }
        }
      },
      getMenu = function ($el) {
        return $el.closest("." + c.menuClass);
      },
      getOptions = function ($el) {
        return getMenu($el).data("sf-options");
      };

    return {
      // public methods
      hide: function (instant) {
        if (this.length) {
          var $this = this,
            o = getOptions($this);
          if (!o) {
            return this;
          }
          var not = o.retainPath === true ? o.$path : "",
            $ul = $this
              .find("li." + o.hoverClass)
              .add(this)
              .not(not)
              .removeClass(o.hoverClass)
              .children(o.popUpSelector),
            speed = o.speedOut;

          if (instant) {
            $ul.show();
            speed = 0;
          }
          o.retainPath = false;
          o.onBeforeHide.call($ul);
          $ul.stop(true, true).animate(o.animationOut, speed, function () {
            var $this = $(this);
            o.onHide.call($this);
          });
        }
        return this;
      },
      show: function () {
        var o = getOptions(this);
        if (!o) {
          return this;
        }
        var $this = this.addClass(o.hoverClass),
          $ul = $this.children(o.popUpSelector);

        o.onBeforeShow.call($ul);
        $ul.stop(true, true).animate(o.animation, o.speed, function () {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function () {
        return this.each(function () {
          var $this = $(this),
            o = $this.data("sf-options"),
            $hasPopUp;
          if (!o) {
            return false;
          }
          $hasPopUp = $this.find(o.popUpSelector).parent("li");
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          // remove event handlers
          $this.off(".superfish").off(".hoverIntent");
          // clear animation's inline display style
          $hasPopUp
            .children(o.popUpSelector)
            .attr("style", function (i, style) {
              return style.replace(/display[^;]+;?/g, "");
            });
          // reset 'current' path classes
          o.$path
            .removeClass(o.hoverClass + " " + c.bcClass)
            .addClass(o.pathClass);
          $this.find("." + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData("sf-options");
        });
      },
      init: function (op) {
        return this.each(function () {
          var $this = $(this);
          if ($this.data("sf-options")) {
            return false;
          }
          var o = $.extend({}, $.fn.superfish.defaults, op),
            $hasPopUp = $this.find(o.popUpSelector).parent("li");
          o.$path = setPathToCurrent($this, o);

          $this.data("sf-options", o);

          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);

          $hasPopUp.not("." + c.bcClass).superfish("hide", true);

          o.onInit.call(this);
        });
      },
    };
  })();

  $.fn.superfish = function (method, args) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error(
        "Method " + method + " does not exist on jQuery.fn.superfish"
      );
    }
  };

  $.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega", // within menu context
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: { opacity: "show" },
    animationOut: { opacity: "hide" },
    speed: "normal",
    speedOut: "fast",
    cssArrows: true,
    disableHI: false,
    onInit: $.noop,
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop,
    onDestroy: $.noop,
  };
})(jQuery, window);

/*! Magnific Popup - v0.9.9 - 2014-09-06
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2014 Dmitry Semenov; */
(function (e) {
  var t,
    n,
    i,
    o,
    r,
    a,
    s,
    l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function () {},
    b = !!window.jQuery,
    I = e(window),
    x = function (e, n) {
      t.ev.on(g + e + h, n);
    },
    k = function (t, n, i, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
        r
      );
    },
    T = function (n, i) {
      t.ev.triggerHandler(g + n, i),
        t.st.callbacks &&
          ((n = n.charAt(0).toLowerCase() + n.slice(1)),
          t.st.callbacks[n] &&
            t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    E = function (n) {
      return (
        (n === s && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (s = n)),
        t.currTemplate.closeBtn
      );
    },
    _ = function () {
      e.magnificPopup.instance ||
        ((t = new w()), t.init(), (e.magnificPopup.instance = t));
    },
    S = function () {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
      return !1;
    };
  (w.prototype = {
    constructor: w,
    init: function () {
      var n = navigator.appVersion;
      (t.isIE7 = -1 !== n.indexOf("MSIE 7.")),
        (t.isIE8 = -1 !== n.indexOf("MSIE 8.")),
        (t.isLowIE = t.isIE7 || t.isIE8),
        (t.isAndroid = /android/gi.test(n)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
        (t.supportsTransition = S()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (o = e(document)),
        (t.popupsCache = {});
    },
    open: function (n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        (t.items = n.items.toArray()), (t.index = 0);
        var s,
          l = n.items;
        for (r = 0; l.length > r; r++)
          if (((s = l[r]), s.parsed && (s = s.el[0]), s === n.el[0])) {
            t.index = r;
            break;
          }
      } else
        (t.items = e.isArray(n.items) ? n.items : [n.items]),
          (t.index = n.index || 0);
      if (t.isOpen) return t.updateItemHTML(), void 0;
      (t.types = []),
        (a = ""),
        (t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o),
        n.key
          ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            (t.currTemplate = t.popupsCache[n.key]))
          : (t.currTemplate = {}),
        (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
        (t.fixedContentPos =
          "auto" === t.st.fixedContentPos
            ? !t.probablyMobile
            : t.st.fixedContentPos),
        t.st.modal &&
          ((t.st.closeOnContentClick = !1),
          (t.st.closeOnBgClick = !1),
          (t.st.showCloseBtn = !1),
          (t.st.enableEscapeKey = !1)),
        t.bgOverlay ||
          ((t.bgOverlay = k("bg").on("click" + h, function () {
            t.close();
          })),
          (t.wrap = k("wrap")
            .attr("tabindex", -1)
            .on("click" + h, function (e) {
              t._checkIfClose(e.target) && t.close();
            })),
          (t.container = k("container", t.wrap))),
        (t.contentContainer = k("content")),
        t.st.preloader &&
          (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        (d = d.charAt(0).toUpperCase() + d.slice(1)), t["init" + d].call(t);
      }
      T("BeforeOpen"),
        t.st.showCloseBtn &&
          (t.st.closeBtnInside
            ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type);
              }),
              (a += " mfp-close-btn-in"))
            : t.wrap.append(E())),
        t.st.alignTop && (a += " mfp-align-top"),
        t.fixedContentPos
          ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY,
            })
          : t.wrap.css({ top: I.scrollTop(), position: "absolute" }),
        (t.st.fixedBgPos === !1 ||
          ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
          t.bgOverlay.css({ height: o.height(), position: "absolute" }),
        t.st.enableEscapeKey &&
          o.on("keyup" + h, function (e) {
            27 === e.keyCode && t.close();
          }),
        I.on("resize" + h, function () {
          t.updateSize();
        }),
        t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
        a && t.wrap.addClass(a);
      var u = (t.wH = I.height()),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g);
      }
      t.fixedContentPos &&
        (t.isIE7
          ? e("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var C = t.st.mainClass;
      return (
        t.isIE7 && (C += " mfp-ie7"),
        C && t._addClassToMFP(C),
        t.updateItemHTML(),
        T("BuildControls"),
        e("html").css(m),
        t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
        (t._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          t.content
            ? (t._addClassToMFP(v), t._setFocus())
            : t.bgOverlay.addClass(v),
            o.on("focusin" + h, t._onFocusIn);
        }, 16),
        (t.isOpen = !0),
        t.updateSize(u),
        T(f),
        n
      );
    },
    close: function () {
      t.isOpen &&
        (T(c),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(C),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      T(l);
      var n = C + " " + v + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (n += t.st.mainClass + " "),
        t._removeClassFromMFP(n),
        t.fixedContentPos)
      ) {
        var i = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (i.overflow = ""),
          e("html").css(i);
      }
      o.off("keyup" + h + " focusin" + h),
        t.ev.off(h),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        T(d);
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), (t.wH = i);
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (
        (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
        (t.currItem = n),
        !t.currTemplate[i])
      ) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), (t.currTemplate[i] = o ? e(o) : !0);
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        n,
        t.currTemplate[i]
      );
      t.appendContent(a, i),
        (n.preloaded = !0),
        T(m, n),
        (r = n.type),
        t.container.prepend(t.contentContainer),
        T("AfterChange");
    },
    appendContent: function (e, n) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0
            ? t.content.find(".mfp-close").length || t.content.append(E())
            : (t.content = e)
          : (t.content = ""),
        T(u),
        t.container.addClass("mfp-" + n + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((i = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; r.length > a; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = i || t.st.type || "inline"),
        (o.index = n),
        (o.parsed = !0),
        (t.items[n] = o),
        T("ElementParse", o),
        t.items[n]
      );
    },
    addGroup: function (e, n) {
      var i = function (i) {
        (i.mfpEl = this), t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      (n.mainEl = e),
        n.items
          ? ((n.isObj = !0), e.off(o).on(o, i))
          : ((n.isObj = !1),
            n.delegate
              ? e.off(o).on(o, n.delegate, i)
              : ((n.items = e), e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      var r =
        void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || (2 !== n.which && !n.ctrlKey && !n.metaKey)) {
        var a =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0;
          } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
          (o.el = e(n.mfpEl)),
          o.delegate && (o.items = i.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n),
          i || "loading" !== e || (i = t.st.tLoading);
        var o = { status: e, text: i };
        T("UpdateStatus", o),
          (e = o.status),
          (i = o.text),
          t.preloader.html(i),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (n = e);
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (
          !t.content ||
          e(n).hasClass("mfp-close") ||
          (t.preloader && n === t.preloader[0])
        )
          return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)),
        T(p, [t, n, i]),
        e.each(n, function (e, n) {
          if (void 0 === n || n === !1) return !0;
          if (((o = e.split("_")), o.length > 1)) {
            var i = t.find(h + "-" + o[0]);
            if (i.length > 0) {
              var r = o[1];
              "replaceWith" === r
                ? i[0] !== n[0] && i.replaceWith(n)
                : "img" === r
                ? i.is("img")
                  ? i.attr("src", n)
                  : i.replaceWith(
                      '<img src="' + n + '" class="' + i.attr("class") + '" />'
                    )
                : i.attr(o[1], n);
            }
          } else t.find(h + "-" + e).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: w.prototype,
      modules: [],
      open: function (t, n) {
        return (
          _(),
          (t = t ? e.extend(!0, {}, t) : {}),
          (t.isObj = !0),
          (t.index = n || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, n) {
        n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (e.fn.magnificPopup = function (n) {
      _();
      var i = e(this);
      if ("string" == typeof n)
        if ("open" === n) {
          var o,
            r = b ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = i), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, i, r);
        } else
          t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (n = e.extend(!0, {}, n)),
          b ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
          t.addGroup(i, n);
      return i;
    });
  var P,
    O,
    z,
    M = "inline",
    B = function () {
      z && (O.after(z.addClass(P)).detach(), (z = null));
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(M),
          x(l + "." + M, function () {
            B();
          });
      },
      getInline: function (n, i) {
        if ((B(), n.src)) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (O || ((P = o.hiddenClass), (O = k(P)), (P = "mfp-" + P)),
              (z = r.after(O).detach().removeClass(P))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (n.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      },
    },
  });
  var F,
    H = "ajax",
    L = function () {
      F && i.removeClass(F);
    },
    A = function () {
      L(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(H),
          (F = t.st.ajax.cursor),
          x(l + "." + H, A),
          x("BeforeChange." + H, A);
      },
      getAjax: function (n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend(
          {
            url: n.src,
            success: function (i, o, r) {
              var a = { data: i, xhr: r };
              T("ParseAjax", a),
                t.appendContent(e(a.data), H),
                (n.finished = !0),
                L(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(v);
                }, 16),
                t.updateStatus("ready"),
                T("AjaxContentAdded");
            },
            error: function () {
              L(),
                (n.finished = n.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", n.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(o)), "";
      },
    },
  });
  var j,
    N = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var e = t.st.image,
          n = ".image";
        t.types.push("image"),
          x(f + n, function () {
            "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
          }),
          x(l + n, function () {
            e.cursor && i.removeClass(e.cursor), I.off("resize" + h);
          }),
          x("Resize" + n, t.resizeImage),
          t.isLowIE && x("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE &&
            (n =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          j && clearInterval(j),
          (e.isCheckingImgSize = !1),
          T("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (r) {
            j && clearInterval(j),
              (j = setInterval(function () {
                return i.naturalWidth > 0
                  ? (t._onImageHasSize(e), void 0)
                  : (n > 200 && clearInterval(j),
                    n++,
                    3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500),
                    void 0);
              }, r));
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          r = function () {
            n &&
              (n.img[0].complete
                ? (n.img.off(".mfploader"),
                  n === t.currItem &&
                    (t._onImageHasSize(n), t.updateStatus("ready")),
                  (n.hasSize = !0),
                  (n.loaded = !0),
                  T("ImageLoadComplete"))
                : (o++, 200 > o ? setTimeout(r, 100) : a()));
          },
          a = function () {
            n &&
              (n.img.off(".mfploader"),
              n === t.currItem &&
                (t._onImageHasSize(n),
                t.updateStatus("error", s.tError.replace("%url%", n.src))),
              (n.hasSize = !0),
              (n.loaded = !0),
              (n.loadError = !0));
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            (n.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = n.src),
            l.is("img") && (n.img = n.img.clone()),
            (c = n.img[0]),
            c.naturalWidth > 0 ? (n.hasSize = !0) : c.width || (n.hasSize = !1);
        }
        return (
          t._parseMarkup(i, { title: N(n), img_replaceWith: n.img }, n),
          t.resizeImage(),
          n.hasSize
            ? (j && clearInterval(j),
              n.loadError
                ? (i.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", n.src)))
                : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
              i)
            : (t.updateStatus("loading"),
              (n.loading = !0),
              n.hasSize ||
                ((n.imgHidden = !0),
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
              i)
        );
      },
    },
  });
  var W,
    R = function () {
      return (
        void 0 === W &&
          (W = void 0 !== document.createElement("p").style.MozTransform),
        W
      );
    };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o,
            r,
            a = n.duration,
            s = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                (e = t._getItemToZoom()),
                !e)
              )
                return d(), void 0;
              (r = s(e)),
                r.css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), T("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            x(c + i, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (((e = t._getItemToZoom()), !e)) return;
                  r = s(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            x(l + i, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return t.currItem.hasSize ? t.currItem.img : !1;
      },
      _getOffset: function (n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r,
        };
        return (
          R()
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function (e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length &&
          (e || (n[0].src = q),
          t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(Z, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(Z),
          x("BeforeChange", function (e, t, n) {
            t !== n && (t === Z ? D() : n === Z && D(!0));
          }),
          x(l + "." + Z, function () {
            D();
          });
      },
      getIframe: function (n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(i, a, n),
          t.updateStatus("ready"),
          i
        );
      },
    },
  });
  var K = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    Y = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return (
          (t.direction = !0),
          n && n.enabled
            ? ((a += " mfp-gallery"),
              x(f + i, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + i, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  o.on("keydown" + i, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              x("UpdateStatus" + i, function (e, n) {
                n.text &&
                  (n.text = Y(n.text, t.currItem.index, t.items.length));
              }),
              x(p + i, function (e, i, o, r) {
                var a = t.items.length;
                o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
              }),
              x("BuildControls" + i, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(y)),
                    a = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(y)),
                    s = r ? "mfpFastClick" : "click";
                  o[s](function () {
                    t.prev();
                  }),
                    a[s](function () {
                      t.next();
                    }),
                    t.isIE7 &&
                      (k("b", o[0], !1, !0),
                      k("a", o[0], !1, !0),
                      k("b", a[0], !1, !0),
                      k("a", a[0], !1, !0)),
                    t.container.append(o.add(a));
                }
              }),
              x(m + i, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              x(l + i, function () {
                o.off(i),
                  t.wrap.off("click" + i),
                  t.arrowLeft &&
                    r &&
                    t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                  (t.arrowRight = t.arrowLeft = null);
              }),
              void 0)
            : !1
        );
      },
      next: function () {
        (t.direction = !0), (t.index = K(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = K(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; (t.direction ? o : i) >= e; e++)
          t._preloadItem(t.index + e);
        for (e = 1; (t.direction ? i : o) >= e; e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (((n = K(n)), !t.items[n].preloaded)) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)),
            T("LazyLoad", i),
            "image" === i.type &&
              (i.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  i.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (i.hasSize = !0), (i.loadError = !0), T("LazyLoadError", i);
                })
                .attr("src", i.src)),
            (i.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          (n = isNaN(n) ? n() : n),
            n > 1 &&
              (x("ImageHasSize." + U, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              x("ElementParse." + U, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
        }
      },
    },
  }),
    (function () {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function () {
          I.off("touchmove" + r + " touchend" + r);
        },
        o = "mfpFastClick",
        r = "." + o;
      (e.fn.mfpFastClick = function (o) {
        return e(this).each(function () {
          var a,
            s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function (e) {
              (u = !1),
                (f = 1),
                (p = e.originalEvent
                  ? e.originalEvent.touches[0]
                  : e.touches[0]),
                (c = p.clientX),
                (d = p.clientY),
                I.on("touchmove" + r, function (e) {
                  (p = e.originalEvent ? e.originalEvent.touches : e.touches),
                    (f = p.length),
                    (p = p[0]),
                    (Math.abs(p.clientX - c) > 10 ||
                      Math.abs(p.clientY - d) > 10) &&
                      ((u = !0), i());
                }).on("touchend" + r, function (e) {
                  i(),
                    u ||
                      f > 1 ||
                      ((a = !0),
                      e.preventDefault(),
                      clearTimeout(l),
                      (l = setTimeout(function () {
                        a = !1;
                      }, t)),
                      o());
                });
            });
          }
          s.on("click" + r, function () {
            a || o();
          });
        });
      }),
        (e.fn.destroyMfpFastClick = function () {
          e(this).off("touchstart" + r + " click" + r),
            n && I.off("touchmove" + r + " touchend" + r);
        });
    })(),
    _();
})(window.jQuery || window.Zepto);
$(document).ready(function () {
  // MagnificPopup
  var magnifPopup = function () {
    $(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  };

  var magnifVideo = function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  };

  // Call the functions
  magnifPopup();
  magnifVideo();
});
(function () {
  "use strict";

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  // Main Menu Superfish
  var mainMenu = function () {
    $("#fh5co-primary-menu").superfish({
      delay: 0,
      animation: {
        opacity: "show",
      },
      speed: "fast",
      cssArrows: true,
      disableHI: true,
    });
  };

  // Parallax
  var parallax = function () {
    if (!isiPad() || !isiPhone()) {
      $(window).stellar();
    }
  };

  // Offcanvas and cloning of the main menu
  var offcanvas = function () {
    var $clone = $("#fh5co-menu-wrap").clone();
    $clone.attr({
      id: "offcanvas-menu",
    });
    $clone.find("> ul").attr({
      class: "",
      id: "",
    });

    $("#fh5co-page").prepend($clone);

    // click the burger
    $(".js-fh5co-nav-toggle").on("click", function () {
      if ($("body").hasClass("fh5co-offcanvas")) {
        $("body").removeClass("fh5co-offcanvas");
      } else {
        $("body").addClass("fh5co-offcanvas");
      }
      // event.preventDefault();
    });

    $("#offcanvas-menu").css("height", $(window).height());

    $(window).resize(function () {
      var w = $(window);

      $("#offcanvas-menu").css("height", w.height());

      if (w.width() > 769) {
        if ($("body").hasClass("fh5co-offcanvas")) {
          $("body").removeClass("fh5co-offcanvas");
        }
      }
    });
  };

  // Click outside of the Mobile Menu
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("fh5co-offcanvas")) {
          $("body").removeClass("fh5co-offcanvas");
        }
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  el.addClass("fadeInUp animated");
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var stickyBanner = function () {
    var $stickyElement = $(".sticky-banner");
    var sticky;
    if ($stickyElement.length) {
      sticky = new Waypoint.Sticky({
        element: $stickyElement[0],
        offset: 0,
      });
    }
  };

  // Set the date we're counting down to
  // var countDownDate = new Date("Dec 28, 2017 15:37:25").getTime();
  var countDownDate = new Date("Oct 28, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
    // + minutes + "Minutes " + seconds + "Seconds ";

    // Display the result in an element with id="demo"
    document.getElementById("days").innerHTML = days + " <small>days</small>";
    document.getElementById("hours").innerHTML =
      hours + " <small>hours</small> ";
    document.getElementById("minutes").innerHTML =
      minutes + " <small>minutes</small> ";
    document.getElementById("seconds").innerHTML =
      seconds + " <small>seconds</small> ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML =
        "The Wedding Ceremony is Over";
    }
  }, 1000);

  // Document on load.

  $(function () {
    mainMenu();
    parallax();
    offcanvas();
    mobileMenuOutsideClick();
    contentWayPoint();
    stickyBanner();
  });
})();

var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
  var myLatlng = new google.maps.LatLng(11.997682, 121.915627);
  // 39.399872
  // -8.224454

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 9,

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

    // How you would like to style the map.
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ hue: "#f49935" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ hue: "#fad959" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ hue: "#a1cdfc" }, { saturation: 30 }, { lightness: 49 }],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var addresses = ["Brooklyn"];

  for (var x = 0; x < addresses.length; x++) {
    $.getJSON(
      "http://maps.googleapis.com/maps/api/geocode/json?address=" +
        addresses[x] +
        "&sensor=false",
      null,
      function (data) {
        var p = data.results[0].geometry.location;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
          position: latlng,
          map: map,
          icon: "images/loc.png",
        });
      }
    );
  }
}
google.maps.event.addDomListener(window, "load", init);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }
  function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }
  function F(a, b) {
    return typeof a === b;
  }
  function G(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function H(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + p.join(d + " ") + d).split(" ");
    return F(b, "string") || F(b, "undefined")
      ? H(e, b)
      : ((e = (a + " " + q.join(d + " ") + d).split(" ")), I(e, b, c));
  }
  function K() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
      return (
        u.list &&
          (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        u
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute("type", (f = a[d])),
            (e = k.type !== "text"),
            e &&
              ((k.value = l),
              (k.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      "textfield" &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e);
        return t;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = { svg: "http://www.w3.org/2000/svg" },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    z = function (b) {
      var c = a.matchMedia || a.msMatchMedia;
      if (c) return c(b).matches;
      var d;
      return (
        y(
          "@media " + b + " { #" + h + " { position: absolute; } }",
          function (b) {
            d =
              (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                "position"
              ] == "absolute";
          }
        ),
        d
      );
    },
    A = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
        var f = d in e;
        return (
          f ||
            (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ""),
              (f = F(e[d], "function")),
              F(e[d], "undefined") || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        );
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    B = {}.hasOwnProperty,
    C;
  !F(B, "undefined") && !F(B.call, "undefined")
    ? (C = function (a, b) {
        return B.call(a, b);
      })
    : (C = function (a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
          };
        return e;
      }),
    (s.flexbox = function () {
      return J("flexWrap");
    }),
    (s.canvas = function () {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }),
    (s.canvastext = function () {
      return (
        !!e.canvas &&
        !!F(b.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (s.webgl = function () {
      return !!a.WebGLRenderingContext;
    }),
    (s.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : y(
              [
                "@media (",
                n.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (s.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (s.postmessage = function () {
      return !!a.postMessage;
    }),
    (s.websqldatabase = function () {
      return !!a.openDatabase;
    }),
    (s.indexedDB = function () {
      return !!J("indexedDB", a);
    }),
    (s.hashchange = function () {
      return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }),
    (s.history = function () {
      return !!a.history && !!history.pushState;
    }),
    (s.draganddrop = function () {
      var a = b.createElement("div");
      return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
    }),
    (s.websockets = function () {
      return "WebSocket" in a || "MozWebSocket" in a;
    }),
    (s.rgba = function () {
      return (
        D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
      );
    }),
    (s.hsla = function () {
      return (
        D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
      );
    }),
    (s.multiplebgs = function () {
      return (
        D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
      );
    }),
    (s.backgroundsize = function () {
      return J("backgroundSize");
    }),
    (s.borderimage = function () {
      return J("borderImage");
    }),
    (s.borderradius = function () {
      return J("borderRadius");
    }),
    (s.boxshadow = function () {
      return J("boxShadow");
    }),
    (s.textshadow = function () {
      return b.createElement("div").style.textShadow === "";
    }),
    (s.opacity = function () {
      return E("opacity:.55"), /^0.55$/.test(j.opacity);
    }),
    (s.cssanimations = function () {
      return J("animationName");
    }),
    (s.csscolumns = function () {
      return J("columnCount");
    }),
    (s.cssgradients = function () {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return (
        D(
          (a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        G(j.backgroundImage, "gradient")
      );
    }),
    (s.cssreflections = function () {
      return J("boxReflect");
    }),
    (s.csstransforms = function () {
      return !!J("transform");
    }),
    (s.csstransforms3d = function () {
      var a = !!J("perspective");
      return (
        a &&
          "webkitPerspective" in g.style &&
          y(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3;
            }
          ),
        a
      );
    }),
    (s.csstransitions = function () {
      return J("transition");
    }),
    (s.fontface = function () {
      var a;
      return (
        y(
          '@font-face {font-family:"font";src:url("https://")}',
          function (c, d) {
            var e = b.getElementById("smodernizr"),
              f = e.sheet || e.styleSheet,
              g = f
                ? f.cssRules && f.cssRules[0]
                  ? f.cssRules[0].cssText
                  : f.cssText || ""
                : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
          }
        ),
        a
      );
    }),
    (s.generatedcontent = function () {
      var a;
      return (
        y(
          [
            "#",
            h,
            "{font:0/0 a}#",
            h,
            ':after{content:"',
            l,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (b) {
            a = b.offsetHeight >= 3;
          }
        ),
        a
      );
    }),
    (s.video = function () {
      var a = b.createElement("video"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.audio = function () {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.localstorage = function () {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.sessionstorage = function () {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.webworkers = function () {
      return !!a.Worker;
    }),
    (s.applicationcache = function () {
      return !!a.applicationCache;
    }),
    (s.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
      );
    }),
    (s.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
      );
    }),
    (s.smil = function () {
      return (
        !!b.createElementNS &&
        /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
      );
    }),
    (s.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
      );
    });
  for (var L in s)
    C(s, L) &&
      ((x = L.toLowerCase()), (e[x] = s[L]()), v.push((e[x] ? "" : "no-") + x));
  return (
    e.input || K(),
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    D(""),
    (i = k = null),
    (function (a, b) {
      function k(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function m(a) {
        var b = i[a[g]];
        return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
      }
      function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return (
          f.cache[a]
            ? (g = f.cache[a].cloneNode())
            : e.test(a)
            ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
            : (g = f.createElem(a)),
          g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        );
      }
      function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function p(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              l()
                .join()
                .replace(/\w+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(r, b.frag));
      }
      function q(a) {
        a || (a = b);
        var c = m(a);
        return (
          r.shivCSS &&
            !f &&
            !c.hasCSS &&
            (c.hasCSS = !!k(
              a,
              "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
            )),
          j || p(a, c),
          a
        );
      }
      var c = a.html5 || {},
        d =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in a),
            (j =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (f = !0), (j = !0);
        }
      })();
      var r = {
        elements:
          c.elements ||
          "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o,
      };
      (a.html5 = r), q(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.mq = z),
    (e.hasEvent = A),
    (e.testProp = function (a) {
      return H([a]);
    }),
    (e.testAllProps = J),
    (e.testStyles = y),
    (e.prefixed = function (a, b, c) {
      return b ? J(a, b, c) : J(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + v.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!(function (a) {
  "use strict";
  a.matchMedia =
    a.matchMedia ||
    (function (a) {
      var b,
        c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement("body"),
        f = a.createElement("div");
      return (
        (f.id = "mq-test-1"),
        (f.style.cssText = "position:absolute;top:-100em"),
        (e.style.background = "none"),
        e.appendChild(f),
        function (a) {
          return (
            (f.innerHTML =
              '&shy;<style media="' +
              a +
              '"> #mq-test-1 { width: 42px; }</style>'),
            c.insertBefore(e, d),
            (b = 42 === f.offsetWidth),
            c.removeChild(e),
            { matches: b, media: a }
          );
        }
      );
    })(a.document);
})(this),
  (function (a) {
    "use strict";
    function b() {
      u(!0);
    }
    var c = {};
    (a.respond = c), (c.update = function () {});
    var d = [],
      e = (function () {
        var b = !1;
        try {
          b = new a.XMLHttpRequest();
        } catch (c) {
          b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
          return b;
        };
      })(),
      f = function (a, b) {
        var c = e();
        c &&
          (c.open("GET", a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText);
          }),
          4 !== c.readyState && c.send(null));
      };
    if (
      ((c.ajax = f),
      (c.queue = d),
      (c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes:
          /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
      }),
      (c.mediaQueriesSupported =
        a.matchMedia &&
        null !== a.matchMedia("only all") &&
        a.matchMedia("only all").matches),
      !c.mediaQueriesSupported)
    ) {
      var g,
        h,
        i,
        j = a.document,
        k = j.documentElement,
        l = [],
        m = [],
        n = [],
        o = {},
        p = 30,
        q = j.getElementsByTagName("head")[0] || k,
        r = j.getElementsByTagName("base")[0],
        s = q.getElementsByTagName("link"),
        t = function () {
          var a,
            b = j.createElement("div"),
            c = j.body,
            d = k.style.fontSize,
            e = c && c.style.fontSize,
            f = !1;
          return (
            (b.style.cssText = "position:absolute;font-size:1em;width:1em"),
            c ||
              ((c = f = j.createElement("body")),
              (c.style.background = "none")),
            (k.style.fontSize = "100%"),
            (c.style.fontSize = "100%"),
            c.appendChild(b),
            f && k.insertBefore(c, k.firstChild),
            (a = b.offsetWidth),
            f ? k.removeChild(c) : c.removeChild(b),
            (k.style.fontSize = d),
            e && (c.style.fontSize = e),
            (a = i = parseFloat(a))
          );
        },
        u = function (b) {
          var c = "clientWidth",
            d = k[c],
            e = ("CSS1Compat" === j.compatMode && d) || j.body[c] || d,
            f = {},
            o = s[s.length - 1],
            r = new Date().getTime();
          if (b && g && p > r - g)
            return a.clearTimeout(h), (h = a.setTimeout(u, p)), void 0;
          g = r;
          for (var v in l)
            if (l.hasOwnProperty(v)) {
              var w = l[v],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = "em";
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)),
                y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)),
                (w.hasquery &&
                  ((z && A) || !(z || e >= x) || !(A || y >= e))) ||
                  (f[w.media] || (f[w.media] = []),
                  f[w.media].push(m[w.rules]));
            }
          for (var C in n)
            n.hasOwnProperty(C) &&
              n[C] &&
              n[C].parentNode === q &&
              q.removeChild(n[C]);
          n.length = 0;
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = j.createElement("style"),
                F = f[D].join("\n");
              (E.type = "text/css"),
                (E.media = D),
                q.insertBefore(E, o.nextSibling),
                E.styleSheet
                  ? (E.styleSheet.cssText = F)
                  : E.appendChild(j.createTextNode(F)),
                n.push(E);
            }
        },
        v = function (a, b, d) {
          var e = a.replace(c.regex.keyframes, "").match(c.regex.media),
            f = (e && e.length) || 0;
          b = b.substring(0, b.lastIndexOf("/"));
          var g = function (a) {
              return a.replace(c.regex.urls, "$1" + b + "$2$3");
            },
            h = !f && d;
          b.length && (b += "/"), h && (f = 1);
          for (var i = 0; f > i; i++) {
            var j, k, n, o;
            h
              ? ((j = d), m.push(g(a)))
              : ((j = e[i].match(c.regex.findStyles) && RegExp.$1),
                m.push(RegExp.$2 && g(RegExp.$2))),
              (n = j.split(",")),
              (o = n.length);
            for (var p = 0; o > p; p++)
              (k = n[p]),
                l.push({
                  media:
                    (k.split("(")[0].match(c.regex.only) && RegExp.$2) || "all",
                  rules: m.length - 1,
                  hasquery: k.indexOf("(") > -1,
                  minw:
                    k.match(c.regex.minw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                  maxw:
                    k.match(c.regex.maxw) &&
                    parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                });
          }
          u();
        },
        w = function () {
          if (d.length) {
            var b = d.shift();
            f(b.href, function (c) {
              v(c, b.href, b.media),
                (o[b.href] = !0),
                a.setTimeout(function () {
                  w();
                }, 0);
            });
          }
        },
        x = function () {
          for (var b = 0; b < s.length; b++) {
            var c = s[b],
              e = c.href,
              f = c.media,
              g = c.rel && "stylesheet" === c.rel.toLowerCase();
            e &&
              g &&
              !o[e] &&
              (c.styleSheet && c.styleSheet.rawCssText
                ? (v(c.styleSheet.rawCssText, e, f), (o[e] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(e) && !r) ||
                    e.replace(RegExp.$1, "").split("/")[0] ===
                      a.location.host) &&
                  ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                  d.push({ href: e, media: f })));
          }
          w();
        };
      x(),
        (c.update = x),
        (c.getEmValue = t),
        a.addEventListener
          ? a.addEventListener("resize", b, !1)
          : a.attachEvent && a.attachEvent("onresize", b);
    }
  })(this);
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = l.createElement("script")),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(ba, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener("unload", ea, !1)
                  : e.attachEvent && e.attachEvent("onunload", ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(g.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !g.getElementsByName || !g.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  var b = g.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f)
                      return a === g
                        ? -1
                        : b === g
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? la(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 &&
                ra(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
    });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        "complete" === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = L.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return typeof n !== U && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(E) || [""]),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var aa =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ia.optgroup = ia.option),
    (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
    (ia.th = ia.td);
  function ja(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function ka(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function la(a) {
    var b = ga.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function oa(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
          pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
            na(f[d], g[d]);
        else na(a, h);
      return (
        (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || 0 === e))
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
            (f = f || k.appendChild(b.createElement("div"))),
              (g = (ba.exec(e) || ["", ""])[1].toLowerCase()),
              (h = ia[g] || ia._default),
              (f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
          } else l.push(b.createTextNode(e));
      (k.textContent = ""), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = oa(k.appendChild(e), "script")),
          i && ma(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fa.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(oa(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !da.test(a) &&
              !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(aa, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(oa(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fa.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(ha, "")));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qa,
    ra = {};
  function sa(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function ta(a) {
    var b = l,
      c = ra[a];
    return (
      c ||
        ((c = sa(a, b)),
        ("none" !== c && c) ||
          ((qa = (
            qa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qa[0].contentDocument),
          b.write(),
          b.close(),
          (c = sa(a, b)),
          qa.detach()),
        (ra[a] = c)),
      c
    );
  }
  var ua = /^margin/,
    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wa(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) &&
          ua.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function ya(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
        (e.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (f.innerHTML = ""),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
    Ca = { position: "absolute", visibility: "hidden", display: "block" },
    Da = { letterSpacing: "0", fontWeight: "400" },
    Ea = ["Webkit", "O", "Moz", "ms"];
  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--) if (((b = Ea[e] + c), b in a)) return b;
    return d;
  }
  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Ha(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ia(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        va.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", ta(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
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
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ba.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xa(a, b, d)),
        "normal" === e && b in Da && (e = Da[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? za.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Ca, function () {
                  return Ia(a, b, d);
                })
              : Ia(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wa(a);
          return Ga(
            a,
            c,
            d
              ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0
          );
        },
      };
    }),
    (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wa(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Ja(this, !0);
      },
      hide: function () {
        return Ja(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ka),
    (Ka.prototype = {
      constructor: Ka,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ka.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ka.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ka.prototype.init.prototype = Ka.prototype),
    (Ka.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Ka.prototype.init),
    (n.fx.step = {});
  var La,
    Ma,
    Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function Sa() {
    return (
      setTimeout(function () {
        La = void 0;
      }),
      (La = n.now())
    );
  }
  function Ta(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ua(a, b, c) {
    for (
      var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Va(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Na.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ua(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xa(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qa.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = La || Sa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qa[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ua, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Ta(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (La = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Ma), (Ma = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Ya,
    Za,
    $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Za = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $a[b] || n.find.attr;
      $a[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $a[b]),
            ($a[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($a[b] = f)),
          e
        );
      };
    });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cb = n.now(),
    db = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = "*/".concat("*"),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];
  function qb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function sb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || ob) + "")
          .replace(eb, "")
          .replace(jb, pb[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((h = kb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pb[1] &&
              h[2] === pb[2] &&
              (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                (pb[3] || ("http:" === pb[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        rb(lb, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ib.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fb.test(d)
              ? d.replace(fb, "$1_=" + cb++)
              : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
          n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rb(mb, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tb(k, v, f)),
          (u = ub(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[d] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bb = 0,
    Cb = {},
    Db = { 0: 200, 1223: 204 },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Cb) Cb[a]();
    }),
    (k.cors = !!Eb && "withCredentials" in Eb),
    (k.ajax = Eb = !!Eb),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Eb && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Bb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Cb[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Db[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Cb[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Gb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Hb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Ib = a.document.documentElement;
  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Jb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || Ib;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Ib;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
          return J(
            this,
            function (b, e, f) {
              var g = Jb(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
        return c
          ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return J(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Kb = a.jQuery,
    Lb = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});
//# sourceMappingURL=jquery.min.map
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"] = jQuery.easing["swing"];

jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)
      ) + b
    );
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    if (t < 1)
      return (
        -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
        b
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
        0.5 +
      c +
      b
    );
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1)
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2)
      return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
    return (
      jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    );
  },
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.5"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.5"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              a(c.target).is('input[type="radio"]') ||
                a(c.target).is('input[type="checkbox"]') ||
                c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.5"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger("hidden.bs.dropdown", f))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.5"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              (c.hoverState = "out"),
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                  }, c.options.delay.hide))
                : c.hide())
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.5"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.5"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.5"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.5"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
(function () {
  "use strict";

  var $ = window.jQuery;
  var Waypoint = window.Waypoint;

  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options);
    this.element = this.options.element;
    this.$element = $(this.element);
    this.createWrapper();
    this.createWaypoint();
  }

  /* Private */
  Sticky.prototype.createWaypoint = function () {
    var originalHandler = this.options.handler;

    this.waypoint = new Waypoint(
      $.extend({}, this.options, {
        element: this.wrapper,
        handler: $.proxy(function (direction) {
          var shouldBeStuck = this.options.direction.indexOf(direction) > -1;
          var wrapperHeight = shouldBeStuck
            ? this.$element.outerHeight(true)
            : "";

          this.$wrapper.height(wrapperHeight);
          this.$element.toggleClass(this.options.stuckClass, shouldBeStuck);

          if (originalHandler) {
            originalHandler.call(this, direction);
          }
        }, this),
      })
    );
  };

  /* Private */
  Sticky.prototype.createWrapper = function () {
    if (this.options.wrapper) {
      this.$element.wrap(this.options.wrapper);
    }
    this.$wrapper = this.$element.parent();
    this.wrapper = this.$wrapper[0];
  };

  /* Public */
  Sticky.prototype.destroy = function () {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy();
      this.$element.removeClass(this.options.stuckClass);
      if (this.options.wrapper) {
        this.$element.unwrap();
      }
    }
  };

  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: "stuck",
    direction: "down right",
  };

  Waypoint.Sticky = Sticky;
})();

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide();
      },
      showElement: function (a) {
        a.show();
      },
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft();
        },
        setLeft: function (a, b) {
          a.scrollLeft(b);
        },
        getTop: function (a) {
          return a.scrollTop();
        },
        setTop: function (a, b) {
          a.scrollTop(b);
        },
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b);
        },
        setTop: function (a, b) {
          a.css("top", b);
        },
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        },
      },
    },
    j = (function () {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d,
    m = l
      ? function (a, b, c) {
          a.css({ "background-position-x": b, "background-position-y": c });
        }
      : function (a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function () {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function (a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function (a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function () {
          c.refresh();
        }),
        d.bind("resize." + this.name, function () {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          a(b).load(function () {
            var a = d._getScrollLeft(),
              b = d._getScrollTop();
            d._setScrollLeft(a + 1),
              d._setScrollTop(b + 1),
              d._setScrollLeft(a),
              d._setScrollTop(b);
          }),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = b ? a.top : 0),
        (this.viewportOffsetLeft = b ? a.left : 0);
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function () {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = a(this),
              n = 0,
              o = 0,
              p = 0,
              q = 0;
            if (m.data("stellar-elementIsActive")) {
              if (m.data("stellar-elementIsActive") !== this) return;
            } else m.data("stellar-elementIsActive", this);
            b.options.showElement(m),
              m.data("stellar-startingLeft")
                ? (m.css("left", m.data("stellar-startingLeft")),
                  m.css("top", m.data("stellar-startingTop")))
                : (m.data("stellar-startingLeft", m.css("left")),
                  m.data("stellar-startingTop", m.css("top"))),
              (f = m.position().left),
              (g = m.position().top),
              (h =
                "auto" === m.css("margin-left")
                  ? 0
                  : parseInt(m.css("margin-left"), 10)),
              (i =
                "auto" === m.css("margin-top")
                  ? 0
                  : parseInt(m.css("margin-top"), 10)),
              (k = m.offset().left - h),
              (l = m.offset().top - i),
              m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((n = p), (o = q), (j = b), !1)
                  : ((p += b.position().left), void (q += b.position().top));
              }),
              (c =
                m.data("stellar-horizontal-offset") !== d
                  ? m.data("stellar-horizontal-offset")
                  : j !== d && j.data("stellar-horizontal-offset") !== d
                  ? j.data("stellar-horizontal-offset")
                  : b.horizontalOffset),
              (e =
                m.data("stellar-vertical-offset") !== d
                  ? m.data("stellar-vertical-offset")
                  : j !== d && j.data("stellar-vertical-offset") !== d
                  ? j.data("stellar-vertical-offset")
                  : b.verticalOffset),
              b.particles.push({
                $element: m,
                $offsetParent: j,
                isFixed: "fixed" === m.css("position"),
                horizontalOffset: c,
                verticalOffset: e,
                startingPositionLeft: f,
                startingPositionTop: g,
                startingOffsetLeft: k,
                startingOffsetTop: l,
                parentOffsetLeft: n,
                parentOffsetTop: o,
                stellarRatio:
                  m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                isHidden: !1,
              });
          });
    },
    _findBackgrounds: function () {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function () {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((q = s), (r = t), (l = b), !1)
                  : ((s += b.position().left), void (t += b.position().top));
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                  ? l.data("stellar-horizontal-offset")
                  : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                  ? l.data("stellar-vertical-offset")
                  : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function () {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function () {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), (b = !1);
        },
        d = function () {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function () {
      var a = this;
      (this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (a.fn[f] = function (b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function () {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
        ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e &&
              "function" == typeof d[b] &&
              d[b].apply(d, Array.prototype.slice.call(c, 1)),
              "destroy" === b && a.data(this, "plugin_" + f, null);
          })
        : void 0;
    }),
    (a[f] = function () {
      var c = a(b);
      return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);
/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function ($) {
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    // default configuration values
    var cfg = {
      interval: 100,
      sensitivity: 7,
      timeout: 0,
    };

    if (typeof handlerIn === "object") {
      cfg = $.extend(cfg, handlerIn);
    } else if ($.isFunction(handlerOut)) {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerOut,
        selector: selector,
      });
    } else {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerIn,
        selector: handlerOut,
      });
    }

    // instantiate variables
    // cX, cY = current X and Y position of mouse, updated by mousemove event
    // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
    var cX, cY, pX, pY;

    // A private function for getting mouse position
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };

    // A private function for comparing current and previous mouse position
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      // compare mouse positions to see if they've crossed the threshold
      if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
        $(ob).off("mousemove.hoverIntent", track);
        // set hoverIntent state to true (so mouseOut can be called)
        ob.hoverIntent_s = 1;
        return cfg.over.apply(ob, [ev]);
      } else {
        // set previous coordinates for next time
        pX = cX;
        pY = cY;
        // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob);
        }, cfg.interval);
      }
    };

    // A private function for delaying the mouseOut function
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = 0;
      return cfg.out.apply(ob, [ev]);
    };

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // copy objects to be passed into t (required for event object to be passed in IE)
      var ev = jQuery.extend({}, e);
      var ob = this;

      // cancel hoverIntent timer if it exists
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      }

      // if e.type == "mouseenter"
      if (e.type == "mouseenter") {
        // set "previous" X and Y position based on initial entry point
        pX = ev.pageX;
        pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $(ob).on("mousemove.hoverIntent", track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        if (ob.hoverIntent_s != 1) {
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
        }

        // else e.type == "mouseleave"
      } else {
        // unbind expensive mousemove event
        $(ob).off("mousemove.hoverIntent", track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        if (ob.hoverIntent_s == 1) {
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob);
          }, cfg.timeout);
        }
      }
    };

    // listen for mouseenter and mouseleave
    return this.on(
      {
        "mouseenter.hoverIntent": handleHover,
        "mouseleave.hoverIntent": handleHover,
      },
      cfg.selector
    );
  };
})(jQuery);
/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($, w) {
  "use strict";

  var methods = (function () {
    // private properties and methods go here
    var c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows",
      },
      ios = (function () {
        var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (ios) {
          // iOS clicks only bubble as far as body children
          $(w).load(function () {
            $("body").children().on("click", $.noop);
          });
        }
        return ios;
      })(),
      wp7 = (function () {
        var style = document.documentElement.style;
        return (
          "behavior" in style &&
          "fill" in style &&
          /iemobile/i.test(navigator.userAgent)
        );
      })(),
      unprefixedPointerEvents = (function () {
        return !!w.PointerEvent;
      })(),
      toggleMenuClasses = function ($menu, o) {
        var classes = c.menuClass;
        if (o.cssArrows) {
          classes += " " + c.menuArrowClass;
        }
        $menu.toggleClass(classes);
      },
      setPathToCurrent = function ($menu, o) {
        return $menu
          .find("li." + o.pathClass)
          .slice(0, o.pathLevels)
          .addClass(o.hoverClass + " " + c.bcClass)
          .filter(function () {
            return $(this).children(o.popUpSelector).hide().show().length;
          })
          .removeClass(o.pathClass);
      },
      toggleAnchorClass = function ($li) {
        $li.children("a").toggleClass(c.anchorClass);
      },
      toggleTouchAction = function ($menu) {
        var msTouchAction = $menu.css("ms-touch-action");
        var touchAction = $menu.css("touch-action");
        touchAction = touchAction || msTouchAction;
        touchAction = touchAction === "pan-y" ? "auto" : "pan-y";
        $menu.css({
          "ms-touch-action": touchAction,
          "touch-action": touchAction,
        });
      },
      applyHandlers = function ($menu, o) {
        var targets = "li:has(" + o.popUpSelector + ")";
        if ($.fn.hoverIntent && !o.disableHI) {
          $menu.hoverIntent(over, out, targets);
        } else {
          $menu
            .on("mouseenter.superfish", targets, over)
            .on("mouseleave.superfish", targets, out);
        }
        var touchevent = "MSPointerDown.superfish";
        if (unprefixedPointerEvents) {
          touchevent = "pointerdown.superfish";
        }
        if (!ios) {
          touchevent += " touchend.superfish";
        }
        if (wp7) {
          touchevent += " mousedown.superfish";
        }
        $menu
          .on("focusin.superfish", "li", over)
          .on("focusout.superfish", "li", out)
          .on(touchevent, "a", o, touchHandler);
      },
      touchHandler = function (e) {
        var $this = $(this),
          $ul = $this.siblings(e.data.popUpSelector);

        if ($ul.length > 0 && $ul.is(":hidden")) {
          $this.one("click.superfish", false);
          if (e.type === "MSPointerDown" || e.type === "pointerdown") {
            $this.trigger("focus");
          } else {
            $.proxy(over, $this.parent("li"))();
          }
        }
      },
      over = function () {
        var $this = $(this),
          o = getOptions($this);
        clearTimeout(o.sfTimer);
        $this.siblings().superfish("hide").end().superfish("show");
      },
      out = function () {
        var $this = $(this),
          o = getOptions($this);
        if (ios) {
          $.proxy(close, $this, o)();
        } else {
          clearTimeout(o.sfTimer);
          o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
        }
      },
      close = function (o) {
        o.retainPath = $.inArray(this[0], o.$path) > -1;
        this.superfish("hide");

        if (!this.parents("." + o.hoverClass).length) {
          o.onIdle.call(getMenu(this));
          if (o.$path.length) {
            $.proxy(over, o.$path)();
          }
        }
      },
      getMenu = function ($el) {
        return $el.closest("." + c.menuClass);
      },
      getOptions = function ($el) {
        return getMenu($el).data("sf-options");
      };

    return {
      // public methods
      hide: function (instant) {
        if (this.length) {
          var $this = this,
            o = getOptions($this);
          if (!o) {
            return this;
          }
          var not = o.retainPath === true ? o.$path : "",
            $ul = $this
              .find("li." + o.hoverClass)
              .add(this)
              .not(not)
              .removeClass(o.hoverClass)
              .children(o.popUpSelector),
            speed = o.speedOut;

          if (instant) {
            $ul.show();
            speed = 0;
          }
          o.retainPath = false;
          o.onBeforeHide.call($ul);
          $ul.stop(true, true).animate(o.animationOut, speed, function () {
            var $this = $(this);
            o.onHide.call($this);
          });
        }
        return this;
      },
      show: function () {
        var o = getOptions(this);
        if (!o) {
          return this;
        }
        var $this = this.addClass(o.hoverClass),
          $ul = $this.children(o.popUpSelector);

        o.onBeforeShow.call($ul);
        $ul.stop(true, true).animate(o.animation, o.speed, function () {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function () {
        return this.each(function () {
          var $this = $(this),
            o = $this.data("sf-options"),
            $hasPopUp;
          if (!o) {
            return false;
          }
          $hasPopUp = $this.find(o.popUpSelector).parent("li");
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          // remove event handlers
          $this.off(".superfish").off(".hoverIntent");
          // clear animation's inline display style
          $hasPopUp
            .children(o.popUpSelector)
            .attr("style", function (i, style) {
              return style.replace(/display[^;]+;?/g, "");
            });
          // reset 'current' path classes
          o.$path
            .removeClass(o.hoverClass + " " + c.bcClass)
            .addClass(o.pathClass);
          $this.find("." + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData("sf-options");
        });
      },
      init: function (op) {
        return this.each(function () {
          var $this = $(this);
          if ($this.data("sf-options")) {
            return false;
          }
          var o = $.extend({}, $.fn.superfish.defaults, op),
            $hasPopUp = $this.find(o.popUpSelector).parent("li");
          o.$path = setPathToCurrent($this, o);

          $this.data("sf-options", o);

          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);

          $hasPopUp.not("." + c.bcClass).superfish("hide", true);

          o.onInit.call(this);
        });
      },
    };
  })();

  $.fn.superfish = function (method, args) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error(
        "Method " + method + " does not exist on jQuery.fn.superfish"
      );
    }
  };

  $.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega", // within menu context
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: { opacity: "show" },
    animationOut: { opacity: "hide" },
    speed: "normal",
    speedOut: "fast",
    cssArrows: true,
    disableHI: false,
    onInit: $.noop,
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop,
    onDestroy: $.noop,
  };
})(jQuery, window);

/*! Magnific Popup - v0.9.9 - 2014-09-06
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2014 Dmitry Semenov; */
(function (e) {
  var t,
    n,
    i,
    o,
    r,
    a,
    s,
    l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function () {},
    b = !!window.jQuery,
    I = e(window),
    x = function (e, n) {
      t.ev.on(g + e + h, n);
    },
    k = function (t, n, i, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
        r
      );
    },
    T = function (n, i) {
      t.ev.triggerHandler(g + n, i),
        t.st.callbacks &&
          ((n = n.charAt(0).toLowerCase() + n.slice(1)),
          t.st.callbacks[n] &&
            t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    E = function (n) {
      return (
        (n === s && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (s = n)),
        t.currTemplate.closeBtn
      );
    },
    _ = function () {
      e.magnificPopup.instance ||
        ((t = new w()), t.init(), (e.magnificPopup.instance = t));
    },
    S = function () {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
      return !1;
    };
  (w.prototype = {
    constructor: w,
    init: function () {
      var n = navigator.appVersion;
      (t.isIE7 = -1 !== n.indexOf("MSIE 7.")),
        (t.isIE8 = -1 !== n.indexOf("MSIE 8.")),
        (t.isLowIE = t.isIE7 || t.isIE8),
        (t.isAndroid = /android/gi.test(n)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
        (t.supportsTransition = S()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (o = e(document)),
        (t.popupsCache = {});
    },
    open: function (n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        (t.items = n.items.toArray()), (t.index = 0);
        var s,
          l = n.items;
        for (r = 0; l.length > r; r++)
          if (((s = l[r]), s.parsed && (s = s.el[0]), s === n.el[0])) {
            t.index = r;
            break;
          }
      } else
        (t.items = e.isArray(n.items) ? n.items : [n.items]),
          (t.index = n.index || 0);
      if (t.isOpen) return t.updateItemHTML(), void 0;
      (t.types = []),
        (a = ""),
        (t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o),
        n.key
          ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            (t.currTemplate = t.popupsCache[n.key]))
          : (t.currTemplate = {}),
        (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
        (t.fixedContentPos =
          "auto" === t.st.fixedContentPos
            ? !t.probablyMobile
            : t.st.fixedContentPos),
        t.st.modal &&
          ((t.st.closeOnContentClick = !1),
          (t.st.closeOnBgClick = !1),
          (t.st.showCloseBtn = !1),
          (t.st.enableEscapeKey = !1)),
        t.bgOverlay ||
          ((t.bgOverlay = k("bg").on("click" + h, function () {
            t.close();
          })),
          (t.wrap = k("wrap")
            .attr("tabindex", -1)
            .on("click" + h, function (e) {
              t._checkIfClose(e.target) && t.close();
            })),
          (t.container = k("container", t.wrap))),
        (t.contentContainer = k("content")),
        t.st.preloader &&
          (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        (d = d.charAt(0).toUpperCase() + d.slice(1)), t["init" + d].call(t);
      }
      T("BeforeOpen"),
        t.st.showCloseBtn &&
          (t.st.closeBtnInside
            ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type);
              }),
              (a += " mfp-close-btn-in"))
            : t.wrap.append(E())),
        t.st.alignTop && (a += " mfp-align-top"),
        t.fixedContentPos
          ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY,
            })
          : t.wrap.css({ top: I.scrollTop(), position: "absolute" }),
        (t.st.fixedBgPos === !1 ||
          ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
          t.bgOverlay.css({ height: o.height(), position: "absolute" }),
        t.st.enableEscapeKey &&
          o.on("keyup" + h, function (e) {
            27 === e.keyCode && t.close();
          }),
        I.on("resize" + h, function () {
          t.updateSize();
        }),
        t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
        a && t.wrap.addClass(a);
      var u = (t.wH = I.height()),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g);
      }
      t.fixedContentPos &&
        (t.isIE7
          ? e("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var C = t.st.mainClass;
      return (
        t.isIE7 && (C += " mfp-ie7"),
        C && t._addClassToMFP(C),
        t.updateItemHTML(),
        T("BuildControls"),
        e("html").css(m),
        t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
        (t._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          t.content
            ? (t._addClassToMFP(v), t._setFocus())
            : t.bgOverlay.addClass(v),
            o.on("focusin" + h, t._onFocusIn);
        }, 16),
        (t.isOpen = !0),
        t.updateSize(u),
        T(f),
        n
      );
    },
    close: function () {
      t.isOpen &&
        (T(c),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(C),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      T(l);
      var n = C + " " + v + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (n += t.st.mainClass + " "),
        t._removeClassFromMFP(n),
        t.fixedContentPos)
      ) {
        var i = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (i.overflow = ""),
          e("html").css(i);
      }
      o.off("keyup" + h + " focusin" + h),
        t.ev.off(h),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        T(d);
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), (t.wH = i);
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (
        (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
        (t.currItem = n),
        !t.currTemplate[i])
      ) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), (t.currTemplate[i] = o ? e(o) : !0);
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        n,
        t.currTemplate[i]
      );
      t.appendContent(a, i),
        (n.preloaded = !0),
        T(m, n),
        (r = n.type),
        t.container.prepend(t.contentContainer),
        T("AfterChange");
    },
    appendContent: function (e, n) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0
            ? t.content.find(".mfp-close").length || t.content.append(E())
            : (t.content = e)
          : (t.content = ""),
        T(u),
        t.container.addClass("mfp-" + n + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((i = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; r.length > a; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = i || t.st.type || "inline"),
        (o.index = n),
        (o.parsed = !0),
        (t.items[n] = o),
        T("ElementParse", o),
        t.items[n]
      );
    },
    addGroup: function (e, n) {
      var i = function (i) {
        (i.mfpEl = this), t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      (n.mainEl = e),
        n.items
          ? ((n.isObj = !0), e.off(o).on(o, i))
          : ((n.isObj = !1),
            n.delegate
              ? e.off(o).on(o, n.delegate, i)
              : ((n.items = e), e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      var r =
        void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || (2 !== n.which && !n.ctrlKey && !n.metaKey)) {
        var a =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0;
          } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
          (o.el = e(n.mfpEl)),
          o.delegate && (o.items = i.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n),
          i || "loading" !== e || (i = t.st.tLoading);
        var o = { status: e, text: i };
        T("UpdateStatus", o),
          (e = o.status),
          (i = o.text),
          t.preloader.html(i),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (n = e);
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (
          !t.content ||
          e(n).hasClass("mfp-close") ||
          (t.preloader && n === t.preloader[0])
        )
          return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)),
        T(p, [t, n, i]),
        e.each(n, function (e, n) {
          if (void 0 === n || n === !1) return !0;
          if (((o = e.split("_")), o.length > 1)) {
            var i = t.find(h + "-" + o[0]);
            if (i.length > 0) {
              var r = o[1];
              "replaceWith" === r
                ? i[0] !== n[0] && i.replaceWith(n)
                : "img" === r
                ? i.is("img")
                  ? i.attr("src", n)
                  : i.replaceWith(
                      '<img src="' + n + '" class="' + i.attr("class") + '" />'
                    )
                : i.attr(o[1], n);
            }
          } else t.find(h + "-" + e).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: w.prototype,
      modules: [],
      open: function (t, n) {
        return (
          _(),
          (t = t ? e.extend(!0, {}, t) : {}),
          (t.isObj = !0),
          (t.index = n || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, n) {
        n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (e.fn.magnificPopup = function (n) {
      _();
      var i = e(this);
      if ("string" == typeof n)
        if ("open" === n) {
          var o,
            r = b ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = i), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, i, r);
        } else
          t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (n = e.extend(!0, {}, n)),
          b ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
          t.addGroup(i, n);
      return i;
    });
  var P,
    O,
    z,
    M = "inline",
    B = function () {
      z && (O.after(z.addClass(P)).detach(), (z = null));
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(M),
          x(l + "." + M, function () {
            B();
          });
      },
      getInline: function (n, i) {
        if ((B(), n.src)) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (O || ((P = o.hiddenClass), (O = k(P)), (P = "mfp-" + P)),
              (z = r.after(O).detach().removeClass(P))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (n.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      },
    },
  });
  var F,
    H = "ajax",
    L = function () {
      F && i.removeClass(F);
    },
    A = function () {
      L(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(H),
          (F = t.st.ajax.cursor),
          x(l + "." + H, A),
          x("BeforeChange." + H, A);
      },
      getAjax: function (n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend(
          {
            url: n.src,
            success: function (i, o, r) {
              var a = { data: i, xhr: r };
              T("ParseAjax", a),
                t.appendContent(e(a.data), H),
                (n.finished = !0),
                L(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(v);
                }, 16),
                t.updateStatus("ready"),
                T("AjaxContentAdded");
            },
            error: function () {
              L(),
                (n.finished = n.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", n.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(o)), "";
      },
    },
  });
  var j,
    N = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var e = t.st.image,
          n = ".image";
        t.types.push("image"),
          x(f + n, function () {
            "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
          }),
          x(l + n, function () {
            e.cursor && i.removeClass(e.cursor), I.off("resize" + h);
          }),
          x("Resize" + n, t.resizeImage),
          t.isLowIE && x("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE &&
            (n =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          j && clearInterval(j),
          (e.isCheckingImgSize = !1),
          T("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (r) {
            j && clearInterval(j),
              (j = setInterval(function () {
                return i.naturalWidth > 0
                  ? (t._onImageHasSize(e), void 0)
                  : (n > 200 && clearInterval(j),
                    n++,
                    3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500),
                    void 0);
              }, r));
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          r = function () {
            n &&
              (n.img[0].complete
                ? (n.img.off(".mfploader"),
                  n === t.currItem &&
                    (t._onImageHasSize(n), t.updateStatus("ready")),
                  (n.hasSize = !0),
                  (n.loaded = !0),
                  T("ImageLoadComplete"))
                : (o++, 200 > o ? setTimeout(r, 100) : a()));
          },
          a = function () {
            n &&
              (n.img.off(".mfploader"),
              n === t.currItem &&
                (t._onImageHasSize(n),
                t.updateStatus("error", s.tError.replace("%url%", n.src))),
              (n.hasSize = !0),
              (n.loaded = !0),
              (n.loadError = !0));
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            (n.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = n.src),
            l.is("img") && (n.img = n.img.clone()),
            (c = n.img[0]),
            c.naturalWidth > 0 ? (n.hasSize = !0) : c.width || (n.hasSize = !1);
        }
        return (
          t._parseMarkup(i, { title: N(n), img_replaceWith: n.img }, n),
          t.resizeImage(),
          n.hasSize
            ? (j && clearInterval(j),
              n.loadError
                ? (i.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", n.src)))
                : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
              i)
            : (t.updateStatus("loading"),
              (n.loading = !0),
              n.hasSize ||
                ((n.imgHidden = !0),
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
              i)
        );
      },
    },
  });
  var W,
    R = function () {
      return (
        void 0 === W &&
          (W = void 0 !== document.createElement("p").style.MozTransform),
        W
      );
    };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o,
            r,
            a = n.duration,
            s = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                (e = t._getItemToZoom()),
                !e)
              )
                return d(), void 0;
              (r = s(e)),
                r.css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), T("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            x(c + i, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (((e = t._getItemToZoom()), !e)) return;
                  r = s(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            x(l + i, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return t.currItem.hasSize ? t.currItem.img : !1;
      },
      _getOffset: function (n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r,
        };
        return (
          R()
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function (e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length &&
          (e || (n[0].src = q),
          t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(Z, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(Z),
          x("BeforeChange", function (e, t, n) {
            t !== n && (t === Z ? D() : n === Z && D(!0));
          }),
          x(l + "." + Z, function () {
            D();
          });
      },
      getIframe: function (n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(i, a, n),
          t.updateStatus("ready"),
          i
        );
      },
    },
  });
  var K = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    Y = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return (
          (t.direction = !0),
          n && n.enabled
            ? ((a += " mfp-gallery"),
              x(f + i, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + i, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  o.on("keydown" + i, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              x("UpdateStatus" + i, function (e, n) {
                n.text &&
                  (n.text = Y(n.text, t.currItem.index, t.items.length));
              }),
              x(p + i, function (e, i, o, r) {
                var a = t.items.length;
                o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
              }),
              x("BuildControls" + i, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(y)),
                    a = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(y)),
                    s = r ? "mfpFastClick" : "click";
                  o[s](function () {
                    t.prev();
                  }),
                    a[s](function () {
                      t.next();
                    }),
                    t.isIE7 &&
                      (k("b", o[0], !1, !0),
                      k("a", o[0], !1, !0),
                      k("b", a[0], !1, !0),
                      k("a", a[0], !1, !0)),
                    t.container.append(o.add(a));
                }
              }),
              x(m + i, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              x(l + i, function () {
                o.off(i),
                  t.wrap.off("click" + i),
                  t.arrowLeft &&
                    r &&
                    t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                  (t.arrowRight = t.arrowLeft = null);
              }),
              void 0)
            : !1
        );
      },
      next: function () {
        (t.direction = !0), (t.index = K(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = K(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; (t.direction ? o : i) >= e; e++)
          t._preloadItem(t.index + e);
        for (e = 1; (t.direction ? i : o) >= e; e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (((n = K(n)), !t.items[n].preloaded)) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)),
            T("LazyLoad", i),
            "image" === i.type &&
              (i.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  i.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (i.hasSize = !0), (i.loadError = !0), T("LazyLoadError", i);
                })
                .attr("src", i.src)),
            (i.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          (n = isNaN(n) ? n() : n),
            n > 1 &&
              (x("ImageHasSize." + U, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              x("ElementParse." + U, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
        }
      },
    },
  }),
    (function () {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function () {
          I.off("touchmove" + r + " touchend" + r);
        },
        o = "mfpFastClick",
        r = "." + o;
      (e.fn.mfpFastClick = function (o) {
        return e(this).each(function () {
          var a,
            s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function (e) {
              (u = !1),
                (f = 1),
                (p = e.originalEvent
                  ? e.originalEvent.touches[0]
                  : e.touches[0]),
                (c = p.clientX),
                (d = p.clientY),
                I.on("touchmove" + r, function (e) {
                  (p = e.originalEvent ? e.originalEvent.touches : e.touches),
                    (f = p.length),
                    (p = p[0]),
                    (Math.abs(p.clientX - c) > 10 ||
                      Math.abs(p.clientY - d) > 10) &&
                      ((u = !0), i());
                }).on("touchend" + r, function (e) {
                  i(),
                    u ||
                      f > 1 ||
                      ((a = !0),
                      e.preventDefault(),
                      clearTimeout(l),
                      (l = setTimeout(function () {
                        a = !1;
                      }, t)),
                      o());
                });
            });
          }
          s.on("click" + r, function () {
            a || o();
          });
        });
      }),
        (e.fn.destroyMfpFastClick = function () {
          e(this).off("touchstart" + r + " click" + r),
            n && I.off("touchmove" + r + " touchend" + r);
        });
    })(),
    _();
})(window.jQuery || window.Zepto);
$(document).ready(function () {
  // MagnificPopup
  var magnifPopup = function () {
    $(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  };

  var magnifVideo = function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  };

  // Call the functions
  magnifPopup();
  magnifVideo();
});
(function () {
  "use strict";

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  // Main Menu Superfish
  var mainMenu = function () {
    $("#fh5co-primary-menu").superfish({
      delay: 0,
      animation: {
        opacity: "show",
      },
      speed: "fast",
      cssArrows: true,
      disableHI: true,
    });
  };

  // Parallax
  var parallax = function () {
    if (!isiPad() || !isiPhone()) {
      $(window).stellar();
    }
  };

  // Offcanvas and cloning of the main menu
  var offcanvas = function () {
    var $clone = $("#fh5co-menu-wrap").clone();
    $clone.attr({
      id: "offcanvas-menu",
    });
    $clone.find("> ul").attr({
      class: "",
      id: "",
    });

    $("#fh5co-page").prepend($clone);

    // click the burger
    $(".js-fh5co-nav-toggle").on("click", function () {
      if ($("body").hasClass("fh5co-offcanvas")) {
        $("body").removeClass("fh5co-offcanvas");
      } else {
        $("body").addClass("fh5co-offcanvas");
      }
      // event.preventDefault();
    });

    $("#offcanvas-menu").css("height", $(window).height());

    $(window).resize(function () {
      var w = $(window);

      $("#offcanvas-menu").css("height", w.height());

      if (w.width() > 769) {
        if ($("body").hasClass("fh5co-offcanvas")) {
          $("body").removeClass("fh5co-offcanvas");
        }
      }
    });
  };

  // Click outside of the Mobile Menu
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("fh5co-offcanvas")) {
          $("body").removeClass("fh5co-offcanvas");
        }
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  el.addClass("fadeInUp animated");
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var stickyBanner = function () {
    var $stickyElement = $(".sticky-banner");
    var sticky;
    if ($stickyElement.length) {
      sticky = new Waypoint.Sticky({
        element: $stickyElement[0],
        offset: 0,
      });
    }
  };

  // Document on load.
  $(function () {
    mainMenu();
    parallax();
    offcanvas();
    mobileMenuOutsideClick();
    contentWayPoint();
    stickyBanner();
  });
})();
if (
  ((function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
      var e = "length" in t && t.length,
        n = J.type(t);
      return (
        "function" !== n &&
        !J.isWindow(t) &&
        (!(1 !== t.nodeType || !e) ||
          "array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    function i(t, e, n) {
      if (J.isFunction(e))
        return J.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        });
      if (e.nodeType)
        return J.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (ot.test(e)) return J.filter(e, t, n);
        e = J.filter(e, t);
      }
      return J.grep(t, function (t) {
        return Q.call(e, t) >= 0 !== n;
      });
    }
    function o(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function r(t) {
      var e = (ut[t] = {});
      return (
        J.each(t.match(ct) || [], function (t, n) {
          e[n] = !0;
        }),
        e
      );
    }
    function s() {
      G.removeEventListener("DOMContentLoaded", s, !1),
        t.removeEventListener("load", s, !1),
        J.ready();
    }
    function a() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = J.expando + a.uid++);
    }
    function l(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
        if (
          ((i = "data-" + e.replace(mt, "-$1").toLowerCase()),
          "string" == typeof (n = t.getAttribute(i)))
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : gt.test(n)
                  ? J.parseJSON(n)
                  : n));
          } catch (t) {}
          ht.set(t, e, n);
        } else n = void 0;
      return n;
    }
    function c() {
      return !0;
    }
    function u() {
      return !1;
    }
    function p() {
      try {
        return G.activeElement;
      } catch (t) {}
    }
    function f(t, e) {
      return J.nodeName(t, "table") &&
        J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function d(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function h(t) {
      var e = Pt.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function g(t, e) {
      for (var n = 0, i = t.length; i > n; n++)
        dt.set(t[n], "globalEval", !e || dt.get(e[n], "globalEval"));
    }
    function m(t, e) {
      var n, i, o, r, s, a, l, c;
      if (1 === e.nodeType) {
        if (
          dt.hasData(t) &&
          ((r = dt.access(t)), (s = dt.set(e, r)), (c = r.events))
        ) {
          delete s.handle, (s.events = {});
          for (o in c)
            for (n = 0, i = c[o].length; i > n; n++) J.event.add(e, o, c[o][n]);
        }
        ht.hasData(t) &&
          ((a = ht.access(t)), (l = J.extend({}, a)), ht.set(e, l));
      }
    }
    function v(t, e) {
      var n = t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
      return void 0 === e || (e && J.nodeName(t, e)) ? J.merge([t], n) : n;
    }
    function y(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && wt.test(t.type)
        ? (e.checked = t.checked)
        : ("input" === n || "textarea" === n) &&
          (e.defaultValue = t.defaultValue);
    }
    function b(e, n) {
      var i,
        o = J(n.createElement(e)).appendTo(n.body),
        r =
          t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0]))
            ? i.display
            : J.css(o[0], "display");
      return o.detach(), r;
    }
    function w(t) {
      var e = G,
        n = jt[t];
      return (
        n ||
          ((n = b(t, e)),
          ("none" !== n && n) ||
            ((Lt = (
              Lt || J("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement)),
            (e = Lt[0].contentDocument),
            e.write(),
            e.close(),
            (n = b(t, e)),
            Lt.detach()),
          (jt[t] = n)),
        n
      );
    }
    function x(t, e, n) {
      var i,
        o,
        r,
        s,
        a = t.style;
      return (
        (n = n || Mt(t)),
        n && (s = n.getPropertyValue(e) || n[e]),
        n &&
          ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)),
          Ht.test(s) &&
            _t.test(e) &&
            ((i = a.width),
            (o = a.minWidth),
            (r = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = o),
            (a.maxWidth = r))),
        void 0 !== s ? s + "" : s
      );
    }
    function T(t, e) {
      return {
        get: function () {
          return t()
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
        },
      };
    }
    function C(t, e) {
      if (e in t) return e;
      for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Bt.length; o--; )
        if ((e = Bt[o] + n) in t) return e;
      return i;
    }
    function k(t, e, n) {
      var i = Ft.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function S(t, e, n, i, o) {
      for (
        var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          s = 0;
        4 > r;
        r += 2
      )
        "margin" === n && (s += J.css(t, n + yt[r], !0, o)),
          i
            ? ("content" === n && (s -= J.css(t, "padding" + yt[r], !0, o)),
              "margin" !== n &&
                (s -= J.css(t, "border" + yt[r] + "Width", !0, o)))
            : ((s += J.css(t, "padding" + yt[r], !0, o)),
              "padding" !== n &&
                (s += J.css(t, "border" + yt[r] + "Width", !0, o)));
      return s;
    }
    function E(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = Mt(t),
        s = "border-box" === J.css(t, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (
          ((o = x(t, e, r)),
          (0 > o || null == o) && (o = t.style[e]),
          Ht.test(o))
        )
          return o;
        (i = s && (K.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + S(t, e, n || (s ? "border" : "content"), i, r) + "px";
    }
    function $(t, e) {
      for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
        (i = t[s]),
          i.style &&
            ((r[s] = dt.get(i, "olddisplay")),
            (n = i.style.display),
            e
              ? (r[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  bt(i) &&
                  (r[s] = dt.access(i, "olddisplay", w(i.nodeName))))
              : ((o = bt(i)),
                ("none" === n && o) ||
                  dt.set(i, "olddisplay", o ? n : J.css(i, "display"))));
      for (s = 0; a > s; s++)
        (i = t[s]),
          i.style &&
            ((e && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = e ? r[s] || "" : "none"));
      return t;
    }
    function I(t, e, n, i, o) {
      return new I.prototype.init(t, e, n, i, o);
    }
    function O() {
      return (
        setTimeout(function () {
          Ut = void 0;
        }),
        (Ut = J.now())
      );
    }
    function A(t, e) {
      var n,
        i = 0,
        o = { height: t };
      for (e = e ? 1 : 0; 4 > i; i += 2 - e)
        (n = yt[i]), (o["margin" + n] = o["padding" + n] = t);
      return e && (o.opacity = o.width = t), o;
    }
    function N(t, e, n) {
      for (
        var i, o = (Gt[e] || []).concat(Gt["*"]), r = 0, s = o.length;
        s > r;
        r++
      )
        if ((i = o[r].call(n, e, t))) return i;
    }
    function P(t, e, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u = this,
        p = {},
        f = t.style,
        d = t.nodeType && bt(t),
        h = dt.get(t, "fxshow");
      n.queue ||
        ((a = J._queueHooks(t, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        u.always(function () {
          u.always(function () {
            a.unqueued--, J.queue(t, "fx").length || a.empty.fire();
          });
        })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (c = J.css(t, "display")),
          "inline" ===
            ("none" === c ? dt.get(t, "olddisplay") || w(t.nodeName) : c) &&
            "none" === J.css(t, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          u.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          }));
      for (i in e)
        if (((o = e[i]), Vt.exec(o))) {
          if (
            (delete e[i],
            (r = r || "toggle" === o),
            o === (d ? "hide" : "show"))
          ) {
            if ("show" !== o || !h || void 0 === h[i]) continue;
            d = !0;
          }
          p[i] = (h && h[i]) || J.style(t, i);
        } else c = void 0;
      if (J.isEmptyObject(p))
        "inline" === ("none" === c ? w(t.nodeName) : c) && (f.display = c);
      else {
        h ? "hidden" in h && (d = h.hidden) : (h = dt.access(t, "fxshow", {})),
          r && (h.hidden = !d),
          d
            ? J(t).show()
            : u.done(function () {
                J(t).hide();
              }),
          u.done(function () {
            var e;
            dt.remove(t, "fxshow");
            for (e in p) J.style(t, e, p[e]);
          });
        for (i in p)
          (s = N(d ? h[i] : 0, i, u)),
            i in h ||
              ((h[i] = s.start),
              d &&
                ((s.end = s.start),
                (s.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function D(t, e) {
      var n, i, o, r, s;
      for (n in t)
        if (
          ((i = J.camelCase(n)),
          (o = e[i]),
          (r = t[n]),
          J.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
          n !== i && ((t[i] = r), delete t[n]),
          (s = J.cssHooks[i]) && "expand" in s)
        ) {
          (r = s.expand(r)), delete t[i];
          for (n in r) n in t || ((t[n] = r[n]), (e[n] = o));
        } else e[i] = o;
    }
    function L(t, e, n) {
      var i,
        o,
        r = 0,
        s = Kt.length,
        a = J.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var e = Ut || O(),
              n = Math.max(0, c.startTime + c.duration - e),
              i = n / c.duration || 0,
              r = 1 - i,
              s = 0,
              l = c.tweens.length;
            l > s;
            s++
          )
            c.tweens[s].run(r);
          return (
            a.notifyWith(t, [c, r, n]),
            1 > r && l ? n : (a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: J.extend({}, e),
          opts: J.extend(!0, { specialEasing: {} }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Ut || O(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = J.Tween(
              t,
              c.opts,
              e,
              n,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) c.tweens[n].run(1);
            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
          },
        }),
        u = c.props;
      for (D(u, c.opts.specialEasing); s > r; r++)
        if ((i = Kt[r].call(c, t, u, c.opts))) return i;
      return (
        J.map(u, N, c),
        J.isFunction(c.opts.start) && c.opts.start.call(t, c),
        J.fx.timer(J.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function j(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          o = 0,
          r = e.toLowerCase().match(ct) || [];
        if (J.isFunction(n))
          for (; (i = r[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function _(t, e, n, i) {
      function o(a) {
        var l;
        return (
          (r[a] = !0),
          J.each(t[a] || [], function (t, a) {
            var c = a(e, n, i);
            return "string" != typeof c || s || r[c]
              ? s
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), o(c), !1);
          }),
          l
        );
      }
      var r = {},
        s = t === ue;
      return o(e.dataTypes[0]) || (!r["*"] && o("*"));
    }
    function H(t, e) {
      var n,
        i,
        o = J.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      return i && J.extend(!0, t, i), t;
    }
    function M(t, e, n) {
      for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = t.mimeType || e.getResponseHeader("Content-Type"));
      if (i)
        for (o in a)
          if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
          }
      if (l[0] in n) r = l[0];
      else {
        for (o in n) {
          if (!l[0] || t.converters[o + " " + l[0]]) {
            r = o;
            break;
          }
          s || (s = o);
        }
        r = r || s;
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
    }
    function R(t, e, n, i) {
      var o,
        r,
        s,
        a,
        l,
        c = {},
        u = t.dataTypes.slice();
      if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
      for (r = u.shift(); r; )
        if (
          (t.responseFields[r] && (n[t.responseFields[r]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = r),
          (r = u.shift()))
        )
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r]))
              for (o in c)
                if (
                  ((a = o.split(" ")),
                  a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))
                ) {
                  !0 === s
                    ? (s = c[o])
                    : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                  break;
                }
            if (!0 !== s)
              if (s && t.throws) e = s(e);
              else
                try {
                  e = s(e);
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + r,
                  };
                }
          }
      return { state: "success", data: e };
    }
    function F(t, e, n, i) {
      var o;
      if (J.isArray(e))
        J.each(e, function (e, o) {
          n || he.test(t)
            ? i(t, o)
            : F(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
        });
      else if (n || "object" !== J.type(e)) i(t, e);
      else for (o in e) F(t + "[" + o + "]", e[o], n, i);
    }
    function z(t) {
      return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var q = [],
      W = q.slice,
      B = q.concat,
      U = q.push,
      Q = q.indexOf,
      V = {},
      X = V.toString,
      Y = V.hasOwnProperty,
      K = {},
      G = t.document,
      Z = "2.1.4",
      J = function (t, e) {
        return new J.fn.init(t, e);
      },
      tt = function (t, e) {
        return e.toUpperCase();
      };
    (J.fn = J.prototype =
      {
        jquery: Z,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function () {
          return W.call(this);
        },
        get: function (t) {
          return null != t
            ? 0 > t
              ? this[t + this.length]
              : this[t]
            : W.call(this);
        },
        pushStack: function (t) {
          var e = J.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t, e) {
          return J.each(this, t, e);
        },
        map: function (t) {
          return this.pushStack(
            J.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(W.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (0 > t ? e : 0);
          return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: U,
        sort: q.sort,
        splice: q.splice,
      }),
      (J.extend = J.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || J.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            l > a;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = s[e]),
                  (i = t[e]),
                  s !== i &&
                    (c && i && (J.isPlainObject(i) || (o = J.isArray(i)))
                      ? (o
                          ? ((o = !1), (r = n && J.isArray(n) ? n : []))
                          : (r = n && J.isPlainObject(n) ? n : {}),
                        (s[e] = J.extend(c, r, i)))
                      : void 0 !== i && (s[e] = i));
          return s;
        }),
      J.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === J.type(t);
        },
        isArray: Array.isArray,
        isWindow: function (t) {
          return null != t && t === t.window;
        },
        isNumeric: function (t) {
          return !J.isArray(t) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (t) {
          return (
            "object" === J.type(t) &&
            !t.nodeType &&
            !J.isWindow(t) &&
            !(
              t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf")
            )
          );
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? V[X.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (t) {
          var e,
            n = eval;
          (t = J.trim(t)) &&
            (1 === t.indexOf("use strict")
              ? ((e = G.createElement("script")),
                (e.text = t),
                G.head.appendChild(e).parentNode.removeChild(e))
              : n(t));
        },
        camelCase: function (t) {
          return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, tt);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e, i) {
          var o = 0,
            r = t.length,
            s = n(t);
          if (i) {
            if (s) for (; r > o && !1 !== e.apply(t[o], i); o++);
            else for (o in t) if (!1 === e.apply(t[o], i)) break;
          } else if (s) for (; r > o && !1 !== e.call(t[o], o, t[o]); o++);
          else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
          return t;
        },
        trim: function (t) {
          return null == t
            ? ""
            : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        makeArray: function (t, e) {
          var i = e || [];
          return (
            null != t &&
              (n(Object(t))
                ? J.merge(i, "string" == typeof t ? [t] : t)
                : U.call(i, t)),
            i
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : Q.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; n > i; i++)
            t[o++] = e[i];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i = [], o = 0, r = t.length, s = !n; r > o; o++)
            !e(t[o], o) !== s && i.push(t[o]);
          return i;
        },
        map: function (t, e, i) {
          var o,
            r = 0,
            s = t.length,
            a = n(t),
            l = [];
          if (a) for (; s > r; r++) null != (o = e(t[r], r, i)) && l.push(o);
          else for (r in t) null != (o = e(t[r], r, i)) && l.push(o);
          return B.apply([], l);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, i, o;
          return (
            "string" == typeof e && ((n = t[e]), (e = t), (t = n)),
            J.isFunction(t)
              ? ((i = W.call(arguments, 2)),
                (o = function () {
                  return t.apply(e || this, i.concat(W.call(arguments)));
                }),
                (o.guid = t.guid = t.guid || J.guid++),
                o)
              : void 0
          );
        },
        now: Date.now,
        support: K,
      }),
      J.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (t, e) {
          V["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var et = (function (t) {
      function e(t, e, n, i) {
        var o, r, s, a, c, p, f, d, h, g;
        if (
          ((e ? e.ownerDocument || e : M) !== A && O(e),
          (e = e || A),
          (n = n || []),
          (a = e.nodeType),
          "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))
        )
          return n;
        if (!i && P) {
          if (11 !== a && (o = mt.exec(t)))
            if ((s = o[1])) {
              if (9 === a) {
                if (!(r = e.getElementById(s)) || !r.parentNode) return n;
                if (r.id === s) return n.push(r), n;
              } else if (
                e.ownerDocument &&
                (r = e.ownerDocument.getElementById(s)) &&
                _(e, r) &&
                r.id === s
              )
                return n.push(r), n;
            } else {
              if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
              if ((s = o[3]) && b.getElementsByClassName)
                return K.apply(n, e.getElementsByClassName(s)), n;
            }
          if (b.qsa && (!D || !D.test(t))) {
            if (
              ((d = f = H),
              (h = e),
              (g = 1 !== a && t),
              1 === a && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                p = C(t),
                  (f = e.getAttribute("id"))
                    ? (d = f.replace(yt, "\\$&"))
                    : e.setAttribute("id", d),
                  d = "[id='" + d + "'] ",
                  c = p.length;
                c--;

              )
                p[c] = d + u(p[c]);
              (h = (vt.test(t) && l(e.parentNode)) || e), (g = p.join(","));
            }
            if (g)
              try {
                return K.apply(n, h.querySelectorAll(g)), n;
              } catch (t) {
              } finally {
                f || e.removeAttribute("id");
              }
          }
        }
        return S(t.replace(st, "$1"), e, n, i);
      }
      function n() {
        function t(n, i) {
          return (
            e.push(n + " ") > w.cacheLength && delete t[e.shift()],
            (t[n + " "] = i)
          );
        }
        var e = [];
        return t;
      }
      function i(t) {
        return (t[H] = !0), t;
      }
      function o(t) {
        var e = A.createElement("div");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function r(t, e) {
        for (var n = t.split("|"), i = t.length; i--; ) w.attrHandle[n[i]] = e;
      }
      function s(t, e) {
        var n = e && t,
          i =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || U) - (~t.sourceIndex || U);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function a(t) {
        return i(function (e) {
          return (
            (e = +e),
            i(function (n, i) {
              for (var o, r = t([], n.length, e), s = r.length; s--; )
                n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function l(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      function c() {}
      function u(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i;
      }
      function p(t, e, n) {
        var i = e.dir,
          o = n && "parentNode" === i,
          r = F++;
        return e.first
          ? function (e, n, r) {
              for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, r);
            }
          : function (e, n, s) {
              var a,
                l,
                c = [R, r];
              if (s) {
                for (; (e = e[i]); )
                  if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
              } else
                for (; (e = e[i]); )
                  if (1 === e.nodeType || o) {
                    if (
                      ((l = e[H] || (e[H] = {})),
                      (a = l[i]) && a[0] === R && a[1] === r)
                    )
                      return (c[2] = a[2]);
                    if (((l[i] = c), (c[2] = t(e, n, s)))) return !0;
                  }
            };
      }
      function f(t) {
        return t.length > 1
          ? function (e, n, i) {
              for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
              return !0;
            }
          : t[0];
      }
      function d(t, n, i) {
        for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
        return i;
      }
      function h(t, e, n, i, o) {
        for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
          (r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
        return s;
      }
      function g(t, e, n, o, r, s) {
        return (
          o && !o[H] && (o = g(o)),
          r && !r[H] && (r = g(r, s)),
          i(function (i, s, a, l) {
            var c,
              u,
              p,
              f = [],
              g = [],
              m = s.length,
              v = i || d(e || "*", a.nodeType ? [a] : a, []),
              y = !t || (!i && e) ? v : h(v, f, t, a, l),
              b = n ? (r || (i ? t : m || o) ? [] : s) : y;
            if ((n && n(y, b, a, l), o))
              for (c = h(b, g), o(c, [], a, l), u = c.length; u--; )
                (p = c[u]) && (b[g[u]] = !(y[g[u]] = p));
            if (i) {
              if (r || t) {
                if (r) {
                  for (c = [], u = b.length; u--; )
                    (p = b[u]) && c.push((y[u] = p));
                  r(null, (b = []), c, l);
                }
                for (u = b.length; u--; )
                  (p = b[u]) &&
                    (c = r ? Z(i, p) : f[u]) > -1 &&
                    (i[c] = !(s[c] = p));
              }
            } else (b = h(b === s ? b.splice(m, b.length) : b)), r ? r(null, s, b, l) : K.apply(s, b);
          })
        );
      }
      function m(t) {
        for (
          var e,
            n,
            i,
            o = t.length,
            r = w.relative[t[0].type],
            s = r || w.relative[" "],
            a = r ? 1 : 0,
            l = p(
              function (t) {
                return t === e;
              },
              s,
              !0
            ),
            c = p(
              function (t) {
                return Z(e, t) > -1;
              },
              s,
              !0
            ),
            d = [
              function (t, n, i) {
                var o =
                  (!r && (i || n !== E)) ||
                  ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                return (e = null), o;
              },
            ];
          o > a;
          a++
        )
          if ((n = w.relative[t[a].type])) d = [p(f(d), n)];
          else {
            if (((n = w.filter[t[a].type].apply(null, t[a].matches)), n[H])) {
              for (i = ++a; o > i && !w.relative[t[i].type]; i++);
              return g(
                a > 1 && f(d),
                a > 1 &&
                  u(
                    t
                      .slice(0, a - 1)
                      .concat({ value: " " === t[a - 2].type ? "*" : "" })
                  ).replace(st, "$1"),
                n,
                i > a && m(t.slice(a, i)),
                o > i && m((t = t.slice(i))),
                o > i && u(t)
              );
            }
            d.push(n);
          }
        return f(d);
      }
      function v(t, n) {
        var o = n.length > 0,
          r = t.length > 0,
          s = function (i, s, a, l, c) {
            var u,
              p,
              f,
              d = 0,
              g = "0",
              m = i && [],
              v = [],
              y = E,
              b = i || (r && w.find.TAG("*", c)),
              x = (R += null == y ? 1 : Math.random() || 0.1),
              T = b.length;
            for (c && (E = s !== A && s); g !== T && null != (u = b[g]); g++) {
              if (r && u) {
                for (p = 0; (f = t[p++]); )
                  if (f(u, s, a)) {
                    l.push(u);
                    break;
                  }
                c && (R = x);
              }
              o && ((u = !f && u) && d--, i && m.push(u));
            }
            if (((d += g), o && g !== d)) {
              for (p = 0; (f = n[p++]); ) f(m, v, s, a);
              if (i) {
                if (d > 0) for (; g--; ) m[g] || v[g] || (v[g] = X.call(l));
                v = h(v);
              }
              K.apply(l, v),
                c && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l);
            }
            return c && ((R = x), (E = y)), m;
          };
        return o ? i(s) : s;
      }
      var y,
        b,
        w,
        x,
        T,
        C,
        k,
        S,
        E,
        $,
        I,
        O,
        A,
        N,
        P,
        D,
        L,
        j,
        _,
        H = "sizzle" + 1 * new Date(),
        M = t.document,
        R = 0,
        F = 0,
        z = n(),
        q = n(),
        W = n(),
        B = function (t, e) {
          return t === e && (I = !0), 0;
        },
        U = 1 << 31,
        Q = {}.hasOwnProperty,
        V = [],
        X = V.pop,
        Y = V.push,
        K = V.push,
        G = V.slice,
        Z = function (t, e) {
          for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
          return -1;
        },
        J =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        tt = "[\\x20\\t\\r\\n\\f]",
        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = et.replace("w", "w#"),
        it =
          "\\[" +
          tt +
          "*(" +
          et +
          ")(?:" +
          tt +
          "*([*^$|!~]?=)" +
          tt +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          nt +
          "))|)" +
          tt +
          "*\\]",
        ot =
          ":(" +
          et +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          it +
          ")*)|.*)\\)|)",
        rt = new RegExp(tt + "+", "g"),
        st = new RegExp(
          "^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$",
          "g"
        ),
        at = new RegExp("^" + tt + "*," + tt + "*"),
        lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
        ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
        ut = new RegExp(ot),
        pt = new RegExp("^" + nt + "$"),
        ft = {
          ID: new RegExp("^#(" + et + ")"),
          CLASS: new RegExp("^\\.(" + et + ")"),
          TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + it),
          PSEUDO: new RegExp("^" + ot),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              tt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              tt +
              "*(?:([+-]|)" +
              tt +
              "*(\\d+)|))" +
              tt +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + J + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              tt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              tt +
              "*((?:-\\d)?\\d*)" +
              tt +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        dt = /^(?:input|select|textarea|button)$/i,
        ht = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        vt = /[+~]/,
        yt = /'|\\/g,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
        wt = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n
            ? e
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        xt = function () {
          O();
        };
      try {
        K.apply((V = G.call(M.childNodes)), M.childNodes),
          V[M.childNodes.length].nodeType;
      } catch (t) {
        K = {
          apply: V.length
            ? function (t, e) {
                Y.apply(t, G.call(e));
              }
            : function (t, e) {
                for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                t.length = n - 1;
              },
        };
      }
      (b = e.support = {}),
        (T = e.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (O = e.setDocument =
          function (t) {
            var e,
              n,
              i = t ? t.ownerDocument || t : M;
            return i !== A && 9 === i.nodeType && i.documentElement
              ? ((A = i),
                (N = i.documentElement),
                (n = i.defaultView),
                n &&
                  n !== n.top &&
                  (n.addEventListener
                    ? n.addEventListener("unload", xt, !1)
                    : n.attachEvent && n.attachEvent("onunload", xt)),
                (P = !T(i)),
                (b.attributes = o(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (b.getElementsByTagName = o(function (t) {
                  return (
                    t.appendChild(i.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (b.getElementsByClassName = gt.test(i.getElementsByClassName)),
                (b.getById = o(function (t) {
                  return (
                    (N.appendChild(t).id = H),
                    !i.getElementsByName || !i.getElementsByName(H).length
                  );
                })),
                b.getById
                  ? ((w.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && P) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (w.filter.ID = function (t) {
                      var e = t.replace(bt, wt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (t) {
                      var e = t.replace(bt, wt);
                      return function (t) {
                        var n =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    })),
                (w.find.TAG = b.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : b.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (w.find.CLASS =
                  b.getElementsByClassName &&
                  function (t, e) {
                    return P ? e.getElementsByClassName(t) : void 0;
                  }),
                (L = []),
                (D = []),
                (b.qsa = gt.test(i.querySelectorAll)) &&
                  (o(function (t) {
                    (N.appendChild(t).innerHTML =
                      "<a id='" +
                      H +
                      "'></a><select id='" +
                      H +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        D.push("[*^$]=" + tt + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        D.push("\\[" + tt + "*(?:value|" + J + ")"),
                      t.querySelectorAll("[id~=" + H + "-]").length ||
                        D.push("~="),
                      t.querySelectorAll(":checked").length ||
                        D.push(":checked"),
                      t.querySelectorAll("a#" + H + "+*").length ||
                        D.push(".#.+[+~]");
                  }),
                  o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        D.push("name" + tt + "*[*^$|!~]?="),
                      t.querySelectorAll(":enabled").length ||
                        D.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      D.push(",.*:");
                  })),
                (b.matchesSelector = gt.test(
                  (j =
                    N.matches ||
                    N.webkitMatchesSelector ||
                    N.mozMatchesSelector ||
                    N.oMatchesSelector ||
                    N.msMatchesSelector)
                )) &&
                  o(function (t) {
                    (b.disconnectedMatch = j.call(t, "div")),
                      j.call(t, "[s!='']:x"),
                      L.push("!=", ot);
                  }),
                (D = D.length && new RegExp(D.join("|"))),
                (L = L.length && new RegExp(L.join("|"))),
                (e = gt.test(N.compareDocumentPosition)),
                (_ =
                  e || gt.test(N.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (B = e
                  ? function (t, e) {
                      if (t === e) return (I = !0), 0;
                      var n =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        n ||
                        ((n =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1),
                        1 & n ||
                        (!b.sortDetached && e.compareDocumentPosition(t) === n)
                          ? t === i || (t.ownerDocument === M && _(M, t))
                            ? -1
                            : e === i || (e.ownerDocument === M && _(M, e))
                            ? 1
                            : $
                            ? Z($, t) - Z($, e)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (I = !0), 0;
                      var n,
                        o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                      if (!r || !a)
                        return t === i
                          ? -1
                          : e === i
                          ? 1
                          : r
                          ? -1
                          : a
                          ? 1
                          : $
                          ? Z($, t) - Z($, e)
                          : 0;
                      if (r === a) return s(t, e);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (n = e; (n = n.parentNode); ) c.unshift(n);
                      for (; l[o] === c[o]; ) o++;
                      return o
                        ? s(l[o], c[o])
                        : l[o] === M
                        ? -1
                        : c[o] === M
                        ? 1
                        : 0;
                    }),
                i)
              : A;
          }),
        (e.matches = function (t, n) {
          return e(t, null, null, n);
        }),
        (e.matchesSelector = function (t, n) {
          if (
            ((t.ownerDocument || t) !== A && O(t),
            (n = n.replace(ct, "='$1']")),
            !(!b.matchesSelector || !P || (L && L.test(n)) || (D && D.test(n))))
          )
            try {
              var i = j.call(t, n);
              if (
                i ||
                b.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (t) {}
          return e(n, A, null, [t]).length > 0;
        }),
        (e.contains = function (t, e) {
          return (t.ownerDocument || t) !== A && O(t), _(t, e);
        }),
        (e.attr = function (t, e) {
          (t.ownerDocument || t) !== A && O(t);
          var n = w.attrHandle[e.toLowerCase()],
            i =
              n && Q.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
          return void 0 !== i
            ? i
            : b.attributes || !P
            ? t.getAttribute(e)
            : (i = t.getAttributeNode(e)) && i.specified
            ? i.value
            : null;
        }),
        (e.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (e.uniqueSort = function (t) {
          var e,
            n = [],
            i = 0,
            o = 0;
          if (
            ((I = !b.detectDuplicates),
            ($ = !b.sortStable && t.slice(0)),
            t.sort(B),
            I)
          ) {
            for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
            for (; i--; ) t.splice(n[i], 1);
          }
          return ($ = null), t;
        }),
        (x = e.getText =
          function (t) {
            var e,
              n = "",
              i = 0,
              o = t.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
              } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += x(e);
            return n;
          }),
        (w = e.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(bt, wt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || e.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && e.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return ft.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        ut.test(n) &&
                        (e = C(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(bt, wt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = z[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) &&
                    z(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (o) {
                  var r = e.attr(o, t);
                  return null == r
                    ? "!=" === n
                    : !n ||
                        ((r += ""),
                        "=" === n
                          ? r === i
                          : "!=" === n
                          ? r !== i
                          : "^=" === n
                          ? i && 0 === r.indexOf(i)
                          : "*=" === n
                          ? i && r.indexOf(i) > -1
                          : "$=" === n
                          ? i && r.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + r.replace(rt, " ") + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (r === i || r.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (t, e, n, i, o) {
                var r = "nth" !== t.slice(0, 3),
                  s = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === i && 0 === o
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        u,
                        p,
                        f,
                        d,
                        h,
                        g = r !== s ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                      if (m) {
                        if (r) {
                          for (; g; ) {
                            for (p = e; (p = p[g]); )
                              if (
                                a
                                  ? p.nodeName.toLowerCase() === v
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = g = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            u = m[H] || (m[H] = {}),
                              c = u[t] || [],
                              d = c[0] === R && c[1],
                              f = c[0] === R && c[2],
                              p = d && m.childNodes[d];
                            (p = (++d && p && p[g]) || (f = d = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++f && p === e) {
                              u[t] = [R, d, f];
                              break;
                            }
                        } else if (
                          y &&
                          (c = (e[H] || (e[H] = {}))[t]) &&
                          c[0] === R
                        )
                          f = c[1];
                        else
                          for (
                            ;
                            (p =
                              (++d && p && p[g]) || (f = d = 0) || h.pop()) &&
                            ((a
                              ? p.nodeName.toLowerCase() !== v
                              : 1 !== p.nodeType) ||
                              !++f ||
                              (y && ((p[H] || (p[H] = {}))[t] = [R, f]),
                              p !== e));

                          );
                        return (f -= o) === i || (f % i == 0 && f / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, n) {
                var o,
                  r =
                    w.pseudos[t] ||
                    w.setFilters[t.toLowerCase()] ||
                    e.error("unsupported pseudo: " + t);
                return r[H]
                  ? r(n)
                  : r.length > 1
                  ? ((o = [t, t, "", n]),
                    w.setFilters.hasOwnProperty(t.toLowerCase())
                      ? i(function (t, e) {
                          for (var i, o = r(t, n), s = o.length; s--; )
                            (i = Z(t, o[s])), (t[i] = !(e[i] = o[s]));
                        })
                      : function (t) {
                          return r(t, 0, o);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (t) {
                var e = [],
                  n = [],
                  o = k(t.replace(st, "$1"));
                return o[H]
                  ? i(function (t, e, n, i) {
                      for (var r, s = o(t, null, i, []), a = t.length; a--; )
                        (r = s[a]) && (t[a] = !(e[a] = r));
                    })
                  : function (t, i, r) {
                      return (
                        (e[0] = t), o(e, null, r, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (t) {
                return function (n) {
                  return e(t, n).length > 0;
                };
              }),
              contains: i(function (t) {
                return (
                  (t = t.replace(bt, wt)),
                  function (e) {
                    return (
                      (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                    );
                  }
                );
              }),
              lang: i(function (t) {
                return (
                  pt.test(t || "") || e.error("unsupported lang: " + t),
                  (t = t.replace(bt, wt).toLowerCase()),
                  function (e) {
                    var n;
                    do {
                      if (
                        (n = P
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === t ||
                          0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === N;
              },
              focus: function (t) {
                return (
                  t === A.activeElement &&
                  (!A.hasFocus || A.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return !1 === t.disabled;
              },
              disabled: function (t) {
                return !0 === t.disabled;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !w.pseudos.empty(t);
              },
              header: function (t) {
                return ht.test(t.nodeName);
              },
              input: function (t) {
                return dt.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: a(function () {
                return [0];
              }),
              last: a(function (t, e) {
                return [e - 1];
              }),
              eq: a(function (t, e, n) {
                return [0 > n ? n + e : n];
              }),
              even: a(function (t, e) {
                for (var n = 0; e > n; n += 2) t.push(n);
                return t;
              }),
              odd: a(function (t, e) {
                for (var n = 1; e > n; n += 2) t.push(n);
                return t;
              }),
              lt: a(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: a(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }),
        (w.pseudos.nth = w.pseudos.eq);
      for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        w.pseudos[y] = (function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        })(y);
      for (y in { submit: !0, reset: !0 })
        w.pseudos[y] = (function (t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          };
        })(y);
      return (
        (c.prototype = w.filters = w.pseudos),
        (w.setFilters = new c()),
        (C = e.tokenize =
          function (t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u = q[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = w.preFilter; a; ) {
              (!i || (o = at.exec(a))) &&
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (i = !1),
                (o = lt.exec(a)) &&
                  ((i = o.shift()),
                  r.push({ value: i, type: o[0].replace(st, " ") }),
                  (a = a.slice(i.length)));
              for (s in w.filter)
                !(o = ft[s].exec(a)) ||
                  (c[s] && !(o = c[s](o))) ||
                  ((i = o.shift()),
                  r.push({ value: i, type: s, matches: o }),
                  (a = a.slice(i.length)));
              if (!i) break;
            }
            return n ? a.length : a ? e.error(t) : q(t, l).slice(0);
          }),
        (k = e.compile =
          function (t, e) {
            var n,
              i = [],
              o = [],
              r = W[t + " "];
            if (!r) {
              for (e || (e = C(t)), n = e.length; n--; )
                (r = m(e[n])), r[H] ? i.push(r) : o.push(r);
              (r = W(t, v(o, i))), (r.selector = t);
            }
            return r;
          }),
        (S = e.select =
          function (t, e, n, i) {
            var o,
              r,
              s,
              a,
              c,
              p = "function" == typeof t && t,
              f = !i && C((t = p.selector || t));
            if (((n = n || []), 1 === f.length)) {
              if (
                ((r = f[0] = f[0].slice(0)),
                r.length > 2 &&
                  "ID" === (s = r[0]).type &&
                  b.getById &&
                  9 === e.nodeType &&
                  P &&
                  w.relative[r[1].type])
              ) {
                if (
                  !(e = (w.find.ID(s.matches[0].replace(bt, wt), e) || [])[0])
                )
                  return n;
                p && (e = e.parentNode), (t = t.slice(r.shift().value.length));
              }
              for (
                o = ft.needsContext.test(t) ? 0 : r.length;
                o-- && ((s = r[o]), !w.relative[(a = s.type)]);

              )
                if (
                  (c = w.find[a]) &&
                  (i = c(
                    s.matches[0].replace(bt, wt),
                    (vt.test(r[0].type) && l(e.parentNode)) || e
                  ))
                ) {
                  if ((r.splice(o, 1), !(t = i.length && u(r))))
                    return K.apply(n, i), n;
                  break;
                }
            }
            return (
              (p || k(t, f))(i, e, !P, n, (vt.test(t) && l(e.parentNode)) || e),
              n
            );
          }),
        (b.sortStable = H.split("").sort(B).join("") === H),
        (b.detectDuplicates = !!I),
        O(),
        (b.sortDetached = o(function (t) {
          return 1 & t.compareDocumentPosition(A.createElement("div"));
        })),
        o(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          r("type|href|height|width", function (t, e, n) {
            return n
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (b.attributes &&
          o(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          r("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        o(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          r(J, function (t, e, n) {
            var i;
            return n
              ? void 0
              : !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
        e
      );
    })(t);
    (J.find = et),
      (J.expr = et.selectors),
      (J.expr[":"] = J.expr.pseudos),
      (J.unique = et.uniqueSort),
      (J.text = et.getText),
      (J.isXMLDoc = et.isXML),
      (J.contains = et.contains);
    var nt = J.expr.match.needsContext,
      it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ot = /^.[^:#\[\.,]*$/;
    (J.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? J.find.matchesSelector(i, t)
            ? [i]
            : []
          : J.find.matches(
              t,
              J.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      J.fn.extend({
        find: function (t) {
          var e,
            n = this.length,
            i = [],
            o = this;
          if ("string" != typeof t)
            return this.pushStack(
              J(t).filter(function () {
                for (e = 0; n > e; e++) if (J.contains(o[e], this)) return !0;
              })
            );
          for (e = 0; n > e; e++) J.find(t, o[e], i);
          return (
            (i = this.pushStack(n > 1 ? J.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + t : t),
            i
          );
        },
        filter: function (t) {
          return this.pushStack(i(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(i(this, t || [], !0));
        },
        is: function (t) {
          return !!i(
            this,
            "string" == typeof t && nt.test(t) ? J(t) : t || [],
            !1
          ).length;
        },
      });
    var rt,
      st = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((J.fn.init = function (t, e) {
      var n, i;
      if (!t) return this;
      if ("string" == typeof t) {
        if (
          !(n =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : st.exec(t)) ||
          (!n[1] && e)
        )
          return !e || e.jquery
            ? (e || rt).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof J ? e[0] : e),
            J.merge(
              this,
              J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)
            ),
            it.test(n[1]) && J.isPlainObject(e))
          )
            for (n in e)
              J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (i = G.getElementById(n[2])),
          i && i.parentNode && ((this.length = 1), (this[0] = i)),
          (this.context = G),
          (this.selector = t),
          this
        );
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : J.isFunction(t)
        ? void 0 !== rt.ready
          ? rt.ready(t)
          : t(J)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          J.makeArray(t, this));
    }).prototype = J.fn),
      (rt = J(G));
    var at = /^(?:parents|prev(?:Until|All))/,
      lt = { children: !0, contents: !0, next: !0, prev: !0 };
    J.extend({
      dir: function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (o && J(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    }),
      J.fn.extend({
        has: function (t) {
          var e = J(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; n > t; t++) if (J.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          for (
            var n,
              i = 0,
              o = this.length,
              r = [],
              s =
                nt.test(t) || "string" != typeof t
                  ? J(t, e || this.context)
                  : 0;
            o > i;
            i++
          )
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && J.find.matchesSelector(n, t))
              ) {
                r.push(n);
                break;
              }
          return this.pushStack(r.length > 1 ? J.unique(r) : r);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? Q.call(J(t), this[0])
              : Q.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(J.unique(J.merge(this.get(), J(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
      J.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return J.dir(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return J.dir(t, "parentNode", n);
          },
          next: function (t) {
            return o(t, "nextSibling");
          },
          prev: function (t) {
            return o(t, "previousSibling");
          },
          nextAll: function (t) {
            return J.dir(t, "nextSibling");
          },
          prevAll: function (t) {
            return J.dir(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return J.dir(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return J.dir(t, "previousSibling", n);
          },
          siblings: function (t) {
            return J.sibling((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return J.sibling(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument || J.merge([], t.childNodes);
          },
        },
        function (t, e) {
          J.fn[t] = function (n, i) {
            var o = J.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (o = J.filter(i, o)),
              this.length > 1 &&
                (lt[t] || J.unique(o), at.test(t) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var ct = /\S+/g,
      ut = {};
    (J.Callbacks = function (t) {
      t = "string" == typeof t ? ut[t] || r(t) : J.extend({}, t);
      var e,
        n,
        i,
        o,
        s,
        a,
        l = [],
        c = !t.once && [],
        u = function (r) {
          for (
            e = t.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0;
            l && s > a;
            a++
          )
            if (!1 === l[a].apply(r[0], r[1]) && t.stopOnFalse) {
              e = !1;
              break;
            }
          (i = !1),
            l && (c ? c.length && u(c.shift()) : e ? (l = []) : p.disable());
        },
        p = {
          add: function () {
            if (l) {
              var n = l.length;
              !(function e(n) {
                J.each(n, function (n, i) {
                  var o = J.type(i);
                  "function" === o
                    ? (t.unique && p.has(i)) || l.push(i)
                    : i && i.length && "string" !== o && e(i);
                });
              })(arguments),
                i ? (s = l.length) : e && ((o = n), u(e));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                J.each(arguments, function (t, e) {
                  for (var n; (n = J.inArray(e, l, n)) > -1; )
                    l.splice(n, 1), i && (s >= n && s--, a >= n && a--);
                }),
              this
            );
          },
          has: function (t) {
            return t ? J.inArray(t, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (s = 0), this;
          },
          disable: function () {
            return (l = c = e = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (c = void 0), e || p.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (t, e) {
            return (
              !l ||
                (n && !c) ||
                ((e = e || []),
                (e = [t, e.slice ? e.slice() : e]),
                i ? c.push(e) : u(e)),
              this
            );
          },
          fire: function () {
            return p.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return p;
    }),
      J.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", J.Callbacks("once memory"), "resolved"],
              ["reject", "fail", J.Callbacks("once memory"), "rejected"],
              ["notify", "progress", J.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return J.Deferred(function (n) {
                  J.each(e, function (e, r) {
                    var s = J.isFunction(t[e]) && t[e];
                    o[r[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && J.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[r[0] + "With"](
                            this === i ? n.promise() : this,
                            s ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                }).promise();
              },
              promise: function (t) {
                return null != t ? J.extend(t, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            J.each(e, function (t, r) {
              var s = r[2],
                a = r[3];
              (i[r[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (o[r[0]] = function () {
                  return (
                    o[r[0] + "With"](this === o ? i : this, arguments), this
                  );
                }),
                (o[r[0] + "With"] = s.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (t) {
          var e,
            n,
            i,
            o = 0,
            r = W.call(arguments),
            s = r.length,
            a = 1 !== s || (t && J.isFunction(t.promise)) ? s : 0,
            l = 1 === a ? t : J.Deferred(),
            c = function (t, n, i) {
              return function (o) {
                (n[t] = this),
                  (i[t] = arguments.length > 1 ? W.call(arguments) : o),
                  i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
              };
            };
          if (s > 1)
            for (
              e = new Array(s), n = new Array(s), i = new Array(s);
              s > o;
              o++
            )
              r[o] && J.isFunction(r[o].promise)
                ? r[o]
                    .promise()
                    .done(c(o, i, r))
                    .fail(l.reject)
                    .progress(c(o, n, e))
                : --a;
          return a || l.resolveWith(i, r), l.promise();
        },
      });
    var pt;
    (J.fn.ready = function (t) {
      return J.ready.promise().done(t), this;
    }),
      J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? J.readyWait++ : J.ready(!0);
        },
        ready: function (t) {
          (!0 === t ? --J.readyWait : J.isReady) ||
            ((J.isReady = !0),
            (!0 !== t && --J.readyWait > 0) ||
              (pt.resolveWith(G, [J]),
              J.fn.triggerHandler &&
                (J(G).triggerHandler("ready"), J(G).off("ready"))));
        },
      }),
      (J.ready.promise = function (e) {
        return (
          pt ||
            ((pt = J.Deferred()),
            "complete" === G.readyState
              ? setTimeout(J.ready)
              : (G.addEventListener("DOMContentLoaded", s, !1),
                t.addEventListener("load", s, !1))),
          pt.promise(e)
        );
      }),
      J.ready.promise();
    var ft = (J.access = function (t, e, n, i, o, r, s) {
      var a = 0,
        l = t.length,
        c = null == n;
      if ("object" === J.type(n)) {
        o = !0;
        for (a in n) J.access(t, e, a, n[a], !0, r, s);
      } else if (
        void 0 !== i &&
        ((o = !0),
        J.isFunction(i) || (s = !0),
        c &&
          (s
            ? (e.call(t, i), (e = null))
            : ((c = e),
              (e = function (t, e, n) {
                return c.call(J(t), n);
              }))),
        e)
      )
        for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
    });
    (J.acceptData = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    }),
      (a.uid = 1),
      (a.accepts = J.acceptData),
      (a.prototype = {
        key: function (t) {
          if (!a.accepts(t)) return 0;
          var e = {},
            n = t[this.expando];
          if (!n) {
            n = a.uid++;
            try {
              (e[this.expando] = { value: n }), Object.defineProperties(t, e);
            } catch (i) {
              (e[this.expando] = n), J.extend(t, e);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (t, e, n) {
          var i,
            o = this.key(t),
            r = this.cache[o];
          if ("string" == typeof e) r[e] = n;
          else if (J.isEmptyObject(r)) J.extend(this.cache[o], e);
          else for (i in e) r[i] = e[i];
          return r;
        },
        get: function (t, e) {
          var n = this.cache[this.key(t)];
          return void 0 === e ? n : n[e];
        },
        access: function (t, e, n) {
          var i;
          return void 0 === e || (e && "string" == typeof e && void 0 === n)
            ? ((i = this.get(t, e)),
              void 0 !== i ? i : this.get(t, J.camelCase(e)))
            : (this.set(t, e, n), void 0 !== n ? n : e);
        },
        remove: function (t, e) {
          var n,
            i,
            o,
            r = this.key(t),
            s = this.cache[r];
          if (void 0 === e) this.cache[r] = {};
          else {
            J.isArray(e)
              ? (i = e.concat(e.map(J.camelCase)))
              : ((o = J.camelCase(e)),
                e in s
                  ? (i = [e, o])
                  : ((i = o), (i = i in s ? [i] : i.match(ct) || []))),
              (n = i.length);
            for (; n--; ) delete s[i[n]];
          }
        },
        hasData: function (t) {
          return !J.isEmptyObject(this.cache[t[this.expando]] || {});
        },
        discard: function (t) {
          t[this.expando] && delete this.cache[t[this.expando]];
        },
      });
    var dt = new a(),
      ht = new a(),
      gt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      mt = /([A-Z])/g;
    J.extend({
      hasData: function (t) {
        return ht.hasData(t) || dt.hasData(t);
      },
      data: function (t, e, n) {
        return ht.access(t, e, n);
      },
      removeData: function (t, e) {
        ht.remove(t, e);
      },
      _data: function (t, e, n) {
        return dt.access(t, e, n);
      },
      _removeData: function (t, e) {
        dt.remove(t, e);
      },
    }),
      J.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((o = ht.get(r)), 1 === r.nodeType && !dt.get(r, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((i = s[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = J.camelCase(i.slice(5))), l(r, i, o[i])));
              dt.set(r, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof t
            ? this.each(function () {
                ht.set(this, t);
              })
            : ft(
                this,
                function (e) {
                  var n,
                    i = J.camelCase(t);
                  if (r && void 0 === e) {
                    if (void 0 !== (n = ht.get(r, t))) return n;
                    if (void 0 !== (n = ht.get(r, i))) return n;
                    if (void 0 !== (n = l(r, i, void 0))) return n;
                  } else
                    this.each(function () {
                      var n = ht.get(this, i);
                      ht.set(this, i, e),
                        -1 !== t.indexOf("-") &&
                          void 0 !== n &&
                          ht.set(this, t, e);
                    });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            ht.remove(this, t);
          });
        },
      }),
      J.extend({
        queue: function (t, e, n) {
          var i;
          return t
            ? ((e = (e || "fx") + "queue"),
              (i = dt.get(t, e)),
              n &&
                (!i || J.isArray(n)
                  ? (i = dt.access(t, e, J.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = J.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = J._queueHooks(t, e),
            s = function () {
              J.dequeue(t, e);
            };
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete r.stop,
              o.call(t, s, r)),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            dt.get(t, n) ||
            dt.access(t, n, {
              empty: J.Callbacks("once memory").add(function () {
                dt.remove(t, [e + "queue", n]);
              }),
            })
          );
        },
      }),
      J.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? J.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = J.queue(this, t, e);
                  J._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            J.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = J.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            s--;

          )
            (n = dt.get(r[s], t + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), o.promise(e);
        },
      });
    var vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      yt = ["Top", "Right", "Bottom", "Left"],
      bt = function (t, e) {
        return (
          (t = e || t),
          "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        );
      },
      wt = /^(?:checkbox|radio)$/i;
    !(function () {
      var t = G.createDocumentFragment(),
        e = t.appendChild(G.createElement("div")),
        n = G.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        (K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var xt = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var Tt = /^key/,
      Ct = /^(?:mouse|pointer|contextmenu)|click/,
      kt = /^(?:focusinfocus|focusoutblur)$/,
      St = /^([^.]*)(?:\.(.+)|)$/;
    (J.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          p,
          f,
          d,
          h,
          g,
          m = dt.get(t);
        if (m)
          for (
            n.handler && ((r = n), (n = r.handler), (o = r.selector)),
              n.guid || (n.guid = J.guid++),
              (l = m.events) || (l = m.events = {}),
              (s = m.handle) ||
                (s = m.handle =
                  function (e) {
                    return typeof J !== xt && J.event.triggered !== e.type
                      ? J.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              e = (e || "").match(ct) || [""],
              c = e.length;
            c--;

          )
            (a = St.exec(e[c]) || []),
              (d = g = a[1]),
              (h = (a[2] || "").split(".").sort()),
              d &&
                ((p = J.event.special[d] || {}),
                (d = (o ? p.delegateType : p.bindType) || d),
                (p = J.event.special[d] || {}),
                (u = J.extend(
                  {
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  r
                )),
                (f = l[d]) ||
                  ((f = l[d] = []),
                  (f.delegateCount = 0),
                  (p.setup && !1 !== p.setup.call(t, i, h, s)) ||
                    (t.addEventListener && t.addEventListener(d, s, !1))),
                p.add &&
                  (p.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (J.event.global[d] = !0));
      },
      remove: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          p,
          f,
          d,
          h,
          g,
          m = dt.hasData(t) && dt.get(t);
        if (m && (l = m.events)) {
          for (e = (e || "").match(ct) || [""], c = e.length; c--; )
            if (
              ((a = St.exec(e[c]) || []),
              (d = g = a[1]),
              (h = (a[2] || "").split(".").sort()),
              d)
            ) {
              for (
                p = J.event.special[d] || {},
                  d = (i ? p.delegateType : p.bindType) || d,
                  f = l[d] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = r = f.length;
                r--;

              )
                (u = f[r]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (f.splice(r, 1),
                    u.selector && f.delegateCount--,
                    p.remove && p.remove.call(t, u));
              s &&
                !f.length &&
                ((p.teardown && !1 !== p.teardown.call(t, h, m.handle)) ||
                  J.removeEvent(t, d, m.handle),
                delete l[d]);
            } else for (d in l) J.event.remove(t, d + e[c], n, i, !0);
          J.isEmptyObject(l) && (delete m.handle, dt.remove(t, "events"));
        }
      },
      trigger: function (e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          p,
          f = [i || G],
          d = Y.call(e, "type") ? e.type : e,
          h = Y.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((s = a = i = i || G),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !kt.test(d + J.event.triggered) &&
            (d.indexOf(".") >= 0 &&
              ((h = d.split(".")), (d = h.shift()), h.sort()),
            (c = d.indexOf(":") < 0 && "on" + d),
            (e = e[J.expando] ? e : new J.Event(d, "object" == typeof e && e)),
            (e.isTrigger = o ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = i),
            (n = null == n ? [e] : J.makeArray(n, [e])),
            (p = J.event.special[d] || {}),
            o || !p.trigger || !1 !== p.trigger.apply(i, n)))
        ) {
          if (!o && !p.noBubble && !J.isWindow(i)) {
            for (
              l = p.delegateType || d, kt.test(l + d) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              f.push(s), (a = s);
            a === (i.ownerDocument || G) &&
              f.push(a.defaultView || a.parentWindow || t);
          }
          for (r = 0; (s = f[r++]) && !e.isPropagationStopped(); )
            (e.type = r > 1 ? l : p.bindType || d),
              (u = (dt.get(s, "events") || {})[e.type] && dt.get(s, "handle")),
              u && u.apply(s, n),
              (u = c && s[c]) &&
                u.apply &&
                J.acceptData(s) &&
                ((e.result = u.apply(s, n)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            o ||
              e.isDefaultPrevented() ||
              (p._default && !1 !== p._default.apply(f.pop(), n)) ||
              !J.acceptData(i) ||
              (c &&
                J.isFunction(i[d]) &&
                !J.isWindow(i) &&
                ((a = i[c]),
                a && (i[c] = null),
                (J.event.triggered = d),
                i[d](),
                (J.event.triggered = void 0),
                a && (i[c] = a))),
            e.result
          );
        }
      },
      dispatch: function (t) {
        t = J.event.fix(t);
        var e,
          n,
          i,
          o,
          r,
          s = [],
          a = W.call(arguments),
          l = (dt.get(this, "events") || {})[t.type] || [],
          c = J.event.special[t.type] || {};
        if (
          ((a[0] = t),
          (t.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, t))
        ) {
          for (
            s = J.event.handlers.call(this, t, l), e = 0;
            (o = s[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (!t.namespace_re || t.namespace_re.test(r.namespace)) &&
                ((t.handleObj = r),
                (t.data = r.data),
                void 0 !==
                  (i = (
                    (J.event.special[r.origType] || {}).handle || r.handler
                  ).apply(o.elem, a)) &&
                  !1 === (t.result = i) &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          r,
          s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && (!t.button || "click" !== t.type))
          for (; l !== this; l = l.parentNode || this)
            if (!0 !== l.disabled || "click" !== t.type) {
              for (i = [], n = 0; a > n; n++)
                (r = e[n]),
                  (o = r.selector + " "),
                  void 0 === i[o] &&
                    (i[o] = r.needsContext
                      ? J(o, this).index(l) >= 0
                      : J.find(o, this, null, [l]).length),
                  i[o] && i.push(r);
              i.length && s.push({ elem: l, handlers: i });
            }
        return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            i,
            o,
            r = e.button;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((n = t.target.ownerDocument || G),
              (i = n.documentElement),
              (o = n.body),
              (t.pageX =
                e.clientX +
                ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                ((i && i.clientTop) || (o && o.clientTop) || 0))),
            t.which ||
              void 0 === r ||
              (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            t
          );
        },
      },
      fix: function (t) {
        if (t[J.expando]) return t;
        var e,
          n,
          i,
          o = t.type,
          r = t,
          s = this.fixHooks[o];
        for (
          s ||
            (this.fixHooks[o] = s =
              Ct.test(o) ? this.mouseHooks : Tt.test(o) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            t = new J.Event(r),
            e = i.length;
          e--;

        )
          (n = i[e]), (t[n] = r[n]);
        return (
          t.target || (t.target = G),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          s.filter ? s.filter(t, r) : t
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== p() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              J.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return J.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n, i) {
        var o = J.extend(new J.Event(), n, {
          type: t,
          isSimulated: !0,
          originalEvent: {},
        });
        i ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o),
          o.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (J.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
      }),
      (J.Event = function (t, e) {
        return this instanceof J.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? c
                    : u))
              : (this.type = t),
            e && J.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || J.now()),
            void (this[J.expando] = !0))
          : new J.Event(t, e);
      }),
      (J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = c),
            t && t.preventDefault && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = c),
            t && t.stopPropagation && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      J.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = this,
                o = t.relatedTarget,
                r = t.handleObj;
              return (
                (!o || (o !== i && !J.contains(i, o))) &&
                  ((t.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      K.focusinBubbles ||
        J.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0);
          };
          J.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = dt.access(i, e);
              o || i.addEventListener(t, n, !0), dt.access(i, e, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = dt.access(i, e) - 1;
              o
                ? dt.access(i, e, o)
                : (i.removeEventListener(t, n, !0), dt.remove(i, e));
            },
          };
        }),
      J.fn.extend({
        on: function (t, e, n, i, o) {
          var r, s;
          if ("object" == typeof t) {
            "string" != typeof e && ((n = n || e), (e = void 0));
            for (s in t) this.on(s, e, n, t[s], o);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = e), (n = e = void 0))
              : null == i &&
                ("string" == typeof e
                  ? ((i = n), (n = void 0))
                  : ((i = n), (n = e), (e = void 0))),
            !1 === i)
          )
            i = u;
          else if (!i) return this;
          return (
            1 === o &&
              ((r = i),
              (i = function (t) {
                return J().off(t), r.apply(this, arguments);
              }),
              (i.guid = r.guid || (r.guid = J.guid++))),
            this.each(function () {
              J.event.add(this, t, i, n, e);
            })
          );
        },
        one: function (t, e, n, i) {
          return this.on(t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              J(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this;
          }
          return (
            (!1 === e || "function" == typeof e) && ((n = e), (e = void 0)),
            !1 === n && (n = u),
            this.each(function () {
              J.event.remove(this, t, n, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            J.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          return n ? J.event.trigger(t, e, n, !0) : void 0;
        },
      });
    var Et =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      $t = /<([\w:]+)/,
      It = /<|&#?\w+;/,
      Ot = /<(?:script|style|link)/i,
      At = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Nt = /^$|\/(?:java|ecma)script/i,
      Pt = /^true\/(.*)/,
      Dt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Dt.optgroup = Dt.option),
      (Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead),
      (Dt.th = Dt.td),
      J.extend({
        clone: function (t, e, n) {
          var i,
            o,
            r,
            s,
            a = t.cloneNode(!0),
            l = J.contains(t.ownerDocument, t);
          if (
            !(
              K.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              J.isXMLDoc(t)
            )
          )
            for (s = v(a), r = v(t), i = 0, o = r.length; o > i; i++)
              y(r[i], s[i]);
          if (e)
            if (n)
              for (
                r = r || v(t), s = s || v(a), i = 0, o = r.length;
                o > i;
                i++
              )
                m(r[i], s[i]);
            else m(t, a);
          return (
            (s = v(a, "script")), s.length > 0 && g(s, !l && v(t, "script")), a
          );
        },
        buildFragment: function (t, e, n, i) {
          for (
            var o,
              r,
              s,
              a,
              l,
              c,
              u = e.createDocumentFragment(),
              p = [],
              f = 0,
              d = t.length;
            d > f;
            f++
          )
            if ((o = t[f]) || 0 === o)
              if ("object" === J.type(o)) J.merge(p, o.nodeType ? [o] : o);
              else if (It.test(o)) {
                for (
                  r = r || u.appendChild(e.createElement("div")),
                    s = ($t.exec(o) || ["", ""])[1].toLowerCase(),
                    a = Dt[s] || Dt._default,
                    r.innerHTML = a[1] + o.replace(Et, "<$1></$2>") + a[2],
                    c = a[0];
                  c--;

                )
                  r = r.lastChild;
                J.merge(p, r.childNodes),
                  (r = u.firstChild),
                  (r.textContent = "");
              } else p.push(e.createTextNode(o));
          for (u.textContent = "", f = 0; (o = p[f++]); )
            if (
              (!i || -1 === J.inArray(o, i)) &&
              ((l = J.contains(o.ownerDocument, o)),
              (r = v(u.appendChild(o), "script")),
              l && g(r),
              n)
            )
              for (c = 0; (o = r[c++]); ) Nt.test(o.type || "") && n.push(o);
          return u;
        },
        cleanData: function (t) {
          for (
            var e, n, i, o, r = J.event.special, s = 0;
            void 0 !== (n = t[s]);
            s++
          ) {
            if (J.acceptData(n) && (o = n[dt.expando]) && (e = dt.cache[o])) {
              if (e.events)
                for (i in e.events)
                  r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
              dt.cache[o] && delete dt.cache[o];
            }
            delete ht.cache[n[ht.expando]];
          }
        },
      }),
      J.fn.extend({
        text: function (t) {
          return ft(
            this,
            function (t) {
              return void 0 === t
                ? J.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              f(this, t).appendChild(t);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = f(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        remove: function (t, e) {
          for (
            var n, i = t ? J.filter(t, this) : this, o = 0;
            null != (n = i[o]);
            o++
          )
            e || 1 !== n.nodeType || J.cleanData(v(n)),
              n.parentNode &&
                (e && J.contains(n.ownerDocument, n) && g(v(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (J.cleanData(v(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return J.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return ft(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !Ot.test(t) &&
                !Dt[($t.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = t.replace(Et, "<$1></$2>");
                try {
                  for (; i > n; n++)
                    (e = this[n] || {}),
                      1 === e.nodeType &&
                        (J.cleanData(v(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = arguments[0];
          return (
            this.domManip(arguments, function (e) {
              (t = this.parentNode),
                J.cleanData(v(this)),
                t && t.replaceChild(e, this);
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
          );
        },
        detach: function (t) {
          return this.remove(t, !0);
        },
        domManip: function (t, e) {
          t = B.apply([], t);
          var n,
            i,
            o,
            r,
            s,
            a,
            l = 0,
            c = this.length,
            u = this,
            p = c - 1,
            f = t[0],
            g = J.isFunction(f);
          if (
            g ||
            (c > 1 && "string" == typeof f && !K.checkClone && At.test(f))
          )
            return this.each(function (n) {
              var i = u.eq(n);
              g && (t[0] = f.call(this, n, i.html())), i.domManip(t, e);
            });
          if (
            c &&
            ((n = J.buildFragment(t, this[0].ownerDocument, !1, this)),
            (i = n.firstChild),
            1 === n.childNodes.length && (n = i),
            i)
          ) {
            for (o = J.map(v(n, "script"), d), r = o.length; c > l; l++)
              (s = n),
                l !== p &&
                  ((s = J.clone(s, !0, !0)), r && J.merge(o, v(s, "script"))),
                e.call(this[l], s, l);
            if (r)
              for (
                a = o[o.length - 1].ownerDocument, J.map(o, h), l = 0;
                r > l;
                l++
              )
                (s = o[l]),
                  Nt.test(s.type || "") &&
                    !dt.access(s, "globalEval") &&
                    J.contains(a, s) &&
                    (s.src
                      ? J._evalUrl && J._evalUrl(s.src)
                      : J.globalEval(
                          s.textContent.replace(
                            /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                            ""
                          )
                        ));
          }
          return this;
        },
      }),
      J.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          J.fn[t] = function (t) {
            for (var n, i = [], o = J(t), r = o.length - 1, s = 0; r >= s; s++)
              (n = s === r ? this : this.clone(!0)),
                J(o[s])[e](n),
                U.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var Lt,
      jt = {},
      _t = /^margin/,
      Ht = new RegExp("^(" + vt + ")(?!px)[a-z%]+$", "i"),
      Mt = function (e) {
        return e.ownerDocument.defaultView.opener
          ? e.ownerDocument.defaultView.getComputedStyle(e, null)
          : t.getComputedStyle(e, null);
      };
    !(function () {
      function e() {
        (s.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (s.innerHTML = ""),
          o.appendChild(r);
        var e = t.getComputedStyle(s, null);
        (n = "1%" !== e.top), (i = "4px" === e.width), o.removeChild(r);
      }
      var n,
        i,
        o = G.documentElement,
        r = G.createElement("div"),
        s = G.createElement("div");
      s.style &&
        ((s.style.backgroundClip = "content-box"),
        (s.cloneNode(!0).style.backgroundClip = ""),
        (K.clearCloneStyle = "content-box" === s.style.backgroundClip),
        (r.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        r.appendChild(s),
        t.getComputedStyle &&
          J.extend(K, {
            pixelPosition: function () {
              return e(), n;
            },
            boxSizingReliable: function () {
              return null == i && e(), i;
            },
            reliableMarginRight: function () {
              var e,
                n = s.appendChild(G.createElement("div"));
              return (
                (n.style.cssText = s.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (s.style.width = "1px"),
                o.appendChild(r),
                (e = !parseFloat(t.getComputedStyle(n, null).marginRight)),
                o.removeChild(r),
                s.removeChild(n),
                e
              );
            },
          }));
    })(),
      (J.swap = function (t, e, n, i) {
        var o,
          r,
          s = {};
        for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o;
      });
    var Rt = /^(none|table(?!-c[ea]).+)/,
      Ft = new RegExp("^(" + vt + ")(.*)$", "i"),
      zt = new RegExp("^([+-])=(" + vt + ")", "i"),
      qt = { position: "absolute", visibility: "hidden", display: "block" },
      Wt = { letterSpacing: "0", fontWeight: "400" },
      Bt = ["Webkit", "O", "Moz", "ms"];
    J.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = x(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
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
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            r,
            s,
            a = J.camelCase(e),
            l = t.style;
          return (
            (e = J.cssProps[a] || (J.cssProps[a] = C(l, a))),
            (s = J.cssHooks[e] || J.cssHooks[a]),
            void 0 === n
              ? s && "get" in s && void 0 !== (o = s.get(t, !1, i))
                ? o
                : l[e]
              : ((r = typeof n),
                "string" === r &&
                  (o = zt.exec(n)) &&
                  ((n = (o[1] + 1) * o[2] + parseFloat(J.css(t, e))),
                  (r = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" !== r || J.cssNumber[a] || (n += "px"),
                  K.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (l[e] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                    (l[e] = n))
                ))
          );
        }
      },
      css: function (t, e, n, i) {
        var o,
          r,
          s,
          a = J.camelCase(e);
        return (
          (e = J.cssProps[a] || (J.cssProps[a] = C(t.style, a))),
          (s = J.cssHooks[e] || J.cssHooks[a]),
          s && "get" in s && (o = s.get(t, !0, n)),
          void 0 === o && (o = x(t, e, i)),
          "normal" === o && e in Wt && (o = Wt[e]),
          "" === n || n
            ? ((r = parseFloat(o)), !0 === n || J.isNumeric(r) ? r || 0 : o)
            : o
        );
      },
    }),
      J.each(["height", "width"], function (t, e) {
        J.cssHooks[e] = {
          get: function (t, n, i) {
            return n
              ? Rt.test(J.css(t, "display")) && 0 === t.offsetWidth
                ? J.swap(t, qt, function () {
                    return E(t, e, i);
                  })
                : E(t, e, i)
              : void 0;
          },
          set: function (t, n, i) {
            var o = i && Mt(t);
            return k(
              t,
              n,
              i
                ? S(t, e, i, "border-box" === J.css(t, "boxSizing", !1, o), o)
                : 0
            );
          },
        };
      }),
      (J.cssHooks.marginRight = T(K.reliableMarginRight, function (t, e) {
        return e
          ? J.swap(t, { display: "inline-block" }, x, [t, "marginRight"])
          : void 0;
      })),
      J.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (J.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              o[t + yt[i] + e] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          _t.test(t) || (J.cssHooks[t + e].set = k);
      }),
      J.fn.extend({
        css: function (t, e) {
          return ft(
            this,
            function (t, e, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (J.isArray(e)) {
                for (i = Mt(t), o = e.length; o > s; s++)
                  r[e[s]] = J.css(t, e[s], !1, i);
                return r;
              }
              return void 0 !== n ? J.style(t, e, n) : J.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return $(this, !0);
        },
        hide: function () {
          return $(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                bt(this) ? J(this).show() : J(this).hide();
              });
        },
      }),
      (J.Tween = I),
      (I.prototype = {
        constructor: I,
        init: function (t, e, n, i, o, r) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || "swing"),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (J.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = I.propHooks[this.prop];
          return t && t.get ? t.get(this) : I.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = I.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e =
                  J.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
          );
        },
      }),
      (I.prototype.init.prototype = I.prototype),
      (I.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return null == t.elem[t.prop] ||
              (t.elem.style && null != t.elem.style[t.prop])
              ? ((e = J.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
              : t.elem[t.prop];
          },
          set: function (t) {
            J.fx.step[t.prop]
              ? J.fx.step[t.prop](t)
              : t.elem.style &&
                (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop])
              ? J.style(t.elem, t.prop, t.now + t.unit)
              : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (I.propHooks.scrollTop = I.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (J.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
      }),
      (J.fx = I.prototype.init),
      (J.fx.step = {});
    var Ut,
      Qt,
      Vt = /^(?:toggle|show|hide)$/,
      Xt = new RegExp("^(?:([+-])=|)(" + vt + ")([a-z%]*)$", "i"),
      Yt = /queueHooks$/,
      Kt = [P],
      Gt = {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e),
              i = n.cur(),
              o = Xt.exec(e),
              r = (o && o[3]) || (J.cssNumber[t] ? "" : "px"),
              s =
                (J.cssNumber[t] || ("px" !== r && +i)) &&
                Xt.exec(J.css(n.elem, t)),
              a = 1,
              l = 20;
            if (s && s[3] !== r) {
              (r = r || s[3]), (o = o || []), (s = +i || 1);
              do {
                (a = a || ".5"), (s /= a), J.style(n.elem, t, s + r);
              } while (a !== (a = n.cur() / i) && 1 !== a && --l);
            }
            return (
              o &&
                ((s = n.start = +s || +i || 0),
                (n.unit = r),
                (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
              n
            );
          },
        ],
      };
    (J.Animation = J.extend(L, {
      tweener: function (t, e) {
        J.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
        for (var n, i = 0, o = t.length; o > i; i++)
          (n = t[i]), (Gt[n] = Gt[n] || []), Gt[n].unshift(e);
      },
      prefilter: function (t, e) {
        e ? Kt.unshift(t) : Kt.push(t);
      },
    })),
      (J.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? J.extend({}, t)
            : {
                complete: n || (!n && e) || (J.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !J.isFunction(e) && e),
              };
        return (
          (i.duration = J.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in J.fx.speeds
            ? J.fx.speeds[i.duration]
            : J.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            J.isFunction(i.old) && i.old.call(this),
              i.queue && J.dequeue(this, i.queue);
          }),
          i
        );
      }),
      J.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(bt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var o = J.isEmptyObject(t),
            r = J.speed(e, n, i),
            s = function () {
              var e = L(this, J.extend({}, t), r);
              (o || dt.get(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                r = J.timers,
                s = dt.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && Yt.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != t && r[o].queue !== t) ||
                  (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
              (e || !n) && J.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                n = dt.get(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                r = J.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  J.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = r.length;
                e--;

              )
                r[e].elem === this &&
                  r[e].queue === t &&
                  (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; s > e; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      J.each(["toggle", "show", "hide"], function (t, e) {
        var n = J.fn[e];
        J.fn[e] = function (t, i, o) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(A(e, !0), t, i, o);
        };
      }),
      J.each(
        {
          slideDown: A("show"),
          slideUp: A("hide"),
          slideToggle: A("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          J.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (J.timers = []),
      (J.fx.tick = function () {
        var t,
          e = 0,
          n = J.timers;
        for (Ut = J.now(); e < n.length; e++)
          (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || J.fx.stop(), (Ut = void 0);
      }),
      (J.fx.timer = function (t) {
        J.timers.push(t), t() ? J.fx.start() : J.timers.pop();
      }),
      (J.fx.interval = 13),
      (J.fx.start = function () {
        Qt || (Qt = setInterval(J.fx.tick, J.fx.interval));
      }),
      (J.fx.stop = function () {
        clearInterval(Qt), (Qt = null);
      }),
      (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (J.fn.delay = function (t, e) {
        return (
          (t = J.fx ? J.fx.speeds[t] || t : t),
          (e = e || "fx"),
          this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var t = G.createElement("input"),
          e = G.createElement("select"),
          n = e.appendChild(G.createElement("option"));
        (t.type = "checkbox"),
          (K.checkOn = "" !== t.value),
          (K.optSelected = n.selected),
          (e.disabled = !0),
          (K.optDisabled = !n.disabled),
          (t = G.createElement("input")),
          (t.value = "t"),
          (t.type = "radio"),
          (K.radioValue = "t" === t.value);
      })();
    var Zt,
      Jt = J.expr.attrHandle;
    J.fn.extend({
      attr: function (t, e) {
        return ft(this, J.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          J.removeAttr(this, t);
        });
      },
    }),
      J.extend({
        attr: function (t, e, n) {
          var i,
            o,
            r = t.nodeType;
          if (t && 3 !== r && 8 !== r && 2 !== r)
            return typeof t.getAttribute === xt
              ? J.prop(t, e, n)
              : ((1 === r && J.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (i =
                    J.attrHooks[e] ||
                    (J.expr.match.bool.test(e) ? Zt : void 0))),
                void 0 === n
                  ? i && "get" in i && null !== (o = i.get(t, e))
                    ? o
                    : ((o = J.find.attr(t, e)), null == o ? void 0 : o)
                  : null !== n
                  ? i && "set" in i && void 0 !== (o = i.set(t, n, e))
                    ? o
                    : (t.setAttribute(e, n + ""), n)
                  : void J.removeAttr(t, e));
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            r = e && e.match(ct);
          if (r && 1 === t.nodeType)
            for (; (n = r[o++]); )
              (i = J.propFix[n] || n),
                J.expr.match.bool.test(n) && (t[i] = !1),
                t.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
      }),
      (Zt = {
        set: function (t, e, n) {
          return !1 === e ? J.removeAttr(t, n) : t.setAttribute(n, n), n;
        },
      }),
      J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Jt[e] || J.find.attr;
        Jt[e] = function (t, e, i) {
          var o, r;
          return (
            i ||
              ((r = Jt[e]),
              (Jt[e] = o),
              (o = null != n(t, e, i) ? e.toLowerCase() : null),
              (Jt[e] = r)),
            o
          );
        };
      });
    var te = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
      prop: function (t, e) {
        return ft(this, J.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[J.propFix[t] || t];
        });
      },
    }),
      J.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (t, e, n) {
          var i,
            o,
            r,
            s = t.nodeType;
          if (t && 3 !== s && 8 !== s && 2 !== s)
            return (
              (r = 1 !== s || !J.isXMLDoc(t)),
              r && ((e = J.propFix[e] || e), (o = J.propHooks[e])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              return t.hasAttribute("tabindex") || te.test(t.nodeName) || t.href
                ? t.tabIndex
                : -1;
            },
          },
        },
      }),
      K.optSelected ||
        (J.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
        }),
      J.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          J.propFix[this.toLowerCase()] = this;
        }
      );
    var ee = /[\t\r\n\f]/g;
    J.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a = "string" == typeof t && t,
          l = 0,
          c = this.length;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).addClass(t.call(this, e, this.className));
          });
        if (a)
          for (e = (t || "").match(ct) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ee, " ")
                  : " ")))
            ) {
              for (r = 0; (o = e[r++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              (s = J.trim(i)), n.className !== s && (n.className = s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a = 0 === arguments.length || ("string" == typeof t && t),
          l = 0,
          c = this.length;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).removeClass(t.call(this, e, this.className));
          });
        if (a)
          for (e = (t || "").match(ct) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ee, " ")
                  : "")))
            ) {
              for (r = 0; (o = e[r++]); )
                for (; i.indexOf(" " + o + " ") >= 0; )
                  i = i.replace(" " + o + " ", " ");
              (s = t ? J.trim(i) : ""), n.className !== s && (n.className = s);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : this.each(
              J.isFunction(t)
                ? function (n) {
                    J(this).toggleClass(t.call(this, n, this.className, e), e);
                  }
                : function () {
                    if ("string" === n)
                      for (
                        var e, i = 0, o = J(this), r = t.match(ct) || [];
                        (e = r[i++]);

                      )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                      (n === xt || "boolean" === n) &&
                        (this.className &&
                          dt.set(this, "__className__", this.className),
                        (this.className =
                          this.className || !1 === t
                            ? ""
                            : dt.get(this, "__className__") || ""));
                  }
            );
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(ee, " ").indexOf(e) >= 0
          )
            return !0;
        return !1;
      },
    });
    J.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = J.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                ((o = i ? t.call(this, n, J(this).val()) : t),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : J.isArray(o) &&
                    (o = J.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  J.valHooks[this.type] ||
                  J.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? ((e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()]),
            e && "get" in e && void 0 !== (n = e.get(o, "value"))
              ? n
              : ((n = o.value),
                "string" == typeof n
                  ? n.replace(/\r/g, "")
                  : null == n
                  ? ""
                  : n))
          : void 0;
      },
    }),
      J.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = J.find.attr(t, "value");
              return null != e ? e : J.trim(J.text(t));
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  r = "select-one" === t.type || 0 > o,
                  s = r ? null : [],
                  a = r ? o + 1 : i.length,
                  l = 0 > o ? a : r ? o : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]),
                  !(
                    (!n.selected && l !== o) ||
                    (K.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      J.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((e = J(n).val()), r)) return e;
                  s.push(e);
                }
              return s;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, r = J.makeArray(e), s = o.length;
                s--;

              )
                (i = o[s]),
                  (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
              return n || (t.selectedIndex = -1), r;
            },
          },
        },
      }),
      J.each(["radio", "checkbox"], function () {
        (J.valHooks[this] = {
          set: function (t, e) {
            return J.isArray(e)
              ? (t.checked = J.inArray(J(t).val(), e) >= 0)
              : void 0;
          },
        }),
          K.checkOn ||
            (J.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      J.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          J.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      J.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      });
    var ne = J.now(),
      ie = /\?/;
    (J.parseJSON = function (t) {
      return JSON.parse(t + "");
    }),
      (J.parseXML = function (t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
          (n = new DOMParser()), (e = n.parseFromString(t, "text/xml"));
        } catch (t) {
          e = void 0;
        }
        return (
          (!e || e.getElementsByTagName("parsererror").length) &&
            J.error("Invalid XML: " + t),
          e
        );
      });
    var oe = /([?&])_=[^&]*/,
      re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      se = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ae = /^(?:GET|HEAD)$/,
      le = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      ce = {},
      ue = {},
      pe = "*/".concat("*"),
      fe = t.location.href,
      de = le.exec(fe.toLowerCase()) || [];
    J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fe,
        type: "GET",
        isLocal: se.test(de[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pe,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": J.parseJSON,
          "text xml": J.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? H(H(t, J.ajaxSettings), e) : H(J.ajaxSettings, t);
      },
      ajaxPrefilter: j(ce),
      ajaxTransport: j(ue),
      ajax: function (t, e) {
        function n(t, e, n, s) {
          var l,
            u,
            v,
            y,
            w,
            T = e;
          2 !== b &&
            ((b = 2),
            a && clearTimeout(a),
            (i = void 0),
            (r = s || ""),
            (x.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            n && (y = M(p, x, n)),
            (y = R(p, y, x, l)),
            l
              ? (p.ifModified &&
                  ((w = x.getResponseHeader("Last-Modified")),
                  w && (J.lastModified[o] = w),
                  (w = x.getResponseHeader("etag")) && (J.etag[o] = w)),
                204 === t || "HEAD" === p.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = y.state), (u = y.data), (v = y.error), (l = !v)))
              : ((v = T), (t || !T) && ((T = "error"), 0 > t && (t = 0))),
            (x.status = t),
            (x.statusText = (e || T) + ""),
            l ? h.resolveWith(f, [u, T, x]) : h.rejectWith(f, [x, T, v]),
            x.statusCode(m),
            (m = void 0),
            c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? u : v]),
            g.fireWith(f, [x, T]),
            c &&
              (d.trigger("ajaxComplete", [x, p]),
              --J.active || J.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          p = J.ajaxSetup({}, e),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? J(f) : J.event,
          h = J.Deferred(),
          g = J.Callbacks("once memory"),
          m = p.statusCode || {},
          v = {},
          y = {},
          b = 0,
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!s)
                  for (s = {}; (e = re.exec(r)); ) s[e[1].toLowerCase()] = e[2];
                e = s[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? r : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return b || ((t = y[n] = y[n] || t), (v[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (p.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) m[e] = [m[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || w;
              return i && i.abort(e), n(0, e), this;
            },
          };
        if (
          ((h.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (p.url = ((t || p.url || fe) + "")
            .replace(/#.*$/, "")
            .replace(/^\/\//, de[1] + "//")),
          (p.type = e.method || e.type || p.method || p.type),
          (p.dataTypes = J.trim(p.dataType || "*")
            .toLowerCase()
            .match(ct) || [""]),
          null == p.crossDomain &&
            ((l = le.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !l ||
              (l[1] === de[1] &&
                l[2] === de[2] &&
                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                  (de[3] || ("http:" === de[1] ? "80" : "443")))
            ))),
          p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = J.param(p.data, p.traditional)),
          _(ce, p, e, x),
          2 === b)
        )
          return x;
        (c = J.event && p.global),
          c && 0 == J.active++ && J.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !ae.test(p.type)),
          (o = p.url),
          p.hasContent ||
            (p.data &&
              ((o = p.url += (ie.test(o) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              (p.url = oe.test(o)
                ? o.replace(oe, "$1_=" + ne++)
                : o + (ie.test(o) ? "&" : "?") + "_=" + ne++)),
          p.ifModified &&
            (J.lastModified[o] &&
              x.setRequestHeader("If-Modified-Since", J.lastModified[o]),
            J.etag[o] && x.setRequestHeader("If-None-Match", J.etag[o])),
          ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) &&
            x.setRequestHeader("Content-Type", p.contentType),
          x.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + pe + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (u in p.headers) x.setRequestHeader(u, p.headers[u]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, x, p) || 2 === b))
          return x.abort();
        w = "abort";
        for (u in { success: 1, error: 1, complete: 1 }) x[u](p[u]);
        if ((i = _(ue, p, e, x))) {
          (x.readyState = 1),
            c && d.trigger("ajaxSend", [x, p]),
            p.async &&
              p.timeout > 0 &&
              (a = setTimeout(function () {
                x.abort("timeout");
              }, p.timeout));
          try {
            (b = 1), i.send(v, n);
          } catch (t) {
            if (!(2 > b)) throw t;
            n(-1, t);
          }
        } else n(-1, "No Transport");
        return x;
      },
      getJSON: function (t, e, n) {
        return J.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return J.get(t, void 0, e, "script");
      },
    }),
      J.each(["get", "post"], function (t, e) {
        J[e] = function (t, n, i, o) {
          return (
            J.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            J.ajax({ url: t, type: e, dataType: o, data: n, success: i })
          );
        };
      }),
      (J._evalUrl = function (t) {
        return J.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      J.fn.extend({
        wrapAll: function (t) {
          var e;
          return J.isFunction(t)
            ? this.each(function (e) {
                J(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = J(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (t) {
          return this.each(
            J.isFunction(t)
              ? function (e) {
                  J(this).wrapInner(t.call(this, e));
                }
              : function () {
                  var e = J(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                }
          );
        },
        wrap: function (t) {
          var e = J.isFunction(t);
          return this.each(function (n) {
            J(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (J.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0;
      }),
      (J.expr.filters.visible = function (t) {
        return !J.expr.filters.hidden(t);
      });
    var he = /\[\]$/,
      ge = /^(?:submit|button|image|reset|file)$/i,
      me = /^(?:input|select|textarea|keygen)/i;
    (J.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = J.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional),
        J.isArray(t) || (t.jquery && !J.isPlainObject(t)))
      )
        J.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) F(n, t[n], e, o);
      return i.join("&").replace(/%20/g, "+");
    }),
      J.fn.extend({
        serialize: function () {
          return J.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = J.prop(this, "elements");
            return t ? J.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !J(this).is(":disabled") &&
                me.test(this.nodeName) &&
                !ge.test(t) &&
                (this.checked || !wt.test(t))
              );
            })
            .map(function (t, e) {
              var n = J(this).val();
              return null == n
                ? null
                : J.isArray(n)
                ? J.map(n, function (t) {
                    return { name: e.name, value: t.replace(/\r?\n/g, "\r\n") };
                  })
                : { name: e.name, value: n.replace(/\r?\n/g, "\r\n") };
            })
            .get();
        },
      }),
      (J.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (t) {}
      });
    var ve = 0,
      ye = {},
      be = { 0: 200, 1223: 204 },
      we = J.ajaxSettings.xhr();
    t.attachEvent &&
      t.attachEvent("onunload", function () {
        for (var t in ye) ye[t]();
      }),
      (K.cors = !!we && "withCredentials" in we),
      (K.ajax = we = !!we),
      J.ajaxTransport(function (t) {
        var e;
        return K.cors || (we && !t.crossDomain)
          ? {
              send: function (n, i) {
                var o,
                  r = t.xhr(),
                  s = ++ve;
                if (
                  (r.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType &&
                  r.overrideMimeType &&
                  r.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                (e = function (t) {
                  return function () {
                    e &&
                      (delete ye[s],
                      (e = r.onload = r.onerror = null),
                      "abort" === t
                        ? r.abort()
                        : "error" === t
                        ? i(r.status, r.statusText)
                        : i(
                            be[r.status] || r.status,
                            r.statusText,
                            "string" == typeof r.responseText
                              ? { text: r.responseText }
                              : void 0,
                            r.getAllResponseHeaders()
                          ));
                  };
                }),
                  (r.onload = e()),
                  (r.onerror = e("error")),
                  (e = ye[s] = e("abort"));
                try {
                  r.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            }
          : void 0;
      }),
      J.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (t) {
            return J.globalEval(t), t;
          },
        },
      }),
      J.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      J.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e, n;
          return {
            send: function (i, o) {
              (e = J("<script>")
                .prop({ async: !0, charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (n = function (t) {
                    e.remove(),
                      (n = null),
                      t && o("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                G.head.appendChild(e[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var xe = [],
      Te = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = xe.pop() || J.expando + "_" + ne++;
        return (this[t] = !0), t;
      },
    }),
      J.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== e.jsonp &&
            (Te.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Te.test(e.data) &&
                "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((o = e.jsonpCallback =
              J.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Te, "$1" + o))
              : !1 !== e.jsonp &&
                (e.url += (ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return s || J.error(o + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (r = t[o]),
            (t[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              (t[o] = r),
                e[o] && ((e.jsonpCallback = n.jsonpCallback), xe.push(o)),
                s && J.isFunction(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (J.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || G);
        var i = it.exec(t),
          o = !n && [];
        return i
          ? [e.createElement(i[1])]
          : ((i = J.buildFragment([t], e, o)),
            o && o.length && J(o).remove(),
            J.merge([], i.childNodes));
      });
    var Ce = J.fn.load;
    (J.fn.load = function (t, e, n) {
      if ("string" != typeof t && Ce) return Ce.apply(this, arguments);
      var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");
      return (
        a >= 0 && ((i = J.trim(t.slice(a))), (t = t.slice(0, a))),
        J.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        s.length > 0 &&
          J.ajax({ url: t, type: o, dataType: "html", data: e })
            .done(function (t) {
              (r = arguments),
                s.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t);
            })
            .complete(
              n &&
                function (t, e) {
                  s.each(n, r || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
      J.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          J.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (J.expr.filters.animated = function (t) {
        return J.grep(J.timers, function (e) {
          return t === e.elem;
        }).length;
      });
    var ke = t.document.documentElement;
    (J.offset = {
      setOffset: function (t, e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = J.css(t, "position"),
          p = J(t),
          f = {};
        "static" === u && (t.style.position = "relative"),
          (a = p.offset()),
          (r = J.css(t, "top")),
          (l = J.css(t, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            (r + l).indexOf("auto") > -1),
          c
            ? ((i = p.position()), (s = i.top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          J.isFunction(e) && (e = e.call(t, n, a)),
          null != e.top && (f.top = e.top - a.top + s),
          null != e.left && (f.left = e.left - a.left + o),
          "using" in e ? e.using.call(t, f) : p.css(f);
      },
    }),
      J.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  J.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0],
            o = { top: 0, left: 0 },
            r = i && i.ownerDocument;
          return r
            ? ((e = r.documentElement),
              J.contains(e, i)
                ? (typeof i.getBoundingClientRect !== xt &&
                    (o = i.getBoundingClientRect()),
                  (n = z(r)),
                  {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft,
                  })
                : o)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === J.css(n, "position")
                ? (e = n.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  J.nodeName(t[0], "html") || (i = t.offset()),
                  (i.top += J.css(t[0], "borderTopWidth", !0)),
                  (i.left += J.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - i.top - J.css(n, "marginTop", !0),
                left: e.left - i.left - J.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent || ke;
              t && !J.nodeName(t, "html") && "static" === J.css(t, "position");

            )
              t = t.offsetParent;
            return t || ke;
          });
        },
      }),
      J.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, n) {
          var i = "pageYOffset" === n;
          J.fn[e] = function (o) {
            return ft(
              this,
              function (e, o, r) {
                var s = z(e);
                return void 0 === r
                  ? s
                    ? s[n]
                    : e[o]
                  : void (s
                      ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset)
                      : (e[o] = r));
              },
              e,
              o,
              arguments.length,
              null
            );
          };
        }
      ),
      J.each(["top", "left"], function (t, e) {
        J.cssHooks[e] = T(K.pixelPosition, function (t, n) {
          return n
            ? ((n = x(t, e)), Ht.test(n) ? J(t).position()[e] + "px" : n)
            : void 0;
        });
      }),
      J.each({ Height: "height", Width: "width" }, function (t, e) {
        J.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            J.fn[i] = function (i, o) {
              var r = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return ft(
                this,
                function (e, n, i) {
                  var o;
                  return J.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? J.css(e, n, s)
                    : J.style(e, n, i, s);
                },
                e,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      (J.fn.size = function () {
        return this.length;
      }),
      (J.fn.andSelf = J.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return J;
        });
    var Se = t.jQuery,
      Ee = t.$;
    return (
      (J.noConflict = function (e) {
        return (
          t.$ === J && (t.$ = Ee), e && t.jQuery === J && (t.jQuery = Se), J
        );
      }),
      typeof e === xt && (t.jQuery = t.$ = J),
      J
    );
  }),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, n, i, o) {
      return jQuery.easing[jQuery.easing.def](t, e, n, i, o);
    },
    easeInQuad: function (t, e, n, i, o) {
      return i * (e /= o) * e + n;
    },
    easeOutQuad: function (t, e, n, i, o) {
      return -i * (e /= o) * (e - 2) + n;
    },
    easeInOutQuad: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e + n
        : (-i / 2) * (--e * (e - 2) - 1) + n;
    },
    easeInCubic: function (t, e, n, i, o) {
      return i * (e /= o) * e * e + n;
    },
    easeOutCubic: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e + 1) + n;
    },
    easeInOutCubic: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e + 2) + n;
    },
    easeInQuart: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e + n;
    },
    easeOutQuart: function (t, e, n, i, o) {
      return -i * ((e = e / o - 1) * e * e * e - 1) + n;
    },
    easeInOutQuart: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e + n
        : (-i / 2) * ((e -= 2) * e * e * e - 2) + n;
    },
    easeInQuint: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e * e + n;
    },
    easeOutQuint: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e * e * e + 1) + n;
    },
    easeInOutQuint: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e * e * e + 2) + n;
    },
    easeInSine: function (t, e, n, i, o) {
      return -i * Math.cos((e / o) * (Math.PI / 2)) + i + n;
    },
    easeOutSine: function (t, e, n, i, o) {
      return i * Math.sin((e / o) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (t, e, n, i, o) {
      return (-i / 2) * (Math.cos((Math.PI * e) / o) - 1) + n;
    },
    easeInExpo: function (t, e, n, i, o) {
      return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n;
    },
    easeOutExpo: function (t, e, n, i, o) {
      return e == o ? n + i : i * (1 - Math.pow(2, (-10 * e) / o)) + n;
    },
    easeInOutExpo: function (t, e, n, i, o) {
      return 0 == e
        ? n
        : e == o
        ? n + i
        : (e /= o / 2) < 1
        ? (i / 2) * Math.pow(2, 10 * (e - 1)) + n
        : (i / 2) * (2 - Math.pow(2, -10 * --e)) + n;
    },
    easeInCirc: function (t, e, n, i, o) {
      return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n;
    },
    easeOutCirc: function (t, e, n, i, o) {
      return i * Math.sqrt(1 - (e = e / o - 1) * e) + n;
    },
    easeInOutCirc: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + n
        : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
    },
    easeInElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((s || (s = 0.3 * o), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return (
        -(a * Math.pow(2, 10 * (e -= 1))) *
          Math.sin(((e * o - r) * (2 * Math.PI)) / s) +
        n
      );
    },
    easeOutElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((s || (s = 0.3 * o), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return (
        a * Math.pow(2, -10 * e) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) +
        i +
        n
      );
    },
    easeInOutElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (2 == (e /= o / 2)) return n + i;
      if ((s || (s = o * (0.3 * 1.5)), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return e < 1
        ? a *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e * o - r) * (2 * Math.PI)) / s) *
            -0.5 +
            n
        : a *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e * o - r) * (2 * Math.PI)) / s) *
            0.5 +
            i +
            n;
    },
    easeInBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
      );
    },
    easeOutBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158),
        i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
      );
    },
    easeInOutBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158),
        (e /= o / 2) < 1
          ? (i / 2) * (e * e * ((1 + (r *= 1.525)) * e - r)) + n
          : (i / 2) * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + n
      );
    },
    easeInBounce: function (t, e, n, i, o) {
      return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n;
    },
    easeOutBounce: function (t, e, n, i, o) {
      return (e /= o) < 1 / 2.75
        ? i * (7.5625 * e * e) + n
        : e < 2 / 2.75
        ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
        : e < 2.5 / 2.75
        ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
        : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
    },
    easeInOutBounce: function (t, e, n, i, o) {
      return e < o / 2
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) +
            0.5 * i +
            n;
    },
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  (function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var n = !1,
        i = this;
      t(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      var o = function () {
        n || t(i).trigger(t.support.transition.end);
      };
      return setTimeout(o, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.alert");
        o || n.data("bs.alert", (o = new i(this))),
          "string" == typeof e && o[e].call(n);
      });
    }
    var n = '[data-dismiss="alert"]',
      i = function (e) {
        t(e).on("click", n, this.close);
      };
    (i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function (e) {
        function n() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this),
          r = o.attr("data-target");
        r || ((r = o.attr("href")), (r = r && r.replace(/.*(?=#[^\s]*$)/, "")));
        var s = t(r);
        e && e.preventDefault(),
          s.length || (s = o.closest(".alert")),
          s.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n());
      });
    var o = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = i),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = o), this;
      }),
      t(document).on("click.bs.alert.data-api", n, i.prototype.close);
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.button"),
          r = "object" == typeof e && e;
        o || i.data("bs.button", (o = new n(this, r))),
          "toggle" == e ? o.toggle() : e && o.setState(e);
      });
    }
    var n = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.3.5"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (e) {
        var n = "disabled",
          i = this.$element,
          o = i.is("input") ? "val" : "html",
          r = i.data();
        (e += "Text"),
          null == r.resetText && i.data("resetText", i[o]()),
          setTimeout(
            t.proxy(function () {
              i[o](null == r[e] ? this.options[e] : r[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), i.addClass(n).attr(n, n))
                  : this.isLoading &&
                    ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var i = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = n),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = i), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")),
              e.call(i, "toggle"),
              t(n.target).is('input[type="radio"]') ||
                t(n.target).is('input[type="checkbox"]') ||
                n.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.carousel"),
          r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
          s = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", (o = new n(this, r))),
          "number" == typeof e
            ? o.to(e)
            : s
            ? o[s]()
            : r.interval && o.pause().cycle();
      });
    }
    var n = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (n.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var i = "prev" == t ? -1 : 1,
          o = (n + i) % this.$items.length;
        return this.$items.eq(o);
      }),
      (n.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : n == t
          ? this.pause().cycle()
          : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
      }),
      (n.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"),
          r = i || this.getItemForDirection(e, o),
          s = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (r.hasClass("active")) return (this.sliding = !1);
        var c = r[0],
          u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), s && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var p = t(this.$indicators.children()[this.getItemIndex(r)]);
            p && p.addClass("active");
          }
          var f = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (r.addClass(e),
                r[0].offsetWidth,
                o.addClass(a),
                r.addClass(a),
                o
                  .one("bsTransitionEnd", function () {
                    r.removeClass([e, a].join(" ")).addClass("active"),
                      o.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(f);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (o.removeClass("active"),
                r.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(f)),
            s && this.cycle(),
            this
          );
        }
      });
    var i = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = n),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = i), this;
      });
    var o = function (n) {
      var i,
        o = t(this),
        r = t(
          o.attr("data-target") ||
            ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (r.hasClass("carousel")) {
        var s = t.extend({}, r.data(), o.data()),
          a = o.attr("data-slide-to");
        a && (s.interval = !1),
          e.call(r, s),
          a && r.data("bs.carousel").to(a),
          n.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", o)
      .on("click.bs.carousel.data-api", "[data-slide-to]", o),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var n = t(this);
          e.call(n, n.data());
        });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      var n,
        i =
          e.attr("data-target") ||
          ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return t(i);
    }
    function n(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.collapse"),
          r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
          o || n.data("bs.collapse", (o = new i(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            o =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)
          ) {
            var r = t.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              o &&
                o.length &&
                (n.call(o, "hide"), e || o.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [s](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var o = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", t.proxy(o, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (n, i) {
              var o = t(i);
              this.addAriaAndCollapsedClass(e(o), o);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var o = t.fn.collapse;
    (t.fn.collapse = n),
      (t.fn.collapse.Constructor = i),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = o), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var o = t(this);
          o.attr("data-target") || i.preventDefault();
          var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
          n.call(r, a);
        }
      );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      var n = e.attr("data-target");
      n ||
        ((n = e.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var i = n && t(n);
      return i && i.length ? i : e.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (t(o).remove(),
        t(r).each(function () {
          var i = t(this),
            o = e(i),
            r = { relatedTarget: this };
          o.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              t.contains(o[0], n.target)) ||
              (o.trigger((n = t.Event("hide.bs.dropdown", r))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                o.removeClass("open").trigger("hidden.bs.dropdown", r))));
        }));
    }
    function i(e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new s(this))),
          "string" == typeof e && i[e].call(n);
      });
    }
    var o = ".dropdown-backdrop",
      r = '[data-toggle="dropdown"]',
      s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (s.VERSION = "3.3.5"),
      (s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
          var r = e(o),
            s = r.hasClass("open");
          if ((n(), !s)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", n);
            var a = { relatedTarget: this };
            if (
              (r.trigger((i = t.Event("show.bs.dropdown", a))),
              i.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger("shown.bs.dropdown", a);
          }
          return !1;
        }
      }),
      (s.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = t(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var o = e(i),
              s = o.hasClass("open");
            if ((!s && 27 != n.which) || (s && 27 == n.which))
              return (
                27 == n.which && o.find(r).trigger("focus"), i.trigger("click")
              );
            var a = o.find(".dropdown-menu li:not(.disabled):visible a");
            if (a.length) {
              var l = a.index(n.target);
              38 == n.which && l > 0 && l--,
                40 == n.which && l < a.length - 1 && l++,
                ~l || (l = 0),
                a.eq(l).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = i),
      (t.fn.dropdown.Constructor = s),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", r, s.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", r, s.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          s.prototype.keydown
        );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e, i) {
      return this.each(function () {
        var o = t(this),
          r = o.data("bs.modal"),
          s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", (r = new n(this, s))),
          "string" == typeof e ? r[e](i) : s.show && r.show(i);
      });
    }
    var n = function (e, n) {
      (this.options = n),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (n.prototype.show = function (e) {
        var i = this,
          o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o),
          this.isShown ||
            o.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var o = t.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                o && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var r = t.Event("shown.bs.modal", { relatedTarget: e });
              o
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(r);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(r);
            }));
      }),
      (n.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (e) {
        var i = this,
          o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = t.support.transition && o;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + o)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          r
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            i.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else e && e();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var i = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = n),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = i), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = t(this),
            o = i.attr("href"),
            r = t(
              i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = r.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
          i.is("a") && n.preventDefault(),
            r.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            e.call(r, s, this);
        }
      );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) &&
          (o || i.data("bs.tooltip", (o = new n(this, r))),
          "string" == typeof e && o[e]());
      });
    }
    var n = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (n.prototype.init = function (e, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
          var s = o[r];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (n.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              n[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (n.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          e instanceof t.Event &&
            (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState
            ? void (n.hoverState = "in")
            : (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              n.options.delay && n.options.delay.show
                ? void (n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show();
                  }, n.options.delay.show))
                : n.show())
        );
      }),
      (n.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (n.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          e instanceof t.Event &&
            (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          n.isInStateTrue()
            ? void 0
            : (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              n.options.delay && n.options.delay.hide
                ? void (n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide();
                  }, n.options.delay.hide))
                : n.hide())
        );
      }),
      (n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !i) return;
          var o = this,
            r = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            r.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && r.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var u = this.getPosition(),
            p = r[0].offsetWidth,
            f = r[0].offsetHeight;
          if (c) {
            var d = a,
              h = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && u.bottom + f > h.bottom
                ? "top"
                : "top" == a && u.top - f < h.top
                ? "bottom"
                : "right" == a && u.right + p > h.width
                ? "left"
                : "left" == a && u.left - p < h.left
                ? "right"
                : a),
              r.removeClass(d).addClass(a);
          }
          var g = this.getCalculatedOffset(a, u, p, f);
          this.applyPlacement(g, a);
          var m = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == t && o.leave(o);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : m();
        }
      }),
      (n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
          o = i[0].offsetWidth,
          r = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (e.top += s),
          (e.left += a),
          t.offset.setOffset(
            i[0],
            t.extend(
              {
                using: function (t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? (e.left += u.left) : (e.top += u.top);
        var p = /top|bottom/.test(n),
          f = p ? 2 * u.left - o + l : 2 * u.top - r + c,
          d = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(f, i[0][d], p);
      }),
      (n.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (n.prototype.hide = function (e) {
        function i() {
          "in" != o.hoverState && r.detach(),
            o.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + o.type),
            e && e();
        }
        var o = this,
          r = t(this.$tip),
          s = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              t.support.transition && r.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
          i = "BODY" == n.tagName,
          o = n.getBoundingClientRect();
        null == o.width &&
          (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var r = i ? { top: 0, left: 0 } : e.offset(),
          s = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          a = i
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, o, s, a, r);
      }),
      (n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - r - s.scroll,
            l = e.top + r - s.scroll + i;
          a < s.top
            ? (o.top = s.top - a)
            : l > s.top + s.height && (o.top = s.top + s.height - l);
        } else {
          var c = e.left - r,
            u = e.left + r + n;
          c < s.left
            ? (o.left = s.left - c)
            : u > s.right && (o.left = s.left + s.width - u);
        }
        return o;
      }),
      (n.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (n.prototype.getUID = function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      }),
      (n.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (n.prototype.enable = function () {
        this.enabled = !0;
      }),
      (n.prototype.disable = function () {
        this.enabled = !1;
      }),
      (n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (n.prototype.toggle = function (e) {
        var n = this;
        e &&
          ((n = t(e.currentTarget).data("bs." + this.type)) ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n))),
          e
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null);
          });
      });
    var i = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = n),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = i), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.popover"),
          r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) &&
          (o || i.data("bs.popover", (o = new n(this, r))),
          "string" == typeof e && o[e]());
      });
    }
    var n = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.3.5"),
      (n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = n),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = i), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(n, i) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(n).is(document.body) ? window : n)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.scrollspy"),
          r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", (o = new e(this, r))),
          "string" == typeof n && o[n]();
      });
    }
    (e.VERSION = "3.3.5"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          n = "offset",
          i = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((n = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
              return (
                (r && r.length && r.is(":visible") && [[r[n]().top + i, o]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          o = this.offsets,
          r = this.targets,
          s = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), e >= i))
          return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return (this.activeTarget = null), this.clear();
        for (t = o.length; t--; )
          s != r[t] &&
            e >= o[t] &&
            (void 0 === o[t + 1] || e < o[t + 1]) &&
            this.activate(r[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var i = t.fn.scrollspy;
    (t.fn.scrollspy = n),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = i), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          n.call(e, e.data());
        });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new n(this))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e) {
      this.element = t(e);
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var e = this.element,
          n = e.closest("ul:not(.dropdown-menu)"),
          i = e.data("target");
        if (
          (i ||
            ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var o = n.find(".active:last a"),
            r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            s = t.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(r),
            e.trigger(s),
            !s.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var a = t(i);
            this.activate(e.closest("li"), n),
              this.activate(a, a.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (e, i, o) {
        function r() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var s = i.find("> .active"),
          a =
            o &&
            t.support.transition &&
            ((s.length && s.hasClass("fade")) || !!i.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", r)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : r(),
          s.removeClass("in");
      });
    var i = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = n),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = i), this;
      });
    var o = function (n) {
      n.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.affix"),
          r = "object" == typeof e && e;
        o || i.data("bs.affix", (o = new n(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e, i) {
      (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (n.VERSION = "3.3.5"),
      (n.RESET = "affix affix-top affix-bottom"),
      (n.DEFAULTS = { offset: 0, target: window }),
      (n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
          r = this.$element.offset(),
          s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(o + this.unpin <= r.top) && "bottom"
            : !(t - i >= o + s) && "bottom";
        var a = null == this.affixed,
          l = a ? o : r.top,
          c = a ? s : e;
        return null != n && n >= o
          ? "top"
          : null != i && l + c >= t - i && "bottom";
      }),
      (n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            r = i.bottom,
            s = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof i && (r = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
          var a = this.getState(s, e, o, r);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              c = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(n.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: s - e - r });
        }
      });
    var i = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = n),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = i), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var n = t(this),
            i = n.data();
          (i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i);
        });
      });
  })(jQuery),
  (function () {
    "use strict";
    function t(i) {
      if (!i) throw new Error("No options passed to Waypoint constructor");
      if (!i.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!i.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = t.Adapter.extend({}, t.defaults, i)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = i.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
          (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (n[this.key] = this),
        (e += 1);
    }
    var e = 0,
      n = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete n[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var i in n) e.push(n[i]);
        for (var o = 0, r = e.length; r > o; o++) e[o][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll("destroy");
      }),
      (t.disableAll = function () {
        t.invokeAll("disable");
      }),
      (t.enableAll = function () {
        t.invokeAll("enable");
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (t.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = o.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + n),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (i[t.waypointContextKey] = this),
        (n += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var n = 0,
      i = {},
      o = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete i[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || o.isTouch) &&
            ((e.didScroll = !0), o.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        o.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var n in e) {
          var i = e[n],
            o = i.newScroll > i.oldScroll,
            r = o ? i.forward : i.backward;
          for (var s in this.waypoints[n]) {
            var a = this.waypoints[n][s],
              l = i.oldScroll < a.triggerPoint,
              c = i.newScroll >= a.triggerPoint,
              u = l && c,
              p = !l && !c;
            (u || p) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var f in t) t[f].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? o.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? o.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var i = 0, o = t.length; o > i; i++) t[i].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          n = e ? void 0 : this.adapter.offset(),
          i = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : n.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : n.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              c,
              u,
              p,
              f,
              d = this.waypoints[r][a],
              h = d.options.offset,
              g = d.triggerPoint,
              m = 0,
              v = null == g;
            d.element !== d.element.window &&
              (m = d.adapter.offset()[s.offsetProp]),
              "function" == typeof h
                ? (h = h.apply(d))
                : "string" == typeof h &&
                  ((h = parseFloat(h)),
                  d.options.offset.indexOf("%") > -1 &&
                    (h = Math.ceil((s.contextDimension * h) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = m + l - h),
              (c = g < s.oldScroll),
              (u = d.triggerPoint >= s.oldScroll),
              (p = c && u),
              (f = !c && !u),
              !v && p
                ? (d.queueTrigger(s.backward), (i[d.group.id] = d.group))
                : !v && f
                ? (d.queueTrigger(s.forward), (i[d.group.id] = d.group))
                : v &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (i[d.group.id] = d.group));
          }
        }
        return (
          o.requestAnimationFrame(function () {
            for (var t in i) i[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in i) i[t].refresh();
      }),
      (e.findByElement = function (t) {
        return i[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (o.requestAnimationFrame = function (e) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e);
      }),
      (o.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function n(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (i[this.axis][this.name] = this);
    }
    var i = { vertical: {}, horizontal: {} },
      o = window.Waypoint;
    (n.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
          var i = this.triggerQueues[n],
            o = "up" === n || "left" === n;
          i.sort(o ? e : t);
          for (var r = 0, s = i.length; s > r; r += 1) {
            var a = i[r];
            (a.options.continuous || r === i.length - 1) && a.trigger([n]);
          }
        }
        this.clearTriggerQueues();
      }),
      (n.prototype.next = function (e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
      }),
      (n.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var n = o.Adapter.inArray(e, this.waypoints);
        return n ? this.waypoints[n - 1] : null;
      }),
      (n.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (n.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (n.prototype.first = function () {
        return this.waypoints[0];
      }),
      (n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (n.findOrCreate = function (t) {
        return i[t.axis][t.name] || new n(t);
      }),
      (o.Group = n);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      n = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, n) {
        t.prototype[n] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[n].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
        t[i] = e[i];
      }),
      n.adapters.push({ name: "jquery", Adapter: t }),
      (n.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var n = [],
          i = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((i = t.extend({}, arguments[1])), (i.handler = arguments[0])),
          this.each(function () {
            var o = t.extend({}, i, { element: this });
            "string" == typeof o.context &&
              (o.context = t(this).closest(o.context)[0]),
              n.push(new e(o));
          }),
          n
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  (function () {
    "use strict";
    function t(i) {
      (this.options = e.extend({}, n.defaults, t.defaults, i)),
        (this.element = this.options.element),
        (this.$element = e(this.element)),
        this.createWrapper(),
        this.createWaypoint();
    }
    var e = window.jQuery,
      n = window.Waypoint;
    (t.prototype.createWaypoint = function () {
      var t = this.options.handler;
      this.waypoint = new n(
        e.extend({}, this.options, {
          element: this.wrapper,
          handler: e.proxy(function (e) {
            var n = this.options.direction.indexOf(e) > -1,
              i = n ? this.$element.outerHeight(!0) : "";
            this.$wrapper.height(i),
              this.$element.toggleClass(this.options.stuckClass, n),
              t && t.call(this, e);
          }, this),
        })
      );
    }),
      (t.prototype.createWrapper = function () {
        this.options.wrapper && this.$element.wrap(this.options.wrapper),
          (this.$wrapper = this.$element.parent()),
          (this.wrapper = this.$wrapper[0]);
      }),
      (t.prototype.destroy = function () {
        this.$element.parent()[0] === this.wrapper &&
          (this.waypoint.destroy(),
          this.$element.removeClass(this.options.stuckClass),
          this.options.wrapper && this.$element.unwrap());
      }),
      (t.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: "stuck",
        direction: "down right",
      }),
      (n.Sticky = t);
  })(),
  (function (t, e, n, i) {
    function o(e, n) {
      (this.element = e),
        (this.options = t.extend({}, s, n)),
        (this._defaults = s),
        (this._name = r),
        this.init();
    }
    var r = "stellar",
      s = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (t) {
          t.hide();
        },
        showElement: function (t) {
          t.show();
        },
      },
      a = {
        scroll: {
          getLeft: function (t) {
            return t.scrollLeft();
          },
          setLeft: function (t, e) {
            t.scrollLeft(e);
          },
          getTop: function (t) {
            return t.scrollTop();
          },
          setTop: function (t, e) {
            t.scrollTop(e);
          },
        },
        position: {
          getLeft: function (t) {
            return -1 * parseInt(t.css("left"), 10);
          },
          getTop: function (t) {
            return -1 * parseInt(t.css("top"), 10);
          },
        },
        margin: {
          getLeft: function (t) {
            return -1 * parseInt(t.css("margin-left"), 10);
          },
          getTop: function (t) {
            return -1 * parseInt(t.css("margin-top"), 10);
          },
        },
        transform: {
          getLeft: function (t) {
            var e = getComputedStyle(t[0])[u];
            return "none" !== e
              ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10)
              : 0;
          },
          getTop: function (t) {
            var e = getComputedStyle(t[0])[u];
            return "none" !== e
              ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10)
              : 0;
          },
        },
      },
      l = {
        position: {
          setLeft: function (t, e) {
            t.css("left", e);
          },
          setTop: function (t, e) {
            t.css("top", e);
          },
        },
        transform: {
          setPosition: function (t, e, n, i, o) {
            t[0].style[u] =
              "translate3d(" + (e - n) + "px, " + (i - o) + "px, 0)";
          },
        },
      },
      c = (function () {
        var e,
          n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          i = t("script")[0].style,
          o = "";
        for (e in i)
          if (n.test(e)) {
            o = e.match(n)[0];
            break;
          }
        return (
          "WebkitOpacity" in i && (o = "Webkit"),
          "KhtmlOpacity" in i && (o = "Khtml"),
          function (t) {
            return (
              o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            );
          }
        );
      })(),
      u = c("transform"),
      p =
        t("<div />", { style: "background:#fff" }).css(
          "background-position-x"
        ) !== i,
      f = p
        ? function (t, e, n) {
            t.css({ "background-position-x": e, "background-position-y": n });
          }
        : function (t, e, n) {
            t.css("background-position", e + " " + n);
          },
      d = p
        ? function (t) {
            return [
              t.css("background-position-x"),
              t.css("background-position-y"),
            ];
          }
        : function (t) {
            return t.css("background-position").split(" ");
          },
      h =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function (t) {
          setTimeout(t, 1e3 / 60);
        };
    (o.prototype = {
      init: function () {
        (this.options.name = r + "_" + Math.floor(1e9 * Math.random())),
          this._defineElements(),
          this._defineGetters(),
          this._defineSetters(),
          this._handleWindowLoadAndResize(),
          this._detectViewport(),
          this.refresh({ firstLoad: !0 }),
          "scroll" === this.options.scrollProperty
            ? this._handleScrollEvent()
            : this._startAnimationLoop();
      },
      _defineElements: function () {
        this.element === n.body && (this.element = e),
          (this.$scrollElement = t(this.element)),
          (this.$element =
            this.element === e ? t("body") : this.$scrollElement),
          (this.$viewportElement =
            this.options.viewportElement !== i
              ? t(this.options.viewportElement)
              : this.$scrollElement[0] === e ||
                "scroll" === this.options.scrollProperty
              ? this.$scrollElement
              : this.$scrollElement.parent());
      },
      _defineGetters: function () {
        var t = this,
          e = a[t.options.scrollProperty];
        (this._getScrollLeft = function () {
          return e.getLeft(t.$scrollElement);
        }),
          (this._getScrollTop = function () {
            return e.getTop(t.$scrollElement);
          });
      },
      _defineSetters: function () {
        var e = this,
          n = a[e.options.scrollProperty],
          i = l[e.options.positionProperty],
          o = n.setLeft,
          r = n.setTop;
        (this._setScrollLeft =
          "function" == typeof o
            ? function (t) {
                o(e.$scrollElement, t);
              }
            : t.noop),
          (this._setScrollTop =
            "function" == typeof r
              ? function (t) {
                  r(e.$scrollElement, t);
                }
              : t.noop),
          (this._setPosition =
            i.setPosition ||
            function (t, n, o, r, s) {
              e.options.horizontalScrolling && i.setLeft(t, n, o),
                e.options.verticalScrolling && i.setTop(t, r, s);
            });
      },
      _handleWindowLoadAndResize: function () {
        var n = this,
          i = t(e);
        n.options.responsive &&
          i.bind("load." + this.name, function () {
            n.refresh();
          }),
          i.bind("resize." + this.name, function () {
            n._detectViewport(), n.options.responsive && n.refresh();
          });
      },
      refresh: function (n) {
        var i = this,
          o = i._getScrollLeft(),
          r = i._getScrollTop();
        (n && n.firstLoad) || this._reset(),
          this._setScrollLeft(0),
          this._setScrollTop(0),
          this._setOffsets(),
          this._findParticles(),
          this._findBackgrounds(),
          n &&
            n.firstLoad &&
            /WebKit/.test(navigator.userAgent) &&
            t(e).load(function () {
              var t = i._getScrollLeft(),
                e = i._getScrollTop();
              i._setScrollLeft(t + 1),
                i._setScrollTop(e + 1),
                i._setScrollLeft(t),
                i._setScrollTop(e);
            }),
          this._setScrollLeft(o),
          this._setScrollTop(r);
      },
      _detectViewport: function () {
        var t = this.$viewportElement.offset(),
          e = null !== t && t !== i;
        (this.viewportWidth = this.$viewportElement.width()),
          (this.viewportHeight = this.$viewportElement.height()),
          (this.viewportOffsetTop = e ? t.top : 0),
          (this.viewportOffsetLeft = e ? t.left : 0);
      },
      _findParticles: function () {
        var e = this;
        if ((this._getScrollLeft(), this._getScrollTop(), this.particles !== i))
          for (var n = this.particles.length - 1; n >= 0; n--)
            this.particles[n].$element.data("stellar-elementIsActive", i);
        (this.particles = []),
          this.options.parallaxElements &&
            this.$element.find("[data-stellar-ratio]").each(function () {
              var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                p,
                f = t(this),
                d = 0,
                h = 0,
                g = 0,
                m = 0;
              if (f.data("stellar-elementIsActive")) {
                if (f.data("stellar-elementIsActive") !== this) return;
              } else f.data("stellar-elementIsActive", this);
              e.options.showElement(f),
                f.data("stellar-startingLeft")
                  ? (f.css("left", f.data("stellar-startingLeft")),
                    f.css("top", f.data("stellar-startingTop")))
                  : (f.data("stellar-startingLeft", f.css("left")),
                    f.data("stellar-startingTop", f.css("top"))),
                (r = f.position().left),
                (s = f.position().top),
                (a =
                  "auto" === f.css("margin-left")
                    ? 0
                    : parseInt(f.css("margin-left"), 10)),
                (l =
                  "auto" === f.css("margin-top")
                    ? 0
                    : parseInt(f.css("margin-top"), 10)),
                (u = f.offset().left - a),
                (p = f.offset().top - l),
                f.parents().each(function () {
                  var e = t(this);
                  return !0 === e.data("stellar-offset-parent")
                    ? ((d = g), (h = m), (c = e), !1)
                    : ((g += e.position().left), void (m += e.position().top));
                }),
                (n =
                  f.data("stellar-horizontal-offset") !== i
                    ? f.data("stellar-horizontal-offset")
                    : c !== i && c.data("stellar-horizontal-offset") !== i
                    ? c.data("stellar-horizontal-offset")
                    : e.horizontalOffset),
                (o =
                  f.data("stellar-vertical-offset") !== i
                    ? f.data("stellar-vertical-offset")
                    : c !== i && c.data("stellar-vertical-offset") !== i
                    ? c.data("stellar-vertical-offset")
                    : e.verticalOffset),
                e.particles.push({
                  $element: f,
                  $offsetParent: c,
                  isFixed: "fixed" === f.css("position"),
                  horizontalOffset: n,
                  verticalOffset: o,
                  startingPositionLeft: r,
                  startingPositionTop: s,
                  startingOffsetLeft: u,
                  startingOffsetTop: p,
                  parentOffsetLeft: d,
                  parentOffsetTop: h,
                  stellarRatio:
                    f.data("stellar-ratio") !== i ? f.data("stellar-ratio") : 1,
                  width: f.outerWidth(!0),
                  height: f.outerHeight(!0),
                  isHidden: !1,
                });
            });
      },
      _findBackgrounds: function () {
        var e,
          n = this,
          o = this._getScrollLeft(),
          r = this._getScrollTop();
        (this.backgrounds = []),
          this.options.parallaxBackgrounds &&
            ((e = this.$element.find("[data-stellar-background-ratio]")),
            this.$element.data("stellar-background-ratio") &&
              (e = e.add(this.$element)),
            e.each(function () {
              var e,
                s,
                a,
                l,
                c,
                u,
                p,
                h = t(this),
                g = d(h),
                m = 0,
                v = 0,
                y = 0,
                b = 0;
              if (h.data("stellar-backgroundIsActive")) {
                if (h.data("stellar-backgroundIsActive") !== this) return;
              } else h.data("stellar-backgroundIsActive", this);
              h.data("stellar-backgroundStartingLeft")
                ? f(
                    h,
                    h.data("stellar-backgroundStartingLeft"),
                    h.data("stellar-backgroundStartingTop")
                  )
                : (h.data("stellar-backgroundStartingLeft", g[0]),
                  h.data("stellar-backgroundStartingTop", g[1])),
                (a =
                  "auto" === h.css("margin-left")
                    ? 0
                    : parseInt(h.css("margin-left"), 10)),
                (l =
                  "auto" === h.css("margin-top")
                    ? 0
                    : parseInt(h.css("margin-top"), 10)),
                (c = h.offset().left - a - o),
                (u = h.offset().top - l - r),
                h.parents().each(function () {
                  var e = t(this);
                  return !0 === e.data("stellar-offset-parent")
                    ? ((m = y), (v = b), (p = e), !1)
                    : ((y += e.position().left), void (b += e.position().top));
                }),
                (e =
                  h.data("stellar-horizontal-offset") !== i
                    ? h.data("stellar-horizontal-offset")
                    : p !== i && p.data("stellar-horizontal-offset") !== i
                    ? p.data("stellar-horizontal-offset")
                    : n.horizontalOffset),
                (s =
                  h.data("stellar-vertical-offset") !== i
                    ? h.data("stellar-vertical-offset")
                    : p !== i && p.data("stellar-vertical-offset") !== i
                    ? p.data("stellar-vertical-offset")
                    : n.verticalOffset),
                n.backgrounds.push({
                  $element: h,
                  $offsetParent: p,
                  isFixed: "fixed" === h.css("background-attachment"),
                  horizontalOffset: e,
                  verticalOffset: s,
                  startingValueLeft: g[0],
                  startingValueTop: g[1],
                  startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10))
                    ? 0
                    : parseInt(g[0], 10),
                  startingBackgroundPositionTop: isNaN(parseInt(g[1], 10))
                    ? 0
                    : parseInt(g[1], 10),
                  startingPositionLeft: h.position().left,
                  startingPositionTop: h.position().top,
                  startingOffsetLeft: c,
                  startingOffsetTop: u,
                  parentOffsetLeft: m,
                  parentOffsetTop: v,
                  stellarRatio:
                    h.data("stellar-background-ratio") === i
                      ? 1
                      : h.data("stellar-background-ratio"),
                });
            }));
      },
      _reset: function () {
        var t, e, n, i, o;
        for (o = this.particles.length - 1; o >= 0; o--)
          (t = this.particles[o]),
            (e = t.$element.data("stellar-startingLeft")),
            (n = t.$element.data("stellar-startingTop")),
            this._setPosition(t.$element, e, e, n, n),
            this.options.showElement(t.$element),
            t.$element
              .data("stellar-startingLeft", null)
              .data("stellar-elementIsActive", null)
              .data("stellar-backgroundIsActive", null);
        for (o = this.backgrounds.length - 1; o >= 0; o--)
          (i = this.backgrounds[o]),
            i.$element
              .data("stellar-backgroundStartingLeft", null)
              .data("stellar-backgroundStartingTop", null),
            f(i.$element, i.startingValueLeft, i.startingValueTop);
      },
      destroy: function () {
        this._reset(),
          this.$scrollElement
            .unbind("resize." + this.name)
            .unbind("scroll." + this.name),
          (this._animationLoop = t.noop),
          t(e)
            .unbind("load." + this.name)
            .unbind("resize." + this.name);
      },
      _setOffsets: function () {
        var n = this,
          i = t(e);
        i
          .unbind("resize.horizontal-" + this.name)
          .unbind("resize.vertical-" + this.name),
          "function" == typeof this.options.horizontalOffset
            ? ((this.horizontalOffset = this.options.horizontalOffset()),
              i.bind("resize.horizontal-" + this.name, function () {
                n.horizontalOffset = n.options.horizontalOffset();
              }))
            : (this.horizontalOffset = this.options.horizontalOffset),
          "function" == typeof this.options.verticalOffset
            ? ((this.verticalOffset = this.options.verticalOffset()),
              i.bind("resize.vertical-" + this.name, function () {
                n.verticalOffset = n.options.verticalOffset();
              }))
            : (this.verticalOffset = this.options.verticalOffset);
      },
      _repositionElements: function () {
        var t,
          e,
          n,
          i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this._getScrollLeft(),
          p = this._getScrollTop(),
          d = !0,
          h = !0;
        if (
          this.currentScrollLeft !== u ||
          this.currentScrollTop !== p ||
          this.currentWidth !== this.viewportWidth ||
          this.currentHeight !== this.viewportHeight
        ) {
          for (
            this.currentScrollLeft = u,
              this.currentScrollTop = p,
              this.currentWidth = this.viewportWidth,
              this.currentHeight = this.viewportHeight,
              c = this.particles.length - 1;
            c >= 0;
            c--
          )
            (t = this.particles[c]),
              (e = t.isFixed ? 1 : 0),
              this.options.horizontalScrolling
                ? ((r =
                    (u +
                      t.horizontalOffset +
                      this.viewportOffsetLeft +
                      t.startingPositionLeft -
                      t.startingOffsetLeft +
                      t.parentOffsetLeft) *
                      -(t.stellarRatio + e - 1) +
                    t.startingPositionLeft),
                  (a = r - t.startingPositionLeft + t.startingOffsetLeft))
                : ((r = t.startingPositionLeft), (a = t.startingOffsetLeft)),
              this.options.verticalScrolling
                ? ((s =
                    (p +
                      t.verticalOffset +
                      this.viewportOffsetTop +
                      t.startingPositionTop -
                      t.startingOffsetTop +
                      t.parentOffsetTop) *
                      -(t.stellarRatio + e - 1) +
                    t.startingPositionTop),
                  (l = s - t.startingPositionTop + t.startingOffsetTop))
                : ((s = t.startingPositionTop), (l = t.startingOffsetTop)),
              this.options.hideDistantElements &&
                ((h =
                  !this.options.horizontalScrolling ||
                  (a + t.width > (t.isFixed ? 0 : u) &&
                    a <
                      (t.isFixed ? 0 : u) +
                        this.viewportWidth +
                        this.viewportOffsetLeft)),
                (d =
                  !this.options.verticalScrolling ||
                  (l + t.height > (t.isFixed ? 0 : p) &&
                    l <
                      (t.isFixed ? 0 : p) +
                        this.viewportHeight +
                        this.viewportOffsetTop))),
              h && d
                ? (t.isHidden &&
                    (this.options.showElement(t.$element), (t.isHidden = !1)),
                  this._setPosition(
                    t.$element,
                    r,
                    t.startingPositionLeft,
                    s,
                    t.startingPositionTop
                  ))
                : t.isHidden ||
                  (this.options.hideElement(t.$element), (t.isHidden = !0));
          for (c = this.backgrounds.length - 1; c >= 0; c--)
            (n = this.backgrounds[c]),
              (e = n.isFixed ? 0 : 1),
              (i = this.options.horizontalScrolling
                ? (u +
                    n.horizontalOffset -
                    this.viewportOffsetLeft -
                    n.startingOffsetLeft +
                    n.parentOffsetLeft -
                    n.startingBackgroundPositionLeft) *
                    (e - n.stellarRatio) +
                  "px"
                : n.startingValueLeft),
              (o = this.options.verticalScrolling
                ? (p +
                    n.verticalOffset -
                    this.viewportOffsetTop -
                    n.startingOffsetTop +
                    n.parentOffsetTop -
                    n.startingBackgroundPositionTop) *
                    (e - n.stellarRatio) +
                  "px"
                : n.startingValueTop),
              f(n.$element, i, o);
        }
      },
      _handleScrollEvent: function () {
        var t = this,
          e = !1,
          n = function () {
            t._repositionElements(), (e = !1);
          },
          i = function () {
            e || (h(n), (e = !0));
          };
        this.$scrollElement.bind("scroll." + this.name, i), i();
      },
      _startAnimationLoop: function () {
        var t = this;
        (this._animationLoop = function () {
          h(t._animationLoop), t._repositionElements();
        }),
          this._animationLoop();
      },
    }),
      (t.fn[r] = function (e) {
        var n = arguments;
        return e === i || "object" == typeof e
          ? this.each(function () {
              t.data(this, "plugin_" + r) ||
                t.data(this, "plugin_" + r, new o(this, e));
            })
          : "string" == typeof e && "_" !== e[0] && "init" !== e
          ? this.each(function () {
              var i = t.data(this, "plugin_" + r);
              i instanceof o &&
                "function" == typeof i[e] &&
                i[e].apply(i, Array.prototype.slice.call(n, 1)),
                "destroy" === e && t.data(this, "plugin_" + r, null);
            })
          : void 0;
      }),
      (t[r] = function () {
        var n = t(e);
        return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0));
      }),
      (t[r].scrollProperty = a),
      (t[r].positionProperty = l),
      (e.Stellar = o);
  })(jQuery, this, document),
  (function (t) {
    t.fn.hoverIntent = function (e, n, i) {
      var o = { interval: 100, sensitivity: 7, timeout: 0 };
      o =
        "object" == typeof e
          ? t.extend(o, e)
          : t.isFunction(n)
          ? t.extend(o, { over: e, out: n, selector: i })
          : t.extend(o, { over: e, out: e, selector: n });
      var r,
        s,
        a,
        l,
        c = function (t) {
          (r = t.pageX), (s = t.pageY);
        },
        u = function (e, n) {
          if (
            ((n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
            Math.abs(a - r) + Math.abs(l - s) < o.sensitivity)
          )
            return (
              t(n).off("mousemove.hoverIntent", c),
              (n.hoverIntent_s = 1),
              o.over.apply(n, [e])
            );
          (a = r),
            (l = s),
            (n.hoverIntent_t = setTimeout(function () {
              u(e, n);
            }, o.interval));
        },
        p = function (t, e) {
          return (
            (e.hoverIntent_t = clearTimeout(e.hoverIntent_t)),
            (e.hoverIntent_s = 0),
            o.out.apply(e, [t])
          );
        },
        f = function (e) {
          var n = jQuery.extend({}, e),
            i = this;
          i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
            "mouseenter" == e.type
              ? ((a = n.pageX),
                (l = n.pageY),
                t(i).on("mousemove.hoverIntent", c),
                1 != i.hoverIntent_s &&
                  (i.hoverIntent_t = setTimeout(function () {
                    u(n, i);
                  }, o.interval)))
              : (t(i).off("mousemove.hoverIntent", c),
                1 == i.hoverIntent_s &&
                  (i.hoverIntent_t = setTimeout(function () {
                    p(n, i);
                  }, o.timeout)));
        };
      return this.on(
        { "mouseenter.hoverIntent": f, "mouseleave.hoverIntent": f },
        o.selector
      );
    };
  })(jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var n = {
          bcClass: "sf-breadcrumb",
          menuClass: "sf-js-enabled",
          anchorClass: "sf-with-ul",
          menuArrowClass: "sf-arrows",
        },
        i = (function () {
          var n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
          return (
            n &&
              t(e).load(function () {
                t("body").children().on("click", t.noop);
              }),
            n
          );
        })(),
        o = (function () {
          var t = document.documentElement.style;
          return (
            "behavior" in t &&
            "fill" in t &&
            /iemobile/i.test(navigator.userAgent)
          );
        })(),
        r = (function () {
          return !!e.PointerEvent;
        })(),
        s = function (t, e) {
          var i = n.menuClass;
          e.cssArrows && (i += " " + n.menuArrowClass), t.toggleClass(i);
        },
        a = function (e, i) {
          return e
            .find("li." + i.pathClass)
            .slice(0, i.pathLevels)
            .addClass(i.hoverClass + " " + n.bcClass)
            .filter(function () {
              return t(this).children(i.popUpSelector).hide().show().length;
            })
            .removeClass(i.pathClass);
        },
        l = function (t) {
          t.children("a").toggleClass(n.anchorClass);
        },
        c = function (t) {
          var e = t.css("ms-touch-action"),
            n = t.css("touch-action");
          (n = n || e),
            (n = "pan-y" === n ? "auto" : "pan-y"),
            t.css({ "ms-touch-action": n, "touch-action": n });
        },
        u = function (e, n) {
          var s = "li:has(" + n.popUpSelector + ")";
          t.fn.hoverIntent && !n.disableHI
            ? e.hoverIntent(f, d, s)
            : e
                .on("mouseenter.superfish", s, f)
                .on("mouseleave.superfish", s, d);
          var a = "MSPointerDown.superfish";
          r && (a = "pointerdown.superfish"),
            i || (a += " touchend.superfish"),
            o && (a += " mousedown.superfish"),
            e
              .on("focusin.superfish", "li", f)
              .on("focusout.superfish", "li", d)
              .on(a, "a", n, p);
        },
        p = function (e) {
          var n = t(this),
            i = n.siblings(e.data.popUpSelector);
          i.length > 0 &&
            i.is(":hidden") &&
            (n.one("click.superfish", !1),
            "MSPointerDown" === e.type || "pointerdown" === e.type
              ? n.trigger("focus")
              : t.proxy(f, n.parent("li"))());
        },
        f = function () {
          var e = t(this),
            n = m(e);
          clearTimeout(n.sfTimer),
            e.siblings().superfish("hide").end().superfish("show");
        },
        d = function () {
          var e = t(this),
            n = m(e);
          i
            ? t.proxy(h, e, n)()
            : (clearTimeout(n.sfTimer),
              (n.sfTimer = setTimeout(t.proxy(h, e, n), n.delay)));
        },
        h = function (e) {
          (e.retainPath = t.inArray(this[0], e.$path) > -1),
            this.superfish("hide"),
            this.parents("." + e.hoverClass).length ||
              (e.onIdle.call(g(this)), e.$path.length && t.proxy(f, e.$path)());
        },
        g = function (t) {
          return t.closest("." + n.menuClass);
        },
        m = function (t) {
          return g(t).data("sf-options");
        };
      return {
        hide: function (e) {
          if (this.length) {
            var n = this,
              i = m(n);
            if (!i) return this;
            var o = !0 === i.retainPath ? i.$path : "",
              r = n
                .find("li." + i.hoverClass)
                .add(this)
                .not(o)
                .removeClass(i.hoverClass)
                .children(i.popUpSelector),
              s = i.speedOut;
            e && (r.show(), (s = 0)),
              (i.retainPath = !1),
              i.onBeforeHide.call(r),
              r.stop(!0, !0).animate(i.animationOut, s, function () {
                var e = t(this);
                i.onHide.call(e);
              });
          }
          return this;
        },
        show: function () {
          var t = m(this);
          if (!t) return this;
          var e = this.addClass(t.hoverClass),
            n = e.children(t.popUpSelector);
          return (
            t.onBeforeShow.call(n),
            n.stop(!0, !0).animate(t.animation, t.speed, function () {
              t.onShow.call(n);
            }),
            this
          );
        },
        destroy: function () {
          return this.each(function () {
            var e,
              i = t(this),
              o = i.data("sf-options");
            if (!o) return !1;
            (e = i.find(o.popUpSelector).parent("li")),
              clearTimeout(o.sfTimer),
              s(i, o),
              l(e),
              c(i),
              i.off(".superfish").off(".hoverIntent"),
              e.children(o.popUpSelector).attr("style", function (t, e) {
                return e.replace(/display[^;]+;?/g, "");
              }),
              o.$path
                .removeClass(o.hoverClass + " " + n.bcClass)
                .addClass(o.pathClass),
              i.find("." + o.hoverClass).removeClass(o.hoverClass),
              o.onDestroy.call(i),
              i.removeData("sf-options");
          });
        },
        init: function (e) {
          return this.each(function () {
            var i = t(this);
            if (i.data("sf-options")) return !1;
            var o = t.extend({}, t.fn.superfish.defaults, e),
              r = i.find(o.popUpSelector).parent("li");
            (o.$path = a(i, o)),
              i.data("sf-options", o),
              s(i, o),
              l(r),
              c(i),
              u(i, o),
              r.not("." + n.bcClass).superfish("hide", !0),
              o.onInit.call(this);
          });
        },
      };
    })();
    (t.fn.superfish = function (e, i) {
      return n[e]
        ? n[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? t.error("Method " + e + " does not exist on jQuery.fn.superfish")
        : n.init.apply(this, arguments);
    }),
      (t.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: { opacity: "show" },
        animationOut: { opacity: "hide" },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: t.noop,
        onBeforeShow: t.noop,
        onShow: t.noop,
        onBeforeHide: t.noop,
        onHide: t.noop,
        onIdle: t.noop,
        onDestroy: t.noop,
      });
  })(jQuery, window),
  (function (t) {
    var e,
      n,
      i,
      o,
      r,
      s,
      a,
      l = "Close",
      c = "BeforeClose",
      u = "MarkupParse",
      p = "Open",
      f = "Change",
      d = "mfp",
      h = "." + d,
      g = "mfp-ready",
      m = "mfp-removing",
      v = "mfp-prevent-close",
      y = function () {},
      b = !!window.jQuery,
      w = t(window),
      x = function (t, n) {
        e.ev.on(d + t + h, n);
      },
      T = function (e, n, i, o) {
        var r = document.createElement("div");
        return (
          (r.className = "mfp-" + e),
          i && (r.innerHTML = i),
          o ? n && n.appendChild(r) : ((r = t(r)), n && r.appendTo(n)),
          r
        );
      },
      C = function (n, i) {
        e.ev.triggerHandler(d + n, i),
          e.st.callbacks &&
            ((n = n.charAt(0).toLowerCase() + n.slice(1)),
            e.st.callbacks[n] &&
              e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]));
      },
      k = function (n) {
        return (
          (n === a && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (a = n)),
          e.currTemplate.closeBtn
        );
      },
      S = function () {
        t.magnificPopup.instance ||
          ((e = new y()), e.init(), (t.magnificPopup.instance = e));
      },
      E = function () {
        var t = document.createElement("p").style,
          e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition) return !0;
        for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
        return !1;
      };
    (y.prototype = {
      constructor: y,
      init: function () {
        var n = navigator.appVersion;
        (e.isIE7 = -1 !== n.indexOf("MSIE 7.")),
          (e.isIE8 = -1 !== n.indexOf("MSIE 8.")),
          (e.isLowIE = e.isIE7 || e.isIE8),
          (e.isAndroid = /android/gi.test(n)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(n)),
          (e.supportsTransition = E()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (o = t(document)),
          (e.popupsCache = {});
      },
      open: function (n) {
        i || (i = t(document.body));
        var r;
        if (!1 === n.isObj) {
          (e.items = n.items.toArray()), (e.index = 0);
          var a,
            l = n.items;
          for (r = 0; l.length > r; r++)
            if (((a = l[r]), a.parsed && (a = a.el[0]), a === n.el[0])) {
              e.index = r;
              break;
            }
        } else
          (e.items = t.isArray(n.items) ? n.items : [n.items]),
            (e.index = n.index || 0);
        if (e.isOpen) return void e.updateItemHTML();
        (e.types = []),
          (s = ""),
          (e.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o),
          n.key
            ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}),
              (e.currTemplate = e.popupsCache[n.key]))
            : (e.currTemplate = {}),
          (e.st = t.extend(!0, {}, t.magnificPopup.defaults, n)),
          (e.fixedContentPos =
            "auto" === e.st.fixedContentPos
              ? !e.probablyMobile
              : e.st.fixedContentPos),
          e.st.modal &&
            ((e.st.closeOnContentClick = !1),
            (e.st.closeOnBgClick = !1),
            (e.st.showCloseBtn = !1),
            (e.st.enableEscapeKey = !1)),
          e.bgOverlay ||
            ((e.bgOverlay = T("bg").on("click" + h, function () {
              e.close();
            })),
            (e.wrap = T("wrap")
              .attr("tabindex", -1)
              .on("click" + h, function (t) {
                e._checkIfClose(t.target) && e.close();
              })),
            (e.container = T("container", e.wrap))),
          (e.contentContainer = T("content")),
          e.st.preloader &&
            (e.preloader = T("preloader", e.container, e.st.tLoading));
        var c = t.magnificPopup.modules;
        for (r = 0; c.length > r; r++) {
          var f = c[r];
          (f = f.charAt(0).toUpperCase() + f.slice(1)), e["init" + f].call(e);
        }
        C("BeforeOpen"),
          e.st.showCloseBtn &&
            (e.st.closeBtnInside
              ? (x(u, function (t, e, n, i) {
                  n.close_replaceWith = k(i.type);
                }),
                (s += " mfp-close-btn-in"))
              : e.wrap.append(k())),
          e.st.alignTop && (s += " mfp-align-top"),
          e.fixedContentPos
            ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY,
              })
            : e.wrap.css({ top: w.scrollTop(), position: "absolute" }),
          (!1 === e.st.fixedBgPos ||
            ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
            e.bgOverlay.css({ height: o.height(), position: "absolute" }),
          e.st.enableEscapeKey &&
            o.on("keyup" + h, function (t) {
              27 === t.keyCode && e.close();
            }),
          w.on("resize" + h, function () {
            e.updateSize();
          }),
          e.st.closeOnContentClick || (s += " mfp-auto-cursor"),
          s && e.wrap.addClass(s);
        var d = (e.wH = w.height()),
          m = {};
        if (e.fixedContentPos && e._hasScrollBar(d)) {
          var v = e._getScrollbarSize();
          v && (m.marginRight = v);
        }
        e.fixedContentPos &&
          (e.isIE7
            ? t("body, html").css("overflow", "hidden")
            : (m.overflow = "hidden"));
        var y = e.st.mainClass;
        return (
          e.isIE7 && (y += " mfp-ie7"),
          y && e._addClassToMFP(y),
          e.updateItemHTML(),
          C("BuildControls"),
          t("html").css(m),
          e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || i),
          (e._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            e.content
              ? (e._addClassToMFP(g), e._setFocus())
              : e.bgOverlay.addClass(g),
              o.on("focusin" + h, e._onFocusIn);
          }, 16),
          (e.isOpen = !0),
          e.updateSize(d),
          C(p),
          n
        );
      },
      close: function () {
        e.isOpen &&
          (C(c),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(m),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        C(l);
        var n = m + " " + g + " ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (n += e.st.mainClass + " "),
          e._removeClassFromMFP(n),
          e.fixedContentPos)
        ) {
          var i = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (i.overflow = ""),
            t("html").css(i);
        }
        o.off("keyup.mfp focusin" + h),
          e.ev.off(h),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          C("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          e.wrap.css("height", i), (e.wH = i);
        } else e.wH = t || w.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize");
      },
      updateItemHTML: function () {
        var n = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          n.parsed || (n = e.parseEl(e.index));
        var i = n.type;
        if (
          (C("BeforeChange", [e.currItem ? e.currItem.type : "", i]),
          (e.currItem = n),
          !e.currTemplate[i])
        ) {
          var o = !!e.st[i] && e.st[i].markup;
          C("FirstMarkupParse", o), (e.currTemplate[i] = !o || t(o));
        }
        r && r !== n.type && e.container.removeClass("mfp-" + r + "-holder");
        var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](
          n,
          e.currTemplate[i]
        );
        e.appendContent(s, i),
          (n.preloaded = !0),
          C(f, n),
          (r = n.type),
          e.container.prepend(e.contentContainer),
          C("AfterChange");
      },
      appendContent: function (t, n) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[n]
              ? e.content.find(".mfp-close").length || e.content.append(k())
              : (e.content = t)
            : (e.content = ""),
          C("BeforeAppend"),
          e.container.addClass("mfp-" + n + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (n) {
        var i,
          o = e.items[n];
        if (
          (o.tagName
            ? (o = { el: t(o) })
            : ((i = o.type), (o = { data: o, src: o.src })),
          o.el)
        ) {
          for (var r = e.types, s = 0; r.length > s; s++)
            if (o.el.hasClass("mfp-" + r[s])) {
              i = r[s];
              break;
            }
          (o.src = o.el.attr("data-mfp-src")),
            o.src || (o.src = o.el.attr("href"));
        }
        return (
          (o.type = i || e.st.type || "inline"),
          (o.index = n),
          (o.parsed = !0),
          (e.items[n] = o),
          C("ElementParse", o),
          e.items[n]
        );
      },
      addGroup: function (t, n) {
        var i = function (i) {
          (i.mfpEl = this), e._openClick(i, t, n);
        };
        n || (n = {});
        var o = "click.magnificPopup";
        (n.mainEl = t),
          n.items
            ? ((n.isObj = !0), t.off(o).on(o, i))
            : ((n.isObj = !1),
              n.delegate
                ? t.off(o).on(o, n.delegate, i)
                : ((n.items = t), t.off(o).on(o, i)));
      },
      _openClick: function (n, i, o) {
        if (
          (void 0 !== o.midClick
            ? o.midClick
            : t.magnificPopup.defaults.midClick) ||
          (2 !== n.which && !n.ctrlKey && !n.metaKey)
        ) {
          var r =
            void 0 !== o.disableOn
              ? o.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (r)
            if (t.isFunction(r)) {
              if (!r.call(e)) return !0;
            } else if (r > w.width()) return !0;
          n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()),
            (o.el = t(n.mfpEl)),
            o.delegate && (o.items = i.find(o.delegate)),
            e.open(o);
        }
      },
      updateStatus: function (t, i) {
        if (e.preloader) {
          n !== t && e.container.removeClass("mfp-s-" + n),
            i || "loading" !== t || (i = e.st.tLoading);
          var o = { status: t, text: i };
          C("UpdateStatus", o),
            (t = o.status),
            (i = o.text),
            e.preloader.html(i),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (n = t);
        }
      },
      _checkIfClose: function (n) {
        if (!t(n).hasClass(v)) {
          var i = e.st.closeOnContentClick,
            o = e.st.closeOnBgClick;
          if (i && o) return !0;
          if (
            !e.content ||
            t(n).hasClass("mfp-close") ||
            (e.preloader && n === e.preloader[0])
          )
            return !0;
          if (n === e.content[0] || t.contains(e.content[0], n)) {
            if (i) return !0;
          } else if (o && t.contains(document, n)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? o.height() : document.body.scrollHeight) >
          (t || w.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (n) {
        return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target)
          ? void 0
          : (e._setFocus(), !1);
      },
      _parseMarkup: function (e, n, i) {
        var o;
        i.data && (n = t.extend(i.data, n)),
          C(u, [e, n, i]),
          t.each(n, function (t, n) {
            if (void 0 === n || !1 === n) return !0;
            if (((o = t.split("_")), o.length > 1)) {
              var i = e.find(h + "-" + o[0]);
              if (i.length > 0) {
                var r = o[1];
                "replaceWith" === r
                  ? i[0] !== n[0] && i.replaceWith(n)
                  : "img" === r
                  ? i.is("img")
                    ? i.attr("src", n)
                    : i.replaceWith(
                        '<img src="' +
                          n +
                          '" class="' +
                          i.attr("class") +
                          '" />'
                      )
                  : i.attr(o[1], n);
              }
            } else e.find(h + "-" + t).html(n);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function (e, n) {
          return (
            S(),
            (e = e ? t.extend(!0, {}, e) : {}),
            (e.isObj = !0),
            (e.index = n || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, n) {
          n.options && (t.magnificPopup.defaults[e] = n.options),
            t.extend(this.proto, n.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&times;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
        },
      }),
      (t.fn.magnificPopup = function (n) {
        S();
        var i = t(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var o,
              r = b ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            r.items
              ? (o = r.items[s])
              : ((o = i),
                r.delegate && (o = o.find(r.delegate)),
                (o = o.eq(s))),
              e._openClick({ mfpEl: o }, i, r);
          } else
            e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
        else
          (n = t.extend(!0, {}, n)),
            b ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
            e.addGroup(i, n);
        return i;
      });
    var $,
      I,
      O,
      A = "inline",
      N = function () {
        O && (I.after(O.addClass($)).detach(), (O = null));
      };
    t.magnificPopup.registerModule(A, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push(A),
            x(l + "." + A, function () {
              N();
            });
        },
        getInline: function (n, i) {
          if ((N(), n.src)) {
            var o = e.st.inline,
              r = t(n.src);
            if (r.length) {
              var s = r[0].parentNode;
              s &&
                s.tagName &&
                (I || (($ = o.hiddenClass), (I = T($)), ($ = "mfp-" + $)),
                (O = r.after(I).detach().removeClass($))),
                e.updateStatus("ready");
            } else e.updateStatus("error", o.tNotFound), (r = t("<div>"));
            return (n.inlineElement = r), r;
          }
          return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i;
        },
      },
    });
    var P,
      D = "ajax",
      L = function () {
        P && i.removeClass(P);
      },
      j = function () {
        L(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule(D, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push(D),
            (P = e.st.ajax.cursor),
            x(l + "." + D, j),
            x("BeforeChange." + D, j);
        },
        getAjax: function (n) {
          P && i.addClass(P), e.updateStatus("loading");
          var o = t.extend(
            {
              url: n.src,
              success: function (i, o, r) {
                var s = { data: i, xhr: r };
                C("ParseAjax", s),
                  e.appendContent(t(s.data), D),
                  (n.finished = !0),
                  L(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(g);
                  }, 16),
                  e.updateStatus("ready"),
                  C("AjaxContentAdded");
              },
              error: function () {
                L(),
                  (n.finished = n.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(o)), "";
        },
      },
    });
    var _,
      H = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = e.st.image.titleSrc;
        if (i) {
          if (t.isFunction(i)) return i.call(e, n);
          if (n.el) return n.el.attr(i) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var t = e.st.image,
            n = ".image";
          e.types.push("image"),
            x(p + n, function () {
              "image" === e.currItem.type && t.cursor && i.addClass(t.cursor);
            }),
            x(l + n, function () {
              t.cursor && i.removeClass(t.cursor), w.off("resize" + h);
            }),
            x("Resize" + n, e.resizeImage),
            e.isLowIE && x("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var n = 0;
            e.isLowIE &&
              (n =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - n);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            _ && clearInterval(_),
            (t.isCheckingImgSize = !1),
            C("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var n = 0,
            i = t.img[0],
            o = function (r) {
              _ && clearInterval(_),
                (_ = setInterval(function () {
                  return i.naturalWidth > 0
                    ? void e._onImageHasSize(t)
                    : (n > 200 && clearInterval(_),
                      n++,
                      void (3 === n
                        ? o(10)
                        : 40 === n
                        ? o(50)
                        : 100 === n && o(500)));
                }, r));
            };
          o(1);
        },
        getImage: function (n, i) {
          var o = 0,
            r = function () {
              n &&
                (n.img[0].complete
                  ? (n.img.off(".mfploader"),
                    n === e.currItem &&
                      (e._onImageHasSize(n), e.updateStatus("ready")),
                    (n.hasSize = !0),
                    (n.loaded = !0),
                    C("ImageLoadComplete"))
                  : (o++, 200 > o ? setTimeout(r, 100) : s()));
            },
            s = function () {
              n &&
                (n.img.off(".mfploader"),
                n === e.currItem &&
                  (e._onImageHasSize(n),
                  e.updateStatus("error", a.tError.replace("%url%", n.src))),
                (n.hasSize = !0),
                (n.loaded = !0),
                (n.loadError = !0));
            },
            a = e.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              (n.img = t(c).on("load.mfploader", r).on("error.mfploader", s)),
              (c.src = n.src),
              l.is("img") && (n.img = n.img.clone()),
              (c = n.img[0]),
              c.naturalWidth > 0
                ? (n.hasSize = !0)
                : c.width || (n.hasSize = !1);
          }
          return (
            e._parseMarkup(i, { title: H(n), img_replaceWith: n.img }, n),
            e.resizeImage(),
            n.hasSize
              ? (_ && clearInterval(_),
                n.loadError
                  ? (i.addClass("mfp-loading"),
                    e.updateStatus("error", a.tError.replace("%url%", n.src)))
                  : (i.removeClass("mfp-loading"), e.updateStatus("ready")),
                i)
              : (e.updateStatus("loading"),
                (n.loading = !0),
                n.hasSize ||
                  ((n.imgHidden = !0),
                  i.addClass("mfp-loading"),
                  e.findImageSize(n)),
                i)
          );
        },
      },
    });
    var M,
      R = function () {
        return (
          void 0 === M &&
            (M = void 0 !== document.createElement("p").style.MozTransform),
          M
        );
      };
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            n = e.st.zoom,
            i = ".zoom";
          if (n.enabled && e.supportsTransition) {
            var o,
              r,
              s = n.duration,
              a = function (t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  o = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  r = "transition";
                return (
                  (o["-webkit-" + r] =
                    o["-moz-" + r] =
                    o["-o-" + r] =
                    o[r] =
                      i),
                  e.css(o),
                  e
                );
              },
              u = function () {
                e.content.css("visibility", "visible");
              };
            x("BuildControls" + i, function () {
              if (e._allowZoom()) {
                if (
                  (clearTimeout(o),
                  e.content.css("visibility", "hidden"),
                  !(t = e._getItemToZoom()))
                )
                  return void u();
                (r = a(t)),
                  r.css(e._getOffset()),
                  e.wrap.append(r),
                  (o = setTimeout(function () {
                    r.css(e._getOffset(!0)),
                      (o = setTimeout(function () {
                        u(),
                          setTimeout(function () {
                            r.remove(), (t = r = null), C("ZoomAnimationEnded");
                          }, 16);
                      }, s));
                  }, 16));
              }
            }),
              x(c + i, function () {
                if (e._allowZoom()) {
                  if ((clearTimeout(o), (e.st.removalDelay = s), !t)) {
                    if (!(t = e._getItemToZoom())) return;
                    r = a(t);
                  }
                  r.css(e._getOffset(!0)),
                    e.wrap.append(r),
                    e.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      r.css(e._getOffset());
                    }, 16);
                }
              }),
              x(l + i, function () {
                e._allowZoom() && (u(), r && r.remove(), (t = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type;
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img;
        },
        _getOffset: function (n) {
          var i;
          i = n
            ? e.currItem.img
            : e.st.zoom.opener(e.currItem.el || e.currItem);
          var o = i.offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);
          o.top -= t(window).scrollTop() - r;
          var a = {
            width: i.width(),
            height: (b ? i.innerHeight() : i[0].offsetHeight) - s - r,
          };
          return (
            R()
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + o.left + "px," + o.top + "px)")
              : ((a.left = o.left), (a.top = o.top)),
            a
          );
        },
      },
    });
    var F = "iframe",
      z = function (t) {
        if (e.currTemplate[F]) {
          var n = e.currTemplate[F].find("iframe");
          n.length &&
            (t || (n[0].src = "//about:blank"),
            e.isIE8 && n.css("display", t ? "block" : "none"));
        }
      };
    t.magnificPopup.registerModule(F, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(F),
            x("BeforeChange", function (t, e, n) {
              e !== n && (e === F ? z() : n === F && z(!0));
            }),
            x(l + "." + F, function () {
              z();
            });
        },
        getIframe: function (n, i) {
          var o = n.src,
            r = e.st.iframe;
          t.each(r.patterns, function () {
            return o.indexOf(this.index) > -1
              ? (this.id &&
                  (o =
                    "string" == typeof this.id
                      ? o.substr(
                          o.lastIndexOf(this.id) + this.id.length,
                          o.length
                        )
                      : this.id.call(this, o)),
                (o = this.src.replace("%id%", o)),
                !1)
              : void 0;
          });
          var s = {};
          return (
            r.srcAction && (s[r.srcAction] = o),
            e._parseMarkup(i, s, n),
            e.updateStatus("ready"),
            i
          );
        },
      },
    });
    var q = function (t) {
        var n = e.items.length;
        return t > n - 1 ? t - n : 0 > t ? n + t : t;
      },
      W = function (t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var n = e.st.gallery,
            i = ".mfp-gallery",
            r = Boolean(t.fn.mfpFastClick);
          return (
            (e.direction = !0),
            !(!n || !n.enabled) &&
              ((s += " mfp-gallery"),
              x(p + i, function () {
                n.navigateByImgClick &&
                  e.wrap.on("click" + i, ".mfp-img", function () {
                    return e.items.length > 1 ? (e.next(), !1) : void 0;
                  }),
                  o.on("keydown" + i, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              x("UpdateStatus" + i, function (t, n) {
                n.text &&
                  (n.text = W(n.text, e.currItem.index, e.items.length));
              }),
              x(u + i, function (t, i, o, r) {
                var s = e.items.length;
                o.counter = s > 1 ? W(n.tCounter, r.index, s) : "";
              }),
              x("BuildControls" + i, function () {
                if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (e.arrowLeft = t(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(v)),
                    s = (e.arrowRight = t(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(v)),
                    a = r ? "mfpFastClick" : "click";
                  o[a](function () {
                    e.prev();
                  }),
                    s[a](function () {
                      e.next();
                    }),
                    e.isIE7 &&
                      (T("b", o[0], !1, !0),
                      T("a", o[0], !1, !0),
                      T("b", s[0], !1, !0),
                      T("a", s[0], !1, !0)),
                    e.container.append(o.add(s));
                }
              }),
              x(f + i, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              void x(l + i, function () {
                o.off(i),
                  e.wrap.off("click" + i),
                  e.arrowLeft &&
                    r &&
                    e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(),
                  (e.arrowRight = e.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (e.direction = !0), (e.index = q(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = q(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            n = e.st.gallery.preload,
            i = Math.min(n[0], e.items.length),
            o = Math.min(n[1], e.items.length);
          for (t = 1; (e.direction ? o : i) >= t; t++)
            e._preloadItem(e.index + t);
          for (t = 1; (e.direction ? i : o) >= t; t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (n) {
          if (((n = q(n)), !e.items[n].preloaded)) {
            var i = e.items[n];
            i.parsed || (i = e.parseEl(n)),
              C("LazyLoad", i),
              "image" === i.type &&
                (i.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    i.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (i.hasSize = !0), (i.loadError = !0), C("LazyLoadError", i);
                  })
                  .attr("src", i.src)),
              (i.preloaded = !0);
          }
        },
      },
    });
    var B = "retina";
    t.magnificPopup.registerModule(B, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              n = t.ratio;
            (n = isNaN(n) ? n() : n) > 1 &&
              (x("ImageHasSize." + B, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              x("ElementParse." + B, function (e, i) {
                i.src = t.replaceSrc(i, n);
              }));
          }
        },
      },
    }),
      (function () {
        var e = "ontouchstart" in window,
          n = function () {
            w.off("touchmove" + i + " touchend" + i);
          },
          i = ".mfpFastClick";
        (t.fn.mfpFastClick = function (o) {
          return t(this).each(function () {
            var r,
              s = t(this);
            if (e) {
              var a, l, c, u, p, f;
              s.on("touchstart" + i, function (t) {
                (u = !1),
                  (f = 1),
                  (p = t.originalEvent
                    ? t.originalEvent.touches[0]
                    : t.touches[0]),
                  (l = p.clientX),
                  (c = p.clientY),
                  w
                    .on("touchmove" + i, function (t) {
                      (p = t.originalEvent
                        ? t.originalEvent.touches
                        : t.touches),
                        (f = p.length),
                        (p = p[0]),
                        (Math.abs(p.clientX - l) > 10 ||
                          Math.abs(p.clientY - c) > 10) &&
                          ((u = !0), n());
                    })
                    .on("touchend" + i, function (t) {
                      n(),
                        u ||
                          f > 1 ||
                          ((r = !0),
                          t.preventDefault(),
                          clearTimeout(a),
                          (a = setTimeout(function () {
                            r = !1;
                          }, 1e3)),
                          o());
                    });
              });
            }
            s.on("click" + i, function () {
              r || o();
            });
          });
        }),
          (t.fn.destroyMfpFastClick = function () {
            t(this).off("touchstart" + i + " click" + i),
              e && w.off("touchmove" + i + " touchend" + i);
          });
      })(),
      S();
  })(window.jQuery || window.Zepto),
  $(document).ready(function () {
    !(function () {
      $(".image-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-with-zoom",
        gallery: { enabled: !0 },
        zoom: {
          enabled: !0,
          duration: 300,
          easing: "ease-in-out",
          opener: function (t) {
            return t.is("img") ? t : t.find("img");
          },
        },
      });
    })(),
      (function () {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        });
      })();
  }),
  (function () {
    "use strict";
    var t = function () {
        return -1 != navigator.platform.indexOf("iPad");
      },
      e = function () {
        return (
          -1 != navigator.platform.indexOf("iPhone") ||
          -1 != navigator.platform.indexOf("iPod")
        );
      },
      n = function () {
        $("#fh5co-primary-menu").superfish({
          delay: 0,
          animation: { opacity: "show" },
          speed: "fast",
          cssArrows: !0,
          disableHI: !0,
        });
      },
      i = function () {
        (t() && e()) || $(window).stellar();
      },
      o = function () {
        var t = $("#fh5co-menu-wrap").clone();
        t.attr({ id: "offcanvas-menu" }),
          t.find("> ul").attr({ class: "", id: "" }),
          $("#fh5co-page").prepend(t),
          $(".js-fh5co-nav-toggle").on("click", function () {
            $("body").hasClass("fh5co-offcanvas")
              ? $("body").removeClass("fh5co-offcanvas")
              : $("body").addClass("fh5co-offcanvas");
          }),
          $("#offcanvas-menu").css("height", $(window).height()),
          $(window).resize(function () {
            var t = $(window);
            $("#offcanvas-menu").css("height", t.height()),
              t.width() > 769 &&
                $("body").hasClass("fh5co-offcanvas") &&
                $("body").removeClass("fh5co-offcanvas");
          });
      },
      r = function () {
        $(document).click(function (t) {
          var e = $("#offcanvas-menu, .js-fh5co-nav-toggle");
          e.is(t.target) ||
            0 !== e.has(t.target).length ||
            ($("body").hasClass("fh5co-offcanvas") &&
              $("body").removeClass("fh5co-offcanvas"));
        });
      },
      s = function () {
        var t = 0;
        $(".animate-box").waypoint(
          function (e) {
            "down" !== e ||
              $(this.element).hasClass("animated") ||
              (t++,
              $(this.element).addClass("item-animate"),
              setTimeout(function () {
                $("body .animate-box.item-animate").each(function (t) {
                  var e = $(this);
                  setTimeout(
                    function () {
                      e.addClass("fadeInUp animated"),
                        e.removeClass("item-animate");
                    },
                    50 * t,
                    "easeInOutExpo"
                  );
                });
              }, 100));
          },
          { offset: "85%" }
        );
      },
      a = function () {
        var t = $(".sticky-banner");
        t.length && new Waypoint.Sticky({ element: t[0], offset: 0 });
      };
    $(function () {
      n(), i(), o(), r(), s(), a();
    });
  })();
