// temp-converter-pages/utils/conversions.js
// Utility functions for temperature unit conversions.
import '../styles/globals.css';
export const celsiusToFahrenheit = (celsius) => {
  return (parseFloat(celsius) * 9) / 5 + 32;
};

export const fahrenheitToCelsius = (fahrenheit) => {
  return (parseFloat(fahrenheit) - 32) * 5 / 9;
};