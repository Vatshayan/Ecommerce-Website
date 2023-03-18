(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        "2mvg": function(e, a, n) {
            "use strict";
            var t = n("wx14"),
                r = n("zLVn"),
                o = n("TSYQ"),
                c = n.n(o),
                s = n("q1tI"),
                i = n.n(s),
                l = n("17x9"),
                u = n.n(l),
                p = n("vUet"),
                f = (u.a.string, u.a.bool, u.a.bool, u.a.bool, u.a.bool, i.a.forwardRef((function(e, a) {
                    var n = e.bsPrefix,
                        o = e.className,
                        s = e.fluid,
                        l = e.rounded,
                        u = e.roundedCircle,
                        f = e.thumbnail,
                        m = Object(r.a)(e, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
                    n = Object(p.a)(n, "img");
                    var d = c()(s && n + "-fluid", l && "rounded", u && "rounded-circle", f && n + "-thumbnail");
                    return (i.a.createElement("img", Object(t.a)({
                        ref: a
                    }, m, {
                        className: c()(o, d)
                    })))
                })));
            f.displayName = "Image", f.defaultProps = {
                fluid: !1,
                rounded: !1,
                roundedCircle: !1,
                thumbnail: !1
            }, a.a = f
        },
        "3Z9Z": function(e, a, n) {
            "use strict";
            var t = n("wx14"),
                r = n("zLVn"),
                o = n("TSYQ"),
                c = n.n(o),
                s = n("q1tI"),
                i = n.n(s),
                l = n("vUet"),
                u = ["xl", "lg", "md", "sm", "xs"],
                p = i.a.forwardRef((function(e, a) {
                    var n = e.bsPrefix,
                        o = e.className,
                        s = e.noGutters,
                        p = e.as,
                        f = void 0 === p ? "div" : p,
                        m = Object(r.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
                        d = Object(l.a)(n, "row"),
                        h = d + "-cols",
                        g = [];
                    return u.forEach((function(e) {
                        var a, n = m[e];
                        delete m[e];
                        var t = "xs" !== e ? "-" + e : "";
                        null != (a = null != n && "object" === typeof n ? n.cols : n) && g.push("" + h + t + "-" + a)
                    })), i.a.createElement(f, Object(t.a)({
                        ref: a
                    }, m, {
                        className: c.a.apply(void 0, [o, d, s && "no-gutters"].concat(g))
                    }))
                }));
            p.displayName = "Row", p.defaultProps = {
                noGutters: !1
            }, a.a = p
        },
        "49GV": function(e, a, n) {
            "use strict";
            var t = n("1OyB"),
                r = n("vuIU"),
                o = n("JX7q"),
                c = n("Ji7U"),
                s = n("md7G"),
                i = n("foSv"),
                l = n("rePB"),
                u = n("q1tI"),
                p = n.n(u),
                f = n("nOHt"),
                m = n("/MKj"),
                d = n("wx14"),
                h = n("zLVn"),
                g = n("TSYQ"),
                v = n.n(g),
                b = n("JCAc"),
                _ = n("YdCC"),
                N = n("vUet"),
                y = p.a.forwardRef((function(e, a) {
                    var n = e.bsPrefix,
                        t = e.className,
                        r = e.as,
                        o = Object(h.a)(e, ["bsPrefix", "className", "as"]);
                    n = Object(N.a)(n, "navbar-brand");
                    var c = r || (o.href ? "a" : "span");
                    return (p.a.createElement(c, Object(d.a)({}, o, {
                        ref: a,
                        className: v()(t, n)
                    })))
                }));
            y.displayName = "NavbarBrand";
            var O, k = y,
                j = n("7j6X"),
                x = n("YECM"),
                w = n("xgq2"),
                E = n("Qg85"),
                C = n("z+q/"),
                T = {
                    height: ["marginTop", "marginBottom"],
                    width: ["marginLeft", "marginRight"]
                };

            function P(e, a) {
                var n = a["offset" + e[0].toUpperCase() + e.slice(1)],
                    t = T[e];
                return n + parseInt(Object(j.a)(a, t[0]), 10) + parseInt(Object(j.a)(a, t[1]), 10)
            }
            var R = ((O = {})[w.c] = "collapse", O[w.d] = "collapsing", O[w.b] = "collapsing", O[w.a] = "collapse show", O),
                M = { in: !1,
                    timeout: 300,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    getDimensionValue: P
                },
                I = p.a.forwardRef((function(e, a) {
                    var n = e.onEnter,
                        t = e.onEntering,
                        r = e.onEntered,
                        o = e.onExit,
                        c = e.onExiting,
                        s = e.className,
                        i = e.children,
                        l = e.dimension,
                        f = void 0 === l ? "height" : l,
                        m = e.getDimensionValue,
                        g = void 0 === m ? P : m,
                        b = Object(h.a)(e, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"]),
                        _ = "function" === typeof f ? f() : f,
                        N = Object(u.useMemo)((function() {
                            return Object(E.a)((function(e) {
                                e.style[_] = "0"
                            }), n)
                        }), [_, n]),
                        y = Object(u.useMemo)((function() {
                            return Object(E.a)((function(e) {
                                var a = "scroll" + _[0].toUpperCase() + _.slice(1);
                                e.style[_] = e[a] + "px"
                            }), t)
                        }), [_, t]),
                        O = Object(u.useMemo)((function() {
                            return Object(E.a)((function(e) {
                                e.style[_] = null
                            }), r)
                        }), [_, r]),
                        k = Object(u.useMemo)((function() {
                            return Object(E.a)((function(e) {
                                e.style[_] = g(_, e) + "px", Object(C.a)(e)
                            }), o)
                        }), [o, g, _]),
                        j = Object(u.useMemo)((function() {
                            return Object(E.a)((function(e) {
                                e.style[_] = null
                            }), c)
                        }), [_, c]);
                    return p.a.createElement(w.e, Object(d.a)({
                        ref: a,
                        addEndListener: x.a
                    }, b, {
                        "aria-expanded": b.role ? b.in : null,
                        onEnter: N,
                        onEntering: y,
                        onEntered: O,
                        onExit: k,
                        onExiting: j
                    }), (function(e, a) {
                        return p.a.cloneElement(i, Object(d.a)({}, a, {
                            className: v()(s, i.props.className, R[e], "width" === _ && "width")
                        }))
                    }))
                }));
            I.defaultProps = M;
            var q = I,
                B = n("qUpC"),
                L = p.a.forwardRef((function(e, a) {
                    var n = e.children,
                        t = e.bsPrefix,
                        r = Object(h.a)(e, ["children", "bsPrefix"]);
                    return t = Object(N.a)(t, "navbar-collapse"), p.a.createElement(B.a.Consumer, null, (function(e) {
                        return p.a.createElement(q, Object(d.a)({ in: !(!e || !e.expanded)
                        }, r), p.a.createElement("div", {
                            ref: a,
                            className: t
                        }, n))
                    }))
                }));
            L.displayName = "NavbarCollapse";
            var U = L,
                S = n("ZCiN"),
                G = p.a.forwardRef((function(e, a) {
                    var n = e.bsPrefix,
                        t = e.className,
                        r = e.children,
                        o = e.label,
                        c = e.as,
                        s = void 0 === c ? "button" : c,
                        i = e.onClick,
                        l = Object(h.a)(e, ["bsPrefix", "className", "children", "label", "as", "onClick"]);
                    n = Object(N.a)(n, "navbar-toggler");
                    var f = Object(u.useContext)(B.a) || {},
                        m = f.onToggle,
                        g = f.expanded,
                        b = Object(S.a)((function(e) {
                            i && i(e), m && m()
                        }));
                    return "button" === s && (l.type = "button"), p.a.createElement(s, Object(d.a)({}, l, {
                        ref: a,
                        onClick: b,
                        "aria-label": o,
                        className: v()(t, n, !g && "collapsed")
                    }), r || p.a.createElement("span", {
                        className: n + "-icon"
                    }))
                }));
            G.displayName = "NavbarToggle", G.defaultProps = {
                label: "Toggle navigation"
            };
            var V = G,
                D = n("ILyh"),
                Y = Object(_.a)("navbar-text", {
                    Component: "span"
                }),
                A = p.a.forwardRef((function(e, a) {
                    var n = Object(b.a)(e, {
                            expanded: "onToggle"
                        }),
                        t = n.bsPrefix,
                        r = n.expand,
                        o = n.variant,
                        c = n.bg,
                        s = n.fixed,
                        i = n.sticky,
                        l = n.className,
                        f = n.children,
                        m = n.as,
                        g = void 0 === m ? "nav" : m,
                        _ = n.expanded,
                        y = n.onToggle,
                        O = n.onSelect,
                        k = n.collapseOnSelect,
                        j = Object(h.a)(n, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]),
                        x = Object(N.a)(t, "navbar"),
                        w = Object(u.useCallback)((function() {
                            O && O.apply(void 0, arguments), k && _ && y && y(!1)
                        }), [O, k, _, y]);
                    void 0 === j.role && "nav" !== g && (j.role = "navigation");
                    var E = x + "-expand";
                    "string" === typeof r && (E = E + "-" + r);
                    var C = Object(u.useMemo)((function() {
                        return {
                            onToggle: function() {
                                return y && y(!_)
                            },
                            bsPrefix: x,
                            expanded: !!_
                        }
                    }), [x, _, y]);
                    return (p.a.createElement(B.a.Provider, {
                        value: C
                    }, p.a.createElement(D.a.Provider, {
                        value: w
                    }, p.a.createElement(g, Object(d.a)({
                        ref: a
                    }, j, {
                        className: v()(l, x, r && E, o && x + "-" + o, c && "bg-" + c, i && "sticky-" + i, s && "fixed-" + s)
                    }), f))))
                }));
            A.defaultProps = {
                expand: !0,
                variant: "light",
                collapseOnSelect: !1
            }, A.displayName = "Navbar", A.Brand = k, A.Toggle = V, A.Collapse = U, A.Text = Y;
            var J = A,
                Q = n("+YzT"),
                z = n("2mvg"),
                Z = n("YFqc"),
                H = n.n(Z),
                K = n("yzAy"),
                X = n("Qi1R"),
                F = p.a.createElement;

            function W(e) {
                var a = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, t = Object(i.a)(e);
                    if (a) {
                        var r = Object(i.a)(this).constructor;
                        n = Reflect.construct(t, arguments, r)
                    } else n = t.apply(this, arguments);
                    return Object(s.a)(this, n)
                }
            }
            var $ = function(e) {
                Object(c.a)(n, e);
                var a = W(n);

                function n(e) {
                    var r;
                    return Object(t.a)(this, n), r = a.call(this, e), Object(l.a)(Object(o.a)(r), "onClickPlayNowBtn", (function() {
                        window.location.pathname.split("/")[1] ? r.props.router.push("/").then((function() {
                            return Object(X.a)("main-body")
                        })) : Object(X.a)("main-body")
                    })), Object(l.a)(Object(o.a)(r), "onProfileClick", (function() {
                        r.setState({
                            isOpenMenu: !r.state.isOpenMenu
                        })
                    })), Object(l.a)(Object(o.a)(r), "renderUserCP", (function() {
                        return r.props.auth.token ? F("li", {
                            className: "profile__profile profile__shop",
                            onClick: r.onProfileClick
                        }, F("p", {
                            className: "p-0 m-3",
                            style: {
                                fontSize: "17px"
                            }
                        }, "T\xe0i kho\u1ea3n", F("img", {
                            src: "/images/icons/profile-ham.png"
                        })), F("nav", {
                            className: "player__profile" + (r.state.isOpenMenu ? " player__profile--show" : "")
                        }, F("ul", null, F("li", {
                            className: "player__profile--login"
                        }, r.props.auth.nickname ? r.props.auth.nickname : r.props.auth.username), F("li", {
                            className: "player__profile--sep"
                        }), F("div", {
                            id: "navbar_main_menu"
                        }, F("li", null, F("a", {
                            onClick: function() {
                                return r.props.router.push("info")
                            },
                            className: "nav-go "
                        }, "Trang c\xe1 nh\xe2n")), F("li", null, F("a", {
                            onClick: function() {
                                return r.props.router.push("rank_crew")
                            },
                            className: "nav-go "
                        }, "X\u1ebfp h\u1ea1ng Crew")), F("li", null, F("a", {
                            onClick: function() {
                                K.a.applyToken(null, r.props.dispatch), r.props.router.push("login")
                            },
                            className: "nav-go"
                        }, "Tho\xe1t")))))) : F("li", {
                            className: "profile__login ml-5"
                        }, F("a", {
                            className: "login__wrapper",
                            onClick: function() {
                                return r.props.router.push("login")
                            }
                        }, F(z.a, {
                            src: "/images/icons/login.png"
                        }), F("p", {
                            className: "mb-0 login__wrapper__content"
                        }, "Login")))
                    })), r.state = {
                        isOpenMenu: !1,
                        token: null
                    }, r
                }
                return Object(r.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = localStorage.getItem("auth_token");
                        e && K.a.applyToken(e, this.props.dispatch)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return F(J, {
                            className: "navbar__wrapper",
                            variant: "dark",
                            expand: "lg"
                        }, F(J.Brand, {
                            className: "nav__branch mt-5",
                            href: "/"
                        }, F(z.a, {
                            className: "branch__img",
                            src: "/images/logo.png",
                            alt: "logo-gta5-game-nhap-vai-dinh-cao"
                        })), F(Q.a, {
                            className: "nav__main mt-5",
                            id: "main-navbar"
                        }, F("a", {
                            className: "nav__link",
                            onClick: function() {
                                return e.props.router.push("/")
                            }
                        }, "Trang ch\u1ee7"), F("a", {
                            className: "nav__link",
                            onClick: this.onClickPlayNowBtn
                        }, "Ch\u01a1i ngay"), F("a", {
                            className: "nav__link",
                            onClick: function() {
                                return e.props.router.push("about")
                            }
                        }, "Gi\u1edbi thi\u1ec7u"), F(H.a, {
                            href: "https://bit.ly/gta5vn_dc"
                        }, F("a", {
                            className: "nav__link",
                            target: "_blank"
                        }, "Discord"))), F("div", {
                            className: "nav__profile mt-5"
                        }, F("li", {
                            className: "profile__donate",
                            onClick: function() {
                                return e.props.router.push("recharge")
                            }
                        }, F(H.a, {
                            href: "#"
                        }, F("a", {
                            className: "donate__wrapper"
                        }, F(z.a, {
                            src: "/images/icons/shop.png",
                            alt: "shop"
                        }), F("p", {
                            className: "mb-0 text-white text-bold text-uppercase ml-3"
                        }, "N\u1ea1p GEM")))), this.renderUserCP()), F(J.Toggle, {
                            "aria-controls": "collapse-navbar"
                        }), F(J.Collapse, {
                            id: "collapse-navbar",
                            className: "nav__collapse"
                        }, F(Q.a, {
                            className: "collapse__nav"
                        }, F("a", {
                            className: "nav__link",
                            onClick: this.onClickPlayNowBtn
                        }, "Ch\u01a1i ngay"), F("a", {
                            className: "nav__link",
                            onClick: function() {
                                return e.props.router.push("about")
                            }
                        }, "Gi\u1edbi thi\u1ec7u"), F(H.a, {
                            href: "https://bit.ly/gta5vn_dc"
                        }, F("a", {
                            className: "nav__link",
                            target: "_blank"
                        }, "Discord")), F(H.a, {
                            href: ""
                        }, F("a", {
                            className: "nav__link",
                            target: "_blank"
                        }, "N\u1ea1p ti\u1ec1n")), F("p", {
                            onClick: function() {
                                e.props.router.push("login"), document.getElementById("collapse-navbar").classList.remove(["show"])
                            },
                            className: "nav__link"
                        }, "H\u1ed3 s\u01a1"))))
                    }
                }]), n
            }(u.Component);
            a.a = Object(m.b)((function(e) {
                return {
                    auth: e.auth
                }
            }))(Object(f.withRouter)($))
        },
        AigX: function(e, a, n) {
            "use strict";
            var t = n("q1tI"),
                r = n.n(t),
                o = n("3Z9Z"),
                c = n("JI6e"),
                s = r.a.createElement;
            a.a = function() {
                return s(o.a, {
                    className: "end"
                }, s(c.a, {
                    lg: 4,
                    sm: 4,
                    className: "end__item end__first"
                }, s("a", {
                    href: "https://forum.gta5vn.com/forums/quy-tac-may-chu.34/",
                    target: "_blank"
                }, "Quy t\u1eafc chung GTA5VN")), s(c.a, {
                    lg: 4,
                    sm: 4,
                    className: "end__item end__second"
                }, s("a", {
                    href: "https://forum.gta5vn.com/categories/quy-tac-to-chuc-chinh-phu.40/",
                    target: "_blank"
                }, "Quy t\u1eafc c\xe1 nh\xe2n - t\u1ed5 ch\u1ee9c")), s(c.a, {
                    lg: 4,
                    sm: 4,
                    className: "end__item end__second"
                }, s("a", {
                    href: "https://forum.gta5vn.com/forums/quy-tac-cho-cac-to-chuc-toi-pham.36/",
                    target: "_blank"
                }, "Quy t\u1eafc Crew - B\u0103ng nh\xf3m")))
            }
        },
        Qi1R: function(e, a, n) {
            "use strict";
            n.d(a, "a", (function() {
                return t
            }));
            var t = function(e) {
                var a = document.getElementById(e);
                a && a.scrollIntoView({
                    behavior: "smooth"
                })
            }
        },
        YFqc: function(e, a, n) {
            e.exports = n("cTJO")
        },
        cTJO: function(e, a, n) {
            "use strict";
            var t = n("zoAU"),
                r = n("7KCV");
            a.__esModule = !0, a.default = void 0;
            var o, c = r(n("q1tI")),
                s = n("elyg"),
                i = (n("g/15"), n("nOHt")),
                l = new Map,
                u = window.IntersectionObserver,
                p = {};
            var f = function(e, a) {
                var n = o || (u ? o = new u((function(e) {
                    e.forEach((function(e) {
                        if (l.has(e.target)) {
                            var a = l.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (o.unobserve(e.target), l.delete(e.target), a())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0);
                return n ? (n.observe(e), l.set(e, a), function() {
                    try {
                        n.unobserve(e)
                    } catch (a) {
                        console.error(a)
                    }
                    l.delete(e)
                }) : function() {}
            };

            function m(e, a, n, t) {
                (0, s.isLocalURL)(a) && (e.prefetch(a, n, t).catch((function(e) {
                    0
                })), p[a + "%" + n] = !0)
            }
            var d = function(e) {
                var a = !1 !== e.prefetch,
                    n = c.default.useState(),
                    r = t(n, 2),
                    o = r[0],
                    l = r[1],
                    d = (0, i.useRouter)(),
                    h = d && d.pathname || "/",
                    g = c.default.useMemo((function() {
                        var a = (0, s.resolveHref)(h, e.href);
                        return {
                            href: a,
                            as: e.as ? (0, s.resolveHref)(h, e.as) : a
                        }
                    }), [h, e.href, e.as]),
                    v = g.href,
                    b = g.as;
                c.default.useEffect((function() {
                    if (a && u && o && o.tagName && (0, s.isLocalURL)(v) && !p[v + "%" + b]) return f(o, (function() {
                        m(d, v, b)
                    }))
                }), [a, o, v, b, d]);
                var _ = e.children,
                    N = e.replace,
                    y = e.shallow,
                    O = e.scroll;
                "string" === typeof _ && (_ = c.default.createElement("a", null, _));
                var k = c.Children.only(_),
                    j = {
                        ref: function(e) {
                            e && l(e), k && "object" === typeof k && k.ref && ("function" === typeof k.ref ? k.ref(e) : "object" === typeof k.ref && (k.ref.current = e))
                        },
                        onClick: function(e) {
                            k.props && "function" === typeof k.props.onClick && k.props.onClick(e), e.defaultPrevented || function(e, a, n, t, r, o, c) {
                                ("A" !== e.currentTarget.nodeName || ! function(e) {
                                    var a = e.currentTarget.target;
                                    return a && "_self" !== a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && (0, s.isLocalURL)(n)) && (e.preventDefault(), null == c && (c = t.indexOf("#") < 0), a[r ? "replace" : "push"](n, t, {
                                    shallow: o
                                }).then((function(e) {
                                    e && c && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(e, d, v, b, N, y, O)
                        }
                    };
                return a && (j.onMouseEnter = function(e) {
                    (0, s.isLocalURL)(v) && (k.props && "function" === typeof k.props.onMouseEnter && k.props.onMouseEnter(e), m(d, v, b, {
                        priority: !0
                    }))
                }), !e.passHref && ("a" !== k.type || "href" in k.props) || (j.href = (0, s.addBasePath)(b)), c.default.cloneElement(k, j)
            };
            a.default = d
        },
        og3Y: function(e, a, n) {
            "use strict";
            var t = n("q1tI"),
                r = n.n(t),
                o = n("3Z9Z"),
                c = n("JI6e"),
                s = n("2mvg"),
                i = n("nOHt"),
                l = r.a.createElement;
            a.a = function() {
                var e = Object(i.useRouter)();
                return l(o.a, {
                    className: "footer"
                }, l(c.a, {
                    lg: 4,
                    md: 4,
                    className: "footer__first mb-5"
                }, l(s.a, {
                    className: "first__logo",
                    src: "/images/logo_hd.png",
                    alt: "logo_hd"
                }), l("a", {
                    href: "#",
                    onClick: function() {
                        return e.push("recharge")
                    },
                    role: "button",
                    className: "first__button"
                }, l(s.a, {
                    src: "/images/icons/shop-balance.png",
                    className: "button__icon"
                }), l("p", {
                    className: "mb-0"
                }, "N\u1ea1p GEM")), l(s.a, {
                    className: "first__img",
                    src: "/images/screens/footer/characters.png",
                    alt: "characters"
                })), l(c.a, {
                    lg: 3,
                    md: 4,
                    className: "footer__second mb-5"
                }, l("nav", {
                    className: "second__nav"
                }, l("ul", {
                    className: "nav__main"
                }, l("li", null, l("a", null, "Ch\u01a1i")), l("li", null, l("a", {
                    href: "https://bit.ly/gta5vn_dc",
                    target: "_blank"
                }, "Discord")), l("li", null, l("a", {
                    href: "https://forum.gta5vn.com/forums/tin-tuc-va-thong-tin.4/",
                    target: "_blank"
                }, "Tin t\u1ee9c"))))), l(c.a, {
                    lg: 5,
                    md: 4,
                    className: "footer__third mb-5"
                }, l("div", {
                    className: "mt-4 third__content"
                }, l("p", {
                    className: "mb-0"
                }, "GTA5VN l\xe0 m\u1ed9t phi\xean b\u1ea3n GTA Online ch\u01a1i theo h\u01b0\u1edbng Roleplay. B\u1ea1n s\u1ebd v\xe0o vai m\u1ed9t c\xf4ng nh\xe2n, th\u1ee3 s\u1eeda \u1ed1ng n\u01b0\u1edbc, taxi, t\xe0i x\u1ebf, vv... Th\u1eadm ch\xed b\u1ea1n c\xf3 th\u1ec3 tr\u1edf th\xe0nh m\u1ed9t b\u0103ng t\u1ed9i ph\u1ea1m kh\xe9t ti\u1ebfng, m\u1ed9t s\u0129 quan g\u01b0\u01a1ng m\u1eabu b\u1ea3o v\u1ec7 th\xe0nh ph\u1ed1 hay l\xe0 m\u1ed9t b\xe1c s\u0129 \u0111\u1ea1i t\xe0i c\u1ee9u ch\u1eefa ng\u01b0\u1eddi kh\xe1c. B\u1ea1n c\xf3 th\u1ec3 h\xf3a th\xe2n v\xe0o b\u1ea5t c\u1ee9 ai v\xe0o b\u1ea5t c\u1ee9 \u0111i\u1ec1u g\xec b\u1ea1n mu\u1ed1n v\xe0 s\u1ed1ng trong m\u1ed9t th\xe0nh ph\u1ed1 \u0111\u01b0\u1ee3c m\xf4 ph\u1ecfng nh\u01b0 ngo\xe0i \u0111\u1eddi v\u1edbi nh\u1eefng ng\u01b0\u1eddi kh\xe1c nh\u01b0 b\u1ea1n t\u1ea1i GTA5VN.")), l("div", {
                    className: "third__img"
                }, l(s.a, {
                    src: "/images/screens/footer/veh.png",
                    alt: "veh"
                }))))
            }
        },
        uZpD: function(e, a, n) {
            "use strict";
            var t = n("q1tI"),
                r = n.n(t),
                o = r.a.createElement;
            a.a = function() {
                return r.a.useEffect((function() {
                    var e = document.getElementById("scroll-button");
                    window.onscroll = function(a) {
                        return pageYOffset > 900 && e ? e.style.display = "block" : e.style.display = "none"
                    }
                }), []), o("div", {
                    className: "scroll__wrapper",
                    id: "scroll-button",
                    onClick: function() {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }, o("div", {
                    className: "scroll__wrapper__main"
                }, o("div", {
                    className: "main__arrow"
                }), o("p", {
                    className: "mb-0 text-white text-uppercase"
                }, "up")))
            }
        }
    }
]);