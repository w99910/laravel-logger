function Bt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ur(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function En(t) {
  let n, e, r;
  t.length !== 2 ? (n = Bt, e = (s, l) => Bt(t(s), l), r = (s, l) => t(s) - l) : (n = t === Bt || t === Ur ? t : Fr, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0)
        return f;
      do {
        const c = u + f >>> 1;
        e(s[c], l) < 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0)
        return f;
      do {
        const c = u + f >>> 1;
        e(s[c], l) <= 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    const c = i(s, l, u, f - 1);
    return c > u && r(s[c - 1], l) > -r(s[c], l) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function Fr() {
  return 0;
}
function Er(t) {
  return t === null ? NaN : +t;
}
const Lr = En(Bt), Hr = Lr.right;
En(Er).center;
const Yr = Hr;
function Ir(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
const Rr = Math.sqrt(50), Pr = Math.sqrt(10), Or = Math.sqrt(2);
function Zt(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Rr ? 10 : o >= Pr ? 5 : o >= Or ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Zt(t, n, e * 2) : [s, l, u];
}
function Wr(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, a] = r ? Zt(n, t, e) : Zt(t, n, e);
  if (!(o >= i))
    return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0)
      for (let u = 0; u < s; ++u)
        l[u] = (o - u) / -a;
    else
      for (let u = 0; u < s; ++u)
        l[u] = (o - u) * a;
  else if (a < 0)
    for (let u = 0; u < s; ++u)
      l[u] = (i + u) / -a;
  else
    for (let u = 0; u < s; ++u)
      l[u] = (i + u) * a;
  return l;
}
function xn(t, n, e) {
  return n = +n, t = +t, e = +e, Zt(t, n, e)[2];
}
function bn(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? xn(n, t, e) : xn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function qr(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Br(t) {
  return t;
}
var hn = 1, gn = 2, Mn = 3, $t = 4, Gn = 1e-6;
function zr(t) {
  return "translate(" + t + ",0)";
}
function Xr(t) {
  return "translate(0," + t + ")";
}
function Vr(t) {
  return (n) => +t(n);
}
function Zr(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Qr() {
  return !this.__axis;
}
function $e(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === hn || t === $t ? -1 : 1, f = t === $t || t === gn ? "x" : "y", c = t === hn || t === Mn ? zr : Xr;
  function h(g) {
    var m = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), v = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Br), T = Math.max(o, 0) + s, N = n.range(), $ = +N[0] + l, x = +N[N.length - 1] + l, C = (n.bandwidth ? Zr : Vr)(n.copy(), l), S = g.selection ? g.selection() : g, y = S.selectAll(".domain").data([null]), k = S.selectAll(".tick").data(m, n).order(), W = k.exit(), et = k.enter().append("g").attr("class", "tick"), V = k.select("line"), w = k.select("text");
    y = y.merge(y.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), k = k.merge(et), V = V.merge(et.append("line").attr("stroke", "currentColor").attr(f + "2", u * o)), w = w.merge(et.append("text").attr("fill", "currentColor").attr(f, u * T).attr("dy", t === hn ? "0em" : t === Mn ? "0.71em" : "0.32em")), g !== S && (y = y.transition(g), k = k.transition(g), V = V.transition(g), w = w.transition(g), W = W.transition(g).attr("opacity", Gn).attr("transform", function(F) {
      return isFinite(F = C(F)) ? c(F + l) : this.getAttribute("transform");
    }), et.attr("opacity", Gn).attr("transform", function(F) {
      var A = this.parentNode.__axis;
      return c((A && isFinite(A = A(F)) ? A : C(F)) + l);
    })), W.remove(), y.attr("d", t === $t || t === gn ? a ? "M" + u * a + "," + $ + "H" + l + "V" + x + "H" + u * a : "M" + l + "," + $ + "V" + x : a ? "M" + $ + "," + u * a + "V" + l + "H" + x + "V" + u * a : "M" + $ + "," + l + "H" + x), k.attr("opacity", 1).attr("transform", function(F) {
      return c(C(F) + l);
    }), V.attr(f + "2", u * o), w.attr(f, u * T).text(v), S.filter(Qr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === gn ? "start" : t === $t ? "end" : "middle"), S.each(function() {
      this.__axis = C;
    });
  }
  return h.scale = function(g) {
    return arguments.length ? (n = g, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(g) {
    return arguments.length ? (e = g == null ? [] : Array.from(g), h) : e.slice();
  }, h.tickValues = function(g) {
    return arguments.length ? (r = g == null ? null : Array.from(g), h) : r && r.slice();
  }, h.tickFormat = function(g) {
    return arguments.length ? (i = g, h) : i;
  }, h.tickSize = function(g) {
    return arguments.length ? (o = a = +g, h) : o;
  }, h.tickSizeInner = function(g) {
    return arguments.length ? (o = +g, h) : o;
  }, h.tickSizeOuter = function(g) {
    return arguments.length ? (a = +g, h) : a;
  }, h.tickPadding = function(g) {
    return arguments.length ? (s = +g, h) : s;
  }, h.offset = function(g) {
    return arguments.length ? (l = +g, h) : l;
  }, h;
}
function Gr(t) {
  return $e(Mn, t);
}
function Jr(t) {
  return $e($t, t);
}
var Kr = { value: () => {
} };
function Ne() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new zt(e);
}
function zt(t) {
  this._ = t;
}
function jr(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
zt.prototype = Ne.prototype = {
  constructor: zt,
  on: function(t, n) {
    var e = this._, r = jr(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = ti(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = Jn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Jn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new zt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function ti(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Jn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Kr, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Tn = "http://www.w3.org/1999/xhtml";
const Kn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Tn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function sn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Kn.hasOwnProperty(n) ? { space: Kn[n], local: t } : t;
}
function ni(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Tn && n.documentElement.namespaceURI === Tn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ei(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ae(t) {
  var n = sn(t);
  return (n.local ? ei : ni)(n);
}
function ri() {
}
function Ln(t) {
  return t == null ? ri : function() {
    return this.querySelector(t);
  };
}
function ii(t) {
  typeof t != "function" && (t = Ln(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = o[f]) && (u = t.call(l, l.__data__, f, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new P(r, this._parents);
}
function oi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ai() {
  return [];
}
function Ue(t) {
  return t == null ? ai : function() {
    return this.querySelectorAll(t);
  };
}
function ui(t) {
  return function() {
    return oi(t.apply(this, arguments));
  };
}
function si(t) {
  typeof t == "function" ? t = ui(t) : t = Ue(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new P(r, i);
}
function Fe(t) {
  return function() {
    return this.matches(t);
  };
}
function Ee(t) {
  return function(n) {
    return n.matches(t);
  };
}
var li = Array.prototype.find;
function fi(t) {
  return function() {
    return li.call(this.children, t);
  };
}
function ci() {
  return this.firstElementChild;
}
function hi(t) {
  return this.select(t == null ? ci : fi(typeof t == "function" ? t : Ee(t)));
}
var gi = Array.prototype.filter;
function di() {
  return Array.from(this.children);
}
function pi(t) {
  return function() {
    return gi.call(this.children, t);
  };
}
function mi(t) {
  return this.selectAll(t == null ? di : pi(typeof t == "function" ? t : Ee(t)));
}
function yi(t) {
  typeof t != "function" && (t = Fe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new P(r, this._parents);
}
function Le(t) {
  return new Array(t.length);
}
function wi() {
  return new P(this._enter || this._groups.map(Le), this._parents);
}
function Qt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Qt.prototype = {
  constructor: Qt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function vi(t) {
  return function() {
    return t;
  };
}
function _i(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Qt(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function xi(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, c = o.length, h = new Array(f), g;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (h[s] = g = a.call(l, l.__data__, s, n) + "", u.has(g) ? i[s] = l : u.set(g, l));
  for (s = 0; s < c; ++s)
    g = a.call(t, o[s], s, o) + "", (l = u.get(g)) ? (r[s] = l, l.__data__ = o[s], u.delete(g)) : e[s] = new Qt(t, o[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(h[s]) === l && (i[s] = l);
}
function bi(t) {
  return t.__data__;
}
function Mi(t, n) {
  if (!arguments.length)
    return Array.from(this, bi);
  var e = n ? xi : _i, r = this._parents, i = this._groups;
  typeof t != "function" && (t = vi(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], c = i[u], h = c.length, g = Ti(t.call(f, f && f.__data__, u, r)), m = g.length, v = s[u] = new Array(m), T = a[u] = new Array(m), N = l[u] = new Array(h);
    e(f, c, v, T, N, g, n);
    for (var $ = 0, x = 0, C, S; $ < m; ++$)
      if (C = v[$]) {
        for ($ >= x && (x = $ + 1); !(S = T[x]) && ++x < m; )
          ;
        C._next = S || null;
      }
  }
  return a = new P(a, r), a._enter = s, a._exit = l, a;
}
function Ti(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ci() {
  return new P(this._exit || this._groups.map(Le), this._parents);
}
function Si(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ki(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], f = r[l], c = u.length, h = s[l] = new Array(c), g, m = 0; m < c; ++m)
      (g = u[m] || f[m]) && (h[m] = g);
  for (; l < i; ++l)
    s[l] = e[l];
  return new P(s, this._parents);
}
function Di() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function $i(t) {
  t || (t = Ni);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(n);
  }
  return new P(i, this._parents).order();
}
function Ni(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ai() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ui() {
  return Array.from(this);
}
function Fi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Ei() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Li() {
  return !this.node();
}
function Hi(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Yi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ii(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ri(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Pi(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Oi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function qi(t, n) {
  var e = sn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ii : Yi : typeof n == "function" ? e.local ? Wi : Oi : e.local ? Pi : Ri)(e, n));
}
function He(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Bi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function zi(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Xi(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Vi(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Bi : typeof n == "function" ? Xi : zi)(t, n, e ?? "")) : _t(this.node(), t);
}
function _t(t, n) {
  return t.style.getPropertyValue(n) || He(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Zi(t) {
  return function() {
    delete this[t];
  };
}
function Qi(t, n) {
  return function() {
    this[t] = n;
  };
}
function Gi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ji(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Zi : typeof n == "function" ? Gi : Qi)(t, n)) : this.node()[t];
}
function Ye(t) {
  return t.trim().split(/^|\s+/);
}
function Hn(t) {
  return t.classList || new Ie(t);
}
function Ie(t) {
  this._node = t, this._names = Ye(t.getAttribute("class") || "");
}
Ie.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Re(t, n) {
  for (var e = Hn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function Pe(t, n) {
  for (var e = Hn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Ki(t) {
  return function() {
    Re(this, t);
  };
}
function ji(t) {
  return function() {
    Pe(this, t);
  };
}
function to(t, n) {
  return function() {
    (n.apply(this, arguments) ? Re : Pe)(this, t);
  };
}
function no(t, n) {
  var e = Ye(t + "");
  if (arguments.length < 2) {
    for (var r = Hn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? to : n ? Ki : ji)(e, n));
}
function eo() {
  this.textContent = "";
}
function ro(t) {
  return function() {
    this.textContent = t;
  };
}
function io(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function oo(t) {
  return arguments.length ? this.each(t == null ? eo : (typeof t == "function" ? io : ro)(t)) : this.node().textContent;
}
function ao() {
  this.innerHTML = "";
}
function uo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function so(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function lo(t) {
  return arguments.length ? this.each(t == null ? ao : (typeof t == "function" ? so : uo)(t)) : this.node().innerHTML;
}
function fo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function co() {
  return this.each(fo);
}
function ho() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function go() {
  return this.each(ho);
}
function po(t) {
  var n = typeof t == "function" ? t : Ae(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function mo() {
  return null;
}
function yo(t, n) {
  var e = typeof t == "function" ? t : Ae(t), r = n == null ? mo : typeof n == "function" ? n : Ln(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function wo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function vo() {
  return this.each(wo);
}
function _o() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function xo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function bo(t) {
  return this.select(t ? xo : _o);
}
function Mo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function To(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Co(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function So(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ko(t, n, e) {
  return function() {
    var r = this.__on, i, o = To(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Do(t, n, e) {
  var r = Co(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? ko : So, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function Oe(t, n, e) {
  var r = He(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function $o(t, n) {
  return function() {
    return Oe(this, t, n);
  };
}
function No(t, n) {
  return function() {
    return Oe(this, t, n.apply(this, arguments));
  };
}
function Ao(t, n) {
  return this.each((typeof n == "function" ? No : $o)(t, n));
}
function* Uo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var We = [null];
function P(t, n) {
  this._groups = t, this._parents = n;
}
function Ht() {
  return new P([[document.documentElement]], We);
}
function Fo() {
  return this;
}
P.prototype = Ht.prototype = {
  constructor: P,
  select: ii,
  selectAll: si,
  selectChild: hi,
  selectChildren: mi,
  filter: yi,
  data: Mi,
  enter: wi,
  exit: Ci,
  join: Si,
  merge: ki,
  selection: Fo,
  order: Di,
  sort: $i,
  call: Ai,
  nodes: Ui,
  node: Fi,
  size: Ei,
  empty: Li,
  each: Hi,
  attr: qi,
  style: Vi,
  property: Ji,
  classed: no,
  text: oo,
  html: lo,
  raise: co,
  lower: go,
  append: po,
  insert: yo,
  remove: vo,
  clone: bo,
  datum: Mo,
  on: Do,
  dispatch: Ao,
  [Symbol.iterator]: Uo
};
function Eo(t) {
  return typeof t == "string" ? new P([[document.querySelector(t)]], [document.documentElement]) : new P([[t]], We);
}
function Yn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function qe(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Yt() {
}
var Ft = 0.7, Gt = 1 / Ft, vt = "\\s*([+-]?\\d+)\\s*", Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Z = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lo = /^#([0-9a-f]{3,8})$/, Ho = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`), Yo = new RegExp(`^rgb\\(${Z},${Z},${Z}\\)$`), Io = new RegExp(`^rgba\\(${vt},${vt},${vt},${Et}\\)$`), Ro = new RegExp(`^rgba\\(${Z},${Z},${Z},${Et}\\)$`), Po = new RegExp(`^hsl\\(${Et},${Z},${Z}\\)$`), Oo = new RegExp(`^hsla\\(${Et},${Z},${Z},${Et}\\)$`), jn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Yn(Yt, st, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: te,
  // Deprecated! Use color.formatHex.
  formatHex: te,
  formatHex8: Wo,
  formatHsl: qo,
  formatRgb: ne,
  toString: ne
});
function te() {
  return this.rgb().formatHex();
}
function Wo() {
  return this.rgb().formatHex8();
}
function qo() {
  return Be(this).formatHsl();
}
function ne() {
  return this.rgb().formatRgb();
}
function st(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Lo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ee(n) : e === 3 ? new Y(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Pt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Pt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ho.exec(t)) ? new Y(n[1], n[2], n[3], 1) : (n = Yo.exec(t)) ? new Y(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Io.exec(t)) ? Pt(n[1], n[2], n[3], n[4]) : (n = Ro.exec(t)) ? Pt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Po.exec(t)) ? oe(n[1], n[2] / 100, n[3] / 100, 1) : (n = Oo.exec(t)) ? oe(n[1], n[2] / 100, n[3] / 100, n[4]) : jn.hasOwnProperty(t) ? ee(jn[t]) : t === "transparent" ? new Y(NaN, NaN, NaN, 0) : null;
}
function ee(t) {
  return new Y(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Pt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new Y(t, n, e, r);
}
function Bo(t) {
  return t instanceof Yt || (t = st(t)), t ? (t = t.rgb(), new Y(t.r, t.g, t.b, t.opacity)) : new Y();
}
function Cn(t, n, e, r) {
  return arguments.length === 1 ? Bo(t) : new Y(t, n, e, r ?? 1);
}
function Y(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Yn(Y, Cn, qe(Yt, {
  brighter(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new Y(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new Y(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Y(ut(this.r), ut(this.g), ut(this.b), Jt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: re,
  // Deprecated! Use color.formatHex.
  formatHex: re,
  formatHex8: zo,
  formatRgb: ie,
  toString: ie
}));
function re() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}`;
}
function zo() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}${at((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ie() {
  const t = Jt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ut(this.r)}, ${ut(this.g)}, ${ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Jt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function at(t) {
  return t = ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function oe(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new z(t, n, e, r);
}
function Be(t) {
  if (t instanceof z)
    return new z(t.h, t.s, t.l, t.opacity);
  if (t instanceof Yt || (t = st(t)), !t)
    return new z();
  if (t instanceof z)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new z(a, s, l, t.opacity);
}
function Xo(t, n, e, r) {
  return arguments.length === 1 ? Be(t) : new z(t, n, e, r ?? 1);
}
function z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Yn(z, Xo, qe(Yt, {
  brighter(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new Y(
      dn(t >= 240 ? t - 240 : t + 120, i, r),
      dn(t, i, r),
      dn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new z(ae(this.h), Ot(this.s), Ot(this.l), Jt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Jt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ae(this.h)}, ${Ot(this.s) * 100}%, ${Ot(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ae(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ot(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function dn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const In = (t) => () => t;
function Vo(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Zo(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Qo(t) {
  return (t = +t) == 1 ? ze : function(n, e) {
    return e - n ? Zo(n, e, t) : In(isNaN(n) ? e : n);
  };
}
function ze(t, n) {
  var e = n - t;
  return e ? Vo(t, e) : In(isNaN(t) ? n : t);
}
const Kt = function t(n) {
  var e = Qo(n);
  function r(i, o) {
    var a = e((i = Cn(i)).r, (o = Cn(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = ze(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Go(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Jo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ko(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = Rn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function jo(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function B(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ta(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Rn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pn = new RegExp(Sn.source, "g");
function na(t) {
  return function() {
    return t;
  };
}
function ea(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Xe(t, n) {
  var e = Sn.lastIndex = pn.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Sn.exec(t)) && (i = pn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: B(r, i) })), e = pn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? ea(l[0].x) : na(n) : (n = l.length, function(u) {
    for (var f = 0, c; f < n; ++f)
      s[(c = l[f]).i] = c.x(u);
    return s.join("");
  });
}
function Rn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? In(n) : (e === "number" ? B : e === "string" ? (r = st(n)) ? (n = r, Kt) : Xe : n instanceof st ? Kt : n instanceof Date ? jo : Jo(n) ? Go : Array.isArray(n) ? Ko : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ta : B)(t, n);
}
function ra(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ue = 180 / Math.PI, kn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ve(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * ue,
    skewX: Math.atan(l) * ue,
    scaleX: a,
    scaleY: s
  };
}
var Wt;
function ia(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? kn : Ve(n.a, n.b, n.c, n.d, n.e, n.f);
}
function oa(t) {
  return t == null || (Wt || (Wt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wt.setAttribute("transform", t), !(t = Wt.transform.baseVal.consolidate())) ? kn : (t = t.matrix, Ve(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ze(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, c, h, g, m) {
    if (u !== c || f !== h) {
      var v = g.push("translate(", null, n, null, e);
      m.push({ i: v - 4, x: B(u, c) }, { i: v - 2, x: B(f, h) });
    } else
      (c || h) && g.push("translate(" + c + n + h + e);
  }
  function a(u, f, c, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: B(u, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function s(u, f, c, h) {
    u !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: B(u, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function l(u, f, c, h, g, m) {
    if (u !== c || f !== h) {
      var v = g.push(i(g) + "scale(", null, ",", null, ")");
      m.push({ i: v - 4, x: B(u, c) }, { i: v - 2, x: B(f, h) });
    } else
      (c !== 1 || h !== 1) && g.push(i(g) + "scale(" + c + "," + h + ")");
  }
  return function(u, f) {
    var c = [], h = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, c, h), a(u.rotate, f.rotate, c, h), s(u.skewX, f.skewX, c, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, c, h), u = f = null, function(g) {
      for (var m = -1, v = h.length, T; ++m < v; )
        c[(T = h[m]).i] = T.x(g);
      return c.join("");
    };
  };
}
var aa = Ze(ia, "px, ", "px)", "deg)"), ua = Ze(oa, ", ", ")", ")"), xt = 0, Nt = 0, Ct = 0, Qe = 1e3, jt, At, tn = 0, lt = 0, ln = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, Ge = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pn() {
  return lt || (Ge(sa), lt = Lt.now() + ln);
}
function sa() {
  lt = 0;
}
function nn() {
  this._call = this._time = this._next = null;
}
nn.prototype = Je.prototype = {
  constructor: nn,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? Pn() : +e) + (n == null ? 0 : +n), !this._next && At !== this && (At ? At._next = this : jt = this, At = this), this._call = t, this._time = e, Dn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Dn());
  }
};
function Je(t, n, e) {
  var r = new nn();
  return r.restart(t, n, e), r;
}
function la() {
  Pn(), ++xt;
  for (var t = jt, n; t; )
    (n = lt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --xt;
}
function se() {
  lt = (tn = Lt.now()) + ln, xt = Nt = 0;
  try {
    la();
  } finally {
    xt = 0, ca(), lt = 0;
  }
}
function fa() {
  var t = Lt.now(), n = t - tn;
  n > Qe && (ln -= n, tn = t);
}
function ca() {
  for (var t, n = jt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : jt = e);
  At = t, Dn(r);
}
function Dn(t) {
  if (!xt) {
    Nt && (Nt = clearTimeout(Nt));
    var n = t - lt;
    n > 24 ? (t < 1 / 0 && (Nt = setTimeout(se, t - Lt.now() - ln)), Ct && (Ct = clearInterval(Ct))) : (Ct || (tn = Lt.now(), Ct = setInterval(fa, Qe)), xt = 1, Ge(se));
  }
}
function le(t, n, e) {
  var r = new nn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var ha = Ne("start", "end", "cancel", "interrupt"), ga = [], Ke = 0, fe = 1, $n = 2, Xt = 3, ce = 4, Nn = 5, Vt = 6;
function fn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  da(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ha,
    tween: ga,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ke
  });
}
function On(t, n) {
  var e = X(t, n);
  if (e.state > Ke)
    throw new Error("too late; already scheduled");
  return e;
}
function Q(t, n) {
  var e = X(t, n);
  if (e.state > Xt)
    throw new Error("too late; already running");
  return e;
}
function X(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function da(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Je(o, 0, e.time);
  function o(u) {
    e.state = fe, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, c, h, g;
    if (e.state !== fe)
      return l();
    for (f in r)
      if (g = r[f], g.name === e.name) {
        if (g.state === Xt)
          return le(a);
        g.state === ce ? (g.state = Vt, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < n && (g.state = Vt, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
      }
    if (le(function() {
      e.state === Xt && (e.state = ce, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = $n, e.on.call("start", t, t.__data__, e.index, e.group), e.state === $n) {
      for (e.state = Xt, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (g = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = g);
      i.length = c + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Nn, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    e.state === Nn && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = Vt, e.timer.stop(), delete r[n];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function pa(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > $n && r.state < Nn, r.state = Vt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function ma(t) {
  return this.each(function() {
    pa(this, t);
  });
}
function ya(t, n) {
  var e, r;
  return function() {
    var i = Q(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function wa(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = Q(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function va(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = X(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? ya : wa)(e, t, n));
}
function Wn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Q(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return X(i, r).value[n];
  };
}
function je(t, n) {
  var e;
  return (typeof n == "number" ? B : n instanceof st ? Kt : (e = st(n)) ? (n = e, Kt) : Xe)(t, n);
}
function _a(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ba(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ma(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ta(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Ca(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Sa(t, n) {
  var e = sn(t), r = e === "transform" ? ua : je;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ca : Ta)(e, r, Wn(this, "attr." + t, n)) : n == null ? (e.local ? xa : _a)(e) : (e.local ? Ma : ba)(e, r, n));
}
function ka(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Da(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function $a(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Da(t, o)), e;
  }
  return i._value = n, i;
}
function Na(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && ka(t, o)), e;
  }
  return i._value = n, i;
}
function Aa(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = sn(t);
  return this.tween(e, (r.local ? $a : Na)(r, n));
}
function Ua(t, n) {
  return function() {
    On(this, t).delay = +n.apply(this, arguments);
  };
}
function Fa(t, n) {
  return n = +n, function() {
    On(this, t).delay = n;
  };
}
function Ea(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ua : Fa)(n, t)) : X(this.node(), n).delay;
}
function La(t, n) {
  return function() {
    Q(this, t).duration = +n.apply(this, arguments);
  };
}
function Ha(t, n) {
  return n = +n, function() {
    Q(this, t).duration = n;
  };
}
function Ya(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? La : Ha)(n, t)) : X(this.node(), n).duration;
}
function Ia(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    Q(this, t).ease = n;
  };
}
function Ra(t) {
  var n = this._id;
  return arguments.length ? this.each(Ia(n, t)) : X(this.node(), n).ease;
}
function Pa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    Q(this, t).ease = e;
  };
}
function Oa(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Pa(this._id, t));
}
function Wa(t) {
  typeof t != "function" && (t = Fe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new j(r, this._parents, this._name, this._id);
}
function qa(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], f = l.length, c = a[s] = new Array(f), h, g = 0; g < f; ++g)
      (h = l[g] || u[g]) && (c[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new j(a, this._parents, this._name, this._id);
}
function Ba(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function za(t, n, e) {
  var r, i, o = Ba(n) ? On : Q;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Xa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? X(this.node(), e).on.on(t) : this.each(za(e, t, n));
}
function Va(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Za() {
  return this.on("end.remove", Va(this._id));
}
function Qa(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ln(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), f, c, h = 0; h < l; ++h)
      (f = s[h]) && (c = t.call(f, f.__data__, h, s)) && ("__data__" in f && (c.__data__ = f.__data__), u[h] = c, fn(u[h], n, e, h, u, X(f, e)));
  return new j(o, this._parents, n, e);
}
function Ga(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ue(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, c = 0; c < u; ++c)
      if (f = l[c]) {
        for (var h = t.call(f, f.__data__, c, l), g, m = X(f, e), v = 0, T = h.length; v < T; ++v)
          (g = h[v]) && fn(g, n, e, v, h, m);
        o.push(h), a.push(f);
      }
  return new j(o, a, n, e);
}
var Ja = Ht.prototype.constructor;
function Ka() {
  return new Ja(this._groups, this._parents);
}
function ja(t, n) {
  var e, r, i;
  return function() {
    var o = _t(this, t), a = (this.style.removeProperty(t), _t(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function tr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function tu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = _t(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function nu(t, n, e) {
  var r, i, o;
  return function() {
    var a = _t(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), _t(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function eu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = Q(this, t), u = l.on, f = l.value[o] == null ? s || (s = tr(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), l.on = r;
  };
}
function ru(t, n, e) {
  var r = (t += "") == "transform" ? aa : je;
  return n == null ? this.styleTween(t, ja(t, r)).on("end.style." + t, tr(t)) : typeof n == "function" ? this.styleTween(t, nu(t, r, Wn(this, "style." + t, n))).each(eu(this._id, t)) : this.styleTween(t, tu(t, r, n), e).on("end.style." + t, null);
}
function iu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ou(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && iu(t, a, e)), r;
  }
  return o._value = n, o;
}
function au(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, ou(t, n, e ?? ""));
}
function uu(t) {
  return function() {
    this.textContent = t;
  };
}
function su(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function lu(t) {
  return this.tween("text", typeof t == "function" ? su(Wn(this, "text", t)) : uu(t == null ? "" : t + ""));
}
function fu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function cu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && fu(i)), n;
  }
  return r._value = t, r;
}
function hu(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, cu(t));
}
function gu() {
  for (var t = this._name, n = this._id, e = nr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var f = X(l, n);
        fn(l, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new j(r, this._parents, t, e);
}
function du() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = Q(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var pu = 0;
function j(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function nr() {
  return ++pu;
}
var G = Ht.prototype;
j.prototype = {
  constructor: j,
  select: Qa,
  selectAll: Ga,
  selectChild: G.selectChild,
  selectChildren: G.selectChildren,
  filter: Wa,
  merge: qa,
  selection: Ka,
  transition: gu,
  call: G.call,
  nodes: G.nodes,
  node: G.node,
  size: G.size,
  empty: G.empty,
  each: G.each,
  on: Xa,
  attr: Sa,
  attrTween: Aa,
  style: ru,
  styleTween: au,
  text: lu,
  textTween: hu,
  remove: Za,
  tween: va,
  delay: Ea,
  duration: Ya,
  ease: Ra,
  easeVarying: Oa,
  end: du,
  [Symbol.iterator]: G[Symbol.iterator]
};
function mu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var yu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: mu
};
function wu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function vu(t) {
  var n, e;
  t instanceof j ? (n = t._id, t = t._name) : (n = nr(), (e = yu).time = Pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && fn(l, t, n, u, a, e || wu(l, n));
  return new j(r, this._parents, t, n);
}
Ht.prototype.interrupt = ma;
Ht.prototype.transition = vu;
const An = Math.PI, Un = 2 * An, ot = 1e-6, _u = Un - ot;
function er(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function xu(t) {
  let n = Math.floor(t);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (n > 15)
    return er;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class bu {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? er : xu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0)
      throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, f = a - n, c = s - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > ot)
      if (!(Math.abs(c * l - u * f) > ot) || !o)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let g = r - a, m = i - s, v = l * l + u * u, T = g * g + m * m, N = Math.sqrt(v), $ = Math.sqrt(h), x = o * Math.tan((An - Math.acos((v + h - T) / (2 * N * $))) / 2), C = x / $, S = x / N;
        Math.abs(C - 1) > ot && this._append`L${n + C * f},${e + C * c}`, this._append`A${o},${o},0,0,${+(c * g > f * m)},${this._x1 = n + S * l},${this._y1 = e + S * u}`;
      }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0)
      throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, f = e + l, c = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > ot || Math.abs(this._y1 - f) > ot) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Un + Un), h > _u ? this._append`A${r},${r},0,1,${c},${n - s},${e - l}A${r},${r},0,1,${c},${this._x1 = u},${this._y1 = f}` : h > ot && this._append`A${r},${r},0,${+(h >= An)},${c},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Mu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function en(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function bt(t) {
  return t = en(Math.abs(t)), t ? t[1] : NaN;
}
function Tu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Cu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Su = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function rn(t) {
  if (!(n = Su.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new qn({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
rn.prototype = qn.prototype;
function qn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
qn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ku(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var rr;
function Du(t, n) {
  var e = en(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (rr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + en(t, Math.max(0, n + o - 1))[0];
}
function he(t, n) {
  var e = en(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ge = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Mu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => he(t * 100, n),
  r: he,
  s: Du,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function de(t) {
  return t;
}
var pe = Array.prototype.map, me = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $u(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? de : Tu(pe.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? de : Cu(pe.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(c) {
    c = rn(c);
    var h = c.fill, g = c.align, m = c.sign, v = c.symbol, T = c.zero, N = c.width, $ = c.comma, x = c.precision, C = c.trim, S = c.type;
    S === "n" ? ($ = !0, S = "g") : ge[S] || (x === void 0 && (x = 12), C = !0, S = "g"), (T || h === "0" && g === "=") && (T = !0, h = "0", g = "=");
    var y = v === "$" ? e : v === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", k = v === "$" ? r : /[%p]/.test(S) ? a : "", W = ge[S], et = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function V(w) {
      var F = y, A = k, rt, Rt, gt;
      if (S === "c")
        A = W(w) + A, w = "";
      else {
        w = +w;
        var dt = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? l : W(Math.abs(w), x), C && (w = ku(w)), dt && +w == 0 && m !== "+" && (dt = !1), F = (dt ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + F, A = (S === "s" ? me[8 + rr / 3] : "") + A + (dt && m === "(" ? ")" : ""), et) {
          for (rt = -1, Rt = w.length; ++rt < Rt; )
            if (gt = w.charCodeAt(rt), 48 > gt || gt > 57) {
              A = (gt === 46 ? i + w.slice(rt + 1) : w.slice(rt)) + A, w = w.slice(0, rt);
              break;
            }
        }
      }
      $ && !T && (w = n(w, 1 / 0));
      var pt = F.length + w.length + A.length, q = pt < N ? new Array(N - pt + 1).join(h) : "";
      switch ($ && T && (w = n(q + w, q.length ? N - A.length : 1 / 0), q = ""), g) {
        case "<":
          w = F + w + A + q;
          break;
        case "=":
          w = F + q + w + A;
          break;
        case "^":
          w = q.slice(0, pt = q.length >> 1) + F + w + A + q.slice(pt);
          break;
        default:
          w = q + F + w + A;
          break;
      }
      return o(w);
    }
    return V.toString = function() {
      return c + "";
    }, V;
  }
  function f(c, h) {
    var g = u((c = rn(c), c.type = "f", c)), m = Math.max(-8, Math.min(8, Math.floor(bt(h) / 3))) * 3, v = Math.pow(10, -m), T = me[8 + m / 3];
    return function(N) {
      return g(v * N) + T;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var qt, ir, or;
Nu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Nu(t) {
  return qt = $u(t), ir = qt.format, or = qt.formatPrefix, qt;
}
function Au(t) {
  return Math.max(0, -bt(Math.abs(t)));
}
function Uu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bt(n) / 3))) * 3 - bt(Math.abs(t)));
}
function Fu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, bt(n) - bt(t)) + 1;
}
function ar(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Eu(t) {
  return function() {
    return t;
  };
}
function Lu(t) {
  return +t;
}
var ye = [0, 1];
function yt(t) {
  return t;
}
function Fn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Eu(isNaN(n) ? NaN : 0.5);
}
function Hu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Yu(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Fn(i, r), o = e(a, o)) : (r = Fn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Iu(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Fn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = Yr(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function ur(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ru() {
  var t = ye, n = ye, e = Rn, r, i, o, a = yt, s, l, u;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== yt && (a = Hu(t[0], t[h - 1])), s = h > 2 ? Iu : Yu, l = u = null, c;
  }
  function c(h) {
    return h == null || isNaN(h = +h) ? o : (l || (l = s(t.map(r), n, e)))(r(a(h)));
  }
  return c.invert = function(h) {
    return a(i((u || (u = s(n, t.map(r), B)))(h)));
  }, c.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Lu), f()) : t.slice();
  }, c.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, c.rangeRound = function(h) {
    return n = Array.from(h), e = ra, f();
  }, c.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : yt, f()) : a !== yt;
  }, c.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, c.unknown = function(h) {
    return arguments.length ? (o = h, c) : o;
  }, function(h, g) {
    return r = h, i = g, f();
  };
}
function sr() {
  return Ru()(yt, yt);
}
function Pu(t, n, e, r) {
  var i = bn(t, n, e), o;
  switch (r = rn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Uu(i, a)) && (r.precision = o), or(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Fu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Au(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ir(r);
}
function Ou(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Wr(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Pu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = xn(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function lr() {
  var t = sr();
  return t.copy = function() {
    return ur(t, lr());
  }, ar.apply(t, arguments), Ou(t);
}
function Wu(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], a;
  return o < i && (a = e, e = r, r = a, a = i, i = o, o = a), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const mn = new Date(), yn = new Date();
function U(t, n, e, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? new Date() : new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), n(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), s = i.ceil(o);
    return o - a < s - o ? a : s;
  }, i.offset = (o, a) => (n(o = new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, s) => {
    const l = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < a) || !(s > 0))
      return l;
    let u;
    do
      l.push(u = new Date(+o)), n(o, s), t(o);
    while (u < o && o < a);
    return l;
  }, i.filter = (o) => U((a) => {
    if (a >= a)
      for (; t(a), !o(a); )
        a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0)
        for (; ++s <= 0; )
          for (; n(a, -1), !o(a); )
            ;
      else
        for (; --s >= 0; )
          for (; n(a, 1), !o(a); )
            ;
  }), e && (i.count = (o, a) => (mn.setTime(+o), yn.setTime(+a), t(mn), t(yn), Math.floor(e(mn, yn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const on = U(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
on.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? U((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : on);
on.range;
const J = 1e3, O = J * 60, K = O * 60, tt = K * 24, Bn = tt * 7, we = tt * 30, wn = tt * 365, wt = U((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * J);
}, (t, n) => (n - t) / J, (t) => t.getUTCSeconds());
wt.range;
const zn = U((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * J);
}, (t, n) => {
  t.setTime(+t + n * O);
}, (t, n) => (n - t) / O, (t) => t.getMinutes());
zn.range;
const qu = U((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * O);
}, (t, n) => (n - t) / O, (t) => t.getUTCMinutes());
qu.range;
const Xn = U((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * J - t.getMinutes() * O);
}, (t, n) => {
  t.setTime(+t + n * K);
}, (t, n) => (n - t) / K, (t) => t.getHours());
Xn.range;
const Bu = U((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * K);
}, (t, n) => (n - t) / K, (t) => t.getUTCHours());
Bu.range;
const It = U(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * O) / tt,
  (t) => t.getDate() - 1
);
It.range;
const Vn = U((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / tt, (t) => t.getUTCDate() - 1);
Vn.range;
const zu = U((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / tt, (t) => Math.floor(t / tt));
zu.range;
function ct(t) {
  return U((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * O) / Bn);
}
const cn = ct(0), an = ct(1), Xu = ct(2), Vu = ct(3), Mt = ct(4), Zu = ct(5), Qu = ct(6);
cn.range;
an.range;
Xu.range;
Vu.range;
Mt.range;
Zu.range;
Qu.range;
function ht(t) {
  return U((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / Bn);
}
const fr = ht(0), un = ht(1), Gu = ht(2), Ju = ht(3), Tt = ht(4), Ku = ht(5), ju = ht(6);
fr.range;
un.range;
Gu.range;
Ju.range;
Tt.range;
Ku.range;
ju.range;
const Zn = U((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Zn.range;
const ts = U((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
ts.range;
const nt = U((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
nt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : U((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
nt.range;
const ft = U((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
ft.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : U((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
ft.range;
function ns(t, n, e, r, i, o) {
  const a = [
    [wt, 1, J],
    [wt, 5, 5 * J],
    [wt, 15, 15 * J],
    [wt, 30, 30 * J],
    [o, 1, O],
    [o, 5, 5 * O],
    [o, 15, 15 * O],
    [o, 30, 30 * O],
    [i, 1, K],
    [i, 3, 3 * K],
    [i, 6, 6 * K],
    [i, 12, 12 * K],
    [r, 1, tt],
    [r, 2, 2 * tt],
    [e, 1, Bn],
    [n, 1, we],
    [n, 3, 3 * we],
    [t, 1, wn]
  ];
  function s(u, f, c) {
    const h = f < u;
    h && ([u, f] = [f, u]);
    const g = c && typeof c.range == "function" ? c : l(u, f, c), m = g ? g.range(u, +f + 1) : [];
    return h ? m.reverse() : m;
  }
  function l(u, f, c) {
    const h = Math.abs(f - u) / c, g = En(([, , T]) => T).right(a, h);
    if (g === a.length)
      return t.every(bn(u / wn, f / wn, c));
    if (g === 0)
      return on.every(Math.max(bn(u, f, c), 1));
    const [m, v] = a[h / a[g - 1][2] < a[g][2] / h ? g - 1 : g];
    return m.every(v);
  }
  return [s, l];
}
const [es, rs] = ns(nt, Zn, cn, It, Xn, zn);
function vn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function _n(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function St(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function is(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, l = t.shortMonths, u = kt(i), f = Dt(i), c = kt(o), h = Dt(o), g = kt(a), m = Dt(a), v = kt(s), T = Dt(s), N = kt(l), $ = Dt(l), x = {
    a: dt,
    A: pt,
    b: q,
    B: Mr,
    c: null,
    d: Te,
    e: Te,
    f: ks,
    g: Ys,
    G: Rs,
    H: Ts,
    I: Cs,
    j: Ss,
    L: cr,
    m: Ds,
    M: $s,
    p: Tr,
    q: Cr,
    Q: ke,
    s: De,
    S: Ns,
    u: As,
    U: Us,
    V: Fs,
    w: Es,
    W: Ls,
    x: null,
    X: null,
    y: Hs,
    Y: Is,
    Z: Ps,
    "%": Se
  }, C = {
    a: Sr,
    A: kr,
    b: Dr,
    B: $r,
    c: null,
    d: Ce,
    e: Ce,
    f: Bs,
    g: tl,
    G: el,
    H: Os,
    I: Ws,
    j: qs,
    L: gr,
    m: zs,
    M: Xs,
    p: Nr,
    q: Ar,
    Q: ke,
    s: De,
    S: Vs,
    u: Zs,
    U: Qs,
    V: Gs,
    w: Js,
    W: Ks,
    x: null,
    X: null,
    y: js,
    Y: nl,
    Z: rl,
    "%": Se
  }, S = {
    a: V,
    A: w,
    b: F,
    B: A,
    c: rt,
    d: be,
    e: be,
    f: _s,
    g: xe,
    G: _e,
    H: Me,
    I: Me,
    j: ms,
    L: vs,
    m: ps,
    M: ys,
    p: et,
    q: ds,
    Q: bs,
    s: Ms,
    S: ws,
    u: ls,
    U: fs,
    V: cs,
    w: ss,
    W: hs,
    x: Rt,
    X: gt,
    y: xe,
    Y: _e,
    Z: gs,
    "%": xs
  };
  x.x = y(e, x), x.X = y(r, x), x.c = y(n, x), C.x = y(e, C), C.X = y(r, C), C.c = y(n, C);
  function y(p, _) {
    return function(b) {
      var d = [], H = -1, D = 0, I = p.length, R, it, Qn;
      for (b instanceof Date || (b = new Date(+b)); ++H < I; )
        p.charCodeAt(H) === 37 && (d.push(p.slice(D, H)), (it = ve[R = p.charAt(++H)]) != null ? R = p.charAt(++H) : it = R === "e" ? " " : "0", (Qn = _[R]) && (R = Qn(b, it)), d.push(R), D = H + 1);
      return d.push(p.slice(D, H)), d.join("");
    };
  }
  function k(p, _) {
    return function(b) {
      var d = St(1900, void 0, 1), H = W(d, p, b += "", 0), D, I;
      if (H != b.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (_ && !("Z" in d) && (d.Z = 0), "p" in d && (d.H = d.H % 12 + d.p * 12), d.m === void 0 && (d.m = "q" in d ? d.q : 0), "V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        "w" in d || (d.w = 1), "Z" in d ? (D = _n(St(d.y, 0, 1)), I = D.getUTCDay(), D = I > 4 || I === 0 ? un.ceil(D) : un(D), D = Vn.offset(D, (d.V - 1) * 7), d.y = D.getUTCFullYear(), d.m = D.getUTCMonth(), d.d = D.getUTCDate() + (d.w + 6) % 7) : (D = vn(St(d.y, 0, 1)), I = D.getDay(), D = I > 4 || I === 0 ? an.ceil(D) : an(D), D = It.offset(D, (d.V - 1) * 7), d.y = D.getFullYear(), d.m = D.getMonth(), d.d = D.getDate() + (d.w + 6) % 7);
      } else
        ("W" in d || "U" in d) && ("w" in d || (d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0), I = "Z" in d ? _n(St(d.y, 0, 1)).getUTCDay() : vn(St(d.y, 0, 1)).getDay(), d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (I + 5) % 7 : d.w + d.U * 7 - (I + 6) % 7);
      return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, _n(d)) : vn(d);
    };
  }
  function W(p, _, b, d) {
    for (var H = 0, D = _.length, I = b.length, R, it; H < D; ) {
      if (d >= I)
        return -1;
      if (R = _.charCodeAt(H++), R === 37) {
        if (R = _.charAt(H++), it = S[R in ve ? _.charAt(H++) : R], !it || (d = it(p, b, d)) < 0)
          return -1;
      } else if (R != b.charCodeAt(d++))
        return -1;
    }
    return d;
  }
  function et(p, _, b) {
    var d = u.exec(_.slice(b));
    return d ? (p.p = f.get(d[0].toLowerCase()), b + d[0].length) : -1;
  }
  function V(p, _, b) {
    var d = g.exec(_.slice(b));
    return d ? (p.w = m.get(d[0].toLowerCase()), b + d[0].length) : -1;
  }
  function w(p, _, b) {
    var d = c.exec(_.slice(b));
    return d ? (p.w = h.get(d[0].toLowerCase()), b + d[0].length) : -1;
  }
  function F(p, _, b) {
    var d = N.exec(_.slice(b));
    return d ? (p.m = $.get(d[0].toLowerCase()), b + d[0].length) : -1;
  }
  function A(p, _, b) {
    var d = v.exec(_.slice(b));
    return d ? (p.m = T.get(d[0].toLowerCase()), b + d[0].length) : -1;
  }
  function rt(p, _, b) {
    return W(p, n, _, b);
  }
  function Rt(p, _, b) {
    return W(p, e, _, b);
  }
  function gt(p, _, b) {
    return W(p, r, _, b);
  }
  function dt(p) {
    return a[p.getDay()];
  }
  function pt(p) {
    return o[p.getDay()];
  }
  function q(p) {
    return l[p.getMonth()];
  }
  function Mr(p) {
    return s[p.getMonth()];
  }
  function Tr(p) {
    return i[+(p.getHours() >= 12)];
  }
  function Cr(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function Sr(p) {
    return a[p.getUTCDay()];
  }
  function kr(p) {
    return o[p.getUTCDay()];
  }
  function Dr(p) {
    return l[p.getUTCMonth()];
  }
  function $r(p) {
    return s[p.getUTCMonth()];
  }
  function Nr(p) {
    return i[+(p.getUTCHours() >= 12)];
  }
  function Ar(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var _ = y(p += "", x);
      return _.toString = function() {
        return p;
      }, _;
    },
    parse: function(p) {
      var _ = k(p += "", !1);
      return _.toString = function() {
        return p;
      }, _;
    },
    utcFormat: function(p) {
      var _ = y(p += "", C);
      return _.toString = function() {
        return p;
      }, _;
    },
    utcParse: function(p) {
      var _ = k(p += "", !0);
      return _.toString = function() {
        return p;
      }, _;
    }
  };
}
var ve = { "-": "", _: " ", 0: "0" }, L = /^\s*\d+/, os = /^%/, as = /[\\^$*+?|[\]().{}]/g;
function M(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function us(t) {
  return t.replace(as, "\\$&");
}
function kt(t) {
  return new RegExp("^(?:" + t.map(us).join("|") + ")", "i");
}
function Dt(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function ss(t, n, e) {
  var r = L.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function ls(t, n, e) {
  var r = L.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function fs(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function cs(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function hs(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function _e(t, n, e) {
  var r = L.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function xe(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function gs(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function ds(t, n, e) {
  var r = L.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function ps(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function be(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function ms(t, n, e) {
  var r = L.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Me(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function ys(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function ws(t, n, e) {
  var r = L.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function vs(t, n, e) {
  var r = L.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function _s(t, n, e) {
  var r = L.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function xs(t, n, e) {
  var r = os.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function bs(t, n, e) {
  var r = L.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Ms(t, n, e) {
  var r = L.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Te(t, n) {
  return M(t.getDate(), n, 2);
}
function Ts(t, n) {
  return M(t.getHours(), n, 2);
}
function Cs(t, n) {
  return M(t.getHours() % 12 || 12, n, 2);
}
function Ss(t, n) {
  return M(1 + It.count(nt(t), t), n, 3);
}
function cr(t, n) {
  return M(t.getMilliseconds(), n, 3);
}
function ks(t, n) {
  return cr(t, n) + "000";
}
function Ds(t, n) {
  return M(t.getMonth() + 1, n, 2);
}
function $s(t, n) {
  return M(t.getMinutes(), n, 2);
}
function Ns(t, n) {
  return M(t.getSeconds(), n, 2);
}
function As(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Us(t, n) {
  return M(cn.count(nt(t) - 1, t), n, 2);
}
function hr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Mt(t) : Mt.ceil(t);
}
function Fs(t, n) {
  return t = hr(t), M(Mt.count(nt(t), t) + (nt(t).getDay() === 4), n, 2);
}
function Es(t) {
  return t.getDay();
}
function Ls(t, n) {
  return M(an.count(nt(t) - 1, t), n, 2);
}
function Hs(t, n) {
  return M(t.getFullYear() % 100, n, 2);
}
function Ys(t, n) {
  return t = hr(t), M(t.getFullYear() % 100, n, 2);
}
function Is(t, n) {
  return M(t.getFullYear() % 1e4, n, 4);
}
function Rs(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Mt(t) : Mt.ceil(t), M(t.getFullYear() % 1e4, n, 4);
}
function Ps(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + M(n / 60 | 0, "0", 2) + M(n % 60, "0", 2);
}
function Ce(t, n) {
  return M(t.getUTCDate(), n, 2);
}
function Os(t, n) {
  return M(t.getUTCHours(), n, 2);
}
function Ws(t, n) {
  return M(t.getUTCHours() % 12 || 12, n, 2);
}
function qs(t, n) {
  return M(1 + Vn.count(ft(t), t), n, 3);
}
function gr(t, n) {
  return M(t.getUTCMilliseconds(), n, 3);
}
function Bs(t, n) {
  return gr(t, n) + "000";
}
function zs(t, n) {
  return M(t.getUTCMonth() + 1, n, 2);
}
function Xs(t, n) {
  return M(t.getUTCMinutes(), n, 2);
}
function Vs(t, n) {
  return M(t.getUTCSeconds(), n, 2);
}
function Zs(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function Qs(t, n) {
  return M(fr.count(ft(t) - 1, t), n, 2);
}
function dr(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Tt(t) : Tt.ceil(t);
}
function Gs(t, n) {
  return t = dr(t), M(Tt.count(ft(t), t) + (ft(t).getUTCDay() === 4), n, 2);
}
function Js(t) {
  return t.getUTCDay();
}
function Ks(t, n) {
  return M(un.count(ft(t) - 1, t), n, 2);
}
function js(t, n) {
  return M(t.getUTCFullYear() % 100, n, 2);
}
function tl(t, n) {
  return t = dr(t), M(t.getUTCFullYear() % 100, n, 2);
}
function nl(t, n) {
  return M(t.getUTCFullYear() % 1e4, n, 4);
}
function el(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Tt(t) : Tt.ceil(t), M(t.getUTCFullYear() % 1e4, n, 4);
}
function rl() {
  return "+0000";
}
function Se() {
  return "%";
}
function ke(t) {
  return +t;
}
function De(t) {
  return Math.floor(+t / 1e3);
}
var mt, pr;
il({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function il(t) {
  return mt = is(t), pr = mt.format, mt.parse, mt.utcFormat, mt.utcParse, mt;
}
function ol(t) {
  return new Date(t);
}
function al(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function mr(t, n, e, r, i, o, a, s, l, u) {
  var f = sr(), c = f.invert, h = f.domain, g = u(".%L"), m = u(":%S"), v = u("%I:%M"), T = u("%I %p"), N = u("%a %d"), $ = u("%b %d"), x = u("%B"), C = u("%Y");
  function S(y) {
    return (l(y) < y ? g : s(y) < y ? m : a(y) < y ? v : o(y) < y ? T : r(y) < y ? i(y) < y ? N : $ : e(y) < y ? x : C)(y);
  }
  return f.invert = function(y) {
    return new Date(c(y));
  }, f.domain = function(y) {
    return arguments.length ? h(Array.from(y, al)) : h().map(ol);
  }, f.ticks = function(y) {
    var k = h();
    return t(k[0], k[k.length - 1], y ?? 10);
  }, f.tickFormat = function(y, k) {
    return k == null ? S : u(k);
  }, f.nice = function(y) {
    var k = h();
    return (!y || typeof y.range != "function") && (y = n(k[0], k[k.length - 1], y ?? 10)), y ? h(Wu(k, y)) : f;
  }, f.copy = function() {
    return ur(f, mr(t, n, e, r, i, o, a, s, l, u));
  }, f;
}
function ul() {
  return ar.apply(mr(es, rs, nt, Zn, cn, It, Xn, zn, wt, pr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function E(t) {
  return function() {
    return t;
  };
}
function yr(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length)
      return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new bu(n);
}
function wr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vr(t) {
  this._context = t;
}
vr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function _r(t) {
  return new vr(t);
}
function xr(t) {
  return t[0];
}
function br(t) {
  return t[1];
}
function sl(t, n) {
  var e = E(!0), r = null, i = _r, o = null, a = yr(s);
  t = typeof t == "function" ? t : t === void 0 ? xr : E(t), n = typeof n == "function" ? n : n === void 0 ? br : E(n);
  function s(l) {
    var u, f = (l = wr(l)).length, c, h = !1, g;
    for (r == null && (o = i(g = a())), u = 0; u <= f; ++u)
      !(u < f && e(c = l[u], u, l)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(c, u, l), +n(c, u, l));
    if (g)
      return o = null, g + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : E(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : E(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : E(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (o = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = o = null : o = i(r = l), s) : r;
  }, s;
}
function ll(t, n, e) {
  var r = null, i = E(!0), o = null, a = _r, s = null, l = yr(u);
  t = typeof t == "function" ? t : t === void 0 ? xr : E(+t), n = typeof n == "function" ? n : E(n === void 0 ? 0 : +n), e = typeof e == "function" ? e : e === void 0 ? br : E(+e);
  function u(c) {
    var h, g, m, v = (c = wr(c)).length, T, N = !1, $, x = new Array(v), C = new Array(v);
    for (o == null && (s = a($ = l())), h = 0; h <= v; ++h) {
      if (!(h < v && i(T = c[h], h, c)) === N)
        if (N = !N)
          g = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), m = h - 1; m >= g; --m)
            s.point(x[m], C[m]);
          s.lineEnd(), s.areaEnd();
        }
      N && (x[h] = +t(T, h, c), C[h] = +n(T, h, c), s.point(r ? +r(T, h, c) : x[h], e ? +e(T, h, c) : C[h]));
    }
    if ($)
      return s = null, $ + "" || null;
  }
  function f() {
    return sl().defined(i).curve(a).context(o);
  }
  return u.x = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : E(+c), r = null, u) : t;
  }, u.x0 = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : E(+c), u) : t;
  }, u.x1 = function(c) {
    return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : E(+c), u) : r;
  }, u.y = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : E(+c), e = null, u) : n;
  }, u.y0 = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : E(+c), u) : n;
  }, u.y1 = function(c) {
    return arguments.length ? (e = c == null ? null : typeof c == "function" ? c : E(+c), u) : e;
  }, u.lineX0 = u.lineY0 = function() {
    return f().x(t).y(n);
  }, u.lineY1 = function() {
    return f().x(t).y(e);
  }, u.lineX1 = function() {
    return f().x(r).y(n);
  }, u.defined = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : E(!!c), u) : i;
  }, u.curve = function(c) {
    return arguments.length ? (a = c, o != null && (s = a(o)), u) : a;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? o = s = null : s = a(o = c), u) : o;
  }, u;
}
function Ut(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ut.prototype = {
  constructor: Ut,
  scale: function(t) {
    return t === 1 ? this : new Ut(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ut(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ut.prototype;
class fl {
  constructor(n) {
    this.container = n, this.headers = null, this.data = null, this.paginatedCount = 10, this.currentPage = 1, this.setupTable();
  }
  setPaginatedCount(n) {
    return this.paginatedCount = n, this;
  }
  setHeaders(n) {
    return this.headers = n, this;
  }
  setData(n) {
    return this.data = n, this;
  }
  getCurrentData() {
    if (!this.data)
      throw new Error("Data not set");
    const n = (this.currentPage - 1) * this.paginatedCount, e = n + this.paginatedCount;
    return this.data.slice(n, e);
  }
  setupTable() {
    this.table = document.createElement("table"), this.table.classList.add("border", "border-solid", "rounded-md"), this.table.style.borderCollapse = "separate", this.container.appendChild(this.table);
  }
  buildHeaders() {
    if (!this.headers)
      throw new Error("Headers not set");
    const n = document.createElement("thead");
    n.classList.add("laravel-logger-header");
    let e = '<tr class="bg-gray-100 laravel-logger-header-row">';
    for (let r of this.headers) {
      const i = this.headers.indexOf(r);
      e += `<th data-index="${i}" data-is-descended="${i === 0 ? "true" : "false"}" class="laravel-logger-header-attribute select-none cursor-pointer p-4 text-gray-600 capitalize">${r}</th>`;
    }
    return e += "</tr>", n.innerHTML = e, this.table.appendChild(n), this;
  }
  convertToDateString(n) {
    const e = n.getFullYear();
    let r = n.getMonth() + 1, i = n.getDate();
    const o = (a) => a < 10 ? `0${a}` : a;
    return `${e}-${o(r)}-${o(i)}`;
  }
  buildButtons(n, e) {
    const r = document.createElement("div");
    return r.classList.add("flex", "gap-x-2", "py-4"), r.innerHTML += `<input value="${this.convertToDateString(n)}" type="date" id="laravel-logger-start-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="Start Date"/>`, r.innerHTML += `<input value="${this.convertToDateString(e)}" type="date" id="laravel-logger-end-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="End Date"/>`, r.innerHTML += `<input type="number" id="laravel-logger-offset" class="laravel-logger-input border rounded px-2 py-1" placeholder="Offset"/>
                               <input type="number" id="laravel-logger-limit" class="laravel-logger-input border rounded px-2 py-1" placeholder="Limit"/>`, r.innerHTML += '<button id="laravel-logger-filter" class="px-4 py-2 rounded border bg-indigo-500 text-white">Filter</button>', this.container.prepend(r), this;
  }
  buildChart() {
    const n = [], e = [];
    for (let l of this.data) {
      let u = new Date(l.date).toUTCString();
      if (l.statusCode && l.statusCode >= 200 && l.statusCode < 300) {
        let f = n.filter((c) => c.index === u);
        f.length > 0 ? f[0].count += 1 : n.push({
          index: u,
          date: new Date(u),
          count: 1
        });
      } else {
        let f = e.filter((c) => c.index === u);
        f.length > 0 ? f[0].count += 1 : e.push({
          index: u,
          date: new Date(u),
          count: 1
        });
      }
    }
    const r = 800, i = 400, o = document.createElement("div");
    this.container.appendChild(o);
    const a = Eo(o).append("svg").attr("width", r).attr("height", i).append("g");
    ((l, u, f) => {
      const c = ul().domain(Ir(l, function({ date: g }) {
        return g;
      })).range([0, r]);
      a.append("g").attr("transform", "translate(0," + i + ")").call(Gr(c));
      const h = lr().domain([0, qr(l, function({ count: g }) {
        return +g;
      })]).range([i, 0]);
      a.append("g").call(Jr(h)), a.append("path").datum(l).attr("fill", u).attr("stroke", f).attr("stroke-width", 1.5).attr(
        "d",
        ll().x(function(g) {
          return c(g.date);
        }).y0(h(0)).y1(function(g) {
          return h(g.count);
        })
      );
    })(n, "#cce5df", "#69b3a2");
  }
  buildBody() {
    const n = this.getCurrentData();
    this.table.querySelector("tbody") && this.table.querySelector("tbody").remove();
    const e = document.createElement("tbody");
    e.classList.add("laravel-logger-body", "text-sm");
    for (let r = 0; r < n.length && !(r > this.paginatedCount); r++) {
      let i = n[r], o = document.createElement("tr");
      o.classList.add("laravel-logger-row"), o.setAttribute("data-index", r.toString()), r % 2 === 0 && o.classList.add("bg-gray-200");
      for (let a of Object.keys(i)) {
        let s = this.truncateWords(i[a], 20);
        o.innerHTML += `<td class="px-4 py-3 laravel-logger-attribute" title="${i[a]}">${s}</td>`;
      }
      o.innerHTML += "</tr>", e.appendChild(o);
    }
    return this.table.appendChild(e), this;
  }
  buildFooter() {
    const n = document.createElement("tfoot");
    n.classList.add("laravel-logger-footer", "text-sm");
    let e = `<tr><th>Showing ${this.paginatedCount} of ${this.data.length}</th>`;
    return this.headers.length > 0 && this.data.length > 0 && (e += `<td class="p-4 text-right" colspan="${this.headers.length - 1}">`, e += '<button id="laravel-logger-footer-previous" class="px-4 py-2 rounded border bg-indigo-500 text-white">Previous</button>', e += '<button id="laravel-logger-footer-next" class="px-4 py-2 rounded border bg-indigo-500 text-white">Next</button>', e += "</td>"), e += "</tr>", n.innerHTML = e, this.table.appendChild(n), this;
  }
  paginate(n) {
    n < 1 || n > this.data.length / this.paginatedCount || (this.currentPage = n, this.buildBody());
  }
  sort(n, e = !0) {
    if (!this.data)
      return;
    const r = this.headers[n];
    this.data.sort((i, o) => i[r] > o[r] ? e ? -1 : 1 : i[r] < o[r] ? e ? 1 : -1 : 0), this.buildBody();
  }
  listenEvents() {
    return this.table.querySelectorAll(".laravel-logger-header-attribute").forEach((n) => {
      n.addEventListener("click", (e) => {
        const r = e.target, i = r.getAttribute("data-index");
        if (r.getAttribute("data-is-descended") === "true") {
          r.setAttribute("data-is-descended", "false"), this.sort(parseInt(i), !1);
          return;
        }
        r.setAttribute("data-is-descended", "true"), this.sort(parseInt(i));
      });
    }), this.table.querySelector("#laravel-logger-footer-next").addEventListener("click", (n) => {
      this.paginate(this.currentPage + 1);
    }), this.table.querySelector("#laravel-logger-footer-previous").addEventListener("click", (n) => {
      this.paginate(this.currentPage - 1);
    }), this;
  }
  truncateWords(n, e) {
    return typeof n == "function" && (n = n()), n ? (n = n.toString(), n.length > e ? n.substring(0, e) + "…" : n) : "NA";
  }
}
class cl {
  constructor() {
    this.offset = 0, this.limit = 50, this.endDate = new Date(), this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 7));
  }
  async load() {
    let n = {
      startDate: this.startDate.toUTCString(),
      endDate: this.endDate.toUTCString(),
      limit: this.limit,
      offset: this.offset
    };
    return (await fetch("/laravel-logger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify(n)
    })).json();
  }
  update(n, e, r, i) {
    n && (this.startDate = n), e && (this.endDate = e), r && (this.limit = r), i && (this.offset = i), this.load().then((o) => {
      this.tableBuilder.setData(o).buildBody();
    });
  }
  async build(n, e = !0, r = !0) {
    this.tableBuilder = new fl(n), this.load().then((i) => {
      this.tableBuilder.setHeaders(Object.keys(i[0])).setData(i).buildHeaders().buildBody().buildFooter(), e && this.tableBuilder.buildButtons(this.startDate, this.endDate), r && this.tableBuilder.buildChart(), this.tableBuilder.listenEvents(), document.getElementById("laravel-logger-filter").addEventListener("click", () => {
        const o = document.getElementById("laravel-logger-start-date").value, a = document.getElementById("laravel-logger-end-date").value, s = document.getElementById("laravel-logger-offset").value, l = document.getElementById("laravel-logger-limit").value;
        this.update(new Date(o), new Date(a), parseInt(l), parseInt(s));
      });
    });
  }
}
export {
  cl as default
};
