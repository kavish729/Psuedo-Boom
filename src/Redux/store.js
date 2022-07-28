import { legacy_createStore,combineReducers, applyMiddleware, } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from "./Appreducer/appreducer";


const reducers = combineReducers({
    app: appReducer
})

export const store = legacy_createStore(reducers,applyMiddleware(thunk))