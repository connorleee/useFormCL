import { useState, useEffect } from "react";

const useFormCL = (callback, validate, initialValues) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false); //isolates the submit callback function to only run if there is an error change.

  const handleChange = (event) => {
    // not using destructuring in order to handle the specific case where a form has a checkbox
    const value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else if (
      event.target.type === "select" ||
      event.target.type === "select-multiple"
    ) {
      value = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
    } else {
      value = event.target.value;
    }


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

export default useFormCL;
