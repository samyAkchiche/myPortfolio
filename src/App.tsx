import Navbar from "./components/Navbar";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";
import { useState } from "react";
import IntroAnimation from "./components/ui/IntroAnimation";

function App() {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="overflow-hidden">
            <Navbar />
            <IntroAnimation onAnimationEnd={() => setShowContent(true)} />
            <div
                className={`transition-all duration-1000 ${
                    showContent
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            >
                <div className="mx-56 my-2">
                    <section id="Home" className="">
                        <Hero />
                    </section>
                    <section
                        id="About"
                        className="px-45 flex justify-center items-center flex-col gap-4"
                    >
                        <About />
                    </section>
                    <section id="Projects">
                        <Projects />
                    </section>
                    <section id="Contact">
                        <Contact />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
