import React from 'react';
import Spline from '@splinetool/react-spline/next'; // Import Spline

const page = () => {
  return (
    <main className="relative h-screen w-screen overflow-auto"> {/* Set height and width to full screen */}
      {/* New Spline Component as Background */}
      <Spline
        scene="https://prod.spline.design/lzTS0u7WLY1App2Z/scene.splinecode" 
        className="absolute inset-0 z-0" // Ensure it fills the main area
      />
      
      {/* Content Overlay */}
      <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full p-4">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">List of Selected Members for IETE - MAIT</h1>
        <ul className="text-lg text-white text-center overflow-y-auto max-h-[70vh]">
          <li>Shourya Agrawal - 2nd</li>
          <li>Gunjan - 3rd</li>
          <li>Jatin Rana - 1st</li>
          <li>Abhay Anand Jha - 2nd</li>
          <li>Aakash Sharma - 3rd</li>
          <li>Tiya Arora - 1st</li>
          <li>Siddharth Singhal - 1st</li>
          <li>Yavi Gupta - 2nd</li>
          <li>Sachin Kumar Jha - 1st</li>
          <li>Yuv Gupta - 2nd</li>
          <li>Pranav Aggarwal - 1st</li>
          <li>Tanu Singh - 1st</li>
          <li>Nishchay Saluja - 1st</li>
          <li>Aditya Sharma - 2nd</li>
          <li>Veeraj Ghalyan - 1st</li>
          <li>Veer Dabas - 1st</li>
          <li>Paarth Chhabra - 1st</li>
          <li>Punit Kundalia - 3rd</li>
          <li>Jiya Kumari - 1st</li>
          <li>Chaitanya - 1st</li>
          <li>Ashish Jain - 3rd</li>
          <li>Sujal Kumar - 3rd</li>
          <li>Vansh - 3rd</li>
          <li>Devansh Phuttela - 1st</li>
          <li>Krish Goel - 1st</li>
          <li>Rakshit Sharma - 1st</li>
          <li>Harshita Gupta - 2nd</li>
          <li>Anuj Sharma - 2nd</li>
          <li>Yashica Jindal - 1st</li>
          <li>Shaurya - 2nd</li>
          <li>Mantavy Singh - 2nd</li>
          <li>Vivaan Sihmar - 1st</li>
          <li>Khushi Dadwal - 2nd</li>
          <li>Dhruv Sharma - 2nd</li>
          <li>Akshita Chawla - 3rd</li>
          <li>Kshitiz Jain - 1st</li>
          <li>Sharad - 1st</li>
          <li>Priyansh Verma - 1st</li>
          <li>Taal Chawla - 2nd</li>
          <li>Dhruv Gupta - 2nd</li>
          <li>Ruchir - 2nd</li>
          <li>Aishi - 1st</li>
          <li>Rishi - 1st</li>
          <li>Aditya Pandey - 1st</li>
          <li>Ansh Chaudhary - 1st</li>
          <li>Kareena Grover - 1st</li>
          <li>Krishna Aggarwal - 1st</li>
          <li>Ishan Mittal - 2nd</li>
          <li>Saksham Jain - 1st</li>
          <li>Abhishek - 1st</li>
          <li>Chittral Rastogi - 1st</li>
          <li>Sriram Challa - 2nd</li>
          <li>Rajiv Ranjan Kumar - 2nd</li>
          <li>Sanchit Bhojwani - 2nd</li>
          <li>Yash Mehra - 2nd</li>
          <li>Dharaya Bansal - 1st</li>
          <li>Arnav Gupta - 2nd</li>
          <li>Abhinav Srivastava - 1st</li>
          <li>Priyanshu Pradeep - 2nd</li>
          <li>Vibhav Kapoor - 2nd</li>
          <li>Hardik Sharma - 2nd</li>
          <li>Pari Goel - 1st</li>
          <li>Melvin Joseph - 1st</li>
          <li>Sanskaar Thukral - 3rd</li>
        </ul>
      </div>

      {/* Black Strip to Hide "Built with Spline" */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black z-20"></div> {/* Added black strip */}
    </main>
  );
}

export default page;
