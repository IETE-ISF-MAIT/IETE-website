import About from "@/components/landingPage/About";
import HeroSection from "@/components/landingPage/HeroSection";
import { WobbleCardDemo } from "@/components/landingPage/WobbleCardDemo";
import { AppleCardsCarouselDemo } from "@/components/landingPage/AppleCardsCarouselDemo";

export default function Home() {
    return (
        <>
            <div>
                <div className="flex flex-col justify-start items-center pt-6 md:pt-14">
                   
                    <HeroSection/>

                    <div>
                        <About />
                    </div>
                </div>
                <div className="mt-16">
                    <WobbleCardDemo/>
                </div>
            </div>
        </>
    );
}
