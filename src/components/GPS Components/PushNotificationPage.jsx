import React, { useState } from "react";
import ListIllustration from "../../assets/GPS/list-illustration.png"; // Replace with your illustration path
import FormIllustration from "../../assets/GPS/form-illustration.png"; // Replace with your illustration path

const PushNotificationPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleView = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b from-blue-400 via-white to-white shadow-lg py-8 h-auto">
      <div className="w-[90vw] flex flex-col sm:flex-row gap-8 mx-auto sm:w-[80vw]">
        {/* Left Section */}
        <div className="w-full sm:w-[90%] lg:w-1/2 rounded-lg flex justify-center bg-gradient-to-b from-blue-400 via-white to-white items-center p-6 shadow-lg">
          {isFormVisible ? (
           <div className="flex justify-center items-center w-full h-full">
           <p className="block sm:hidden text-center text-gray-800 text-xl font-bold">
             Push Notification
           </p>
           <img
             src={FormIllustration}
             alt="Form Illustration"
             className="hidden sm:block w-[400px] h-auto"
           />
         </div>
          ) : (
            <div className="space-y-4 w-full">
              <h2 className="text-xl font-bold text-blue-600">Notifications</h2>
              {/* Scrollable list */}
              <ul className="space-y-4 overflow-y-auto max-h-[300px] pr-2">
                {[ 
                  {
                    to: "Households",
                    date: "08-04-2024",
                    text: "Expect low water pressure due to ongoing repairs.",
                  },
                  {
                    to: "Schools",
                    date: "09-04-2024",
                    text: "Avoid drinking tap water today; quality testing in progress.",
                  },
                  {
                    to: "All",
                    date: "16-10-2024",
                    text: "Please conserve water; limited supply due to low reservoirs levels.",
                  },
                  {
                    to: "Parks",
                    date: "22-11-2024",
                    text: "Water sprinklers will be turned off for maintenance.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="p-4 bg-white rounded shadow border border-gray-200"
                  >
                    <p className="font-bold">{`To: ${item.to}`}</p>
                    <p className="text-sm">{`Date: ${item.date}`}</p>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={toggleView}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
              >
                + Add New Notification
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[90%] lg:w-1/2 flex justify-center bg-gradient-to-b from-blue-400 via-white to-white shadow-lg items-center p-6 rounded-lg">
          {isFormVisible ? (
            <form className="space-y-4 w-full max-w-md">
              <h2 className="text-xl font-bold text-blue-600">
                Push Notification
              </h2>
              <div>
                <label className="block font-bold mb-2">Category:</label>
                <select
                  name="category"
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option>Select your category</option>
                  <option value="households">Households</option>
                  <option value="schools">Schools</option>
                  <option value="all">All</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-2">Consumer ID:</label>
                <input
                  type="text"
                  name="consumerId"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Message:</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleView}
                  className="bg-gray-200 text-black py-2 px-4 rounded shadow hover:bg-gray-300"
                >
                  Back
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <p className="block sm:hidden text-center text-gray-800 text-xl font-bold">
                Push Notification
              </p>
              <img
                src={ListIllustration}
                alt="List Illustration"
                className="hidden sm:block w-[400px] h-auto"
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PushNotificationPage;
