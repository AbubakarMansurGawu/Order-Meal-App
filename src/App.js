import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'
// import CategoryList from './Components/CategoryList'


const App = () => {
  return (
    <Router>
      <Navbar />

    <Routes>
        <Route index path='/' element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/register' element={<Register />} />
    </Routes>  
</Router>
   
  )
}

export default App