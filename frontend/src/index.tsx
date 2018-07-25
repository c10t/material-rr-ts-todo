import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux'

import App from './App';
import './index.css';

import todos from './reducers/todos';
import { Todos } from './states/TodoState';

import registerServiceWorker from './registerServiceWorker';


const store: Store<Todos> = createStore(todos, []);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
