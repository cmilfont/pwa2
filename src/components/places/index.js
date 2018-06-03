import React from 'react';
import { connect } from 'react-redux';
import Places from './places';
import {fromJS} from 'immutable';
import { FETCH_ENTITY } from '../../api/constants';

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['entities', 'places'], fromJS([])).toJS(),
  }
}

export default connect(mapStateToProps)(Places);