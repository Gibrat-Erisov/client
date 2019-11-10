import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import {Provider} from "react-redux"
import store from './reducer/store'
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <BrowserRouter> 
        <Provider store={store}> 
            <App />
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));


serviceWorker.unregister();
