// src/hooks/useForm.js
import { useState } from 'react';

const useJobForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      additionalSkills: {
        ...formData.additionalSkills,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useJobForm;
