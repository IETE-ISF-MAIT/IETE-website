import { FocusCardsTeam } from "@/components/landingPage/FocusCardTeam";
import SquareCard from "@/components/ui/TeamCard";
import React from "react";

export default function Team() {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mt-[5%] mb-[5%]">
                Our Team
            </h2>
            <div>
                <div className="flex justify-center space-x-20 mt-10">
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155533_gelxlk.jpg"
                        name="Manasvi Sinha"
                        designation="Chairperson"
                        iconLink="https://www.linkedin.com/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155552_xmlay1.jpg"
                        name="Ansh Tiwari"
                        designation="Vice Chairperson"
                        iconLink="https://www.linkedin.com/in/ansh-tiwari-892038256/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155702_yenneo.jpg"
                        name="Dhvani Rana"
                        designation="General Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                </div>

                <div className="flex justify-center space-x-20 mt-10">
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155610_elthsv.jpg"
                        name="Ritika Gupta"
                        designation="Joint Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                    <SquareCard
                        imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155627_p490na.jpg"
                        name="Priyanshu Raj"
                        designation="Finance Secretary"
                        iconLink="https://www.linkedin.com/"
                    />
                </div>
            </div>
            <div className="flex justify-around">
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Technical Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730025364/IETE/New%20Team/Photo_ok5ljn.jpg"
                            name="Vrishank Sharma"
                            designation="Technical Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024158/IETE/New%20Team/Screenshot_2024-10-27_154626_t29uzu.jpg"
                            name="Arjun"
                            designation="Technical Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Social Media & Graphics Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729776175/IETE/New%20Team/6109303001459049515_see19j.jpg"
                            name="Prem sai"
                            designation="Social Media & Graphics Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024043/IETE/New%20Team/Screenshot_2024-10-27_154522_o9vm7c.jpg"
                            name="Shrey Kothari"
                            designation="Social Media & Graphics Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="mt-40">
                    <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                        <b>Content Heads</b>
                    </h2>
                    <div className="flex justify-start space-x-20 mt-4">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729693675/IETE/New%20Team/6109303001459049518_hrzdp2.jpg"
                            name="Dhwani Bali"
                            designation="Content Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024158/IETE/New%20Team/Screenshot_2024-10-27_154716_lta9zo.jpg"
                            name="Akshita Chawla"
                            designation="Content Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="mt-40">
                        <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                            <b>Operations Heads</b>
                        </h2>
                        <div className="flex justify-start space-x-20 mt-4">
                            <SquareCard
                                imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729693675/IETE/New%20Team/6109303001459049516_pzrk7n.jpg"
                                name="Ishaan Garg"
                                designation="Operations Head"
                                iconLink="https://www.linkedin.com/"
                            />
                            <SquareCard
                                imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024290/IETE/New%20Team/Screenshot_2024-10-27_154916_hags1d.jpg"
                                name="Ojas Aggarwal"
                                designation="Operations Head"
                                iconLink="https://www.linkedin.com/"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-40">
                <h2 className="text-transparent bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-xl text-center mb-12">
                    <b>PR Heads</b>
                </h2>
                <div className="flex flex-col items-center mt-4">
                    <div className="flex justify-center space-x-20">
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729693676/IETE/New%20Team/6109303001459049517_gghaya.jpg"
                            name="Pranav Bansal"
                            designation="PR Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1729693675/IETE/New%20Team/6109303001459049519_k14idv.jpg"
                            name="Nishchay Kapoor"
                            designation="PR Head"
                            iconLink="https://www.linkedin.com/"
                        />
                        <SquareCard
                            imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155512_oeydzv.jpg"
                            name="Ansh Mittal"
                            designation="PR Head"
                            iconLink="https://www.linkedin.com/"
                        />
                    </div>
                    {/* <div className="mt-4">
                            <SquareCard
                                imageUrl="https://res.cloudinary.com/du0mba5mz/image/upload/v1730024748/IETE/New%20Team/Screenshot_2024-10-27_155512_oeydzv.jpg"
                                name="Ansh Mittal"
                                designation="PR Head"
                                iconLink="https://www.linkedin.com/"
                            />
                        </div> */}
                </div>
            </div>
        </>
    );
}
