import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import { Switch, Route, Link, matchPath } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/users/Login.js";
import Logout from "./components/users/Logout";
import Signup from "./components/users/Signup";
import { Home } from "./components/Home";
import CustomerList from "./components/customers/presentation/CustomerList";
import NavBar from "./components/NavBar";
import CustomerCard from "./components/customers/presentation/CustomerCard";
import PianoForm from "./components/pianos/PianoForm";
import { setCurrentCustomer } from "./actions/setCurrentCustomer";
import { PianoList } from "./components/pianos/PianoList";
import EditCustomerFormWrapper from "./components/customers/container/EditCustomerFormWrapper";
import AddCustomerFormWrapper from "./components/customers/container/AddCustomerFormWrapper";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.customerList();
  }

  // handleCurrentCustomer = (id, name) => {
  //   this.setState((id, name) => ({ ...currentCustomer, name: name, id: id }));
  // };

  render() {
    // const getParams = (pathname) => {
    //   const matchProfile = matchPath(pathname, {
    //     path: `/users/${this.props.userId}/customers/:customerId`,
    //   });
    //   return (matchProfile && matchProfile.params) || {};
    // };
    const { loggedIn } = this.props;
    return (
      <div className="App">
        {loggedIn ? <NavBar history={this.props.history} /> : <Home />}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              <Home
                {...props}
                loggedIn={this.props.loggedIn}
                customers={this.props.customers}
              />;
            }}
          />
          <Route exact path="/customers" component={CustomerList} />
          <Route
            exact
            path="/customers/new"
            component={AddCustomerFormWrapper}
          />
          <Route
            exact
            path="/pianos"
            render={(props) => {
              <PianoList pianos={props} />;
            }}
          />
          <Route exact path="/pianos/new" component={PianoForm} />
          <Route
            exact
            path="/customers/:id"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              return customer ? (
                <CustomerCard
                  customer={customer}
                  {...props}
                  pianos={this.props.pianos}
                />
              ) : (
                <p>Customer Card is empty.</p>
              );
            }}
          />
          <Route
            exact
            path="/customers/:id/edit"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              return <EditCustomerFormWrapper {...props} customer={customer} />;
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

const mapStateToProps = (state, ownprops) => {
  return {
    loggedIn: !!state.currentUser,
    customers: state.customers,
    userId: state.currentUser.id,
    pianos: state.pianos,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, setCurrentCustomer })(App)
);
