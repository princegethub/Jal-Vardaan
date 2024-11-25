import React from "react";
import Card from "../Card";

// Importing images
import ManageGp from '../../assets/Card Logo/ManageGp.png';
import Asset from '../../assets/Card Logo/assests.png';
import AlretIcon from '../../assets/Card Logo/alert icon.png';
import Inventory from '../../assets/Card Logo/inventory.png';
import Annoucement from '../../assets/Card Logo/announcement 1.png';
import Finance from '../../assets/Card Logo/finan_ico 1.png';

function OurService() {
  const services = [
    {
      text: "Manage GPs",
      imageSrc: ManageGp, // Fixed: removed curly braces
    },
    {
      text: "Asset Overview",
      imageSrc: Asset, // Fixed: removed curly braces
    },
    {
      text: "View Alerts",
      imageSrc: AlretIcon, // Fixed: removed curly braces
    },
    {
      text: "Inventory Overview",
      imageSrc: Inventory, // Fixed: removed curly braces
    },
    {
      text: "Add Announcement for GP",
      imageSrc: Annoucement, // Fixed: removed curly braces
    },
    {
      text: "Financial Overview",
      imageSrc: Finance, // Fixed: removed curly braces
    },
  ];

  return (
    <div className="h-auto bg-gradient-to-b from-[#4EB4F8] to-[#FFFFFF] py-10">
     {/* <h1 className="text-[30px] font-mulish text-[#165986]  font-bold text-center mt-4 mb-8">
        Welcome prince of the GP
      </h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16">
        {services.map((service, index) => (
          <Card key={index} imageSrc={service.imageSrc} text={service.text} />
        ))}
      </div>
     
    </div>
  );
}

export default OurService;
