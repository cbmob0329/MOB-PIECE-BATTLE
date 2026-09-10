(function (MPB) {
  'use strict';
  function preventDoubleTapZoom() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
      const now = Date.now();
      if (now - lastTouchEnd <= 280) event.preventDefault();
      lastTouchEnd = now;
    }, { passive: false });
  }

  function showBootError(error) {
    console.error(error);
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = '<div style="width:min(100%,430px);min-height:100dvh;margin:0 auto;background:#f4efe4;color:#171516;display:grid;place-items:center;padding:28px;font-family:system-ui,sans-serif;text-align:center"><div><strong style="font-size:24px">MOB PIECE BATTLE</strong><p>画面の起動に失敗しました。</p><small>Console: ' + String(error && error.message ? error.message : error) + '</small></div></div>';
  }

  try {
    preventDoubleTapZoom();
    if (!MPB || typeof MPB.renderRoute !== 'function') throw new Error('Application scripts did not load correctly.');
    MPB.renderRoute('home');
  } catch (error) {
    showBootError(error);
  }
})(window.MPB);
