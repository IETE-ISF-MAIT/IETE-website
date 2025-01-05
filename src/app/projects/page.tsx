import React from "react";
import Spline from "@splinetool/react-spline/next";
import { FocusCardsDemo } from "@/components/landingPage/FocusCardsDemo";

const Page = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[5%]">PROJECTS</h2>
            <section className="relative w-full min-h-screen  mt-[3%]">
                {/* Background video */}
                <div className="absolute inset-0 z-0 ">
                    <Spline scene="https://prod.spline.design/9GeBdj9FbEUtpsoc/scene.splinecode" />
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-black z-20"></div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-10 h-full overflow-hidden "></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-5">
                    <FocusCardsDemo />
                </div>
            </section>
        </>
    );
};

export default Page;
