import React from "react";

function UserCard({ name, id, imageSrc }) {
  return (
    <div className="flex items-center gap-4 bg-white/30 backdrop-blur-lg rounded-lg p-4 shadow-lg hover:shadow-xl transition hover:scale-105 border border-white/40 max-w-sm mx-auto">
      {/* User Image */}
      <img
        src={imageSrc}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
      />
      {/* User Details */}
      <div>
        <h3 className="text-lg font-semibold text-[#406B95]">Hi ! {name}</h3>
        <p className="text-sm text-gray-600">ID: {id}</p>
      </div>
    </div>
  );
}

export default UserCard;
