// src/components/TechnologySection.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const TechnologySection = ({ formData, handleChange, errors }) => (
  <>
    <Form.Group controlId="formFavoriteProgrammingLanguage">
      <Form.Label>Favorite Programming Language</Form.Label>
      <Form.Control
        as="select"
        name="favoriteProgrammingLanguage"
        value={formData.favoriteProgrammingLanguage}
        onChange={handleChange}
        isInvalid={!!errors.favoriteProgrammingLanguage}
      >
        <option value="">Select...</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors.favoriteProgrammingLanguage}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formYearsOfExperience">
      <Form.Label>Years of Experience</Form.Label>
      <Form.Control
        type="number"
        name="yearsOfExperience"
        value={formData.yearsOfExperience}
        onChange={handleChange}
        isInvalid={!!errors.yearsOfExperience}
      />
      <Form.Control.Feedback type="invalid">
        {errors.yearsOfExperience}
      </Form.Control.Feedback>
    </Form.Group>
  </>
);

export default TechnologySection;
