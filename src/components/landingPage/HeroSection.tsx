import React from "react";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {
    return (
        <section className="relative w-[100%] h-screen overflow-hidden mt-[-2%]">
            {/* Overlay for the background */}
            <div className="absolute inset-0 bg-black opacity-40"></div>


            <Image
               className="absolute inset-0 z-0 w-full h-full object-cover md:w-[95%] md:h-[100%] mx-auto"
               src="/Hero/backgound.png"
               width={1200}
               height={1200}
               alt=""
            />

            {/* Spline Component */}
            {/*<Spline
                scene="https://prod.spline.design/JiFhMQ4I1hqBxQGn/scene.splinecode" 
                className="absolute inset-0 z-0"
            />/*}

            {/* Black strip to hide "Built with Spline" */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black z-10"></div> {/* Added black strip */}

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    IETE MAIT
                </h1>
                <p className="text-lg md:text-2xl max-w-xl">
                    Explore amazing content and experience the future with us.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
