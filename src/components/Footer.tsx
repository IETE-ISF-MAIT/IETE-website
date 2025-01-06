import React from "react";
import {
    FaEnvelope,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaGithub,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-gray-800 py-10 text-white mt-[10%]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start  md:px-10 lg:px-20">
                <Link href="/">
                    <img
                        src="/Hero/logo.jpg"
                        alt="Logo"
                        className="w-[30%] h-[30%] mb-4 object-contain rounded-[50%]"
                    />
                </Link>
                {/* Contact Information */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                    <Link
                        href="https://maps.app.goo.gl/F29Jf2VedYtwBCY56"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center mb-4 hover:text-red-400 transition-colors">
                            <FaMapMarkerAlt className="mr-2" />
                            <p className="text-base">
                                Maharaja Agrasen Institute of Technology
                            </p>
                        </div>
                    </Link>
                    <Link href="mailto:contact@iete-mait@gmail.com">
                        <div className="flex items-center mb-4 hover:text-red-400 transition-colors">
                            <FaEnvelope className="mr-2" />
                            <p className="text-base">iete@gmail.com</p>
                        </div>
                    </Link>
                    <Link href="tel:+91123456789">
                        <div className="flex items-center hover:text-red-400 transition-colors">
                            <FaPhone className="mr-2" />
                            <p className="text-base">+91 1234567890</p>
                        </div>
                    </Link>
                </div>

                {/* Social Media Links */}
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 mb-4">
                        <Link
                            href="https://www.instagram.com/iete_mait/?igsh=YXByZWs5b2V6Y3J1&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={24}
                                className="hover:text-red-400 transition-colors"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/iete-mait/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                size={24}
                                className="hover:text-blue-400 transition-colors"
                            />
                        </Link>
                        <Link
                            href="https://github.com/IETE-ISF-MAIT"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub
                                size={24}
                                className="hover:text-gray-500 transition-colors"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="border-t border-gray-700 my-5" />

            <div className="text-center text-sm">
                &copy; {new Date().getFullYear()} IETE - MAIT. All rights
                reserved.
            </div>
            <hr className="border-t border-gray-700 my-5" />

            <div className="text-center text-sm">
                Made with &hearts; by Technical Team, IETE MAIT
            </div>
        </footer>
    );
}

export default Footer;
