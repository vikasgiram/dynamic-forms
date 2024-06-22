// src/components/JobApplicationForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import useForm from '../hooks/useJobForm';

const JobApplicationForm = () => {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: {
      JavaScript: false,
      CSS: false,
      Python: false,
    },
    interviewTime: '',
  };

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email must be a valid email address';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be a valid number';
    }
    if ((formData.position === 'Developer' || formData.position === 'Designer') && !formData.relevantExperience) {
      newErrors.relevantExperience = 'Relevant Experience is required';
    } else if (formData.relevantExperience && isNaN(formData.relevantExperience)) {
      newErrors.relevantExperience = 'Relevant Experience must be a number greater than 0';
    }
    if (formData.position === 'Designer' && !formData.portfolioURL) {
      newErrors.portfolioURL = 'Portfolio URL is required';
    } else if (formData.portfolioURL && !/^https?:\/\/.+\..+$/.test(formData.portfolioURL)) {
      newErrors.portfolioURL = 'Portfolio URL must be a valid URL';
    }
    if (formData.position === 'Manager' && !formData.managementExperience) {
      newErrors.managementExperience = 'Management Experience is required';
    }
    if (!Object.values(formData.additionalSkills).some((skill) => skill)) {
      newErrors.additionalSkills = 'At least one skill must be selected';
    }
    if (!formData.interviewTime) {
      newErrors.interviewTime = 'Preferred Interview Time is required';
    }
    return newErrors;
  };

  const { formData, errors, handleChange, handleCheckboxChange, handleSubmit } = useForm(initialState, validate);

  const onSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
    // Reset form
    setFormData(initialState);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Job Application Form</h1>
          <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
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
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPosition">
              <Form.Label>Applying for Position</Form.Label>
              <Form.Control
                as="select"
                name="position"
                value={formData.position}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </Form.Control>
            </Form.Group>
            {(formData.position === 'Developer' || formData.position === 'Designer') && (
              <Form.Group controlId="formRelevantExperience">
                <Form.Label>Relevant Experience (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleChange}
                  isInvalid={!!errors.relevantExperience}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.relevantExperience}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            {formData.position === 'Designer' && (
              <Form.Group controlId="formPortfolioURL">
                <Form.Label>Portfolio URL</Form.Label>
                <Form.Control
                  type="text"
                  name="portfolioURL"
                  value={formData.portfolioURL}
                  onChange={handleChange}
                  isInvalid={!!errors.portfolioURL}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.portfolioURL}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            {formData.position === 'Manager' && (
              <Form.Group controlId="formManagementExperience">
                <Form.Label>Management Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="managementExperience"
                  value={formData.managementExperience}
                  onChange={handleChange}
                  isInvalid={!!errors.managementExperience}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.managementExperience}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            <Form.Group controlId="formAdditionalSkills">
              <Form.Label>Additional Skills</Form.Label>
              {['JavaScript', 'CSS', 'Python'].map((skill) => (
                <Form.Check
                  type="checkbox"
                  label={skill}
                  name={skill}
                  key={skill}
                  checked={formData.additionalSkills[skill]}
                  onChange={handleCheckboxChange}
                />
              ))}
              {errors.additionalSkills && (
                <div className="invalid-feedback d-block">{errors.additionalSkills}</div>
              )}
            </Form.Group>
            <Form.Group controlId="formInterviewTime">
              <Form.Label>Preferred Interview Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="interviewTime"
                value={formData.interviewTime}
                onChange={handleChange}
                isInvalid={!!errors.interviewTime}
              />
              <Form.Control.Feedback type="invalid">
                {errors.interviewTime}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JobApplicationForm;
