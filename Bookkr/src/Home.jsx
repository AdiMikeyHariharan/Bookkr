import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import JumboLTR from './components/JumboLTR';
import Spinner from './components/Spinner';
import Writings from './components/Writings';
import Search from './components/Search';

function HomeP() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-8">
        <div className="container mx-auto">
          <Search />
          <Writings />
        </div>
      </div>
      <Jumbo />
      <JumboLTR />
      <Footer />
    </>
  );
}

export default HomeP;
