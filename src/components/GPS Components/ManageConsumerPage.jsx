import React, { useState } from "react";
import MangeConsumerList from "./MangeConsumerList";
import ViewForm from "./ManageConsumerViewForm";
import AddEditForm from "./ManageConuserAddEditFrom";
import Image2 from "../../assets/PHED/announcement.png"; // Illustration for Add Announcement
import Image1 from "../../assets/PHED/announcement1.png"; // Illustration for Send Announcement

// Mock data simulating backend response
const initialConsumers = [
  {
    id: 1,
    name: "Prince Mishra",
    consumerId: "CU39452X8P",
    address: "Gurgaon, Haryana",
    aadhaar: "XXXX-XXXX-1234",
    mobile: "9876543210",
  },
  {
    id: 2,
    name: "Rahul Mishra",
    consumerId: "CU39452X9Q",
    address: "Delhi, India",
    aadhaar: "XXXX-XXXX-5678",
    mobile: "9876543221",
  },
  {
    id: 3,
    name: "Rajan Mishra",
    consumerId: "CU39452X7R",
    address: "Faridabad, Haryana",
    aadhaar: "XXXX-XXXX-9101",
    mobile: "9876543232",
  },
];

const ManageConsumerPage = () => {
  const [consumers, setConsumers] = useState(initialConsumers); // Consumers list
  const [selectedConsumer, setSelectedConsumer] = useState(null); // Consumer to view/edit
  const [isAdding, setIsAdding] = useState(false); // Whether adding a new consumer

  // Handlers
  const handleAddClick = () => {
    setIsAdding(true);
    setSelectedConsumer(null); // Clear selected consumer
  };

  const handleEditClick = (consumer) => {
    setSelectedConsumer(consumer);
    setIsAdding(false);
  };

  const handleViewClick = (consumer) => {
    setSelectedConsumer(consumer);
    setIsAdding(false);
  };

  const handleDeleteClick = (id) => {
    setConsumers(consumers.filter((consumer) => consumer.id !== id));
  };

  const handleSubmitForm = (consumerData) => {
    if (selectedConsumer) {
      // Update consumer
      setConsumers((prev) =>
        prev.map((consumer) =>
          consumer.id === selectedConsumer.id ? { ...consumer, ...consumerData } : consumer
        )
      );
    } else {
      // Add new consumer
      setConsumers((prev) => [
        ...prev,
        { id: prev.length + 1, ...consumerData },
      ]);
    }
    setSelectedConsumer(null);
    setIsAdding(false);
  };

  return (
    <div className="h-auto py-8  bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white flex">
      <div className="w-[90vw] flex sm:w-[80vw] mx-auto">      {/* Consumer List */}

      <MangeConsumerList
        data={consumers}
        onAdd={handleAddClick}
        onEdit={handleEditClick}
        onView={handleViewClick}
        onDelete={handleDeleteClick}
      />

      {/* Right-side form */}
      <div className="flex-1 bg-[#e0f2ff] rounded-lg p-6">
        {isAdding && (
          <AddEditForm
            onSubmit={handleSubmitForm}
            onBack={() => setIsAdding(false)}
          />
        )}
        {selectedConsumer && !isAdding && (
          <ViewForm
            consumer={selectedConsumer}
            onEdit={() => handleEditClick(selectedConsumer)}
            onBack={() => setSelectedConsumer(null)}
          />
        )}
      </div>
      </div>

    </div>
  );
};

export default ManageConsumerPage;
