import React, { useState } from 'react';
import './Diagnostics.css';  // Style the spinner and results

const Diagnostics = () => {
  const [loading, setLoading] = useState(false); // To control the loading spinner
  const [diagnosisResults, setDiagnosisResults] = useState(null); // To store results

  // Function to run the diagnosis
  const runDiagnosis = () => {
    setLoading(true);  // Start loading
    setDiagnosisResults(null);  // Clear previous results

    // Simulate a delay (e.g., API call) with setTimeout
    setTimeout(() => {
      setLoading(false);  // Stop loading

      // Sample diagnosis results
      setDiagnosisResults({
        engineHealth: 'Good',
        batteryStatus: 'Charging',
        tirePressure: 'Normal',
        coolantLevel: 'Adequate',
      });
    }, 3000);  // Wait for 3 seconds (for simulation)
  };

  return (
    <div className="diagnostics-container">
      <h1>Run Diagnostics</h1>

      {/* Run Diagnosis Button */}
      <button onClick={runDiagnosis} className="diagnosis-button">
        Run Diagnosis
      </button>

      {/* Show loading spinner if in progress */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {/* Display results after diagnosis */}
      {diagnosisResults && (
        <div className="diagnostics-results">
          <h3>Diagnosis Results:</h3>
          <ul>
            <li><strong>Engine Health:</strong> {diagnosisResults.engineHealth}</li>
            <li><strong>Battery Status:</strong> {diagnosisResults.batteryStatus}</li>
            <li><strong>Tire Pressure:</strong> {diagnosisResults.tirePressure}</li>
            <li><strong>Coolant Level:</strong> {diagnosisResults.coolantLevel}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diagnostics;

