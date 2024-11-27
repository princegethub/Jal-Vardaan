import React, { useState } from "react";
import MangeConsumerList from "./MangeConsumerList";
import ViewForm from "./ManageConsumerViewForm";
import AddEditForm from "./ManageConuserAddEditFrom";
import Illustration from "./illustration_Gps";
import Image1 from "../../assets/PHED/announcement1.png"; // Example Image

const initialConsumers = [
  { id: 1, name: "Prince Mishra", consumerId: "CU39452X8P", address: "Gurgaon, Haryana", aadhaar: "XXXX-XXXX-1234", mobile: "9876543210" },
  { id: 2, name: "Rahul Mishra", consumerId: "CU39452X9Q", address: "Delhi, India", aadhaar: "XXXX-XXXX-5678", mobile: "9876543221" },
  { id: 3, name: "Rajan Mishra", consumerId: "CU39452X7R", address: "Faridabad, Haryana", aadhaar: "XXXX-XXXX-9101", mobile: "9876543232" },
  { id: 4, name: "Ankit Yadav", consumerId: "CU39452X9Y", address: "Gurgaon, Haryana", aadhaar: "XXXX-XXXX-5678", mobile: "9876543231" },
  { id: 5, name: "Sanjay Kumar", consumerId: "CU39452X8Z", address: "Delhi, India", aadhaar: "XXXX-XXXX-1234", mobile: "9876543241" },
];

const ManageConsumerPage = () => {
  const [consumers, setConsumers] = useState(initialConsumers);
  const [selectedConsumer, setSelectedConsumer] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
    setSelectedConsumer(null);
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
      setConsumers((prev) =>
        prev.map((consumer) =>
          consumer.id === selectedConsumer.id ? { ...consumer, ...consumerData } : consumer
        )
      );
    } else {
      setConsumers((prev) => [
        ...prev,
        { id: prev.length + 1, ...consumerData },
      ]);
    }
    setSelectedConsumer(null);
    setIsAdding(false);
  };

  return (
    <div className="h-auto py-16 bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white flex">
      <div className="w-[90vw] flex sm:w-[80vw] mx-auto gap-6">
        {/* Consumer List */}
        <div className="w-full lg:w-[50%]">
          <MangeConsumerList
            data={consumers}
            onAdd={handleAddClick}
            onEdit={handleEditClick}
            onView={handleViewClick}
            onDelete={handleDeleteClick}
          />
        </div>

        {/* Right-side Form or Illustration */}
        <div className="flex-1 flex flex-col lg:w-[50%]">
          {isAdding ? (
            <>
              {/* Add Form */}
              <AddEditForm onSubmit={handleSubmitForm} onBack={() => setIsAdding(false)} />
              <Illustration image={Image1} alt="Add Consumer Illustration" />
            </>
          ) : selectedConsumer ? (
            <>
              {/* View Form */}
              <ViewForm
                consumer={selectedConsumer}
                onEdit={() => handleEditClick(selectedConsumer)}
                onBack={() => setSelectedConsumer(null)}
              />
              <Illustration image={Image1} alt="Consumer Details Illustration" />
            </>
          ) : (
            // Default view
            <Illustration image={Image1} alt="Default Illustration" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageConsumerPage;
