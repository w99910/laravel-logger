function zt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ir(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ye(t) {
  let e, n, r;
  t.length !== 2 ? (e = zt, n = (s, l) => zt(t(s), l), r = (s, l) => t(s) - l) : (e = t === zt || t === Ir ? t : Yr, n = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0)
        return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (e(l, l) !== 0)
        return c;
      do {
        const h = u + c >>> 1;
        n(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Yr() {
  return 0;
}
function Rr(t) {
  return t === null ? NaN : +t;
}
const Pr = Ye(zt), Or = Pr.right;
Ye(Rr).center;
const Br = Or;
class je extends Map {
  constructor(e, n = zr) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [r, i] of e)
        this.set(r, i);
  }
  get(e) {
    return super.get(tn(this, e));
  }
  has(e) {
    return super.has(tn(this, e));
  }
  set(e, n) {
    return super.set(qr(this, e), n);
  }
  delete(e) {
    return super.delete(Wr(this, e));
  }
}
function tn({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function qr({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function Wr({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function zr(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Xr = Math.sqrt(50), Vr = Math.sqrt(10), Zr = Math.sqrt(2);
function Gt(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Xr ? 10 : o >= Vr ? 5 : o >= Zr ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(e * u), s / u < t && ++s, l / u > e && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(e / u), s * u < t && ++s, l * u > e && --l), l < s && 0.5 <= n && n < 2 ? Gt(t, e, n * 2) : [s, l, u];
}
function Gr(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const r = e < t, [i, o, a] = r ? Gt(e, t, n) : Gt(t, e, n);
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
function Me(t, e, n) {
  return e = +e, t = +t, n = +n, Gt(t, e, n)[2];
}
function Ce(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Me(e, t, n) : Me(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function en(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Qr(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
function Jr(t) {
  return t;
}
var ge = 1, pe = 2, Te = 3, Dt = 4, nn = 1e-6;
function Kr(t) {
  return "translate(" + t + ",0)";
}
function jr(t) {
  return "translate(0," + t + ")";
}
function ti(t) {
  return (e) => +t(e);
}
function ei(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function ni() {
  return !this.__axis;
}
function Rn(t, e) {
  var n = [], r = null, i = null, o = 6, a = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === ge || t === Dt ? -1 : 1, c = t === Dt || t === pe ? "x" : "y", h = t === ge || t === Te ? Kr : jr;
  function f(d) {
    var p = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), w = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Jr), b = Math.max(o, 0) + s, A = e.range(), S = +A[0] + l, y = +A[A.length - 1] + l, k = (e.bandwidth ? ei : ti)(e.copy(), l), T = d.selection ? d.selection() : d, v = T.selectAll(".domain").data([null]), D = T.selectAll(".tick").data(p, e).order(), O = D.exit(), et = D.enter().append("g").attr("class", "tick"), X = D.select("line"), x = D.select("text");
    v = v.merge(v.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), D = D.merge(et), X = X.merge(et.append("line").attr("stroke", "currentColor").attr(c + "2", u * o)), x = x.merge(et.append("text").attr("fill", "currentColor").attr(c, u * b).attr("dy", t === ge ? "0em" : t === Te ? "0.71em" : "0.32em")), d !== T && (v = v.transition(d), D = D.transition(d), X = X.transition(d), x = x.transition(d), O = O.transition(d).attr("opacity", nn).attr("transform", function(U) {
      return isFinite(U = k(U)) ? h(U + l) : this.getAttribute("transform");
    }), et.attr("opacity", nn).attr("transform", function(U) {
      var N = this.parentNode.__axis;
      return h((N && isFinite(N = N(U)) ? N : k(U)) + l);
    })), O.remove(), v.attr("d", t === Dt || t === pe ? a ? "M" + u * a + "," + S + "H" + l + "V" + y + "H" + u * a : "M" + l + "," + S + "V" + y : a ? "M" + S + "," + u * a + "V" + l + "H" + y + "V" + u * a : "M" + S + "," + l + "H" + y), D.attr("opacity", 1).attr("transform", function(U) {
      return h(k(U) + l);
    }), X.attr(c + "2", u * o), x.attr(c, u * b).text(w), T.filter(ni).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === pe ? "start" : t === Dt ? "end" : "middle"), T.each(function() {
      this.__axis = k;
    });
  }
  return f.scale = function(d) {
    return arguments.length ? (e = d, f) : e;
  }, f.ticks = function() {
    return n = Array.from(arguments), f;
  }, f.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), f) : n.slice();
  }, f.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), f) : r && r.slice();
  }, f.tickFormat = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, f.tickSize = function(d) {
    return arguments.length ? (o = a = +d, f) : o;
  }, f.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, f) : o;
  }, f.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, f) : a;
  }, f.tickPadding = function(d) {
    return arguments.length ? (s = +d, f) : s;
  }, f.offset = function(d) {
    return arguments.length ? (l = +d, f) : l;
  }, f;
}
function rn(t) {
  return Rn(Te, t);
}
function on(t) {
  return Rn(Dt, t);
}
var ri = { value: () => {
} };
function Pn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xt(n);
}
function Xt(t) {
  this._ = t;
}
function ii(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xt.prototype = Pn.prototype = {
  constructor: Xt,
  on: function(t, e) {
    var n = this._, r = ii(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = oi(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        n[i] = an(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = an(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Xt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  }
};
function oi(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function an(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ri, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ke = "http://www.w3.org/1999/xhtml";
const sn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ke,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ue(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), sn.hasOwnProperty(e) ? { space: sn[e], local: t } : t;
}
function ai(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ke && e.documentElement.namespaceURI === ke ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function si(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function On(t) {
  var e = ue(t);
  return (e.local ? si : ai)(e);
}
function ui() {
}
function Re(t) {
  return t == null ? ui : function() {
    return this.querySelector(t);
  };
}
function li(t) {
  typeof t != "function" && (t = Re(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new R(r, this._parents);
}
function ci(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function fi() {
  return [];
}
function Bn(t) {
  return t == null ? fi : function() {
    return this.querySelectorAll(t);
  };
}
function hi(t) {
  return function() {
    return ci(t.apply(this, arguments));
  };
}
function di(t) {
  typeof t == "function" ? t = hi(t) : t = Bn(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new R(r, i);
}
function qn(t) {
  return function() {
    return this.matches(t);
  };
}
function Wn(t) {
  return function(e) {
    return e.matches(t);
  };
}
var gi = Array.prototype.find;
function pi(t) {
  return function() {
    return gi.call(this.children, t);
  };
}
function mi() {
  return this.firstElementChild;
}
function yi(t) {
  return this.select(t == null ? mi : pi(typeof t == "function" ? t : Wn(t)));
}
var vi = Array.prototype.filter;
function wi() {
  return Array.from(this.children);
}
function xi(t) {
  return function() {
    return vi.call(this.children, t);
  };
}
function _i(t) {
  return this.selectAll(t == null ? wi : xi(typeof t == "function" ? t : Wn(t)));
}
function bi(t) {
  typeof t != "function" && (t = qn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new R(r, this._parents);
}
function zn(t) {
  return new Array(t.length);
}
function Mi() {
  return new R(this._enter || this._groups.map(zn), this._parents);
}
function Qt(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Qt.prototype = {
  constructor: Qt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ci(t) {
  return function() {
    return t;
  };
}
function Ti(t, e, n, r, i, o) {
  for (var a = 0, s, l = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new Qt(t, o[a]);
  for (; a < l; ++a)
    (s = e[a]) && (i[a] = s);
}
function ki(t, e, n, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = e.length, h = o.length, f = new Array(c), d;
  for (s = 0; s < c; ++s)
    (l = e[s]) && (f[s] = d = a.call(l, l.__data__, s, e) + "", u.has(d) ? i[s] = l : u.set(d, l));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (l = u.get(d)) ? (r[s] = l, l.__data__ = o[s], u.delete(d)) : n[s] = new Qt(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = e[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Si(t) {
  return t.__data__;
}
function Ai(t, e) {
  if (!arguments.length)
    return Array.from(this, Si);
  var n = e ? ki : Ti, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ci(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, d = Di(t.call(c, c && c.__data__, u, r)), p = d.length, w = s[u] = new Array(p), b = a[u] = new Array(p), A = l[u] = new Array(f);
    n(c, h, w, b, A, d, e);
    for (var S = 0, y = 0, k, T; S < p; ++S)
      if (k = w[S]) {
        for (S >= y && (y = S + 1); !(T = b[y]) && ++y < p; )
          ;
        k._next = T || null;
      }
  }
  return a = new R(a, r), a._enter = s, a._exit = l, a;
}
function Di(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function $i() {
  return new R(this._exit || this._groups.map(zn), this._parents);
}
function Ni(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Ei(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = s[l] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || c[p]) && (f[p] = d);
  for (; l < i; ++l)
    s[l] = n[l];
  return new R(s, this._parents);
}
function Ui() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Fi(t) {
  t || (t = Li);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(e);
  }
  return new R(i, this._parents).order();
}
function Li(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Hi() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ii() {
  return Array.from(this);
}
function Yi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Ri() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Pi() {
  return !this.node();
}
function Oi(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Bi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qi(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wi(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function zi(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Xi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Vi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Zi(t, e) {
  var n = ue(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? qi : Bi : typeof e == "function" ? n.local ? Vi : Xi : n.local ? zi : Wi)(n, e));
}
function Xn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Gi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qi(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ji(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Ki(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Gi : typeof e == "function" ? Ji : Qi)(t, e, n ?? "")) : xt(this.node(), t);
}
function xt(t, e) {
  return t.style.getPropertyValue(e) || Xn(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ji(t) {
  return function() {
    delete this[t];
  };
}
function to(t, e) {
  return function() {
    this[t] = e;
  };
}
function eo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function no(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ji : typeof e == "function" ? eo : to)(t, e)) : this.node()[t];
}
function Vn(t) {
  return t.trim().split(/^|\s+/);
}
function Pe(t) {
  return t.classList || new Zn(t);
}
function Zn(t) {
  this._node = t, this._names = Vn(t.getAttribute("class") || "");
}
Zn.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Gn(t, e) {
  for (var n = Pe(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function Qn(t, e) {
  for (var n = Pe(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function ro(t) {
  return function() {
    Gn(this, t);
  };
}
function io(t) {
  return function() {
    Qn(this, t);
  };
}
function oo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Gn : Qn)(this, t);
  };
}
function ao(t, e) {
  var n = Vn(t + "");
  if (arguments.length < 2) {
    for (var r = Pe(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? oo : e ? ro : io)(n, e));
}
function so() {
  this.textContent = "";
}
function uo(t) {
  return function() {
    this.textContent = t;
  };
}
function lo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function co(t) {
  return arguments.length ? this.each(t == null ? so : (typeof t == "function" ? lo : uo)(t)) : this.node().textContent;
}
function fo() {
  this.innerHTML = "";
}
function ho(t) {
  return function() {
    this.innerHTML = t;
  };
}
function go(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function po(t) {
  return arguments.length ? this.each(t == null ? fo : (typeof t == "function" ? go : ho)(t)) : this.node().innerHTML;
}
function mo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yo() {
  return this.each(mo);
}
function vo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wo() {
  return this.each(vo);
}
function xo(t) {
  var e = typeof t == "function" ? t : On(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function _o() {
  return null;
}
function bo(t, e) {
  var n = typeof t == "function" ? t : On(t), r = e == null ? _o : typeof e == "function" ? e : Re(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Co() {
  return this.each(Mo);
}
function To() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ko() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function So(t) {
  return this.select(t ? ko : To);
}
function Ao(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Do(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function $o(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function No(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Eo(t, e, n) {
  return function() {
    var r = this.__on, i, o = Do(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Uo(t, e, n) {
  var r = $o(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? Eo : No, i = 0; i < o; ++i)
    this.each(s(r[i], e, n));
  return this;
}
function Jn(t, e, n) {
  var r = Xn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Fo(t, e) {
  return function() {
    return Jn(this, t, e);
  };
}
function Lo(t, e) {
  return function() {
    return Jn(this, t, e.apply(this, arguments));
  };
}
function Ho(t, e) {
  return this.each((typeof e == "function" ? Lo : Fo)(t, e));
}
function* Io() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Kn = [null];
function R(t, e) {
  this._groups = t, this._parents = e;
}
function Ht() {
  return new R([[document.documentElement]], Kn);
}
function Yo() {
  return this;
}
R.prototype = Ht.prototype = {
  constructor: R,
  select: li,
  selectAll: di,
  selectChild: yi,
  selectChildren: _i,
  filter: bi,
  data: Ai,
  enter: Mi,
  exit: $i,
  join: Ni,
  merge: Ei,
  selection: Yo,
  order: Ui,
  sort: Fi,
  call: Hi,
  nodes: Ii,
  node: Yi,
  size: Ri,
  empty: Pi,
  each: Oi,
  attr: Zi,
  style: Ki,
  property: no,
  classed: ao,
  text: co,
  html: po,
  raise: yo,
  lower: wo,
  append: xo,
  insert: bo,
  remove: Co,
  clone: So,
  datum: Ao,
  on: Uo,
  dispatch: Ho,
  [Symbol.iterator]: Io
};
function Pt(t) {
  return typeof t == "string" ? new R([[document.querySelector(t)]], [document.documentElement]) : new R([[t]], Kn);
}
function Oe(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function jn(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function It() {
}
var Ut = 0.7, Jt = 1 / Ut, wt = "\\s*([+-]?\\d+)\\s*", Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ro = /^#([0-9a-f]{3,8})$/, Po = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), Oo = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), Bo = new RegExp(`^rgba\\(${wt},${wt},${wt},${Ft}\\)$`), qo = new RegExp(`^rgba\\(${V},${V},${V},${Ft}\\)$`), Wo = new RegExp(`^hsl\\(${Ft},${V},${V}\\)$`), zo = new RegExp(`^hsla\\(${Ft},${V},${V},${Ft}\\)$`), un = {
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
Oe(It, st, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ln,
  // Deprecated! Use color.formatHex.
  formatHex: ln,
  formatHex8: Xo,
  formatHsl: Vo,
  formatRgb: cn,
  toString: cn
});
function ln() {
  return this.rgb().formatHex();
}
function Xo() {
  return this.rgb().formatHex8();
}
function Vo() {
  return tr(this).formatHsl();
}
function cn() {
  return this.rgb().formatRgb();
}
function st(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ro.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? fn(e) : n === 3 ? new H(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ot(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ot(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Po.exec(t)) ? new H(e[1], e[2], e[3], 1) : (e = Oo.exec(t)) ? new H(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Bo.exec(t)) ? Ot(e[1], e[2], e[3], e[4]) : (e = qo.exec(t)) ? Ot(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Wo.exec(t)) ? gn(e[1], e[2] / 100, e[3] / 100, 1) : (e = zo.exec(t)) ? gn(e[1], e[2] / 100, e[3] / 100, e[4]) : un.hasOwnProperty(t) ? fn(un[t]) : t === "transparent" ? new H(NaN, NaN, NaN, 0) : null;
}
function fn(t) {
  return new H(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ot(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new H(t, e, n, r);
}
function Zo(t) {
  return t instanceof It || (t = st(t)), t ? (t = t.rgb(), new H(t.r, t.g, t.b, t.opacity)) : new H();
}
function Se(t, e, n, r) {
  return arguments.length === 1 ? Zo(t) : new H(t, e, n, r ?? 1);
}
function H(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Oe(H, Se, jn(It, {
  brighter(t) {
    return t = t == null ? Jt : Math.pow(Jt, t), new H(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new H(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new H(at(this.r), at(this.g), at(this.b), Kt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: hn,
  // Deprecated! Use color.formatHex.
  formatHex: hn,
  formatHex8: Go,
  formatRgb: dn,
  toString: dn
}));
function hn() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}`;
}
function Go() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}${ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dn() {
  const t = Kt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${at(this.r)}, ${at(this.g)}, ${at(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Kt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function at(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ot(t) {
  return t = at(t), (t < 16 ? "0" : "") + t.toString(16);
}
function gn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new W(t, e, n, r);
}
function tr(t) {
  if (t instanceof W)
    return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof It || (t = st(t)), !t)
    return new W();
  if (t instanceof W)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new W(a, s, l, t.opacity);
}
function Qo(t, e, n, r) {
  return arguments.length === 1 ? tr(t) : new W(t, e, n, r ?? 1);
}
function W(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Oe(W, Qo, jn(It, {
  brighter(t) {
    return t = t == null ? Jt : Math.pow(Jt, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new H(
      me(t >= 240 ? t - 240 : t + 120, i, r),
      me(t, i, r),
      me(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(pn(this.h), Bt(this.s), Bt(this.l), Kt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Kt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${pn(this.h)}, ${Bt(this.s) * 100}%, ${Bt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function pn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Bt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function me(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Be = (t) => () => t;
function Jo(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ko(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function jo(t) {
  return (t = +t) == 1 ? er : function(e, n) {
    return n - e ? Ko(e, n, t) : Be(isNaN(e) ? n : e);
  };
}
function er(t, e) {
  var n = e - t;
  return n ? Jo(t, n) : Be(isNaN(t) ? e : t);
}
const jt = function t(e) {
  var n = jo(e);
  function r(i, o) {
    var a = n((i = Se(i)).r, (o = Se(o)).r), s = n(i.g, o.g), l = n(i.b, o.b), u = er(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ta(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function ea(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function na(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a)
    i[a] = le(t[a], e[a]);
  for (; a < n; ++a)
    o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function ra(t, e) {
  var n = new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function q(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function ia(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = le(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n)
      r[i] = n[i](o);
    return r;
  };
}
var Ae = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ye = new RegExp(Ae.source, "g");
function oa(t) {
  return function() {
    return t;
  };
}
function aa(t) {
  return function(e) {
    return t(e) + "";
  };
}
function nr(t, e) {
  var n = Ae.lastIndex = ye.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", e = e + ""; (r = Ae.exec(t)) && (i = ye.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: q(r, i) })), n = ye.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? aa(l[0].x) : oa(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c)
      s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function le(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Be(e) : (n === "number" ? q : n === "string" ? (r = st(e)) ? (e = r, jt) : nr : e instanceof st ? jt : e instanceof Date ? ra : ea(e) ? ta : Array.isArray(e) ? na : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? ia : q)(t, e);
}
function sa(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var mn = 180 / Math.PI, De = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function rr(t, e, n, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * mn,
    skewX: Math.atan(l) * mn,
    scaleX: a,
    scaleY: s
  };
}
var qt;
function ua(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? De : rr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function la(t) {
  return t == null || (qt || (qt = document.createElementNS("http://www.w3.org/2000/svg", "g")), qt.setAttribute("transform", t), !(t = qt.transform.baseVal.consolidate())) ? De : (t = t.matrix, rr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ir(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, d, p) {
    if (u !== h || c !== f) {
      var w = d.push("translate(", null, e, null, n);
      p.push({ i: w - 4, x: q(u, h) }, { i: w - 2, x: q(c, f) });
    } else
      (h || f) && d.push("translate(" + h + e + f + n);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: q(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: q(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, d, p) {
    if (u !== h || c !== f) {
      var w = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: w - 4, x: q(u, h) }, { i: w - 2, x: q(c, f) });
    } else
      (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(d) {
      for (var p = -1, w = f.length, b; ++p < w; )
        h[(b = f[p]).i] = b.x(d);
      return h.join("");
    };
  };
}
var ca = ir(ua, "px, ", "px)", "deg)"), fa = ir(la, ", ", ")", ")"), _t = 0, $t = 0, Tt = 0, or = 1e3, te, Nt, ee = 0, ut = 0, ce = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, ar = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function qe() {
  return ut || (ar(ha), ut = Lt.now() + ce);
}
function ha() {
  ut = 0;
}
function ne() {
  this._call = this._time = this._next = null;
}
ne.prototype = sr.prototype = {
  constructor: ne,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? qe() : +n) + (e == null ? 0 : +e), !this._next && Nt !== this && (Nt ? Nt._next = this : te = this, Nt = this), this._call = t, this._time = n, $e();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $e());
  }
};
function sr(t, e, n) {
  var r = new ne();
  return r.restart(t, e, n), r;
}
function da() {
  qe(), ++_t;
  for (var t = te, e; t; )
    (e = ut - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --_t;
}
function yn() {
  ut = (ee = Lt.now()) + ce, _t = $t = 0;
  try {
    da();
  } finally {
    _t = 0, pa(), ut = 0;
  }
}
function ga() {
  var t = Lt.now(), e = t - ee;
  e > or && (ce -= e, ee = t);
}
function pa() {
  for (var t, e = te, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : te = n);
  Nt = t, $e(r);
}
function $e(t) {
  if (!_t) {
    $t && ($t = clearTimeout($t));
    var e = t - ut;
    e > 24 ? (t < 1 / 0 && ($t = setTimeout(yn, t - Lt.now() - ce)), Tt && (Tt = clearInterval(Tt))) : (Tt || (ee = Lt.now(), Tt = setInterval(ga, or)), _t = 1, ar(yn));
  }
}
function vn(t, e, n) {
  var r = new ne();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ma = Pn("start", "end", "cancel", "interrupt"), ya = [], ur = 0, wn = 1, Ne = 2, Vt = 3, xn = 4, Ee = 5, Zt = 6;
function fe(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (n in a)
    return;
  va(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ma,
    tween: ya,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ur
  });
}
function We(t, e) {
  var n = z(t, e);
  if (n.state > ur)
    throw new Error("too late; already scheduled");
  return n;
}
function Z(t, e) {
  var n = z(t, e);
  if (n.state > Vt)
    throw new Error("too late; already running");
  return n;
}
function z(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function va(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = sr(o, 0, n.time);
  function o(u) {
    n.state = wn, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, h, f, d;
    if (n.state !== wn)
      return l();
    for (c in r)
      if (d = r[c], d.name === n.name) {
        if (d.state === Vt)
          return vn(a);
        d.state === xn ? (d.state = Zt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = Zt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (vn(function() {
      n.state === Vt && (n.state = xn, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ne, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ne) {
      for (n.state = Vt, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ee, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Ee && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Zt, n.timer.stop(), delete r[e];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function wa(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Ne && r.state < Ee, r.state = Zt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function xa(t) {
  return this.each(function() {
    wa(this, t);
  });
}
function _a(t, e) {
  var n, r;
  return function() {
    var i = Z(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ba(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var o = Z(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Ma(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = z(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? _a : ba)(n, t, e));
}
function ze(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return z(i, r).value[e];
  };
}
function lr(t, e) {
  var n;
  return (typeof e == "number" ? q : e instanceof st ? jt : (n = st(e)) ? (e = n, jt) : nr)(t, e);
}
function Ca(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ta(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ka(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Sa(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Aa(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function Da(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s)));
  };
}
function $a(t, e) {
  var n = ue(t), r = n === "transform" ? fa : lr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Da : Aa)(n, r, ze(this, "attr." + t, e)) : e == null ? (n.local ? Ta : Ca)(n) : (n.local ? Sa : ka)(n, r, e));
}
function Na(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ea(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Ua(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ea(t, o)), n;
  }
  return i._value = e, i;
}
function Fa(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Na(t, o)), n;
  }
  return i._value = e, i;
}
function La(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = ue(t);
  return this.tween(n, (r.local ? Ua : Fa)(r, e));
}
function Ha(t, e) {
  return function() {
    We(this, t).delay = +e.apply(this, arguments);
  };
}
function Ia(t, e) {
  return e = +e, function() {
    We(this, t).delay = e;
  };
}
function Ya(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ha : Ia)(e, t)) : z(this.node(), e).delay;
}
function Ra(t, e) {
  return function() {
    Z(this, t).duration = +e.apply(this, arguments);
  };
}
function Pa(t, e) {
  return e = +e, function() {
    Z(this, t).duration = e;
  };
}
function Oa(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ra : Pa)(e, t)) : z(this.node(), e).duration;
}
function Ba(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    Z(this, t).ease = e;
  };
}
function qa(t) {
  var e = this._id;
  return arguments.length ? this.each(Ba(e, t)) : z(this.node(), e).ease;
}
function Wa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Z(this, t).ease = n;
  };
}
function za(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Wa(this._id, t));
}
function Xa(t) {
  typeof t != "function" && (t = qn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new K(r, this._parents, this._name, this._id);
}
function Va(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = e[s], u = n[s], c = l.length, h = a[s] = new Array(c), f, d = 0; d < c; ++d)
      (f = l[d] || u[d]) && (h[d] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new K(a, this._parents, this._name, this._id);
}
function Za(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ga(t, e, n) {
  var r, i, o = Za(e) ? We : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function Qa(t, e) {
  var n = this._id;
  return arguments.length < 2 ? z(this.node(), n).on.on(t) : this.each(Ga(n, t, e));
}
function Ja(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Ka() {
  return this.on("end.remove", Ja(this._id));
}
function ja(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Re(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, fe(u[f], e, n, f, u, z(c, n)));
  return new K(o, this._parents, e, n);
}
function ts(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Bn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), d, p = z(c, n), w = 0, b = f.length; w < b; ++w)
          (d = f[w]) && fe(d, e, n, w, f, p);
        o.push(f), a.push(c);
      }
  return new K(o, a, e, n);
}
var es = Ht.prototype.constructor;
function ns() {
  return new es(this._groups, this._parents);
}
function rs(t, e) {
  var n, r, i;
  return function() {
    var o = xt(this, t), a = (this.style.removeProperty(t), xt(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function cr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function is(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = xt(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function os(t, e, n) {
  var r, i, o;
  return function() {
    var a = xt(this, t), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), xt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = e(r = a, s));
  };
}
function as(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var l = Z(this, t), u = l.on, c = l.value[o] == null ? s || (s = cr(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(a, i = c), l.on = r;
  };
}
function ss(t, e, n) {
  var r = (t += "") == "transform" ? ca : lr;
  return e == null ? this.styleTween(t, rs(t, r)).on("end.style." + t, cr(t)) : typeof e == "function" ? this.styleTween(t, os(t, r, ze(this, "style." + t, e))).each(as(this._id, t)) : this.styleTween(t, is(t, r, e), n).on("end.style." + t, null);
}
function us(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ls(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && us(t, a, n)), r;
  }
  return o._value = e, o;
}
function cs(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, ls(t, e, n ?? ""));
}
function fs(t) {
  return function() {
    this.textContent = t;
  };
}
function hs(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function ds(t) {
  return this.tween("text", typeof t == "function" ? hs(ze(this, "text", t)) : fs(t == null ? "" : t + ""));
}
function gs(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function ps(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && gs(i)), e;
  }
  return r._value = t, r;
}
function ms(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, ps(t));
}
function ys() {
  for (var t = this._name, e = this._id, n = fr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = z(l, e);
        fe(l, t, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new K(r, this._parents, t, n);
}
function vs() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = Z(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), u.on = e;
    }), i === 0 && o();
  });
}
var ws = 0;
function K(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function fr() {
  return ++ws;
}
var G = Ht.prototype;
K.prototype = {
  constructor: K,
  select: ja,
  selectAll: ts,
  selectChild: G.selectChild,
  selectChildren: G.selectChildren,
  filter: Xa,
  merge: Va,
  selection: ns,
  transition: ys,
  call: G.call,
  nodes: G.nodes,
  node: G.node,
  size: G.size,
  empty: G.empty,
  each: G.each,
  on: Qa,
  attr: $a,
  attrTween: La,
  style: ss,
  styleTween: cs,
  text: ds,
  textTween: ms,
  remove: Ka,
  tween: Ma,
  delay: Ya,
  duration: Oa,
  ease: qa,
  easeVarying: za,
  end: vs,
  [Symbol.iterator]: G[Symbol.iterator]
};
function xs(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var _s = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xs
};
function bs(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Ms(t) {
  var e, n;
  t instanceof K ? (e = t._id, t = t._name) : (e = fr(), (n = _s).time = qe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && fe(l, t, e, u, a, n || bs(l, e));
  return new K(r, this._parents, t, e);
}
Ht.prototype.interrupt = xa;
Ht.prototype.transition = Ms;
const Ue = Math.PI, Fe = 2 * Ue, it = 1e-6, Cs = Fe - it;
function hr(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Ts(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return hr;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class ks {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? hr : Ts(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0)
      throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - e, u = i - n, c = a - e, h = s - n, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > it)
      if (!(Math.abs(h * l - u * c) > it) || !o)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let d = r - a, p = i - s, w = l * l + u * u, b = d * d + p * p, A = Math.sqrt(w), S = Math.sqrt(f), y = o * Math.tan((Ue - Math.acos((w + f - b) / (2 * A * S))) / 2), k = y / S, T = y / A;
        Math.abs(k - 1) > it && this._append`L${e + k * c},${n + k * h}`, this._append`A${o},${o},0,0,${+(h * d > c * p)},${this._x1 = e + T * l},${this._y1 = n + T * u}`;
      }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0)
      throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = e + s, c = n + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > it || Math.abs(this._y1 - c) > it) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Fe + Fe), f > Cs ? this._append`A${r},${r},0,1,${h},${e - s},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > it && this._append`A${r},${r},0,${+(f >= Ue)},${h},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Ss(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function re(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function bt(t) {
  return t = re(Math.abs(t)), t ? t[1] : NaN;
}
function As(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(n.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Ds(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var $s = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ie(t) {
  if (!(e = $s.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Xe({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ie.prototype = Xe.prototype;
function Xe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Xe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ns(t) {
  t:
    for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
      switch (t[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+t[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var dr;
function Es(t, e) {
  var n = re(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], o = i - (dr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + re(t, Math.max(0, e + o - 1))[0];
}
function _n(t, e) {
  var n = re(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const bn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ss,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => _n(t * 100, e),
  r: _n,
  s: Es,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Mn(t) {
  return t;
}
var Cn = Array.prototype.map, Tn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Us(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Mn : As(Cn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Mn : Ds(Cn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = ie(h);
    var f = h.fill, d = h.align, p = h.sign, w = h.symbol, b = h.zero, A = h.width, S = h.comma, y = h.precision, k = h.trim, T = h.type;
    T === "n" ? (S = !0, T = "g") : bn[T] || (y === void 0 && (y = 12), k = !0, T = "g"), (b || f === "0" && d === "=") && (b = !0, f = "0", d = "=");
    var v = w === "$" ? n : w === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", D = w === "$" ? r : /[%p]/.test(T) ? a : "", O = bn[T], et = /[defgprs%]/.test(T);
    y = y === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function X(x) {
      var U = v, N = D, nt, Rt, ht;
      if (T === "c")
        N = O(x) + N, x = "";
      else {
        x = +x;
        var dt = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? l : O(Math.abs(x), y), k && (x = Ns(x)), dt && +x == 0 && p !== "+" && (dt = !1), U = (dt ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + U, N = (T === "s" ? Tn[8 + dr / 3] : "") + N + (dt && p === "(" ? ")" : ""), et) {
          for (nt = -1, Rt = x.length; ++nt < Rt; )
            if (ht = x.charCodeAt(nt), 48 > ht || ht > 57) {
              N = (ht === 46 ? i + x.slice(nt + 1) : x.slice(nt)) + N, x = x.slice(0, nt);
              break;
            }
        }
      }
      S && !b && (x = e(x, 1 / 0));
      var gt = U.length + x.length + N.length, B = gt < A ? new Array(A - gt + 1).join(f) : "";
      switch (S && b && (x = e(B + x, B.length ? A - N.length : 1 / 0), B = ""), d) {
        case "<":
          x = U + x + N + B;
          break;
        case "=":
          x = U + B + x + N;
          break;
        case "^":
          x = B.slice(0, gt = B.length >> 1) + U + x + N + B.slice(gt);
          break;
        default:
          x = B + U + x + N;
          break;
      }
      return o(x);
    }
    return X.toString = function() {
      return h + "";
    }, X;
  }
  function c(h, f) {
    var d = u((h = ie(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(bt(f) / 3))) * 3, w = Math.pow(10, -p), b = Tn[8 + p / 3];
    return function(A) {
      return d(w * A) + b;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Wt, gr, pr;
Fs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Fs(t) {
  return Wt = Us(t), gr = Wt.format, pr = Wt.formatPrefix, Wt;
}
function Ls(t) {
  return Math.max(0, -bt(Math.abs(t)));
}
function Hs(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bt(e) / 3))) * 3 - bt(Math.abs(t)));
}
function Is(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, bt(e) - bt(t)) + 1;
}
function he(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const kn = Symbol("implicit");
function mr() {
  var t = new je(), e = [], n = [], r = kn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== kn)
        return r;
      t.set(o, a = e.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new je();
    for (const a of o)
      t.has(a) || t.set(a, e.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return mr(e, n).unknown(r);
  }, he.apply(i, arguments), i;
}
function yr() {
  var t = mr().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, o, a, s = !1, l = 0, u = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var f = e().length, d = i < r, p = d ? i : r, w = d ? r : i;
    o = (w - p) / Math.max(1, f - l + u * 2), s && (o = Math.floor(o)), p += (w - p - o * (f - l)) * c, a = o * (1 - l), s && (p = Math.round(p), a = Math.round(a));
    var b = Qr(f).map(function(A) {
      return p + o * A;
    });
    return n(d ? b.reverse() : b);
  }
  return t.domain = function(f) {
    return arguments.length ? (e(f), h()) : e();
  }, t.range = function(f) {
    return arguments.length ? ([r, i] = f, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(f) {
    return [r, i] = f, r = +r, i = +i, s = !0, h();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(f) {
    return arguments.length ? (s = !!f, h()) : s;
  }, t.padding = function(f) {
    return arguments.length ? (l = Math.min(1, u = +f), h()) : l;
  }, t.paddingInner = function(f) {
    return arguments.length ? (l = Math.min(1, f), h()) : l;
  }, t.paddingOuter = function(f) {
    return arguments.length ? (u = +f, h()) : u;
  }, t.align = function(f) {
    return arguments.length ? (c = Math.max(0, Math.min(1, f)), h()) : c;
  }, t.copy = function() {
    return yr(e(), [r, i]).round(s).paddingInner(l).paddingOuter(u).align(c);
  }, he.apply(h(), arguments);
}
function Ys(t) {
  return function() {
    return t;
  };
}
function Rs(t) {
  return +t;
}
var Sn = [0, 1];
function yt(t) {
  return t;
}
function Le(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ys(isNaN(e) ? NaN : 0.5);
}
function Ps(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Os(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Le(i, r), o = n(a, o)) : (r = Le(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function Bs(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Le(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var l = Br(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function vr(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qs() {
  var t = Sn, e = Sn, n = le, r, i, o, a = yt, s, l, u;
  function c() {
    var f = Math.min(t.length, e.length);
    return a !== yt && (a = Ps(t[0], t[f - 1])), s = f > 2 ? Bs : Os, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), q)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Rs), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = sa, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : yt, c()) : a !== yt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, c();
  };
}
function wr() {
  return qs()(yt, yt);
}
function Ws(t, e, n, r) {
  var i = Ce(t, e, n), o;
  switch (r = ie(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = Hs(i, a)) && (r.precision = o), pr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Is(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ls(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return gr(r);
}
function zs(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Gr(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Ws(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = Me(a, s, n), u === l)
        return r[i] = a, r[o] = s, e(r);
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
function He() {
  var t = wr();
  return t.copy = function() {
    return vr(t, He());
  }, he.apply(t, arguments), zs(t);
}
function Xs(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], o = t[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), t[n] = e.floor(i), t[r] = e.ceil(o), t;
}
const ve = new Date(), we = new Date();
function E(t, e, n, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? new Date() : new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), e(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), s = i.ceil(o);
    return o - a < s - o ? a : s;
  }, i.offset = (o, a) => (e(o = new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, s) => {
    const l = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < a) || !(s > 0))
      return l;
    let u;
    do
      l.push(u = new Date(+o)), e(o, s), t(o);
    while (u < o && o < a);
    return l;
  }, i.filter = (o) => E((a) => {
    if (a >= a)
      for (; t(a), !o(a); )
        a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0)
        for (; ++s <= 0; )
          for (; e(a, -1), !o(a); )
            ;
      else
        for (; --s >= 0; )
          for (; e(a, 1), !o(a); )
            ;
  }), n && (i.count = (o, a) => (ve.setTime(+o), we.setTime(+a), t(ve), t(we), Math.floor(n(ve, we))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const oe = E(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
oe.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? E((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : oe);
oe.range;
const Q = 1e3, P = Q * 60, J = P * 60, j = J * 24, Ve = j * 7, An = j * 30, xe = j * 365, vt = E((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * Q);
}, (t, e) => (e - t) / Q, (t) => t.getUTCSeconds());
vt.range;
const Ze = E((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Q);
}, (t, e) => {
  t.setTime(+t + e * P);
}, (t, e) => (e - t) / P, (t) => t.getMinutes());
Ze.range;
const Vs = E((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * P);
}, (t, e) => (e - t) / P, (t) => t.getUTCMinutes());
Vs.range;
const Ge = E((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Q - t.getMinutes() * P);
}, (t, e) => {
  t.setTime(+t + e * J);
}, (t, e) => (e - t) / J, (t) => t.getHours());
Ge.range;
const Zs = E((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * J);
}, (t, e) => (e - t) / J, (t) => t.getUTCHours());
Zs.range;
const Yt = E(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * P) / j,
  (t) => t.getDate() - 1
);
Yt.range;
const Qe = E((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / j, (t) => t.getUTCDate() - 1);
Qe.range;
const Gs = E((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / j, (t) => Math.floor(t / j));
Gs.range;
function ct(t) {
  return E((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * P) / Ve);
}
const de = ct(0), ae = ct(1), Qs = ct(2), Js = ct(3), Mt = ct(4), Ks = ct(5), js = ct(6);
de.range;
ae.range;
Qs.range;
Js.range;
Mt.range;
Ks.range;
js.range;
function ft(t) {
  return E((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / Ve);
}
const xr = ft(0), se = ft(1), tu = ft(2), eu = ft(3), Ct = ft(4), nu = ft(5), ru = ft(6);
xr.range;
se.range;
tu.range;
eu.range;
Ct.range;
nu.range;
ru.range;
const Je = E((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Je.range;
const iu = E((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
iu.range;
const tt = E((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
tt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : E((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
tt.range;
const lt = E((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
lt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : E((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
lt.range;
function ou(t, e, n, r, i, o) {
  const a = [
    [vt, 1, Q],
    [vt, 5, 5 * Q],
    [vt, 15, 15 * Q],
    [vt, 30, 30 * Q],
    [o, 1, P],
    [o, 5, 5 * P],
    [o, 15, 15 * P],
    [o, 30, 30 * P],
    [i, 1, J],
    [i, 3, 3 * J],
    [i, 6, 6 * J],
    [i, 12, 12 * J],
    [r, 1, j],
    [r, 2, 2 * j],
    [n, 1, Ve],
    [e, 1, An],
    [e, 3, 3 * An],
    [t, 1, xe]
  ];
  function s(u, c, h) {
    const f = c < u;
    f && ([u, c] = [c, u]);
    const d = h && typeof h.range == "function" ? h : l(u, c, h), p = d ? d.range(u, +c + 1) : [];
    return f ? p.reverse() : p;
  }
  function l(u, c, h) {
    const f = Math.abs(c - u) / h, d = Ye(([, , b]) => b).right(a, f);
    if (d === a.length)
      return t.every(Ce(u / xe, c / xe, h));
    if (d === 0)
      return oe.every(Math.max(Ce(u, c, h), 1));
    const [p, w] = a[f / a[d - 1][2] < a[d][2] / f ? d - 1 : d];
    return p.every(w);
  }
  return [s, l];
}
const [au, su] = ou(tt, Je, de, Yt, Ge, Ze);
function _e(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function be(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function kt(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function uu(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, l = t.shortMonths, u = St(i), c = At(i), h = St(o), f = At(o), d = St(a), p = At(a), w = St(s), b = At(s), A = St(l), S = At(l), y = {
    a: dt,
    A: gt,
    b: B,
    B: Ar,
    c: null,
    d: Fn,
    e: Fn,
    f: Nu,
    g: Ou,
    G: qu,
    H: Au,
    I: Du,
    j: $u,
    L: _r,
    m: Eu,
    M: Uu,
    p: Dr,
    q: $r,
    Q: In,
    s: Yn,
    S: Fu,
    u: Lu,
    U: Hu,
    V: Iu,
    w: Yu,
    W: Ru,
    x: null,
    X: null,
    y: Pu,
    Y: Bu,
    Z: Wu,
    "%": Hn
  }, k = {
    a: Nr,
    A: Er,
    b: Ur,
    B: Fr,
    c: null,
    d: Ln,
    e: Ln,
    f: Zu,
    g: il,
    G: al,
    H: zu,
    I: Xu,
    j: Vu,
    L: Mr,
    m: Gu,
    M: Qu,
    p: Lr,
    q: Hr,
    Q: In,
    s: Yn,
    S: Ju,
    u: Ku,
    U: ju,
    V: tl,
    w: el,
    W: nl,
    x: null,
    X: null,
    y: rl,
    Y: ol,
    Z: sl,
    "%": Hn
  }, T = {
    a: X,
    A: x,
    b: U,
    B: N,
    c: nt,
    d: En,
    e: En,
    f: Cu,
    g: Nn,
    G: $n,
    H: Un,
    I: Un,
    j: xu,
    L: Mu,
    m: wu,
    M: _u,
    p: et,
    q: vu,
    Q: ku,
    s: Su,
    S: bu,
    u: du,
    U: gu,
    V: pu,
    w: hu,
    W: mu,
    x: Rt,
    X: ht,
    y: Nn,
    Y: $n,
    Z: yu,
    "%": Tu
  };
  y.x = v(n, y), y.X = v(r, y), y.c = v(e, y), k.x = v(n, k), k.X = v(r, k), k.c = v(e, k);
  function v(m, _) {
    return function(M) {
      var g = [], L = -1, $ = 0, I = m.length, Y, rt, Ke;
      for (M instanceof Date || (M = new Date(+M)); ++L < I; )
        m.charCodeAt(L) === 37 && (g.push(m.slice($, L)), (rt = Dn[Y = m.charAt(++L)]) != null ? Y = m.charAt(++L) : rt = Y === "e" ? " " : "0", (Ke = _[Y]) && (Y = Ke(M, rt)), g.push(Y), $ = L + 1);
      return g.push(m.slice($, L)), g.join("");
    };
  }
  function D(m, _) {
    return function(M) {
      var g = kt(1900, void 0, 1), L = O(g, m, M += "", 0), $, I;
      if (L != M.length)
        return null;
      if ("Q" in g)
        return new Date(g.Q);
      if ("s" in g)
        return new Date(g.s * 1e3 + ("L" in g ? g.L : 0));
      if (_ && !("Z" in g) && (g.Z = 0), "p" in g && (g.H = g.H % 12 + g.p * 12), g.m === void 0 && (g.m = "q" in g ? g.q : 0), "V" in g) {
        if (g.V < 1 || g.V > 53)
          return null;
        "w" in g || (g.w = 1), "Z" in g ? ($ = be(kt(g.y, 0, 1)), I = $.getUTCDay(), $ = I > 4 || I === 0 ? se.ceil($) : se($), $ = Qe.offset($, (g.V - 1) * 7), g.y = $.getUTCFullYear(), g.m = $.getUTCMonth(), g.d = $.getUTCDate() + (g.w + 6) % 7) : ($ = _e(kt(g.y, 0, 1)), I = $.getDay(), $ = I > 4 || I === 0 ? ae.ceil($) : ae($), $ = Yt.offset($, (g.V - 1) * 7), g.y = $.getFullYear(), g.m = $.getMonth(), g.d = $.getDate() + (g.w + 6) % 7);
      } else
        ("W" in g || "U" in g) && ("w" in g || (g.w = "u" in g ? g.u % 7 : "W" in g ? 1 : 0), I = "Z" in g ? be(kt(g.y, 0, 1)).getUTCDay() : _e(kt(g.y, 0, 1)).getDay(), g.m = 0, g.d = "W" in g ? (g.w + 6) % 7 + g.W * 7 - (I + 5) % 7 : g.w + g.U * 7 - (I + 6) % 7);
      return "Z" in g ? (g.H += g.Z / 100 | 0, g.M += g.Z % 100, be(g)) : _e(g);
    };
  }
  function O(m, _, M, g) {
    for (var L = 0, $ = _.length, I = M.length, Y, rt; L < $; ) {
      if (g >= I)
        return -1;
      if (Y = _.charCodeAt(L++), Y === 37) {
        if (Y = _.charAt(L++), rt = T[Y in Dn ? _.charAt(L++) : Y], !rt || (g = rt(m, M, g)) < 0)
          return -1;
      } else if (Y != M.charCodeAt(g++))
        return -1;
    }
    return g;
  }
  function et(m, _, M) {
    var g = u.exec(_.slice(M));
    return g ? (m.p = c.get(g[0].toLowerCase()), M + g[0].length) : -1;
  }
  function X(m, _, M) {
    var g = d.exec(_.slice(M));
    return g ? (m.w = p.get(g[0].toLowerCase()), M + g[0].length) : -1;
  }
  function x(m, _, M) {
    var g = h.exec(_.slice(M));
    return g ? (m.w = f.get(g[0].toLowerCase()), M + g[0].length) : -1;
  }
  function U(m, _, M) {
    var g = A.exec(_.slice(M));
    return g ? (m.m = S.get(g[0].toLowerCase()), M + g[0].length) : -1;
  }
  function N(m, _, M) {
    var g = w.exec(_.slice(M));
    return g ? (m.m = b.get(g[0].toLowerCase()), M + g[0].length) : -1;
  }
  function nt(m, _, M) {
    return O(m, e, _, M);
  }
  function Rt(m, _, M) {
    return O(m, n, _, M);
  }
  function ht(m, _, M) {
    return O(m, r, _, M);
  }
  function dt(m) {
    return a[m.getDay()];
  }
  function gt(m) {
    return o[m.getDay()];
  }
  function B(m) {
    return l[m.getMonth()];
  }
  function Ar(m) {
    return s[m.getMonth()];
  }
  function Dr(m) {
    return i[+(m.getHours() >= 12)];
  }
  function $r(m) {
    return 1 + ~~(m.getMonth() / 3);
  }
  function Nr(m) {
    return a[m.getUTCDay()];
  }
  function Er(m) {
    return o[m.getUTCDay()];
  }
  function Ur(m) {
    return l[m.getUTCMonth()];
  }
  function Fr(m) {
    return s[m.getUTCMonth()];
  }
  function Lr(m) {
    return i[+(m.getUTCHours() >= 12)];
  }
  function Hr(m) {
    return 1 + ~~(m.getUTCMonth() / 3);
  }
  return {
    format: function(m) {
      var _ = v(m += "", y);
      return _.toString = function() {
        return m;
      }, _;
    },
    parse: function(m) {
      var _ = D(m += "", !1);
      return _.toString = function() {
        return m;
      }, _;
    },
    utcFormat: function(m) {
      var _ = v(m += "", k);
      return _.toString = function() {
        return m;
      }, _;
    },
    utcParse: function(m) {
      var _ = D(m += "", !0);
      return _.toString = function() {
        return m;
      }, _;
    }
  };
}
var Dn = { "-": "", _: " ", 0: "0" }, F = /^\s*\d+/, lu = /^%/, cu = /[\\^$*+?|[\]().{}]/g;
function C(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
}
function fu(t) {
  return t.replace(cu, "\\$&");
}
function St(t) {
  return new RegExp("^(?:" + t.map(fu).join("|") + ")", "i");
}
function At(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function hu(t, e, n) {
  var r = F.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function du(t, e, n) {
  var r = F.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function gu(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function pu(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function mu(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function $n(t, e, n) {
  var r = F.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Nn(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function yu(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function vu(t, e, n) {
  var r = F.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function wu(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function En(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function xu(t, e, n) {
  var r = F.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Un(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function _u(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function bu(t, e, n) {
  var r = F.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Mu(t, e, n) {
  var r = F.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Cu(t, e, n) {
  var r = F.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Tu(t, e, n) {
  var r = lu.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function ku(t, e, n) {
  var r = F.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Su(t, e, n) {
  var r = F.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Fn(t, e) {
  return C(t.getDate(), e, 2);
}
function Au(t, e) {
  return C(t.getHours(), e, 2);
}
function Du(t, e) {
  return C(t.getHours() % 12 || 12, e, 2);
}
function $u(t, e) {
  return C(1 + Yt.count(tt(t), t), e, 3);
}
function _r(t, e) {
  return C(t.getMilliseconds(), e, 3);
}
function Nu(t, e) {
  return _r(t, e) + "000";
}
function Eu(t, e) {
  return C(t.getMonth() + 1, e, 2);
}
function Uu(t, e) {
  return C(t.getMinutes(), e, 2);
}
function Fu(t, e) {
  return C(t.getSeconds(), e, 2);
}
function Lu(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Hu(t, e) {
  return C(de.count(tt(t) - 1, t), e, 2);
}
function br(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? Mt(t) : Mt.ceil(t);
}
function Iu(t, e) {
  return t = br(t), C(Mt.count(tt(t), t) + (tt(t).getDay() === 4), e, 2);
}
function Yu(t) {
  return t.getDay();
}
function Ru(t, e) {
  return C(ae.count(tt(t) - 1, t), e, 2);
}
function Pu(t, e) {
  return C(t.getFullYear() % 100, e, 2);
}
function Ou(t, e) {
  return t = br(t), C(t.getFullYear() % 100, e, 2);
}
function Bu(t, e) {
  return C(t.getFullYear() % 1e4, e, 4);
}
function qu(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? Mt(t) : Mt.ceil(t), C(t.getFullYear() % 1e4, e, 4);
}
function Wu(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + C(e / 60 | 0, "0", 2) + C(e % 60, "0", 2);
}
function Ln(t, e) {
  return C(t.getUTCDate(), e, 2);
}
function zu(t, e) {
  return C(t.getUTCHours(), e, 2);
}
function Xu(t, e) {
  return C(t.getUTCHours() % 12 || 12, e, 2);
}
function Vu(t, e) {
  return C(1 + Qe.count(lt(t), t), e, 3);
}
function Mr(t, e) {
  return C(t.getUTCMilliseconds(), e, 3);
}
function Zu(t, e) {
  return Mr(t, e) + "000";
}
function Gu(t, e) {
  return C(t.getUTCMonth() + 1, e, 2);
}
function Qu(t, e) {
  return C(t.getUTCMinutes(), e, 2);
}
function Ju(t, e) {
  return C(t.getUTCSeconds(), e, 2);
}
function Ku(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function ju(t, e) {
  return C(xr.count(lt(t) - 1, t), e, 2);
}
function Cr(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Ct(t) : Ct.ceil(t);
}
function tl(t, e) {
  return t = Cr(t), C(Ct.count(lt(t), t) + (lt(t).getUTCDay() === 4), e, 2);
}
function el(t) {
  return t.getUTCDay();
}
function nl(t, e) {
  return C(se.count(lt(t) - 1, t), e, 2);
}
function rl(t, e) {
  return C(t.getUTCFullYear() % 100, e, 2);
}
function il(t, e) {
  return t = Cr(t), C(t.getUTCFullYear() % 100, e, 2);
}
function ol(t, e) {
  return C(t.getUTCFullYear() % 1e4, e, 4);
}
function al(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Ct(t) : Ct.ceil(t), C(t.getUTCFullYear() % 1e4, e, 4);
}
function sl() {
  return "+0000";
}
function Hn() {
  return "%";
}
function In(t) {
  return +t;
}
function Yn(t) {
  return Math.floor(+t / 1e3);
}
var pt, Tr;
ul({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ul(t) {
  return pt = uu(t), Tr = pt.format, pt.parse, pt.utcFormat, pt.utcParse, pt;
}
function ll(t) {
  return new Date(t);
}
function cl(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function kr(t, e, n, r, i, o, a, s, l, u) {
  var c = wr(), h = c.invert, f = c.domain, d = u(".%L"), p = u(":%S"), w = u("%I:%M"), b = u("%I %p"), A = u("%a %d"), S = u("%b %d"), y = u("%B"), k = u("%Y");
  function T(v) {
    return (l(v) < v ? d : s(v) < v ? p : a(v) < v ? w : o(v) < v ? b : r(v) < v ? i(v) < v ? A : S : n(v) < v ? y : k)(v);
  }
  return c.invert = function(v) {
    return new Date(h(v));
  }, c.domain = function(v) {
    return arguments.length ? f(Array.from(v, cl)) : f().map(ll);
  }, c.ticks = function(v) {
    var D = f();
    return t(D[0], D[D.length - 1], v ?? 10);
  }, c.tickFormat = function(v, D) {
    return D == null ? T : u(D);
  }, c.nice = function(v) {
    var D = f();
    return (!v || typeof v.range != "function") && (v = e(D[0], D[D.length - 1], v ?? 10)), v ? f(Xs(D, v)) : c;
  }, c.copy = function() {
    return vr(c, kr(t, e, n, r, i, o, a, s, l, u));
  }, c;
}
function fl() {
  return he.apply(kr(au, su, tt, Je, de, Yt, Ge, Ze, vt, Tr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function mt(t) {
  return function() {
    return t;
  };
}
function hl(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length)
      return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new ks(e);
}
function dl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Sr(t) {
  this._context = t;
}
Sr.prototype = {
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function gl(t) {
  return new Sr(t);
}
function pl(t) {
  return t[0];
}
function ml(t) {
  return t[1];
}
function yl(t, e) {
  var n = mt(!0), r = null, i = gl, o = null, a = hl(s);
  t = typeof t == "function" ? t : t === void 0 ? pl : mt(t), e = typeof e == "function" ? e : e === void 0 ? ml : mt(e);
  function s(l) {
    var u, c = (l = dl(l)).length, h, f = !1, d;
    for (r == null && (o = i(d = a())), u = 0; u <= c; ++u)
      !(u < c && n(h = l[u], u, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(h, u, l), +e(h, u, l));
    if (d)
      return o = null, d + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : mt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : mt(+l), s) : e;
  }, s.defined = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : mt(!!l), s) : n;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (o = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = o = null : o = i(r = l), s) : r;
  }, s;
}
function Et(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Et.prototype = {
  constructor: Et,
  scale: function(t) {
    return t === 1 ? this : new Et(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Et(this.k, this.x + this.k * t, this.y + this.k * e);
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
Et.prototype;
var vl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ie = {}, wl = {
  get exports() {
    return Ie;
  },
  set exports(t) {
    Ie = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(vl, function() {
    var n = function() {
      function r(d) {
        return a.appendChild(d.dom), d;
      }
      function i(d) {
        for (var p = 0; p < a.children.length; p++)
          a.children[p].style.display = p === d ? "block" : "none";
        o = d;
      }
      var o = 0, a = document.createElement("div");
      a.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", a.addEventListener("click", function(d) {
        d.preventDefault(), i(++o % a.children.length);
      }, !1);
      var s = (performance || Date).now(), l = s, u = 0, c = r(new n.Panel("FPS", "#0ff", "#002")), h = r(new n.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var f = r(new n.Panel("MB", "#f08", "#201"));
      return i(0), { REVISION: 16, dom: a, addPanel: r, showPanel: i, begin: function() {
        s = (performance || Date).now();
      }, end: function() {
        u++;
        var d = (performance || Date).now();
        if (h.update(d - s, 200), d > l + 1e3 && (c.update(1e3 * u / (d - l), 100), l = d, u = 0, f)) {
          var p = performance.memory;
          f.update(p.usedJSHeapSize / 1048576, p.jsHeapSizeLimit / 1048576);
        }
        return d;
      }, update: function() {
        s = this.end();
      }, domElement: a, setMode: i };
    };
    return n.Panel = function(r, i, o) {
      var a = 1 / 0, s = 0, l = Math.round, u = l(window.devicePixelRatio || 1), c = 80 * u, h = 48 * u, f = 3 * u, d = 2 * u, p = 3 * u, w = 15 * u, b = 74 * u, A = 30 * u, S = document.createElement("canvas");
      S.width = c, S.height = h, S.style.cssText = "width:80px;height:48px";
      var y = S.getContext("2d");
      return y.font = "bold " + 9 * u + "px Helvetica,Arial,sans-serif", y.textBaseline = "top", y.fillStyle = o, y.fillRect(0, 0, c, h), y.fillStyle = i, y.fillText(r, f, d), y.fillRect(p, w, b, A), y.fillStyle = o, y.globalAlpha = 0.9, y.fillRect(p, w, b, A), { dom: S, update: function(k, T) {
        a = Math.min(a, k), s = Math.max(s, k), y.fillStyle = o, y.globalAlpha = 1, y.fillRect(0, 0, c, w), y.fillStyle = i, y.fillText(l(k) + " " + r + " (" + l(a) + "-" + l(s) + ")", f, d), y.drawImage(S, p + u, w, b - u, A, p, w, b - u, A), y.fillRect(p + b - u, w, u, A), y.fillStyle = o, y.globalAlpha = 0.9, y.fillRect(p + b - u, w, u, l((1 - k / T) * A));
      } };
    }, n;
  });
})(wl);
function xl(t, e) {
  if (typeof e != "function")
    throw new Error("Wrong callback in endall");
  t.size() === 0 && e();
  let n;
  t.on("end", function() {
    n && clearTimeout(n), n = setTimeout(() => {
      e();
    }, 300);
  });
}
class _l {
  constructor(e) {
    this.container = e, this.options = {
      margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
      gap: 10,
      fillColor: null,
      textColor: null,
      strokeColor: null,
      colors: null,
      fromColor: null,
      toColor: null,
      orientation: "vertical",
      animation: {
        enabled: !0,
        duration: 1e3
      },
      debug: !1,
      reverse: !1,
      tooltip: !0,
      legend: !0
    }, this.afterBuildCallbacks = [], this.beforeBuildCallbacks = [], this._svg = null, this.onEndAnimationCallbacks = [];
    const n = Object.getPrototypeOf(this), r = this;
    Object.getOwnPropertyNames(n).forEach((i) => {
      if (i === "build") {
        const o = n[i];
        n[i] = function() {
          return r.beforeBuildCallbacks.forEach((a) => {
            a();
          }), o.apply(this, arguments), r.afterBuildCallbacks.forEach((a) => {
            a();
          }), r.svg.transition().call(xl, () => {
            r.onEndAnimationCallbacks.forEach((a) => {
              a();
            });
          }), this;
        };
      }
    });
  }
  stroke(e) {
    return this.options.strokeColor = e, this;
  }
  colors(e, n) {
    return Array.isArray(e) ? this.options.colors = e : (this.options.fromColor = e, this.options.toColor = n), this;
  }
  /**
   * @param data ChartData[] or number of colors to be returned
   * @protected
   */
  getColors(e = null) {
    if (this.options.colors)
      return this.options.colors;
    const n = le(this.options.fromColor ?? "red", this.options.toColor ?? "blue");
    let r;
    if (typeof e == "number") {
      r = [];
      for (let i = 0; i <= e; i++)
        r.push(i);
    } else
      r = e ?? this._data;
    return r.map((i, o) => n(o / this._data.length));
  }
  beforeBuild(e) {
    return this.beforeBuildCallbacks.push(e), this;
  }
  afterBuild(e) {
    return this.afterBuildCallbacks.push(e), this;
  }
  onEndAnimation(e) {
    return this.onEndAnimationCallbacks.push(e), this;
  }
  enableDebug() {
    let e = new Ie();
    e.showPanel(0), document.querySelector("body").appendChild(e.dom);
  }
  gap(e) {
    return this.options.gap = e, this;
  }
  data(e) {
    return this._data = e, this;
  }
  sortData(e = !0) {
    console.log(this._data.sort((n, r) => n.value > r.value ? -1 : n.value < r.value ? 1 : 0));
  }
  update(e) {
    if (document.body.contains(this.svg.node()))
      return this._data = e, Pt(this.container).select(".axis-x").selectChildren("g").remove(), Pt(this.container).select(".axis-y").selectChildren("g").remove(), this.build();
  }
  getScaleY(e) {
    return He().domain([0, en(e, function(n) {
      return +n.value;
    })]).range([this.height, 0]).nice();
  }
  getScaleX(e) {
    if (e.length === 0)
      throw new Error("No data provided");
    let n;
    e[0].name instanceof Date && (n = "time"), typeof e[0].name == "string" && (n = "band"), typeof e[0].name == "number" && (n = "linear");
    let r;
    const i = this.options.orientation === "vertical" ? [0, this.width] : [this.height, 0];
    switch (n) {
      case "time":
        e = e.sort((o, a) => o.name.getTime() - a.name.getTime()), r = fl().domain([e[0].name, e[e.length - 1].name]).range(i).nice();
        break;
      case "band":
        r = yr().range(i).domain(e.map(function(o) {
          return o.name;
        })).padding(0.4);
        break;
      case "linear":
        r = He().domain([0, en(e, function(o) {
          return +o.name;
        })]).range(i).nice();
    }
    return r;
  }
  buildAxisLeft(e = null) {
    const n = this.getScaleY(e ?? this._data);
    let r = this.svg.select(".axis-y");
    return r.empty() && (r = this.svg.append("g").attr("class", "axis-y")), r.call(this.options.reverse ? rn(n) : on(n)), n;
  }
  buildAxisBottom(e = null) {
    const n = this.getScaleX(e ?? this._data), r = this.options.reverse ? on(n) : rn(n);
    let i = this.svg.select(".axis-x");
    return i.empty() && (i = this.svg.append("g").attr("class", "axis-x").attr("transform", "translate(0," + this.height + ")")), i.call(r), n;
  }
  get svg() {
    return this._svg || (this._svg = Pt(this.container).append("svg").attr("width", this.width + this.options.margin.left + this.options.margin.right).attr("height", this.height + this.options.margin.top + this.options.margin.bottom).append("g").attr("class", "main-group").attr(
      "transform",
      "translate(" + this.options.margin.left + "," + this.options.margin.top + ")"
    )), this._svg;
  }
  get width() {
    return this.container.getBoundingClientRect().width - this.options.margin.left - this.options.margin.right;
  }
  get height() {
    return this.container.getBoundingClientRect().height - this.options.margin.top - this.options.margin.bottom;
  }
  margin(e = {}) {
    for (let n of Object.keys(e))
      this.options.margin[n] = e[n];
    return this;
  }
  reverse() {
    return this.options.reverse = !0, this;
  }
  pretty() {
    let e = this.container.querySelector("g.axis-x"), n = this.container.querySelector("g.axis-y");
    e.querySelector("path.domain").setAttribute("stroke", "0"), n.querySelector("path.domain").setAttribute("stroke", "0"), this.options.orientation === "vertical" ? (n.querySelectorAll(".tick line").forEach((r) => {
      r.setAttribute("x2", this.width.toString()), r.setAttribute("stroke", "lightgrey");
    }), e.querySelectorAll(".tick line").forEach((r) => {
      r.remove();
    })) : (e.querySelectorAll(".tick line").forEach((r) => {
      r.setAttribute("y2", this.height.toString());
    }), n.querySelectorAll(".tick line").forEach((r) => {
      r.remove();
    }));
  }
  enableAnimation(e) {
    return e && (this.options.animation.duration = e), this.options.animation.enabled = !0, this;
  }
  disableAnimation() {
    return this.options.animation.enabled = !1, this;
  }
  tooltip(e) {
    return this.options.tooltip = e, this;
  }
  buildTooltip(e, n, r = {}) {
    const i = Pt(this.svg.node().parentElement.parentElement).append("div").attr("class", "tooltip").style("opacity", 0).style("position", "fixed").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "2px").style("font-size", "12px").style("z-index", "1000").style("pointer-events", "none");
    for (let o of Object.keys(r)) {
      const a = (s) => s.replace(/([A-Z])/g, (l) => `-${l[0].toLowerCase()}`);
      i.style(a(o), r[o]);
    }
    this.svg.selectAll(e).on("mouseover", function(o, a) {
      i.transition().duration(100).style("opacity", 1).style("left", o.pageX + 2 + "px").style("top", o.pageY + 2 + "px").text(n(a));
    }).on("mouseout", function(o, a) {
      i.transition().duration(100).style("opacity", 0);
    });
  }
  legend(e) {
    return this.options.legend = e, this;
  }
  buildLegends(e, n) {
    e.forEach((r, i) => {
      const o = this.svg.append("g").attr("class", "legend").attr("transform", `translate(${this.width - 100 + i * 60}, ${this.options.margin.top})`);
      o.append("rect").attr("width", 10).attr("height", 10).attr("fill", n[i]), o.append("text").attr("x", 15).attr("y", 10).text(r.name);
    });
  }
  rotateLabels(e = !0, n = !0) {
    return e && this.svg.selectAll(".axis-x text").attr("transform", "rotate(-45)").style("text-anchor", "end"), n && this.svg.selectAll(".axis-y text").attr("transform", "rotate(-45)").style("text-anchor", "end"), this;
  }
}
class bl extends _l {
  constructor() {
    super(...arguments), this.showPointIndicator = !1, this.pointRadius = 3;
  }
  enablePointIndicator(e = null) {
    return e && (this.pointRadius = e), this.showPointIndicator = !0, this;
  }
  build() {
    const e = this.buildAxisBottom(), n = this.buildAxisLeft();
    this.showPointIndicator && this.svg.selectAll("circle.point").data(this._data).join(
      (o) => {
        o = o.append("circle").attr("class", "point").attr("cx", function(a) {
          return e(a.name);
        }).attr("cy", function(a) {
          return n(a.value);
        }).attr("r", this.pointRadius).attr("fill", this.options.strokeColor ?? "#72aaff").attr("stroke", "white"), this.options.animation.enabled && o.attr("clip-path", "url(#clip)");
      },
      (o) => {
        this.options.animation.enabled && (o = o.transition().duration(this.options.animation.duration)), o.attr("cx", function(a) {
          return e(a.name);
        }).attr("cy", function(a) {
          return n(a.value);
        });
      },
      (o) => {
        o.transition().duration(this.options.animation.duration).attr("r", 20);
      }
    );
    let r = this.svg.select("path.line");
    const i = yl().x(function(o) {
      return e(o.name);
    }).y(function(o) {
      return n(o.value);
    });
    return r.empty() ? (r = this.svg.append("path").attr("fill", "none").attr("class", "line").attr("stroke", this.options.strokeColor ?? "#72aaff").attr("stroke-width", 1.5).attr("clip-path", "url(#clip)").attr("d", i(this._data)), this.options.animation.enabled && (r.attr("stroke-dasharray", function() {
      return this.getTotalLength();
    }).attr("stroke-dashoffset", function() {
      return this.getTotalLength();
    }).transition().duration(this.options.animation.duration).attr("stroke-dashoffset", 0), this.svg.append("clipPath").attr("id", "clip").append("rect").attr("width", 0).attr("height", this.height).transition().duration(this.options.animation.duration).attr("width", this.width))) : (this.options.animation.enabled && (r = r.transition().duration(this.options.animation.duration)), r.attr("d", i(this._data))), this;
  }
}
class Ml {
  constructor(e) {
    this.container = e, this.headers = null, this.data = null, this.paginatedCount = 10, this.currentPage = 1, this.setupTable();
  }
  setPaginatedCount(e) {
    return this.paginatedCount = e, this;
  }
  setHeaders(e) {
    return this.headers = e, this;
  }
  setData(e) {
    return this.data = e, this;
  }
  getCurrentData() {
    if (!this.data)
      throw new Error("Data not set");
    const e = (this.currentPage - 1) * this.paginatedCount, n = e + this.paginatedCount;
    return this.data.slice(e, n);
  }
  setupTable() {
    this.table = document.createElement("table"), this.table.classList.add("border", "border-solid", "rounded-md"), this.table.style.borderCollapse = "separate", this.container.appendChild(this.table);
  }
  buildHeaders() {
    if (!this.headers)
      throw new Error("Headers not set");
    const e = document.createElement("thead");
    e.classList.add("laravel-logger-header");
    let n = '<tr class="bg-gray-100 laravel-logger-header-row">';
    for (let r of this.headers) {
      const i = this.headers.indexOf(r);
      n += `<th data-index="${i}" data-is-descended="${i === 0 ? "true" : "false"}" class="laravel-logger-header-attribute select-none cursor-pointer p-4 text-gray-600 capitalize">${r}</th>`;
    }
    return n += "</tr>", e.innerHTML = n, this.table.appendChild(e), this;
  }
  convertToDateString(e) {
    const n = e.getFullYear();
    let r = e.getMonth() + 1, i = e.getDate();
    const o = (a) => a < 10 ? `0${a}` : a;
    return `${n}-${o(r)}-${o(i)}`;
  }
  buildButtons(e, n) {
    const r = document.createElement("div");
    return r.classList.add("flex", "gap-x-2", "py-4"), r.innerHTML += `<input value="${this.convertToDateString(e)}" type="date" id="laravel-logger-start-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="Start Date"/>`, r.innerHTML += `<input value="${this.convertToDateString(n)}" type="date" id="laravel-logger-end-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="End Date"/>`, r.innerHTML += `<input type="number" id="laravel-logger-offset" class="laravel-logger-input border rounded px-2 py-1" placeholder="Offset"/>
                               <input type="number" id="laravel-logger-limit" class="laravel-logger-input border rounded px-2 py-1" placeholder="Limit"/>`, r.innerHTML += '<button id="laravel-logger-filter" class="px-4 py-2 rounded border bg-indigo-500 text-white">Filter</button>', this.container.prepend(r), this;
  }
  buildChart() {
    const e = [], n = [];
    for (let s of this.data) {
      let l = new Date(s.date).toUTCString();
      if (s.statusCode && s.statusCode >= 200 && s.statusCode < 300) {
        let u = e.filter((c) => c.name === l);
        u.length > 0 ? u[0].count += 1 : e.push({
          name: l,
          date: new Date(l),
          value: 1
        });
      } else {
        let u = n.filter((c) => c.name === l);
        u.length > 0 ? u[0].value += 1 : n.push({
          name: l,
          date: new Date(l),
          value: 1
        });
      }
    }
    const r = 800, i = 400, o = document.createElement("div");
    o.style.width = `${r}px`, o.style.height = `${i}px`, this.container.appendChild(o), new bl(o).data(e).build().pretty();
  }
  buildBody() {
    const e = this.getCurrentData();
    this.table.querySelector("tbody") && this.table.querySelector("tbody").remove();
    const n = document.createElement("tbody");
    n.classList.add("laravel-logger-body", "text-sm");
    for (let r = 0; r < e.length && !(r > this.paginatedCount); r++) {
      let i = e[r], o = document.createElement("tr");
      o.classList.add("laravel-logger-row"), o.setAttribute("data-index", r.toString()), r % 2 === 0 && o.classList.add("bg-gray-200");
      for (let a of Object.keys(i)) {
        let s = this.truncateWords(i[a], 20);
        o.innerHTML += `<td class="px-4 py-3 laravel-logger-attribute" title="${i[a]}">${s}</td>`;
      }
      o.innerHTML += "</tr>", n.appendChild(o);
    }
    return this.table.appendChild(n), this;
  }
  buildFooter() {
    const e = document.createElement("tfoot");
    e.classList.add("laravel-logger-footer", "text-sm");
    let n = `<tr><th>Showing ${this.paginatedCount} of ${this.data.length}</th>`;
    return this.headers.length > 0 && this.data.length > 0 && (n += `<td class="p-4 text-right" colspan="${this.headers.length - 1}">`, n += '<button id="laravel-logger-footer-previous" class="px-4 py-2 rounded border bg-indigo-500 text-white">Previous</button>', n += '<button id="laravel-logger-footer-next" class="px-4 py-2 rounded border bg-indigo-500 text-white">Next</button>', n += "</td>"), n += "</tr>", e.innerHTML = n, this.table.appendChild(e), this;
  }
  paginate(e) {
    e < 1 || e > this.data.length / this.paginatedCount || (this.currentPage = e, this.buildBody());
  }
  sort(e, n = !0) {
    if (!this.data)
      return;
    const r = this.headers[e];
    this.data.sort((i, o) => i[r] > o[r] ? n ? -1 : 1 : i[r] < o[r] ? n ? 1 : -1 : 0), this.buildBody();
  }
  listenEvents() {
    return this.table.querySelectorAll(".laravel-logger-header-attribute").forEach((e) => {
      e.addEventListener("click", (n) => {
        const r = n.target, i = r.getAttribute("data-index");
        if (r.getAttribute("data-is-descended") === "true") {
          r.setAttribute("data-is-descended", "false"), this.sort(parseInt(i), !1);
          return;
        }
        r.setAttribute("data-is-descended", "true"), this.sort(parseInt(i));
      });
    }), this.table.querySelector("#laravel-logger-footer-next").addEventListener("click", (e) => {
      this.paginate(this.currentPage + 1);
    }), this.table.querySelector("#laravel-logger-footer-previous").addEventListener("click", (e) => {
      this.paginate(this.currentPage - 1);
    }), this;
  }
  truncateWords(e, n) {
    return typeof e == "function" && (e = e()), e ? (e = e.toString(), e.length > n ? e.substring(0, n) + "…" : e) : "NA";
  }
}
class Cl {
  constructor() {
    this.offset = 0, this.limit = 50, this.endDate = new Date(), this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 7));
  }
  async load() {
    let e = {
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
      body: JSON.stringify(e)
    })).json();
  }
  update(e, n, r, i) {
    e && (this.startDate = e), n && (this.endDate = n), r && (this.limit = r), i && (this.offset = i), this.load().then((o) => {
      this.tableBuilder.setData(o).buildBody();
    });
  }
  async build(e, n = !0, r = !0) {
    this.tableBuilder = new Ml(e), this.load().then((i) => {
      this.tableBuilder.setHeaders(Object.keys(i[0])).setData(i).buildHeaders().buildBody().buildFooter(), n && this.tableBuilder.buildButtons(this.startDate, this.endDate), r && this.tableBuilder.buildChart(), this.tableBuilder.listenEvents(), document.getElementById("laravel-logger-filter").addEventListener("click", () => {
        const o = document.getElementById("laravel-logger-start-date").value, a = document.getElementById("laravel-logger-end-date").value, s = document.getElementById("laravel-logger-offset").value, l = document.getElementById("laravel-logger-limit").value;
        this.update(new Date(o), new Date(a), parseInt(l), parseInt(s));
      });
    });
  }
}
export {
  Cl as default
};
