import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./features/auth/authSlice"

import Navbar from "./components/Navbar"

export default function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.auth.value)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

