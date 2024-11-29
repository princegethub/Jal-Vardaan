import React from "react";

function Assest_GP() {
  return (
    <div className="flex items-center flex-col gap-12 justify-center h-[90vh] bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white">
      <div className="btncontainer flex gap-2 flex-row">
        <button className="border border-black text-black font-bold py-2 px-4 rounded-2xl">
          PUMP
        </button>
        <button className="border border-black text-black font-bold py-2 px-4 rounded-2xl">
          PIPELINE
        </button>
        <button className="border border-black text-black font-bold py-2 px-4 rounded-2xl">
          VALVES
        </button>
        <button className="border border-black text-black font-bold py-2 px-4 rounded-2xl">
          OTHER
        </button>
      </div>
      {/* Outer Container */}
      <div className="bg-gradient-to-b from-[#4EB4F8] via-[#D8E9FF] to-white w-[90%] md:w-[60%] lg:w-[40%] h-[60vh] rounded-lg shadow-2xl p-4 overflow-hidden">
        {/* Scrollable Inner Content */}
        <div className="h-full overflow-y-auto flex flex-col gap-4 p-4 rounded-sm shadow-inner max-h-[calc(100vh - 100px)]">
          {/* Inner Small Boxes */}
          {[...Array(15)].map((_, index) => (
            <div
              key={index}
              className="bg-[#CEEAF9] h-24 rounded-2xl shadow-md flex flex-col p-4"
            >
              <div>Karan: 123</div>
              <div>ID: 124</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assest_GP;
