import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginForm from "./reducers/loginForm";
import customers from "./reducers/customers";
import signupForm from "./reducers/signupForm";
import addCustomerForm from "./reducers/addCustomerForm";
import createCustomer from "./reducers/createCustomer";
import currentCustomer from "./reducers/currentCustomer";
import updatePianoForm from "./reducers/updatePianoForm";
import pianos from "./reducers/pianos";

const reducer = combineReducers({
  createCustomer,
  currentUser,
  loginForm,
  customers,
  signupForm,
  addCustomerForm,
  currentCustomer,
  updatePianoForm,
  pianos,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
