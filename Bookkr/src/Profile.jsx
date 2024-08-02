import React, { useState } from 'react';
import './CardComponent.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header url={profileImage}/>
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 py-16 min-h-screen">
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg overflow-hidden text-gray-900">
          {/* Card Header */}
          <div className="h-32 bg-blue-50 flex items-center justify-center">
            <div className="w-full h-full bg-blue-200 rounded-t-lg"></div>
          </div>
          {/* Profile Image */}
          <div className="relative flex justify-center -mt-16">
            <div className="relative w-28 h-28 border-4 border-white rounded-full overflow-hidden shadow-lg">
              <img
                className="object-cover object-center h-full w-full"
                src={profileImage}
                alt="User"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 cursor-pointer hover:bg-blue-500">
              <label htmlFor="fileInput" className="cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.4 3.6L16 0H8L4.6 3.6H1v18h22V3.6h-3.6zM12 4c.828 0 1.5.672 1.5 1.5S12.828 7 12 7s-1.5-.672-1.5-1.5S11.172 4 12 4zm0 5c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zM4.5 19l1.062-3H8l1.5 3H4.5z" />
                </svg>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
          <div className="text-center mt-4">
            <h2 className="font-semibold text-xl">John Doe</h2>
            <p className="text-gray-600 text-sm">Driver/Passenger</p>
          </div>
          <ul className="py-4 mt-4 text-gray-700 flex items-center justify-around border-t border-gray-200">
            <li className="flex flex-col items-center">
              <svg className="w-6 h-6 fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-sm">2k</span>
            </li>
            <li className="flex flex-col items-center">
              <svg className="w-6 h-6 fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <span className="text-sm">10k</span>
            </li>
            <li className="flex flex-col items-center">
              <svg className="w-6 h-6 fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <span className="text-sm">15</span>
            </li>
          </ul>
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white text-center py-3 rounded-lg text-md transition duration-200 hover:bg-blue-500">
              Sign Out
            </button>
          </div>
        </div>
      </main>
      <Footer className="fixed bottom-0 w-full" />
    </div>
  );
};

export default Profile;
