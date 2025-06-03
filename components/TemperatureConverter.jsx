// temp-converter-pages/components/TemperatureConverter.jsx
"use client"; 
import React from 'react';
import useTemperatureInput from '../hooks/useTemperatureInput';
import TemperatureInput from './TemperatureInput';

const TemperatureConverter = () => {
  const {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  } = useTemperatureInput();

  // Config array for .map() 
  const inputFields = [
    {
      id: "celsius",
      label: "Celsius (°C)",
      value: celsius,
      onChange: handleCelsiusChange,
    },
    {
      id: "fahrenheit",
      label: "Fahrenheit (°F)",
      value: fahrenheit,
      onChange: handleFahrenheitChange,
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Temperature Converter
      </h1>

      {/* DRY  */}
      {inputFields.map(({ id, label, value, onChange }) => (
        <TemperatureInput
          key={id}
          id={id}
          label={label}
          value={value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default TemperatureConverter;
