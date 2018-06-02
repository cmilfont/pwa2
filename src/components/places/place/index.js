import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Place from './place';

class Consumer extends React.Component {

  render() {
    debugger;
    //const { highlight } = this.context;
    const { highlights } = this.props
    return (
      <Place
        highlights={highlights}
        {...this.props}
      />
    )
  }
}

export default connect(({ highlights }) => ({ highlights }))(Consumer);