import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp'
import Home from './Home'
import Publish from './publish_ride'
import Profile from './Profile'
import Rides from './Rides';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import RideInfo from './ride_info'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/publish_ride' element={<Publish/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/rides" element={<Rides />} />
      <Route path='/Registration' element={<Login/>}/>
      <Route path="/ride_info" element={<RideInfo />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
