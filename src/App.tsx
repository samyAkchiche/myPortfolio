import { Routes, Route } from "react-router-dom";
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
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
