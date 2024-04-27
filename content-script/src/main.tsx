import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './app.css?inline';
import App from './App';

const extensionName = "";// TODO: Fill out Extension name
const extensionHostElement = document.createElement('div');
extensionHostElement.id = `${extensionName}-extension-host`;
document.body.appendChild(extensionHostElement);
const shadowRoot = extensionHostElement.attachShadow({ mode: 'open' });


ReactDOM.createRoot(shadowRoot).render(
  <React.StrictMode>
    <style type="text/css">{styles}</style>
    <App />
  </React.StrictMode>,
)


