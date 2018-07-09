import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import App from './components/App';

const store = configureStore(window.__INITIAL_STATE__);

const render = App => ReactDOM.hydrate(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./components/App.js", () => {
    const App = require("./components/App").default;
    render(App);
  });
}

render(App);
