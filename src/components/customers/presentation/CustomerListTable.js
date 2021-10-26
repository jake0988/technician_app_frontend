import React from "react";
import { Table } from "react-bootstrap";
import { CustomerList } from "./CustomerList";

export const CustomerListTable = ({
  userId,
  customers,
  destroyCustomer,
  history,
}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Number</th>
          <th>Customer Name</th>
        </tr>
      </thead>
      <tbody>
        <CustomerList
          userId={userId}
          customers={customers}
          destroyCustomer={destroyCustomer}
          history={history}
        />
      </tbody>
    </Table>
  );
};
