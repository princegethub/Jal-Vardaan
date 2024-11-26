import React, { useState } from 'react';
import ListCard from '../ListCard';
import DetailsCard from '../DetailsCard';

function AssestInventory() {
  // Track which GP is selected
  const [activeGP, setActiveGP] = useState(null); 
  // Track if we are in Details view
  const [isDetailsView, setIsDetailsView] = useState(false); 
  // Toggle between Asset and Inventory
  const [isAssetView, setIsAssetView] = useState(true); // true means Asset, false means Inventory

  // Sample data for Asset and Inventory (Replace with API data later)
  const gps = ["Ferozpur Jhirka", "Nagina", "Agon", "Rawli", "Nariyala"];
  
  const assetDetails = [
    { name: "Chlorine", amount: "200ltr" },
    { name: "Hydrogen Peroxide", amount: "20kg" },
  ];
  const inventoryDetails = [
    { name: "Inventory Item 1", amount: "50 units" },
    { name: "Inventory Item 2", amount: "100 units" },
   
  ];

  // Handle switching between Asset and Inventory views
  const toggleView = () => {
    setIsAssetView(!isAssetView); // Toggle between Asset and Inventory
    // Keep the details view open even when switching views
  };

  // Handle list item selection (View Details)
  const handleGPSelect = (gpName) => {
    setActiveGP(gpName);
    setIsDetailsView(true); // Show details when item is selected
  };

  // Handle Back button (Go back to ListView)
  const handleBack = () => {
    setIsDetailsView(false); // Show ListView
  };

  return (
    <div className="h-auto py-12 bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white flex justify-center items-center">
      <div className="w-[90vw] md:w-[90vw] flex flex-col gap-6">
        {/* Toggle Button Section */}
        <div className="flex justify-center items-center mb-4">
          <button
            onClick={toggleView}
            className="bg-transparent border-2 border-black  text-black py-2 px-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all"
          >
            {isAssetView ? "Switch to Inventory" : "Switch to Asset"}
          </button>
        </div>

        {/* List and Details Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* List Section */}
          <div className={`transition-all ${isDetailsView ? 'w-full md:w-[50%]' : 'w-full'}`}>
            <ListCard gps={gps} onSelect={handleGPSelect} />
          </div>

          {/* Details Section */}
          <div className={`transition-all ${isDetailsView ? 'w-full md:w-[50%]' : 'hidden'}`}>
            {isDetailsView && (
              <DetailsCard
                gpName={activeGP}
                details={isAssetView ? assetDetails : inventoryDetails}
                viewType={isAssetView ? 'Asset' : 'Inventory'} // Pass the view type
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssestInventory;
