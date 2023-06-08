import React from 'react'
import { TextField } from "@mui/material"
import { useField } from "formik"

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField
            margin="normal"
            fullWidth
            label={label}
            variant="outlined"
            InputProps={{
                autoComplete: 'off',
            }}
            error={Boolean(meta.touched && meta.error)}
            helperText={Boolean(meta.touched && meta.error) ? meta.error : `   `}
            {...field} {...props}
        />
    );
}

export default TextInput
