import React from "react";
import NumberTicker from "../magicui/NumberTicker";
import { IconCloudDemo } from "./IconCloudDemo";

interface CardProps {
    image: string;
    label: string;
    value: number;
}

const Card: React.FC<CardProps> = ({ image, label, value }) => {
    return (
        <div className="flex flex-col items-center space-y-5 bg-transparent p-6 rounded-none shadow-lg w-full lg:w-[250px] h-[350px]">
            <img src={image} alt={label} className="w-25 h-25 -mb-3" />
            <div className="flex items-center text-4xl font-bold justify-center h-full">
                <div>
                    <NumberTicker className="text-white" value={value} />
                </div>
                <span className="ml-2 text-3xl">+</span>
            </div>
            <div className="text-sm lg:text-xl font-medium">{label}</div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[10%]">ABOUT</h2>
            <div className="flex flex-col lg:flex-row text-white px-4 lg:px-16 py-8 bg-black  items-center">
                <div className="flex-1 lg:pr-8">
                    <p className="text-center text-lg lg:text-xl leading-relaxed">
                        IETE - MAIT is a leading technical society committed to
                        promoting innovation, knowledge sharing, and skill
                        development in electronics and telecommunications. Our
                        mission is to equip students with advanced technical
                        skills and offer a platform for personal and
                        professional growth.
                    </p>
                </div>
                <div className="flex-1 lg:flex lg:justify-center lg:items-start mt-8 lg:mt-0">
                    <IconCloudDemo />
                </div>
            </div>
            <div className="mt-10 text-white flex flex-col lg:flex-row lg:justify-between lg:text-2xl gap-8 lg:gap-10 px-10 lg:px-16">
                <Card image="/Hero/members.png" label="MEMBERS" value={80} />
                <Card
                    image="/Hero/colab.png"
                    label="COLLABORATIONS"
                    value={20}
                />
                <Card image="/Hero/time.png" label="YEARS" value={1} />
                <Card
                    image="/Hero/paricipants.png"
                    label="PARTICIPANTS"
                    value={50}
                />
            </div>
        </>
    );
};

export default About;
