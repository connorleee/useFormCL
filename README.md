# What is this?

Custom React Hook for form management.

# Installation

`npm i useFormCL --save`

Then...

```
import { useFormCL } from 'useFormCL';

const form = () => {
    const { handleChange, handleSubmit, values, errors } = useFormCL(
        callBack, //function to call on form submission
        validate, //object with validation errors
        initialFormValues //object of initial form values
    );

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
