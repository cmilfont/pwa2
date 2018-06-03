import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from './components/theme';
import Highlight from './components/highlight';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './api/reducer';
import sagas from './api/sagas';

const sagaMiddleware = createSagaMiddleware({});
const history = createHistory();
const middlewares = [
  routerMiddleware(history),
  sagaMiddleware
];

const enhancedCompose = composeWithDevTools({});
const composedMiddlewares = enhancedCompose(
  applyMiddleware(...middlewares)
);

const store = createStore(reducer, composedMiddlewares);

sagaMiddleware.run(sagas);

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Highlight>
            <div className="App">
              <Theme>
                <p className="App-intro">
                  Curso de PWA
                </p>
              </Theme>
            </div>
          </Highlight>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
