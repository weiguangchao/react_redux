import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { enthusiasm } from './reducers';
import { IStoreState } from './types';
import App from './App';
import Hello from './containers/Hello';
import { EnthusiasmAction } from './actions';

import './index.css';

// const store = createStore<IStoreState>(
//   enthusiasm,
//   {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript',
//   },
//   composeWithDevTools()
// );

declare global {
  /* tslint:disable */
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }

  /* tslint:enable */
}

const store = createStore(
  combineReducers({enthusiasm: enthusiasm}),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore<IStoreState, EnthusiasmAction, null, null>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
