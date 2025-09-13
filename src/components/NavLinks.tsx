const navLinks: string[] = ["Home", "About", "Projects", "Contact"];

export default function NavLinks() {
    return (
        <ul className="flex flex-row gap-6 mr-12">
            {navLinks.map((link) => {
                const id = link === "Home" ? "hero" : link.toLowerCase();
                return (
                    <li key={link}>
                        <a href={`#${id}`}>{link}</a>
                    </li>
                );
            })}
        </ul>
    );
}
