// NoTasksYet.jsx
import React from "react";

const NoTaskYet = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAF2FF] to-[#F6E9FF] font-['Inter']">
      <div className="flex flex-col items-center space-y-3">
        <img
          src="https://storage.googleapis.com/a1aa/image/5611c8d7-8c03-4ee6-5654-e22f8947acea.jpg"
          alt="Purple checkmark inside a rounded square icon on a circular gradient background from light purple to light blue"
          className="w-20 h-20"
          style={{
            background: "radial-gradient(circle at center, #E9D9FF 0%, #D9E6FF 100%)",
            borderRadius: "9999px",
            padding: "16px",
          }}
          width="80"
          height="80"
        />
        <h2 className="text-gray-800 font-semibold text-lg">No tasks yet</h2>
        <p className="text-gray-600 text-sm">Create your first task to get started!</p>
      </div>
    </div>
  );
};

export default NoTaskYet;
