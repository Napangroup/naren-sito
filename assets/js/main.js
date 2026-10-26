/* Naren Immobiliare — interazioni del sito. Nessun cookie, nessun tracciamento, nessuna memoria nel browser. */
(function () {
  document.documentElement.classList.remove("no-js");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menu su telefono ---------- */
  var mb = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
  if (mb && menu) {
    mb.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      mb.setAttribute("aria-expanded", open ? "true" : "false");
      mb.textContent = open ? "Chiudi" : "Menu";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { menu.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); mb.textContent = "Menu"; }
    });
  }

  /* ---------- Prezzi con il separatore delle migliaia ---------- */
  document.querySelectorAll(".num").forEach(function (n) {
    var v = Number(n.textContent);
    if (n.textContent.trim() !== "" && !isNaN(v)) n.textContent = v.toLocaleString("it-IT");
  });

  /* ---------- Disponibilità futura sulle etichette ---------- */
  var MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  document.querySelectorAll(".badge[data-from]").forEach(function (b) {
    var v = b.getAttribute("data-from");
    if (!v) return;
    var d = new Date(v + "T00:00:00");
    if (isNaN(d) || d <= new Date()) return;
    b.textContent = "Disponibile dal " + d.getDate() + " " + MESI[d.getMonth()];
  });

  /* ---------- Filtri della vetrina ---------- */
  var grid = document.getElementById("grid"), filters = document.getElementById("filters");
  if (grid && filters) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".card"));
    var tipi = [], contratti = [], arredati = 0;
    cards.forEach(function (c) {
      var t = c.getAttribute("data-tipologia"), k = c.getAttribute("data-contratto");
      if (t && tipi.indexOf(t) < 0) tipi.push(t);
      if (k && contratti.indexOf(k) < 0) contratti.push(k);
      if (c.getAttribute("data-arredato") === "1") arredati++;
    });
    var opts = [["tutti", "", "Tutti"]];
    if (contratti.length > 1) contratti.forEach(function (k) { opts.push(["contratto", k, k === "Vendita" ? "In vendita" : "In affitto"]); });
    if (tipi.length > 1) tipi.forEach(function (t) { opts.push(["tipologia", t, t]); });
    if (arredati > 0 && arredati < cards.length) opts.push(["arredato", "1", "Arredati"]);
    if (opts.length > 2) {
      filters.hidden = false;
      opts.forEach(function (o, i) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "chip"; b.textContent = o[2];
        b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
        b.addEventListener("click", function () {
          filters.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          var shown = 0;
          cards.forEach(function (c) {
            var ok = o[0] === "tutti" || c.getAttribute("data-" + o[0]) === o[1];
            c.hidden = !ok; if (ok) shown++;
          });
          var nm = document.getElementById("no-match"); if (nm) nm.hidden = shown > 0;
        });
        filters.appendChild(b);
      });
    }
  }

  /* ---------- Galleria e foto a schermo intero ---------- */
  var gMain = document.getElementById("g-main"), thumbs = document.getElementById("thumbs"), lb = document.getElementById("lightbox");
  if (gMain && thumbs) {
    var items = Array.prototype.slice.call(thumbs.querySelectorAll("button"));
    var cur = 0;
    function itemHtml(i, big) {
      var b = items[i];
      if (b.hasAttribute("data-src")) return '<img src="' + b.getAttribute("data-src") + '" alt="Foto ' + (i + 1) + '">';
      var seed = b.querySelector(".illu").getAttribute("data-seed");
      return window.NarenIllu ? window.NarenIllu.draw(b.getAttribute("data-illu"), seed) : "";
    }
    function select(i) {
      cur = (i + items.length) % items.length;
      gMain.innerHTML = itemHtml(cur);
      items.forEach(function (b, j) { b.setAttribute("aria-current", j === cur ? "true" : "false"); });
    }
    items.forEach(function (b, i) { b.addEventListener("click", function () { select(i); }); });
    if (lb) {
      var stage = document.getElementById("lb-stage");
      function lbShow(i) { cur = (i + items.length) % items.length; stage.innerHTML = itemHtml(cur, true); }
      gMain.addEventListener("click", function () { lbShow(cur); if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); });
      lb.querySelector(".prev").addEventListener("click", function () { lbShow(cur - 1); });
      lb.querySelector(".next").addEventListener("click", function () { lbShow(cur + 1); });
      lb.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") lbShow(cur - 1);
        if (e.key === "ArrowRight") lbShow(cur + 1);
      });
      lb.addEventListener("close", function () { select(cur); });
      lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
      lb.querySelector("[data-close]").addEventListener("click", function () { lb.close(); });
      if (items.length < 2) lb.querySelectorAll(".lb-nav").forEach(function (n) { n.hidden = true; });
    }
  }

  /* ---------- Prima e dopo ---------- */
  var ba = document.getElementById("ba"), range = document.getElementById("ba-range");
  if (ba && range) {
    var setCut = function (v) { ba.style.setProperty("--cut", v + "%"); };
    range.addEventListener("input", function () { setCut(range.value); });
    setCut(50);
  }

  /* ---------- Moduli: preventivo e visite ---------- */
  document.querySelectorAll(".js-form").forEach(function (f) {
    var msg = f.querySelector(".form-msg");
    function say(text, kind) { msg.textContent = text; msg.className = "form-msg " + (kind || ""); }
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f.querySelector('[name="_gotcha"]').value) return;
      var miss = [];
      if (f.dataset.tipo === "preventivo" && !f.querySelector('input[name="Lavori"]:checked')) miss.push("almeno un tipo di lavoro");
      if (!f.querySelector('[name="Nome"]').value.trim()) miss.push("nome e cognome");
      if (!f.querySelector('[name="Telefono"]').value.trim()) miss.push("telefono");
      if (!f.querySelector('[name="Privacy"]').checked) miss.push("il consenso privacy");
      if (miss.length) { say("Per inviare manca: " + miss.join(", ") + ".", "err"); return; }

      var data = new FormData(f);
      var endpoint = f.dataset.endpoint;
      var btn = f.querySelector('button[type="submit"]');
      var done = f.dataset.tipo === "visita"
        ? "Richiesta di visita inviata. Ti richiamiamo per confermare il giorno."
        : "Richiesta inviata. Ti ricontattiamo per fissare il sopralluogo.";

      if (endpoint) {
        btn.disabled = true; say("Invio in corso…");
        fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error(r.status);
            f.reset(); say(done, "ok");
          })
          .catch(function () {
            say("Invio non riuscito. Riprova tra poco oppure scrivici a " + f.dataset.email + ".", "err");
          })
          .then(function () { btn.disabled = false; });
        return;
      }

      // Nessun servizio di invio configurato: prepara un'email con i dati del modulo.
      var lines = [];
      data.forEach(function (v, k) {
        if (k.charAt(0) === "_" || k === "Privacy" || !String(v).trim()) return;
        lines.push(k + ": " + v);
      });
      var subject = f.querySelector('[name="_subject"]').value;
      var href = "mailto:" + f.dataset.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
      say("Si è aperta la tua app di posta con la richiesta già compilata: premi Invia per completarla. Se non si apre, scrivici a " + f.dataset.email + ".", "ok");
    });
  });

  /* ---------- Comparsa allo scorrimento ---------- */
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    var els = document.querySelectorAll(".rv");
    document.documentElement.classList.add("reveal-ready");
    els.forEach(function (el, i) {
      if (el.getBoundingClientRect().top < window.innerHeight) { el.classList.add("in"); return; }
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      io.observe(el);
    });
  }

  /* ---------- Parallasse leggera del palazzo ---------- */
  var bld = document.getElementById("bld");
  if (bld && !reduce) {
    window.addEventListener("scroll", function () {
      var y = Math.min(window.scrollY, 600);
      bld.setAttribute("transform", "translate(0 " + (y * 0.06).toFixed(1) + ")");
    }, { passive: true });
  }
})();
