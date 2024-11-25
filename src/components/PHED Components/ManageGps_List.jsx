import React, { useState } from "react";
import Image1 from "../../assets/PHED/addlist.png";
import Image2 from "../../assets/PHED/List.png";

function ManageGps_List() {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddGpClick = () => {
    setIsAdding(true);
  };

  const handleBackClick = () => {
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white overflow-x-hidden">
      {isAdding ? (
        // Add Gram Panchayat Form View
        <div
          className="container mx-auto py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10"
          style={{ maxWidth: "90%" }}
        >
          {/* Left Illustration */}
          <div className="hidden lg:block w-[45%]">
            <img
              src={Image1}
              alt="Add Gram Panchayat Illustration"
              className="w-full h-[60vh] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6 sm:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
              Add Gram Panchayat
            </h2>
            <form className="space-y-6">
              {[
                {
                  label: "Gram Panchayat Name",
                  id: "gpName",
                  placeholder: "Enter Gram Panchayat name",
                },
                {
                  label: "Sarpanch Name",
                  id: "sarpanchName",
                  placeholder: "Enter Sarpanch name",
                },
                {
                  label: "Mobile Number",
                  id: "mobileNumber",
                  placeholder: "Enter Mobile Number",
                },
                {
                  label: "LGD Code",
                  id: "lgdCode",
                  placeholder: "Enter LGD Code",
                },
                {
                  label: "Auth ID",
                  id: "authId",
                  placeholder: "Enter Auth ID",
                },
              ].map((input) => (
                <div key={input.id}>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor={input.id}
                  >
                    {input.label}
                  </label>
                  <input
                    type="text"
                    id={input.id}
                    placeholder={input.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Active Gram Panchayats List View
        <div className="container w-full mx-auto py-10 flex flex-col items-center">
          <div className="flex flex-col w-full pb-10 px-4 sm:px-10 lg:px-20 shadow-md justify-center items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Active Gram Panchayats
            </h2>
            <div className="flex flex-col lg:flex-row w-full justify-between items-center">
              {/* Left Content */}
              <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6">
                <div
                  className="overflow-y-auto max-h-[50vh]"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#4EB4F8 transparent",
                  }}
                >
                  <ul className="space-y-4">
                    {[
                      "Ferozpur Jhirka",
                      "Nagina",
                      "Agon",
                      "Rawil",
                      "Village 5",
                      "Village 6",
                      "Village 7",
                    ].map((gp, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between bg-[#e0f2ff] text-blue-700 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                            {gp.charAt(0)}
                          </div>
                          <span className="text-lg">{gp}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:underline">
                            Edit
                          </button>
                          <button className="text-red-500 hover:underline">
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={handleAddGpClick}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2"
                >
                  <span>➕</span>
                  <span>Add Gram Panchayat</span>
                </button>
              </div>

              {/* Right Illustration */}
              <div className="hidden lg:block mt-10 lg:mt-0 w-full lg:w-[40%]">
                <img
                  src={Image2}
                  alt="Water Illustration"
                  className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageGps_List;
