;
window.CloudflareApps = window.CloudflareApps || {};
CloudflareApps.siteId = "9f0cba7eeb75f68d12dfe5001b4a3629";
CloudflareApps.installs = CloudflareApps.installs || {};;
(function() {
    'use strict'
    CloudflareApps.internal = CloudflareApps.internal || {}
    var errors = []
    CloudflareApps.internal.placementErrors = errors
    var errorHashes = {}

    function noteError(options) {
        var hash = options.selector + '::' + options.type + '::' + (options.installId || '')
        if (errorHashes[hash]) {
            return
        }
        errorHashes[hash] = true
        errors.push(options)
    }
    var initializedSelectors = {}
    var currentInit = false
    CloudflareApps.internal.markSelectors = function markSelectors() {
        if (!currentInit) {
            check()
            currentInit = true
            setTimeout(function() {
                currentInit = false
            })
        }
    }

    function check() {
        var installs = window.CloudflareApps.installs
        for (var installId in installs) {
            if (!installs.hasOwnProperty(installId)) {
                continue
            }
            var selectors = installs[installId].selectors
            if (!selectors) {
                continue
            }
            for (var key in selectors) {
                if (!selectors.hasOwnProperty(key)) {
                    continue
                }
                var hash = installId + '::' + key
                if (initializedSelectors[hash]) {
                    continue
                }
                var els = document.querySelectorAll(selectors[key])
                if (els && els.length > 1) {
                    noteError({
                        type: 'init:too-many',
                        option: key,
                        selector: selectors[key],
                        installId: installId
                    })
                    initializedSelectors[hash] = true
                    continue
                } else if (!els || !els.length) {
                    continue
                }
                initializedSelectors[hash] = true
                els[0].setAttribute('cfapps-selector', selectors[key])
            }
        }
    }
    CloudflareApps.querySelector = function querySelector(selector) {
        if (selector === 'body' || selector === 'head') {
            return document[selector]
        }
        CloudflareApps.internal.markSelectors()
        var els = document.querySelectorAll('[cfapps-selector="' + selector + '"]')
        if (!els || !els.length) {
            noteError({
                type: 'select:not-found:by-attribute',
                selector: selector
            })
            els = document.querySelectorAll(selector)
            if (!els || !els.length) {
                noteError({
                    type: 'select:not-found:by-query',
                    selector: selector
                })
                return null
            } else if (els.length > 1) {
                noteError({
                    type: 'select:too-many:by-query',
                    selector: selector
                })
            }
            return els[0]
        }
        if (els.length > 1) {
            noteError({
                type: 'select:too-many:by-attribute',
                selector: selector
            })
        }
        return els[0]
    }
}());
(function() {
    'use strict'
    var prevEls = {}
    CloudflareApps.createElement = function createElement(options, prevEl) {
        options = options || {}
        CloudflareApps.internal.markSelectors()
        try {
            if (prevEl && prevEl.parentNode) {
                var replacedEl
                if (prevEl.cfAppsElementId) {
                    replacedEl = prevEls[prevEl.cfAppsElementId]
                }
                if (replacedEl) {
                    prevEl.parentNode.replaceChild(replacedEl, prevEl)
                    delete prevEls[prevEl.cfAppsElementId]
                } else {
                    prevEl.parentNode.removeChild(prevEl)
                }
            }
            var element = document.createElement('cloudflare-app')
            var container
            if (options.pages && options.pages.URLPatterns && !CloudflareApps.matchPage(options.pages.URLPatterns)) {
                return element
            }
            try {
                container = CloudflareApps.querySelector(options.selector)
            } catch (e) {}
            if (!container) {
                return element
            }
            if (!container.parentNode && (options.method === 'after' || options.method === 'before' || options.method === 'replace')) {
                return element
            }
            if (container === document.body) {
                if (options.method === 'after') {
                    options.method = 'append'
                } else if (options.method === 'before') {
                    options.method = 'prepend'
                }
            }
            switch (options.method) {
                case 'prepend':
                    if (container.firstChild) {
                        container.insertBefore(element, container.firstChild)
                        break
                    }
                case 'append':
                    container.appendChild(element)
                    break
                case 'after':
                    if (container.nextSibling) {
                        container.parentNode.insertBefore(element, container.nextSibling)
                    } else {
                        container.parentNode.appendChild(element)
                    }
                    break
                case 'before':
                    container.parentNode.insertBefore(element, container)
                    break
                case 'replace':
                    try {
                        var id = element.cfAppsElementId = Math.random().toString(36)
                        prevEls[id] = container
                    } catch (e) {}
                    container.parentNode.replaceChild(element, container)
            }
            return element
        } catch (e) {
            if (typeof console !== 'undefined' && typeof console.error !== 'undefined') {
                console.error('Error creating Cloudflare Apps element', e)
            }
        }
    }
}());
(function() {
    'use strict'
    CloudflareApps.matchPage = function matchPage(patterns) {
        if (!patterns || !patterns.length) {
            return true
        }
        var loc = document.location.host + document.location.pathname
        if (window.CloudflareApps && CloudflareApps.proxy && CloudflareApps.proxy.originalURL) {
            var url = CloudflareApps.proxy.originalURL.parsed
            loc = url.host + url.path
        }
        for (var i = 0; i < patterns.length; i++) {
            var re = new RegExp(patterns[i], 'i')
            if (re.test(loc)) {
                return true
            }
        }
        return false
    }
}());
CloudflareApps.installs["9RpseGghkkgk"] = {
    appId: "lQNVixFXFXhM",
    scope: {}
};;
CloudflareApps.installs["9RpseGghkkgk"].options = {
    "buttons": [{
        "backgroundColor": "#39ffcd",
        "borderRadius": 0.49,
        "color": "#da4e94",
        "fontSize": "small",
        "targetBlank": true,
        "text": "☞Tham Gia Nhóm 4G 🇻🇳 31k Thành Viên",
        "url": "https://congdong.dvsteam.net"
    }],
    "horizontalAlignment": "center",
    "location": {
        "method": "append",
        "selector": "body \u003e div:first-child \u003e div:first-child \u003e main:first-child \u003e .no-gutters.v2board-auth-box \u003e div:first-child \u003e .mx-2.mx-sm-0 \u003e .block-transparent.block-fx-pop.w-100.mb-0.overflow-hidden.bg-image \u003e .row.no-gutters \u003e .col-md-12.order-md-1.bg-white \u003e .block-content.block-content-full.px-lg-4.py-md-4.py-lg-4"
    },
    "stacked": false
};;
CloudflareApps.installs["9RpseGghkkgk"].selectors = {
    "location.selector": "body \u003e div:first-child \u003e div:first-child \u003e main:first-child \u003e .no-gutters.v2board-auth-box \u003e div:first-child \u003e .mx-2.mx-sm-0 \u003e .block-transparent.block-fx-pop.w-100.mb-0.overflow-hidden.bg-image \u003e .row.no-gutters \u003e .col-md-12.order-md-1.bg-white \u003e .block-content.block-content-full.px-lg-4.py-md-4.py-lg-4"
};
(function() {
    var script = document.createElement('script');
    script.src = '/cdn-cgi/apps/body/W-avL3SvvhNIKzMfJkxFm2hhgPY.js';
    document.head.appendChild(script);
})();