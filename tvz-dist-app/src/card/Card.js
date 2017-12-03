/*
*
* @flow
*
*/

import React, {Component} from 'react';
import combineClasses from '../utils/combineClasses.js';

type Props = {
  className?: string,
  children: Array<React.Element<any>>,
};

class Card extends Component {
  constructor(props: Props) {
    super(props);
  }

  render(): React.Element<any> {
    const {children, className} = this.props;
    const componentClass = combineClasses('card-root', className);
    return (
      <div className={componentClass} >
        {this.props.children}
      </div>
    );
  }
};

const CardTitle = (): React.Element<any> => {
  // TODO: Flesh this out later
  return <div />;
};

class CardSection extends Component {
  constructor(props: Props) {
    super();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
};

export default {
  Card,
  CardSection,
  CardTitle,
};
