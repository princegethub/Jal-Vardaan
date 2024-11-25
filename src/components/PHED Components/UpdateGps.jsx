import React from "react";
import Image1 from "../../assets/PHED/addlist.png";
// import Image1 from "../../assets/PHED/List.png";


function UpdateGps() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white overflow-x-hidden">
      {/* // Add Gram Panchayat Form View */}
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
            Update Gram Panchayat
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
                Update
              </button>
              <button
                type="button"
                // onClick={handleBackClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateGps;
