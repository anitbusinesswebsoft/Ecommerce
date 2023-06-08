import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useTheme } from '@mui/material/styles';

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import LoginSignUp from './pages/LoginSignUp'
import Navbar from "./components/Navbar"
import Adminsection from './pages/AdminSection/Adminsection';
import ProtectedRoute from './components/ProtectedRoute';

import { useSelector, useDispatch } from "react-redux"


export default function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.auth.value)
  const theme = useTheme();

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<LoginSignUp />}>
          <Route index element={<SignIn />} />
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route path='/admin' element={<ProtectedRoute><Adminsection /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

