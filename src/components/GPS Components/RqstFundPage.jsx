import React, { useState } from "react";
import RqstListIllustration from "../../assets/GPS/RqstList-illustration.png";
import RqstFormIllustration from "../../assets/GPS/RqstForm-illustration.png";

const RqstFundPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      category: "Households",
      amount: 5000,
      description: "Repair work in Sector 21.",
      date: "08-04-2024",
    },
    {
      category: "Schools",
      amount: 2000,
      description: "Testing water quality in schools.",
      date: "09-04-2024",
    },
  ]); // Initial notifications history

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    description: "",
  });

  const toggleView = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newNotification = {
      ...formData,
      date: new Date().toLocaleDateString(), // Add current date
    };
    setNotifications((prev) => [newNotification, ...prev]); // Add new request to history
    setIsPopupVisible(true); // Show the popup message
    setFormData({ category: "", amount: "", description: "" }); // Clear form fields
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setIsFormVisible(false); // Return to notification list view
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b from-blue-400 via-white to-white shadow-lg py-8 h-auto">
      <div className="w-[90vw] flex flex-col sm:flex-row gap-8 mx-auto sm:w-[80vw]">
        {/* Left Section */}
        <div className="w-full sm:w-[90%] lg:w-1/2 rounded-lg flex justify-center bg-gradient-to-b from-blue-400 to-blue-200 items-center p-6 shadow-xl">
          {isFormVisible ? (
             <div className="flex justify-center items-center w-full h-full">
             <p className="block sm:hidden text-center text-gray-800 text-xl font-bold">
               Request Fund
             </p>
             <img
               src={RqstFormIllustration}
               alt="form Illustration"
               className="hidden sm:block w-[400px] h-auto"
             />
           </div>
          ) : (
            <div className="space-y-4 w-full">
              <h2 className="text-xl font-bold text-blue-600">Request History</h2>
              {/* Scrollable list */}
              <ul className="space-y-4 overflow-y-auto max-h-[300px] pr-2">
                {notifications.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 bg-white rounded shadow-lg border border-gray-200"
                  >
                    <p className="font-bold">{`Category: ${item.category}`}</p>
                    <p className="text-sm">{`Date: ${item.date}`}</p>
                    <p>{`Requested Amount: ₹${item.amount}`}</p>
                    <p>{`Description: ${item.description}`}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={toggleView}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
              >
                + Add New Request
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[90%] lg:w-1/2 flex justify-center bg-gradient-to-b from-blue-400 to-blue-200 shadow-xl items-center p-6 rounded-lg">
          {isFormVisible ? (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 w-full max-w-md"
            >
              <h2 className="text-xl font-bold text-blue-600">
                Request Fund to PHED
              </h2>
              <div>
                <label className="block font-bold mb-2">Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                >
                  <option value="">Select your category</option>
                  <option value="Households">Households</option>
                  <option value="Schools">Schools</option>
                  <option value="Parks">Parks</option>
                  <option value="All">All</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-2">Requested Amount:</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Description:</label>
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2"
                  required
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
              Request Fund
            </p>
            <img
              src={RqstListIllustration}
              alt="List Illustration"
              className="hidden sm:block w-[400px] h-auto"
            />
          </div>
          )}
        </div>
      </div>

      {/* Popup Message */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold">Success!</h3>
            <p className="mt-2">Your fund request has been sent to PHED.</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RqstFundPage;
