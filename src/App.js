import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/users/Login.js";
import Logout from "./components/users/Logout";
import Signup from "./components/users/Signup";
import { CustomerList } from "./components/customers/presentation/CustomerList";
import NavBar from "./components/NavBar";
import CustomerCard from "./components/customers/presentation/CustomerCard";
import PianoForm from "./components/pianos/PianoForm";
import { setCurrentCustomer } from "./actions/currentCustomer";
import { PianoList } from "./components/pianos/PianoList";
import EditCustomerFormWrapper from "./components/customers/container/EditCustomerFormWrapper";
import AddCustomerFormWrapper from "./components/customers/container/AddCustomerFormWrapper";
import { destroyCustomer } from "./actions/customerList";
import { PianoCard } from "./components/pianos/PianoCard";
import { setCurrentPiano } from "./actions/addPiano";
import { Home } from "./components/Home";
import { UserNav } from "./components/users/UserNav";
import { destroyPiano } from "./actions/addPiano";
import { customerList } from "./actions/customerList";
import { addAppointment } from "./actions/appointment";
import AddAppointmentFormWrapper from "./components/appointments/AddAppointmentFormWrapper";
import EditAppointmentFormWrapper from "./components/appointments/EditAppointmentFormWrapper";
import { appointmentsList } from "./actions/appointment";
import AppointmentList from "./components/appointments/AppointmentList";
import { setCurrentAppointment } from "./actions/appointment";
import AppointmentCard from "./components/appointments/AppointmentCard";
import { clearCurrentAppointment } from "./actions/appointment";
import currentCustomer from "./reducers/currentCustomer";
import "./styles.css";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.appointmentsList(this.props.userId);
  }

  render() {
    const { loggedIn } = this.props;
    const piano = this.props.location.pathname.includes("pianos");
    return (
      <div className="App">
        {loggedIn ? (
          <NavBar history={this.props.history} piano={piano} />
        ) : null}
        {loggedIn ? (
          <UserNav
            user={this.props.currentUser}
            customers={this.props.customers}
            pianos={this.props.pianos}
            match={this.props.match}
            history={this.props.history}
          />
        ) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Home
                  userId={this.props.currentUser}
                  loggedIn={this.props.loggedIn}
                  customers={this.props.customers}
                  pianos={this.props.pianos}
                  appointments={this.props.appointments}
                  appointmentsList={this.props.appointmentsList}
                  history={props.history}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers"
            render={(props) => {
              return (
                <CustomerList
                  {...props}
                  customers={this.props.customers}
                  userId={this.props.currentUser.id}
                  customerList={this.props.customerList}
                  destroyCustomer={this.props.destroyCustomer}
                  history={this.props.history}
                  location={this.props.location}
                  match={this.props.match}
                  addAppoinment={this.props.addAppoinment}
                  setCurrentCustomer={this.props.setCurrentCustomer}
                  appointments={this.props.appointments}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/new"
            component={AddCustomerFormWrapper}
          />
          <Route
            exact
            path="/users/:user_id/customers/:id/edit"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              return <EditCustomerFormWrapper {...props} customer={customer} />;
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments/new"
            render={(props) => {
              const currentCustomerId = props.match.params.customer_id;
              return (
                <AddAppointmentFormWrapper
                  history={props.history}
                  currentCustomerId={currentCustomerId}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments/:appointment_id/edit"
            render={(props) => {
              const currentAppointmentId = props.match.params.appointment_id;
              const currentCustomerId = props.match.params.customer_id;

              const userId = props.match.params.user_id;
              return (
                <EditAppointmentFormWrapper
                  {...props}
                  appointments={this.props.appointments}
                  currentAppointmentId={currentAppointmentId}
                  currentCustomerId={currentCustomerId}
                  userId={userId}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id"
            render={(props) => {
              const currentCustomer = this.props.customers.find(
                (customer) => customer.id === props.match.params.customer_id
              );
              const currentCustomerId = props.match.params.customer_id;
              return currentCustomer ? (
                <CustomerCard
                  currentCustomer={currentCustomer}
                  {...props}
                  setCurrentCustomer={this.props.setCurrentCustomer}
                  currentCustomerId={currentCustomerId}
                  pianos={this.props.pianos}
                  destroyCustomer={this.props.destroyCustomer}
                  userId={this.props.userId}
                />
              ) : (
                <p>Customer Card is empty.</p>
              );
            }}
          />

          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments"
            render={(props) => {
              const currentCustomerId = props.match.params.customer_id;
              const currentCustomer = this.props.customers.find(
                (customer) => customer.id === currentCustomerId
              );
              const appointments = this.props.appointments.filter(
                (appointment) =>
                  appointment.attributes.customer_id === currentCustomerId
              );

              return (
                <AppointmentList
                  appointments={appointments}
                  appointmentsList={this.props.appointmentsList}
                  userId={this.props.userId}
                  currentCustomer={currentCustomer}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments/:appointment_id/"
            render={(props) => {
              const currentAppointmentId = props.match.params.appointment_id;
              return (
                <AppointmentCard
                  userId={props.match.params.user_id}
                  currentAppointmentId={currentAppointmentId}
                  currentCustomerId={props.match.params.customer_id}
                  history={props.history}
                />
              );
            }}
          />

          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos"
            render={(props) => {
              const currentCustomer = props.match.params.customer_id;
              const currentCustomerPianos = this.props.pianos.filter(
                (piano) =>
                  piano.attributes.customer_id === parseInt(currentCustomer)
              );

              return (
                <PianoList
                  props={props}
                  currentCustomerPianos={currentCustomerPianos}
                  userId={props.match.params.user_id}
                  customerId={currentCustomer}
                  destroyPiano={this.props.destroyPiano}
                  history={props.history}
                  isCustomerCard="y"
                  currentAppointment={this.props.match.params.appointmentId}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos/new"
            render={(props) => {
              return (
                <PianoForm
                  history={props.history}
                  userId={this.props.userId}
                  customerId={props.match.params.customer_id}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments/:appointment_id/pianos/new"
            render={(props) => {
              return (
                <PianoForm
                  history={props.history}
                  userId={props.match.params.user_id}
                  customerId={props.match.params.customer_id}
                  appointmentId={props.match.params.appointment_id}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos/:id"
            render={(props) => {
              const piano = this.props.pianos.find(
                (piano) => piano.id === props.match.params.id
              );
              return piano ? (
                <PianoCard
                  history={this.props.history}
                  piano={piano}
                  setCurrentPiano={this.props.setCurrentPiano}
                />
              ) : null;
            }}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    customers: state.customers,
    appointments: state.appointments,
    userId: state.currentUser.id,
    pianos: state.pianos,
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
    currentAppointment: state.currentAppointment,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    setCurrentCustomer,
    setCurrentPiano,
    setCurrentAppointment,
    destroyCustomer,
    destroyPiano,
    customerList,
    addAppointment,
    appointmentsList,
    clearCurrentAppointment,
  })(App)
);
