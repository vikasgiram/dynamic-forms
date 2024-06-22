// src/components/SurveyForm.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import AdditionalQuestions from './AdditionalQuestions';
import useForm from '../hooks/useSurveyForm';
import { validateFormData } from '../utils/validation';

const SurveyForm = () => {
  const initialState = {
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  };

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialState, validateFormData);

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.surveyTopic) {
      fetch(`https://opentdb.com/api.php?amount=5&category=${formData.surveyTopic === 'Technology' ? 18 : formData.surveyTopic === 'Health' ? 21 : 23}`)
        .then(response => response.json())
        .then(data => setAdditionalQuestions(data.results))
        .catch(error => console.error('Error fetching questions:', error));
    }
  }, [formData.surveyTopic]);

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Survey Form</h1>
          <Form onSubmit={(e) => handleSubmit(e, handleFormSubmit)}>
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
            <Form.Group controlId="formSurveyTopic">
              <Form.Label>Survey Topic</Form.Label>
              <Form.Control
                as="select"
                name="surveyTopic"
                value={formData.surveyTopic}
                onChange={handleChange}
                isInvalid={!!errors.surveyTopic}
              >
                <option value="">Select...</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.surveyTopic}
              </Form.Control.Feedback>
            </Form.Group>
            {formData.surveyTopic === 'Technology' && (
              <TechnologySection
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {formData.surveyTopic === 'Health' && (
              <HealthSection
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {formData.surveyTopic === 'Education' && (
              <EducationSection
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            <Form.Group controlId="formFeedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                isInvalid={!!errors.feedback}
              />
              <Form.Control.Feedback type="invalid">
                {errors.feedback}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <AdditionalQuestions additionalQuestions={additionalQuestions} />
        </Col>
      </Row>
    </Container>
  );
};

export default SurveyForm;
