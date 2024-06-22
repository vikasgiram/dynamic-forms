// src/components/EducationSection.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const EducationSection = ({ formData, handleChange, errors }) => (
  <>
    <Form.Group controlId="formHighestQualification">
      <Form.Label>Highest Qualification</Form.Label>
      <Form.Control
        as="select"
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
        isInvalid={!!errors.highestQualification}
      >
        <option value="">Select...</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors.highestQualification}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formFieldOfStudy">
      <Form.Label>Field of Study</Form.Label>
      <Form.Control
        type="text"
        name="fieldOfStudy"
        value={formData.fieldOfStudy}
        onChange={handleChange}
        isInvalid={!!errors.fieldOfStudy}
      />
      <Form.Control.Feedback type="invalid">
        {errors.fieldOfStudy}
      </Form.Control.Feedback>
    </Form.Group>
  </>
);

export default EducationSection;
