import TSLogo from "../../assets/skillsLogos/TSLogo.svg";
import ReactLogo from "../../assets/skillsLogos/ReactLogo.svg";
import JSLogo from "../../assets/skillsLogos/JSLogo.svg";
import GithubLogo from "../../assets/skillsLogos/GithubLogo.svg";
import GitLogo from "../../assets/skillsLogos/GitLogo.svg";
import TailwindLogo from "../../assets/skillsLogos/TailwindLogo.svg";
import FigmaLogo from "../../assets/skillsLogos/FigmaLogo.svg";
import HtmlLogo from "../../assets/skillsLogos/HtmlLogo.svg";
import SassLogo from "../../assets/skillsLogos/SassLogo.svg";
import PythonLogo from "../../assets/skillsLogos/PythonLogo.svg";
import BootstrapLogo from "../../assets/skillsLogos/BootStrapLogo.svg";
import JestLogo from "../../assets/skillsLogos/JestLogo.svg";
import Reveal from "@/components/ui/Reveal";

const skillGroups = [
	{
		title: "Front-end",
		items: [
			{ img: HtmlLogo, name: "HTML" },
			{ img: JSLogo, name: "JavaScript" },
			{ img: TSLogo, name: "TypeScript" },
			{ img: ReactLogo, name: "React" },
			{ img: TailwindLogo, name: "Tailwind" },
			{ img: SassLogo, name: "Sass" },
			{ img: BootstrapLogo, name: "Bootstrap" },
		],
	},
	{
		title: "Tools & workflow",
		items: [
			{ img: GitLogo, name: "Git" },
			{ img: GithubLogo, name: "GitHub" },
			{ img: FigmaLogo, name: "Figma" },
			{ img: JestLogo, name: "Jest" },
			{ img: PythonLogo, name: "Python" },
		],
	},
];

export default function About() {
	return (
		<>
			<Reveal>
			<h1 className="section-title text-4xl mb-7 max-md:text-3xl">About Me</h1>
			<p>
				I'm a Front-End Developer based in
				<span className="text-custom-secondary-text">
					{" "}
					Paris, France
				</span>
				, with
				<span className="text-custom-secondary-text">
					{" "}
					3 years of experience{" "}
				</span>
				creating responsive and user-friendly web applications. I
				specialize in
				<span className="text-custom-secondary-text">
					{" "}
					JavaScript, React
				</span>
				, and modern UI frameworks, with a strong focus on
				<span className="text-custom-secondary-text">
					{" "}
					API integration
				</span>{" "}
				and
				<span className="text-custom-secondary-text"> UX</span>. I'm
				passionate about building intuitive interfaces and always eager
				to learn new technologies. Alongside my front-end work, I'm
				completing a degree in English (LLCER) at Université Paris
				Nanterre and joining the Master in Digital Creation &amp;
				Experience (CEN) at Université Paris 8 in September 2026. This
				dual background lets me combine technical skills with
				communication and intercultural experience.
			</p>
			</Reveal>

			<h1 className="section-title mt-10 text-4xl mb-2 max-md:text-3xl">My Technologies</h1>
			<p className="mb-6 text-custom-secondary-text">
				The tools I reach for to design, build and ship interfaces.
			</p>
			<div className="flex w-full flex-col gap-8">
				{skillGroups.map((group, gi) => (
					<Reveal key={group.title} delay={gi * 100}>
						<div className="mb-3 flex items-center gap-3">
							<h2 className="text-sm uppercase tracking-[0.2em] text-custom-secondary-text">
								{group.title}
							</h2>
							<span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
						</div>
						<ul className="flex flex-wrap justify-center gap-3">
							{group.items.map((item) => (
								<li
									key={item.name}
									className="glass group flex w-[calc(33.333%-0.5rem)] flex-col items-center gap-3 rounded-2xl px-2 py-5 sm:w-[calc(25%-0.6rem)]"
								>
									<span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 p-2.5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
										<img src={item.img} alt="" className="h-full w-full object-contain" />
									</span>
									<span className="text-sm">{item.name}</span>
								</li>
							))}
						</ul>
					</Reveal>
				))}
			</div>
		</>
	);
}
