import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from './components/theme';
import Highlight from './components/highlight';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './api/reducer';

class App extends Component {

  componentDidMount() {
    fetch('/api/places')
    .then(result => result.json())
    .then(list => this.store.dispatch({
      type: 'FETCH_PLACES',
      payload: list,
    }));
  }

  render() {
  
    this.store = createStore(reducer);

    return (
      <Provider store={this.store}>
        <Highlight>
          <div className="App">
            <Theme>
              <p className="App-intro">
                Curso de PWA
              </p>
            </Theme>
          </div>
        </Highlight>
      </Provider>
    );
  }
}

export default App;
