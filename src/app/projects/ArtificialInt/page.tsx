import React from 'react';
import Spline from '@splinetool/react-spline/next'; // Import Spline

const projects = [
  { id: 1, name: "AI Chatbot" },
  { id: 2, name: "Image Recognition" },
  { id: 3, name: "Sentiment Analysis" },
  { id: 4, name: "Recommendation System" },
  { id: 5, name: "Autonomous Driving" },
];

const page = () => {
  return (
    <main className="relative h-screen"> {/* Set height to full screen */}
      {/* Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/xQzi1i5eCIzOEvP6/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />
      
      {/* Glassy Card for AI Projects */}
      <div className="absolute z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg p-8 shadow-lg max-w-md text-center"> {/* Increased padding for better aesthetics */}
          <h1 className="text-3xl font-bold text-white mb-4">AI Projects</h1>
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
