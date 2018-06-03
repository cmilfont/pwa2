import React from 'react';
import { connect } from 'react-redux';
import Places from './places';

const mapStateToProps = (state) => {
  return {
    list: state.get('list').toJS(),
  }
}

const Consumer = connect(mapStateToProps);

export default Consumer(Places);