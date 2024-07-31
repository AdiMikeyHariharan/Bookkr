import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Publish from './publish_ride'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/publish_ride' element={<Publish/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
