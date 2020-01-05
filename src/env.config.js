import $ from "jquery";

const DEV_ENV = {
    "APP_NAME": "todo-agg-app",
    "ENABLE_LOGGING": true,
    "CHILDREN": {
        "TODO_HEADR": {
            "APP_NAME": "todo_header_app",
            "ENABLE_LOGGING": true,
            "BASE_URL": "http://localhost:5000/static/",
            "JS_PATH": "js/main.js",
            "CSS_PATH": "css/main.css",
            "API_CONFIG": "/config/api_config.json"
        },
        "TODO_SIGNUP": {
            "APP_NAME": "todo_signup_app",
            "ENABLE_LOGGING": true,
            "BASE_URL": "http://localhost:5001/static/",
            "JS_PATH": "js/main.js",
            "CSS_PATH": "css/main.css",
            "API_CONFIG": "/config/api_config.json"
        }
    }
};

const REACT_APP_BUILD_ENV = process.env.REACT_APP_BUILD_ENV;
let env;

if (REACT_APP_BUILD_ENV === "dev") {
    env = DEV_ENV;
} else {
    $.ajax({
        async: false,
        url: process.env.PUBLIC_URL + "/config.json",
        success: function (data) {
            env = data;
        }
    });
}

export default env;
