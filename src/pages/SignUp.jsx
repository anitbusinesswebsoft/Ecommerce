import React, { useState } from 'react'
import { Button, Box, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Formik, Form } from "formik"

import { signUpSchema } from "../schemas/authSchema"
import TextInput from '../components/TextInput'
import Alert from '../components/Alert'
import useDynamicFetchApi from '../customHooks/useDynamicApiFetch';
const apiUrl = `/auth/signup`

const initialValues = {
  displayName: 'anit',
  email: 'anit@email.com',
  password: '123456',
  confirmPassword: '123456'
}

const SignUp = () => {
  const [userDetails, setUserDetails] = useState(null)
  const { data, loading, error:apiError, msg } = useDynamicFetchApi(apiUrl, userDetails, 'POST');
  const [alert, setAlert] = useState(false);

  const alertfn = () => {
    setTimeout(() => setAlert(true), 1000);
  }

  return (
    <>
      <Alert open={alert} type={apiError?"error": "info"} msg={msg} onClose={() => setAlert(false)} />

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          setUserDetails(values)
          alertfn()
          setSubmitting(false);
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">Sign Up</Typography>
          <Box sx={{ mt: 1 }} >
            <Form>
              <TextInput
                label="Name"
                name="displayName"
                type="text"
                placeholder="Jane"
              />

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

              <TextInput
                label="Confirm Password"
                name="confirmPassword"
                type="text"
                placeholder="*******"
              />
              <Button fullWidth variant='contained' type='submit' sx={{ mt: 3, mb: 2 }} >SignUp</Button>
            </Form>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Formik >
    </>
  )
}

export default SignUp
