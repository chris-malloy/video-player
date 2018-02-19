import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './config/config';

const API_KEY = config.API_KEY

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
