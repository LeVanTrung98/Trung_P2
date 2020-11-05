import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { admin } from '../reducers/AdminReducers';

const combinesStore = combineReducers({
    admin
});

const store = createStore(
    combinesStore,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
   
);
export default store;