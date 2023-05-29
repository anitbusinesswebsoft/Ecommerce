import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <AppBar sx={{ boxShadow: 0 }} color="transparent" position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Button color="inherit">
                    <Link to="/signin" >SignIn</Link>
                </Button>
                <Button color="inherit">
                    <Link color="inherit" to="/" >SignUp</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
