import React, { useState } from "react";

const ManageGp = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    gpName: "",
    sarpanchName: "",
    mobileNumber: "",
    lgdCode: "",
    authId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6 sm:p-8 ">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
        Add Gram Panchayat
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {[
          { label: "Gram Panchayat Name", id: "gpName" },
          { label: "Sarpanch Name", id: "sarpanchName" },
          { label: "Mobile Number", id: "mobileNumber" },
          { label: "LGD Code", id: "lgdCode" },
          { label: "Auth ID", id: "authId" },
        ].map(({ label, id }) => (
          <div key={id}>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor={id}
            >
              {label}
            </label>
            <input
              type="text"
              id={id}
              placeholder={`Enter ${label}`}
              value={formData[id]}
              onChange={handleChange}
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
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageGp;
