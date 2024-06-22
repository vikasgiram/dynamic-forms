// src/components/EventRegistrationForm.jsx
import React from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const EventRegistrationForm = () => {
  const initialState = {
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  };

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email must be a valid email address';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = 'Age must be a number greater than 0';
    }
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) {
      newErrors.guestName = 'Guest name is required';
    }
    return newErrors;
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(initialState, validate);

  const onSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
    // Reset form
    setFormData(initialState);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Event Registration Form</h1>
          <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAttendingWithGuest">
              <Form.Label>Are you attending with a guest?</Form.Label>
              <Form.Control
                as="select"
                name="attendingWithGuest"
                value={formData.attendingWithGuest}
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Form.Control>
            </Form.Group>
            {formData.attendingWithGuest === 'Yes' && (
              <Form.Group controlId="formGuestName">
                <Form.Label>Guest Name</Form.Label>
                <Form.Control
                  type="text"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  isInvalid={!!errors.guestName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.guestName}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EventRegistrationForm;
