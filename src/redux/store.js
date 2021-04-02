import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

export default function () {
    const middlewares = [thunk];
    return createStore(combineReducers(rootReducer), {}, applyMiddleware(...middlewares));
}