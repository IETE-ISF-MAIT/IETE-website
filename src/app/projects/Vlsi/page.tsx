"use client"

import React from 'react';
import Spline from '@splinetool/react-spline/next'; // Import Spline

const projects = [
  { id: 1, name: "VLSI Design" },
  { id: 2, name: "Digital Circuit Design" },
  { id: 3, name: "FPGA Implementation" },
  { id: 4, name: "ASIC Design" },
  { id: 5, name: "System on Chip (SoC)" },
];

const vlsi = () => {
  return (
    <main className="relative h-screen"> {/* Set height to full screen */}
      {/* Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/gNtm3HUgp4RvRdJ6/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />
      
      {/* Glassy Card for VLSI Projects */}
      <div className="absolute z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg p-8 shadow-lg max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-4">VLSI Projects</h1>
          <ul className="text-lg text-white">
            {projects.map(project => (
              <li key={project.id} className="py-1">{project.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Black Strip to Hide "Built with Spline" */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black z-20"></div> {/* Added black strip */}
    </main>
  );
}

export default vlsi;
