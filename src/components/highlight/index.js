import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Highlight extends React.Component {

  static childContextTypes = {
    highlight: PropTypes.func,
  }

  getChildContext() {
    return {
      highlight: this.highlight,
    }
  }

  componentDidMount() {
    window.onmouseup = this.highlight;
  }

  highlight = () => {
    const selection = window.getSelection();
    this.props.addHighlight(selection.toString());
  }

  render() {
    return this.props.children;
  }
}

export default connect(
  null,
  dispatch => ({
    addHighlight: payload => dispatch({
      type: 'SELECT_TEXT',
      payload,
    })
  })
)(Highlight);