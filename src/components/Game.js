import React, { Component } from 'react';
import { object, node } from 'prop-types';
import { Provider } from 'react-redux';
import Board from './Board';

export default class Game extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Board dimensions={{
          x: 8,
          y: 8,
        }} />
      </Provider>
    );
  }
}

Game.propTypes = {
  store: object.isRequired,
  children: node,
};
