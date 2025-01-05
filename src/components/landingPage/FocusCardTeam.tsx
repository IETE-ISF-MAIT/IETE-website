import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsTeam() {
    const cards = [
        {
            title: "Chairperson",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729453985/IETE/Teams/1_qcdjtr.png",
            href: "", // Ensure this is the correct path
        },
        {
            title: "Vice Chairperson",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729453986/IETE/Teams/2_bpbxxi.png",
            href: "", // Ensure this is the correct path
        },
        {
            title: "General Secretary",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452842/IETE/Teams/2_sxqovh.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "Joint Secretary",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452791/IETE/Teams/3_eiyaun.png",
            href: "", // Ensure this is the correct path
        },
        {
            title: "Finance Secretary",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452791/IETE/Teams/4_yxymlc.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "Socail Media and Graphics Head",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452791/IETE/Teams/5_ddqlym.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "Content Head",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452792/IETE/Teams/6_noxdt6.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "PR Head",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452792/IETE/Teams/7_uxolov.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "Operations Head",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452792/IETE/Teams/8_nk7vua.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "Technical Head",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452794/IETE/Teams/9_vdg3ey.png",
            href: "", // Change to an appropriate route
        },
        {
            title: "4th Year Mentors",
            src: "https://res.cloudinary.com/du0mba5mz/image/upload/v1729452839/IETE/Teams/10_nxmuvd.png",
            href: "", // Change to an appropriate route
        },
    ];

    return <FocusCards cards={cards} />;
}
