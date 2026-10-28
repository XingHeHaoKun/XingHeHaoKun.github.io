(function () {
  var root = document.documentElement;
  var KEY = 'xhhk-theme';

  // 首屏之前就恢复偏好，避免闪烁
  function applySaved() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === 'dark' || saved === 'light') {
        root.setAttribute('data-theme', saved);
        return;
      }
    } catch (e) { /* 隐私模式下忽略 */ }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark');
    }
  }
  applySaved();

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function label() {
      var dark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '☀️ 浅色' : '🌙 深色';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    label();

    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* 忽略 */ }
      label();
    });

    // 文章目录：自动高亮当前小节
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            links.forEach(function (a) { a.classList.remove('active'); });
            map[en.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '0px 0px -70% 0px' });
      Object.keys(map).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }
  });
})();
