import { Link } from "react-router-dom";

const navLinks: string[] = ["Home", "About", "Projects", "Contact"];

export default function NavLinks() {
    return (
        <ul className="flex flex-row gap-6 mr-12">
            {navLinks.map((link) => (
                <li key={link}>
                    <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
