import { useState, useEffect } from "react";

const useForm = (callback, validate, initialValues) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false); //isolates the submit callback function to only run if there is an error change.

  const handleChange = (event) => {
    // not using destructuring in order to handle the specific case where a form has a checkbox
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate(values).then((res) => {
      setIsSubmitting(true);
      setErrors(res); //handle validation
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
