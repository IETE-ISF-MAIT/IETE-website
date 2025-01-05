
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

interface CardProps {
    imageUrl: string;
    name: string; // lowercase prop name for consistency
    designation: string; // lowercase prop name for consistency
    iconLink: string;
}

const SquareCard: React.FC<CardProps> = ({
    imageUrl,
    name,
    designation,
    iconLink,
}) => {
    return (
        <div className="w-64 h-64 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group">
            {/* Background Image */}
            <div
                className="w-full h-full rounded-lg bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-50 group-hover:translate-x-[-25%] group-hover:translate-y-[25%]"
                style={{ backgroundImage: `url(${imageUrl})` }}
                role="img"
                aria-label={`Image of ${name}`}
            />

            {/* Hidden Text */}
            <div className="absolute inset-0 flex items-center justify-start top-[10%] flex-col">
                <p className="text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-xl leading-loose text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <b>{name}</b>
                </p>
                <p className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    {designation}
                </p>
            </div>
            <div className="absolute inset-0 flex items-end justify-center top-[70%] left-[70%]">
                <div className="absolute inset-0 flex">
                    <Link href={iconLink}>
                        <p className="text-blue-600 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <FaLinkedin />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SquareCard;
