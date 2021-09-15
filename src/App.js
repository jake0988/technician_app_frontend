import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import NavBar from "./component/NavBar";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <NavBar />;
  }
}

export default connect(null, { getCurrentUser })(App);
