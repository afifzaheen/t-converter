"use client";
import { useState } from 'react';
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../utils/conversions';

/**
 * Custom hook to manage temperature conversion between Celsius and Fahrenheit.
 *
 * @returns {Object} - The hook returns the current celsius and fahrenheit values
 * and their respective change handlers.
 * @param {string} initialValue - The initial value for both celsius and fahrenheit (optional, defaults to '')
 *
 * @example
 * const { celsius, fahrenheit, handleChange } = useTemperatureInput();
 */
const useTemperatureInput = (initialValue = '') => {
  // State for storing both Celsius and Fahrenheit values
  const [temperature, setTemperature] = useState({
    celsius: initialValue,
    fahrenheit: initialValue,
  });

  // Helper function to check if a value is numeric
  const isNumeric = (val) => !isNaN(parseFloat(val)) && isFinite(val);

  /**
   * Unified handler function for both Celsius and Fahrenheit inputs.
   *
   * @param {Object} e - The event object from the input.
   * @param {number} index - 0 for celsius, 1 for fahrenheit (instead of 'celsius' or 'fahrenheit')
   */
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (index === 0) {  // 0 for celsius
      setTemperature({
        celsius: value,
        fahrenheit: isNumeric(value) ? celsiusToFahrenheit(value).toFixed(2) : '',
      });
    } else {  // 1 for fahrenheit
      setTemperature({
        fahrenheit: value,
        celsius: isNumeric(value) ? fahrenheitToCelsius(value).toFixed(2) : '',
      });
    }
  };

  // Return temperature values and handlers for use in components
  return {
    celsius: temperature.celsius,
    fahrenheit: temperature.fahrenheit,
    handleChange,  // Return the unified handleChange function
  };
};

export default useTemperatureInput;
