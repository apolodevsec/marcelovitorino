(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Rotating word with typing effect */
  var words = ['campanhas', 'mandatos', 'governos', 'prefeituras', 'gabinetes'];
  var rot = document.getElementById('rot');
  if (rot && !reduce) {
    var wi = 0, ci = words[0].length, deleting = true, hold = 26;
    setInterval(function () {
      if (hold > 0) { hold--; return; }
      var w = words[wi];
      if (deleting) {
        ci--; rot.textContent = w.slice(0, ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      } else {
        var nw = words[wi]; ci++; rot.textContent = nw.slice(0, ci);
        if (ci === nw.length) { deleting = true; hold = 26; }
      }
    }, 70);
  }

  /* Urna: rotating stats + keypad */
  var stats = [
    ['50+', 'eleições em todo o Brasil'],
    ['5/5', 'regiões do país, em todos os pleitos'],
    ['2006', 'início no marketing digital'],
    ['~20', 'anos de atuação no marketing'],
    ['0', 'distinção ideológica']
  ];
  var statEl = document.getElementById('lcd-stat');
  var titleEl = document.getElementById('lcd-title');
  var hintEl = document.getElementById('lcd-hint');
  var d1 = document.getElementById('d1'), d2 = document.getElementById('d2');
  var si = 0, typed = '', paused = false, timer = null;

  function show(big, cap) {
    statEl.innerHTML = '';
    var b = document.createElement('span'); b.className = 'big'; b.textContent = big;
    var c = document.createElement('span'); c.className = 'cap'; c.textContent = cap;
    statEl.appendChild(b); statEl.appendChild(c);
    statEl.classList.remove('swap'); void statEl.offsetWidth; statEl.classList.add('swap');
  }
  function cycle() { if (paused) return; si = (si + 1) % stats.length; show(stats[si][0], stats[si][1]); }
  function startCycle() { if (!reduce && !timer) timer = setInterval(cycle, 2800); }
  startCycle();

  function setDigits() {
    d1.textContent = typed[0] || ''; d2.textContent = typed[1] || '';
    [d1, d2].forEach(function (d) { d.classList.remove('on'); });
    var last = typed.length === 1 ? d1 : d2;
    if (typed.length) { void last.offsetWidth; last.classList.add('on'); }
  }
  document.querySelectorAll('.pad .n').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typed.length >= 2) return;
      paused = true; typed += btn.textContent; setDigits();
      titleEl.textContent = 'Seu voto';
      if (typed.length === 2) {
        show(typed, 'Número registrado. Agora aperte CONFIRMA para falar comigo no WhatsApp.');
        hintEl.textContent = 'CORRIGE apaga e recomeça';
      } else {
        hintEl.textContent = 'Digite mais um número';
      }
    });
  });
  document.getElementById('k-corrige').addEventListener('click', function () {
    typed = ''; setDigits(); paused = false; titleEl.textContent = 'Trajetória';
    hintEl.textContent = 'Digite um número e aperte CONFIRMA';
    si = 0; show(stats[0][0], stats[0][1]);
  });
  document.getElementById('k-branco').addEventListener('click', function () {
    paused = true; typed = ''; setDigits(); titleEl.textContent = 'Voto em branco';
    show('Branco', 'Não elege ninguém. Comunicação sem estratégia também não.');
    hintEl.textContent = 'CORRIGE volta ao início';
  });

  /* Count-up numbers when they enter view */
  var counters = document.querySelectorAll('[data-count]');
  function run(el) {
    var to = +el.getAttribute('data-count'), from = +(el.getAttribute('data-from') || 0), t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* Spotlight following the cursor on cards */
  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
  });

  /* Lead form builds the WhatsApp message */
  var nome = document.getElementById('f-nome'), msg = document.getElementById('f-msg');
  var count = document.getElementById('f-count'), send = document.getElementById('f-send');
  function build() {
    var tipo = (document.querySelector('input[name="tipo"]:checked') || {}).value || '';
    var txt = 'Olá, Marcelo!';
    if (nome.value.trim()) txt += ' Sou ' + nome.value.trim() + '.';
    txt += ' Quero conversar sobre ' + tipo + '.';
    if (msg.value.trim()) txt += ' ' + msg.value.trim();
    send.href = 'https://api.whatsapp.com/send?phone=5561998156161&text=' + encodeURIComponent(txt);
    count.textContent = msg.value.length + ' / 180';
  }
  document.getElementById('lead').addEventListener('input', build);
  document.getElementById('lead').addEventListener('change', build);
  document.getElementById('lead').addEventListener('submit', function (e) { e.preventDefault(); });
  build();

  /* Copy phone */
  var copyBtn = document.getElementById('copy-btn'), num = document.getElementById('wa-num');
  copyBtn.addEventListener('click', function () {
    var ok = function () { copyBtn.textContent = 'Copiado'; setTimeout(function () { copyBtn.textContent = 'Copiar número'; }, 1800); };
    var fb = function () { var r = document.createRange(); r.selectNodeContents(num); var s = getSelection(); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = 'Selecionado'; };
    try { navigator.clipboard.writeText('+5561998156161').then(ok, fb); } catch (e) { fb(); }
  });
})();
