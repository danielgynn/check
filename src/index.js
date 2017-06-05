import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App
    url='http://localhost:3001/api/todos'
    pollInterval={2000}
  />
  , document.getElementById('root'));
registerServiceWorker();
