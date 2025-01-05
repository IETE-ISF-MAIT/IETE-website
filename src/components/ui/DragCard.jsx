import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DragCards = () => {
    return (
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-transparent">
            <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
                IETE<span className="text-indigo-500">!</span>
            </h2>
            <Cards />
        </section>
    );
};

const Cards = () => {
    const containerRef = useRef(null);

    return (
        <div className="absolute inset-0 z-10" ref={containerRef}>
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165249_w1x6vq.jpg"
                alt="Example image"
                rotate="6deg"
                top="20%"
                left="25%"
                className="w-36 md:w-56"
            />
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165250_vhmrem.jpg"
                alt="Example image"
                rotate="12deg"
                top="60%"
                left="60%"
                className="w-34 md:w-48"
            />
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165252_lajahp.jpg"
                alt="Example image"
                rotate="-6deg"
                top="20%"
                left="40%"
                className="w-52 md:w-80"
            />
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165251_hew00a.jpg"
                alt="Example image"
                rotate="8deg"
                top="50%"
                left="40%"
                className="w-48 md:w-72"
            />
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165253_bdgj5x.jpg"
                alt="Example image"
                rotate="18deg"
                top="20%"
                left="65%"
                className="w-40 md:w-64"
            />
            <Card
                containerRef={containerRef}
                src="https://res.cloudinary.com/du0mba5mz/image/upload/v1729529117/IETE/Gallery/6104927383267165248_pjv4yh.jpg"
                alt="Example image"
                rotate="-3deg"
                top="35%"
                left="55%"
                className="w-24 md:w-48"
            />
        </div>
    );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
                className
            )}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
        />
    );
};

export default DragCards;