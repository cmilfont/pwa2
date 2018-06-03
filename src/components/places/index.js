import React from 'react';
import { connect } from 'react-redux';
import Places from './places';
import { FETCH_PLACES } from '../../api/constants';

const mapStateToProps = (state) => {
  return {
    list: state.get('list').toJS(),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch({
    type: FETCH_PLACES
  })
});
export default connect(mapStateToProps, mapDispatchToProps)(Places);