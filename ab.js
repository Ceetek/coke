! function(r, e, t, n, i, o, a, s) {
    function d(e) {
        for (var t, n = null, i = location.search.substr(1).split("&"), o = 0; o < i.length; o++)(t = i[o].split("="))[0] === e && (n = decodeURIComponent(t[1]));
        return n
    }
    window.AB || d("disable_abtestingai") || (window.AB = window.AB || {
        converted: function() {
            var e = "";
            "undefined" != typeof Storage && (e = localStorage.getItem("abtesting.ai-uuid") || "");
            var t = new XMLHttpRequest;
            t.withCredentials = !0, t.open("POST", "https://stg1.abtesting.ai/visitor_converted/", !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(encodeURI("url=" + window.location.href + "&uuid=" + e))
        }
    }, r.write("<style>html { visibility:hidden !important; }</style>"), setTimeout(function(e) {
        r.getElementsByTagName("html")[0].style.setProperty('visibility', 'visible', 'important');
    }, 3e3), scripts = [], (0 < (e = window.navigator.userAgent).indexOf("MSIE ") || 0 < e.indexOf("Trident/")) && scripts.push("https://cdn.jsdelivr.net/npm/wicked-good-xpath@1.3.0/dist/wgxpath.install.min.js"), t = r.documentElement, n = r.getElementsByTagName("body")[0], i = window.innerWidth || t.clientWidth || n.clientWidth, o = "", "undefined" != typeof Storage && (o = localStorage.getItem("abtesting.ai-uuid") || "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16)
    }), localStorage.setItem("abtesting.ai-uuid", o)), a = d("abtestingai_ab_test_id"), s = d("utm_term") || d("hsa_kw") || d("keyword"), scripts.push("https://stg1.abtesting.ai/fetch_variant/?width=" + i + "&url=" + encodeURIComponent(window.location.href) + "&referrer=" + encodeURIComponent(document.referrer) + "&uuid=" + encodeURIComponent(o) + "&ab_test_id=" + (a ? encodeURIComponent(a) : "") + "&utm_term=" + (s ? encodeURIComponent(s) : "") + "&url_params=" + encodeURIComponent(location.search)), function(e, t, n, i, o) {
        function a(e) {
            for (; i[0] && "loaded" == i[0].readyState;)(e = i.shift()).onreadystatechange = null, o.parentNode.insertBefore(e, o)
        }
        for (i = [], o = r.scripts[0]; t = e.shift();) "async" in o ? ((n = r.createElement("script")).type = "text/javascript", n.async = !1, n.src = t, r.head.appendChild(n)) : o.readyState ? (n = r.createElement("script"), i.push(n), n.onreadystatechange = a, n.src = t) : r.write('<script src="' + t + '" defer><\/script>')
    }(scripts))
}(document);
