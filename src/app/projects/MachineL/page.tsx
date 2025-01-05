import React from 'react'
import Spline from '@splinetool/react-spline/next'

const projects = [
  { id: 1, name: "Image Classification" },
  { id: 2, name: "Natural Language Processing" },
  { id: 3, name: "Recommendation Systems" },
  { id: 4, name: "Predictive Analytics" },
  { id: 5, name: "Computer Vision" },
]

const page = () => {
  return (
    <main className="relative h-screen flex items-center justify-center">
      {/* New Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/q8IUtMXtTNz9am87/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />
      
      {/* Glassy Card for Machine Learning Projects */}
      <div className="flex flex-col items-center justify-center z-10 bg-white bg-opacity-20 backdrop-blur-lg border border-white rounded-lg p-6 shadow-lg max-w-md text-center mt-10">
        <h1 className="text-3xl font-bold text-white mb-4">Machine Learning Projects</h1>
        <ul className="text-lg text-white">
          {projects.map(project => (
            <li key={project.id} className="py-1">{project.name}</li>
          ))}
        </ul>
      </div>

      {/* Black Strip to Hide "Built with Spline" */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black z-20"></div> {/* Added black strip */}
    </main>
  )
}

export default page
