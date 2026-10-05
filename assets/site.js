/* fde-portfolio client -- audience lens switching + theme + copy. Pure localStorage, no network.
 * The inline <head> script sets data-persona/theme before paint; this wires the controls. */
(function () {
  "use strict";
  var LENS = {
    "recruiter": "Intake",
    "hiring-manager": "Flight Check",
    "tech-interviewer": "Source Readout",
    "customer-founder": "First 30 Days",
  };
  var html = document.documentElement;
  function current() { return html.getAttribute("data-persona") || "recruiter"; }

  function applyLens(p) {
    if (!LENS[p]) p = "recruiter";
    html.setAttribute("data-persona", p);
    try { localStorage.setItem("fp.lens", p); } catch (e) {}
    Array.prototype.forEach.call(document.querySelectorAll(".lenspill button"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-persona") === p ? "true" : "false");
    });
    var name = document.querySelector(".lensname");
    if (name) name.textContent = LENS[p];
    document.title = (document.body.getAttribute("data-title") || "Liam McCarthy") + " -- " + LENS[p];
    if (LENS[location.hash.replace("#", "")] && location.hash.replace("#", "") !== p) {
      try { history.replaceState(null, "", "#" + p); } catch (e) {}
    }
  }

  function applyTheme(t) {
    html.setAttribute("data-theme", t);
    try { localStorage.setItem("fp.theme", t); } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = t === "light" ? "☾" : "☀";
  }

  function toast(msg) {
    var t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:300;background:var(--color-ink);color:var(--surface-0);font-family:var(--font-body);font-size:0.85rem;padding:0.6rem 1rem;border-radius:10px;box-shadow:var(--elev);opacity:0;transition:opacity 200ms ease;";
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.style.opacity = "1"; });
    setTimeout(function () { t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 250); }, 1500);
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".lenspill button"), function (b) {
      b.addEventListener("click", function () { applyLens(b.getAttribute("data-persona")); });
    });
    var h = location.hash.replace("#", "");
    applyLens(LENS[h] ? h : current());
    var tb = document.getElementById("theme-toggle");
    if (tb) tb.addEventListener("click", function () { applyTheme(html.getAttribute("data-theme") === "light" ? "dark" : "light"); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (b) {
      b.addEventListener("click", function () {
        var txt = b.getAttribute("data-copy");
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { toast("Copied"); }, function () { toast("Copy failed"); });
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".meter > span[data-fill]"), function (s) {
      var v = s.getAttribute("data-fill");
      requestAnimationFrame(function () { setTimeout(function () { s.style.width = v + "%"; }, 60); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
