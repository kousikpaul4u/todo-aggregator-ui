import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Router from './routers';
import $ from "jquery";

window.jQuery = window.$ = $;

export default class App extends Component {

    render() {
        return (
            <div>
                <Router />
            </div>
        )
    }
}