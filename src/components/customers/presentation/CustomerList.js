import React from "react";
import { Link } from "react-router-dom";
import { DeleteCustomerButton } from "./DeleteCustomerButton";
import { AddAppointmentButton } from "./AddAppointmentButton";
import { Table } from "react-bootstrap";
import Td from "../../appointments/Td";

export const CustomerList = ({
  userId,
  customers,
  destroyCustomer,
  history,
  addAppointment,
  location,
  match,
  to,
  setCurrentCustomer,
}) => {
  const handleClick = (e, customer) => {
    e.preventDefault();
    history.push(`/users/${userId}/customers/${customer.id}`);
  };
  // const ContentTag = to ? Link : "div";
  const customerCard =
    customers.length > 0 ? (
      customers.map((customer, index) => (
        <Table striped bordered hover responsive key={index}>
          <thead>
            <tr>
              <th>Number</th>
              <th>Customer Name</th>
              <th>Number of Pianos</th>
            </tr>
          </thead>
          <tbody>
            <tr key={customer.attributes.id}>
              <td>{index + 1}</td>
              <Td to={`/users/${userId}/customers/${customer.id}`}>
                {customer.attributes.name}{" "}
              </Td>
              <Td to={`/users/${userId}/customers/${customer.id}/pianos`}>
                {customer.attributes.number_of_pianos}
              </Td>
              <td>
                <Link
                  to={`/users/${userId}/customers/${customer.attributes.id}/appointments`}
                >
                  Appointments
                </Link>
              </td>
              <td>
                <AddAppointmentButton
                  destroyCustomer={destroyCustomer}
                  userId={userId}
                  id={customer.attributes.id}
                  customer={customer.attributes}
                  location={location}
                  match={match}
                  addAppointment={addAppointment}
                  history={history}
                  setCurrentCustomer={setCurrentCustomer}
                />
              </td>
              <td>
                <DeleteCustomerButton
                  destroyCustomer={destroyCustomer}
                  userId={userId}
                  id={customer.attributes.id}
                  history={history}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      ))
    ) : (
      <h2>No Customers In Database</h2>
    );
  return <div className="customerList">{customerCard}</div>;
};
