import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";

const initialState = {};
const middlewares = [thunk];

export default createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
);