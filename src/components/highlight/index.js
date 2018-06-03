import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Highlight extends React.Component {

  static childContextTypes = {
    highlight: PropTypes.func,
    highlights: PropTypes.array,
  }

  getChildContext() {
    return {
      highlight: this.highlight,
      highlights: this.props.highlights,
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
  state => {
    return ({
      highlights: state.get('highlights').toJS()
    })
  },
  dispatch => ({
    addHighlight: payload => dispatch({
      type: 'SELECT_TEXT',
      payload,
    })
  })
)(Highlight);