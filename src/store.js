import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {};

const middleware = [thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store;