# What is this?

This package is a custom React Hook for form management. The state of the form will be managed by the package and the user can choose to provide validation logic which will be checked on form submission. If an input is invalid, an object of errors will be returned and the submission will abort.

# Installation

`npm i useFormCL --save`

Then...

```
import { useFormCL } from 'useFormCL';

const form = () => {
    const validate(formValues) {
        let errors = {};

        if (values.hasOwnProperty("firstName") && !values.firstName) {
            errors.firstName = "First name is required";
        }

        return errors;
    }

    const initialFormValues = {
        firstName: ""
    }

    const { handleChange, handleSubmit, values, errors } = useFormCL(
        callBack, //function to call on form submission
        validate, //function returning object of validation errors
        initialFormValues //object of initial form values
    );

    function callBack() {
        console.log(values.firstName)
    }

    return(
        <form onSubmit={handleSubmit} noValidate>
            <TextField
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
            />

            {/* only renders error if there is one */}
            {errors.firstName && (
              <div style={{ fontSize: 12, color: "red" }}>
                {errors.firstName}
              </div>
            )}

            <button type="submit">
              Submit
            </button>
        </form>
    )
}
```
