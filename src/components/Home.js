import React from "react";
import Login from "./users/Login";
import Logout from "./users/Logout";
import { Link } from "react-router-dom";
import CustomerCard from "./customers/presentation/CustomerCard";

export const Home = ({ loggedIn, customers }) => {
  return (
    <div>
      {!loggedIn ? (
        <h2>
          Welcome, please <Link to="/signup">Sign Up</Link> or{" "}
          <Link to="/login">Login</Link>
        </h2>
      ) : null}
      {customers ? (
        <ul>
          {customers.map((customer) => {
            return (
              <li>
                <Link to={`/customers/${customer.id}`} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No customers in database </p>
      )}
    </div>
  );
};
