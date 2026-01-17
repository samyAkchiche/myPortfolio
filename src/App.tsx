import Navbar from "./components/Navbar";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
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
		<div className="overflow-hidden">
			<ShaderGradientCanvas
				style={{ position: "fixed", inset: 0, zIndex: -5 }}
				pointerEvents="none"
			>
				<ShaderGradient
					control="query"
					urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"
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
