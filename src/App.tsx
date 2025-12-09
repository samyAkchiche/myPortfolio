import Navbar from "./components/Navbar";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";
import { useState } from "react";
import IntroAnimation from "./components/ui/IntroAnimation";
import { Menu, X } from "lucide-react";

function App() {
    const [showContent, setShowContent] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const toggleSidebar = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className="overflow-hidden">
            <Navbar isOpened={isOpened} />
            {!isOpened ? (
                <Menu
                    className="top-0 right-0 absolute md:hidden cursor-pointer z-[60]"
                    size={50}
                    onClick={toggleSidebar}
                />
            ) : (
                <X
                    className="top-0 right-0 absolute md:hidden z-[60] cursor-pointer"
                    size={50}
                    onClick={toggleSidebar}
                />
            )}

            <IntroAnimation onAnimationEnd={() => setShowContent(true)} />
            <div
                className={`transition-all duration-1000 ${
                    showContent
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            >
                <div className="mx-64 max-xl:mx-46 max-lg:mx-32 max-md:mx-14 my-2 ">
                    <section id="hero">
                        <Hero />
                    </section>
                    <section
                        id="about"
                        className="px-44 max-lg:px-2 max-md:mb-10 flex justify-center items-center flex-col gap-4"
                    >
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
