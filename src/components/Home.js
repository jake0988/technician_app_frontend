import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>
        Welcome, please <Link to="/signup">Sign Up</Link> or{" "}
        <Link to="/login">Login</Link>
      </h2>
    </div>
  );
};
