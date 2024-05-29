import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Login from './Components/login'
import SignIn from './Components/sign-In'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoutes from './ProtectedRoutes'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
