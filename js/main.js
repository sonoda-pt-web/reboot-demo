(function () {
  'use strict';

  // メニュー開閉（スマホ）
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('global-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    });
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'メニューを開く');
      });
    });
  }

  // 見本のためリンクしていないボタン
  var toast = document.getElementById('toast');
  var timer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-show');
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove('is-show');
    }, 2200);
  }
  document.querySelectorAll('.js-dummy').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('見本のためリンクしていません');
    });
  });
})();
