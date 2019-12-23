import { commonReducer } from "reducers/Common";
import { combineReducers } from "redux";

export default combineReducers({
    common: commonReducer,
});