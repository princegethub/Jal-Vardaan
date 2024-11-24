import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import LoginIllu from '../assets/Login_illu.png';
import { Link } from 'react-router';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-b from-[#EAF7FF] to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:w-[80%] mx-auto md:flex-row items-center justify-between">


          {/* left Section - Illustration */}
          <div className="hidden md:block w-full md:w-[45%]">
            <img
              src={LoginIllu}
              alt="Illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          {/* right Section - Login Form */}
          <div className="w-full md:w-[50%] p-8 rounded-lg shadow-md">
            {/* Logo and Heading */}
            <div className="text-center flex items-center md:text-left mb-8">
              <img
                src={Logo}
                alt="Jal Vardaan Logo"
                className="w-16 mx-auto md:mx-0 mb-4"
              />
              <div className="ml-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[#406B95]">
                  Jal Vardaan
                </h1>
                <p className="text-sm text-gray-700">
                  Department of Drinking Water & Sanitation <br />
                  Ministry of Jalshakti
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your ID"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3 cursor-pointer text-gray-500"
                >
                  {showPassword ? '🙈' : '👁️'}
                </span>
              </div>
              <div className="mb-6">
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option selected disabled>Select Your Role</option>
                  <option>PHED</option>
                  <option>Gram Panchyat</option>
                  <option>User</option>
                </select>
              </div>
           
              <button
                type="submit"
                className="w-full bg-[#406B95] text-white p-3 rounded hover:bg-[#305274] transition"
              >
                Login
              </button>
        
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
