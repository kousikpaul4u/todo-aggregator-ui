import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import initializeStore from "store/index";
import 'styles/index.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

ReactDOM.render(
    <Provider store={initializeStore()}>
        <App />
    </Provider>,
    document.getElementById("root")
);
