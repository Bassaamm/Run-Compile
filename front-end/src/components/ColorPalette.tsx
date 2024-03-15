"use client";
import { useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function ColorPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

  return (
    <div className="relative text-left">
      <IoColorPaletteOutline
        className="text-secondary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        size={40}
      />

      {isOpen && (
        <div className="absolute  mr-5  -translate-x-8 top-0 -translate-y-2 right-0 mt-2 rounded-md shadow-lg bg-white ring-4 ring-secondary slide-in">
          <div className="py-1 flex">
            {colors.map((color, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
