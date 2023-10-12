import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ForgetPassword from '../Auth/ForgetPassword'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        
      </Routes>
    </>
  )
}

export default Routing
