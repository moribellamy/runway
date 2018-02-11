// @flow

import React from 'react';
import { render } from 'react-dom';
import { createStore, Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import reducer from './reducers';
import {setChecking} from './actions';
import type { Action } from './actions';
import type { State } from './reducers';

export type Store = ReduxStore<State, Action>;

const store: Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // $FlowIgnore: Flow can't know if this call is non-null.
  document.getElementById('root')
);

store.dispatch(setChecking(1000));
