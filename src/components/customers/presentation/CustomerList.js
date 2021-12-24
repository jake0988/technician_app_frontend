import React from "react";
import { Link } from "react-router-dom";
import { DeleteCustomerButton } from "./DeleteCustomerButton";
import { AddAppointmentButton } from "./AddAppointmentButton";
import { Table } from "react-bootstrap";
import AppointmentCard from "../../appointments/AppointmentCard";

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
  const handleClick = (customer) => {
    history.push(`/users/${userId}/customers/${customer.id}`);
  };
  const ContentTag = to ? Link : "div";
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
              <td className="link" onClick={() => handleClick(customer)}>
                {customer.attributes.name}{" "}
              </td>
              <td>{customer.attributes.number_of_pianos}</td>
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
        /* <p key={customer.attributes.id}>
          <Link to={`/users/${userId}/customers/${customer.attributes.id}`}>
            <span>
              {index + 1}. {customer.attributes.name}{" "}
            </span>
            <span>
              <DeleteCustomerButton
                destroyCustomer={destroyCustomer}
                userId={userId}
                id={customer.attributes.id}
                history={history}
              />
            </span>
          </Link>
        </p> */
        // ))
      ))
    ) : (
      <h2>No Customers In Database</h2>
    );
  return (
    <div className="customerList">
      <p className="text-center">
        <strong>Click name to view customer's pianos page</strong>
      </p>
      <ContentTag>{customerCard}</ContentTag>
    </div>
  );
};

// export default connect(null, { customerList, setCurrentCustomer })(
//   CustomerList
// );
