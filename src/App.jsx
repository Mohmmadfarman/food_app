

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './comopents/navbar/Navbar'
import Home from './pages/home/Home'
import Card from './pages/home/card/Card'
import Placeorder from './pages/place-order/Placeorder'
import Footer from './comopents/footer/Footer'
import { useState } from 'react'
import Login from './comopents/login/Login'
import Error from './Error'
import { Navigate } from 'react-router-dom'

function App() {

  const [login,setlogin]=useState(false)


  return (


    <>
    {
      login && <Login setlogin={setlogin} />
    }
    <div className='app'>
      <Navbar setlogin={setlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </div>
   
    <Footer/>
    </>
  )
}

export default App
