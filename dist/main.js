(() => {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(e, o) {
    for (var r = 0; r < o.length; r++) {
      var n = o[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(
          e,
          (void 0,
          (i = (function (e, o) {
            if ("object" !== t(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" !== t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(n.key)),
          "symbol" === t(i) ? i : String(i)),
          n
        );
    }
    var i;
  }
  new ((function () {
    function t(e) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.name = e);
    }
    var o, r;
    return (
      (o = t),
      (r = [
        {
          key: "greet",
          value: function () {
            console.log("Hello, ".concat(this.name, "!"));
          },
        },
      ]) && e(o.prototype, r),
      Object.defineProperty(o, "prototype", { writable: !1 }),
      t
    );
  })())("taro").greet();
})();
