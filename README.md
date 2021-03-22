# What is this?

Custom React Hook for form management.

# Installation

`npm i useFormCL --save`

Then...

```
import { useFormCL } from 'useFormCL';

const { handleChange, handleSubmit, values, errors } = useFormCL(
    callBack, //function to run on submit
    validate, //object with validation errors
    initialFormValues //object of initial form values
);
```
