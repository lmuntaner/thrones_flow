// @flow
import React from 'react';

import logo from './logo.svg';

const Header = ({ title }: { title: string }) =>
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{ title }</h2>
  </div>;

export default Header;
