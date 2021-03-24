import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.addEventListener('load', async () => {
  console.log('path: ', window.location.pathname);
  console.log('origin: ', window.location.origin);
  console.log('host: ', window.location.hostname);
  const sw = await navigator.serviceWorker.register('/sw.js').then((reg) => {
    // registration successful
    console.log('sw registration was successful. Scope: ', reg.scope);
  }).catch(err => console.log('sw registration failed: ', err));
});