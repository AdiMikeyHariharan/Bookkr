import {useEffect,useState } from 'react';
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
import axios from 'axios'


function HomeP() {
 
  const [isAuth,setAuth] = useState(false)
  const [profileImage,setprofileImage] = useState("")
  const [status,setStatus] = useState("Login/Sign Up")
  const checkAuth = async () => {
    try {
        const response = await axios.get("http://localhost:8080/checkuser",{ withCredentials: true });
        const permitted = response.data.permitted
        const image = response.data.image
        setprofileImage(image)
        setAuth(permitted)
    } catch (error) {
        console.error('Error fetching user authentication status:', error);
    }
  };

  useEffect(() => {
    isAuth ? setStatus("Sign Out") : setStatus("Login/Signup")
    checkAuth();
  }, [isAuth]);
  return (
    <>
      <Carousel url={profileImage} status = {status}/>
      <div className="bg-gradient-to-r from-white to-blue-500 py-8">
        <div className="container mx-auto">
          <Search />
          <Writings />
        </div>
      </div>
      <Jumbo />
      <Footer />
    </>
  );
}

export default HomeP;
