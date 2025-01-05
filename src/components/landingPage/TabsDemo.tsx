"use client";

import { Tabs } from "../ui/tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "GSOC, DevOps and OpenSource Event",
            value: "gsoc-devops-opensource",
            content: (
                <div className="w-[80%] overflow-hidden relative h-[75%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-violet-900">
                    <p>Join us for GSoC, DevOps, and Open Source Events—learn, innovate, and collaborate with experts!.<br></br>Speaker:Sudhanshu Dasgupta (Maintainer of Layers5 and CNCF)</p>
                    <p>Date: January 7, 2025</p>
                    <p>Do Join the Event to get the insights about</p>
                </div>
            ),
        },
        {
            title: "Core Team Recruitment Form 2024",
            value: "core-team-recruitment",
            content: (
                <div className="w-[80%] overflow-hidden relative h-[75%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Join the Core Team for the year 2024! We are looking for passionate individuals who want to make a difference.</p>
                    <p>Application Deadline: October 15, 2024</p>
                    <p>Apply now to be part of an exciting journey!</p>
                </div>
            ),
        },
        {
            title: "VLSI Verilog Seminar BY Arjun",
            value: "vlsi-seminar",
            content: (
                <div className="w-[80%] overflow-hidden relative h-[75%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-pink-500">
                    <p>Join us for an insightful seminar on VLSI Verilog presented by Arjun, an industry expert.</p>
                    <p>Date: September 19, 2024</p>
                    <p>Time: 10:00 AM</p>
                    <p>Location: Robotics Lab 402</p>
                </div>
            ),
        },
        {
            title: "NBA Visit - 2024",
            value: "nba-visit",
            content: (
                <div className="w-[80%] overflow-hidden relative h-[75%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-400 to-green-600">
                    <p>We are excited to announce a visit to the National Board of Accreditation (NBA) in 2024.</p>
                    <p>Application Deadline: October 15, 2024</p>
                    <p>This visit will provide insights into accreditation processes and standards.</p>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
            <Tabs tabs={tabs} />
        </div>
    );
}
