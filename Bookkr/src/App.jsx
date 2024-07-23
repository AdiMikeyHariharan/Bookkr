import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    </>
  )
}

export default App
