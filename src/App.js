// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import HousesList from './components/HousesList';
import './App.css';
import type { Store } from 'redux';

class App extends Component {
  props: {
    store: Store
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <Header title="Welcome to Game of Thrones" />
          <HousesList />
        </div>
      </Provider>
    );
  }
}

export default App;
