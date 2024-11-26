import React from 'react';

function DetailsCard({ gpName, details, viewType, onBack }) {
  return (
    <div className="w-full shadow-lg rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">
          {gpName} - {viewType} Details
        </h2>
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-400 transition-all"
        >
          Back
        </button>
      </div>
      {/* Details Section with Scrollbar */}
      <div className="max-h-96 overflow-y-auto custom-scrollbar"> {/* Set a max height and enable scrolling */}
        <ul className="space-y-4">
          {details.map((item, index) => (
            <li
              key={index}
              className="bg-[#e0f2ff] text-blue-700 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <p className="font-semibold">{item.name}</p>
              <p>Amount: {item.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsCard;
