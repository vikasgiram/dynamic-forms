// src/utils/validation.js
export const validateFormData = (formData) => {
    const errors = {};
  
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email must be a valid email address';
    }
    if (!formData.surveyTopic) errors.surveyTopic = 'Survey Topic is required';
  
    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteProgrammingLanguage) {
        errors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
      }
      if (!formData.yearsOfExperience) {
        errors.yearsOfExperience = 'Years of Experience is required';
      } else if (isNaN(formData.yearsOfExperience) || formData.yearsOfExperience <= 0) {
        errors.yearsOfExperience = 'Years of Experience must be a number greater than 0';
      }
    }
  
    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!formData.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) {
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!formData.fieldOfStudy) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    if (!formData.feedback) {
      errors.feedback = 'Feedback is required';
    } else if (formData.feedback.length < 50) {
      errors.feedback = 'Feedback must be at least 50 characters';
    }
  
    return errors;
  };
  