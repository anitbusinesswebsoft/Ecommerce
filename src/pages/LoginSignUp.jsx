import React from 'react'
import { Outlet } from 'react-router-dom';
import { Grid, Paper, CssBaseline } from "@mui/material"

const backgroundImage = {
    backgroundImage: 'url(https://source.unsplash.com/random?ecommerce)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const LoginSignUp = () => {
 
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={backgroundImage}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Outlet/>
            </Grid>
        </Grid>
    )
}

export default LoginSignUp