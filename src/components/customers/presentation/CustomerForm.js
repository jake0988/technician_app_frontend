import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../../../actions/updateCustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const CustomerForm = ({
  handleSubmit,
  formData,
  updateCustomerForm,
  editMode,
}) => {
  const { name, address, email, phone_number } = formData;

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
          <Col md={2}>
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
          <Col md={3}>
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
          <Col>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                name="address"
                value={address}
                placeholder="Enter Address"
                onChange={handleChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
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
