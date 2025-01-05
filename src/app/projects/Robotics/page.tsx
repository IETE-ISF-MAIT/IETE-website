"use client"

import React from 'react';
import Spline from '@splinetool/react-spline/next'; // Import Spline

const page = () => {
  return (
    <main className="relative h-screen"> {/* Set height to full screen */}
      {/* Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/5Em-AtCRG0sBZazj/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />
      
      {/* Glassy Card for Coming Soon Message */}
      <div className="absolute inset-0 flex items-center justify-center z-10"> {/* Centering the card */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg p-8 shadow-lg max-w-md text-center">
          <h1 className="text-2xl font-bold text-white">Projects Coming Soon</h1>
          <p className="text-lg text-white">Stay Tuned!</p>
        </div>
      </div>

      {/* Black Strip to Hide "Built with Spline" */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black z-20"></div> {/* Added black strip */}
    </main>
  );
}

export default page;
