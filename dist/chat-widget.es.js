var ie, b, Je, H, je, Ke, Ve, ue, X, Y, Ge, ye, he, ge, re = {}, oe = [], wt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ae = Array.isArray;
function D(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Xe(e, t, r) {
  var n, i, o, s = {};
  for (o in t) o == "key" ? n = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ie.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return Q(e, s, n, i, null);
}
function Q(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Je, __i: -1, __u: 0 };
  return i == null && b.vnode != null && b.vnode(o), o;
}
function se(e) {
  return e.children;
}
function Z(e, t) {
  this.props = e, this.context = t;
}
function W(e, t) {
  if (t == null) return e.__ ? W(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? W(e) : null;
}
function ht(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, n = [], i = [], o = D({}, t);
    o.__v = t.__v + 1, b.vnode && b.vnode(o), Ce(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, n, r ?? W(t), !!(32 & t.__u), i), o.__v = t.__v, o.__.__k[o.__i] = o, tt(n, o, i), t.__e = t.__ = null, o.__e != r && Qe(o);
  }
}
function Qe(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Qe(e);
}
function He(e) {
  (!e.__d && (e.__d = !0) && H.push(e) && !ne.__r++ || je != b.debounceRendering) && ((je = b.debounceRendering) || Ke)(ne);
}
function ne() {
  try {
    for (var e, t = 1; H.length; ) H.length > t && H.sort(Ve), e = H.shift(), t = H.length, ht(e);
  } finally {
    H.length = ne.__r = 0;
  }
}
function Ze(e, t, r, n, i, o, s, l, _, c, u) {
  var a, w, f, d, v, m, g, h = n && n.__k || oe, k = t.length;
  for (_ = gt(r, t, h, _, k), a = 0; a < k; a++) (f = r.__k[a]) != null && (w = f.__i != -1 && h[f.__i] || re, f.__i = a, m = Ce(e, f, w, i, o, s, l, _, c, u), d = f.__e, f.ref && w.ref != f.ref && (w.ref && Se(w.ref, null, f), u.push(f.ref, f.__c || d, f)), v == null && d != null && (v = d), (g = !!(4 & f.__u)) || w.__k === f.__k ? (_ = et(f, _, e, g), g && w.__e && (w.__e = null)) : typeof f.type == "function" && m !== void 0 ? _ = m : d && (_ = d.nextSibling), f.__u &= -7);
  return r.__e = v, _;
}
function gt(e, t, r, n, i) {
  var o, s, l, _, c, u = r.length, a = u, w = 0;
  for (e.__k = new Array(i), o = 0; o < i; o++) (s = t[o]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[o] = Q(null, s, null, null, null) : ae(s) ? s = e.__k[o] = Q(se, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[o] = Q(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[o] = s, _ = o + w, s.__ = e, s.__b = e.__b + 1, l = null, (c = s.__i = bt(s, r, _, a)) != -1 && (a--, (l = r[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (i > u ? w-- : i < u && w++), typeof s.type != "function" && (s.__u |= 4)) : c != _ && (c == _ - 1 ? w-- : c == _ + 1 ? w++ : (c > _ ? w-- : w++, s.__u |= 4))) : e.__k[o] = null;
  if (a) for (o = 0; o < u; o++) (l = r[o]) != null && !(2 & l.__u) && (l.__e == n && (n = W(l)), ot(l, l));
  return n;
}
function et(e, t, r, n) {
  var i, o;
  if (typeof e.type == "function") {
    for (i = e.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = e, t = et(i[o], t, r, n));
    return t;
  }
  e.__e != t && (n && (t && e.type && !t.parentNode && (t = W(e)), r.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function bt(e, t, r, n) {
  var i, o, s, l = e.key, _ = e.type, c = t[r], u = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || u && l == c.key && _ == c.type) return r;
  if (n > (u ? 1 : 0)) {
    for (i = r - 1, o = r + 1; i >= 0 || o < t.length; ) if ((c = t[s = i >= 0 ? i-- : o++]) != null && !(2 & c.__u) && l == c.key && _ == c.type) return s;
  }
  return -1;
}
function Pe(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || wt.test(t) ? r : r + "px";
}
function G(e, t, r, n, i) {
  var o, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || Pe(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || Pe(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") o = t != (t = t.replace(Ge, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n ? r[Y] = n[Y] : (r[Y] = ye, e.addEventListener(t, o ? ge : he, o)) : e.removeEventListener(t, o ? ge : he, o);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Ne(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[X] == null) t[X] = ye++;
      else if (t[X] < r[Y]) return;
      return r(b.event ? b.event(t) : t);
    }
  };
}
function Ce(e, t, r, n, i, o, s, l, _, c) {
  var u, a, w, f, d, v, m, g, h, k, C, z, $, T, F, S = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (_ = !!(32 & r.__u), o = [l = t.__e = r.__e]), (u = b.__b) && u(t);
  e: if (typeof S == "function") try {
    if (g = t.props, h = S.prototype && S.prototype.render, k = (u = S.contextType) && n[u.__c], C = u ? k ? k.props.value : u.__ : n, r.__c ? m = (a = t.__c = r.__c).__ = a.__E : (h ? t.__c = a = new S(g, C) : (t.__c = a = new Z(g, C), a.constructor = S, a.render = vt), k && k.sub(a), a.state || (a.state = {}), a.__n = n, w = a.__d = !0, a.__h = [], a._sb = []), h && a.__s == null && (a.__s = a.state), h && S.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = D({}, a.__s)), D(a.__s, S.getDerivedStateFromProps(g, a.__s))), f = a.props, d = a.state, a.__v = t, w) h && S.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), h && a.componentDidMount != null && a.__h.push(a.componentDidMount);
    else {
      if (h && S.getDerivedStateFromProps == null && g !== f && a.componentWillReceiveProps != null && a.componentWillReceiveProps(g, C), t.__v == r.__v || !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(g, a.__s, C) === !1) {
        t.__v != r.__v && (a.props = g, a.state = a.__s, a.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(I) {
          I && (I.__ = t);
        }), oe.push.apply(a.__h, a._sb), a._sb = [], a.__h.length && s.push(a);
        break e;
      }
      a.componentWillUpdate != null && a.componentWillUpdate(g, a.__s, C), h && a.componentDidUpdate != null && a.__h.push(function() {
        a.componentDidUpdate(f, d, v);
      });
    }
    if (a.context = C, a.props = g, a.__P = e, a.__e = !1, z = b.__r, $ = 0, h) a.state = a.__s, a.__d = !1, z && z(t), u = a.render(a.props, a.state, a.context), oe.push.apply(a.__h, a._sb), a._sb = [];
    else do
      a.__d = !1, z && z(t), u = a.render(a.props, a.state, a.context), a.state = a.__s;
    while (a.__d && ++$ < 25);
    a.state = a.__s, a.getChildContext != null && (n = D(D({}, n), a.getChildContext())), h && !w && a.getSnapshotBeforeUpdate != null && (v = a.getSnapshotBeforeUpdate(f, d)), T = u != null && u.type === se && u.key == null ? rt(u.props.children) : u, l = Ze(e, ae(T) ? T : [T], t, r, n, i, o, s, l, _, c), a.base = t.__e, t.__u &= -161, a.__h.length && s.push(a), m && (a.__E = a.__ = null);
  } catch (I) {
    if (t.__v = null, _ || o != null) if (I.then) {
      for (t.__u |= _ ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      o[o.indexOf(l)] = null, t.__e = l;
    } else {
      for (F = o.length; F--; ) ke(o[F]);
      be(t);
    }
    else t.__e = r.__e, t.__k = r.__k, I.then || be(t);
    b.__e(I, t, r);
  }
  else o == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : l = t.__e = mt(r.__e, t, r, n, i, o, s, _, c);
  return (u = b.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function be(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(be));
}
function tt(e, t, r) {
  for (var n = 0; n < r.length; n++) Se(r[n], r[++n], r[++n]);
  b.__c && b.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      b.__e(o, i.__v);
    }
  });
}
function rt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : ae(e) ? e.map(rt) : D({}, e);
}
function mt(e, t, r, n, i, o, s, l, _) {
  var c, u, a, w, f, d, v, m = r.props || re, g = t.props, h = t.type;
  if (h == "svg" ? i = "http://www.w3.org/2000/svg" : h == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((f = o[c]) && "setAttribute" in f == !!h && (h ? f.localName == h : f.nodeType == 3)) {
      e = f, o[c] = null;
      break;
    }
  }
  if (e == null) {
    if (h == null) return document.createTextNode(g);
    e = document.createElementNS(i, h, g.is && g), l && (b.__m && b.__m(t, o), l = !1), o = null;
  }
  if (h == null) m === g || l && e.data == g || (e.data = g);
  else {
    if (o = o && ie.call(e.childNodes), !l && o != null) for (m = {}, c = 0; c < e.attributes.length; c++) m[(f = e.attributes[c]).name] = f.value;
    for (c in m) f = m[c], c == "dangerouslySetInnerHTML" ? a = f : c == "children" || c in g || c == "value" && "defaultValue" in g || c == "checked" && "defaultChecked" in g || G(e, c, null, f, i);
    for (c in g) f = g[c], c == "children" ? w = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? d = f : c == "checked" ? v = f : l && typeof f != "function" || m[c] === f || G(e, c, f, m[c], i);
    if (u) l || a && (u.__html == a.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (a && (e.innerHTML = ""), Ze(t.type == "template" ? e.content : e, ae(w) ? w : [w], t, r, n, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, s, o ? o[0] : r.__k && W(r, 0), l, _), o != null) for (c = o.length; c--; ) ke(o[c]);
    l || (c = "value", h == "progress" && d == null ? e.removeAttribute("value") : d != null && (d !== e[c] || h == "progress" && !d || h == "option" && d != m[c]) && G(e, c, d, m[c], i), c = "checked", v != null && v != e[c] && G(e, c, v, m[c], i));
  }
  return e;
}
function Se(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    b.__e(i, r);
  }
}
function ot(e, t, r) {
  var n, i;
  if (b.unmount && b.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || Se(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      b.__e(o, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (i = 0; i < n.length; i++) n[i] && ot(n[i], t, r || typeof e.type != "function");
  r || ke(e.__e), e.__c = e.__ = e.__e = void 0;
}
function vt(e, t, r) {
  return this.constructor(e, r);
}
function nt(e, t, r) {
  var n, i, o, s;
  t == document && (t = document.documentElement), b.__ && b.__(e, t), i = (n = !1) ? null : t.__k, o = [], s = [], Ce(t, e = t.__k = Xe(se, null, [e]), i || re, re, t.namespaceURI, i ? null : t.firstChild ? ie.call(t.childNodes) : null, o, i ? i.__e : t.firstChild, n, s), tt(o, e, s);
}
ie = oe.slice, b = { __e: function(e, t, r, n) {
  for (var i, o, s; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), s = i.__d), s) return i.__E = i;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Je = 0, Z.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = D({}, this.state), typeof e == "function" && (e = e(D({}, r), this.props)), e && D(r, e), e != null && this.__v && (t && this._sb.push(t), He(this));
}, Z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), He(this));
}, Z.prototype.render = se, H = [], Ke = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ve = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ne.__r = 0, ue = Math.random().toString(8), X = "__d" + ue, Y = "__a" + ue, Ge = /(PointerCapture)$|Capture$/i, ye = 0, he = Ne(!1), ge = Ne(!0);
var xt = 0;
function p(e, t, r, n, i, o) {
  t || (t = {});
  var s, l, _ = t;
  if ("ref" in _) for (l in _ = {}, t) l == "ref" ? s = t[l] : _[l] = t[l];
  var c = { type: e, props: _, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --xt, __i: -1, __u: 0, __source: i, __self: o };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) _[l] === void 0 && (_[l] = s[l]);
  return b.vnode && b.vnode(c), c;
}
var q, x, we, Ee, J = 0, it = [], y = b, Ue = y.__b, Ae = y.__r, Be = y.diffed, We = y.__c, Fe = y.unmount, Re = y.__;
function Me(e, t) {
  y.__h && y.__h(x, e, J || t), J = 0;
  var r = x.__H || (x.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function P(e) {
  return J = 1, yt(ct, e);
}
function yt(e, t, r) {
  var n = Me(q++, 2);
  if (n.t = e, !n.__c && (n.__ = [ct(void 0, t), function(l) {
    var _ = n.__N ? n.__N[0] : n.__[0], c = n.t(_, l);
    _ !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = x, !x.__f)) {
    var i = function(l, _, c) {
      if (!n.__c.__H) return !0;
      var u = n.__c.__H.__.filter(function(w) {
        return w.__c;
      });
      if (u.every(function(w) {
        return !w.__N;
      })) return !o || o.call(this, l, _, c);
      var a = n.__c.props !== l;
      return u.some(function(w) {
        if (w.__N) {
          var f = w.__[0];
          w.__ = w.__N, w.__N = void 0, f !== w.__[0] && (a = !0);
        }
      }), o && o.call(this, l, _, c) || a;
    };
    x.__f = !0;
    var o = x.shouldComponentUpdate, s = x.componentWillUpdate;
    x.componentWillUpdate = function(l, _, c) {
      if (this.__e) {
        var u = o;
        o = void 0, i(l, _, c), o = u;
      }
      s && s.call(this, l, _, c);
    }, x.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function B(e, t) {
  var r = Me(q++, 3);
  !y.__s && st(r.__H, t) && (r.__ = e, r.u = t, x.__H.__h.push(r));
}
function K(e) {
  return J = 5, at(function() {
    return { current: e };
  }, []);
}
function at(e, t) {
  var r = Me(q++, 7);
  return st(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function L(e, t) {
  return J = 8, at(function() {
    return e;
  }, t);
}
function kt() {
  for (var e; e = it.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(ee), t.__h.some(me), t.__h = [];
    } catch (r) {
      t.__h = [], y.__e(r, e.__v);
    }
  }
}
y.__b = function(e) {
  x = null, Ue && Ue(e);
}, y.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Re && Re(e, t);
}, y.__r = function(e) {
  Ae && Ae(e), q = 0;
  var t = (x = e.__c).__H;
  t && (we === x ? (t.__h = [], x.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(ee), t.__h.some(me), t.__h = [], q = 0)), we = x;
}, y.diffed = function(e) {
  Be && Be(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (it.push(t) !== 1 && Ee === y.requestAnimationFrame || ((Ee = y.requestAnimationFrame) || Ct)(kt)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), we = x = null;
}, y.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(ee), r.__h = r.__h.filter(function(n) {
        return !n.__ || me(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], y.__e(n, r.__v);
    }
  }), We && We(e, t);
}, y.unmount = function(e) {
  Fe && Fe(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      ee(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && y.__e(t, r.__v));
};
var Oe = typeof requestAnimationFrame == "function";
function Ct(e) {
  var t, r = function() {
    clearTimeout(n), Oe && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 35);
  Oe && (t = requestAnimationFrame(r));
}
function ee(e) {
  var t = x, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), x = t;
}
function me(e) {
  var t = x;
  e.__c = e.__(), x = t;
}
function st(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function ct(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function St() {
  return /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ p(
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
function Mt() {
  return /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ p(
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
function $t({ isOpen: e, unreadCount: t, bubbleIcon: r, onClick: n }) {
  return /* @__PURE__ */ p(
    "button",
    {
      class: "cw-bubble",
      onClick: n,
      "aria-label": e ? "Close chat" : "Open chat",
      "aria-expanded": e,
      children: [
        r && !e ? /* @__PURE__ */ p("img", { src: r, alt: "", class: "cw-bubble__img" }) : e ? /* @__PURE__ */ p(Mt, {}) : /* @__PURE__ */ p(St, {}),
        !e && t > 0 && /* @__PURE__ */ p("span", { class: "cw-badge", "aria-label": `${t} unread message${t !== 1 ? "s" : ""}`, children: t > 99 ? "99+" : t })
      ]
    }
  );
}
function Tt() {
  return /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ p(
      "path",
      {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ p(
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
function It() {
  return /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ p(
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
function Lt({ title: e, subtitle: t, botName: r, botAvatar: n, i18n: i, onClose: o, onNewConversation: s }) {
  const l = e || (i == null ? void 0 : i.title) || "Chat", _ = t || (i == null ? void 0 : i.subtitle) || "", c = (r || l)[0].toUpperCase();
  return /* @__PURE__ */ p("header", { class: "cw-header", children: /* @__PURE__ */ p("div", { class: "cw-header__top", children: [
    /* @__PURE__ */ p("div", { class: "cw-header__info", children: [
      /* @__PURE__ */ p("div", { class: "cw-header__avatar", children: n ? /* @__PURE__ */ p("img", { src: n, alt: r || "Bot avatar" }) : c }),
      /* @__PURE__ */ p("div", { class: "cw-header__text", children: [
        /* @__PURE__ */ p("div", { class: "cw-header__title", children: l }),
        _ && /* @__PURE__ */ p("div", { class: "cw-header__subtitle", children: _ })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { class: "cw-header__actions", children: [
      /* @__PURE__ */ p(
        "button",
        {
          class: "cw-icon-btn",
          onClick: s,
          title: (i == null ? void 0 : i.newConversation) || "New Conversation",
          "aria-label": (i == null ? void 0 : i.newConversation) || "New Conversation",
          children: /* @__PURE__ */ p(Tt, {})
        }
      ),
      /* @__PURE__ */ p(
        "button",
        {
          class: "cw-icon-btn",
          onClick: o,
          title: "Close chat",
          "aria-label": "Close chat",
          children: /* @__PURE__ */ p(It, {})
        }
      )
    ] })
  ] }) });
}
function Dt(e) {
  if (!e) return [];
  const t = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)|(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi, r = [];
  let n = 0, i;
  for (; (i = t.exec(e)) !== null; ) {
    if (i.index > n && r.push({ type: "text", value: e.slice(n, i.index) }), i[1] !== void 0) {
      const o = i[2].replace(/[.,;:!?)\]'"*_`]+$/, ""), s = i[1].trim() || ve(o);
      r.push({ type: "url", value: o, label: s });
    } else {
      const o = i[3].replace(/[.,;:!?)\]'"*_`]+$/, ""), s = i[3].slice(o.length);
      r.push({ type: "url", value: o }), s && r.push({ type: "text", value: s });
    }
    n = i.index + i[0].length;
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
function zt(e) {
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
function jt() {
  return /* @__PURE__ */ p(
    "svg",
    {
      class: "cw-link__icon",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ p(
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Ht({ content: e }) {
  return Dt(e).map((r, n) => r.type === "url" ? /* @__PURE__ */ p(
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
        /* @__PURE__ */ p(jt, {})
      ]
    },
    n
  ) : r.value);
}
function Pt({ role: e, content: t, isError: r, timestamp: n, showTimestamps: i, hideAvatar: o, botName: s, botAvatar: l }) {
  const _ = e === "bot", c = _ ? (s || "A")[0].toUpperCase() : "U";
  return /* @__PURE__ */ p(
    "div",
    {
      class: [
        "cw-message",
        _ ? "cw-message--bot" : "cw-message--user",
        r ? "cw-message--error" : "",
        o ? "cw-message--hide-avatar" : ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ p("div", { class: "cw-message__avatar", "aria-hidden": "true", children: _ && l ? /* @__PURE__ */ p("img", { src: l, alt: s || "Bot" }) : c }),
        /* @__PURE__ */ p("div", { class: "cw-message__body", children: [
          /* @__PURE__ */ p("div", { class: "cw-message__bubble", children: /* @__PURE__ */ p(Ht, { content: t }) }),
          i && n && /* @__PURE__ */ p("time", { class: "cw-message__time", dateTime: new Date(n).toISOString(), children: zt(n) })
        ] })
      ]
    }
  );
}
function Nt({ botName: e, botAvatar: t }) {
  const r = (e || "A")[0].toUpperCase();
  return /* @__PURE__ */ p("div", { class: "cw-typing", "aria-label": "Bot is typing", role: "status", children: [
    /* @__PURE__ */ p("div", { class: "cw-typing__avatar", children: t ? /* @__PURE__ */ p("img", { src: t, alt: e || "Bot" }) : r }),
    /* @__PURE__ */ p("div", { class: "cw-typing__bubble", children: [
      /* @__PURE__ */ p("span", { class: "cw-typing__dot" }),
      /* @__PURE__ */ p("span", { class: "cw-typing__dot" }),
      /* @__PURE__ */ p("span", { class: "cw-typing__dot" })
    ] })
  ] });
}
function Et({ messages: e, isTyping: t, showTimestamps: r, botName: n, botAvatar: i }) {
  const o = K(null);
  return B(() => {
    o.current && o.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [e.length, t]), /* @__PURE__ */ p("div", { class: "cw-messages", role: "log", "aria-live": "polite", "aria-label": "Chat messages", children: [
    e.map((s, l) => {
      const _ = e[l + 1], c = _ && _.role === s.role;
      return /* @__PURE__ */ p(
        Pt,
        {
          role: s.role,
          content: s.content,
          isError: s.isError,
          timestamp: s.timestamp,
          showTimestamps: r,
          hideAvatar: c,
          botName: n,
          botAvatar: i
        },
        s.id
      );
    }),
    t && /* @__PURE__ */ p(Nt, { botName: n, botAvatar: i }),
    /* @__PURE__ */ p("div", { ref: o, style: { height: 1, flexShrink: 0 }, "aria-hidden": "true" })
  ] });
}
function Ut() {
  return /* @__PURE__ */ p("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: /* @__PURE__ */ p(
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
function At({ onSend: e, disabled: t, placeholder: r }) {
  const n = K(null), i = L(() => {
    const _ = n.current;
    _ && (_.value = "", _.style.height = "auto");
  }, []), o = L(() => {
    var u;
    const _ = n.current, c = (u = _ == null ? void 0 : _.value) == null ? void 0 : u.trim();
    !c || t || (e(c), i());
  }, [t, e, i]), s = L((_) => {
    const c = _.target;
    c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 100) + "px";
  }, []), l = L((_) => {
    _.key === "Enter" && !_.shiftKey && (_.preventDefault(), o());
  }, [o]);
  return /* @__PURE__ */ p("div", { class: "cw-input-area", children: /* @__PURE__ */ p("div", { class: "cw-input-wrapper", children: [
    /* @__PURE__ */ p(
      "textarea",
      {
        ref: n,
        class: "cw-textarea",
        onInput: s,
        onKeyDown: l,
        placeholder: r || "Type a message...",
        disabled: t,
        rows: 1,
        "aria-label": "Message input",
        "aria-multiline": "true"
      }
    ),
    /* @__PURE__ */ p(
      "button",
      {
        class: "cw-send-btn",
        onClick: o,
        disabled: t,
        "aria-label": "Send message",
        title: "Send message (Enter)",
        children: /* @__PURE__ */ p(Ut, {})
      }
    )
  ] }) });
}
function Bt({
  isOpen: e,
  messages: t,
  isTyping: r,
  isDisabled: n,
  title: i,
  subtitle: o,
  botName: s,
  botAvatar: l,
  showTimestamps: _,
  placeholder: c,
  i18n: u,
  onClose: a,
  onNewConversation: w,
  onSend: f
}) {
  const [d, v] = P(e), [m, g] = P(""), h = K(e);
  return B(() => {
    if (e && !h.current)
      h.current = !0, v(!0), requestAnimationFrame(() => g("cw-window--enter"));
    else if (!e && h.current) {
      h.current = !1, g("cw-window--exit");
      const k = setTimeout(() => {
        v(!1), g("");
      }, 250);
      return () => clearTimeout(k);
    }
  }, [e]), d ? /* @__PURE__ */ p(
    "div",
    {
      class: ["cw-window", m].filter(Boolean).join(" "),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": i || "Chat",
      children: [
        /* @__PURE__ */ p(
          Lt,
          {
            title: i,
            subtitle: o,
            botName: s,
            botAvatar: l,
            i18n: u,
            onClose: a,
            onNewConversation: w
          }
        ),
        /* @__PURE__ */ p(
          Et,
          {
            messages: t,
            isTyping: r,
            showTimestamps: _,
            botName: s,
            botAvatar: l
          }
        ),
        /* @__PURE__ */ p(
          At,
          {
            onSend: f,
            disabled: n,
            placeholder: (u == null ? void 0 : u.placeholder) || c
          }
        )
      ]
    }
  ) : null;
}
async function Wt({ webhookUrl: e, sessionId: t, message: r, headers: n = {}, requestPayload: i = {} }) {
  const o = JSON.stringify({
    action: "sendMessage",
    sessionId: t,
    chatInput: r,
    ...i
  }), s = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...n
    },
    body: o
  });
  if (!s.ok)
    throw new Error(`Webhook returned HTTP ${s.status}: ${s.statusText}`);
  if (!(s.headers.get("content-type") || "").includes("application/json"))
    return (await s.text()).trim() || "No response received.";
  const _ = await s.json();
  return xe(_);
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
const $e = "cw_session", Ft = 50;
function Ye() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function Rt() {
  try {
    const e = localStorage.getItem($e);
    if (!e) return null;
    const t = JSON.parse(e);
    return !t.sessionId || !Array.isArray(t.messages) ? null : t;
  } catch {
    return null;
  }
}
function Ot(e, t) {
  try {
    const r = t.slice(-Ft);
    localStorage.setItem($e, JSON.stringify({ sessionId: e, messages: r }));
  } catch {
  }
}
function Yt() {
  try {
    localStorage.removeItem($e);
  } catch {
  }
}
let qt = 0;
function te() {
  return `msg-${++qt}-${Date.now()}`;
}
function qe(e) {
  return (e || []).map((t) => ({
    id: te(),
    role: "bot",
    content: t,
    timestamp: /* @__PURE__ */ new Date(),
    isError: !1
  }));
}
function Jt(e) {
  const {
    webhookUrl: t,
    title: r,
    subtitle: n,
    botName: i = "Assistant",
    botAvatar: o = null,
    initialMessages: s = [],
    placeholder: l = "Type a message...",
    autoOpen: _ = !1,
    persistSession: c = !0,
    showTimestamps: u = !0,
    typingDelay: a = 1e3,
    webhookHeaders: w = {},
    requestPayload: f = {},
    theme: d = {},
    i18n: v = {},
    onOpen: m,
    onClose: g,
    onMessage: h,
    onError: k
  } = e, [C, z] = P(_), [$, T] = P([]), [F, S] = P(!1), [I, ce] = P(!1), [_t, le] = P(0), [V, Te] = P(() => Ye()), _e = K(C);
  B(() => {
    _e.current = C;
  }, [C]), B(() => {
    if (c) {
      const M = Rt();
      if (M && M.messages.length > 0) {
        Te(M.sessionId), T(M.messages.map((j) => ({
          ...j,
          timestamp: j.timestamp ? new Date(j.timestamp) : /* @__PURE__ */ new Date()
        })));
        return;
      }
    }
    s.length > 0 && T(qe(s));
  }, []), B(() => {
    c && $.length > 0 && Ot(V, $);
  }, [$, V, c]);
  const Ie = K($.length);
  B(() => {
    const M = Ie.current;
    if (Ie.current = $.length, !_e.current && $.length > M) {
      const j = $.slice(M).filter((U) => U.role === "bot").length;
      j > 0 && le((U) => U + j);
    }
  }, [$]);
  const Le = L(() => {
    z(!0), le(0), typeof m == "function" && m();
  }, [m]), de = L(() => {
    z(!1), typeof g == "function" && g();
  }, [g]), dt = L(() => {
    _e.current ? de() : Le();
  }, [Le, de]), pt = L(async (M) => {
    if (!M.trim() || I) return;
    const j = {
      id: te(),
      role: "user",
      content: M,
      timestamp: /* @__PURE__ */ new Date(),
      isError: !1
    };
    T((A) => [...A, j]), S(!0), ce(!0), typeof h == "function" && h({ role: "user", content: M });
    const U = Date.now();
    try {
      const A = await Wt({
        webhookUrl: t,
        sessionId: V,
        message: M,
        headers: w,
        requestPayload: f
      }), pe = Date.now() - U, R = Math.max(0, a - pe);
      R > 0 && await new Promise((E) => setTimeout(E, R));
      const fe = {
        id: te(),
        role: "bot",
        content: A,
        timestamp: /* @__PURE__ */ new Date(),
        isError: !1
      };
      T((E) => [...E, fe]), typeof h == "function" && h({ role: "bot", content: A });
    } catch (A) {
      const pe = Date.now() - U, R = Math.max(0, Math.min(a, 1200) - pe);
      R > 0 && await new Promise((E) => setTimeout(E, R));
      const fe = {
        id: te(),
        role: "bot",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: /* @__PURE__ */ new Date(),
        isError: !0
      };
      T((E) => [...E, fe]), typeof k == "function" && k(A);
    } finally {
      S(!1), ce(!1);
    }
  }, [t, V, w, f, a, I, h, k]), ft = L(() => {
    const M = Ye();
    Te(M), Yt(), T(qe(s)), le(0), S(!1), ce(!1);
  }, [s]), De = (d == null ? void 0 : d.position) || "bottom-right", ut = `cw-root--${["bottom-right", "bottom-left", "top-right", "top-left"].includes(De) ? De : "bottom-right"}`, ze = d == null ? void 0 : d.darkMode;
  return /* @__PURE__ */ p(
    "div",
    {
      class: ["cw-root", ut, ze === !0 ? "cw-root--dark" : ze === !1 ? "cw-root--light" : "", C ? "cw-root--open" : ""].filter(Boolean).join(" "),
      style: {
        ...(d == null ? void 0 : d.primaryColor) && { "--cw-primary": d.primaryColor },
        ...(d == null ? void 0 : d.primaryTextColor) && { "--cw-primary-text": d.primaryTextColor },
        ...(d == null ? void 0 : d.backgroundColor) && { "--cw-bg": d.backgroundColor },
        ...(d == null ? void 0 : d.textColor) && { "--cw-text": d.textColor },
        ...(d == null ? void 0 : d.fontFamily) && { "--cw-font": d.fontFamily },
        ...(d == null ? void 0 : d.borderRadius) && { "--cw-radius": d.borderRadius },
        ...(d == null ? void 0 : d.bubbleSize) && { "--cw-bubble-size": d.bubbleSize },
        ...(d == null ? void 0 : d.offsetX) && { "--cw-offset-x": d.offsetX },
        ...(d == null ? void 0 : d.offsetY) && { "--cw-offset-y": d.offsetY }
      },
      "aria-label": "Chat widget",
      children: [
        /* @__PURE__ */ p(
          Bt,
          {
            isOpen: C,
            messages: $,
            isTyping: F,
            isDisabled: I,
            title: r || (v == null ? void 0 : v.title),
            subtitle: n || (v == null ? void 0 : v.subtitle),
            botName: i,
            botAvatar: o,
            showTimestamps: u,
            placeholder: l,
            i18n: v,
            onClose: de,
            onNewConversation: ft,
            onSend: pt
          }
        ),
        /* @__PURE__ */ p(
          $t,
          {
            isOpen: C,
            unreadCount: _t,
            bubbleIcon: (d == null ? void 0 : d.bubbleIcon) || null,
            onClick: dt
          }
        )
      ]
    }
  );
}
const Kt = '.cw-root *,.cw-root *:before,.cw-root *:after{box-sizing:border-box;margin:0;padding:0}.cw-root{--cw-primary: #6366f1;--cw-primary-dark: color-mix(in srgb, var(--cw-primary) 82%, black);--cw-primary-text: #ffffff;--cw-bg: #ffffff;--cw-text: #111827;--cw-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;--cw-radius: 16px;--cw-bubble-size: 56px;--cw-offset-x: 20px;--cw-offset-y: 20px;--cw-shadow: 0 8px 32px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.1);--cw-shadow-sm: 0 2px 8px rgba(0,0,0,.12);--cw-border: rgba(0,0,0,.08);--cw-msg-bot-bg: #f3f4f6;--cw-msg-bot-text: var(--cw-text);--cw-msg-user-bg: var(--cw-primary);--cw-msg-user-text: var(--cw-primary-text);--cw-input-bg: #f9fafb;--cw-input-border: #e5e7eb;--cw-placeholder: #9ca3af;--cw-timestamp: #9ca3af;--cw-header-bg: var(--cw-primary);--cw-header-text: var(--cw-primary-text);--cw-badge-bg: #ef4444;--cw-error-bg: #fee2e2;--cw-error-text: #991b1b;--cw-error-border: #fca5a5;--cw-window-width: 380px;--cw-window-height: 560px;font-family:var(--cw-font);position:fixed;z-index:2147483647;color-scheme:light}@media (prefers-color-scheme: dark){.cw-root:not(.cw-root--light){--cw-bg: #1f2937;--cw-text: #f9fafb;--cw-msg-bot-bg: #374151;--cw-msg-bot-text: #f9fafb;--cw-input-bg: #2d3748;--cw-input-border: #4a5568;--cw-placeholder: #718096;--cw-timestamp: #6b7280;--cw-border: rgba(255,255,255,.08);color-scheme:dark}}.cw-root--dark{--cw-bg: #1f2937;--cw-text: #f9fafb;--cw-msg-bot-bg: #374151;--cw-msg-bot-text: #f9fafb;--cw-input-bg: #2d3748;--cw-input-border: #4a5568;--cw-placeholder: #718096;--cw-timestamp: #6b7280;--cw-border: rgba(255,255,255,.08);color-scheme:dark}.cw-root--bottom-right{bottom:var(--cw-offset-y);right:var(--cw-offset-x)}.cw-root--bottom-left{bottom:var(--cw-offset-y);left:var(--cw-offset-x)}.cw-root--top-right{top:var(--cw-offset-y);right:var(--cw-offset-x)}.cw-root--top-left{top:var(--cw-offset-y);left:var(--cw-offset-x)}.cw-bubble{position:relative;width:var(--cw-bubble-size);height:var(--cw-bubble-size);border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--cw-shadow);transition:transform .2s cubic-bezier(.34,1.56,.64,1),background .2s ease,box-shadow .2s ease;outline:none;-webkit-tap-highlight-color:transparent}.cw-bubble:hover{background:var(--cw-primary-dark);transform:scale(1.08);box-shadow:0 12px 40px #00000038,0 4px 12px #00000024}.cw-bubble:active{transform:scale(.95)}.cw-bubble svg{width:26px;height:26px;flex-shrink:0}.cw-bubble__img{width:100%;height:100%;object-fit:cover;border-radius:50%}.cw-badge{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;background:var(--cw-badge-bg);color:#fff;font-size:11px;font-weight:700;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:0 5px;border:2px solid var(--cw-bg);animation:cw-badge-pop .3s cubic-bezier(.34,1.56,.64,1);line-height:1}@keyframes cw-badge-pop{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.cw-window{position:absolute;width:var(--cw-window-width);height:var(--cw-window-height);background:var(--cw-bg);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);display:flex;flex-direction:column;overflow:hidden;transform-origin:bottom right}.cw-root--bottom-right .cw-window,.cw-root--bottom-left .cw-window{bottom:calc(var(--cw-bubble-size) + 12px);transform-origin:bottom center}.cw-root--bottom-right .cw-window{right:0}.cw-root--bottom-left .cw-window{left:0}.cw-root--top-right .cw-window,.cw-root--top-left .cw-window{top:calc(var(--cw-bubble-size) + 12px);transform-origin:top center}.cw-root--top-right .cw-window{right:0}.cw-root--top-left .cw-window{left:0}.cw-window--enter{animation:cw-window-enter .4s cubic-bezier(.34,1.56,.64,1) forwards}.cw-window--exit{animation:cw-window-exit .25s cubic-bezier(.4,0,.2,1) forwards}@keyframes cw-window-enter{0%{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}@keyframes cw-window-exit{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.85)}}.cw-header{background:var(--cw-header-bg);color:var(--cw-header-text);padding:16px 16px 24px;position:relative;flex-shrink:0;z-index:1}.cw-header:after{content:"";position:absolute;bottom:0;left:0;right:0;height:16px;background:var(--cw-bg);border-radius:16px 16px 0 0}.cw-header__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.cw-header__info{display:flex;align-items:center;gap:12px;flex:1;min-width:0}.cw-header__avatar{width:40px;height:40px;border-radius:50%;background:#fff3;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0;overflow:hidden}.cw-header__avatar img{width:100%;height:100%;object-fit:cover}.cw-header__text{min-width:0}.cw-header__title{font-size:15px;font-weight:700;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cw-header__subtitle{font-size:12px;opacity:.8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cw-header__actions{display:flex;align-items:center;gap:4px;flex-shrink:0}.cw-icon-btn{width:32px;height:32px;border-radius:8px;border:none;background:#ffffff26;color:var(--cw-header-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;outline:none;-webkit-tap-highlight-color:transparent}.cw-icon-btn:hover{background:#ffffff40}.cw-icon-btn:active{background:#ffffff59}.cw-icon-btn svg{width:16px;height:16px}.cw-messages{flex:1;overflow-y:auto;padding:8px 16px 12px;display:flex;flex-direction:column;gap:4px;scroll-behavior:smooth}.cw-messages::-webkit-scrollbar{width:4px}.cw-messages::-webkit-scrollbar-track{background:transparent}.cw-messages::-webkit-scrollbar-thumb{background:var(--cw-input-border);border-radius:2px}.cw-messages::-webkit-scrollbar-thumb:hover{background:var(--cw-placeholder)}.cw-message{display:flex;gap:8px;align-items:flex-end;max-width:100%}.cw-message--bot{flex-direction:row}.cw-message--user{flex-direction:row-reverse}.cw-message--bot+.cw-message--bot,.cw-message--user+.cw-message--user{margin-top:-2px}.cw-message--bot+.cw-message--user,.cw-message--user+.cw-message--bot{margin-top:8px}.cw-message__avatar{width:28px;height:28px;border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;align-self:flex-end}.cw-message__avatar img{width:100%;height:100%;object-fit:cover}.cw-message--user .cw-message__avatar{background:var(--cw-msg-bot-bg);color:var(--cw-text)}.cw-message--hide-avatar .cw-message__avatar{visibility:hidden}.cw-message__body{display:flex;flex-direction:column;gap:3px;max-width:calc(100% - 40px);min-width:0}.cw-message--user .cw-message__body{align-items:flex-end}.cw-message__bubble{display:inline-block;padding:10px 14px;border-radius:18px;font-size:14px;line-height:1.5;word-break:break-word;white-space:pre-wrap;max-width:100%}.cw-message--bot .cw-message__bubble{background:var(--cw-msg-bot-bg);color:var(--cw-msg-bot-text);border-bottom-left-radius:4px}.cw-message--user .cw-message__bubble{background:var(--cw-msg-user-bg);color:var(--cw-msg-user-text);border-bottom-right-radius:4px}.cw-message--error .cw-message__bubble{background:var(--cw-error-bg);color:var(--cw-error-text);border:1px solid var(--cw-error-border)}.cw-message__time{font-size:11px;color:var(--cw-timestamp);padding:0 4px;white-space:nowrap}.cw-message{animation:cw-msg-enter .2s ease-out}@keyframes cw-msg-enter{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.cw-typing{display:flex;gap:8px;align-items:flex-end;margin-top:4px;animation:cw-msg-enter .2s ease-out}.cw-typing__avatar{width:28px;height:28px;border-radius:50%;background:var(--cw-primary);color:var(--cw-primary-text);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}.cw-typing__avatar img{width:100%;height:100%;object-fit:cover}.cw-typing__bubble{background:var(--cw-msg-bot-bg);border-radius:18px 18px 18px 4px;padding:12px 16px;display:flex;align-items:center;gap:4px}.cw-typing__dot{width:6px;height:6px;border-radius:50%;background:var(--cw-placeholder);animation:cw-typing-bounce 1.2s ease-in-out infinite}.cw-typing__dot:nth-child(1){animation-delay:0s}.cw-typing__dot:nth-child(2){animation-delay:.2s}.cw-typing__dot:nth-child(3){animation-delay:.4s}@keyframes cw-typing-bounce{0%,60%,to{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}.cw-input-area{padding:12px 16px 16px;border-top:1px solid var(--cw-border);background:var(--cw-bg);flex-shrink:0}.cw-input-wrapper{display:flex;align-items:flex-end;gap:8px;background:var(--cw-input-bg);border:1.5px solid var(--cw-input-border);border-radius:12px;padding:8px 8px 8px 14px;transition:border-color .2s ease,box-shadow .2s ease}.cw-input-wrapper:focus-within{border-color:var(--cw-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--cw-primary) 15%,transparent)}.cw-textarea{flex:1;border:none;background:transparent;color:var(--cw-text);-webkit-text-fill-color:var(--cw-text);font-family:var(--cw-font);font-size:14px;line-height:1.5;resize:none;outline:none;max-height:100px;min-height:22px;overflow-y:auto;scrollbar-width:thin;caret-color:var(--cw-primary);-webkit-appearance:none;-moz-appearance:none;appearance:none}.cw-textarea::placeholder{color:var(--cw-placeholder)}.cw-send-btn{width:34px;height:34px;border-radius:8px;border:none;background:var(--cw-primary);color:var(--cw-primary-text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,transform .15s,opacity .15s;outline:none;-webkit-tap-highlight-color:transparent}.cw-send-btn:hover:not(:disabled){background:var(--cw-primary-dark);transform:scale(1.05)}.cw-send-btn:active:not(:disabled){transform:scale(.95)}.cw-send-btn:disabled{opacity:.4;cursor:not-allowed}.cw-send-btn svg{width:16px;height:16px}@media (max-width: 480px){.cw-root{--cw-window-width: 100vw;--cw-window-height: 100%}.cw-window{position:fixed;top:0;right:0;bottom:0;left:0;border-radius:0;width:100vw;height:100%;transform-origin:bottom center}.cw-root--bottom-right .cw-window,.cw-root--bottom-left .cw-window,.cw-root--top-right .cw-window,.cw-root--top-left .cw-window{bottom:0;top:0;left:0;right:0}@keyframes cw-window-enter{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes cw-window-exit{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}.cw-root--open .cw-bubble{display:none}}.cw-link{display:inline-flex;align-items:center;gap:3px;color:var(--cw-primary);background:color-mix(in srgb,var(--cw-primary) 10%,transparent);border:1px solid color-mix(in srgb,var(--cw-primary) 25%,transparent);border-radius:5px;padding:1px 6px 1px 5px;font-size:.85em;font-weight:500;text-decoration:none;word-break:break-all;vertical-align:middle;transition:background .15s ease,border-color .15s ease,opacity .15s ease;cursor:pointer}.cw-link:hover{background:color-mix(in srgb,var(--cw-primary) 18%,transparent);border-color:color-mix(in srgb,var(--cw-primary) 45%,transparent)}.cw-link:active{opacity:.75}.cw-link:focus-visible{outline:2px solid var(--cw-primary);outline-offset:2px}.cw-link__icon{width:11px;height:11px;flex-shrink:0;opacity:.75;margin-bottom:1px}.cw-message--user .cw-link{color:#fff;background:#ffffff2e;border-color:#ffffff59}.cw-message--user .cw-link:hover{background:#ffffff47;border-color:#ffffff8c}.cw-visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}';
let N = null, O = null;
function Vt(e = "") {
  O || (O = document.createElement("style"), O.setAttribute("data-chat-widget", ""), O.textContent = Kt + (e ? `
` + e : ""), document.head.appendChild(O));
}
function Gt(e = {}) {
  if (!e.webhookUrl) {
    console.error("[ChatWidget] `webhookUrl` is required.");
    return;
  }
  lt(), Vt(e.customCSS || ""), N = document.createElement("div"), N.setAttribute("id", "chat-widget-root"), document.body.appendChild(N), nt(Xe(Jt, e), N);
}
function lt() {
  N && (nt(null, N), N.remove(), N = null);
}
typeof window < "u" && (window.ChatWidget = { create: Gt, destroy: lt });
export {
  Gt as create,
  lt as destroy
};
