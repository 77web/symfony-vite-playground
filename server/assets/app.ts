import "./app.css";

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

function mountApp() {
  const el = document.getElementById('app');
  if (!el) {
    return;
  }
  const root = createRoot(el);
  root.render(createElement(App));
}

mountApp();
