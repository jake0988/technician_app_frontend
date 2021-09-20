import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginForm from "./reducers/loginForm";
import customers from "./reducers/customers";
import signupForm from "./reducers/signupForm";

const reducer = combineReducers({
  currentUser,
  loginForm,
  customers,
  signupForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
