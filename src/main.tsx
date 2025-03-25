//if (window.location.pathname === "/qr") {
  //window.location.replace("/#/qr");
// }
const validPaths = ["/collection", "/bestsellers", "/gallery", "/new-arrivals", "/about", "/qr"];

if (validPaths.includes(window.location.pathname)) {
  window.location.replace("/#"+window.location.pathname);
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);