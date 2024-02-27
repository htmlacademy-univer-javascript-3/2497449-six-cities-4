import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/cards/app/app';

export const Setting = {
  placesCount: 234
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Setting.placesCount}/>
  </React.StrictMode>,
);
