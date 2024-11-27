import React from 'react';

const ConsumerList = ({ consumers, onAction, onAddConsumer }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-600 mb-4">Active Consumer</h2>
      <div className="overflow-y-auto h-[63vh]">
        <ul className="space-y-4">
          {consumers.map((consumer) => (
            <li key={consumer.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
              <div>
                <p className="font-bold">{consumer.name}</p>
                <p>Consumer ID: {consumer.consumerId}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => onAction(consumer, 'view')} className="text-gray-700 text-sm hover:text-gray-600">
                  <i className="fas fa-eye text-md mr-2"></i>
                </button>
                <button onClick={() => onAction(consumer, 'edit')} className="text-gray-700 text-sm hover:text-gray-600">
                  <i className="fas fa-edit text-md mr-2"></i>
                </button>
                <button className="text-gray-700 text-sm hover:text-gray-600">
                  <i className="fas fa-trash text-md mr-2"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Consumer Button */}
      <div className="flex m-2">
        <button
          onClick={onAddConsumer}
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-500"
        >
          Add Consumer
        </button>
      </div>
    </div>
  );
};

export default ConsumerList;
