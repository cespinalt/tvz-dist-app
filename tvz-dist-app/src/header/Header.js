/*
*
* @flow
*
*/

import React, { Component } from 'react';

type Props = {
  children?: Array<React.Element<any>>,
};

const Header = (props: Props): React.Element<any> => {
  return (
    <header>
      <div className="center-wrapper">
        <div className="logo-container">
          <img alt="" src="../images/logo.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
