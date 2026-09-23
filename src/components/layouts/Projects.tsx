import quizImg from "../../assets/screenshots/onepieceQuiz-Screenshot.png";
import foodAppImg from "../../assets/screenshots/foodapp-fullScreenShot.png";
import littleLemonImg from "../../assets/screenshots/little-lemon-screenshot.png";
import PharmaceuticaImg from "../../assets/screenshots/Pharmaceutica-ScreenShot.png";
import onePieceQuizVid from "@/assets/Vids/onePieceQuizVid.webm";
import littleLemonVid from "@/assets/Vids/littleLemonVid.webm";
import foodAppVid from "@/assets/Vids/foodAppVid.webm";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type CardInfo = {
	cardTitle: string;
	cardImage: string;
	cardImageAlt: string;
	cardTech: string[];
	cardDescription: string;
	cardLiveLink?: string;
	cardGithubLink: string;
	cardHoverVid?: string;
};

const cards: CardInfo[] = [
	{
		cardTitle: "One Piece Quiz",
		cardImage: quizImg,
		cardImageAlt: "One Piece Quiz's website screenshot ",
		cardTech: ["HTML", "CSS", "Javascript", "Firebase", "JSON"],
		cardDescription:
			"Welcome to SamyQuiz-OnePiece — a fun and engaging trivia game built for fans of the One Piece anime and manga series! This app challenges players with a series of multiple-choice questions that test their knowledge of the One Piece world — from characters and story arcs to epic battles and hidden lore.",
		cardLiveLink: "https://onepiece-quiz-2022.web.app/",
		cardGithubLink: "https://github.com/samyAkchiche/SamyQuiz-OnePiece",
		cardHoverVid: onePieceQuizVid,
	},
	{
		cardTitle: "FoodApp",
		cardImage: foodAppImg,
		cardImageAlt: "FoodApp's website screenshot ",
		cardTech: ["React", "Javascript", "Css", "HTML", "Spoonacular API"],
		cardDescription:
			"FoodApp is a user-friendly platform designed to help food enthusiasts discover delicious recipes and cooking inspiration. Whether you're looking for a quick meal or exploring new culinary ideas, this app provides an intuitive interface to browse, explore, and get detailed instructions for a wide variety of recipes.",
		cardLiveLink: "https://samy-foodapp.netlify.app/",
		cardGithubLink: "https://github.com/samyAkchiche/FoodApp",
		cardHoverVid: foodAppVid,
	},
	{
		cardTitle: "Pharmaceutica",
		cardImage: PharmaceuticaImg,
		cardImageAlt: "Pharmaceutica's website screenshot ",
		cardTech: ["React", "TailwindCss", "Javascript", "Shadcn"],
		cardDescription:
			"Pharmaceutica is an innovative platform designed to transform the pharmaceutical industry. Focused on reliability and efficiency, it provides advanced tools for managing transactions, products, and clients within a comprehensive warehouse tracking system.",
		//! No deployement for the moment //
		cardGithubLink: "https://github.com/yanissiammour/Pharmaceutica",
		// ! No video yet
	},
	{
		cardTitle: "Little Lemon Restaurant",
		cardImage: littleLemonImg,
		cardImageAlt: "Little Lemon Restaurant's website screenshot ",
		cardTech: [
			"React",
			"CSS",
			"Javascript",
			"Jest",
			"HTML",
			"React-testing-library",
		],
		cardDescription:
			"This repository contains the source code for the Little Lemon restaurant website, a responsive web application built with React. The project provides a modern, user-friendly online presence for the restaurant, featuring key information, weekly specials, customer testimonials, and a fully functional table reservation system.",
		cardLiveLink: "https://littlelemonrestaurantbysamy.netlify.app/",
		cardGithubLink: "https://github.com/samyAkchiche/little-lemon",
		cardHoverVid: littleLemonVid,
	},
];


function ProjectCard({ card, index }: { card: CardInfo; index: number }) {
	const video = useRef<HTMLVideoElement | null>(null);
	const play = () => video.current?.play().catch(() => {});
	const stop = () => {
		if (video.current) {
			video.current.pause();
			video.current.currentTime = 0;
		}
	};

	return (
		<div
			className="mb-10 md:sticky md:mb-40 last:mb-0"
			style={{ top: `${6 + index * 1.5}rem` }}
		>
			<Reveal>
				<article
					onMouseEnter={play}
					onMouseLeave={stop}
					className="grid gap-8 rounded-3xl border border-white/15 bg-[#150f27] p-6 shadow-[0_-12px_40px_rgba(0,0,0,0.6)] md:grid-cols-[1fr_1.15fr] md:p-8"
				>
					<div className="flex flex-col justify-between gap-6 text-left">
						<div>
							<span className="text-gradient font-jacques text-6xl leading-none">
								0{index + 1}
							</span>
							<h3 className="mt-4 text-3xl font-jacques">{card.cardTitle}</h3>
							<p className="mt-4 text-white/75 leading-relaxed line-clamp-5">
								{card.cardDescription}
							</p>
							<ul className="mt-5 flex flex-wrap gap-2">
								{card.cardTech.map((tech) => (
									<li
										key={tech}
										className="rounded-full bg-white/10 px-3 py-1 text-xs text-custom-secondary-text"
									>
										{tech}
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-wrap gap-3 text-sm">
							{card.cardLiveLink ? (
								<a
									href={card.cardLiveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary inline-flex items-center gap-1"
								>
									Live site <ArrowUpRight size={16} />
								</a>
							) : (
								<span className="btn-ghost opacity-70">Coming soon</span>
							)}
							<a
								href={card.cardGithubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-ghost inline-flex items-center gap-1"
							>
								Source <ArrowUpRight size={16} />
							</a>
						</div>
					</div>

					<div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/15 bg-black/30">
						<img
							src={card.cardImage}
							alt={card.cardImageAlt}
							className="h-full w-full object-cover object-top"
						/>
						{card.cardHoverVid && (
							<video
								ref={video}
								src={card.cardHoverVid}
								muted
								loop
								playsInline
								preload="none"
								className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 [article:hover_&]:opacity-100"
							/>
						)}
					</div>
				</article>
			</Reveal>
		</div>
	);
}

export default function Projects() {
	return (
		<>
			<h1 className="section-title centered block w-fit mx-auto text-4xl my-6 text-center max-md:text-3xl">
				My Projects
			</h1>
			<p className="mb-10 text-center text-custom-secondary-text">
				A few things I've built — hover a card to see it in action.
			</p>
			<div>
				{cards.map((card, i) => (
					<ProjectCard key={card.cardTitle} card={card} index={i} />
				))}
			</div>
		</>
	);
}
