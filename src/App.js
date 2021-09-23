import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import Nav from "./components/Nav";
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import { Home } from "./components/Home";
import CustomerList from "./components/CustomerList";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.customerList();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <div className="App">
          <Nav />
          <MainContainer />
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <CustomerList /> : <Home />)}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
