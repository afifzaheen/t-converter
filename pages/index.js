// temp-converter-pages/pages/index.js
// The root page of the application ('/').

import TemperatureConverter from '../components/TemperatureConverter';

// Renders the main TemperatureConverter component within a centered layout.
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full">
        <TemperatureConverter />
      </main>
    </div>
  );
}