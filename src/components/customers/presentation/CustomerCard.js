import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPianos } from "../../../actions/addPiano";
import { appointmentsList } from "../../../actions/appointment";
import Td from "../../appointments/Td";
import { UserNavCard } from "../../users/UserNavCard";
import { Row, Col, Button, Container } from "react-bootstrap";

const CustomerCard = ({
  currentCustomer,
  setCurrentCustomer,
  destroyCustomer,
  history,
  userId,
  currentCustomerId,
}) => {
  function addAppointment(e) {
    e.preventDefault();
    history.push(
      `/users/${userId}/customers/${currentCustomerId}/Appointments/new`
    );
  }
  const appointments = useSelector((state) =>
    state.appointments.filter(
      (appointment) =>
        appointment.attributes.customer_id === parseInt(currentCustomerId)
    )
  );
  const appointmentDates = appointments.map(
    (appointment) => appointment.attributes.date
  );
  return (
    <div className="customerCard">
      <Container fluid>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Number Of Pianos</th>
              <th>Appointments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentCustomer.attributes.name}</td>
              <td>{currentCustomer.attributes.phone_number}</td>
              <td>{currentCustomer.attributes.email}</td>
              <Td
                to={`/users/${userId}/customers/${currentCustomer.id}/pianos`}
              >
                {currentCustomer.attributes.number_of_pianos}
              </Td>
              <td>{appointmentDates}</td>
            </tr>
            <tr>
              <td>
                <b>Address</b>
              </td>
            <td colSpan={5}>{currentCustomer.attributes.address}</td></tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr style={{ display: "flex" }}>
              <td>
                <Button
                  className="edit-button"
                  onClick={() => {
                    history.push(
                      `/users/${currentCustomer.attributes.user_id}/customers/${currentCustomerId}/edit`
                    );
                  }}
                >
                  Edit Customer
                </Button>
              </td>
              <td>
                <UserNavCard
                  userId={userId}
                  currentCustomerId={currentCustomerId}
                  history={history}
                />
              </td>
              <td>
                <Button
                  className="add-button"
                  onClick={(e) => addAppointment(e)}
                >
                  Add Appoointment
                </Button>
              </td>
              <td>
                <Button
                  className="delete-button"
                  style={{ display: "flex" }}
                  onClick={(e) => {
                    e.preventDefault();
                    destroyCustomer(
                      currentCustomer.attributes.user_id,
                      currentCustomerId,
                      history
                    );
                  }}
                >
                  Delete Customer
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default CustomerCard;
