import React, { useState } from 'react'
import { Stack, Button, Box, Grid, Typography, Snackbar } from "@mui/material"
import MuiAlert from "@mui/material/Alert"
import { Formik, Form } from "formik"
import { signUpSchema } from "../schemas/authSchema"
import TextInput from '../components/TextInput'
import axios from "axios"
import { useSelector } from 'react-redux';
import useDynamicApiFetch from '../customHooks/useDynamicApiFetch';
const apiUrl = `${import.meta.env.VITE_API_URL}/auth/signup`

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ""
}

const signUpUser = async (userDetails) => {
  const result = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, userDetails)
  return result.data
}

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({})

  const { data: data1, loading: loading1, error: error1 } = useDynamicApiFetch(apiUrl, userDetails,'POST' );

  const [alert, setAlert] = useState({
    open: true,
    msg: "aaaaaaaaaaaa",
    type: "info"
  });

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alert.open}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert severity={alert.type} sx={{ width: '100%' }}>
          {alert.msg}
        </Alert>
      </Snackbar>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setUserDetails(values)

          // const result =  signUpUser(values)
          // console.log(result);
          setSubmitting(false);
        }}
      >
        <Box display='flex' justifyContent='center' alignItems='center' >
          <Form >
            <Stack direction={"column"} spacing={3} >
              <Typography variant="h5">Sign Up</Typography>
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
              <Button variant='contained' type='submit' >SignUp</Button>

            </Stack>
          </Form>
        </Box >
      </Formik>
    </>
  )
}

export default SignUp

// import React from 'react';
// import {
//   Button,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Grid,
//   Box,
//   Typography,
//   Container,
// } from '@mui/material';

// import { makeStyles } from "@mui/styles"
// const useStyles = makeStyles(() => ({
//   root: {
//     // marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%',
//     // marginTop: theme.spacing(1),
//   },
//   submit: {
//     // margin: theme.spacing(3, 0, 2),
//   },
//   borderBox: {
//     border: "2px solid #ccc",
//     padding: "16px",
//     borderRadius: "4px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   }
// }));

// const SignUp = () => {
//   const classes = useStyles();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.borderBox}>
//         <div className={classes.root}>

//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="fname"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="lname"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions, and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Box mt={5}>
//           <Typography component="p" variant="p">
//             Dont have a account
//           </Typography>
//         </Box>
//       </div>

//     </Container>
//   );
// };

// export default SignUp;
