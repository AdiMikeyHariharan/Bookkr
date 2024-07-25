import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Jumbo from './components/Jumbo'
import JumboLTR from './components/JumboLTR'
import Spinner from './components/Spinner'
import Writings from './components/Writings'
import Search from './components/Search'

function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Search/>
    <Writings/>
    <Jumbo/>
    <JumboLTR/>
    <Footer/>
    </>
  )
}

export default App
