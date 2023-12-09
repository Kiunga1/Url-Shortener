import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import LoginPage from './pages/LoginPage'
import NoPage from './pages/NoPage'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route index path='/' Component={Home}/>
        <Route path='/signupPage' Component={SignupPage}/>
        <Route path='/loginPage' Component={LoginPage}/>
        <Route path='/forgotPasswordPage' Component={ForgotPasswordPage}/>
        <Route path='/*' Component={NoPage}/>
      </Routes>
      </BrowserRouter>
  )
};

export default App
