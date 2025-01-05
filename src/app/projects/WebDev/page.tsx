import React from 'react';
import Spline from '@splinetool/react-spline/next'; // Import Spline

const projects = [
  { id: 1, name: "Portfolio Website" },
  { id: 2, name: "E-commerce Platform" },
  { id: 3, name: "Blogging Platform" },
  { id: 4, name: "Task Management App" },
  { id: 5, name: "Social Media Dashboard" },
];

const page = () => {
  return (
    <main className="relative h-screen"> {/* Set height to full screen */}
      {/* Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/uvjWd3Dmw6JZRC8k/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />

      {/* Glassy Card for Project Names */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg p-6 shadow-lg max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Web Development Projects</h1>
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

export default page;
