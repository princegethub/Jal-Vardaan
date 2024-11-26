import React, { useState } from "react";

const ManageGp = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    gpName: "",
    sarpanchName: "",
    mobileNumber: "",
    lgdCode: "",
    authId: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form Submitted with Data:", formData); // Debug log
    onSubmit(formData);
  };

  return (
    <div className="w-full lg:w-[50%] shadow-md rounded-xl p-6 sm:p-8">
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
          <div key={id} className="mb-4">
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
              className={`w-full p-3 border ${
                errors[id] ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:outline-none ${
                errors[id] ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors[id] && (
              <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
            )}
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
