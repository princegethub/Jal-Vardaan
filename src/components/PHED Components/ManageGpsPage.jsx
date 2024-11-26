import React, { useState } from "react";
import Illustration from "./Illustration";
import Form from "./ManageGpFrom";
import List from "./ManageGpList";
import Image1 from "../../assets/PHED/addlist.png";
import Image2 from "../../assets/PHED/List.png";
import { useNavigate } from "react-router";

const ManageGpsPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();
  const [gpData, setGpData] = useState([
    "Ferozpur Jhirka",
    "Nagina",
    "Agon",
    "Rawil",
    "Village 5",
    "Village 6",
    "Village 7",
  ]);

  const handleAddGpClick = () => setIsAdding(true);
  const handleBackClick = () => setIsAdding(false);
  const handleSubmitForm = (newGp) => {
    setGpData([...gpData, newGp.gpName]);
    setIsAdding(false);
  };

  const handleEditGp = (index) => {
    // handle edit functionality here
    navigate(`/phed/managegp/${index}`)
  };
  const handleDeleteGp = (index) => {
    setGpData(gpData.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white overflow-x-hidden">
      <div
        className="container mx-auto py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10"
        style={{ maxWidth: "90%" }}
      >
        {isAdding ? (
          <>
            <Illustration
              image={Image1}
              alt="Add Gram Panchayat Illustration"
            />
            <Form onBack={handleBackClick} onSubmit={handleSubmitForm} />
          </>
        ) : (
          <>
            <List
              data={gpData}
              onAdd={handleAddGpClick}
              onEdit={handleEditGp}
              onDelete={handleDeleteGp}
            />
            <Illustration image={Image2} alt="Water Illustration" />
          </>
        )}
      </div>
    </div>
  );
};

export default ManageGpsPage;
