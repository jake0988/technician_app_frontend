import React from "react";

export const DeleteCustomerButton = ({
  destroyCustomer,
  userId,
  id,
  history,
}) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        destroyCustomer(userId, id, history);
      }}
    >
      Delete Customer
    </button>
  );
};
