import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../../../actions/updateCustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useRef } from "react";

const CustomerForm = ({
  handleSubmit,
  formData,
  updateCustomerForm,
  editMode,
}) => {
  const { name, email, address0, address1, address2, address3, address4, phone_number } =
    formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCustomerForm(name, value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createCustomer(formData, userId, history);
  // };

  return (
    <Container fluid>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone_number"
                value={phone_number}
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address"
                name="address0"
                value={address0}
                onChange={handleChange} placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor"
    type="address"
    name="address1"
    value={address1} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridAddress3">
      <Form.Label>City</Form.Label>
      <Form.Control type="address"
                name="address2"
                value={address2}
                onChange={handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAddress4">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      <Form.Control type="address"
                name="address3"
                value={address3}
                onChange={handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control type="address"
                name="address4"
                value={address4}
                onChange={handleChange}/>
    </Form.Group>
  </Row>
        </Row>
        {editMode ? (
          <Button
            classname="edit-button"
            variant="primary"
            value="Edit Customer"
            type="submit"
          >
            Edit
          </Button>
        ) : (
          <Button
            classname="add-button"
            variant="primary"
            value="Create Customer"
            type="submit"
          >
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : null;

  return {
    customers: state.customers,
    formData: state.addCustomerForm,
    userId,
  };
};

export default connect(mapStateToProps, { createCustomer, updateCustomerForm })(
  CustomerForm
);
