import React from 'react';

function AlertDetailsDialog({ alert, onClose, onAcknowledge }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-md">
      {/* Modal Content */}
      <div className="bg-gradient-to-b from-[#4EB4F8] to-[white] rounded-lg p-6 shadow-md w-[90vw] max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Alert Details</h2>
        {/* GP Name */}
        <p><strong>GP Name:</strong> {alert.gpName}</p>
        {/* Alert Category */}
        <p ><strong>Category:</strong>  {alert.alertCategory}</p>
        {/* Full Message */}
        <p className="mt-4"><strong>Message:</strong> {alert.message}</p>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 gap-4">
          {/* Close Button */}
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all"
            onClick={onClose}
          >
            Close
          </button>
          {/* Acknowledge Button */}
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            onClick={() => onAcknowledge(alert.id)}
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertDetailsDialog;
