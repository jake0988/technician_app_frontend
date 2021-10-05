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
import CustomerForm from "./components/CustomerForm";
import NavBar from "./components/NavBar";
import CustomerCard from "./components/CustomerCard";
import PianoForm from "./components/PianoForm";
import currentCustomer from "./reducers/currentCustomer";
import { PianoList } from "./components/PianoList";
import EditCustomerFormWrapper from "./components/EditCustomerFormWrapper";

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
    const { loggedIn } = this.props;
    return (
      <div className="App">
        {loggedIn ? <NavBar location={this.props.location} /> : <Home />}
        <Switch>
          <Route exact path="/users/:id/customers" component={CustomerList} />
          {/* <Route
            exact
            path="/users/:id/customers/new"
            component={CustomerForm}
          /> */}
          <Route
            exact
            path="/users/:id/customers/:id/pianos"
            render={(props) => {
              <PianoList pianos={props} />;
            }}
          />
          <Route
            exact
            path="/users/:id/customers/:id/pianos/new"
            component={PianoForm}
          />
          <Route
            exact
            path="/users/:id/customers/:id"
            render={(props) => {
              const customer = this.props.customers.find(
                (customer) => customer.id === props.match.params.id
              );
              const pianos = this.props.pianos;
              return customer ? (
                <CustomerCard customer={customer} {...props} pianos={pianos} />
              ) : (
                <p>Customer list is empty.</p>
              );
            }}
          />
          <Route
            exact
            path="/users/:id/customers/:id/edit"
            render={(props) => <EditCustomerFormWrapper {...props} />}
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
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, currentCustomer })(App)
);
