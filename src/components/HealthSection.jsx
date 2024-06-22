// src/components/HealthSection.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const HealthSection = ({ formData, handleChange, errors }) => (
  <>
    <Form.Group controlId="formExerciseFrequency">
      <Form.Label>Exercise Frequency</Form.Label>
      <Form.Control
        as="select"
        name="exerciseFrequency"
        value={formData.exerciseFrequency}
        onChange={handleChange}
        isInvalid={!!errors.exerciseFrequency}
      >
        <option value="">Select...</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Rarely">Rarely</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors.exerciseFrequency}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formDietPreference">
      <Form.Label>Diet Preference</Form.Label>
      <Form.Control
        as="select"
        name="dietPreference"
        value={formData.dietPreference}
        onChange={handleChange}
        isInvalid={!!errors.dietPreference}
      >
        <option value="">Select...</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {errors.dietPreference}
      </Form.Control.Feedback>
    </Form.Group>
  </>
);

export default HealthSection;
