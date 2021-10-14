import React from "react";
import { Home } from "./Home";

const MainContainer = (props, { select, loggedIn, customers }) => {
  const selectText = { select } ? (
    <p>Select a customer from customer list to edit customers</p>
  ) : null;
  const userOptions = { loggedIn } ? null : (
    <Home props={props} loggedIn={loggedIn} customers={customers} />
  );
  return (
    <div>
      {selectText}
      {userOptions}
    </div>
  );
};

export default MainContainer;
