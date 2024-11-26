import React from 'react';

function AlertListCard({ alerts, onAlertClick, onButtonClick }) {
  return (
    <div className="flex flex-col gap-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="bg-gradient-to-b from-[#4EB4F8] to-white shadow-md p-4 rounded-lg flex justify-between items-center"
          onClick={() => onAlertClick(alert)} // Click on card opens the dialog
        >
          {/* Alert Information */}
          <div>
            <h3 className="font-bold text-lg">{alert.gpName}</h3>
            <p className="text-sm text-gray-700">{alert.alertCategory}</p>
            {/* <p className="text-xs text-red-500">{alert.message}</p> */}
          </div>

          {/* Status Button */}
          <button
            className={`py-2 px-4 rounded-full border-2  font-semibold transition-all ${
              alert.status === "Completed"
                ? " text-gray-900 border-green-700 "
                : "bg-gradient-to-b text-gray-600   border-red-700"
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from triggering
              onButtonClick(alert); // Open dialog when the button is clicked
            }}
          >
            {alert.status}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AlertListCard;
