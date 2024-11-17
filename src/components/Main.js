import React from 'react';
import './Main.css'; // Optional styling

const Main = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <h1>Welcome to SmartConnect!</h1>
        <p>
          Your ultimate companion for managing and monitoring your vehicle remotely.
          Explore features like starting your car, checking diagnostics, and scheduling maintenance—all in one place.
        </p>
        <div className="cta-buttons">
          <button onClick={() => alert("Feature Coming Soon!")}>Get Started</button>
          <button onClick={() => alert("Learn More Coming Soon!")}>Learn More</button>
        </div>
      </div>
      <div className="image-container">
        <img 
          src="/images/Picture1.png" 
          alt="A futuristic car"
          className="car-image"
        />
      </div>
    </main>
  );
};

export default Main;
