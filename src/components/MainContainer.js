import React from "react";
import CustomerList from "./customers/presentation/CustomerList";

const MainContainer = ({ customers }) => {
  return <CustomerList customers={customers} />;
};

export default MainContainer;
