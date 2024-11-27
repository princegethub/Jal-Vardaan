import React from "react";

const ViewForm = ({ consumer, onEdit, onBack }) => (
  <div>
    <div className="flex justify-between items-center mb-4 border-b pb-2">
      <h3 className="text-2xl font-bold text-gray-700">Consumer Details</h3>
      <div className="flex space-x-2">
        <button onClick={onEdit} className="bg-green-600 text-white px-4 py-2 rounded">
          Edit
        </button>
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded">
          Back
        </button>
      </div>
    </div>
    <p><strong>Name:</strong> {consumer.name}</p>
    <p><strong>Consumer ID:</strong> {consumer.consumerId}</p>
    <p><strong>Address:</strong> {consumer.address}</p>
    <p><strong>Aadhaar:</strong> {consumer.aadhaar}</p>
    <p><strong>Mobile:</strong> {consumer.mobile}</p>
  </div>
);

export default ViewForm;
