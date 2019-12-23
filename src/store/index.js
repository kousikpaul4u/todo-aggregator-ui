import { applyMiddleware, createStore } from "redux";
import rootReducer from "reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";
import env from "env.config.js";

function initializeStore() {
    let store = "";
    if (env.ENABLE_LOGGING) {
        store = createStore(
            rootReducer,
            applyMiddleware(logger, thunk)
        );
    } else {
        store = createStore(
            rootReducer,
            applyMiddleware(thunk)
        );
    }
    return store;
}

export default initializeStore;