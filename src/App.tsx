import Navbar from "./components/Navbar";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Resume from "./components/layouts/Resume";
import Projects from "./components/layouts/Projects";
import Contact from "./components/layouts/Contact";
import { useState } from "react";
import IntroAnimation from "./components/ui/IntroAnimation";
import { Menu, X } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function App() {
	const [showContent, setShowContent] = useState(false);
	const [isOpened, setIsOpened] = useState(false);

	const toggleSidebar = () => {
		setIsOpened(!isOpened);
	};

	return (
		<div className="overflow-x-clip">
			<div className="fixed inset-0 -z-[4] bg-[#0a0714]/30 pointer-events-none" />
			<ShaderGradientCanvas
				style={{ position: "fixed", inset: 0, zIndex: -5 }}
				pointerEvents="none"
			>
				<ShaderGradient
					control="query"
					urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%230d0918&bgColor2=%230d0918&brightness=0.7&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%231e3a9c&color2=%235a44c4&color3=%23141a55&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.05&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=3&uDensity=1.5&uFrequency=5.5&uSpeed=0.08&uStrength=2.4&uTime=8&wireframe=false"
				/>
			</ShaderGradientCanvas>
			<Navbar isOpened={isOpened} toggleSidebar={toggleSidebar} />
			{!isOpened ? (
				<Menu
					className="top-0 right-0 absolute md:hidden cursor-pointer z-[60] bg-custom-accent rounded-full p-4"
					size={60}
					onClick={toggleSidebar}
				/>
			) : (
				<X
					className="top-0 right-0 absolute md:hidden z-[60] cursor-pointer bg-custom-accent rounded-full p-3"
					size={60}
					onClick={toggleSidebar}
				/>
			)}

			<IntroAnimation onAnimationEnd={() => setShowContent(true)} />
			<div
				className={`transition-all duration-1000 ease-out ${
					showContent
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-4 pointer-events-none"
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
					<section id="experience">
						<Resume />
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
