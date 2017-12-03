/*
*
* @flow
*
*/

import React, { Component } from 'react';
import combineClasses from '../utils/combineClasses.js';

class Layout extends Component {
  render() {
    const componentClass = combineClasses(
      'layout-wrapper',
      this.props.className || ''
    );
    return <div className={componentClass}>{this.props.children}</div>;
  }
}

class LayoutColumn extends Component {
  render() {
    return <div className="col">{this.props.children}</div>;
  }
}

export default {
  Layout,
  LayoutColumn,
};
