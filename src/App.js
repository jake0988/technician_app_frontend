import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import Nav from "./components/NavBar";
import MainContainer from "./components/MainContainer";
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

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.customerList();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/users/:id"
            render={() => (loggedIn ? <NavBar /> : <Home />)}
          />

          <Route exact path="/customers/new" component={AddCustomerForm} />
          <Route exact path="/customers" component={CustomerList} />
          <Route exact path="/customers/:id" component={CustomerCard} />
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <Nav /> : <Home />)}
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
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
