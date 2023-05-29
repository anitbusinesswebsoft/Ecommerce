import React from 'react'
import { Stack, Button, Box, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import TextInput from '../components/TextInput'
import { signInSchema } from "../schemas/authSchema"

const initialValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ""
}

const SignIn = () => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form >
          <Box display='flex' justifyContent='center' alignItems='center' >
            <Stack direction={"column"} spacing={3}>
              <Typography variant="h5">Sign In</Typography>
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="test@email.com"
              />

              <TextInput
                label="Password"
                name="password"
                type="text"
                placeholder="*******"
              />
              <Button variant='contained' type='submit' >SignIn</Button>
            </Stack>
          </Box >
        </Form>
      </Formik>
    </>
  )
}

export default SignIn