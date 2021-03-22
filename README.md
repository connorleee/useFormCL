# What is this?

Custom React Hook for form management.

# Installation

`npm i useFormCL --save`

Then...

```
import { useFormCL } from 'useFormCL';

const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    initialFormValues
);
```
