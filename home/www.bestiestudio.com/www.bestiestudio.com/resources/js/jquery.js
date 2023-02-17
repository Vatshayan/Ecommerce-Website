! function() {
    var e, t = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 120,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0,
            excluded: ""
        },
        o = t,
        a = !1,
        n = !1,
        r = {
            x: 0,
            y: 0
        },
        l = !1,
        i = document.documentElement,
        c = [],
        u = /^Mac/.test(navigator.platform),
        d = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        };
    o = t;

    function s() {
        if (!l && document.body) {
            l = !0;
            var t = document.body,
                r = document.documentElement,
                c = window.innerHeight,
                u = t.scrollHeight;
            if (i = document.compatMode.indexOf("CSS") >= 0 ? r : t, e = t, o.keyboardSupport && z("keydown", b), top != self) n = !0;
            else if (u > c && (t.offsetHeight <= c || r.offsetHeight <= c)) {
                var d, s = document.createElement("div");
                s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + i.scrollHeight + "px", document.body.appendChild(s);
                var m = function() {
                    d || (d = setTimeout(function() {
                        a || (s.style.height = "0", s.style.height = i.scrollHeight + "px", d = null)
                    }, 500))
                };
                setTimeout(m, 10);
                if (new N(m).observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), i.offsetHeight <= c) {
                    var f = document.createElement("div");
                    f.style.clear = "both", t.appendChild(f)
                }
            }
            o.fixedBackground || a || (t.style.backgroundAttachment = "scroll", r.style.backgroundAttachment = "scroll")
        }
    }
    var m = [],
        f = !1,
        h = Date.now();

    function p(e, t, a) {
        var n, l;
        if (l = a, n = (n = t) > 0 ? 1 : -1, l = l > 0 ? 1 : -1, (r.x !== n || r.y !== l) && (r.x = n, r.y = l, m = [], h = 0), 1 != o.accelerationMax) {
            var i = Date.now() - h;
            if (i < o.accelerationDelta) {
                var c = (1 + 50 / i) / 2;
                c > 1 && (c = Math.min(c, o.accelerationMax), t *= c, a *= c)
            }
            h = Date.now()
        }
        if (m.push({
                x: t,
                y: a,
                lastX: t < 0 ? .99 : -.99,
                lastY: a < 0 ? .99 : -.99,
                start: Date.now()
            }), !f) {
            var u = e === document.body,
                d = function(n) {
                    for (var r = Date.now(), l = 0, i = 0, c = 0; c < m.length; c++) {
                        var s = m[c],
                            h = r - s.start,
                            p = h >= o.animationTime,
                            w = p ? 1 : h / o.animationTime;
                        o.pulseAlgorithm && (w = R(w));
                        var b = s.x * w - s.lastX >> 0,
                            v = s.y * w - s.lastY >> 0;
                        l += b, i += v, s.lastX += b, s.lastY += v, p && (m.splice(c, 1), c--)
                    }
                    u ? window.scrollBy(l, i) : (l && (e.scrollLeft += l), i && (e.scrollTop += i)), t || a || (m = []), m.length ? K(d, e, 1e3 / o.frameRate +
                        1) : f = !1
                };
            K(d, e, 0), f = !0
        }
    }

    function w(t) {
        l || s();
        var a = t.target,
            n = T(a);
        if (!n || t.defaultPrevented || t.ctrlKey) return !0;
        if (X(e, "embed") || X(a, "embed") && /\.pdf/i.test(a.src) || X(e, "object")) return !0;
        var r = -t.wheelDeltaX || t.deltaX || 0,
            i = -t.wheelDeltaY || t.deltaY || 0;
        if (u && (t.wheelDeltaX && Y(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && Y(t.wheelDeltaY, 120) && (i =
                t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), r || i || (i = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, i *= 40), !o.touchpadSupport &&
            function(e) {
                if (!e) return;
                c.length || (c = [e, e, e]);
                return e = Math.abs(e), c.push(e), c.shift(), clearTimeout(S), S = setTimeout(function() {
                    window.localStorage && (localStorage.SS_deltaBuffer = c.join(","))
                }, 1e3), !B(120) && !B(100)
            }(i)) return !0;
        Math.abs(r) > 1.2 && (r *= o.stepSize / 120), Math.abs(i) > 1.2 && (i *= o.stepSize / 120), p(n, r, i), t.preventDefault(), k()
    }

    function b(t) {
        var a = t.target,
            n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== d.spacebar;
        document.contains(e) || (e = document.activeElement);
        var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (/^(textarea|select|embed|object)$/i.test(a.nodeName) || X(a, "input") && !r.test(a.type) || X(e, "video") || function(e) {
                var t = e.target,
                    o = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do {
                        if (o = t.classList && t.classList.contains("html5-video-controls")) break
                    } while (t = t.parentNode);
                return o
            }(t) || a.isContentEditable || t.defaultPrevented || n) return !0;
        if ((X(a, "button") || X(a, "input") && r.test(a.type)) && t.keyCode === d.spacebar) return !0;
        var l = 0,
            i = 0,
            c = T(e),
            u = c.clientHeight;
        switch (c == document.body && (u = window.innerHeight), t.keyCode) {
            case d.up:
                i = -o.arrowScroll;
                break;
            case d.down:
                i = o.arrowScroll;
                break;
            case d.spacebar:
                i = -(t.shiftKey ? 1 : -1) * u * .9;
                break;
            case d.pageup:
                i = .9 * -u;
                break;
            case d.pagedown:
                i = .9 * u;
                break;
            case d.home:
                i = -c.scrollTop;
                break;
            case d.end:
                var s = c.scrollHeight - c.scrollTop - u;
                i = s > 0 ? s + 10 : 0;
                break;
            case d.left:
                l = -o.arrowScroll;
                break;
            case d.right:
                l = o.arrowScroll;
                break;
            default:
                return !0
        }
        p(c, l, i), t.preventDefault(), k()
    }

    function v(t) {
        e = t.target
    }
    var g, y, S, x = (g = 0, function(e) {
            return e.uniqueID || (e.uniqueID = g++)
        }),
        D = {};

    function k() {
        clearTimeout(y), y = setInterval(function() {
            D = {}
        }, 1e3)
    }

    function M(e, t) {
        for (var o = e.length; o--;) D[x(e[o])] = t;
        return t
    }

    function T(e) {
        var t = [],
            o = document.body,
            a = i.scrollHeight;
        do {
            var r = D[x(e)];
            if (r) return M(t, r);
            if (t.push(e), a === e.scrollHeight) {
                var l = C(i) && C(o) || E(i);
                if (n && H(i) || !n && l) return M(t, q())
            } else if (H(e) && E(e)) return M(t, e)
        } while (e = e.parentElement)
    }

    function H(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function C(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }

    function E(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function z(e, t) {
        window.addEventListener(e, t, !1)
    }

    function X(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function Y(e, t) {
        return Math.floor(e / t) == e / t
    }

    function B(e) {
        return Y(c[0], e) && Y(c[1], e) && Y(c[2], e)
    }
    window.localStorage && localStorage.SS_deltaBuffer && (c = localStorage.SS_deltaBuffer.split(","));
    var L, A, K = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
            window.setTimeout(e, o || 1e3 / 60)
        },
        N = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        q = function() {
            if (!L) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var t = document.body.scrollTop;
                document.documentElement.scrollTop, window.scrollBy(0, 1), L = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(
                    0, -1), document.body.removeChild(e)
            }
            return L
        };

    function O(e) {
        var t, a;
        return (e *= o.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (a = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - a)), t * o.pulseNormalize
    }

    function R(e) {
        return e >= 1 ? 1 : e <= 0 ? 0 : (1 == o.pulseNormalize && (o.pulseNormalize /= O(1)), O(e))
    }
    "onwheel" in document.createElement("div") ? A = "wheel" : "onmousewheel" in document.createElement("div") && (A = "mousewheel"), A && (z(A, w), z(
        "mousedown", v), z("load", s))
}();