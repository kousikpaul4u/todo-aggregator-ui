import React from 'react';
import env from 'env.config';
import RootContext from "context/root-context";
export default class Home extends React.Component {

    static contextType = RootContext;

    constructor(props) {
        super(props);
        this.state = {
            script: {},
            link: {}
        }
    }

    importJS(url) {
        const script = document.createElement("script");
        script.async = true;
        script.src = url;
        document.body.appendChild(script);
        this.setState({ script })
    }

    importCSS(url) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        document.body.appendChild(link);
        this.setState({ link })
    }

    renderHeader() {
        const todoFormJs = env.CHILDREN.TODO_HEADR.BASE_URL + env.CHILDREN.TODO_HEADR.JS_PATH;
        const todoFormCss = env.CHILDREN.TODO_HEADR.BASE_URL + env.CHILDREN.TODO_HEADR.CSS_PATH;
        this.importJS(todoFormJs);
        this.importCSS(todoFormCss);
    }

    renderSignup() {
        const todoFormJs = env.CHILDREN.TODO_SIGNUP.BASE_URL + env.CHILDREN.TODO_SIGNUP.JS_PATH;
        const todoFormCss = env.CHILDREN.TODO_SIGNUP.BASE_URL + env.CHILDREN.TODO_SIGNUP.CSS_PATH;
        this.importJS(todoFormJs);
        this.importCSS(todoFormCss);
    }

    componentWillMount() {
        // SET ALL THE ENV CONFIG TO ACCISIBLE BY MICRO UI
        window[`${env.CHILDREN.TODO_HEADR.APP_NAME}`] = env.CHILDREN.TODO_HEADR;
        window[`${env.CHILDREN.TODO_SIGNUP.APP_NAME}`] = env.CHILDREN.TODO_SIGNUP;
        this.renderHeader();
        this.renderSignup();
    }

    componentWillUnmount() {
        document.body.removeChild(this.state.script)
        document.body.removeChild(this.state.link)
        window[`${env.CHILDREN.TODO_HEADR.APP_NAME}`] = {};
        window[`${env.CHILDREN.TODO_SIGNUP.APP_NAME}`] = {};
    }

    render() {
        return (
            <div className={`${env.APP_NAME}-container`}>
                <div id="todo_header_app">
                </div>
                <div id="todo_signup_app">
                </div>
            </div>
        )
    }

};

