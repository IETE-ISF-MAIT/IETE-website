"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-10">WHAT WE OFFER</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Promoting Technical Excellence
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            The Institution of Electronics and Telecommunication
                            Engineers (IETE) is dedicated to fostering the
                            growth and development of professionals in the
                            fields of electronics and telecommunications.
                        </p>
                    </div>
                    <Image
                        src="/Hero/technical-excellence.png"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-4  grayscale filter -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Advocacy and Industry Collaboration
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        IETE serves as a vital link between professionals,
                        academia, and industry stakeholders. By engaging in
                        policy advocacy and promoting industry collaboration,
                        the institution helps shape the future of electronics
                        and telecommunications in India
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Supporting Professional Development
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            IETE emphasizes continuous learning and professional
                            development for its members. Through various
                            certification programs, training sessions, and
                            resources, the institution equips engineers with the
                            skills necessary to thrive in a rapidly evolving
                            technological landscape.
                        </p>
                    </div>
                    <Image
                        src="/Hero/profdev.png"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute  md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </>
    );
}
