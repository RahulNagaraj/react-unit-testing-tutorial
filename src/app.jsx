import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import configureStore from './redux/configureStore';

import Routes from './Routes';

const store = configureStore();

const appRoot = document.getElementById('root');
const App = () => {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    appRoot,
  );
};

App();
