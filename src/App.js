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
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { matchPath } from "react-router";
import { Home } from "./components/Home";
import { UserNav } from "./components/users/UserNav";
import { destroyPiano } from "./actions/addPiano";
import { customerList } from "./actions/customerList";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;
    const piano = this.props.location.pathname.includes("pianos");
    const customer = this.props.location.pathname.includes("customer");

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
                  setCurrentCustomer={this.props.setCurrentCustomer}
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
            path="/users/:user_id/customers/:id"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              return customer ? (
                <CustomerCard
                  customer={customer}
                  {...props}
                  setCurrentCustomer={this.props.setCurrentCustomer}
                  pianos={this.props.pianos}
                  destroyCustomer={this.props.destroyCustomer}
                />
              ) : (
                <p>Customer Card is empty.</p>
              );
            }}
          />
          <Route
            exact
            path="/users/:user_id/customers/:customer_id/pianos/:id"
            render={(props) => {
              return (
                <PianoList
                  pianos={this.props.pianos}
                  userId={this.props.currentUser.id}
                  customerId={this.props.currentCustomer.id}
                  setCurrentPiano={this.props.setCurrentPiano()}
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
    userId: state.currentUser.id,
    pianos: state.pianos,
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    setCurrentCustomer,
    setCurrentPiano,
    destroyCustomer,
    destroyPiano,
    customerList,
  })(App)
);
