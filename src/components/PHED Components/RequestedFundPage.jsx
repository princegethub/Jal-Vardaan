import React, { useState } from "react";
import FundListCard from "./FundListCard";
import FundDetailsDialog from "./FundDetailsDialog";
// import HandImg from "../../assets/PHED/Hand.png";
import RqstFund from "../../assets/PHED/fundRqst.png";
import "../../App.css";

function RequestFundPage() {
  const [selectedFund, setSelectedFund] = useState(null);

  const [fundRequests, setFundRequests] = useState([
    {
      id: 1,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water tank.",
      status: "Pending",
    },
    {
      id: 2,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the pipeline.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
    {
      id: 3,
      gpName: "GP - Dugri",
      fundCategory: "Infrastructure",
      message: "Request for funds to repair the water pump.",
      status: "Pending",
    },
  ]);

  const handlePaid = (fundId) => {
    setFundRequests((prevFunds) =>
      prevFunds.map((fund) =>
        fund.id === fundId ? { ...fund, status: "Paid" } : fund
      )
    );
    setSelectedFund(null);
  };

  return (
    <div className="h-auto py-12 bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white flex flex-col items-center">
      <div className="w-[90vw] flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block w-full md:w-[30%]">
            <div className="bg-gradient-to-b from-[#4EB4F8] py-4 px-2 via-[#D8E9FF] to-white  rounded-lg shadow-lg">
              <img
                src={RqstFund}
                alt="Illustration"
                className="w-[420px]  h-[450px] "
              />
            </div>
          </div>

          <div className="w-full md:w-[70%]">
            <div className="max-h-[470px] overflow-y-scroll custom-scrollbar">
              <FundListCard
                fundRequests={fundRequests}
                onFundClick={(fund) => setSelectedFund(fund)}
                onButtonClick={(fund) => setSelectedFund(fund)}
              />
            </div>
          </div>
        </div>

        {selectedFund && (
          <FundDetailsDialog
            fund={selectedFund}
            onClose={() => setSelectedFund(null)}
            onPaid={handlePaid}
          />
        )}
      </div>
    </div>
  );
}

export default RequestFundPage;
