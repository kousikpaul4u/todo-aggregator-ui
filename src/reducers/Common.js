import { common } from "constants/ActionTypes";

const initialState = {
    loader: false,
    error: null,
    success: null,
};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case common.SET_INITIAL_STATE:
            return { ...state, ...initialState };
        case common.SET_LOADER:
            return { ...state, loader: action.payload };
        case common.SET_ERROR:
            return { ...state, error: action.payload };
        case common.SET_SUCCESS:
            return { ...state, success: action.payload };
        default:
            return state;
    }
};
