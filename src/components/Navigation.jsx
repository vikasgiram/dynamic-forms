// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Navigation = () => (
  <Container className="text-center mt-5">
    <Row>
      <Col>
        <h1>Forms Navigation</h1>
        <Button as={Link} to="/event-registration" className="m-3" variant="primary">
          Event Registration Form
        </Button>
        <Button as={Link} to="/job-application" className="m-3" variant="secondary">
          Job Application Form
        </Button>
        <Button as={Link} to="/survey-form" className="m-3" variant="success">
          Survey Form
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Navigation;
