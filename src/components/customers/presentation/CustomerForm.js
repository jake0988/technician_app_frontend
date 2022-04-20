import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../../../actions/updateCustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useRef, useState } from "react";
import { useEffect } from "react";

const CustomerForm = ({
  handleSubmit,
  formData,
  updateCustomerForm,
  editMode,
}) => {
  const { name, email, address0, address1, address2, address3, address4, phone_number } =
    formData;

    const [state, toggleState] = useState("")
  useEffect(()=>{

    
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCustomerForm(name, value);
  };

  const handleChangeState = (e) =>{
    toggleState(e.target.value)
  }
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
            <Form.Control
              type="address"
              name="address0"
              value={address0}
              onChange={handleChange}
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              type="address"
              name="address1"
              value={address1}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="address"
                name="address2"
                value={address2}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress4">
              <Form.Label>State</Form.Label>
              <Form.Select onChange={handleChangeState} defaultValue="Choose...">
                <option>Choose...</option>
                <option value="">N/A</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
                
              </Form.Select>
              <Form.Control
                type="address"
                name="address3"
                value={state ?? address3}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="address"
                name="address4"
                value={address4}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
        </Row>
        {editMode ? (
          <Button
            className="edit-button"
            variant="primary"
            value="Edit Customer"
            type="submit"
          >
            Edit
          </Button>
        ) : (
          <Button
            className="add-button"
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
