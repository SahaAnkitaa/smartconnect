import React, { useState, useEffect } from 'react';
import './Control.css';

const Control = () => {
  const [engineStatus, setEngineStatus] = useState("Off");
  const [doorsLocked, setDoorsLocked] = useState(true);
  const [acStatus, setAcStatus] = useState("Off");
  const [location, setLocation] = useState("Unknown");
  const [notification, setNotification] = useState(""); // For displaying messages
  const [temperature, setTemperature] = useState(22); // Default temperature
  const [airQuality, setAirQuality] = useState("Good"); // Air Quality status

  // Function to show a temporary notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  // Toggle Engine
  const toggleEngine = () => {
    const newStatus = engineStatus === "Off" ? "On" : "Off";
    setEngineStatus(newStatus);
    showNotification(`Engine is ${newStatus === "On" ? "starting" : "stopping"}`);
  };

  // Toggle Doors
  const toggleDoors = () => {
    const newStatus = !doorsLocked;
    setDoorsLocked(newStatus);
    showNotification(`Doors are ${newStatus ? "locked" : "unlocked"}`);
  };

  // Toggle AC
  const toggleAC = () => {
    const newStatus = acStatus === "Off" ? "On" : "Off";
    setAcStatus(newStatus);
    showNotification(`AC is ${newStatus === "On" ? "turned on" : "turned off"}`);
  };

  // Adjust Temperature
  const increaseTemperature = () => {
    setTemperature((prevTemp) => Math.min(prevTemp + 1, 30)); // Max 30°C
    showNotification(`Temperature increased to ${temperature + 1}°C`);
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemp) => Math.max(prevTemp - 1, 16)); // Min 16°C
    showNotification(`Temperature decreased to ${temperature - 1}°C`);
  };

  return (
    <div className="control-container">
      <h1>Control Panel</h1>

      {/* Notification Box */}
      {notification && <div className="notification-box">{notification}</div>}

      {/* Flex container for control cards */}
      <div className="control-cards-container">
        {/* Engine Control Section */}
        <div className="control-card">
          <h3>Engine</h3>
          <button onClick={toggleEngine}>
            {engineStatus === "Off" ? "Start Engine" : "Stop Engine"}
          </button>
          <p>Status: {engineStatus}</p>
        </div>

        {/* Lock/Unlock Doors Section */}
        <div className="control-card">
          <h3>Doors</h3>
          <button onClick={toggleDoors}>
            {doorsLocked ? "Unlock Doors" : "Lock Doors"}
          </button>
          <p>Status: {doorsLocked ? "Locked" : "Unlocked"}</p>
        </div>

        {/* Climate Control Section */}
        <div className="control-card">
          <h3>Climate Control</h3>
          <button onClick={toggleAC}>
            {acStatus === "Off" ? "Turn On AC" : "Turn Off AC"}
          </button>
          <p>Status: {acStatus}</p>

          {acStatus === "On" && (
            <>
              <div className="temperature-control">
                <span>Temperature: {temperature}°C</span>
                <button onClick={increaseTemperature} className="temp-button">▲</button>
                <button onClick={decreaseTemperature} className="temp-button">▼</button>
              </div>
              <p>Air Quality: {airQuality}</p>
            </>
          )}
        </div>

        {/* Vehicle Location Section */}
        <div className="control-card">
          <h3>Vehicle Location</h3>
          <p>Current Location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Control;



