import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

const reducer = combineReducers({
  user: usersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
