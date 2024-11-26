import React, { useState } from "react";
import AlertListCard from "./AlertListCard";
import AlertDetailsDialog from "./AlertDetailsDialog";
import HandImg from "../../assets/PHED/Hand.png";
import "../../App.css";

function AlertPage() {
  const [selectedAlert, setSelectedAlert] = useState(null); // State to track the currently selected alert

  // Hardcoded sample data to replace API call for now
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message:
        "The chlorine level is critically low. Please refill immediately.",
      status: "Pending",
    },
    {
      id: 2,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message:
        "The hydrogen peroxide level needs attention. Please refill within 24 hours.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Inventory supplies for filters are running out. Restock soon.",
      status: "Pending",
    },
    {
      id: 4,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message:
        "Critical levels detected in the chemical storage. Immediate action required.",
      status: "Pending",
    },
    {
      id: 5,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "The filter supplies are at low levels. Restock soon.",
      status: "Pending",
    },
    {
      id: 6,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message:
        "Immediate restocking of chlorine is necessary to avoid system shutdown.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
    {
      id: 7,
      gpName: "GP - Dugri",
      alertCategory: "Low Inventory",
      message: "Hydrogen peroxide levels critically low. Refill needed.",
      status: "Pending",
    },
  ]);

  // Function to handle acknowledging an alert
  const handleAcknowledge = (alertId) => {
    // Update the status of the acknowledged alert
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, status: "Completed" } : alert
      )
    );
    setSelectedAlert(null); // Close the dialog after acknowledgment
  };

  return (
    <div className="h-auto py-12 bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white flex flex-col items-center">
      {/* Main container */}
      <div className="w-[90vw] flex flex-col gap-6">
        {/* Desktop View: Left Illustration and Right Alert List */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Illustration Section: Only visible on larger screens */}
          <div className="hidden md:block w-full md:w-[30%]">
            <div className="bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white p-6 rounded-lg shadow-lg">
              <img
                src={HandImg}
                alt="Illustration"
                className="w-[350px] h-auto"
              />
            </div>
          </div>

          {/* Alert List Section */}
          <div className="w-full md:w-[70%]">
            <div className="max-h-[470px] overflow-y-scroll custom-scrollbar">
              {/* Pass alerts to the AlertListCard component */}
              <AlertListCard
                alerts={alerts}
                onAlertClick={(alert) => setSelectedAlert(alert)} // Pass clicked alert to the dialog
                onButtonClick={(alert) => setSelectedAlert(alert)} // Open dialog on button click
              />
            </div>
          </div>
        </div>

        {/* Alert Details Dialog */}
        {selectedAlert && (
          <AlertDetailsDialog
            alert={selectedAlert}
            onClose={() => setSelectedAlert(null)} // Close dialog
            onAcknowledge={handleAcknowledge} // Handle acknowledgment
          />
        )}
      </div>
    </div>
  );
}

export default AlertPage;
