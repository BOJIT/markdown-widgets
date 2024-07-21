import { c as t, a, b as d, d as n, t as r, r as o } from "./svelte-GG22ZPw4.js";
const v = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(v);
var l = r('<div><h2 class="svelte-q80lre">Test Tag</h2></div>');
const i = {
  hash: "svelte-q80lre",
  code: `
    h2.svelte-q80lre {
        color: red;
    }
`
};
function c(s) {
  a(s, i);
  var e = l();
  d(e), o(e), n(s, e);
}
customElements.define("my-element", t(c, {}, [], [], !0));
var m = r('<div><h2 class="svelte-11kt1z7">Test Tag 2</h2></div>');
const h = {
  hash: "svelte-11kt1z7",
  code: `
    h2.svelte-11kt1z7 {
        color: blue;
    }
`
};
function w(s) {
  a(s, h);
  var e = m();
  d(e), o(e), n(s, e);
}
t(w, {}, [], [], !0);
export {
  c as CadViewer,
  w as WavedromViewer
};
