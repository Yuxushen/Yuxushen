/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /gh/weilining/jsdelivr@master/jquery/circlemagic/circlemagic.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !function (t) {
    t.fn.circleMagic = function (a) {
        var e, o, n, r, i = !0, d = [],
            c = t.extend({
                color: "rgba(255,255,255,.5)",
                radius: 10, 
                density: .3,
                clearOffset: .2
            }, a),
            h = this[0]; function l() {
                i = !(document.body.scrollTop > o)
            } function s() {
                e = h.clientWidth,
                    o = h.clientHeight, h.height = o + "px",
                    n.width = e, n.height = o
            } function f() {
                if (i) for (var t in r.clearRect(0, 0, e, o), d) d[t].draw(); requestAnimationFrame(f)
            } function m() {
                var t = this; function a() {
                    t.pos.x = Math.random() * e, t.pos.y = o + 100 * Math.random(),
                        t.alpha = .1 + Math.random() * c.clearOffset, t.scale = .1 + .3 * Math.random(),
                        t.speed = Math.random(), "random" === c.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(255 * Math.random()) + ", " + Math.floor(255 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = c.color
                } t.pos = {},
                    a(), this.draw = function () {
                        t.alpha <= 0 && a(),
                            t.pos.y -= t.speed, t.alpha -= 5e-4,
                            r.beginPath(),
                            r.arc(t.pos.x, t.pos.y, t.scale * c.radius, 0, 2 * Math.PI, !1),
                            r.fillStyle = t.color, r.fill(), r.closePath()
                    }
            } !function () {
                e = h.offsetWidth, 
                o = h.offsetHeight,
                 t = document.createElement("canvas"),
                  t.id = "canvas", h.appendChild(t),
                   t.parentElement.style.overflow = "hidden",
                    (n = document.getElementById("canvas")).width = e,
                     n.height = o, r = n.getContext("2d");
                      var t; 
                      for (var a = 0; a < e * c.density; a++) {
                           var i = new m; d.push(i) 
                        } 
                           f()
            }(), window.addEventListener("scroll", l, !1), window.addEventListener("resize", s, !1)
    }
}(jQuery);