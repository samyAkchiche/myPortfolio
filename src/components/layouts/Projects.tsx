import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import quizImg from "../../assets/screenshots/onepieceQuiz-Screenshot.png";
import foodAppImg from "../../assets/screenshots/foodapp-fullScreenShot.png";
import littleLemonImg from "../../assets/screenshots/little-lemon-screenshot.png";
import PharmaceuticaImg from "../../assets/screenshots/Pharmaceutica-ScreenShot.png";
import squareIcon from "@/assets/icons/square-arrow-out-up-right.svg";
import { useEffect, useRef } from "react";

type CardInfo = {
    cardTitle: string;
    cardImage: string;
    cardImageAlt: string;
    cardTech: string[];
    cardDescription: string;
    cardLiveLink?: string;
    cardGithubLink: string;
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
    },
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY < 0 ? -100 : 100,
                behavior: "smooth",
            });
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, []);
    return (
        <>
            <h1 className="text-4xl my-6 text-center">My Projects</h1>
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
            >
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.cardTitle}
                            className="flex flex-col justify-between flex-shrink-0 w-80 h-auto snap-center shadow-md rounded-2xl overflow-hidden "
                        >
                            <CardHeader className="p-3 flex flex-col items-center">
                                <CardTitle className="text-lg font-semibold text-center mb-3">
                                    {card.cardTitle}
                                </CardTitle>
                                <img
                                    src={card.cardImage}
                                    alt={card.cardImageAlt}
                                    className="h-45 object-cover rounded-lg shadow-sm"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3">
                                    {card.cardDescription}
                                </CardDescription>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {card.cardTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between p-3 border-t text-sm mx-4">
                                <a
                                    href={card.cardGithubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-1"
                                >
                                    Github{" "}
                                    <img
                                        src={squareIcon}
                                        alt="redirect"
                                        className="h-auto w-4"
                                    />
                                </a>
                                {card.cardLiveLink ? (
                                    <a
                                        href={card.cardLiveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-1"
                                    >
                                        Live{" "}
                                        <img
                                            src={squareIcon}
                                            alt="redirect"
                                            className="h-auto w-4"
                                        />
                                    </a>
                                ) : (
                                    <p>Coming soon!</p>
                                )}
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}
