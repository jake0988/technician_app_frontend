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
import { Row, Col, Container } from "react-bootstrap";

const CustomerCard = ({
  currentCustomer,
  setCurrentCustomer,
  destroyCustomer,
  history,
  userId,
  id,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(setCurrentCustomer(currentCustomer));
      dispatch(getPianos(userId));
  }, [currentCustomer]);
  const customers = useSelector((state)=> state.customers)
  return (
    <div className="customerCard">
      <Container fluid>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Number Of Pianos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentCustomer.attributes.name}</td>
            <td>{currentCustomer.attributes.address}</td>
            <td>{currentCustomer.attributes.phone_number}</td>
            <td>{currentCustomer.attributes.email}</td>
            <Td to={`/users/${userId}/customers/${currentCustomer.id}/pianos`}>{currentCustomer.attributes.number_of_pianos}</Td>
          </tr>   
     <tr>
       <td colspan="4" align="left">
        <button className="button" onClick={()=>{history.push(`/users/${currentCustomer.attributes.user_id}/customers/${id}/edit`)}}>
          Edit Customer</button>
          </td>
      <td><UserNavCard userId={userId}
     currentCustomer={currentCustomer} history={history}/></td>
      </tr>
      <tr>
      <td colspan="5">
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          destroyCustomer(currentCustomer.attributes.user_id, id, history);
        }}
      >
        Delete Customer
      </button>
      </td>
      </tr>
      </tbody>
      </Table>
      </Container>
    </div>
  );
};
export default CustomerCard;
