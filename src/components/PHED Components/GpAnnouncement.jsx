import React, { useState } from "react";
import Illustration from "./Illustration"; // Reusable Illustration Component
import Image2 from "../../assets/PHED/announcement.png"; // Illustration for Add Announcement
import Image1 from "../../assets/PHED/announcement1.png"; // Illustration for Send Announcement

const GpAnnouncement = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle state
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      gpId: "Ferozpur Jhirka",
      message: "Expect low water pressure due to ongoing repairs.",
      date: "26-11-2024",
    },
    {
      id: 2,
      gpId: "Nagina",
      message: "Road drinking tap water quality testing in progress.",
      date: "26-11-2024",
    },
    {
      id: 3,
      gpId: "Agon",
      message: "New water connection applications open: visit the GP office.",
      date: "26-11-2024",
    },
    {
      id: 4,
      gpId: "Rawil",
      message: "Pipe maintenance scheduled for tomorrow.",
      date: "26-11-2024",
    },
    {
      id: 5,
      gpId: "Dharuhera",
      message: "Water supply interruption expected due to repairs.",
      date: "27-11-2024",
    },
  ]); // Sample announcements list

  // Toggle view between Form and List
  const toggleView = () => setIsFormVisible(!isFormVisible);

  // Handle Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      id: announcements.length + 1,
      gpId: e.target.gpId.value.trim(),
      message: e.target.message.value.trim(),
      date: new Date().toLocaleDateString(),
    };

    // Add the new announcement to the list
    setAnnouncements([...announcements, newAnnouncement]);
    e.target.reset(); // Reset form fields
    setIsFormVisible(false); // Switch back to list view
  };

  return (
    <div className="min-h-auto py-8 bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white overflow-x-hidden">
      <div
        className="container mx-auto py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10"
        style={{ maxWidth: "90%" }}
      >
        {/* Left Side Illustration */}
        <Illustration
          image={isFormVisible ? Image1 : Image2}
          alt={
            isFormVisible ? "Add Announcement Illustration" : "Send Announcement Illustration"
          }
        />

        {/* Right Side: Form or List */}
        <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6 sm:p-8 ">
          {isFormVisible ? (
            // Form View
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                Add Announcement
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="gpId"
                  >
                    Gram Panchayat ID
                  </label>
                  <input
                    type="text"
                    id="gpId"
                    placeholder="Enter Gram Panchayat ID"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your announcement message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={toggleView}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
                  >
                    Back to List
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // List View
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                Send Announcement
              </h2>
              {/* Scrollable List Container */}
              <div className="max-h-80 overflow-y-auto custom-scrollbar space-y-4">
                <ul className="space-y-4">
                  {announcements.map((announcement) => (
                    <li
                      key={announcement.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#e0f2ff] text-blue-700 rounded-lg shadow p-4 hover:shadow-md transition-shadow space-y-2 sm:space-y-0"
                    >
                      <div>
                        <span className="block font-semibold">
                          To: {announcement.gpId}
                        </span>
                        <span className="block text-sm text-gray-600">
                          Date: {announcement.date}
                        </span>
                        <p className="mt-2">{announcement.message}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={toggleView}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2"
              >
                <span>➕</span>
                <span>Add Announcement</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GpAnnouncement;
