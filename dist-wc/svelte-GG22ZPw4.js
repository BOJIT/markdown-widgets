var zt = Object.defineProperty;
var dt = (t) => {
  throw TypeError(t);
};
var Gt = (t, n, e) => n in t ? zt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var y = (t, n, e) => Gt(t, typeof n != "symbol" ? n + "" : n, e), vt = (t, n, e) => n.has(t) || dt("Cannot " + e);
var v = (t, n, e) => (vt(t, n, "read from private field"), e ? e.call(t) : n.get(t)), et = (t, n, e) => n.has(t) ? dt("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e), rt = (t, n, e, u) => (vt(t, n, "write to private field"), u ? u.call(t, e) : n.set(t, e), e);
const Qt = "[", Xt = "]", st = {}, Zt = ["touchstart", "touchmove", "touchend"];
let k = !1;
function B(t) {
  k = t;
}
let g;
function Tt(t) {
  return g = t;
}
function Ct() {
  return g = /** @type {TemplateNode} */
  g.nextSibling;
}
function Hn(t) {
  k && (g = t);
}
const P = 2, kt = 4, ft = 8, tn = 16, N = 32, at = 64, I = 128, J = 256, x = 512, O = 1024, L = 2048, Nt = 4096, M = 8192, nn = 16384, en = 1 << 18;
var rn = Array.isArray, sn = Array.from, V = Object.keys, z = Object.defineProperty;
function un(t) {
  for (var n = 0; n < t.length; n++)
    t[n]();
}
let G = !1, ut = [];
function St() {
  G = !1;
  const t = ut.slice();
  ut = [], un(t);
}
function ln(t) {
  G || (G = !0, queueMicrotask(St)), ut.push(t);
}
function on() {
  G && St();
}
function fn(t) {
  console.warn("hydration_mismatch");
}
function an(t) {
  return t === this.v;
}
function cn(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function hn(t) {
  return !cn(t, this.v);
}
function _n() {
  throw new Error("effect_update_depth_exceeded");
}
function $n() {
  throw new Error("hydration_failed");
}
function dn() {
  throw new Error("state_unsafe_mutation");
}
// @__NO_SIDE_EFFECTS__
function Ot(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: an,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function vn(t) {
  var e;
  const n = /* @__PURE__ */ Ot(t);
  return n.equals = hn, d !== null && d.l !== null && ((e = d.l).s ?? (e.s = [])).push(n), n;
}
function mn(t, n) {
  return w !== null && lt() && w.f & P && dn(), t.equals(n) || (t.v = n, t.version = Mt(), Rt(t, O), lt() && c !== null && c.f & x && !(c.f & N) && (_ !== null && _.includes(t) ? (b(c, O), Z(c)) : C === null ? wn([t]) : C.push(t))), n;
}
function Rt(t, n) {
  var e = t.reactions;
  if (e !== null)
    for (var u = lt(), r = e.length, s = 0; s < r; s++) {
      var l = e[s], i = l.f;
      i & O || !u && l === c || (b(l, n), i & (x | I) && (i & P ? Rt(
        /** @type {import('#client').Derived} */
        l,
        L
      ) : Z(
        /** @type {import('#client').Effect} */
        l
      )));
    }
}
function At(t) {
  ct(t);
  var n = t.deriveds;
  if (n !== null) {
    t.deriveds = null;
    for (var e = 0; e < n.length; e += 1)
      pn(n[e]);
  }
}
function Dt(t) {
  At(t);
  var n = Ft(t), e = (A || t.f & I) && t.deps !== null ? L : x;
  b(t, e), t.equals(n) || (t.v = n, t.version = Mt());
}
function pn(t) {
  At(t), X(t, 0), b(t, M), t.first = t.last = t.deps = t.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  t.fn = null;
}
const qt = 0, En = 1;
let K = qt, F = !1, D = !1;
function mt(t) {
  D = t;
}
let S = [], q = 0, w = null;
function pt(t) {
  w = t;
}
let c = null, _ = null, $ = 0, C = null;
function wn(t) {
  C = t;
}
let Lt = 0, A = !1, d = null;
function Mt() {
  return Lt++;
}
function lt() {
  return d !== null && d.l === null;
}
function Q(t) {
  var l, i;
  var n = t.f;
  if (n & O)
    return !0;
  if (n & L) {
    var e = t.deps;
    if (e !== null) {
      var u = (n & I) !== 0, r;
      if (n & J) {
        for (r = 0; r < e.length; r++)
          ((l = e[r]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= J;
      }
      for (r = 0; r < e.length; r++) {
        var s = e[r];
        if (Q(
          /** @type {import('#client').Derived} */
          s
        ) && Dt(
          /** @type {import('#client').Derived} */
          s
        ), s.version > t.version)
          return !0;
        u && !A && !((i = s == null ? void 0 : s.reactions) != null && i.includes(t)) && (s.reactions ?? (s.reactions = [])).push(t);
      }
    }
    b(t, x);
  }
  return !1;
}
function gn(t, n, e) {
  throw t;
}
function Ft(t) {
  var n = _, e = $, u = C, r = w, s = A;
  _ = /** @type {null | import('#client').Value[]} */
  null, $ = 0, C = null, w = t.f & (N | at) ? null : t, A = !D && (t.f & I) !== 0;
  try {
    var l = (
      /** @type {Function} */
      (0, t.fn)()
    ), i = t.deps;
    if (_ !== null) {
      var o, f;
      if (i !== null) {
        var m = $ === 0 ? _ : i.slice(0, $).concat(_), h = m.length > 16 ? new Set(m) : null;
        for (f = $; f < i.length; f++)
          o = i[f], (h !== null ? !h.has(o) : !m.includes(o)) && Pt(t, o);
      }
      if (i !== null && $ > 0)
        for (i.length = $ + _.length, f = 0; f < _.length; f++)
          i[$ + f] = _[f];
      else
        t.deps = i = _;
      if (!A)
        for (f = $; f < i.length; f++) {
          o = i[f];
          var a = o.reactions;
          a === null ? o.reactions = [t] : a[a.length - 1] !== t && !a.includes(t) && a.push(t);
        }
    } else i !== null && $ < i.length && (X(t, $), i.length = $);
    return l;
  } finally {
    _ = n, $ = e, C = u, w = r, A = s;
  }
}
function Pt(t, n) {
  const e = n.reactions;
  let u = 0;
  if (e !== null) {
    u = e.length - 1;
    const r = e.indexOf(t);
    r !== -1 && (u === 0 ? n.reactions = null : (e[r] = e[u], e.pop()));
  }
  u === 0 && n.f & P && (b(n, L), n.f & (I | J) || (n.f ^= J), X(
    /** @type {import('#client').Derived} **/
    n,
    0
  ));
}
function X(t, n) {
  var e = t.deps;
  if (e !== null)
    for (var u = n === 0 ? null : e.slice(0, n), r = /* @__PURE__ */ new Set(), s = n; s < e.length; s++) {
      var l = e[s];
      r.has(l) || (r.add(l), (u === null || !u.includes(l)) && Pt(t, l));
    }
}
function ct(t, n = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    var u = e.next;
    nt(e, n), e = u;
  }
}
function ht(t) {
  var n = t.f;
  if (!(n & M)) {
    b(t, x);
    var e = t.ctx, u = c, r = d;
    c = t, d = e;
    try {
      n & tn || ct(t), Yt(t);
      var s = Ft(t);
      t.teardown = typeof s == "function" ? s : null, t.version = Lt;
    } catch (l) {
      gn(
        /** @type {Error} */
        l
      );
    } finally {
      c = u, d = r;
    }
  }
}
function It() {
  q > 1e3 && (q = 0, _n()), q++;
}
function Ht(t) {
  var n = t.length;
  if (n !== 0) {
    It();
    var e = D;
    D = !0;
    try {
      for (var u = 0; u < n; u++) {
        var r = t[u];
        if (r.first === null && !(r.f & N))
          Et([r]);
        else {
          var s = [];
          jt(r, s), Et(s);
        }
      }
    } finally {
      D = e;
    }
  }
}
function Et(t) {
  var n = t.length;
  if (n !== 0)
    for (var e = 0; e < n; e++) {
      var u = t[e];
      !(u.f & (M | Nt)) && Q(u) && (ht(u), u.deps === null && u.first === null && u.nodes === null && (u.teardown === null ? Bt(u) : u.fn = null));
    }
}
function yn() {
  if (F = !1, q > 1001)
    return;
  const t = S;
  S = [], Ht(t), F || (q = 0);
}
function Z(t) {
  K === qt && (F || (F = !0, queueMicrotask(yn)));
  for (var n = t; n.parent !== null; ) {
    n = n.parent;
    var e = n.f;
    if (e & N) {
      if (!(e & x)) return;
      b(n, L);
    }
  }
  S.push(n);
}
function jt(t, n) {
  var e = t.first, u = [];
  t: for (; e !== null; ) {
    var r = e.f, s = (r & (M | Nt)) === 0, l = r & N, i = (r & x) !== 0, o = e.first;
    if (s && (!l || !i)) {
      if (l && b(e, x), r & ft) {
        if (!l && Q(e) && (ht(e), o = e.first), o !== null) {
          e = o;
          continue;
        }
      } else if (r & kt)
        if (l || i) {
          if (o !== null) {
            e = o;
            continue;
          }
        } else
          u.push(e);
    }
    var f = e.next;
    if (f === null) {
      let a = e.parent;
      for (; a !== null; ) {
        if (t === a)
          break t;
        var m = a.next;
        if (m !== null) {
          e = m;
          continue t;
        }
        a = a.parent;
      }
    }
    e = f;
  }
  for (var h = 0; h < u.length; h++)
    o = u[h], n.push(o), jt(o, n);
}
function _t(t, n = !0) {
  var e = K, u = S;
  try {
    It();
    const s = [];
    K = En, S = s, F = !1, n && Ht(u);
    var r = t == null ? void 0 : t();
    return on(), (S.length > 0 || s.length > 0) && _t(), q = 0, r;
  } finally {
    K = e, S = u;
  }
}
function wt(t) {
  var n = t.f;
  if (n & M)
    return t.v;
  if (w !== null) {
    var e = w.deps;
    _ === null && e !== null && e[$] === t ? $++ : (e === null || $ === 0 || e[$ - 1] !== t) && (_ === null ? _ = [t] : _[_.length - 1] !== t && _.push(t)), C !== null && c !== null && c.f & x && !(c.f & N) && C.includes(t) && (b(c, O), Z(c));
  }
  if (n & P) {
    var u = (
      /** @type {import('#client').Derived} */
      t
    );
    Q(u) && Dt(u);
  }
  return t.v;
}
const bn = ~(O | L | x);
function b(t, n) {
  t.f = t.f & bn | n;
}
function xn(t, n = !1, e) {
  d = {
    p: d,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  }, n || (d.l = {
    s: null,
    u: null,
    r1: [],
    r2: /* @__PURE__ */ Ot(!1)
  });
}
function Tn(t) {
  const n = d;
  if (n !== null) {
    const u = n.e;
    if (u !== null) {
      n.e = null;
      for (var e = 0; e < u.length; e++)
        kn(u[e]);
    }
    d = n.p, n.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function gt(t, n) {
  var e = n.last;
  e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t);
}
function tt(t, n, e, u = !0) {
  var r = (t & at) !== 0, s = {
    ctx: d,
    deps: null,
    nodes: null,
    f: t | O,
    first: null,
    fn: n,
    last: null,
    next: null,
    parent: r ? null : c,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (e) {
    var l = D;
    try {
      mt(!0), ht(s), s.f |= nn;
    } catch (o) {
      throw nt(s), o;
    } finally {
      mt(l);
    }
  } else n !== null && Z(s);
  var i = e && s.deps === null && s.first === null && s.nodes === null && s.teardown === null;
  return !i && !r && u && (c !== null && gt(s, c), w !== null && w.f & P && gt(s, w)), s;
}
function Cn(t) {
  const n = tt(at, t, !0);
  return () => {
    nt(n);
  };
}
function kn(t) {
  return tt(kt, t, !1);
}
function Nn(t) {
  return tt(ft, t, !0);
}
function Sn(t, n = !0) {
  return tt(ft | N, t, !0, n);
}
function Yt(t) {
  var n = t.teardown;
  if (n !== null) {
    const e = w;
    pt(null);
    try {
      n.call(null);
    } finally {
      pt(e);
    }
  }
}
function nt(t, n = !0) {
  var e = !1;
  if ((n || t.f & en) && t.nodes !== null) {
    for (var u = t.nodes.start, r = t.nodes.end; u !== null; ) {
      var s = u === r ? null : (
        /** @type {import('#client').TemplateNode} */
        u.nextSibling
      );
      u.remove(), u = s;
    }
    e = !0;
  }
  if (ct(t, n && !e), X(t, 0), b(t, M), t.transitions)
    for (const i of t.transitions)
      i.stop();
  Yt(t);
  var l = t.parent;
  l !== null && t.f & N && l.first !== null && Bt(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes = null;
}
function Bt(t) {
  var n = t.parent, e = t.prev, u = t.next;
  e !== null && (e.next = u), u !== null && (u.prev = e), n !== null && (n.first === t && (n.first = u), n.last === t && (n.last = e));
}
var yt;
function Ut() {
  if (yt === void 0) {
    yt = window;
    var t = Element.prototype;
    t.__click = void 0, t.__className = "", t.__attributes = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Kt() {
  return document.createTextNode("");
}
function jn(t) {
  if (!k)
    return t.firstChild;
  var n = (
    /** @type {TemplateNode} */
    g.firstChild
  );
  return n === null && (n = g.appendChild(Kt())), Tt(n), n;
}
function On(t) {
  t.textContent = "";
}
const Rn = /* @__PURE__ */ new Set(), bt = /* @__PURE__ */ new Set();
function U(t) {
  var $t;
  var n = this, e = (
    /** @type {Node} */
    n.ownerDocument
  ), u = t.type, r = (($t = t.composedPath) == null ? void 0 : $t.call(t)) || [], s = (
    /** @type {null | Element} */
    r[0] || t.target
  ), l = 0, i = t.__root;
  if (i) {
    var o = r.indexOf(i);
    if (o !== -1 && (n === document || n === /** @type {any} */
    window)) {
      t.__root = n;
      return;
    }
    var f = r.indexOf(n);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (s = /** @type {Element} */
  r[l] || t.target, s !== n) {
    z(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || e;
      }
    });
    try {
      for (var m, h = []; s !== null; ) {
        var a = s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + u];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (rn(p)) {
              var [H, ...j] = p;
              H.apply(s, [t, ...j]);
            } else
              p.call(s, t);
        } catch (Y) {
          m ? h.push(Y) : m = Y;
        }
        if (t.cancelBubble || a === n || a === null)
          break;
        s = a;
      }
      if (m) {
        for (let Y of h)
          queueMicrotask(() => {
            throw Y;
          });
        throw m;
      }
    } finally {
      t.__root = n, s = n;
    }
  }
}
function An(t) {
  var n = document.createElement("template");
  return n.innerHTML = t, n.content;
}
function it(t, n) {
  c.nodes ?? (c.nodes = { start: t, end: n });
}
// @__NO_SIDE_EFFECTS__
function Yn(t, n) {
  var e = (n & 2) !== 0, u, r = !t.startsWith("<!>");
  return () => {
    if (k)
      return it(g, null), g;
    u || (u = An(r ? t : "<!>" + t), u = /** @type {Node} */
    u.firstChild);
    var s = (
      /** @type {TemplateNode} */
      e ? document.importNode(u, !0) : u.cloneNode(!0)
    );
    return it(s, s), s;
  };
}
function Dn(t, n) {
  if (k) {
    c.nodes.end = g, Ct();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    n
  );
}
function Wt(t, n) {
  const e = n.anchor ?? n.target.appendChild(Kt());
  return _t(() => Jt(t, { ...n, anchor: e }), !1);
}
function qn(t, n) {
  n.intro = n.intro ?? !1;
  const e = n.target, u = k;
  try {
    return _t(() => {
      for (var r = (
        /** @type {import('#client').TemplateNode} */
        e.firstChild
      ); r && (r.nodeType !== 8 || /** @type {Comment} */
      r.data !== Qt); )
        r = /** @type {import('#client').TemplateNode} */
        r.nextSibling;
      if (!r)
        throw st;
      B(!0), Tt(
        /** @type {Comment} */
        r
      ), Ct();
      const s = Jt(t, { ...n, anchor: r });
      if (g.nodeType !== 8 || /** @type {Comment} */
      g.data !== Xt)
        throw fn(), st;
      return B(!1), s;
    }, !1);
  } catch (r) {
    if (r === st)
      return n.recover === !1 && $n(), Ut(), On(e), B(!1), Wt(t, n);
    throw r;
  } finally {
    B(u);
  }
}
const R = /* @__PURE__ */ new Map();
function Jt(t, { target: n, anchor: e, props: u = {}, events: r, context: s, intro: l = !0 }) {
  Ut();
  var i = /* @__PURE__ */ new Set(), o = (h) => {
    for (var a = 0; a < h.length; a++) {
      var p = h[a];
      if (!i.has(p)) {
        i.add(p);
        var H = Zt.includes(p);
        n.addEventListener(p, U, { passive: H });
        var j = R.get(p);
        j === void 0 ? (document.addEventListener(p, U, { passive: H }), R.set(p, 1)) : R.set(p, j + 1);
      }
    }
  };
  o(sn(Rn)), bt.add(o);
  var f = void 0, m = Cn(() => (Sn(() => {
    if (s) {
      xn({});
      var h = (
        /** @type {import('#client').ComponentContext} */
        d
      );
      h.c = s;
    }
    r && (u.$$events = r), k && it(
      /** @type {import('#client').TemplateNode} */
      e,
      null
    ), f = t(e, u) || {}, k && (c.nodes.end = g), s && Tn();
  }), () => {
    for (var h of i) {
      n.removeEventListener(h, U);
      var a = (
        /** @type {number} */
        R.get(h)
      );
      --a === 0 ? (document.removeEventListener(h, U), R.delete(h)) : R.set(h, a);
    }
    bt.delete(o), ot.delete(f);
  }));
  return ot.set(f, m), f;
}
let ot = /* @__PURE__ */ new WeakMap();
function Ln(t) {
  const n = ot.get(t);
  n == null || n();
}
var xt = /* @__PURE__ */ new Set();
function Bn(t, n) {
  {
    if (xt.has(n)) return;
    xt.add(n);
  }
  ln(() => {
    var e = t.getRootNode(), u = (
      /** @type {ShadowRoot} */
      e.host ? (
        /** @type {ShadowRoot} */
        e
      ) : (
        /** @type {Document} */
        e.head ?? /** @type {Document} */
        e.ownerDocument.head
      )
    );
    if (!u.querySelector("#" + n.hash)) {
      const r = document.createElement("style");
      r.id = n.hash, r.textContent = n.code, u.appendChild(r);
    }
  });
}
function Mn(t) {
  return new Fn(t);
}
var T, E;
class Fn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * 	immutable?: boolean;
   * 	hydrate?: boolean;
   * 	recover?: false;
   * }} options
   */
  constructor(n) {
    /** @type {any} */
    et(this, T);
    /** @type {Record<string, any>} */
    et(this, E);
    var e = /* @__PURE__ */ new Map(), u = (s, l) => {
      var i = /* @__PURE__ */ vn(l);
      return e.set(s, i), i;
    };
    const r = new Proxy(
      { ...n.props || {}, $$events: {} },
      {
        get(s, l) {
          return wt(e.get(l) ?? u(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return wt(e.get(l) ?? u(l, Reflect.get(s, l))), Reflect.has(s, l);
        },
        set(s, l, i) {
          return mn(e.get(l) ?? u(l, i), i), Reflect.set(s, l, i);
        }
      }
    );
    rt(this, E, (n.hydrate ? qn : Wt)(n.component, {
      target: n.target,
      props: r,
      context: n.context,
      intro: n.intro ?? !1,
      recover: n.recover
    })), rt(this, T, r.$$events);
    for (const s of Object.keys(v(this, E)))
      s === "$set" || s === "$destroy" || s === "$on" || z(this, s, {
        get() {
          return v(this, E)[s];
        },
        /** @param {any} value */
        set(l) {
          v(this, E)[s] = l;
        },
        enumerable: !0
      });
    v(this, E).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, v(this, E).$destroy = () => {
      Ln(v(this, E));
    };
  }
  /** @param {Record<string, any>} props */
  $set(n) {
    v(this, E).$set(n);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(n, e) {
    v(this, T)[n] = v(this, T)[n] || [];
    const u = (...r) => e.call(this, ...r);
    return v(this, T)[n].push(u), () => {
      v(this, T)[n] = v(this, T)[n].filter(
        /** @param {any} fn */
        (r) => r !== u
      );
    };
  }
  $destroy() {
    v(this, E).$destroy();
  }
}
T = new WeakMap(), E = new WeakMap();
let Vt;
typeof HTMLElement == "function" && (Vt = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(n, e, u) {
    super();
    /** The Svelte component constructor */
    y(this, "$$ctor");
    /** Slots */
    y(this, "$$s");
    /** @type {any} The Svelte component instance */
    y(this, "$$c");
    /** Whether or not the custom element is connected */
    y(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    y(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    y(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    y(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    y(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    y(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    y(this, "$$me");
    this.$$ctor = n, this.$$s = e, u && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(n, e, u) {
    if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(e), this.$$c) {
      const r = this.$$c.$on(n, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(n, e, u);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(n, e, u) {
    if (super.removeEventListener(n, e, u), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(r) {
        return (s) => {
          const l = document.createElement("slot");
          r !== "default" && (l.name = r), Dn(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, u = Pn(this);
      for (const r of this.$$s)
        r in u && (r === "default" && !this.$$d.children ? (this.$$d.children = n(r), e.default = !0) : e[r] = n(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = W(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Mn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Nn(() => {
        var r;
        this.$$r = !0;
        for (const s of V(this.$$c)) {
          if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
          this.$$d[s] = this.$$c[s];
          const l = W(
            s,
            this.$$d[s],
            this.$$p_d,
            "toAttribute"
          );
          l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
        }
        this.$$r = !1;
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const l = this.$$c.$on(r, s);
          this.$$l_u.set(s, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(n, e, u) {
    var r;
    this.$$r || (n = this.$$g_p(n), this.$$d[n] = W(n, u, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [n]: this.$$d[n] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), nt(this.$$me), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(n) {
    return V(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === n || !this.$$p_d[e].attribute && e.toLowerCase() === n
    ) || n;
  }
});
function W(t, n, e, u) {
  var s;
  const r = (s = e[t]) == null ? void 0 : s.type;
  if (n = r === "Boolean" && typeof n != "boolean" ? n != null : n, !u || !e[t])
    return n;
  if (u === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return n == null ? null : JSON.stringify(n);
      case "Boolean":
        return n ? "" : null;
      case "Number":
        return n ?? null;
      default:
        return n;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return n && JSON.parse(n);
      case "Boolean":
        return n;
      case "Number":
        return n != null ? +n : n;
      default:
        return n;
    }
}
function Pn(t) {
  const n = {};
  return t.childNodes.forEach((e) => {
    n[
      /** @type {Element} node */
      e.slot || "default"
    ] = !0;
  }), n;
}
function Un(t, n, e, u, r, s) {
  let l = class extends Vt {
    constructor() {
      super(t, e, r), this.$$p_d = n;
    }
    static get observedAttributes() {
      return V(n).map(
        (i) => (n[i].attribute || i).toLowerCase()
      );
    }
  };
  return V(n).forEach((i) => {
    z(l.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(o) {
        var f;
        o = W(i, o, n), this.$$d[i] = o, (f = this.$$c) == null || f.$set({ [i]: o });
      }
    });
  }), u.forEach((i) => {
    z(l.prototype, i, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[i];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
export {
  Bn as a,
  jn as b,
  Un as c,
  Dn as d,
  Hn as r,
  Yn as t
};
