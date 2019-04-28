import React from 'react';
import ReactDOM from 'react-dom';
// redux related, begin; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
// redux related, end;

import App from './components/App';


ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>, document.querySelector('#root'));