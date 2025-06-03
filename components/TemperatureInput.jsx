// temp-converter-pages/components/TemperatureInput.jsx
// Reusable component for a single temperature input field.
"use client"; // Required as it handles user interaction (onChange).
import '../styles/globals.css';
import React from 'react';

// Renders a label and an input field with shared styling.
// Props: id, label text, current value, and onChange handler.
const TemperatureInput = ({ id, label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}:
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.split(' ')[0]}`}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
      />
    </div>
  );
};

export default TemperatureInput;