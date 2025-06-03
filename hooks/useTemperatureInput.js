"use client"; // Required for using useState in Next.js client components
import '../styles/globals.css';
import { useState } from 'react';
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../utils/conversions';

// Custom React hook to manage temperature input and interconversion logic
const useTemperatureInput = (initialValue = '') => {
  // Default parameter used here: if no initialValue is passed, default to an empty string
  const [celsius, setCelsius] = useState(initialValue);
  const [fahrenheit, setFahrenheit] = useState(initialValue);

  // Helper to check if input is a valid number
  const isNumeric = (val) => !isNaN(parseFloat(val)) && isFinite(val);

  /**
   * Factory function to generate input change handlers
   * @param {'celsius' | 'fahrenheit'} type - Which temperature scale is being edited
   * @returns {Function} - An input event handler
   */
  const createChangeHandler = (type) =>
    // Default parameter used here: if the function is called without an event object,
    // it will default to an object with target.value as an empty string
    (e = { target: { value: '' } }) => {
      const value = e.target.value ?? ''; // Safely extract value

      if (type === 'celsius') {
        setCelsius(value);
        setFahrenheit(
          isNumeric(value) ? celsiusToFahrenheit(value).toFixed(2) : ''
        );
      } else {
        setFahrenheit(value);
        setCelsius(
          isNumeric(value) ? fahrenheitToCelsius(value).toFixed(2) : ''
        );
      }
    };

  // Generated handlers for each input type
  const handleCelsiusChange = createChangeHandler('celsius');
  const handleFahrenheitChange = createChangeHandler('fahrenheit');

  // Return state and handlers so they can be used in a component
  return { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange };
};

export default useTemperatureInput;
// This custom hook encapsulates the logic for temperature conversion and input management,
// allowing components to focus on rendering and user interaction.