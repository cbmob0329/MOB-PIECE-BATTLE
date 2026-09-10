import './styles/base.css';
import './styles/home.css';
import './styles/components.css';
import './styles/battle.css';
import { renderRoute } from './router.js';

function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 280) event.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });
}

preventDoubleTapZoom();
renderRoute('home');
