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
import { customerList } from "./actions/customerList";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.customerList();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <MainContainer />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
