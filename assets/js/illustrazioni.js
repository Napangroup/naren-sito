/* Naren Immobiliare — illustrazioni degli ambienti, usate finché una scheda non ha le sue foto. */
(function () {

  var uid = 0;
  function U() { return "u" + (++uid); }

  /* ---------- Illustrazioni degli ambienti ---------- */
  function windowSvg(x, y, w, h, curtain, id) {
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9CC3E2"/><stop offset="1" stop-color="#E4EFF7"/></linearGradient></defs>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>' +
      '<rect x="' + (x + 6) + '" y="' + (y + 6) + '" width="' + (w - 12) + '" height="' + (h - 12) + '" fill="url(#' + id + ')"/>' +
      '<ellipse cx="' + (x + w * 0.35) + '" cy="' + (y + h * 0.3) + '" rx="16" ry="6" fill="#FFFFFF" opacity=".9"/>' +
      '<ellipse cx="' + (x + w * 0.5) + '" cy="' + (y + h * 0.28) + '" rx="11" ry="7" fill="#FFFFFF" opacity=".9"/>' +
      '<path d="M' + x + ' ' + (y + h * 0.78) + ' Q' + (x + w * 0.3) + ' ' + (y + h * 0.6) + ' ' + (x + w * 0.55) + ' ' + (y + h * 0.74) + ' T' + (x + w) + ' ' + (y + h * 0.7) + ' V' + (y + h - 6) + ' H' + x + ' Z" fill="#9DB89A" opacity=".8"/>' +
      '<rect x="' + (x + w / 2 - 2) + '" y="' + y + '" width="4" height="' + h + '" fill="#FFFFFF"/>' +
      '<rect x="' + x + '" y="' + (y + h * 0.45) + '" width="' + w + '" height="4" fill="#FFFFFF"/>' +
      '<rect x="' + (x - 8) + '" y="' + (y + h) + '" width="' + (w + 16) + '" height="6" fill="#FFFFFF"/>' +
      '<path d="M' + (x + w + 4) + ' ' + (y - 8) + ' h22 v' + (h + 20) + ' q-12 8 -26 0 z" fill="' + curtain + '" opacity=".92"/>' +
      '<rect x="' + (x - 14) + '" y="' + (y - 12) + '" width="' + (w + 50) + '" height="3" fill="#8C7A64"/>';
  }
  function base(p) {
    return '<rect width="400" height="300" fill="' + p.wall + '"/>' +
      '<rect y="222" width="400" height="78" fill="' + p.floor + '"/>' +
      '<g stroke="#000" stroke-opacity=".08" stroke-width="1.2"><line x1="0" y1="244" x2="400" y2="244"/><line x1="0" y1="268" x2="400" y2="268"/><line x1="0" y1="292" x2="400" y2="292"/>' +
      '<line x1="60" y1="222" x2="52" y2="244"/><line x1="170" y1="244" x2="164" y2="268"/><line x1="300" y1="222" x2="296" y2="244"/><line x1="90" y1="268" x2="84" y2="292"/><line x1="250" y1="268" x2="246" y2="292"/></g>' +
      '<rect y="217" width="400" height="6" fill="#FFFFFF" opacity=".55"/>';
  }
  function plant(x) {
    return '<rect x="' + x + '" y="192" width="30" height="30" rx="3" fill="#E6DED2"/>' +
      '<g fill="#5E8A5A"><ellipse cx="' + (x + 15) + '" cy="168" rx="8" ry="22"/><ellipse cx="' + (x + 4) + '" cy="176" rx="7" ry="18" transform="rotate(-28 ' + (x + 4) + ' 176)"/><ellipse cx="' + (x + 27) + '" cy="176" rx="7" ry="18" transform="rotate(28 ' + (x + 27) + ' 176)"/></g>' +
      '<ellipse cx="' + (x + 15) + '" cy="160" rx="5" ry="16" fill="#76A06F"/>';
  }
  function living(p) {
    var id = U();
    return base(p) + windowSvg(262, 46, 92, 124, p.accent2, id) +
      '<ellipse cx="165" cy="262" rx="128" ry="17" fill="' + p.accent2 + '" opacity=".35"/>' +
      '<rect x="112" y="68" width="96" height="64" fill="#FFFFFF"/><rect x="118" y="74" width="84" height="52" fill="' + p.art + '"/><circle cx="178" cy="92" r="12" fill="#D4AE5E"/><rect x="128" y="104" width="34" height="22" fill="#14213D" opacity=".85"/>' +
      '<rect x="60" y="148" width="210" height="52" rx="12" fill="' + p.accent + '"/>' +
      '<rect x="48" y="182" width="234" height="38" rx="9" fill="' + p.accent + '"/><rect x="48" y="200" width="234" height="20" rx="6" fill="#000" opacity=".12"/>' +
      '<rect x="36" y="164" width="28" height="56" rx="9" fill="' + p.accent + '"/><rect x="266" y="164" width="28" height="56" rx="9" fill="' + p.accent + '"/>' +
      '<rect x="82" y="158" width="54" height="32" rx="8" fill="' + p.accent2 + '"/><rect x="196" y="158" width="54" height="32" rx="8" fill="' + p.accent2 + '"/>' +
      '<rect x="56" y="220" width="5" height="9" fill="#5B4632"/><rect x="270" y="220" width="5" height="9" fill="#5B4632"/>' +
      '<rect x="118" y="238" width="96" height="7" rx="2" fill="#7A5A3C"/><rect x="126" y="245" width="4" height="16" fill="#5B4632"/><rect x="202" y="245" width="4" height="16" fill="#5B4632"/>' +
      '<circle cx="160" cy="233" r="5" fill="#D4AE5E"/>' + plant(10) +
      '<rect x="368" y="104" width="3" height="118" fill="#3B3B3B"/><path d="M354 104 h32 l-6 -22 h-20 z" fill="#FFFFFF"/><ellipse cx="370" cy="108" rx="26" ry="10" fill="#FFE7A8" opacity=".35"/>';
  }
  function bedroom(p) {
    var id = U();
    return base(p) + windowSvg(272, 50, 86, 118, p.accent2, id) +
      '<rect x="88" y="78" width="40" height="46" fill="#FFFFFF"/><rect x="92" y="82" width="32" height="38" fill="' + p.art + '"/>' +
      '<rect x="138" y="78" width="40" height="46" fill="#FFFFFF"/><rect x="142" y="82" width="32" height="38" fill="#D4AE5E" opacity=".75"/>' +
      '<rect x="188" y="78" width="40" height="46" fill="#FFFFFF"/><rect x="192" y="82" width="32" height="38" fill="#14213D" opacity=".75"/>' +
      '<rect x="62" y="134" width="196" height="72" rx="10" fill="' + p.accent2 + '"/>' +
      '<rect x="50" y="178" width="220" height="44" rx="6" fill="#FFFFFF"/>' +
      '<rect x="76" y="164" width="72" height="24" rx="9" fill="#F4F4F4"/><rect x="172" y="164" width="72" height="24" rx="9" fill="#F4F4F4"/>' +
      '<rect x="50" y="192" width="220" height="36" rx="6" fill="' + p.accent + '"/><rect x="50" y="192" width="220" height="7" fill="#FFFFFF" opacity=".25"/>' +
      '<rect x="8" y="182" width="38" height="40" rx="3" fill="#A9825B"/><rect x="24" y="166" width="5" height="16" fill="#7A5A3C"/><path d="M14 166 h26 l-5 -18 h-16 z" fill="#FFFFFF"/><ellipse cx="27" cy="170" rx="22" ry="9" fill="#FFE7A8" opacity=".35"/>' +
      '<ellipse cx="200" cy="268" rx="120" ry="14" fill="' + p.accent2 + '" opacity=".3"/>';
  }
  function kitchen(p) {
    var id = U();
    return base(p) + windowSvg(286, 50, 80, 104, p.accent2, id) +
      '<rect x="18" y="56" width="168" height="56" rx="2" fill="' + p.cab + '"/><g stroke="#FFFFFF" stroke-opacity=".5" stroke-width="2"><line x1="74" y1="56" x2="74" y2="112"/><line x1="130" y1="56" x2="130" y2="112"/></g>' +
      '<rect x="18" y="130" width="250" height="4" fill="#D6D1C8"/>' +
      '<rect x="18" y="158" width="250" height="64" rx="2" fill="' + p.cab + '"/><rect x="14" y="152" width="258" height="8" fill="#ECE9E4"/>' +
      '<g stroke="#FFFFFF" stroke-opacity=".5" stroke-width="2"><line x1="80" y1="160" x2="80" y2="222"/><line x1="142" y1="160" x2="142" y2="222"/><line x1="204" y1="160" x2="204" y2="222"/></g>' +
      '<rect x="98" y="140" width="34" height="12" rx="2" fill="#9AA3AD"/><path d="M118 152 v-24 h12" stroke="#9AA3AD" stroke-width="3" fill="none"/>' +
      '<rect x="196" y="112" width="44" height="18" fill="#C9CED4"/><rect x="190" y="124" width="56" height="6" fill="#B3B9C0"/>' +
      '<rect x="292" y="182" width="96" height="40" rx="2" fill="#A9825B"/><rect x="286" y="176" width="108" height="8" fill="#ECE9E4"/>' +
      '<line x1="320" y1="0" x2="320" y2="60" stroke="#333" stroke-width="1.5"/><path d="M306 60 a14 14 0 0 1 28 0 z" fill="' + p.accent + '"/>' +
      '<line x1="360" y1="0" x2="360" y2="60" stroke="#333" stroke-width="1.5"/><path d="M346 60 a14 14 0 0 1 28 0 z" fill="' + p.accent + '"/>' +
      '<circle cx="40" cy="146" r="6" fill="#D4AE5E"/><rect x="52" y="138" width="10" height="14" rx="2" fill="#FFFFFF"/>';
  }
  function before() {
    var id = U();
    return '<rect width="400" height="300" fill="#B5AD9D"/>' +
      '<g fill="#8F8676" opacity=".45"><ellipse cx="80" cy="60" rx="46" ry="22"/><ellipse cx="210" cy="40" rx="30" ry="14"/><ellipse cx="340" cy="210" rx="40" ry="18"/></g>' +
      '<path d="M150 20 l10 26 -8 18 12 30" stroke="#6E6658" stroke-width="2" fill="none"/>' +
      '<rect y="222" width="400" height="78" fill="#9E9178"/>' +
      '<g stroke="#6E6450" stroke-width="1.5" opacity=".7"><line x1="0" y1="246" x2="400" y2="246"/><line x1="0" y1="272" x2="400" y2="272"/><line x1="50" y1="222" x2="50" y2="300"/><line x1="120" y1="222" x2="120" y2="300"/><line x1="190" y1="222" x2="190" y2="300"/><line x1="260" y1="222" x2="260" y2="300"/><line x1="330" y1="222" x2="330" y2="300"/></g>' +
      '<rect x="262" y="46" width="92" height="124" fill="#D9D3C5"/><rect x="268" y="52" width="80" height="112" fill="#BFC6C9"/><rect x="306" y="46" width="4" height="124" fill="#D9D3C5"/>' +
      '<line x1="160" y1="0" x2="160" y2="70" stroke="#3B3B3B" stroke-width="1.5"/><circle cx="160" cy="76" r="7" fill="#F2E3A3"/>' +
      '<g stroke="#7A6A50" stroke-width="5" fill="none"><line x1="70" y1="222" x2="96" y2="110"/><line x1="112" y1="222" x2="96" y2="110"/></g><g stroke="#7A6A50" stroke-width="3"><line x1="76" y1="196" x2="108" y2="196"/><line x1="82" y1="168" x2="104" y2="168"/><line x1="88" y1="140" x2="100" y2="140"/></g>' +
      '<rect x="190" y="198" width="34" height="26" rx="2" fill="#E9E5DC"/><rect x="190" y="198" width="34" height="6" fill="#B8913F"/>' +
      '<rect x="230" y="214" width="70" height="8" fill="#CFC6B4"/>';
  }
  function svgWrap(inner, label) {
    return '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + label + '">' + inner + '</svg>';
  }
  function scene(kind, p, label) {
    var f = kind === "camera" ? bedroom : kind === "cucina" ? kitchen : living;
    return svgWrap(f(p), label);
  }




  
  var PALETTE = [
    { wall: "#E9DFD0", floor: "#C29468", accent: "#2E4A6B", accent2: "#D9C7A7", art: "#A9C4D6", cab: "#2E4A6B" },
    { wall: "#DCE6E1", floor: "#B98B5C", accent: "#B8913F", accent2: "#F2EEE6", art: "#2E4A6B", cab: "#5E7F72" },
    { wall: "#ECE3E8", floor: "#C9A27A", accent: "#14213D", accent2: "#E3CFD8", art: "#D4AE5E", cab: "#8A6F86" },
    { wall: "#E3E8EF", floor: "#B08159", accent: "#5E7F72", accent2: "#CFD8E3", art: "#B8913F", cab: "#14213D" }
  ];
  function draw(kind, seed) {
    var p = PALETTE[(Math.max(1, parseInt(seed, 10) || 1) - 1) % PALETTE.length];
    if (kind === "prima") return svgWrap(before(), "Illustrazione: ambiente prima della ristrutturazione");
    var label = kind === "camera" ? "Illustrazione di una camera" : kind === "cucina" ? "Illustrazione di una cucina" : "Illustrazione di un soggiorno";
    return scene(kind, p, label);
  }
  window.NarenIllu = { draw: draw };
  function fill(root) {
    (root || document).querySelectorAll(".illu:not([data-done])").forEach(function (el) {
      el.innerHTML = draw(el.getAttribute("data-kind") || "soggiorno", el.getAttribute("data-seed") || 1);
      el.setAttribute("data-done", "1");
    });
  }
  window.NarenIllu.fill = fill;
  fill();
})();
