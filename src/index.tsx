import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/css/style.css';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './redux/config/configStore';
import { Provider } from 'react-redux';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
