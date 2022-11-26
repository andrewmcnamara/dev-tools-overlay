import React from 'react';
import ReactDOM from 'react-dom/client';
import './dev-tools.css';

const modules = import.meta.glob('./dev-tools-local.js', { eager: true });

console.dir({ modules });

import featureToggles from '../feature-toggles';

async function install() {
  function DevTools() {
    return (
      <div id="dev-tools">
        <div>🛠</div>
        <div className="tools">WHANNN</div>
      </div>
    );
  }
  const devToolsRoot = document.createElement('div');
  document.body.appendChild(devToolsRoot);
  ReactDOM.createRoot(devToolsRoot).render(<DevTools />);
}

export { install };
