import Navbar from "./components/Navbar";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";

function App() {
    return (
        <>
            <Navbar />
            <div className="mx-56 my-2">
                <section id="Home">
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
        </>
    );
}

export default App;
