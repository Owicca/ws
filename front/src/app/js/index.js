import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app';
import reducer from './api/reducers';


let store = createStore(reducer);

let root = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  root);
