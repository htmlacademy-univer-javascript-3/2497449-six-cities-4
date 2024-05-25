import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/cards/app/app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { HelmetProvider } from 'react-helmet-async';
import PageNotFound from './pages/page-not-found/page-not-found';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <PageNotFound />
          <App />
        </HistoryRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
