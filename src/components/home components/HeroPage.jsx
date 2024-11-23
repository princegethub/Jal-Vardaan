import React from "react";
import Hero from "../../assets/hero.svg";

function HeroPage() {
  return (
    <div className="w-[100vw] h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#4EB4F8] to-[#FFFFFF]">
      {/* Main Content */}
      <div className="container w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="w-[90%] sm:w-[40%] mx-auto sm:mx-0 text-center sm:text-left px-4">
  <h1 className="text-[40px] sm:text-[64px] font-grover text-gray-900 mb-4 leading-7">
    HAR GHAR JAL
  </h1>
  <h2 className="text-[24px] sm:text-3xl text-gray-700 mb-4 font-inknut leading-3">
    Ek Sapna, Ab Haqiqat
  </h2>

  <p className="text-gray-500 mb-6 leading-tight">
    Empowering every household with access to clean and safe drinking
    water. Together, we are building a healthier and sustainable future
    for all.
  </p>
  <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
    Get Started
  </button>
</div>


        {/* Right Section - Illustration */}
        <div className=" w-[60%]  mt-6 sm:mt-0 flex justify-end">
          <img
            src={Hero} // Replace with the actual image path
            alt="Hero Illustration"
            className="w-3/4 sm:w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
