import React from 'react';
import env from 'env.config';

export default class Home extends React.Component {

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

    renderForm() {
        const todoFormJs = env.CHILDREN.TODO_FORM.BASE_URL + env.CHILDREN.TODO_FORM.JS_PATH;
        const todoFormCss = env.CHILDREN.TODO_FORM.BASE_URL + env.CHILDREN.TODO_FORM.CSS_PATH;
        this.importJS(todoFormJs);
        this.importCSS(todoFormCss);
    }

    componentWillMount() {
        // SET ALL THE ENV CONFIG TO ACCISIBLE BY MICRO UI
        window[`${env.CHILDREN.TODO_FORM.APP_NAME}`] = env.CHILDREN.TODO_FORM;
        this.renderForm();
    }

    componentWillUnmount() {
        document.body.removeChild(this.state.script)
        document.body.removeChild(this.state.link)
        window[`${env.CHILDREN.TODO_FORM.APP_NAME}`] = {};
    }
    //env.APP_NAME.CHILDREN.TODO_FORM.APP_NAME

    render() {
        return (
            <div className={`${env.APP_NAME}-container`}>
                <section id="todo_header_app">
                </section>
            </div>
        )
    }

};

