import TSLogo from "../../assets/skillsLogos/TSLogo.svg";
import ReactLogo from "../../assets/skillsLogos/ReactLogo.svg";
import JSLogo from "../../assets/skillsLogos/JSLogo.svg";
import GithubLogo from "../../assets/skillsLogos/GithubLogo.svg";
import GitLogo from "../../assets/skillsLogos/GitLogo.svg";
import FigmaLogo from "../../assets/skillsLogos/FigmaLogo.svg";

const skillsLogo = [
    {
        img: TSLogo,
        text: "TypeScript",
        style: "h-auto w-14",
    },
    {
        img: JSLogo,
        text: "JavaScript",
        style: "h-auto w-14",
    },
    {
        img: ReactLogo,
        text: "React",
        style: "h-auto w-14",
    },
    {
        img: GitLogo,
        text: "Git",
        style: "h-auto w-14",
    },
    {
        img: GithubLogo,
        text: "Github",
        style: "h-auto w-14",
    },
    {
        img: FigmaLogo,
        text: "Figma",
        style: "h-auto w-8",
    },
];

export default function About() {
    return (
        <>
            <h1 className="text-4xl">About Me</h1>
            <p>
                I'm a Front-End Developer based in
                <span className="text-yellow-300"> Paris, France</span>, with
                <span className="text-yellow-300"> 3 years of experience </span>
                creating responsive and user-friendly web applications. I
                specialize in
                <span className="text-yellow-300"> JavaScript, React</span>, and
                modern UI frameworks, with a strong focus on
                <span className="text-yellow-300"> API integration</span> and
                <span className="text-yellow-300"> UX</span>. I'm passionate
                about building intuitive interfaces and always eager to learn
                new technologies.
            </p>
            <div className="bg-black/15 h-20 w-full flex flex-row gap-4 ">
                {skillsLogo.map((skillLogo, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center gap-2"
                    >
                        <img
                            src={skillLogo.img}
                            alt="Tech Logo Image"
                            className={skillLogo.style}
                        />
                        <p>{skillLogo.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
