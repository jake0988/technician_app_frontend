import thunk from "redux-thunk";
import currentUser from "./reducers/currentUser";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginForm from "./reducers/loginForm";
import customers from "./reducers/customers";
import signupForm from "./reducers/signupForm";
import addCustomerForm from "./reducers/addCustomerForm";
import currentCustomer from "./reducers/currentCustomer";
import updatePianoForm from "./reducers/updatePianoForm";
import pianos from "./reducers/pianos";
import currentPiano from "./reducers/currentPiano";
import appointments from "./reducers/appointments";
import addAppointmentForm from "./reducers/addAppointmentForm";
import currentAppointment from "./reducers/currentAppointment";


const reducer = combineReducers({
  currentUser,
  loginForm,
  customers,
  signupForm,
  addCustomerForm,
  currentCustomer,
  updatePianoForm,
  pianos,
  currentPiano,
  appointments,
  addAppointmentForm,
  currentAppointment,
});

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
