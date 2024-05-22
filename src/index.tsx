import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/cards/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { reviews } from './mock/reviews';
import { fetchOffersAction } from './store/api-actions';
import { checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
