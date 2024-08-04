import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default function Login() {

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();


  const username = watch("username");
  const [usernameAvailable, setUsernameAvailable] = useState(true); // Added state to track username availability

  useEffect(() => {
    const checkUser = async (username) => {
      if (!username && username!=null) {
        setUsernameAvailable(true); // Reset if username is empty
        return;
      }
      
      try {
        const response = await axios.get(`http://localhost:8080/checkuser/${username}`);
        setUsernameAvailable(response.data.available); 
      } catch (error) {
        console.error('Error checking username:', error);
      }
    };

    const debounceTimer = setTimeout(() => {
      checkUser(username);
    }, 300); // Delay for 300ms

    return () => clearTimeout(debounceTimer); // Cleanup the timer
  }, [username]);
 
  const onSubmit_ = async (data) => {
    bcrypt.hash(data.password,10)
        .then((hashedPassword)=>{
            data.password = hashedPassword
        })
    try {
      const response = await axios.post('http://localhost:8080/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials:true,
      });
      
      console.log(response.data); // Log the response data
      navigate('/Home')
      // Handle successful response (e.g., redirect, show a message, etc.)
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
      // Handle errors (e.g., show an error message)
    }
  };
  return (
    <div className="relative min-h-screen bg-gray-200 flex items-center justify-center overflow-hidden" style={{
        backgroundImage: 'url("../assets/login.jpeg")',
        backgroundSize: 'cover', // Adjust to fit the container
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
        }}>

      {/* Centered Form */}
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md relative z-10">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit_)}>
          <div className="mb-4 relative">
            <input id="Username" className = "w-full border-b focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer duration-500" autoComplete="off"
              {...register("username", {
                required: "Please Enter the Username",
              })}   
              />
              <label htmlFor="Username" className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:text-blue-600 duration-500 ${watch("username")?.length > 0 ? "-top-4 text-xs" : "peer-focus:-top-4"}`}>Username</label>
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            {watch("username") != null && (usernameAvailable ? <p className="text-green-500">Username Available</p> : <p className='text-red-500'>Username Is Taken</p>)}
          </div>
          <div className="mb-4 relative">
            <input id="Email" className = "w-full border-b focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer duration-500" autoComplete="off"
              {...register("emailId", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            <label htmlFor="Email" className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:text-blue-600 duration-500 ${watch("emailId")?.length > 0 ? "-top-4 text-xs" : "peer-focus:-top-4"}`}>Email</label>
            {errors.emailId && <p className="text-red-500">{errors.emailId.message}</p>}
          </div>
          <div className="mb-4 relative">
            <input id="Password" className = "w-full border-b focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer duration-500" autoComplete="off"
              {...register("password", { required: "Password is required" })}
              />
             <label htmlFor="Password" className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:text-blue-600 duration-500 ${watch("password")?.length > 0 ? "-top-4 text-xs" : "peer-focus:-top-4"}`}>Password</label>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
