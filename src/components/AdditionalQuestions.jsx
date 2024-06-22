// src/components/AdditionalQuestions.jsx
import React from 'react';

const AdditionalQuestions = ({ additionalQuestions }) => (
  additionalQuestions.length > 0 && (
    <div className="mt-4">
      <h3>Additional Questions</h3>
      <ul>
        {additionalQuestions.map((question, index) => (
          <li key={index}>{question.question}</li>
        ))}
      </ul>
    </div>
  )
);

export default AdditionalQuestions;
