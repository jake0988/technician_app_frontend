import React from "react";
import { Button } from "react-bootstrap";

export const DeleteCustomerButton = ({
  destroyCustomer,
  userId,
  id,
  history,
}) => {
  return (
    <Button
      className="delete-button"
      onClick={(e) => {
        e.preventDefault();
        destroyCustomer(userId, id, history);
      }}
    >
      Delete Customer
    </Button>
  );
};
