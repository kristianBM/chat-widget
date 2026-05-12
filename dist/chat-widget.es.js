var ie, v, Xe, E, De, Ke, Ve, fe, Q, Y, Ge, ye, we, ge, ne = {}, oe = [], mt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, se = Array.isArray;
function D(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Qe(e, t, r) {
  var n, a, o, s = {};
  for (o in t) o == "key" ? n = t[o] : o == "ref" ? a = t[o] : s[o] = t[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ie.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return Z(e, s, n, a, null);
}
function Z(e, t, r, n, a) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Xe, __i: -1, __u: 0 };
  return a == null && v.vnode != null && v.vnode(o), o;
}
function X(e) {
  return e.children;
}
function ee(e, t) {
  this.props = e, this.context = t;
}
function B(e, t) {
  if (t == null) return e.__ ? B(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? B(e) : null;
}
function bt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, n = [], a = [], o = D({}, t);
    o.__v = t.__v + 1, v.vnode && v.vnode(o), Ce(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, n, r ?? B(t), !!(32 & t.__u), a), o.__v = t.__v, o.__.__k[o.__i] = o, rt(n, o, a), t.__e = t.__ = null, o.__e != r && Ze(o);
  }
}
function Ze(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Ze(e);
}
function Ee(e) {
  (!e.__d && (e.__d = !0) && E.push(e) && !ae.__r++ || De != v.debounceRendering) && ((De = v.debounceRendering) || Ke)(ae);
}
function ae() {
  try {
    for (var e, t = 1; E.length; ) E.length > t && E.sort(Ve), e = E.shift(), t = E.length, bt(e);
  } finally {
    E.length = ae.__r = 0;
  }
}
function et(e, t, r, n, a, o, s, d, _, c, u) {
  var i, f, h, p, y, x, m, w = n && n.__k || oe, g = t.length;
  for (_ = vt(r, t, w, _, g), i = 0; i < g; i++) (h = r.__k[i]) != null && (f = h.__i != -1 && w[h.__i] || ne, h.__i = i, x = Ce(e, h, f, a, o, s, d, _, c, u), p = h.__e, h.ref && f.ref != h.ref && (f.ref && Me(f.ref, null, h), u.push(h.ref, h.__c || p, h)), y == null && p != null && (y = p), (m = !!(4 & h.__u)) || f.__k === h.__k ? (_ = tt(h, _, e, m), m && f.__e && (f.__e = null)) : typeof h.type == "function" && x !== void 0 ? _ = x : p && (_ = p.nextSibling), h.__u &= -7);
  return r.__e = y, _;
}
function vt(e, t, r, n, a) {
  var o, s, d, _, c, u = r.length, i = u, f = 0;
  for (e.__k = new Array(a), o = 0; o < a; o++) (s = t[o]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[o] = Z(null, s, null, null, null) : se(s) ? s = e.__k[o] = Z(X, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[o] = Z(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[o] = s, _ = o + f, s.__ = e, s.__b = e.__b + 1, d = null, (c = s.__i = xt(s, r, _, i)) != -1 && (i--, (d = r[c]) && (d.__u |= 2)), d == null || d.__v == null ? (c == -1 && (a > u ? f-- : a < u && f++), typeof s.type != "function" && (s.__u |= 4)) : c != _ && (c == _ - 1 ? f-- : c == _ + 1 ? f++ : (c > _ ? f-- : f++, s.__u |= 4))) : e.__k[o] = null;
  if (i) for (o = 0; o < u; o++) (d = r[o]) != null && !(2 & d.__u) && (d.__e == n && (n = B(d)), ot(d, d));
  return n;
}
function tt(e, t, r, n) {
  var a, o;
  if (typeof e.type == "function") {
    for (a = e.__k, o = 0; a && o < a.length; o++) a[o] && (a[o].__ = e, t = tt(a[o], t, r, n));
    return t;
  }
  e.__e != t && (n && (t && e.type && !t.parentNode && (t = B(e)), r.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function xt(e, t, r, n) {
  var a, o, s, d = e.key, _ = e.type, c = t[r], u = c != null && (2 & c.__u) == 0;
  if (c === null && d == null || u && d == c.key && _ == c.type) return r;
  if (n > (u ? 1 : 0)) {
    for (a = r - 1, o = r + 1; a >= 0 || o < t.length; ) if ((c = t[s = a >= 0 ? a-- : o++]) != null && !(2 & c.__u) && d == c.key && _ == c.type) return s;
  }
  return -1;
}
function Ue(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || mt.test(t) ? r : r + "px";
}
function G(e, t, r, n, a) {
  var o, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || Ue(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || Ue(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") o = t != (t = t.replace(Ge, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n ? r[Y] = n[Y] : (r[Y] = ye, e.addEventListener(t, o ? ge : we, o)) : e.removeEventListener(t, o ? ge : we, o);
  else {
    if (a == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Pe(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[Q] == null) t[Q] = ye++;
      else if (t[Q] < r[Y]) return;
      return r(v.event ? v.event(t) : t);
    }
  };
}
function Ce(e, t, r, n, a, o, s, d, _, c) {
  var u, i, f, h, p, y, x, m, w, g, b, S, M, T, R, L = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (_ = !!(32 & r.__u), o = [d = t.__e = r.__e]), (u = v.__b) && u(t);
  e: if (typeof L == "function") try {
    if (m = t.props, w = L.prototype && L.prototype.render, g = (u = L.contextType) && n[u.__c], b = u ? g ? g.props.value : u.__ : n, r.__c ? x = (i = t.__c = r.__c).__ = i.__E : (w ? t.__c = i = new L(m, b) : (t.__c = i = new ee(m, b), i.constructor = L, i.render = kt), g && g.sub(i), i.state || (i.state = {}), i.__n = n, f = i.__d = !0, i.__h = [], i._sb = []), w && i.__s == null && (i.__s = i.state), w && L.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = D({}, i.__s)), D(i.__s, L.getDerivedStateFromProps(m, i.__s))), h = i.props, p = i.state, i.__v = t, f) w && L.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), w && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (w && L.getDerivedStateFromProps == null && m !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(m, b), t.__v == r.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(m, i.__s, b) === !1) {
        t.__v != r.__v && (i.props = m, i.state = i.__s, i.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(z) {
          z && (z.__ = t);
        }), oe.push.apply(i.__h, i._sb), i._sb = [], i.__h.length && s.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(m, i.__s, b), w && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(h, p, y);
      });
    }
    if (i.context = b, i.props = m, i.__P = e, i.__e = !1, S = v.__r, M = 0, w) i.state = i.__s, i.__d = !1, S && S(t), u = i.render(i.props, i.state, i.context), oe.push.apply(i.__h, i._sb), i._sb = [];
    else do
      i.__d = !1, S && S(t), u = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++M < 25);
    i.state = i.__s, i.getChildContext != null && (n = D(D({}, n), i.getChildContext())), w && !f && i.getSnapshotBeforeUpdate != null && (y = i.getSnapshotBeforeUpdate(h, p)), T = u != null && u.type === X && u.key == null ? nt(u.props.children) : u, d = et(e, se(T) ? T : [T], t, r, n, a, o, s, d, _, c), i.base = t.__e, t.__u &= -161, i.__h.length && s.push(i), x && (i.__E = i.__ = null);
  } catch (z) {
    if (t.__v = null, _ || o != null) if (z.then) {
      for (t.__u |= _ ? 160 : 128; d && d.nodeType == 8 && d.nextSibling; ) d = d.nextSibling;
      o[o.indexOf(d)] = null, t.__e = d;
    } else {
      for (R = o.length; R--; ) ke(o[R]);
      me(t);
    }
    else t.__e = r.__e, t.__k = r.__k, z.then || me(t);
    v.__e(z, t, r);
  }
  else o == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : d = t.__e = yt(r.__e, t, r, n, a, o, s, _, c);
  return (u = v.diffed) && u(t), 128 & t.__u ? void 0 : d;
}
function me(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(me));
}
function rt(e, t, r) {
  for (var n = 0; n < r.length; n++) Me(r[n], r[++n], r[++n]);
  v.__c && v.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      v.__e(o, a.__v);
    }
  });
}
function nt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : se(e) ? e.map(nt) : D({}, e);
}
function yt(e, t, r, n, a, o, s, d, _) {
  var c, u, i, f, h, p, y, x = r.props || ne, m = t.props, w = t.type;
  if (w == "svg" ? a = "http://www.w3.org/2000/svg" : w == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((h = o[c]) && "setAttribute" in h == !!w && (w ? h.localName == w : h.nodeType == 3)) {
      e = h, o[c] = null;
      break;
    }
  }
  if (e == null) {
    if (w == null) return document.createTextNode(m);
    e = document.createElementNS(a, w, m.is && m), d && (v.__m && v.__m(t, o), d = !1), o = null;
  }
  if (w == null) x === m || d && e.data == m || (e.data = m);
  else {
    if (o = o && ie.call(e.childNodes), !d && o != null) for (x = {}, c = 0; c < e.attributes.length; c++) x[(h = e.attributes[c]).name] = h.value;
    for (c in x) h = x[c], c == "dangerouslySetInnerHTML" ? i = h : c == "children" || c in m || c == "value" && "defaultValue" in m || c == "checked" && "defaultChecked" in m || G(e, c, null, h, a);
    for (c in m) h = m[c], c == "children" ? f = h : c == "dangerouslySetInnerHTML" ? u = h : c == "value" ? p = h : c == "checked" ? y = h : d && typeof h != "function" || x[c] === h || G(e, c, h, x[c], a);
    if (u) d || i && (u.__html == i.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (i && (e.innerHTML = ""), et(t.type == "template" ? e.content : e, se(f) ? f : [f], t, r, n, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, s, o ? o[0] : r.__k && B(r, 0), d, _), o != null) for (c = o.length; c--; ) ke(o[c]);
    d || (c = "value", w == "progress" && p == null ? e.removeAttribute("value") : p != null && (p !== e[c] || w == "progress" && !p || w == "option" && p != x[c]) && G(e, c, p, x[c], a), c = "checked", y != null && y != e[c] && G(e, c, y, x[c], a));
  }
  return e;
}
function Me(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    v.__e(a, r);
  }
}
function ot(e, t, r) {
  var n, a;
  if (v.unmount && v.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || Me(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      v.__e(o, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (a = 0; a < n.length; a++) n[a] && ot(n[a], t, r || typeof e.type != "function");
  r || ke(e.__e), e.__c = e.__ = e.__e = void 0;
}
function kt(e, t, r) {
  return this.constructor(e, r);
}
function at(e, t, r) {
  var n, a, o, s;
  t == document && (t = document.documentElement), v.__ && v.__(e, t), a = (n = !1) ? null : t.__k, o = [], s = [], Ce(t, e = t.__k = Qe(X, null, [e]), a || ne, ne, t.namespaceURI, a ? null : t.firstChild ? ie.call(t.childNodes) : null, o, a ? a.__e : t.firstChild, n, s), rt(o, e, s);
}
ie = oe.slice, v = { __e: function(e, t, r, n) {
  for (var a, o, s; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(e)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, n || {}), s = a.__d), s) return a.__E = a;
  } catch (d) {
    e = d;
  }
  throw e;
} }, Xe = 0, ee.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = D({}, this.state), typeof e == "function" && (e = e(D({}, r), this.props)), e && D(r, e), e != null && this.__v && (t && this._sb.push(t), Ee(this));
}, ee.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ee(this));
}, ee.prototype.render = X, E = [], Ke = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ve = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ae.__r = 0, fe = Math.random().toString(8), Q = "__d" + fe, Y = "__a" + fe, Ge = /(PointerCapture)$|Capture$/i, ye = 0, we = Pe(!1), ge = Pe(!0);
var Ct = 0;
function l(e, t, r, n, a, o) {
  t || (t = {});
  var s, d, _ = t;
  if ("ref" in _) for (d in _ = {}, t) d == "ref" ? s = t[d] : _[d] = t[d];
  var c = { type: e, props: _, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ct, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof e == "function" && (s = e.defaultProps)) for (d in s) _[d] === void 0 && (_[d] = s[d]);
  return v.vnode && v.vnode(c), c;
}
var q, k, he, He, J = 0, it = [], C = v, Ne = C.__b, Be = C.__r, We = C.diffed, Re = C.__c, Fe = C.unmount, Oe = C.__;
function Se(e, t) {
  C.__h && C.__h(k, e, J || t), J = 0;
  var r = k.__H || (k.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function A(e) {
  return J = 1, Mt(lt, e);
}
function Mt(e, t, r) {
  var n = Se(q++, 2);
  if (n.t = e, !n.__c && (n.__ = [lt(void 0, t), function(d) {
    var _ = n.__N ? n.__N[0] : n.__[0], c = n.t(_, d);
    _ !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = k, !k.__f)) {
    var a = function(d, _, c) {
      if (!n.__c.__H) return !0;
      var u = n.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (u.every(function(f) {
        return !f.__N;
      })) return !o || o.call(this, d, _, c);
      var i = n.__c.props !== d;
      return u.some(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (i = !0);
        }
      }), o && o.call(this, d, _, c) || i;
    };
    k.__f = !0;
    var o = k.shouldComponentUpdate, s = k.componentWillUpdate;
    k.componentWillUpdate = function(d, _, c) {
      if (this.__e) {
        var u = o;
        o = void 0, a(d, _, c), o = u;
      }
      s && s.call(this, d, _, c);
    }, k.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function N(e, t) {
  var r = Se(q++, 3);
  !C.__s && ct(r.__H, t) && (r.__ = e, r.u = t, k.__H.__h.push(r));
}
function W(e) {
  return J = 5, st(function() {
    return { current: e };
  }, []);
}
function st(e, t) {
  var r = Se(q++, 7);
  return ct(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function $(e, t) {
  return J = 8, st(function() {
    return e;
  }, t);
}
function St() {
  for (var e; e = it.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(te), t.__h.some(be), t.__h = [];
    } catch (r) {
      t.__h = [], C.__e(r, e.__v);
    }
  }
}
C.__b = function(e) {
  k = null, Ne && Ne(e);
}, C.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Oe && Oe(e, t);
}, C.__r = function(e) {
  Be && Be(e), q = 0;
  var t = (k = e.__c).__H;
  t && (he === k ? (t.__h = [], k.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(te), t.__h.some(be), t.__h = [], q = 0)), he = k;
}, C.diffed = function(e) {
  We && We(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (it.push(t) !== 1 && He === C.requestAnimationFrame || ((He = C.requestAnimationFrame) || It)(St)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), he = k = null;
}, C.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(te), r.__h = r.__h.filter(function(n) {
        return !n.__ || be(n);
      });
    } catch (n) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], C.__e(n, r.__v);
    }
  }), Re && Re(e, t);
}, C.unmount = function(e) {
  Fe && Fe(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      te(n);
    } catch (a) {
      t = a;
    }
  }), r.__H = void 0, t && C.__e(t, r.__v));
};
var Ye = typeof requestAnimationFrame == "function";
function It(e) {
  var t, r = function() {
    clearTimeout(n), Ye && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 35);
  Ye && (t = requestAnimationFrame(r));
}
function te(e) {
  var t = k, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), k = t;
}
function be(e) {
  var t = k;
  e.__c = e.__(), k = t;
}
function ct(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function lt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M8 10h8M8 14h5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.953 9.953 0 0 0 12 22z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function $t() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M18 6L6 18M6 6l12 12",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Tt({ isOpen: e, unreadCount: t, bubbleIcon: r, onClick: n }) {
  return /* @__PURE__ */ l(
    "button",
    {
      class: "cw-bubble",
      onClick: n,
      "aria-label": e ? "Close chat" : "Open chat",
      "aria-expanded": e,
      children: [
        r && !e ? /* @__PURE__ */ l("img", { src: r, alt: "", class: "cw-bubble__img" }) : e ? /* @__PURE__ */ l($t, {}) : /* @__PURE__ */ l(Lt, {}),
        !e && t > 0 && /* @__PURE__ */ l("span", { class: "cw-badge", "aria-label": `${t} unread message${t !== 1 ? "s" : ""}`, children: t > 99 ? "99+" : t })
      ]
    }
  );
}
function jt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ l(
      "path",
      {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ l(
      "path",
      {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function At() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function zt({ title: e, subtitle: t, botName: r, botAvatar: n, i18n: a, onClose: o, onNewConversation: s }) {
  const d = e || (a == null ? void 0 : a.title) || "Chat", _ = t || (a == null ? void 0 : a.subtitle) || "", c = (r || d)[0].toUpperCase();
  return /* @__PURE__ */ l("header", { class: "cw-header", children: /* @__PURE__ */ l("div", { class: "cw-header__top", children: [
    /* @__PURE__ */ l("div", { class: "cw-header__info", children: [
      /* @__PURE__ */ l("div", { class: "cw-header__avatar", children: n ? /* @__PURE__ */ l("img", { src: n, alt: r || "Bot avatar" }) : c }),
      /* @__PURE__ */ l("div", { class: "cw-header__text", children: [
        /* @__PURE__ */ l("div", { class: "cw-header__title", children: d }),
        _ && /* @__PURE__ */ l("div", { class: "cw-header__subtitle", children: _ })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { class: "cw-header__actions", children: [
      /* @__PURE__ */ l(
        "button",
        {
          class: "cw-icon-btn",
          onClick: s,
          title: (a == null ? void 0 : a.newConversation) || "New Conversation",
          "aria-label": (a == null ? void 0 : a.newConversation) || "New Conversation",
          children: /* @__PURE__ */ l(jt, {})
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          class: "cw-icon-btn",
          onClick: o,
          title: "Close chat",
          "aria-label": "Close chat",
          children: /* @__PURE__ */ l(At, {})
        }
      )
    ] })
  ] }) });
}
function Dt(e) {
  if (!e) return [];
  const t = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)|(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi, r = [];
  let n = 0, a;
  for (; (a = t.exec(e)) !== null; ) {
    if (a.index > n && r.push({ type: "text", value: e.slice(n, a.index) }), a[1] !== void 0) {
      const o = a[2].replace(/[.,;:!?)\]'"*_`]+$/, ""), s = a[1].trim() || ve(o);
      r.push({ type: "url", value: o, label: s });
    } else {
      const o = a[3].replace(/[.,;:!?)\]'"*_`]+$/, ""), s = a[3].slice(o.length);
      r.push({ type: "url", value: o }), s && r.push({ type: "text", value: s });
    }
    n = a.index + a[0].length;
  }
  return n < e.length && r.push({ type: "text", value: e.slice(n) }), r;
}
function ve(e) {
  try {
    const { hostname: t } = new URL(e);
    return t.replace(/^www\./, "");
  } catch {
    return e;
  }
}
const Et = 5 * 1024 * 1024, Ut = 1600, Pt = 0.85;
async function Ht(e) {
  if (!e.type.startsWith("image/"))
    throw new Error("Only image files are supported");
  if (e.size > Et)
    throw new Error("Image is larger than 5MB");
  const t = URL.createObjectURL(e);
  try {
    const r = await Nt(t), n = Math.min(1, Ut / Math.max(r.width, r.height)), a = Math.max(1, Math.round(r.width * n)), o = Math.max(1, Math.round(r.height * n)), s = document.createElement("canvas");
    s.width = a, s.height = o, s.getContext("2d").drawImage(r, 0, 0, a, o);
    const _ = e.type === "image/gif" || e.type === "image/png" ? e.type : "image/jpeg", u = s.toDataURL(_, Pt).split(",")[1] || "";
    return { type: "image", mime: _, data: u, name: e.name };
  } finally {
    URL.revokeObjectURL(t);
  }
}
function Nt(e) {
  return new Promise((t, r) => {
    const n = new Image();
    n.onload = () => t(n), n.onerror = () => r(new Error("Failed to load image")), n.src = e;
  });
}
function dt(e) {
  return `data:${e.mime};base64,${e.data}`;
}
function Bt(e) {
  if (!e) return "";
  try {
    return new Intl.DateTimeFormat(void 0, {
      hour: "numeric",
      minute: "2-digit"
    }).format(e instanceof Date ? e : new Date(e));
  } catch {
    return "";
  }
}
function Wt() {
  return /* @__PURE__ */ l("svg", { class: "cw-link__icon", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Rt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ l("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ l("circle", { cx: "8.5", cy: "8.5", r: "1.5", fill: "currentColor" }),
    /* @__PURE__ */ l("path", { d: "m21 15-5-5L5 21", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" })
  ] });
}
function Ft({ content: e }) {
  return Dt(e).map((r, n) => r.type === "url" ? /* @__PURE__ */ l(
    "a",
    {
      href: r.value,
      class: "cw-link",
      target: "_blank",
      rel: "noopener noreferrer",
      title: r.value,
      "aria-label": `${r.label || ve(r.value)} (opens in new tab)`,
      children: [
        r.label || ve(r.value),
        /* @__PURE__ */ l(Wt, {})
      ]
    },
    n
  ) : r.value);
}
function Ot({ attachments: e }) {
  if (!e || e.length === 0) return null;
  const t = e.filter((_) => _.placeholder), r = e.filter((_) => !_.placeholder && _.type === "image" && _.data), n = r.length, a = 4, o = r.slice(0, a), s = Math.max(0, n - a), d = n <= 1 ? "cw-message__attachments--single" : n === 2 ? "cw-message__attachments--two" : n === 3 ? "cw-message__attachments--three" : "cw-message__attachments--grid";
  return /* @__PURE__ */ l(X, { children: [
    t.map((_, c) => /* @__PURE__ */ l("div", { class: "cw-attachment-placeholder", title: _.name || "", children: [
      /* @__PURE__ */ l(Rt, {}),
      /* @__PURE__ */ l("span", { children: _.name || "Image" })
    ] }, `p-${c}`)),
    n > 0 && /* @__PURE__ */ l("div", { class: `cw-message__attachments ${d}`, children: o.map((_, c) => {
      const u = dt(_), f = c === o.length - 1 && s > 0;
      return /* @__PURE__ */ l(
        "a",
        {
          href: u,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "cw-attachment-tile",
          "aria-label": _.name || "Image attachment",
          children: [
            /* @__PURE__ */ l("img", { src: u, alt: _.name || "Image" }),
            f && /* @__PURE__ */ l("span", { class: "cw-attachment-tile__overlay", "aria-hidden": "true", children: [
              "+",
              s
            ] })
          ]
        },
        c
      );
    }) })
  ] });
}
function Yt({ role: e, content: t, attachments: r, isError: n, timestamp: a, showTimestamps: o, hideAvatar: s, botName: d, botAvatar: _ }) {
  const c = e === "bot", u = c ? (d || "A")[0].toUpperCase() : "U", i = r && r.length > 0, f = !!t;
  return /* @__PURE__ */ l(
    "div",
    {
      class: [
        "cw-message",
        c ? "cw-message--bot" : "cw-message--user",
        n ? "cw-message--error" : "",
        s ? "cw-message--hide-avatar" : ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ l("div", { class: "cw-message__avatar", "aria-hidden": "true", children: c && _ ? /* @__PURE__ */ l("img", { src: _, alt: d || "Bot" }) : u }),
        /* @__PURE__ */ l("div", { class: "cw-message__body", children: [
          /* @__PURE__ */ l("div", { class: `cw-message__bubble ${i && !f ? "cw-message__bubble--media-only" : ""}`, children: [
            /* @__PURE__ */ l(Ot, { attachments: r }),
            f && /* @__PURE__ */ l("div", { class: "cw-message__text", children: /* @__PURE__ */ l(Ft, { content: t }) })
          ] }),
          o && a && /* @__PURE__ */ l("time", { class: "cw-message__time", dateTime: new Date(a).toISOString(), children: Bt(a) })
        ] })
      ]
    }
  );
}
function qt({ botName: e, botAvatar: t }) {
  const r = (e || "A")[0].toUpperCase();
  return /* @__PURE__ */ l("div", { class: "cw-typing", "aria-label": "Bot is typing", role: "status", children: [
    /* @__PURE__ */ l("div", { class: "cw-typing__avatar", children: t ? /* @__PURE__ */ l("img", { src: t, alt: e || "Bot" }) : r }),
    /* @__PURE__ */ l("div", { class: "cw-typing__bubble", children: [
      /* @__PURE__ */ l("span", { class: "cw-typing__dot" }),
      /* @__PURE__ */ l("span", { class: "cw-typing__dot" }),
      /* @__PURE__ */ l("span", { class: "cw-typing__dot" })
    ] })
  ] });
}
function Jt({ messages: e, isTyping: t, showTimestamps: r, botName: n, botAvatar: a }) {
  const o = W(null);
  return N(() => {
    o.current && o.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [e.length, t]), /* @__PURE__ */ l("div", { class: "cw-messages", role: "log", "aria-live": "polite", "aria-label": "Chat messages", children: [
    e.map((s, d) => {
      const _ = e[d + 1], c = _ && _.role === s.role;
      return /* @__PURE__ */ l(
        Yt,
        {
          role: s.role,
          content: s.content,
          attachments: s.attachments,
          isError: s.isError,
          timestamp: s.timestamp,
          showTimestamps: r,
          hideAvatar: c,
          botName: n,
          botAvatar: a
        },
        s.id
      );
    }),
    t && /* @__PURE__ */ l(qt, { botName: n, botAvatar: a }),
    /* @__PURE__ */ l("div", { ref: o, style: { height: 1, flexShrink: 0 }, "aria-hidden": "true" })
  ] });
}
function Xt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M22 2L11 13M22 2L15 22 11 13 2 9l20-7z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Kt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ l(
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.93 8.83l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Vt() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", class: "cw-spinner", children: /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeDasharray: "40 60" }) });
}
function Gt({ onSend: e, disabled: t, placeholder: r }) {
  const n = W(null), a = W(null), [o, s] = A([]), [d, _] = A(!1), [c, u] = A(""), i = $(() => {
    const g = n.current;
    g && (g.value = "", g.style.height = "auto"), s([]), u("");
  }, []), f = $(() => {
    var b;
    const g = (((b = n.current) == null ? void 0 : b.value) || "").trim();
    t || d || !g && o.length === 0 || (e(g, o), i());
  }, [t, d, o, e, i]), h = $((g) => {
    const b = g.target;
    b.style.height = "auto", b.style.height = Math.min(b.scrollHeight, 100) + "px";
  }, []), p = $((g) => {
    g.key === "Enter" && !g.shiftKey && (g.preventDefault(), f());
  }, [f]), y = $(() => {
    var g;
    (g = a.current) == null || g.click();
  }, []), x = $(async (g) => {
    const b = Array.from(g.target.files || []);
    if (g.target.value = "", b.length !== 0) {
      _(!0), u("");
      try {
        const S = await Promise.all(b.map((M) => Ht(M)));
        s((M) => [...M, ...S]);
      } catch (S) {
        u((S == null ? void 0 : S.message) || "Failed to process image");
      } finally {
        _(!1);
      }
    }
  }, []), m = $((g) => {
    s((b) => b.filter((S, M) => M !== g));
  }, []), w = !t && !d;
  return /* @__PURE__ */ l("div", { class: "cw-input-area", children: [
    c && /* @__PURE__ */ l("div", { class: "cw-input-error", role: "alert", children: c }),
    o.length > 0 && /* @__PURE__ */ l("div", { class: "cw-attachments-preview", children: o.map((g, b) => /* @__PURE__ */ l("div", { class: "cw-attachment-thumb", title: g.name, children: [
      /* @__PURE__ */ l("img", { src: dt(g), alt: g.name }),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          class: "cw-attachment-thumb__remove",
          onClick: () => m(b),
          "aria-label": "Remove attachment",
          children: "×"
        }
      )
    ] }, b)) }),
    /* @__PURE__ */ l("div", { class: "cw-input-wrapper", children: [
      /* @__PURE__ */ l(
        "input",
        {
          ref: a,
          type: "file",
          accept: "image/*",
          multiple: !0,
          onChange: x,
          class: "cw-file-input",
          "aria-hidden": "true",
          tabIndex: -1
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          class: "cw-attach-btn",
          onClick: y,
          disabled: !w,
          "aria-label": "Attach image",
          title: "Attach image",
          children: d ? /* @__PURE__ */ l(Vt, {}) : /* @__PURE__ */ l(Kt, {})
        }
      ),
      /* @__PURE__ */ l(
        "textarea",
        {
          ref: n,
          class: "cw-textarea",
          onInput: h,
          onKeyDown: p,
          placeholder: r || "Type a message...",
          disabled: t,
          rows: 1,
          "aria-label": "Message input",
          "aria-multiline": "true"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          class: "cw-send-btn",
          onClick: f,
          disabled: !w,
          "aria-label": "Send message",
          title: "Send message (Enter)",
          children: /* @__PURE__ */ l(Xt, {})
        }
      )
    ] })
  ] });
}
function Qt({
  isOpen: e,
  messages: t,
  isTyping: r,
  isDisabled: n,
  title: a,
  subtitle: o,
  botName: s,
  botAvatar: d,
  showTimestamps: _,
  placeholder: c,
  i18n: u,
  onClose: i,
  onNewConversation: f,
  onSend: h
}) {
  const [p, y] = A(e), [x, m] = A(""), w = W(e);
  return N(() => {
    if (e && !w.current)
      w.current = !0, y(!0), requestAnimationFrame(() => m("cw-window--enter"));
    else if (!e && w.current) {
      w.current = !1, m("cw-window--exit");
      const g = setTimeout(() => {
        y(!1), m("");
      }, 250);
      return () => clearTimeout(g);
    }
  }, [e]), p ? /* @__PURE__ */ l(
    "div",
    {
      class: ["cw-window", x].filter(Boolean).join(" "),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": a || "Chat",
      children: [
        /* @__PURE__ */ l(
          zt,
          {
            title: a,
            subtitle: o,
            botName: s,
            botAvatar: d,
            i18n: u,
            onClose: i,
            onNewConversation: f
          }
        ),
        /* @__PURE__ */ l(
          Jt,
          {
            messages: t,
            isTyping: r,
            showTimestamps: _,
            botName: s,
            botAvatar: d
          }
        ),
        /* @__PURE__ */ l(
          Gt,
          {
            onSend: h,
            disabled: n,
            placeholder: (u == null ? void 0 : u.placeholder) || c
          }
        )
      ]
    }
  ) : null;
}
async function Zt({ webhookUrl: e, sessionId: t, message: r, attachments: n = [], headers: a = {}, requestPayload: o = {} }) {
  const s = {
    action: "sendMessage",
    sessionId: t,
    chatInput: r,
    ...o
  };
  n.length > 0 && (s.attachments = n.map((i) => ({
    type: i.type,
    mime: i.mime,
    data: i.data,
    name: i.name
  })));
  const d = JSON.stringify(s), _ = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...a
    },
    body: d
  });
  if (!_.ok)
    throw new Error(`Webhook returned HTTP ${_.status}: ${_.statusText}`);
  if (!(_.headers.get("content-type") || "").includes("application/json"))
    return (await _.text()).trim() || "No response received.";
  const u = await _.json();
  return xe(u);
}
function xe(e) {
  if (typeof e == "string") return e.trim();
  if (Array.isArray(e))
    return e.length === 0 ? "No response received." : xe(e[0]);
  if (e && typeof e == "object") {
    const t = ["output", "text", "message", "response", "reply"];
    for (const r of t)
      if (e[r] !== void 0 && e[r] !== null)
        return xe(e[r]);
    return JSON.stringify(e);
  }
  return String(e ?? "No response received.");
}
const Ie = "cw_session", er = 50;
function qe() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function tr() {
  try {
    const e = localStorage.getItem(Ie);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t.sessionId || !Array.isArray(t.messages) ? null : t;
  } catch {
    return null;
  }
}
function rr(e, t) {
  try {
    const r = t.slice(-er).map((n) => !n.attachments || n.attachments.length === 0 ? n : {
      ...n,
      attachments: n.attachments.map((a) => ({
        type: a.type,
        name: a.name,
        placeholder: !0
      }))
    });
    localStorage.setItem(Ie, JSON.stringify({ sessionId: e, messages: r }));
  } catch {
  }
}
function nr() {
  try {
    localStorage.removeItem(Ie);
  } catch {
  }
}
let or = 0;
function re() {
  return `msg-${++or}-${Date.now()}`;
}
function Je(e) {
  return (e || []).map((t) => ({
    id: re(),
    role: "bot",
    content: t,
    timestamp: /* @__PURE__ */ new Date(),
    isError: !1
  }));
}
function ar(e) {
  const {
    webhookUrl: t,
    title: r,
    subtitle: n,
    botName: a = "Assistant",
    botAvatar: o = null,
    initialMessages: s = [],
    placeholder: d = "Type a message...",
    autoOpen: _ = !1,
    persistSession: c = !0,
    showTimestamps: u = !0,
    typingDelay: i = 1e3,
    webhookHeaders: f = {},
    requestPayload: h = {},
    theme: p = {},
    i18n: y = {},
    onOpen: x,
    onClose: m,
    onMessage: w,
    onError: g
  } = e, [b, S] = A(_), [M, T] = A([]), [R, L] = A(!1), [z, ce] = A(!1), [pt, le] = A(0), [K, Le] = A(() => qe()), de = W(b);
  N(() => {
    de.current = b;
  }, [b]), N(() => {
    if (c) {
      const I = tr();
      if (I && I.messages.length > 0) {
        Le(I.sessionId), T(I.messages.map((j) => ({
          ...j,
          timestamp: j.timestamp ? new Date(j.timestamp) : /* @__PURE__ */ new Date()
        })));
        return;
      }
    }
    s.length > 0 && T(Je(s));
  }, []), N(() => {
    c && M.length > 0 && rr(K, M);
  }, [M, K, c]);
  const $e = W(M.length);
  N(() => {
    const I = $e.current;
    if ($e.current = M.length, !de.current && M.length > I) {
      const j = M.slice(I).filter((V) => V.role === "bot").length;
      j > 0 && le((V) => V + j);
    }
  }, [M]);
  const Te = $(() => {
    S(!0), le(0), typeof x == "function" && x();
  }, [x]), _e = $(() => {
    S(!1), typeof m == "function" && m();
  }, [m]), ut = $(() => {
    de.current ? _e() : Te();
  }, [Te, _e]), ft = $(async (I, j = []) => {
    if (!(!!I && I.trim().length > 0) && j.length === 0 || z) return;
    const gt = {
      id: re(),
      role: "user",
      content: I || "",
      attachments: j,
      timestamp: /* @__PURE__ */ new Date(),
      isError: !1
    };
    T((H) => [...H, gt]), L(!0), ce(!0), typeof w == "function" && w({ role: "user", content: I, attachments: j });
    const ze = Date.now();
    try {
      const H = await Zt({
        webhookUrl: t,
        sessionId: K,
        message: I,
        attachments: j,
        headers: f,
        requestPayload: h
      }), pe = Date.now() - ze, F = Math.max(0, i - pe);
      F > 0 && await new Promise((P) => setTimeout(P, F));
      const ue = {
        id: re(),
        role: "bot",
        content: H,
        timestamp: /* @__PURE__ */ new Date(),
        isError: !1
      };
      T((P) => [...P, ue]), typeof w == "function" && w({ role: "bot", content: H });
    } catch (H) {
      const pe = Date.now() - ze, F = Math.max(0, Math.min(i, 1200) - pe);
      F > 0 && await new Promise((P) => setTimeout(P, F));
      const ue = {
        id: re(),
        role: "bot",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: /* @__PURE__ */ new Date(),
        isError: !0
      };
      T((P) => [...P, ue]), typeof g == "function" && g(H);
    } finally {
      L(!1), ce(!1);
    }
  }, [t, K, f, h, i, z, w, g]), ht = $(() => {
    const I = qe();
    Le(I), nr(), T(Je(s)), le(0), L(!1), ce(!1);
  }, [s]), je = (p == null ? void 0 : p.position) || "bottom-right", wt = `cw-root--${["bottom-right", "bottom-left", "top-right", "top-left"].includes(je) ? je : "bottom-right"}`, Ae = p == null ? void 0 : p.darkMode;
  return /* @__PURE__ */ l(
    "div",
    {
      class: ["cw-root", wt, Ae === !0 ? "cw-root--dark" : Ae === !1 ? "cw-root--light" : "", b ? "cw-root--open" : ""].filter(Boolean).join(" "),
      style: {
        ...(p == null ? void 0 : p.primaryColor) && { "--cw-primary": p.primaryColor },
        ...(p == null ? void 0 : p.primaryTextColor) && { "--cw-primary-text": p.primaryTextColor },
        ...(p == null ? void 0 : p.backgroundColor) && { "--cw-bg": p.backgroundColor },
        ...(p == null ? void 0 : p.textColor) && { "--cw-text": p.textColor },
        ...(p == null ? void 0 : p.fontFamily) && { "--cw-font": p.fontFamily },
        ...(p == null ? void 0 : p.borderRadius) && { "--cw-radius": p.borderRadius },
        ...(p == null ? void 0 : p.bubbleSize) && { "--cw-bubble-size": p.bubbleSize },
        ...(p == null ? void 0 : p.offsetX) && { "--cw-offset-x": p.offsetX },
        ...(p == null ? void 0 : p.offsetY) && { "--cw-offset-y": p.offsetY }
      },
      "aria-label": "Chat widget",
      children: [
        /* @__PURE__ */ l(
          Qt,
          {
            isOpen: b,
            messages: M,
            isTyping: R,
            isDisabled: z,
            title: r || (y == null ? void 0 : y.title),
            subtitle: n || (y == null ? void 0 : y.subtitle),
            botName: a,
            botAvatar: o,
            showTimestamps: u,
            placeholder: d,
            i18n: y,
            onClose: _e,
            onNewConversation: ht,
            onSend: ft
          }
        ),
        /* @__PURE__ */ l(
          Tt,
          {
            isOpen: b,
            unreadCount: pt,
            bubbleIcon: (p == null ? void 0 : p.bubbleIcon) || null,
            onClick: ut
          }
        )
      ]
    }
  );
}
const ir = '.cw-root *,.cw-root *:before,.cw-root *:after{box-sizing:border-box;margin:0;padding:0}.cw-root{--cw-primary: #6366f1;--cw-primary-dark: color-mix(in srgb, var(--cw-primary) 82%, black);--cw-primary-text: #ffffff;--cw-bg: #ffffff;--cw-text: #111827;--cw-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;--cw-radius: 16px;--cw-bubble-size: 56px;--cw-offset-x: 20px;--cw-offset-y: 20px;--cw-shadow: 0 8px 32px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.1);--cw-shadow-sm: 0 2px 8px rgba(0,0,0,.12);--cw-border: rgba(0,0,0,.08);--cw-msg-bot-bg: #f3f4f6;--cw-msg-bot-text: var(--cw-text);--cw-msg-user-bg: var(--cw-primary);--cw-msg-user-text: var(--cw-primary-text);--cw-input-bg: #f9fafb;--cw-input-border: #e5e7eb;--cw-placeholder: #9ca3af;--cw-timestamp: #9ca3af;--cw-header-bg: var(--cw-primary);--cw-header-text: var(--cw-primary-text);--cw-badge-bg: #ef4444;--cw-error-bg: #fee2e2;--cw-error-text: #991b1b;--cw-error-border: #fca5a5;--cw-window-width: 380px;--cw-window-height: 560px;font-family:var(--cw-font);position:fixed;z-index:2147483647;color-scheme:light}@media (prefers-color-scheme: dark){.cw-root:not(.cw-root--light){--cw-bg: #1f2937;--cw-text: #f9fafb;--cw-msg-bot-bg: #374151;--cw-msg-bot-text: #f9fafb;--cw-input-bg: #2d3748;--cw-input-border: #4a5568;--cw-placeholder: #718096;--cw-timestamp: #6b7280;--cw-border: rgba(255,255,255,.08);color-scheme:dark}}.cw-root--dark{--cw-bg: #1f2937;--cw-text: #f9fafb;--cw-msg-bot-bg: #374151;--cw-msg-bot-text: #f9fafb;--cw-input-bg: #2d3748;--cw-input-border: #4a5568;--cw-placeholder: #718096;--cw-timestamp: #6b7280;--cw-border: rgba(255,255,255,.08);color-scheme:dark}.cw-root--bottom-right{bottom:var(--cw-offset-y);right:var(--cw-offset-x)}.cw-root--bottom-left{bottom:var(--cw-offset-y);left:var(--cw-offset-x)}.cw-root--top-right{top:var(--cw-offset-y);right:var(--cw-offset-x)}.cw-root--top-left{top:var(--cw-offset-y);left:var(--cw-offset-x)}.cw-bubble{position:relative;width:var(--cw-bubble-size);height:var(--cw-bubble-size);border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--cw-shadow);transition:transform .2s cubic-bezier(.34,1.56,.64,1),background .2s ease,box-shadow .2s ease;outline:none;-webkit-tap-highlight-color:transparent}.cw-bubble:hover{background:var(--cw-primary-dark);transform:scale(1.08);box-shadow:0 12px 40px #00000038,0 4px 12px #00000024}.cw-bubble:active{transform:scale(.95)}.cw-bubble svg{width:26px;height:26px;flex-shrink:0}.cw-bubble__img{width:100%;height:100%;object-fit:cover;border-radius:50%}.cw-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;background:var(--cw-badge-bg);color:#fff;font-size:11px;font-weight:700;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:0 5px;border:2px solid var(--cw-bg);animation:cw-badge-pop .3s cubic-bezier(.34,1.56,.64,1);line-height:1}@keyframes cw-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.cw-window{position:absolute;width:var(--cw-window-width);height:var(--cw-window-height);background:var(--cw-bg);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);display:flex;flex-direction:column;overflow:hidden;transform-origin:bottom right}.cw-root--bottom-right .cw-window,.cw-root--bottom-left .cw-window{bottom:calc(var(--cw-bubble-size) + 12px);transform-origin:bottom center}.cw-root--bottom-right .cw-window{right:0}.cw-root--bottom-left .cw-window{left:0}.cw-root--top-right .cw-window,.cw-root--top-left .cw-window{top:calc(var(--cw-bubble-size) + 12px);transform-origin:top center}.cw-root--top-right .cw-window{right:0}.cw-root--top-left .cw-window{left:0}.cw-window--enter{animation:cw-window-enter .4s cubic-bezier(.34,1.56,.64,1) forwards}.cw-window--exit{animation:cw-window-exit .25s cubic-bezier(.4,0,.2,1) forwards}@keyframes cw-window-enter{0%{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}@keyframes cw-window-exit{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.85)}}.cw-header{background:var(--cw-header-bg);color:var(--cw-header-text);padding:16px 16px 24px;position:relative;flex-shrink:0;z-index:1}.cw-header:after{content:"";position:absolute;bottom:0;left:0;right:0;height:16px;background:var(--cw-bg);border-radius:16px 16px 0 0}.cw-header__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.cw-header__info{display:flex;align-items:center;gap:12px;flex:1;min-width:0}.cw-header__avatar{width:40px;height:40px;border-radius:50%;background:#fff3;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0;overflow:hidden}.cw-header__avatar img{width:100%;height:100%;object-fit:cover}.cw-header__text{min-width:0}.cw-header__title{font-size:15px;font-weight:700;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cw-header__subtitle{font-size:12px;opacity:.8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cw-header__actions{display:flex;align-items:center;gap:4px;flex-shrink:0}.cw-icon-btn{width:32px;height:32px;border-radius:8px;border:none;background:#ffffff26;color:var(--cw-header-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;outline:none;-webkit-tap-highlight-color:transparent}.cw-icon-btn:hover{background:#ffffff40}.cw-icon-btn:active{background:#ffffff59}.cw-icon-btn svg{width:16px;height:16px}.cw-messages{flex:1;overflow-y:auto;padding:8px 16px 12px;display:flex;flex-direction:column;gap:4px;scroll-behavior:smooth}.cw-messages::-webkit-scrollbar{width:4px}.cw-messages::-webkit-scrollbar-track{background:transparent}.cw-messages::-webkit-scrollbar-thumb{background:var(--cw-input-border);border-radius:2px}.cw-messages::-webkit-scrollbar-thumb:hover{background:var(--cw-placeholder)}.cw-message{display:flex;gap:8px;align-items:flex-end;max-width:100%}.cw-message--bot{flex-direction:row}.cw-message--user{flex-direction:row-reverse}.cw-message--bot+.cw-message--bot,.cw-message--user+.cw-message--user{margin-top:-2px}.cw-message--bot+.cw-message--user,.cw-message--user+.cw-message--bot{margin-top:8px}.cw-message__avatar{width:28px;height:28px;border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;align-self:flex-end}.cw-message__avatar img{width:100%;height:100%;object-fit:cover}.cw-message--user .cw-message__avatar{background:var(--cw-msg-bot-bg);color:var(--cw-text)}.cw-message--hide-avatar .cw-message__avatar{visibility:hidden}.cw-message__body{display:flex;flex-direction:column;gap:3px;max-width:calc(100% - 40px);min-width:0}.cw-message--user .cw-message__body{align-items:flex-end}.cw-message__bubble{display:inline-block;padding:10px 14px;border-radius:18px;font-size:14px;line-height:1.5;word-break:break-word;white-space:pre-wrap;max-width:100%}.cw-message--bot .cw-message__bubble{background:var(--cw-msg-bot-bg);color:var(--cw-msg-bot-text);border-bottom-left-radius:4px}.cw-message--user .cw-message__bubble{background:var(--cw-msg-user-bg);color:var(--cw-msg-user-text);border-bottom-right-radius:4px}.cw-message--error .cw-message__bubble{background:var(--cw-error-bg);color:var(--cw-error-text);border:1px solid var(--cw-error-border)}.cw-message__time{font-size:11px;color:var(--cw-timestamp);padding:0 4px;white-space:nowrap}.cw-message{animation:cw-msg-enter .2s ease-out}@keyframes cw-msg-enter{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.cw-typing{display:flex;gap:8px;align-items:flex-end;margin-top:4px;animation:cw-msg-enter .2s ease-out}.cw-typing__avatar{width:28px;height:28px;border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}.cw-typing__avatar img{width:100%;height:100%;object-fit:cover}.cw-typing__bubble{background:var(--cw-msg-bot-bg);border-radius:18px 18px 18px 4px;padding:12px 16px;display:flex;align-items:center;gap:4px}.cw-typing__dot{width:6px;height:6px;border-radius:50%;background:var(--cw-placeholder);animation:cw-typing-bounce 1.2s ease-in-out infinite}.cw-typing__dot:nth-child(1){animation-delay:0s}.cw-typing__dot:nth-child(2){animation-delay:.2s}.cw-typing__dot:nth-child(3){animation-delay:.4s}@keyframes cw-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}.cw-input-area{padding:12px 16px 16px;border-top:1px solid var(--cw-border);background:var(--cw-bg);flex-shrink:0}.cw-input-wrapper{display:flex;align-items:flex-end;gap:8px;background:var(--cw-input-bg);border:1.5px solid var(--cw-input-border);border-radius:12px;padding:8px 8px 8px 14px;transition:border-color .2s ease,box-shadow .2s ease}.cw-input-wrapper:focus-within{border-color:var(--cw-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--cw-primary) 15%,transparent)}.cw-textarea{flex:1;border:none;background:transparent;color:var(--cw-text);-webkit-text-fill-color:var(--cw-text);font-family:var(--cw-font);font-size:14px;line-height:1.5;resize:none;outline:none;max-height:100px;min-height:22px;overflow-y:auto;scrollbar-width:thin;caret-color:var(--cw-primary);-webkit-appearance:none;-moz-appearance:none;appearance:none}.cw-textarea::placeholder{color:var(--cw-placeholder)}.cw-send-btn{width:34px;height:34px;border-radius:8px;border:none;background:var(--cw-primary);color:var(--cw-primary-text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,transform .15s,opacity .15s;outline:none;-webkit-tap-highlight-color:transparent}.cw-send-btn:hover:not(:disabled){background:var(--cw-primary-dark);transform:scale(1.05)}.cw-send-btn:active:not(:disabled){transform:scale(.95)}.cw-send-btn:disabled{opacity:.4;cursor:not-allowed}.cw-send-btn svg{width:16px;height:16px}@media (max-width: 480px){.cw-root{--cw-window-width: 100vw;--cw-window-height: 100%}.cw-window{position:fixed;top:0;right:0;bottom:0;left:0;border-radius:0;width:100vw;height:100%;transform-origin:bottom center}.cw-root--bottom-right .cw-window,.cw-root--bottom-left .cw-window,.cw-root--top-right .cw-window,.cw-root--top-left .cw-window{bottom:0;top:0;left:0;right:0}@keyframes cw-window-enter{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes cw-window-exit{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}.cw-root--open .cw-bubble{display:none}}.cw-file-input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.cw-attach-btn{width:34px;height:34px;border-radius:8px;border:none;background:transparent;color:var(--cw-placeholder);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,color .15s,transform .15s;outline:none;-webkit-tap-highlight-color:transparent}.cw-attach-btn:hover:not(:disabled){background:color-mix(in srgb,var(--cw-primary) 10%,transparent);color:var(--cw-primary)}.cw-attach-btn:active:not(:disabled){transform:scale(.95)}.cw-attach-btn:disabled{opacity:.4;cursor:not-allowed}.cw-attach-btn svg{width:18px;height:18px}.cw-spinner{animation:cw-spin .8s linear infinite}@keyframes cw-spin{to{transform:rotate(360deg)}}.cw-attachments-preview{display:flex;gap:8px;flex-wrap:wrap;padding:0 0 10px}.cw-attachment-thumb{position:relative;width:56px;height:56px;border-radius:8px;overflow:hidden;background:var(--cw-msg-bot-bg);flex-shrink:0}.cw-attachment-thumb img{width:100%;height:100%;object-fit:cover;display:block}.cw-attachment-thumb__remove{position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:#000000a6;color:#fff;border:none;cursor:pointer;font-size:14px;font-weight:700;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;transition:background .15s}.cw-attachment-thumb__remove:hover{background:#000000d9}.cw-input-error{color:var(--cw-error-text);background:var(--cw-error-bg);border:1px solid var(--cw-error-border);border-radius:8px;padding:6px 10px;font-size:12px;margin-bottom:8px}.cw-message__attachments{display:grid;gap:3px;border-radius:12px;overflow:hidden;max-width:260px}.cw-message__text:not(:empty){margin-top:6px}.cw-message__bubble--media-only{background:transparent!important;padding:0!important;border:none!important}.cw-message__attachments--single{display:block}.cw-message__attachments--single .cw-attachment-tile{display:block;border-radius:12px}.cw-message__attachments--single img{max-width:240px;max-height:240px;width:auto;height:auto;display:block;border-radius:12px}.cw-message__attachments--two{grid-template-columns:1fr 1fr}.cw-message__attachments--two .cw-attachment-tile{aspect-ratio:1 / 1}.cw-message__attachments--three{grid-template-columns:1fr 1fr}.cw-message__attachments--three .cw-attachment-tile:first-child{grid-column:1 / -1;aspect-ratio:16 / 9}.cw-message__attachments--three .cw-attachment-tile:not(:first-child){aspect-ratio:1 / 1}.cw-message__attachments--grid{grid-template-columns:1fr 1fr}.cw-message__attachments--grid .cw-attachment-tile{aspect-ratio:1 / 1}.cw-attachment-tile{position:relative;display:block;overflow:hidden;background:#00000014;cursor:zoom-in;line-height:0}.cw-attachment-tile img{width:100%;height:100%;object-fit:cover;display:block;transition:opacity .15s}.cw-attachment-tile:hover img{opacity:.88}.cw-attachment-tile__overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#0000008c;color:#fff;font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;pointer-events:none;letter-spacing:.5px}.cw-attachment-placeholder{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;background:#0000000f;border-radius:8px;font-size:12px;color:var(--cw-placeholder);font-style:italic}.cw-attachment-placeholder svg{width:14px;height:14px;flex-shrink:0}.cw-message--user .cw-attachment-placeholder{background:#fff3;color:#ffffffd9}.cw-link{display:inline-flex;align-items:center;gap:3px;color:var(--cw-primary);background:color-mix(in srgb,var(--cw-primary) 10%,transparent);border:1px solid color-mix(in srgb,var(--cw-primary) 25%,transparent);border-radius:5px;padding:1px 6px 1px 5px;font-size:.85em;font-weight:500;text-decoration:none;word-break:break-all;vertical-align:middle;transition:background .15s ease,border-color .15s ease,opacity .15s ease;cursor:pointer}.cw-link:hover{background:color-mix(in srgb,var(--cw-primary) 18%,transparent);border-color:color-mix(in srgb,var(--cw-primary) 45%,transparent)}.cw-link:active{opacity:.75}.cw-link:focus-visible{outline:2px solid var(--cw-primary);outline-offset:2px}.cw-link__icon{width:11px;height:11px;flex-shrink:0;opacity:.75;margin-bottom:1px}.cw-message--user .cw-link{color:#fff;background:#ffffff2e;border-color:#ffffff59}.cw-message--user .cw-link:hover{background:#ffffff47;border-color:#ffffff8c}.cw-visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}';
let U = null, O = null;
function sr(e = "") {
  O || (O = document.createElement("style"), O.setAttribute("data-chat-widget", ""), O.textContent = ir + (e ? `
` + e : ""), document.head.appendChild(O));
}
function cr(e = {}) {
  if (!e.webhookUrl) {
    console.error("[ChatWidget] `webhookUrl` is required.");
    return;
  }
  _t(), sr(e.customCSS || ""), U = document.createElement("div"), U.setAttribute("id", "chat-widget-root"), document.body.appendChild(U), at(Qe(ar, e), U);
}
function _t() {
  U && (at(null, U), U.remove(), U = null);
}
typeof window < "u" && (window.ChatWidget = { create: cr, destroy: _t });
export {
  cr as create,
  _t as destroy
};
