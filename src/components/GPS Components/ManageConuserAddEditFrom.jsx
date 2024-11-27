import React, { useState, useEffect } from "react";

const AddEditForm = ({ consumer = {}, onSubmit, onBack }) => {
  const [form, setForm] = useState({
    name: "",
    consumerId: "",
    address: "",
    aadhaar: "",
    mobile: "",
  });

  // Set form values when a consumer is passed in for editing
  useEffect(() => {
    if (consumer.id) {
      setForm({
        name: consumer.name || "",
        consumerId: consumer.consumerId || "",
        address: consumer.address || "",
        aadhaar: consumer.aadhaar || "",
        mobile: consumer.mobile || "",
      });
    }
  }, [consumer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // Pass form data back to parent component
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-700">
        {consumer.id ? "Edit Consumer" : "Add Consumer"}
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter consumer's name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Consumer ID</label>
        <input
          type="text"
          name="consumerId"
          value={form.consumerId}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter consumer ID"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter consumer's address"
          required
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Aadhaar</label>
        <input
          type="text"
          name="aadhaar"
          value={form.aadhaar}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Aadhaar number (e.g., XXXX-XXXX-XXXX)"
          pattern="\d{4}-\d{4}-\d{4}"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter mobile number"
          pattern="[0-9]{10}"
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          {consumer.id ? "Update Consumer" : "Add Consumer"}
        </button>
      </div>
    </form>
  );
};

export default AddEditForm;
