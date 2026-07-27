/* reality-now motion -- harvested from realityos-vision. Cinematic, dependency-free,
 * animates transform/opacity only, all behind prefers-reduced-motion. Canvas colors tuned
 * for the light (Daybreak) cockpit. */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rmq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  if (rmq && rmq.addEventListener) rmq.addEventListener("change", function (e) { reduce = e.matches; });

  /* 1. staggered scroll reveals */
  function initReveals() {
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var sibs = Array.prototype.slice.call(el.parentNode.querySelectorAll(":scope > [data-reveal]"));
        var i = sibs.indexOf(el);
        el.style.transitionDelay = (Math.max(0, i) * 70) + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* 2. nav active-section underline */
  function initNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      var sec = document.getElementById(id);
      if (sec) map[id] = a;
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = map[e.target.id];
        if (!a) return;
        if (e.isIntersecting) { links.forEach(function (l) { l.classList.remove("active"); }); a.classList.add("active"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* 3. parallax blooms */
  function initParallax() {
    var bloom = document.querySelector(".bloom-layer");
    if (!bloom || reduce) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { bloom.style.transform = "translate3d(0," + (window.scrollY * 0.06) + "px,0)"; ticking = false; });
    }, { passive: true });
  }

  /* 4. constellation field (hero canvas) */
  function initField() {
    var canvas = document.getElementById("field");
    if (!canvas) return;
    if (reduce) { canvas.style.display = "none"; return; }
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, nodes = [], running = true, raf = null;
    var COUNT = window.innerWidth < 680 ? 30 : 58;
    var LINK = window.innerWidth < 680 ? 118 : 150;
    var NODE = "oklch(58% 0.13 222 / 0.55)";
    var LINKC = "oklch(58% 0.13 222 / ";

    function resize() { W = canvas.clientWidth; H = canvas.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function seed() {
      nodes = [];
      for (var i = 0; i < COUNT; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, r: Math.random() * 1.4 + 0.6 });
      }
    }
    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      var cx = W * 0.5, cy = H * 0.46;
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.vx += (cx - n.x) * 0.0000075; n.vy += (cy - n.y) * 0.0000075;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fillStyle = NODE; ctx.fill();
      }
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            var alpha = (1 - d / LINK) * 0.22;
            ctx.strokeStyle = LINKC + alpha + ")"; ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    }
    function start() { if (!running) { running = true; step(); } }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); }

    resize(); seed(); step();
    var ro = window.ResizeObserver ? new ResizeObserver(function () { resize(); seed(); }) : null;
    if (ro) ro.observe(canvas); else window.addEventListener("resize", function () { resize(); seed(); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { e.isIntersecting ? start() : stop(); }); }, { threshold: 0.02 });
      io.observe(canvas);
    }
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
  }

  function init() { initReveals(); initNav(); initParallax(); initField(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
