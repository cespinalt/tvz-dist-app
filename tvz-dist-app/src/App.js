/*
*
* @flow
*
*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header/Header.js';
import LoginMenu from './menu/LoginMenu.js';

class App extends Component {
  render(): React.Element<any> {
    return (
      <div className="App">
        <Header />
        <LoginMenu />
      </div>
    );
  }
}

export default App;
