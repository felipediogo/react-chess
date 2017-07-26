/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Game from './components/Game';
import './style.scss';

import configureStore from './store/configureStore';

require('./favicon.ico');

const store = configureStore();

render(
  <AppContainer>
    <Game store={store} />
  </AppContainer>,
  document.getElementById('app')
);

store.subscribe(() => render(
  <AppContainer>
    <Game store={store} />
  </AppContainer>,
  document.getElementById('app')
));

if (module.hot) {
  module.hot.accept('./components/Game', () => {
    const NewGame = require('./components/Game').default;

    render(
      <AppContainer>
        <NewGame store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
