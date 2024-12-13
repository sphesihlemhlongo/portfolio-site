import React from "react";
import "./GamingStudent.css";

const GamingStudent = () => {
  return (
    <div className="gaming-scene">
      <div className="student-container">
        <div className="student"></div> {/* Placeholder for the student */}
        <div className="headphones"></div> {/* Placeholder for headphones */}
      </div>

      <div className="gaming-pc">
        <div className="pc-screen">
          <div className="coding-text">console.log('Hello World');</div> {/* Simulating coding */}
        </div>
      </div>

      <div className="music-wave">
        <div className="wave"></div> {/* Placeholder for music wave animation */}
      </div>
    </div>
  );
};

export default GamingStudent;
