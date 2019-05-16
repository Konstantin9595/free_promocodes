import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/configureStore'

//import reducer from './reducer'

import { Provider } from 'react-redux'
//import data from './data'



// store.subscribe(() => {
//     console.log("currentState = ", store.getState())
// })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// redux хранит и управляет именно состоянием приложения.


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();