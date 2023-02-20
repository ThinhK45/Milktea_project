import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import { Provider } from './Redux/store.js';
ReactDOM.render(
    <Prodiver store={store}>
        <App />
    </Prodiver>,

    document.getElementById('root')
);
