/* reality-now boot intro -- standalone, per-page. Plays once per page per session
 * (gated on sessionStorage by pathname), respects prefers-reduced-motion, skippable on
 * click or keypress. Expects markup:
 *   <div id="boot"><div class="boot-core">
 *     <div class="boot-mark">reality<b>now</b></div>
 *     <div class="boot-sub">...</div>
 *     <ul class="boot-sys"><li>...</li>...</ul>
 *     <div class="boot-line"><span></span></div>
 *     <div class="boot-skip">click anywhere to skip</div>
 *   </div></div>
 * Harvested from realityos-vision runBootIntro(). No dependencies. */
(function () {
  "use strict";
  function reduceMotion() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

  function runBootIntro() {
    var el = document.getElementById("boot"); if (!el) return;
    var key = "rn-booted:" + location.pathname;
    var booted = false; try { booted = sessionStorage.getItem(key) === "1"; } catch (e) {}
    if (booted || reduceMotion()) { el.parentNode && el.parentNode.removeChild(el); return; }

    var done = false;
    function finish() {
      if (done) return; done = true;
      el.classList.add("done");
      try { sessionStorage.setItem(key, "1"); } catch (e) {}
      setTimeout(function () { el.parentNode && el.parentNode.removeChild(el); }, 760);
    }
    var items = el.querySelectorAll(".boot-sys li");
    Array.prototype.forEach.call(items, function (li, i) { setTimeout(function () { li.classList.add("on"); }, 540 + i * 150); });
    var line = el.querySelector(".boot-line > span"); if (line) setTimeout(function () { line.style.width = "100%"; }, 600);
    setTimeout(finish, Math.max(2100, 540 + items.length * 150 + 480));
    el.addEventListener("click", finish);
    document.addEventListener("keydown", function onk() { finish(); document.removeEventListener("keydown", onk); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", runBootIntro);
  else runBootIntro();
})();
