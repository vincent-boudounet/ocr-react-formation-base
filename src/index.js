import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let name="vincent"

ReactDOM.render(<App name={name}/>, document.getElementById('root'));
registerServiceWorker();
