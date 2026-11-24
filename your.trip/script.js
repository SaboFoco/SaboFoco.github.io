// TestFlight: prova ad aprire l'app, ricadi sul sito Apple se non è installata.
document.querySelectorAll('[data-testflight]').forEach(function (link) {
  link.addEventListener('click', function () {
    var start = Date.now();
    window.setTimeout(function () {
      if (document.hidden || Date.now() - start > 1600) return;
      window.location.href = 'https://testflight.apple.com/';
    }, 900);
  });
});

// I contenuti sono sempre visibili: nessuna sezione può restare vuota
// se l'animazione non scatta. L'entrata è solo un leggero movimento.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.tile, .step, .smart-card').forEach(function (el, i) {
    el.style.animation = 'rise .65s cubic-bezier(.2,.8,.2,1) both';
    el.style.animationDelay = Math.min(i * 45, 360) + 'ms';
  });
}

// La barra si compatta quando si scorre.
var nav = document.querySelector('.nav');
var last = window.scrollY;
window.addEventListener('scroll', function () {
  var y = window.scrollY;
  nav.style.transform = (y > last && y > 160) ? 'translateY(-100%)' : 'translateY(0)';
  last = y;
}, { passive: true });
