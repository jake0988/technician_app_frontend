import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import { Home } from "./components/Home";
import CustomerList from "./components/CustomerList";
import AddCustomerForm from "./components/AddCustomerForm";
import NavBar from "./components/NavBar";
import CustomerCard from "./components/CustomerCard";
import { PianoList } from "./components/PianoList";
import PianoForm from "./components/PianoForm";
import currentCustomer from "./reducers/currentCustomer";
import { PianoCard } from "./components/PianoCard";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentCustomer: {
  //       id: "",
  //       name: "",
  //     },
  //   };
  // }

  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.customerList();
  }

  // handleCurrentCustomer = (id, name) => {
  //   this.setState((id, name) => ({ ...currentCustomer, name: name, id: id }));
  // };

  render() {
    const { loggedIn, pianos } = this.props;
    return (
      <div className="App">
        {loggedIn ? <NavBar location={this.props.location} /> : <Home />}
        <Switch>
          <Route exact path="/users/:id/customers" component={CustomerList} />
          <Route
            exact
            path="/users/:id/customers/new"
            component={AddCustomerForm}
          />

          <Route
            exact
            path="/users/:id/customers/:id/pianos"
            component={PianoList}
          />

          <Route
            exact
            path="/users/:id/customers/:id/pianos/new"
            component={PianoForm}
          />
          <Route
            exact
            path="/users/:id/customers/:id/pianos/:id"
            render={(props) => {
              const piano = pianos.find(
                (piano) => piano.id === props.match.params.id
              );

              return <PianoCard piano={piano} {...props} />;
            }}
          />
          <Route
            exact
            path="/users/:id/customers/:id"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              return customer ? (
                <CustomerCard customer={customer} {...props} />
              ) : (
                <p>Customer list is empty.</p>
              );
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
    pianos: state.pianos,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, currentCustomer })(App)
);
