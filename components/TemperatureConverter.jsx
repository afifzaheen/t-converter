"use client";
import React from 'react';
import useTemperatureInput from '../hooks/useTemperatureInput';
import TemperatureInput from './TemperatureInput';

const TemperatureConverter = () => {
  const {
    celsius,
    fahrenheit,
    handleChange,  // This is the unified change handler
  } = useTemperatureInput();  // Custom hook to manage temperature states

  // Configuration array to avoid repetitive code in rendering inputs
  const inputFields = [
    {
      id: "celsius",
      label: "Celsius (°C)",
      value: celsius,
      onChange: handleChange('celsius'),  // Pass 'celsius' as the type to handleChange
    },
    {
      id: "fahrenheit",
      label: "Fahrenheit (°F)",
      value: fahrenheit,
      onChange: handleChange('fahrenheit'),  // Pass 'fahrenheit' as the type to handleChange
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Temperature Converter
      </h1>

      {/* Use .map to dynamically render input fields from inputFields configuration */}
      {inputFields.map(({ id, label, value, onChange }) => (
        <TemperatureInput
          key={id}
          id={id}
          label={label}
          value={value}
          onChange={onChange}  // Dynamically pass the onChange handler for each input field
        />
      ))}
    </div>
  );
};

export default TemperatureConverter;

