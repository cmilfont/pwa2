import React from 'react';
import PropTypes from 'prop-types';
import Place from './place';

class Consumer extends React.Component {
  static contextTypes = {
    highlight: PropTypes.func,
    highlights: PropTypes.array,    
  }
  render() {
    const { highlight, highlights } = this.context;
    return (
      <Place
        highlight={highlight}
        highlights={highlights}
        {...this.props}
      />
    )
  }
}

export default Consumer;