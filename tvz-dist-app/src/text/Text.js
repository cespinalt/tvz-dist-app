/*
*
* @flow
*
*/

import React, {Component} from 'react';
import pickClasses from '../utils/pickClasses.js';

/**
 * Make text entities usable for both mobile and web
 */
class Text extends Component {
  render() {
    const classStyles = {
      'upcase': this.props.case === 'upper',
      'fupcase': this.props.case === 'firstUp',
      'lowercase': this.props.case === 'lowecase',
      'h2': this.props.case === 'big',
      'h3': this.props.size === 'normal',
      'h4': this.props.size === 'small',
    };

    const componentClass = pickClasses(classStyles);
    return (
      <p className={componentClass}>{this.props.children}</p>
    );
  }
}

export default Text;
