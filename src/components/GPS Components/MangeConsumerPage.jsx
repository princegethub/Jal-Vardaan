import React, { useState } from "react";
import ConsumerList from "./MangeConsumerList";
import ConsumerDetails from "./ManageConsumerDetails";

const ManageConsumer = () => {
  const [activeConsumer, setActiveConsumer] = useState(null); // Track selected consumer
  const [viewMode, setViewMode] = useState("illustrator"); // Initial mode is 'illustrator'

  // Sample consumer data
  const consumers = [
    { id: 1, name: "Rahul Sharma", consumerId: "1001", mobile: "9876543210", aadhar: "1234-5678-9012", address: "Delhi" },
    { id: 2, name: "Suresh Gupta", consumerId: "1002", mobile: "9876543211", aadhar: "1234-5678-9013", address: "Mumbai" },
    { id: 3, name: "Ravi Kumar", consumerId: "1003", mobile: "9876543212", aadhar: "1234-5678-9014", address: "Kolkata" }
  ];

  // Handle "View", "Edit", or "Add" click
  const handleAction = (consumer, mode) => {
    setActiveConsumer(consumer);
    setViewMode(mode);
  };

  // Handle "Back" button click
  const handleBack = () => {
    setActiveConsumer(null); // Reset active consumer
    setViewMode("illustrator"); // Go back to 'illustrator' view
  };

  // Handle adding a new consumer
  const handleAddConsumer = () => {
    setActiveConsumer(null);  // No active consumer for adding new one
    setViewMode("add"); // Set view mode to 'add' to display the add form
  };

  return (
    <div className="h-auto py-12 bg-gradient-to-b from-blue-400 via-white to-white shadow-lg flex flex-col md:flex-row justify-center gap-12 items-center">
      {/* Left Side: Consumer List */}
      <div className="w-[90vw] md:w-[45%] bg-gradient-to-b from-blue-400 via-white to-white shadow-lg rounded-lg p-4 overflow-y-auto custom-scrollbar">
        <ConsumerList
          consumers={consumers}
          onAction={handleAction}
          onAddConsumer={handleAddConsumer} // Pass the handleAddConsumer function to the button
        />
      </div>

      {/* Right Side: Illustrator or Form */}
      <div className="w-[90vw] bg-gradient-to-b from-blue-400 via-white to-white p-4 shadow-lg md:w-[40%] rounded-lg">
        {viewMode === "illustrator" ? (
          // Show illustrator if no consumer selected
          <ConsumerDetails
            mode="illustrator"
            onBack={handleBack}
          />
        ) : viewMode === "add" ? (
          // Show Add Consumer form when 'add' mode is selected
          <ConsumerDetails
            mode="add"
            onBack={handleBack}
          />
        ) : (
          // Show selected consumer details (view or edit)
          <ConsumerDetails
            consumer={activeConsumer}
            mode={viewMode}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default ManageConsumer;
