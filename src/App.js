import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Cart from './Pages/Cart'
import InputAddress from './Pages/InputAddress'



const App = () => {


  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/form' element={<InputAddress />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;