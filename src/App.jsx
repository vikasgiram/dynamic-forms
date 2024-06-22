// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import EventRegistrationForm from './components/EventRegistrationForm';
import JobApplicationForm from './components/JobApplicationForm';
import SurveyForm from './components/SurveyForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/event-registration" element={<EventRegistrationForm />} />
        <Route path="/job-application" element={<JobApplicationForm />} />
        <Route path="/survey-form" element={<SurveyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
