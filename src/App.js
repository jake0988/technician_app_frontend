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
            currentUser={this.props.currentUser}
            customers={this.props.customers}
            pianos={this.props.pianos}
            currentCustomer={this.props.currentCustomer}
          />
        ) : null}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  currentUser={this.props.currentUser}
                  loggedIn={this.props.loggedIn}
                  customers={this.props.customers}
                  pianos={this.props.pianos}
                  appointments={this.props.appointments}
                  appointmentsList={this.props.appointmentsList}
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
            path="/users/:user_id/customers/:id/appointments/new"
            component={AddAppointmentFormWrapper}
          />
          <Route
            exact
            path="/users/:user_id/appointments/:id/edit"
            render={(props) => {
              const appointment = this.props.appointments.find(
                (appointment) => appointment.id === props.match.params.id
              );
              return (
                <EditAppointmentFormWrapper
                  {...props}
                  appointment={appointment}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:id"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              // const appointments = customer
              //   ? this.props.appointments.find(
              //       (appointment) =>
              //         parseInt(appointment.attributes.customer_id) ===
              //         parseInt(customer.id)
              //     )
              //   : null;

              // let appointments;
              // if (customer) {
              //   appointments = (customer) => {
              //     this.props.appointments.find(
              //       (appointment) =>
              //         parseInt(appointment.attributes.customer_id) ===
              //         parseInt(customer.id)
              //     );
              //   };
              // }
              return customer ? (
                <CustomerCard
                  customer={customer}
                  {...props}
                  setCurrentCustomer={this.props.setCurrentCustomer}
                  pianos={this.props.pianos}
                  destroyCustomer={this.props.destroyCustomer}
                  destroyPiano={this.props.destroyPiano}
                />
              ) : (
                <p>Customer Card is empty.</p>
              );
            }}
          />

          <Route
            exact
            path="/users/:user_id/customers/:id/appointments"
            render={(props) => {
              const customerId = parseInt(props.match.params.id);
              this.props.setCurrentCustomer(customerId);
              const appointments = this.props.appointments.filter(
                (appointment) =>
                  appointment.attributes.customer_id === parseInt(customerId)
              );

              return (
                <AppointmentList
                  appointments={appointments}
                  appointmentsList={this.props.appointmentsList}
                  userId={this.props.userId}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/appointments/:appointment_id/"
            render={(props) => {
              console.log("Match Params", props.match.params.appointment_id)
              return (
                <AppointmentCard
                  pianos={this.props.pianos}
                  userId={this.props.currentUser.id}
                  customerId={this.props.currentCustomer.id}
                  destroyPiano={this.props.destroyPiano}
                  id={props.match.params.appointment_id}
                  setCurrentAppointment={this.props.setCurrentAppointment}
                />
              );
            }}
          />

          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos"
            render={(props) => {
              return (
                <PianoList
                  pianos={this.props.pianos}
                  userId={this.props.currentUser.id}
                  customerId={this.props.currentCustomer.id}
                  destroyPiano={this.props.destroyPiano}
                  history={this.props.history}
                />
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos/new"
            component={PianoForm}
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
                  {...props}
                  user={this.props.currentUser.id}
                  customer={this.props.currentCustomer.id}
                  history={this.props.history}
                  destroyPiano={this.props.destroyPiano}
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
    currentAppointment: state.currentAppointment
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
  })(App)
);
