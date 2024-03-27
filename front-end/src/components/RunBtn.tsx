import React from "react";

export default function RunBtn({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="px-6 py-1 bg-green-500 hover:bg-green-700 hover:transition duration-500 text-white rounded-lg cursor-pointer"
    >
      Run
    </div>
  );
}
