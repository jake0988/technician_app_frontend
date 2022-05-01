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
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

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
const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// let persistor = persistStore(store);
export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
