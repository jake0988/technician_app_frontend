import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import currentUser from "./reducers/currentUser";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginForm from "./reducers/loginForm";

const reducer = combineReducers({
  user: usersReducer,
  currentUser,
  loginForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
