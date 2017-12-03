/*
*
* @flow
*
*/

import React, {Component} from 'react';
import combineClasses from '../utils/combineClasses.js';
import pickClasses from '../utils/pickClasses.js';

type Props = {
  className?: string,
  use: string,
}
class Button extends Component {
  constructor() {
    super();
  }

  render(): React.Element<any> {
    const classStyles = {
      default: this.props.use === 'default',
    };
    let componentClass = combineClasses(
      ...pickClasses(classStyles),
      this.props.className || '',
    );

    if (!componentClass) {
      componentClass = 'default';
    }

    return (
      <button className={componentClass} name="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
