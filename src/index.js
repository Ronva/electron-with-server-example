import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { init } from 'utils/client-ipc';
import * as serviceWorker from './serviceWorker';

import 'stylesheets/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
